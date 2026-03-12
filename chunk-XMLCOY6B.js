import{d as Ze,e as je,f as se}from"./chunk-72AH3KZO.js";import{a as tt}from"./chunk-C5PCETIW.js";import{$ as T,$a as w,$b as qe,A as Te,Aa as K,Ab as J,Ba as U,Bc as q,Cc as k,Da as Be,Ea as O,Fa as d,Gc as ue,Hb as X,Hc as le,Ic as Ge,Jc as Ue,Kd as be,La as h,M as te,N as G,Nb as Ne,Ob as M,P as Me,Pb as R,R as B,Ta as s,U as p,Ua as f,Uc as Qe,V as b,Va as _,Vc as Z,W as C,Wa as I,Xb as ze,Xc as We,Y as ke,Yb as re,Za as De,Zc as Je,Zd as it,_a as L,_c as ce,_d as _e,a as he,ab as ie,ac as ae,b as xe,bb as H,bc as N,cc as Y,cd as D,da as V,db as $,dd as de,ea as Se,eb as a,ed as Xe,fb as Fe,fd as pe,gb as Ve,gd as Ye,h as ye,ha as A,hb as Ae,hd as et,ib as Ke,ja as Pe,jb as y,ka as Le,kb as v,lb as Q,ld as nt,na as ne,oa as we,ob as W,pb as l,qa as u,qb as oe,rb as Oe,sb as He,ua as Ee,va as P,vc as z,w as ve,wc as E,x as Ce,xb as $e,yb as Re,zc as me}from"./chunk-5HCUZNYA.js";var ct=["data-p-icon","bars"],rt=(()=>{class o extends Ye{static \u0275fac=(()=>{let e;return function(n){return(e||(e=A(o)))(n||o)}})();static \u0275cmp=K({type:o,selectors:[["","data-p-icon","bars"]],features:[O],attrs:ct,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(t,n){t&1&&(C(),De(0,"path",0))},encapsulation:2})}return o})();var at=`
    .p-menubar {
        display: flex;
        align-items: center;
        background: dt('menubar.background');
        border: 1px solid dt('menubar.border.color');
        border-radius: dt('menubar.border.radius');
        color: dt('menubar.color');
        padding: dt('menubar.padding');
        gap: dt('menubar.gap');
    }

    .p-menubar-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-menubar-root-list,
    .p-menubar-submenu {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
    }

    .p-menubar-root-list {
        align-items: center;
        flex-wrap: wrap;
        gap: dt('menubar.gap');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
        border-radius: dt('menubar.base.item.border.radius');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.base.item.padding');
    }

    .p-menubar-item-content {
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration');
        border-radius: dt('menubar.item.border.radius');
        color: dt('menubar.item.color');
    }

    .p-menubar-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menubar.item.padding');
        gap: dt('menubar.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menubar-item-label {
        line-height: 1;
    }

    .p-menubar-item-icon {
        color: dt('menubar.item.icon.color');
    }

    .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.color');
        margin-left: auto;
        font-size: dt('menubar.submenu.icon.size');
        width: dt('menubar.submenu.icon.size');
        height: dt('menubar.submenu.icon.size');
    }

    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-item.p-focus > .p-menubar-item-content {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item-active > .p-menubar-item-content {
        color: dt('menubar.item.active.color');
        background: dt('menubar.item.active.background');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.active.color');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.active.color');
    }

    .p-menubar-submenu {
        display: none;
        position: absolute;
        min-width: 12.5rem;
        z-index: 1;
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        border-radius: dt('menubar.submenu.border.radius');
        box-shadow: dt('menubar.submenu.shadow');
        color: dt('menubar.submenu.color');
        flex-direction: column;
        padding: dt('menubar.submenu.padding');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-submenu .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-submenu .p-menubar-item {
        position: relative;
    }

    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('menubar.mobile.button.size');
        height: dt('menubar.mobile.button.size');
        position: relative;
        color: dt('menubar.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('menubar.mobile.button.border.radius');
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration'),
            outline-color dt('menubar.transition.duration');
        outline-color: transparent;
    }

    .p-menubar-button:hover {
        color: dt('menubar.mobile.button.hover.color');
        background: dt('menubar.mobile.button.hover.background');
    }

    .p-menubar-button:focus-visible {
        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');
        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');
        outline-offset: dt('menubar.mobile.button.focus.ring.offset');
    }

    .p-menubar-mobile {
        position: relative;
    }

    .p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        padding: dt('menubar.submenu.padding');
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        box-shadow: dt('menubar.submenu.shadow');
        border-radius: dt('menubar.submenu.border.radius');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.item.padding');
    }

    .p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {
        width: 100%;
        position: static;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-90deg);
    }

    .p-menubar-mobile .p-menubar-submenu {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('menubar.submenu.mobile.indent');
        padding-inline-end: 0;
    }
`;var mt=(o,m)=>({instance:o,processedItem:m}),dt=()=>({exact:!1}),pt=(o,m)=>({$implicit:o,root:m});function bt(o,m){if(o&1&&I(0,"li",6),o&2){let e=a().$implicit,t=a();W(t.getItemProp(e,"style")),l(t.cn(t.cx("separator"),e==null?null:e.styleClass)),s("pBind",t.ptm("separator")),h("id",t.getItemId(e))}}function _t(o,m){if(o&1&&I(0,"span",17),o&2){let e=a(4),t=e.$implicit,n=e.index,i=a();l(i.cn(i.cx("itemIcon"),i.getItemProp(t,"icon"),i.getItemProp(t,"iconClass"))),s("ngStyle",i.getItemProp(t,"iconStyle"))("pBind",i.getPTOptions(t,n,"itemIcon")),h("tabindex",-1)}}function It(o,m){if(o&1&&(f(0,"span",18),oe(1),_()),o&2){let e=a(4),t=e.$implicit,n=e.index,i=a();l(i.cn(i.cx("itemLabel"),i.getItemProp(t,"labelClass"))),s("ngStyle",i.getItemProp(t,"labelStyle"))("id",i.getItemLabelId(t))("pBind",i.getPTOptions(t,n,"itemLabel")),u(),He(" ",i.getItemLabel(t)," ")}}function ft(o,m){if(o&1&&I(0,"span",19),o&2){let e=a(4),t=e.$implicit,n=e.index,i=a();l(i.cn(i.cx("itemLabel"),i.getItemProp(t,"labelClass"))),s("ngStyle",i.getItemProp(t,"labelStyle"))("innerHTML",i.getItemLabel(t),ne)("id",i.getItemLabelId(t))("pBind",i.getPTOptions(t,n,"itemLabel"))}}function gt(o,m){if(o&1&&I(0,"p-badge",20),o&2){let e=a(4),t=e.$implicit,n=e.index,i=a();l(i.getItemProp(t,"badgeStyleClass")),s("value",i.getItemProp(t,"badge"))("pt",i.getPTOptions(t,n,"pcBadge"))("unstyled",i.unstyled())}}function ht(o,m){if(o&1&&(C(),I(0,"svg",24)),o&2){let e=a(6),t=e.$implicit,n=e.index,i=a();l(i.cx("submenuIcon")),s("pBind",i.getPTOptions(t,n,"submenuIcon"))}}function xt(o,m){if(o&1&&(C(),I(0,"svg",25)),o&2){let e=a(6),t=e.$implicit,n=e.index,i=a();l(i.cx("submenuIcon")),s("pBind",i.getPTOptions(t,n,"submenuIcon"))}}function yt(o,m){if(o&1&&(L(0),d(1,ht,1,3,"svg",22)(2,xt,1,3,"svg",23),w()),o&2){let e=a(6);u(),s("ngIf",e.root),u(),s("ngIf",!e.root)}}function vt(o,m){}function Ct(o,m){o&1&&d(0,vt,0,0,"ng-template")}function Tt(o,m){if(o&1&&(L(0),d(1,yt,3,2,"ng-container",9)(2,Ct,1,0,null,21),w()),o&2){let e=a(5);u(),s("ngIf",!e.submenuiconTemplate),u(),s("ngTemplateOutlet",e.submenuiconTemplate)}}function Mt(o,m){if(o&1&&(f(0,"a",13),d(1,_t,1,5,"span",14)(2,It,2,6,"span",15)(3,ft,1,6,"ng-template",null,1,X)(5,gt,1,5,"p-badge",16)(6,Tt,3,2,"ng-container",9),_()),o&2){let e=Q(4),t=a(3),n=t.$implicit,i=t.index,r=a();l(r.cn(r.cx("itemLink"),r.getItemProp(n,"linkClass"))),s("ngStyle",r.getItemProp(n,"linkStyle"))("pBind",r.getPTOptions(n,i,"itemLink")),h("href",r.getItemProp(n,"url"),we)("data-automationid",r.getItemProp(n,"automationId"))("title",r.getItemProp(n,"title"))("target",r.getItemProp(n,"target"))("tabindex",-1),u(),s("ngIf",r.getItemProp(n,"icon")),u(),s("ngIf",r.getItemProp(n,"escape"))("ngIfElse",e),u(3),s("ngIf",r.getItemProp(n,"badge")),u(),s("ngIf",r.isItemGroup(n))}}function kt(o,m){if(o&1&&I(0,"span",17),o&2){let e=a(4),t=e.$implicit,n=e.index,i=a();l(i.cn(i.cx("itemIcon"),i.getItemProp(t,"icon"),i.getItemProp(t,"iconClass"))),s("ngStyle",i.getItemProp(t,"iconStyle"))("pBind",i.getPTOptions(t,n,"itemIcon")),h("tabindex",-1)}}function St(o,m){if(o&1&&(f(0,"span",17),oe(1),_()),o&2){let e=a(4),t=e.$implicit,n=e.index,i=a();l(i.cn(i.cx("itemLabel"),i.getItemProp(t,"labelClass"))),s("ngStyle",i.getItemProp(t,"labelStyle"))("pBind",i.getPTOptions(t,n,"itemLabel")),u(),Oe(i.getItemLabel(t))}}function Pt(o,m){if(o&1&&I(0,"span",28),o&2){let e=a(4),t=e.$implicit,n=e.index,i=a();l(i.cn(i.cx("itemLabel"),i.getItemProp(t,"labelClass"))),s("ngStyle",i.getItemProp(t,"labelStyle"))("innerHTML",i.getItemLabel(t),ne)("pBind",i.getPTOptions(t,n,"itemLabel"))}}function Lt(o,m){if(o&1&&I(0,"p-badge",20),o&2){let e=a(4),t=e.$implicit,n=e.index,i=a();l(i.getItemProp(t,"badgeStyleClass")),s("value",i.getItemProp(t,"badge"))("pt",i.getPTOptions(t,n,"pcBadge"))("unstyled",i.unstyled())}}function wt(o,m){if(o&1&&(C(),I(0,"svg",24)),o&2){let e=a(6),t=e.$implicit,n=e.index,i=a();l(i.cx("submenuIcon")),s("pBind",i.getPTOptions(t,n,"submenuIcon"))}}function Et(o,m){if(o&1&&(C(),I(0,"svg",25)),o&2){let e=a(6),t=e.$implicit,n=e.index,i=a();l(i.cx("submenuIcon")),s("pBind",i.getPTOptions(t,n,"submenuIcon"))}}function Bt(o,m){if(o&1&&(L(0),d(1,wt,1,3,"svg",22)(2,Et,1,3,"svg",23),w()),o&2){let e=a(6);u(),s("ngIf",e.root),u(),s("ngIf",!e.root)}}function Dt(o,m){}function Ft(o,m){o&1&&d(0,Dt,0,0,"ng-template")}function Vt(o,m){if(o&1&&(L(0),d(1,Bt,3,2,"ng-container",9)(2,Ft,1,0,null,21),w()),o&2){let e=a(5);u(),s("ngIf",!e.submenuiconTemplate),u(),s("ngTemplateOutlet",e.submenuiconTemplate)}}function At(o,m){if(o&1&&(f(0,"a",26),d(1,kt,1,5,"span",14)(2,St,2,5,"span",27)(3,Pt,1,5,"ng-template",null,2,X)(5,Lt,1,5,"p-badge",16)(6,Vt,3,2,"ng-container",9),_()),o&2){let e=Q(4),t=a(3),n=t.$implicit,i=t.index,r=a();l(r.cn(r.cx("itemLink"),r.getItemProp(n,"linkClass"))),s("routerLink",r.getItemProp(n,"routerLink"))("queryParams",r.getItemProp(n,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",r.getItemProp(n,"routerLinkActiveOptions")||Re(23,dt))("target",r.getItemProp(n,"target"))("ngStyle",r.getItemProp(n,"linkStyle"))("fragment",r.getItemProp(n,"fragment"))("queryParamsHandling",r.getItemProp(n,"queryParamsHandling"))("preserveFragment",r.getItemProp(n,"preserveFragment"))("skipLocationChange",r.getItemProp(n,"skipLocationChange"))("replaceUrl",r.getItemProp(n,"replaceUrl"))("state",r.getItemProp(n,"state"))("pBind",r.getPTOptions(n,i,"itemLink")),h("data-automationid",r.getItemProp(n,"automationId"))("title",r.getItemProp(n,"title"))("tabindex",-1),u(),s("ngIf",r.getItemProp(n,"icon")),u(),s("ngIf",r.getItemProp(n,"escape"))("ngIfElse",e),u(3),s("ngIf",r.getItemProp(n,"badge")),u(),s("ngIf",r.isItemGroup(n))}}function Kt(o,m){if(o&1&&(L(0),d(1,Mt,7,14,"a",11)(2,At,7,24,"a",12),w()),o&2){let e=a(2).$implicit,t=a();u(),s("ngIf",!t.getItemProp(e,"routerLink")),u(),s("ngIf",t.getItemProp(e,"routerLink"))}}function Ot(o,m){}function Ht(o,m){o&1&&d(0,Ot,0,0,"ng-template")}function $t(o,m){if(o&1&&(L(0),d(1,Ht,1,0,null,29),w()),o&2){let e=a(2).$implicit,t=a();u(),s("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",J(2,pt,e.item,t.root))}}function Rt(o,m){if(o&1){let e=H();f(0,"ul",30),$("itemClick",function(n){p(e);let i=a(3);return b(i.itemClick.emit(n))})("itemMouseEnter",function(n){p(e);let i=a(3);return b(i.onItemMouseEnter(n))}),_()}if(o&2){let e=a(2).$implicit,t=a();s("itemTemplate",t.itemTemplate)("items",e.items)("mobileActive",t.mobileActive)("autoDisplay",t.autoDisplay)("menuId",t.menuId)("activeItemPath",t.activeItemPath)("focusedItemId",t.focusedItemId)("level",t.level+1)("inlineStyles",t.sx("submenu",!0,J(13,mt,t,e)))("pt",t.pt())("pBind",t.ptm("submenu"))("unstyled",t.unstyled()),h("aria-labelledby",t.getItemLabelId(e))}}function Nt(o,m){if(o&1){let e=H();f(0,"li",7,0)(2,"div",8),$("click",function(n){p(e);let i=a().$implicit,r=a();return b(r.onItemClick(n,i))})("mouseenter",function(n){p(e);let i=a().$implicit,r=a();return b(r.onItemMouseEnter({$event:n,processedItem:i}))}),d(3,Kt,3,2,"ng-container",9)(4,$t,2,5,"ng-container",9),_(),d(5,Rt,1,16,"ul",10),_()}if(o&2){let e=a(),t=e.$implicit,n=e.index,i=a();W(i.getItemProp(t,"style")),l(i.cn(i.cx("item",J(23,mt,i,t)),i.getItemProp(t,"styleClass"))),s("pBind",i.getPTOptions(t,n,"item"))("tooltipOptions",i.getItemProp(t,"tooltipOptions"))("pTooltipUnstyled",i.unstyled()),h("id",i.getItemId(t))("data-p-highlight",i.isItemActive(t))("data-p-focused",i.isItemFocused(t))("data-p-disabled",i.isItemDisabled(t))("aria-label",i.getItemLabel(t))("aria-disabled",i.isItemDisabled(t)||void 0)("aria-haspopup",i.isItemGroup(t)&&!i.getItemProp(t,"to")?"menu":void 0)("aria-expanded",i.isItemGroup(t)?i.isItemActive(t):void 0)("aria-setsize",i.getAriaSetSize())("aria-posinset",i.getAriaPosInset(n)),u(2),l(i.cx("itemContent")),s("pBind",i.getPTOptions(t,n,"itemContent")),u(),s("ngIf",!i.itemTemplate),u(),s("ngIf",i.itemTemplate),u(),s("ngIf",i.isItemVisible(t)&&i.isItemGroup(t))}}function zt(o,m){if(o&1&&d(0,bt,1,6,"li",4)(1,Nt,6,26,"li",5),o&2){let e=m.$implicit,t=a();s("ngIf",t.isItemVisible(e)&&t.getItemProp(e,"separator")),u(),s("ngIf",t.isItemVisible(e)&&!t.getItemProp(e,"separator"))}}var qt=["start"],Zt=["end"],jt=["item"],Gt=["menuicon"],Ut=["submenuicon"],Qt=["menubutton"],Wt=["rootmenu"],Jt=["*"];function Xt(o,m){o&1&&ie(0)}function Yt(o,m){if(o&1&&(f(0,"div",7),d(1,Xt,1,0,"ng-container",8),_()),o&2){let e=a();l(e.cx("start")),s("pBind",e.ptm("start")),u(),s("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function en(o,m){if(o&1&&(C(),I(0,"svg",11)),o&2){let e=a(2);s("pBind",e.ptm("buttonIcon"))}}function tn(o,m){}function nn(o,m){o&1&&d(0,tn,0,0,"ng-template")}function on(o,m){if(o&1){let e=H();f(0,"a",9,2),$("click",function(n){p(e);let i=a();return b(i.menuButtonClick(n))})("keydown",function(n){p(e);let i=a();return b(i.menuButtonKeydown(n))}),d(2,en,1,1,"svg",10)(3,nn,1,0,null,8),_()}if(o&2){let e=a();l(e.cx("button")),s("pBind",e.ptm("button")),h("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation),u(2),s("ngIf",!e.menuIconTemplate&&!e._menuIconTemplate),u(),s("ngTemplateOutlet",e.menuIconTemplate||e._menuIconTemplate)}}function rn(o,m){o&1&&ie(0)}function an(o,m){if(o&1&&(f(0,"div",7),d(1,rn,1,0,"ng-container",8),_()),o&2){let e=a();l(e.cx("end")),s("pBind",e.ptm("end")),u(),s("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}function sn(o,m){if(o&1&&(f(0,"div"),Ve(1),_()),o&2){let e=a();l(e.cx("end"))}}var mn={submenu:({instance:o,processedItem:m})=>({display:o.isItemActive(m)?"flex":"none"})},un={root:({instance:o})=>["p-menubar p-component",{"p-menubar-mobile":o.queryMatches(),"p-menubar-mobile-active":o.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:o,processedItem:m})=>["p-menubar-item",{"p-menubar-item-active":o.isItemActive(m),"p-focus":o.isItemFocused(m),"p-disabled":o.isItemDisabled(m)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},Ie=(()=>{class o extends We{name="menubar";style=at;classes=un;inlineStyles=mn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=A(o)))(n||o)}})();static \u0275prov=te({token:o,factory:o.\u0275fac})}return o})();var st=new Me("MENUBAR_INSTANCE"),fe=(()=>{class o{autoHide;autoHideDelay;mouseLeaves=new ye;mouseLeft$=this.mouseLeaves.pipe(Te(()=>ve(this.autoHideDelay)),Ce(e=>this.autoHide&&e));static \u0275fac=function(t){return new(t||o)};static \u0275prov=te({token:o,factory:o.\u0275fac})}return o})(),ln=(()=>{class o extends ce{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new T;itemMouseEnter=new T;menuFocus=new T;menuBlur=new T;menuKeydown=new T;mouseLeaveSubscriber;menubarService=B(fe);_componentStyle=B(Ie);hostName="Menubar";onInit(){this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.itemClick.emit({originalEvent:e,processedItem:t,isFocus:!0})}getItemProp(e,t,n=null){return e&&e.item?le(e.item[t],n):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getItemLabelId(e){return`${this.menuId}_${e.key}_label`}getItemLabel(e){return this.getItemProp(e,"label")}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){return this.activeItemPath?this.activeItemPath.some(t=>t.key===e.key):!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return k(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1}onItemMouseEnter(e){if(this.autoDisplay){let{event:t,processedItem:n}=e;this.itemMouseEnter.emit({originalEvent:t,processedItem:n})}}getPTOptions(e,t,n){return this.ptm(n,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=A(o)))(n||o)}})();static \u0275cmp=K({type:o,selectors:[["p-menubarSub"],["p-menubarsub"],["","pMenubarSub",""]],hostVars:7,hostBindings:function(t,n){t&2&&(h("id",n.root?n.menuId:null)("aria-activedescendant",n.focusedItemId)("role","menubar"),W(n.inlineStyles),l(n.level===0?n.cx("rootList"):n.cx("submenu")))},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",M],autoZIndex:[2,"autoZIndex","autoZIndex",M],baseZIndex:[2,"baseZIndex","baseZIndex",R],mobileActive:[2,"mobileActive","mobileActive",M],autoDisplay:[2,"autoDisplay","autoDisplay",M],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",R],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[O],decls:1,vars:1,consts:[["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["ngFor","",3,"ngForOf"],["role","separator",3,"style","class","pBind",4,"ngIf"],["role","menuitem","pTooltip","",3,"style","class","pBind","tooltipOptions","pTooltipUnstyled",4,"ngIf"],["role","separator",3,"pBind"],["role","menuitem","pTooltip","",3,"pBind","tooltipOptions","pTooltipUnstyled"],[3,"click","mouseenter","pBind"],[4,"ngIf"],["pMenubarSub","",3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind","unstyled","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"class","ngStyle","pBind",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","ngStyle","id","pBind",4,"ngIf","ngIfElse"],[3,"class","value","pt","unstyled",4,"ngIf"],[3,"ngStyle","pBind"],[3,"ngStyle","id","pBind"],[3,"ngStyle","innerHTML","id","pBind"],[3,"value","pt","unstyled"],[4,"ngTemplateOutlet"],["data-p-icon","angle-down",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-right",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-down",3,"pBind"],["data-p-icon","angle-right",3,"pBind"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"class","ngStyle","pBind",4,"ngIf","ngIfElse"],[3,"ngStyle","innerHTML","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pMenubarSub","",3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind","unstyled"]],template:function(t,n){t&1&&d(0,zt,2,2,"ng-template",3),t&2&&s("ngForOf",n.items)},dependencies:[o,N,ze,re,ae,qe,se,Ze,je,nt,_e,it,D,et,tt,pe,Xe,Z,de],encapsulation:2})}return o})(),cn=(()=>{class o extends ce{document;platformId;el;renderer;cd;menubarService;componentName="Menubar";$pcMenubar=B(st,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=B(D,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!0;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new T;onBlur=new T;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches=V(!1);outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=V([]);number=V(0);focusedItemInfo=V({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=B(Ie);_model;get visibleItems(){let e=this.activeItemPath().find(t=>t.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item&&e.item?.id?e.item.id:e.index!==-1?`${this.id}${k(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e,t,n,i,r,c){super(),this.document=e,this.platformId=t,this.el=n,this.renderer=i,this.cd=r,this.menubarService=c,Se(()=>{let g=this.activeItemPath();k(g)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}onInit(){this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.hide()}),this.id=this.id||Ue("pn_id_")}startTemplate;endTemplate;itemTemplate;menuIconTemplate;submenuIconTemplate;templates;_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}createProcessedItems(e,t=0,n={},i=""){let r=[];return e&&e.forEach((c,g)=>{let x=(i!==""?i+"_":"")+g,S={item:c,index:g,level:t,key:x,parent:n,parentKey:i};S.items=this.createProcessedItems(c.items,t+1,S,x),r.push(S)}),r}bindMatchMediaListener(){if(Y(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches.set(e.matches),this.matchMediaListener=()=>{this.queryMatches.set(e.matches),this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(e,t){return e?le(e[t]):void 0}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)}onItemClick(e){this.dirty=!0;let{originalEvent:t,processedItem:n}=e,i=this.isProcessedItemGroup(n),r=q(n.parent);if(this.isSelected(n)){let{index:g,key:x,level:S,parentKey:ee,item:j}=n;this.activeItemPath.set(this.activeItemPath().filter(F=>x!==F.key&&x.startsWith(F.key))),this.focusedItemInfo.set({index:g,level:S,parentKey:ee,item:j}),this.dirty=!r,E(this.rootmenu?.el.nativeElement)}else if(i)this.onItemChange(e);else{let g=r?n:this.activeItemPath().find(x=>x.parentKey==="");this.hide(t),this.changeFocusedItemIndex(t,g?g.index:-1),this.mobileActive=!1,E(this.rootmenu?.el.nativeElement)}}onItemMouseEnter(e){me()?this.onItemChange({event:e,processedItem:e.processedItem,focus:this.autoDisplay},"hover"):this.dirty&&this.onItemChange(e,"hover")}onMouseLeave(e){let t=this.menubarService.autoHide,n=this.menubarService.autoHideDelay;t&&setTimeout(()=>{this.menubarService.mouseLeaves.next(!0)},n)}changeFocusedItemIndex(e,t){let n=this.findVisibleItem(t);if(this.focusedItemInfo().index!==t){let i=this.focusedItemInfo();this.focusedItemInfo.set(xe(he({},i),{item:n.item,index:t})),this.scrollInView()}}scrollInView(e=-1){let t=e!==-1?`${this.id}_${e}`:this.focusedItemId,n=z(this.rootmenu?.el.nativeElement,`li[id="${t}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(e,t){let{processedItem:n,isFocus:i}=e;if(q(n))return;let{index:r,key:c,level:g,parentKey:x,items:S,item:ee}=n,j=k(S),F=this.activeItemPath().filter(ge=>ge.parentKey!==x&&ge.parentKey!==c);j&&F.push(n),this.focusedItemInfo.set({index:r,level:g,parentKey:x,item:ee}),j&&(this.dirty=!0),i&&E(this.rootmenu?.el.nativeElement),!(t==="hover"&&this.queryMatches())&&this.activeItemPath.set(F)}toggle(e){this.mobileActive?(this.mobileActive=!1,be.clear(this.rootmenu?.el.nativeElement),this.hide()):(this.mobileActive=!0,be.set("menu",this.rootmenu?.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}hide(e,t){this.mobileActive&&setTimeout(()=>{E(this.menubutton?.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),t&&E(this.rootmenu?.el.nativeElement),this.dirty=!1}show(){let e=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:e?.item}),E(this.rootmenu?.el.nativeElement)}onMenuMouseDown(e){this.dirty=!0}onMenuFocus(e){this.focused=!0;let t=e.relatedTarget;if((!t||!this.el.nativeElement.contains(t))&&this.focusedItemInfo().index===-1&&!this.activeItemPath().length&&!this.dirty){let i=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:i?.item})}this.onFocus.emit(e)}onMenuBlur(e){let t=e.relatedTarget;t&&this.el.nativeElement.contains(t)||setTimeout(()=>{let n=this.document.activeElement;n&&this.el.nativeElement.contains(n)||(this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(e))})}onKeyDown(e){let t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&Ge(e.key)&&this.searchItems(e,e.key);break}}findVisibleItem(e){return k(this.visibleItems)?this.visibleItems[e]:null}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&k(e.items)}isSelected(e){return this.activeItemPath().some(t=>t.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&k(e.items)}searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let n=-1,i=!1;return this.focusedItemInfo().index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)):n+this.focusedItemInfo().index):n=this.visibleItems.findIndex(r=>this.isItemMatched(r)),n!==-1&&(i=!0),n===-1&&this.focusedItemInfo().index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),i}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}onArrowDownKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?q(t.parent):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowRightKey(e));else{let i=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}}onArrowRightKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?this.activeItemPath().find(i=>i.key===t.parentKey):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowDownKey(e));else{let i=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}}onArrowUpKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(q(t.parent)){if(this.isProccessedItemGroup(t)){this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item});let r=this.findLastItemIndex();this.changeFocusedItemIndex(e,r)}}else{let i=this.activeItemPath().find(r=>r.key===t.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:i?i.parentKey:"",item:t.item}),this.searchValue="",this.onArrowLeftKey(e);let r=this.activeItemPath().filter(c=>c.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(r)}else{let r=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r)}}e.preventDefault()}onArrowLeftKey(e){let t=this.visibleItems[this.focusedItemInfo().index],n=t?this.activeItemPath().find(i=>i.key===t.parentKey):null;if(n){this.onItemChange({originalEvent:e,processedItem:n});let i=this.activeItemPath().filter(r=>r.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(i),e.preventDefault()}else{let i=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let t=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let t=z(this.rootmenu?.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),n=t&&(z(t,'[data-pc-section="itemlink"]')||z(t,"a,button"));n?n.click():t&&t.click()}e.preventDefault()}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return ue(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let t=e>0?ue(this.visibleItems.slice(0,e),n=>this.isValidItem(n)):-1;return t>-1?t:e}findNextItemIndex(e){let t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(n=>this.isValidItem(n)):-1;return t>-1?t+e+1:e}bindResizeListener(){Y(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{me()||this.hide(e,!0),this.mobileActive=!1})))}bindOutsideClickListener(){Y(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let t=this.rootmenu?.el.nativeElement!==e.target&&!this.rootmenu?.el.nativeElement?.contains(e.target),n=this.mobileActive&&this.menubutton?.nativeElement!==e.target&&!this.menubutton?.nativeElement?.contains(e.target);t&&(n?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()}static \u0275fac=function(t){return new(t||o)(P(ke),P(Le),P(Pe),P(Ee),P(Ne),P(fe))};static \u0275cmp=K({type:o,selectors:[["p-menubar"]],contentQueries:function(t,n,i){if(t&1&&Ae(i,qt,4)(i,Zt,4)(i,jt,4)(i,Gt,4)(i,Ut,4)(i,Qe,4),t&2){let r;y(r=v())&&(n.startTemplate=r.first),y(r=v())&&(n.endTemplate=r.first),y(r=v())&&(n.itemTemplate=r.first),y(r=v())&&(n.menuIconTemplate=r.first),y(r=v())&&(n.submenuIconTemplate=r.first),y(r=v())&&(n.templates=r)}},viewQuery:function(t,n){if(t&1&&Ke(Qt,5)(Wt,5),t&2){let i;y(i=v())&&(n.menubutton=i.first),y(i=v())&&(n.rootmenu=i.first)}},hostVars:2,hostBindings:function(t,n){t&2&&l(n.cn(n.cx("root"),n.styleClass))},inputs:{model:"model",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",M],baseZIndex:[2,"baseZIndex","baseZIndex",R],autoDisplay:[2,"autoDisplay","autoDisplay",M],autoHide:[2,"autoHide","autoHide",M],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",R],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[$e([fe,Ie,{provide:st,useExisting:o},{provide:Je,useExisting:o}]),Be([D]),O],ngContentSelectors:Jt,decls:7,vars:20,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"class","pBind",4,"ngIf"],["tabindex","0","role","button",3,"class","pBind","click","keydown",4,"ngIf"],["pMenubarSub","","tabindex","0",3,"itemClick","mousedown","focus","blur","keydown","itemMouseEnter","mouseleave","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","focusedItemId","submenuiconTemplate","activeItemPath","pt","pBind","unstyled"],[3,"class","pBind",4,"ngIf","ngIfElse"],[3,"pBind"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",3,"click","keydown","pBind"],["data-p-icon","bars",3,"pBind",4,"ngIf"],["data-p-icon","bars",3,"pBind"]],template:function(t,n){if(t&1){let i=H();Fe(),d(0,Yt,2,4,"div",3)(1,on,4,9,"a",4),f(2,"ul",5,0),$("itemClick",function(c){return p(i),b(n.onItemClick(c))})("mousedown",function(c){return p(i),b(n.onMenuMouseDown(c))})("focus",function(c){return p(i),b(n.onMenuFocus(c))})("blur",function(c){return p(i),b(n.onMenuBlur(c))})("keydown",function(c){return p(i),b(n.onKeyDown(c))})("itemMouseEnter",function(c){return p(i),b(n.onItemMouseEnter(c))})("mouseleave",function(c){return p(i),b(n.onMouseLeave(c))}),_(),d(4,an,2,4,"div",6)(5,sn,2,2,"ng-template",null,1,X)}if(t&2){let i=Q(6);s("ngIf",n.startTemplate||n._startTemplate),u(),s("ngIf",n.model&&n.model.length>0),u(),s("items",n.processedItems)("itemTemplate",n.itemTemplate)("menuId",n.id)("root",!0)("baseZIndex",n.baseZIndex)("autoZIndex",n.autoZIndex)("mobileActive",n.mobileActive)("autoDisplay",n.autoDisplay)("focusedItemId",n.focused?n.focusedItemId:void 0)("submenuiconTemplate",n.submenuIconTemplate||n._submenuIconTemplate)("activeItemPath",n.activeItemPath())("pt",n.pt())("pBind",n.ptm("rootList"))("unstyled",n.unstyled()),h("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy),u(2),s("ngIf",n.endTemplate||n._endTemplate)("ngIfElse",i)}},dependencies:[N,re,ae,se,ln,_e,D,rt,pe,Z,de],encapsulation:2,changeDetection:0})}return o})(),ut=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=U({type:o});static \u0275inj=G({imports:[cn,Z,Z]})}return o})();var lt=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=U({type:o});static \u0275inj=G({imports:[N,ut]})};export{cn as a,lt as b};
