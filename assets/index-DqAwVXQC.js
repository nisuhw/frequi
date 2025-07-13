import{a2 as v,ae as y,c as i,a as p,a5 as $,Q as c,d as E,r as _,o as P,Y as q,w as M,e as b,y as h,f as d,s as F,i as W,x as j,q as g,F as x,b as o,g as O,h as u,ac as Q,G as R,_ as T}from"./index-DvLAGnun.js";import{_ as U}from"./check-B2xX33QO.js";import{_ as Y}from"./plus-box-outline-BuK5eruA.js";import{_ as H}from"./content-copy-D-cj8dx4.js";var J=`
    .p-inputgroup,
    .p-inputgroup .p-iconfield,
    .p-inputgroup .p-floatlabel,
    .p-inputgroup .p-iftalabel {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup .p-inputtext,
    .p-inputgroup .p-inputwrapper {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-inputgroupaddon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('inputgroup.addon.padding');
        background: dt('inputgroup.addon.background');
        color: dt('inputgroup.addon.color');
        border-block-start: 1px solid dt('inputgroup.addon.border.color');
        border-block-end: 1px solid dt('inputgroup.addon.border.color');
        min-width: dt('inputgroup.addon.min.width');
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
        border-inline-start: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:last-child {
        border-inline-end: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:has(.p-button) {
        padding: 0;
        overflow: hidden;
    }

    .p-inputgroupaddon .p-button {
        border-radius: 0;
    }

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iconfield > .p-component,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroup > .p-component:first-child,
    .p-inputgroup > .p-inputwrapper:first-child > .p-component,
    .p-inputgroup > .p-iconfield:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroupaddon:last-child,
    .p-inputgroup > .p-component:last-child,
    .p-inputgroup > .p-inputwrapper:last-child > .p-component,
    .p-inputgroup > .p-iconfield:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup .p-component:focus,
    .p-inputgroup .p-component.p-focus,
    .p-inputgroup .p-inputwrapper-focus,
    .p-inputgroup .p-component:focus ~ label,
    .p-inputgroup .p-component.p-focus ~ label,
    .p-inputgroup .p-inputwrapper-focus ~ label {
        z-index: 1;
    }

    .p-inputgroup > .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
        border-inline-start: 0;
    }
`,K={root:"p-inputgroup"},L=v.extend({name:"inputgroup",style:J,classes:K}),X={name:"BaseInputGroup",extends:y,style:L,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},Z={name:"InputGroup",extends:X,inheritAttrs:!1};function nn(n,m,r,a,e,t){return p(),i("div",c({class:n.cx("root")},n.ptmi("root")),[$(n.$slots,"default")],16)}Z.render=nn;var en={root:"p-inputgroupaddon"},tn=v.extend({name:"inputgroupaddon",classes:en}),on={name:"BaseInputGroupAddon",extends:y,style:tn,provide:function(){return{$pcInputGroupAddon:this,$parentInstance:this}}},pn={name:"InputGroupAddon",extends:on,inheritAttrs:!1};function rn(n,m,r,a,e,t){return p(),i("div",c({class:n.cx("root")},n.ptmi("root")),[$(n.$slots,"default")],16)}pn.render=rn;const an={class:"grow"},yn=E({__name:"EditValue",props:{modelValue:{type:String,required:!0},allowEdit:{type:Boolean,default:!1},allowAdd:{type:Boolean,default:!1},allowDuplicate:{type:Boolean,default:!1},editableName:{type:String,required:!0},alignVertical:{type:Boolean,default:!1}},emits:["delete","new","duplicate","rename"],setup(n,{emit:m}){const r=n,a=m,e=_(""),t=_(0);P(()=>{e.value=r.modelValue});function S(){t.value=0,e.value=r.modelValue}function V(){e.value=e.value+" (copy)",t.value=3}function B(){e.value="",t.value=2}q(()=>r.modelValue,()=>{e.value=r.modelValue});function k(){t.value===2?a("new",e.value):t.value===3?a("duplicate",r.modelValue,e.value):a("rename",r.modelValue,e.value),t.value=0}return(w,s)=>{const N=F,A=Q,l=O,I=H,C=R,z=Y,G=U,D=T;return p(),i("form",{class:"flex flex-row",onSubmit:M(k,["prevent"])},[b("div",an,[d(t)===0?$(w.$slots,"default",{key:0}):(p(),h(N,{key:1,modelValue:d(e),"onUpdate:modelValue":s[0]||(s[0]=f=>W(e)?e.value=f:null),size:"small",fluid:""},null,8,["modelValue"]))]),b("div",{class:j(["mt-auto flex gap-1 ms-1",n.alignVertical?"flex-col":"flex-row"])},[n.allowEdit&&d(t)===0?(p(),i(x,{key:0},[o(l,{size:"small",severity:"secondary",title:`Edit this ${n.editableName}.`,onClick:s[1]||(s[1]=f=>t.value=1)},{icon:u(()=>[o(A)]),_:1},8,["title"]),n.allowDuplicate?(p(),h(l,{key:0,size:"small",severity:"secondary",title:`Duplicate ${n.editableName}.`,onClick:V},{icon:u(()=>[o(I)]),_:1},8,["title"])):g("",!0),o(l,{size:"small",severity:"secondary",title:`Delete this ${n.editableName}.`,onClick:s[2]||(s[2]=f=>w.$emit("delete",n.modelValue))},{icon:u(()=>[o(C)]),_:1},8,["title"])],64)):g("",!0),n.allowAdd&&d(t)===0?(p(),h(l,{key:1,size:"small",title:`Add new ${n.editableName}.`,severity:"primary",onClick:B},{icon:u(()=>[o(z)]),_:1},8,["title"])):g("",!0),d(t)!==0?(p(),i(x,{key:2},[o(l,{size:"small",title:`Add new ${n.editableName}`,severity:"primary",onClick:k},{icon:u(()=>[o(G)]),_:1},8,["title"]),o(l,{size:"small",title:"Abort",severity:"secondary",onClick:S},{icon:u(()=>[o(D)]),_:1})],64)):g("",!0)],2)],32)}}});var sn=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`,ln={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},un=v.extend({name:"progressspinner",style:sn,classes:ln}),dn={name:"BaseProgressSpinner",extends:y,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:un,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},cn={name:"ProgressSpinner",extends:dn,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},mn=["fill","stroke-width"];function gn(n,m,r,a,e,t){return p(),i("div",c({class:n.cx("root"),role:"progressbar"},n.ptmi("root")),[(p(),i("svg",c({class:n.cx("spin"),viewBox:"25 25 50 50",style:t.svgStyle},n.ptm("spin")),[b("circle",c({class:n.cx("circle"),cx:"50",cy:"50",r:"20",fill:n.fill,"stroke-width":n.strokeWidth,strokeMiterlimit:"10"},n.ptm("circle")),null,16,mn)],16))],16)}cn.render=gn;export{yn as _,pn as a,cn as b,Z as s};
//# sourceMappingURL=index-DqAwVXQC.js.map
