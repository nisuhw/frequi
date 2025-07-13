import{a2 as B,ae as x,c as p,a as c,a5 as k,Q as d,m as D,e as g,d as M,r as W,u as H,p as U,E as K,K as j,b as z,s as q,f as h,i as Q,x as L,F as J,v as Z,J as G,y as $,q as y,j as X,t as Y,B as tt,af as E,ag as et,ah as at,ai as O,aj as P,ak as nt,al as A,am as rt,an as T,ao as st,ap as I,aq as R,Z as N,ar as S,as as it,at as ot,au as w,h as lt}from"./index-BoH2X4lE.js";import{a as ct,b as dt}from"./InfoBox.vue_vue_type_script_setup_true_lang-BPU9KVxe.js";var ut=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
    }

    .p-tabs-scrollable > .p-tablist {
        overflow: hidden;
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        background: dt('tabs.tablist.background');
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`,bt={root:function(t){var a=t.props;return["p-tabs p-component",{"p-tabs-scrollable":a.scrollable}]}},pt=B.extend({name:"tabs",style:ut,classes:bt}),ft={name:"BaseTabs",extends:x,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:pt,provide:function(){return{$pcTabs:this,$parentInstance:this}}},ht={name:"Tabs",extends:ft,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t}},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function vt(e,t,a,r,l,n){return c(),p("div",d({class:e.cx("root")},e.ptmi("root")),[k(e.$slots,"default")],16)}ht.render=vt;var mt={root:"p-tabpanels"},gt=B.extend({name:"tabpanels",classes:mt}),yt={name:"BaseTabPanels",extends:x,props:{},style:gt,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},kt={name:"TabPanels",extends:yt,inheritAttrs:!1};function $t(e,t,a,r,l,n){return c(),p("div",d({class:e.cx("root"),role:"presentation"},e.ptmi("root")),[k(e.$slots,"default")],16)}kt.render=$t;const Tt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};function wt(e,t){return c(),p("svg",Tt,t[0]||(t[0]=[g("path",{fill:"currentColor",d:"M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"},null,-1)]))}const Bt=D({name:"mdi-lock",render:wt}),xt={class:"divide-y divide-surface-300 dark:divide-surface-700 divide-solid border-x border-y rounded-sm border-surface-300 dark:border-surface-700"},_t=["title","onClick"],Ct=["title"],Pt=M({__name:"PairSummary",props:{pairlist:{required:!0,type:Array},currentLocks:{required:!1,type:Array,default:()=>[]},trades:{required:!0,type:Array},sortMethod:{default:"normal",type:String},backtestMode:{required:!1,default:!1,type:Boolean},startingBalance:{required:!1,type:Number,default:0}},setup(e){const t=W(""),a=e,r=H(),l=U(()=>{const n=[];return a.pairlist.forEach(s=>{const i=a.trades.filter(f=>f.pair===s),u=a.currentLocks.filter(f=>f.pair===s);let v="",b;u.sort((f,F)=>f.lock_end_timestamp>F.lock_end_timestamp?-1:1),u.length>0&&([b]=u,v=`${K(b.lock_end_timestamp)} - ${b.side} - ${b.reason}`);let o="",m=0,_=0;i.forEach(f=>{m+=f.profit_ratio,_+=f.profit_abs??0}),a.sortMethod=="profit"&&a.startingBalance&&(m=_/a.startingBalance);const V=i.length,C=V?i[0]:void 0;i.length>0&&(o=`Current profit: ${j(m)}`),C&&(o+=`
Open since: ${K(C.open_timestamp)}`),(t.value===""||s.toLocaleLowerCase().includes(t.value.toLocaleLowerCase()))&&n.push({pair:s,trade:C,locks:b,lockReason:v,profitString:o,profit:m,profitAbs:_,tradeCount:V})}),a.sortMethod==="profit"?n.sort((s,i)=>s.profit>i.profit?-1:1):n.sort((s,i)=>s.trade&&!i.trade?-1:s.trade&&i.trade?s.trade.trade_id>i.trade.trade_id?1:-1:!s.locks&&i.locks?-1:s.locks&&i.locks?s.locks.lock_end_timestamp>i.locks.lock_end_timestamp?1:-1:1),n});return(n,s)=>{const i=q,u=Bt,v=ct,b=dt;return c(),p("div",null,[g("div",{"label-for":"trade-filter",class:L(["mb-2",{"me-4":e.backtestMode,"me-2":!e.backtestMode}])},[z(i,{id:"trade-filter",modelValue:h(t),"onUpdate:modelValue":s[0]||(s[0]=o=>Q(t)?t.value=o:null),type:"text",placeholder:"Filter",class:"w-full"},null,8,["modelValue"])],2),g("ul",xt,[(c(!0),p(J,null,Z(h(l),o=>(c(),p("li",{key:o.pair,button:"",class:L(["flex cursor-pointer last:rounded-b justify-between items-center px-1 py-1.5",{"bg-primary dark:border-primary text-primary-contrast":o.pair===h(r).activeBot.selectedPair}]),title:`${("formatPriceCurrency"in n?n.formatPriceCurrency:h(G))(o.profitAbs,h(r).activeBot.stakeCurrency,h(r).activeBot.stakeCurrencyDecimals)} - ${o.pair} - ${o.tradeCount} trades`,onClick:m=>h(r).activeBot.selectedPair=o.pair},[g("div",null,[X(Y(o.pair)+" ",1),o.locks?(c(),p("span",{key:0,title:o.lockReason},[z(u)],8,Ct)):y("",!0)]),o.trade&&!e.backtestMode?(c(),$(v,{key:0,trade:o.trade},null,8,["trade"])):y("",!0),e.backtestMode&&o.tradeCount>0?(c(),$(b,{key:1,"profit-ratio":o.profit,"stake-currency":h(r).activeBot.stakeCurrency},null,8,["profit-ratio","stake-currency"])):y("",!0)],10,_t))),128))])])}}}),jt=tt(Pt,[["__scopeId","data-v-a7bbb5d1"]]);var Lt={root:"p-tablist",content:function(t){var a=t.instance;return["p-tablist-content",{"p-tablist-viewport":a.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},At=B.extend({name:"tablist",classes:Lt}),Nt={name:"BaseTabList",extends:x,props:{},style:At,provide:function(){return{$pcTabList:this,$parentInstance:this}}},St={name:"TabList",extends:Nt,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;setTimeout(function(){t.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,a=this.getVisibleButtonWidths(),r=P(t)-a,l=Math.abs(t.scrollLeft),n=r*.8,s=l-n,i=Math.max(s,0);t.scrollLeft=I(t)?-1*i:i},onNextButtonClick:function(){var t=this.$refs.content,a=this.getVisibleButtonWidths(),r=P(t)-a,l=Math.abs(t.scrollLeft),n=r*.8,s=l+n,i=t.scrollWidth-r,u=Math.min(s,i);t.scrollLeft=I(t)?-1*u:u},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,a=t.content,r=t.inkbar,l=t.tabs;if(r){var n=A(a,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(r.style.height=rt(n)+"px",r.style.top=T(n).top-T(l).top+"px"):(r.style.width=st(n)+"px",r.style.left=T(n).left-T(l).left+"px")}},updateButtonState:function(){var t=this.$refs,a=t.list,r=t.content,l=r.scrollTop,n=r.scrollWidth,s=r.scrollHeight,i=r.offsetWidth,u=r.offsetHeight,v=Math.abs(r.scrollLeft),b=[P(r),nt(r)],o=b[0],m=b[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=l!==0,this.isNextButtonEnabled=a.offsetHeight>=u&&parseInt(l)!==s-m):(this.isPrevButtonEnabled=v!==0,this.isNextButtonEnabled=a.offsetWidth>=i&&parseInt(v)!==n-o)},getVisibleButtonWidths:function(){var t=this.$refs,a=t.prevButton,r=t.nextButton,l=0;return this.showNavigators&&(l=(a?.offsetWidth||0)+(r?.offsetWidth||0)),l}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return O({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:at,ChevronRightIcon:et},directives:{ripple:E}},Vt=["data-p"],Kt=["aria-label","tabindex"],zt=["data-p"],It=["aria-orientation"],Et=["aria-label","tabindex"];function Ot(e,t,a,r,l,n){var s=R("ripple");return c(),p("div",d({ref:"list",class:e.cx("root"),"data-p":n.dataP},e.ptmi("root")),[n.showNavigators&&l.isPrevButtonEnabled?N((c(),p("button",d({key:0,ref:"prevButton",type:"button",class:e.cx("prevButton"),"aria-label":n.prevButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return n.onPrevButtonClick&&n.onPrevButtonClick.apply(n,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(c(),$(S(n.templates.previcon||"ChevronLeftIcon"),d({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,Kt)),[[s]]):y("",!0),g("div",d({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)}),"data-p":n.dataP},e.ptm("content")),[g("div",d({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":n.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[k(e.$slots,"default"),g("span",d({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,It)],16,zt),n.showNavigators&&l.isNextButtonEnabled?N((c(),p("button",d({key:1,ref:"nextButton",type:"button",class:e.cx("nextButton"),"aria-label":n.nextButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return n.onNextButtonClick&&n.onNextButtonClick.apply(n,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(c(),$(S(n.templates.nexticon||"ChevronRightIcon"),d({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,Et)),[[s]]):y("",!0)],16,Vt)}St.render=Ot;var Rt={root:function(t){var a=t.instance,r=t.props;return["p-tab",{"p-tab-active":a.active,"p-disabled":r.disabled}]}},Ft=B.extend({name:"tab",classes:Rt}),Dt={name:"BaseTab",extends:x,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Ft,provide:function(){return{$pcTab:this,$parentInstance:this}}},Mt={name:"Tab",extends:Dt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var a=this.findNextTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var a=this.findPrevTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var a=this.findFirstTab();this.changeFocusedTab(t,a),t.preventDefault()},onEndKey:function(t){var a=this.findLastTab();this.changeFocusedTab(t,a),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=a?t:t.nextElementSibling;return r?w(r,"data-p-disabled")||w(r,"data-pc-section")==="activebar"?this.findNextTab(r):A(r,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=a?t:t.previousElementSibling;return r?w(r,"data-p-disabled")||w(r,"data-pc-section")==="activebar"?this.findPrevTab(r):A(r,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,a){ot(a),this.scrollInView(a)},scrollInView:function(t){var a;t==null||(a=t.scrollIntoView)===null||a===void 0||a.call(t,{block:"nearest"})}},computed:{active:function(){var t;return it((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tabpanel_").concat(this.value)},attrs:function(){return d(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return O({active:this.active})}},directives:{ripple:E}};function Wt(e,t,a,r,l,n){var s=R("ripple");return e.asChild?k(e.$slots,"default",{key:1,dataP:n.dataP,class:L(e.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick}):N((c(),$(S(e.as),d({key:0,class:e.cx("root"),"data-p":n.dataP,onClick:n.onClick},n.attrs),{default:lt(function(){return[k(e.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[s]])}Mt.render=Wt;export{jt as _,St as a,Mt as b,kt as c,ht as s};
//# sourceMappingURL=index-C8bGernt.js.map
