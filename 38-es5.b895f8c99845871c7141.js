function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var r=0;r<l.length;r++){var t=l[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,r){return l&&_defineProperties(n.prototype,l),r&&_defineProperties(n,r),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"4Nmm":function(n,l,r){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=[],a="M224 412c-15.5 0-28-12.5-28-28v-64c0-15.5 12.5-28 28-28s28 12.5 28 28v64c0 15.5-12.5 28-28 28zm224-172v224c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V240c0-26.5 21.5-48 48-48h32v-48C80 64.5 144.8-.2 224.4 0 304 .2 368 65.8 368 145.4V192h32c26.5 0 48 21.5 48 48zm-320-48h192v-48c0-52.9-43.1-96-96-96s-96 43.1-96 96v48zm272 48H48v224h352V240z";l.definition={prefix:"far",iconName:"lock-alt",icon:[448,512,t,"f30d",a]},l.faLockAlt=l.definition,l.prefix="far",l.iconName="lock-alt",l.width=448,l.height=512,l.ligatures=t,l.unicode="f30d",l.svgPathData=a},JcpB:function(n,l,r){"use strict";r.d(l,"a",(function(){return e}));var t=r("4Nmm"),a=0,e=function(){function n(){_classCallCheck(this,n),this.lockIcon=t.faLockAlt,this.uid="ts-card-"+a++,this._border="none",this.centeredContent=!1,this.classList="ts-card",this.elevation2=!1,this.isDisabled=!1,this.flat=!1,this._id=this.uid,this.supportsInteraction=!1,this._theme="primary"}return _createClass(n,[{key:"borderClass",get:function(){return this.border&&"none"!==this.border?"c-card--border-"+this.border:""}},{key:"aspectRatio",set:function(n){var l=parseInt(n.split(":")[0],10),r=parseInt(n.split(":")[1],10);this.aspectRatioPadding=(r/l*100).toFixed(2)+"%"}},{key:"border",set:function(n){this._border=n||"none"},get:function(){return this._border}},{key:"class",set:function(n){this.classList+=" "+n},get:function(){return this._class}},{key:"id",set:function(n){this._id=n||this.uid},get:function(){return this._id}},{key:"theme",set:function(n){this._theme=n||"primary"},get:function(){return this._theme}}]),n}()},NyRc:function(n,l,r){"use strict";r.r(l),r.d(l,"ToggleModuleNgFactory",(function(){return V}));var t=r("kZht"),a=function n(){_classCallCheck(this,n)},e=r("C9Ky"),c=r("bm8q"),i=r("JcpB"),o=r("UQ/n"),s=r("3kIJ"),d=r("Lpsv"),u=r("L8EP"),b=function(){function n(l){_classCallCheck(this,n),this.formBuilder=l,this.isChecked=!1,this.isDisabled=!1,this.name="myToggle",this.required=!0,this.myForm=this.formBuilder.group({myToggle:[null,[]]})}return _createClass(n,[{key:"isChanged",value:function(n){console.log("in changed: ",n)}},{key:"log",value:function(n){console.log("DEMO: From value: ",n)}}]),n}(),p=t.yb({encapsulation:2,styles:[],data:{}});function g(n){return t.cc(0,[(n()(),t.Ab(0,0,null,null,21,"ts-card",[["tsVerticalSpacing",""]],[[8,"className",0]],null,null,c.b,c.a)),t.zb(1,49152,null,0,i.a,[],null,null),t.zb(2,16384,null,0,o.a,[t.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),t.Ab(3,0,null,0,2,"h3",[["tsVerticalSpacing",""]],null,null,null,null,null)),t.zb(4,16384,null,0,o.a,[t.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),t.Zb(-1,null,["Form"])),(n()(),t.Ab(6,0,null,0,15,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,r){var a=!0;return"submit"===l&&(a=!1!==t.Pb(n,8).onSubmit(r)&&a),"reset"===l&&(a=!1!==t.Pb(n,8).onReset()&&a),a}),null,null)),t.zb(7,16384,null,0,s.I,[],null,null),t.zb(8,540672,null,0,s.m,[[8,null],[8,null]],{form:[0,"form"]},null),t.Ub(2048,null,s.d,null,[s.m]),t.zb(10,16384,null,0,s.t,[[4,s.d]],null,null),(n()(),t.Ab(11,0,null,null,7,"ts-toggle",[["class","ts-toggle"],["tsVerticalSpacing",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"selectionChange"]],(function(n,l,r){var t=!0;return"selectionChange"===l&&(t=!1!==n.component.isChanged(r)&&t),t}),d.b,d.a)),t.zb(12,49152,null,0,u.a,[],{formControl:[0,"formControl"],isDisabled:[1,"isDisabled"],isRequired:[2,"isRequired"],name:[3,"name"]},{selectionChange:"selectionChange"}),t.Ub(1024,null,s.q,(function(n){return[n]}),[u.a]),t.zb(14,540672,null,0,s.j,[[8,null],[8,null],[6,s.q],[2,s.G]],{form:[0,"form"]},null),t.Ub(2048,null,s.r,null,[s.j]),t.zb(16,16384,null,0,s.s,[[4,s.r]],null,null),t.zb(17,16384,null,0,o.a,[t.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),t.Zb(-1,0,["Toggle Me!"])),(n()(),t.Ab(19,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t.Ab(20,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,l,r){var t=!0,a=n.component;return"click"===l&&(t=!1!==a.log(a.myForm.value)&&t),t}),null,null)),(n()(),t.Zb(-1,null,["Log form value"])),(n()(),t.Ab(22,0,null,null,9,"ts-card",[],[[8,"className",0]],null,null,c.b,c.a)),t.zb(23,49152,null,0,i.a,[],null,null),(n()(),t.Ab(24,0,null,0,2,"h3",[["tsVerticalSpacing",""]],null,null,null,null,null)),t.zb(25,16384,null,0,o.a,[t.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),t.Zb(-1,null,["Seed via @Input"])),(n()(),t.Ab(27,0,null,0,4,"ts-toggle",[["class","ts-toggle"],["name","two"],["tsVerticalSpacing",""]],null,[[null,"selectionChange"]],(function(n,l,r){var t=!0;return"selectionChange"===l&&(t=!1!==n.component.isChanged(r)&&t),t}),d.b,d.a)),t.Ub(5120,null,s.q,(function(n){return[n]}),[u.a]),t.zb(29,16384,null,0,o.a,[t.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),t.zb(30,49152,null,0,u.a,[],{isChecked:[0,"isChecked"],isDisabled:[1,"isDisabled"],name:[2,"name"]},{selectionChange:"selectionChange"}),(n()(),t.Zb(-1,0,["Toggle Me!"]))],(function(n,l){var r=l.component;n(l,2,0,""),n(l,4,0,""),n(l,8,0,r.myForm),n(l,12,0,r.myForm.get("myToggle"),r.isDisabled,r.required,r.name),n(l,14,0,r.myForm.get("myToggle")),n(l,17,0,""),n(l,25,0,""),n(l,29,0,""),n(l,30,0,!0,!0,"two")}),(function(n,l){n(l,0,0,t.Pb(l,1).classList),n(l,6,0,t.Pb(l,10).ngClassUntouched,t.Pb(l,10).ngClassTouched,t.Pb(l,10).ngClassPristine,t.Pb(l,10).ngClassDirty,t.Pb(l,10).ngClassValid,t.Pb(l,10).ngClassInvalid,t.Pb(l,10).ngClassPending),n(l,11,0,t.Pb(l,16).ngClassUntouched,t.Pb(l,16).ngClassTouched,t.Pb(l,16).ngClassPristine,t.Pb(l,16).ngClassDirty,t.Pb(l,16).ngClassValid,t.Pb(l,16).ngClassInvalid,t.Pb(l,16).ngClassPending),n(l,22,0,t.Pb(l,23).classList)}))}var h=t.wb("demo-toggle",b,(function(n){return t.cc(0,[(n()(),t.Ab(0,0,null,null,1,"demo-toggle",[],null,null,null,g,p)),t.zb(1,49152,null,0,b,[s.h],null,null)],null,null)}),{},{},[]),f=r("iwai"),m=r("An66"),v=r("s2U3"),_=r("1VvW"),y=function n(){_classCallCheck(this,n)},x=r("vE5V"),C=r("pTnX"),k=r("jL3B"),w=r("O1jd"),N=r("NxuZ"),z=r("iASq"),P=r("zlaC"),T=r("yUiZ"),A=r("7wPV"),S=r("1AkH"),V=t.xb(a,[],(function(n){return t.Mb([t.Nb(512,t.j,t.bb,[[8,[e.a,h,f.b,f.a]],[3,t.j],t.y]),t.Nb(4608,m.o,m.n,[t.v]),t.Nb(4608,s.h,s.h,[]),t.Nb(4608,s.F,s.F,[]),t.Nb(4608,v.c,v.c,[]),t.Nb(1073742336,m.c,m.c,[]),t.Nb(1073742336,s.E,s.E,[]),t.Nb(1073742336,s.A,s.A,[]),t.Nb(1073742336,_.p,_.p,[[2,_.u],[2,_.l]]),t.Nb(1073742336,y,y,[]),t.Nb(1073742336,x.a,x.a,[]),t.Nb(1073742336,C.i,C.i,[k.j,[2,C.e],[2,m.d]]),t.Nb(1073742336,w.b,w.b,[]),t.Nb(1073742336,C.l,C.l,[]),t.Nb(1073742336,N.j,N.j,[]),t.Nb(1073742336,z.a,z.a,[]),t.Nb(1073742336,P.a,P.a,[]),t.Nb(1073742336,T.b,T.b,[]),t.Nb(1073742336,s.o,s.o,[]),t.Nb(1073742336,A.f,A.f,[]),t.Nb(1073742336,v.d,v.d,[]),t.Nb(1073742336,A.d,A.d,[]),t.Nb(1073742336,S.a,S.a,[]),t.Nb(1073742336,a,a,[]),t.Nb(1024,_.j,(function(){return[[{path:"",component:b}]]}),[])])}))},bm8q:function(n,l,r){"use strict";r.d(l,"a",(function(){return d})),r.d(l,"b",(function(){return p}));var t=r("kZht"),a=r("An66"),e=r("DTKE"),c=r("CiOl"),i=r("pTnX"),o=r("O1jd"),s=r("FxgA"),d=(r("JcpB"),t.yb({encapsulation:2,styles:[[":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25,.8,.25,1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55,0,.55,.2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform .25s cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}:root{--ts-card-disabled-opacity:.5;--ts-card-disabled-menu-opacity:.3;--ts-card-backgroundColor:var(--ts-color-base-white);--ts-card-boxShadow:0 0 0 1px rgba(0,0,0,0.04),0 2px 5px 0 rgba(0,0,0,0.06);--ts-card-hover-boxShadow:0 0 0 1px rgba(0,0,0,0.06),0 2px 5px 0 rgba(0,0,0,0.09);--ts-card-2x-boxShadow:0 0 0 1px rgba(0,0,0,0.08),0 2px 5px 0 rgba(0,0,0,0.12)}.ts-card{display:flex;flex-flow:row nowrap}.ts-card .c-card{background-color:var(--ts-card-backgroundColor);box-sizing:border-box;font:var(--ts-typography-compound-body);position:relative;transition:height var(--ts-animation-time-duration-200) var(--ts-animation-easing-ease);width:100%}.ts-card .c-card:not(.c-card--aspect),.ts-card .c-card:not(.c-card--interaction){align-items:stretch;display:flex;flex-direction:row;justify-content:center}.ts-card .c-card.c-card--elevation2{box-shadow:var(--ts-card-2x-boxShadow)}.c-card .c-card__inner{border-radius:var(--ts-border-radius-base);box-shadow:var(--ts-card-boxShadow);box-sizing:border-box;min-height:calc(100% - 48px);padding:var(--ts-space-inset-600);position:relative;vertical-align:top;width:100%}.c-card .c-card__inner .c-card__title-accent-border{border-left:2px solid var(--ts-color-primary-500);padding-left:var(--ts-space-inset-300)}.c-card .c-card__inner .c-card__title-accent-border[theme=accent]{border-left-color:var(--ts-color-accent-500)}.c-card .c-card__inner .c-card__title-accent-border[theme=warn]{border-left-color:var(--ts-color-warn-500)}.c-card .c-card__inner .c-card__title{font:var(--ts-typography-compound-title)}.c-card--interaction:not(.c-card--disabled) .c-card__inner{cursor:pointer}.c-card--interaction:not(.c-card--disabled) .c-card__inner:focus,.c-card--interaction:not(.c-card--disabled) .c-card__inner:hover{box-shadow:var(--ts-card-hover-boxShadow)}.c-card--centered .c-card__inner{align-items:center;display:flex;justify-content:center}.c-card--aspect .c-card__inner{bottom:0;left:0;position:absolute;right:0;top:0}.c-card--disabled .c-card__inner{opacity:var(--ts-card-disabled-opacity)}.c-card--disabled .c-menu{opacity:var(--ts-card-disabled-menu-opacity);pointer-events:none}.c-card--disabled .c-card__lock{--lock-top-alignment:2px;--lock-scale:.7;color:var(--ts-color-utility-500);position:absolute;right:var(--ts-space-inline-600);top:calc(var(--ts-space-inline-600) - var(--lock-top-alignment));transform:scale(var(--lock-scale))}.c-card--right-spacing .c-card__inner{padding-right:var(--ts-space-base-large4)}.c-card--flat>.c-card__inner{border:1px solid var(--ts-color-utility-300);box-shadow:none}.c-card--border-bottom.c-card--primary .c-card__inner{border-bottom:2px solid var(--ts-color-primary-500)}.c-card--border-bottom.c-card--accent .c-card__inner{border-bottom:2px solid var(--ts-color-accent-500)}.c-card--border-bottom.c-card--warn .c-card__inner{border-bottom:2px solid var(--ts-color-warn-500)}.c-card--border-left.c-card--primary .c-card__inner{border-left:2px solid var(--ts-color-primary-500)}.c-card--border-left.c-card--accent .c-card__inner{border-left:2px solid var(--ts-color-accent-500)}.c-card--border-left.c-card--warn .c-card__inner{border-left:2px solid var(--ts-color-warn-500)}.c-card--border-right.c-card--primary .c-card__inner{border-right:2px solid var(--ts-color-primary-500)}.c-card--border-right.c-card--accent .c-card__inner{border-right:2px solid var(--ts-color-accent-500)}.c-card--border-right.c-card--warn .c-card__inner{border-right:2px solid var(--ts-color-warn-500)}.c-card--border-top.c-card--primary .c-card__inner{border-top:2px solid var(--ts-color-primary-500)}.c-card--border-top.c-card--accent .c-card__inner{border-top:2px solid var(--ts-color-accent-500)}.c-card--border-top.c-card--warn .c-card__inner{border-top:2px solid var(--ts-color-warn-500)}.c-card__inner .ts-table~.ts-loading-overlay .c-loading-overlay{left:-var(--ts-space-inline-600);right:-var(--ts-space-inline-600)}"]],data:{}}));function u(n){return t.cc(0,[(n()(),t.Ab(0,16777216,null,null,1,null,null,null,null,null,null,null)),t.zb(1,540672,null,0,a.t,[t.R],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(n()(),t.jb(0,null,null,0))],(function(n,l){n(l,1,0,l.component.utilityMenuTemplate)}),null)}function b(n){return t.cc(0,[(n()(),t.Ab(0,0,null,null,1,"ts-icon",[["class","c-card__lock qa-card-lock ts-icon"]],null,null,null,e.b,e.a)),t.zb(1,49152,null,0,c.a,[],{icon:[0,"icon"]},null)],(function(n,l){n(l,1,0,l.component.lockIcon)}),null)}function p(n){return t.cc(2,[(n()(),t.Ab(0,0,null,null,9,"div",[],[[4,"paddingTop",null],[1,"id",0]],null,null,null,null)),t.zb(1,278528,null,0,a.k,[t.t,t.u,t.l,t.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Sb(2,{"c-card--interaction":0,"c-card--centered":1,"c-card--aspect":2,"c-card--disabled":3,"c-card--right-spacing":4,"c-card--flat":5,"c-card--elevation2":6}),(n()(),t.Ab(3,0,null,null,2,"div",[["class","c-card__inner mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),t.zb(4,212992,null,0,i.k,[t.l,t.A,o.a,[2,i.h],[2,s.a]],{disabled:[0,"disabled"]},null),t.Ob(null,0),(n()(),t.jb(16777216,null,null,1,null,u)),t.zb(7,16384,null,0,a.m,[t.R,t.N],{ngIf:[0,"ngIf"]},null),(n()(),t.jb(16777216,null,null,1,null,b)),t.zb(9,16384,null,0,a.m,[t.R,t.N],{ngIf:[0,"ngIf"]},null)],(function(n,l){var r=l.component,a=t.Hb(2,"c-card qa-card ",r.borderClass," c-card--",r.theme,""),e=n(l,2,0,r.supportsInteraction,r.centeredContent,r.aspectRatioPadding,r.isDisabled,r.utilityMenuTemplate||r.isDisabled,r.flat,r.elevation2);n(l,1,0,a,e),n(l,4,0,!r.supportsInteraction||r.isDisabled),n(l,7,0,r.utilityMenuTemplate),n(l,9,0,r.isDisabled&&!r.utilityMenuTemplate)}),(function(n,l){var r=l.component;n(l,0,0,r.aspectRatioPadding,r.id),n(l,3,0,t.Pb(l,4).unbounded)}))}},cLrn:function(n,l,r){"use strict";r.d(l,"a",(function(){return i}));var t=r("kZht"),a=r("b1t3"),e=r("xmEm"),c=r("JcpB"),i=function(){function n(l){if(_classCallCheck(this,n),this.theme="primary",this.tsCardTitle="c-card__title",!(l instanceof c.a)&&Object(t.Y)())throw new e.b("The 'tsCardTitle' directive must be inside a <ts-card> component.")}return _createClass(n,[{key:"tsTitleAccentBorder",set:function(n){Object(a.b)(n)&&(this.tsCardTitle=this.tsCardTitle+" c-card__title-accent-border")}}]),n}()},zlaC:function(n,l,r){"use strict";r.d(l,"a",(function(){return t})),r("JcpB"),r("cLrn");var t=function n(){_classCallCheck(this,n)}}}]);