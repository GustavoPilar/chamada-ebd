import{$ as P,Aa as S,Ba as M,Da as E,Ea as I,Fa as m,L as H,La as f,M as k,Mb as X,N as C,Oa as q,Ob as R,P as B,Pa as z,Pb as Y,R as g,Ta as r,U as x,Ua as b,Uc as N,Ud as ie,V as j,Va as w,Vc as h,Xc as L,Yb as Z,Zc as O,_c as ee,ab as T,ac as A,bb as $,bc as D,bd as te,cd as d,db as Q,dd as _,eb as v,fb as G,gb as W,ha as y,hb as V,ib as U,jb as c,kb as p,ob as J,pb as s,qa as l,ud as ne,xb as F,zb as K}from"./chunk-GPXMI66A.js";var oe=`
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: dt('toolbar.padding');
        background: dt('toolbar.background');
        border: 1px solid dt('toolbar.border.color');
        color: dt('toolbar.color');
        border-radius: dt('toolbar.border.radius');
        gap: dt('toolbar.gap');
    }

    .p-toolbar-start,
    .p-toolbar-center,
    .p-toolbar-end {
        display: flex;
        align-items: center;
    }
`;var ue=["start"],me=["end"],fe=["center"],be=["*"];function we(e,u){e&1&&T(0)}function ye(e,u){if(e&1&&(b(0,"div",1),m(1,we,1,0,"ng-container",2),w()),e&2){let n=v();s(n.cx("start")),r("pBind",n.ptm("start")),l(),r("ngTemplateOutlet",n.startTemplate||n._startTemplate)}}function Te(e,u){e&1&&T(0)}function ve(e,u){if(e&1&&(b(0,"div",1),m(1,Te,1,0,"ng-container",2),w()),e&2){let n=v();s(n.cx("center")),r("pBind",n.ptm("center")),l(),r("ngTemplateOutlet",n.centerTemplate||n._centerTemplate)}}function _e(e,u){e&1&&T(0)}function ke(e,u){if(e&1&&(b(0,"div",1),m(1,_e,1,0,"ng-container",2),w()),e&2){let n=v();s(n.cx("end")),r("pBind",n.ptm("end")),l(),r("ngTemplateOutlet",n.endTemplate||n._endTemplate)}}var Ce={root:()=>["p-toolbar p-component"],start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},re=(()=>{class e extends L{name="toolbar";style=oe;classes=Ce;static \u0275fac=(()=>{let n;return function(t){return(n||(n=y(e)))(t||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var ae=new B("TOOLBAR_INSTANCE"),Be=(()=>{class e extends ee{componentName="Toolbar";$pcToolbar=g(ae,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(d,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;ariaLabelledBy;_componentStyle=g(re);getBlockableElement(){return this.el.nativeElement.children[0]}startTemplate;endTemplate;centerTemplate;templates;_startTemplate;_endTemplate;_centerTemplate;onAfterContentInit(){this.templates.forEach(n=>{switch(n.getType()){case"start":case"left":this._startTemplate=n.template;break;case"end":case"right":this._endTemplate=n.template;break;case"center":this._centerTemplate=n.template;break}})}static \u0275fac=(()=>{let n;return function(t){return(n||(n=y(e)))(t||e)}})();static \u0275cmp=S({type:e,selectors:[["p-toolbar"]],contentQueries:function(i,t,a){if(i&1&&V(a,ue,4)(a,me,4)(a,fe,4)(a,N,4),i&2){let o;c(o=p())&&(t.startTemplate=o.first),c(o=p())&&(t.endTemplate=o.first),c(o=p())&&(t.centerTemplate=o.first),c(o=p())&&(t.templates=o)}},hostAttrs:["role","toolbar"],hostVars:3,hostBindings:function(i,t){i&2&&(f("aria-labelledby",t.ariaLabelledBy),s(t.cn(t.cx("root"),t.styleClass)))},inputs:{styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},features:[F([re,{provide:ae,useExisting:e},{provide:O,useExisting:e}]),E([d]),I],ngContentSelectors:be,decls:4,vars:3,consts:[[3,"class","pBind",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"]],template:function(i,t){i&1&&(G(),W(0),m(1,ye,2,4,"div",0)(2,ve,2,4,"div",0)(3,ke,2,4,"div",0)),i&2&&(l(),r("ngIf",t.startTemplate||t._startTemplate),l(),r("ngIf",t.centerTemplate||t._centerTemplate),l(),r("ngIf",t.endTemplate||t._endTemplate))},dependencies:[D,Z,A,h,_,d],encapsulation:2,changeDetection:0})}return e})(),Xe=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=M({type:e});static \u0275inj=C({imports:[Be,h,_,h,_]})}return e})();var le=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`;var Se=["handle"],Me=["input"],Ee=e=>({checked:e});function Ie(e,u){e&1&&T(0)}function Ve(e,u){if(e&1&&m(0,Ie,1,0,"ng-container",3),e&2){let n=v();r("ngTemplateOutlet",n.handleTemplate||n._handleTemplate)("ngTemplateOutletContext",K(2,Ee,n.checked()))}}var Fe=`
    ${le}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`,Ae={root:{position:"relative"}},De={root:({instance:e})=>["p-toggleswitch p-component",{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.$disabled(),"p-invalid":e.invalid()}],input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},se=(()=>{class e extends L{name="toggleswitch";style=Fe;classes=De;inlineStyles=Ae;static \u0275fac=(()=>{let n;return function(t){return(n||(n=y(e)))(t||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var de=new B("TOGGLESWITCH_INSTANCE"),Ne={provide:ne,useExisting:H(()=>ce),multi:!0},ce=(()=>{class e extends ie{componentName="ToggleSwitch";$pcToggleSwitch=g(de,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(d,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;tabindex;inputId;readonly;trueValue=!0;falseValue=!1;ariaLabel;size=X();ariaLabelledBy;autofocus;onChange=new P;input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=g(se);templates;onHostClick(n){this.onClick(n)}onAfterContentInit(){this.templates.forEach(n=>{n.getType()==="handle"?this._handleTemplate=n.template:this._handleTemplate=n.template})}onClick(n){!this.$disabled()&&!this.readonly&&(this.writeModelValue(this.checked()?this.falseValue:this.trueValue),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:n,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue}writeControlValue(n,i){i(n),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.checked(),disabled:this.$disabled(),invalid:this.invalid()})}static \u0275fac=(()=>{let n;return function(t){return(n||(n=y(e)))(t||e)}})();static \u0275cmp=S({type:e,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(i,t,a){if(i&1&&V(a,Se,4)(a,N,4),i&2){let o;c(o=p())&&(t.handleTemplate=o.first),c(o=p())&&(t.templates=o)}},viewQuery:function(i,t){if(i&1&&U(Me,5),i&2){let a;c(a=p())&&(t.input=a.first)}},hostVars:7,hostBindings:function(i,t){i&1&&Q("click",function(o){return t.onHostClick(o)}),i&2&&(f("data-p-checked",t.checked())("data-p-disabled",t.$disabled())("data-p",t.dataP),J(t.sx("root")),s(t.cn(t.cx("root"),t.styleClass)))},inputs:{styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",Y],inputId:"inputId",readonly:[2,"readonly","readonly",R],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",size:[1,"size"],ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",R]},outputs:{onChange:"onChange"},features:[F([Ne,se,{provide:de,useExisting:e},{provide:O,useExisting:e}]),E([d]),I],decls:5,vars:22,consts:[["input",""],["type","checkbox","role","switch",3,"focus","blur","checked","pAutoFocus","pBind"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,t){if(i&1){let a=$();b(0,"input",1,0),Q("focus",function(){return x(a),j(t.onFocus())})("blur",function(){return x(a),j(t.onBlur())}),w(),b(2,"div",2)(3,"div",2),q(4,Ve,1,4,"ng-container"),w()()}i&2&&(s(t.cx("input")),r("checked",t.checked())("pAutoFocus",t.autofocus)("pBind",t.ptm("input")),f("id",t.inputId)("required",t.required()?"":void 0)("disabled",t.$disabled()?"":void 0)("aria-checked",t.checked())("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel)("name",t.name())("tabindex",t.tabindex),l(2),s(t.cx("slider")),r("pBind",t.ptm("slider")),f("data-p",t.dataP),l(),s(t.cx("handle")),r("pBind",t.ptm("handle")),f("data-p",t.dataP),l(),z(t.handleTemplate||t._handleTemplate?4:-1))},dependencies:[D,A,te,h,_,d],encapsulation:2,changeDetection:0})}return e})(),_t=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=M({type:e});static \u0275inj=C({imports:[ce,h,h]})}return e})();export{Be as a,Xe as b,ce as c,_t as d};
