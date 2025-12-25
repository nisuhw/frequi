<script setup lang="ts">
import LoginModal from '@/components/LoginModal.vue';

import type { AuthStorageWithBotId, BotDescriptor } from '@/types';
import { useSortable } from '@vueuse/integrations/useSortable';
import { useConfirm } from 'primevue/useconfirm';

defineProps<{
  small?: boolean;
}>();

const botStore = useBotStore();

const editingBots = ref<string[]>([]);
const loginModal = ref<typeof LoginModal>();
const sortContainer = ref<HTMLElement | null>(null);
const botListComp = computed<BotDescriptor[]>(() => {
  //Convert to array
  return botStore.availableBotsSorted;
});

useSortable(sortContainer, botListComp, {
  handle: '.handle',
  onUpdate: (e) => {
    const oldBotId = botListComp.value[e.oldIndex]?.botId;
    const newBotId = botListComp.value[e.newIndex]?.botId;
    if (oldBotId && newBotId) {
      botStore.updateBot(oldBotId, { sortId: e.newIndex });
      botStore.updateBot(newBotId, { sortId: e.oldIndex });
    }
  },
});

function editBot(botId: string) {
  if (!editingBots.value.includes(botId)) {
    editingBots.value.push(botId);
  }
}

function editBotLogin(botId: string) {
  const bot = botStore.botStores[botId];
  if (!bot) {
    console.error('Bot not found');
    return;
  }
  const loginInfo: AuthStorageWithBotId = {
    ...bot.getLoginInfo(),
    botId,
  };
  loginModal.value?.openLoginModal(loginInfo);
}

function stopEditBot(botId: string) {
  if (!editingBots.value.includes(botId)) {
    return;
  }

  editingBots.value.splice(editingBots.value.indexOf(botId), 1);
}

const confirm = useConfirm();

function clearAll() {
  confirm.require({
    message: 'Are you sure you want to remove all bots? This cannot be undone.',
    header: 'Clear All Bots',
    icon: 'pi pi-exclamation-triangle',
    rejectLabel: 'Cancel',
    acceptLabel: 'Delete',
    rejectClass: 'p-button-secondary p-button-outlined',
    acceptClass: 'p-button-danger',
    accept: () => {
      botStore.clearAllBots();
    },
  });
}

const { open: openFilePicker, onChange: onFileChange } = useFileDialog({
  accept: '.json',
  multiple: false,
});

onFileChange(async (files) => {
  const file = files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async (e) => {
    try {
      const bots = JSON.parse(e.target?.result as string);
      if (Array.isArray(bots)) {
        let importedCount = 0;
        for (const botData of bots) {
          const botId = botStore.nextBotId;
          const { login, initializeBot } = useLoginInfo(botId);

          // Persist basic info immediately so it survives refresh
          initializeBot({
            botName: botData.botName,
            apiUrl: botData.url,
            username: botData.username,
            accessToken: '',
            refreshToken: '',
            autoRefresh: true,
            sortId: Object.keys(botStore.availableBots).length + 1,
          });

          // Always add the bot to the store first
          const sortId = Object.keys(botStore.availableBots).length + 1;
          botStore.addBot({
            botName: botData.botName,
            botId,
            botUrl: botData.url,
            sortId,
          });
          importedCount++;

          // Attempt login in the background/separately
          try {
            await login({
              botName: botData.botName,
              url: botData.url,
              username: botData.username,
              password: botData.password,
            });
            console.log(`Successfully logged in bot: ${botData.botName}`);
          } catch (err) {
            console.error(`Failed to login bot ${botData.botName}`, err);
          }
        }
        botStore.allRefreshFull();
        showAlert(`Successfully imported ${importedCount} bots`, 'success');
      }
    } catch (err) {
      showAlert(`Failed to parse JSON: ${err}`, 'error');
      console.error('Failed to parse JSON', err);
    }
  };
  reader.readAsText(file);
});

function triggerImport() {
  openFilePicker();
}
</script>

<template>
  <div class="w-full mx-2">
    <h3 v-if="!small" class="font-bold text-2xl mb-2">Available bots</h3>
    <ul
      ref="sortContainer"
      class="flex flex-col divide-y border-x border-surface-500 rounded-sm border-y divide-solid divide-surface-500"
    >
      <li
        v-for="bot in botListComp"
        :key="bot.botId"
        :active="bot.botId === botStore.selectedBot"
        button
        :title="`${bot.botId} - ${bot.botName} - ${bot.botUrl} - ${
          botStore.botStores[bot.botId]?.isBotLoggedIn ? '' : 'Login info expired!'
        }`"
        class="flex items-center p-2"
        :class="{
          'bg-primary-100 dark:bg-primary-800 underline font-semibold':
            bot.botId === botStore.selectedBot,
        }"
        @click="botStore.selectBot(bot.botId)"
      >
        <i-mdi-reorder-horizontal v-if="!small" class="handle cursor-pointer me-2 fs-4" />
        <BotRename
          v-if="editingBots.includes(bot.botId)"
          :bot="bot"
          @saved="stopEditBot(bot.botId)"
          @cancelled="stopEditBot(bot.botId)"
        />

        <BotEntry
          v-else
          :bot="bot"
          :no-buttons="small"
          @edit="editBot(bot.botId)"
          @edit-login="editBotLogin(bot.botId)"
        />
      </li>
    </ul>
    <div v-if="!small" class="flex flex-col gap-2 mt-4">
      <div class="flex gap-2 justify-center">
        <LoginModal ref="loginModal" login-text="Add new bot" />
        <Button label="Import Bots" severity="info" @click="triggerImport">
          <template #icon>
            <i-mdi-upload />
          </template>
        </Button>
        <Button label="Clear All" severity="danger" @click="clearAll">
          <template #icon>
            <i-mdi-delete-sweep />
          </template>
        </Button>
      </div>
    </div>
  </div>
</template>
