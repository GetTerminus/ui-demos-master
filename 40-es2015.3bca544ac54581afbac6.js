(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{IkYl:function(n,l,r){"use strict";r.d(l,"a",(function(){return i})),r.d(l,"b",(function(){return d})),r.d(l,"c",(function(){return o})),r("D57K");var t=r("kZht"),e=r("b1t3"),a=r("ANRc");let c=0,i=class{constructor(){this.uid="ts-card-"+c++,this._border="none",this.centeredContent=!1,this.isDisabled=!1,this.flat=!1,this._id=this.uid,this.supportsInteraction=!1,this._theme="primary"}set aspectRatio(n){const l=parseInt(n.split(":")[0],10),r=parseInt(n.split(":")[1],10);this.aspectRatioPadding=(r/l*100).toFixed(2)+"%"}set border(n){this._border=n||"none"}get border(){return this._border}set id(n){this._id=n||this.uid}get id(){return this._id}set theme(n){this._theme=n||"primary"}get theme(){return this._theme}get borderClass(){return this.border&&"none"!==this.border?"c-card--border-"+this.border:""}},o=class{constructor(n){if(this.theme="primary",this.tsCardTitle="c-card__title",!(n instanceof i)&&Object(t.Y)())throw new a.b("The 'tsCardTitle' directive must be inside a <ts-card> component.")}set tsTitleAccentBorder(n){Object(e.b)(n)&&(this.tsCardTitle=this.tsCardTitle+" c-card__title-accent-border")}},d=class{}},NyRc:function(n,l,r){"use strict";r.r(l),r.d(l,"ToggleModuleNgFactory",(function(){return A}));var t=r("kZht");class e{}var a=r("C9Ky"),c=r("aruX"),i=r("IkYl"),o=r("1s2V"),d=r("3kIJ"),s=r("2c/O"),u=r("GgDe");class b{constructor(n){this.formBuilder=n,this.isChecked=!1,this.isDisabled=!1,this.name="myToggle",this.required=!0,this.myForm=this.formBuilder.group({myToggle:[null,[]]})}isChanged(n){console.log("in changed: ",n)}log(n){console.log("DEMO: From value: ",n)}}var p=t.yb({encapsulation:2,styles:[],data:{}});function g(n){return t.cc(0,[(n()(),t.Ab(0,0,null,null,21,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,c.b,c.a)),t.zb(1,49152,null,0,i.a,[],null,null),t.zb(2,16384,null,0,o.c,[t.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),t.Ab(3,0,null,0,2,"h3",[["tsVerticalSpacing",""]],null,null,null,null,null)),t.zb(4,16384,null,0,o.c,[t.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),t.Zb(-1,null,["Form"])),(n()(),t.Ab(6,0,null,0,15,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,r){var e=!0;return"submit"===l&&(e=!1!==t.Pb(n,8).onSubmit(r)&&e),"reset"===l&&(e=!1!==t.Pb(n,8).onReset()&&e),e}),null,null)),t.zb(7,16384,null,0,d.I,[],null,null),t.zb(8,540672,null,0,d.m,[[8,null],[8,null]],{form:[0,"form"]},null),t.Ub(2048,null,d.d,null,[d.m]),t.zb(10,16384,null,0,d.t,[[4,d.d]],null,null),(n()(),t.Ab(11,0,null,null,7,"ts-toggle",[["class","ts-toggle"],["tsVerticalSpacing",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"selectionChange"]],(function(n,l,r){var t=!0;return"selectionChange"===l&&(t=!1!==n.component.isChanged(r)&&t),t}),s.b,s.a)),t.zb(12,49152,null,0,u.a,[],{formControl:[0,"formControl"],isDisabled:[1,"isDisabled"],isRequired:[2,"isRequired"],name:[3,"name"]},{selectionChange:"selectionChange"}),t.Ub(1024,null,d.q,(function(n){return[n]}),[u.a]),t.zb(14,540672,null,0,d.j,[[8,null],[8,null],[6,d.q],[2,d.G]],{form:[0,"form"]},null),t.Ub(2048,null,d.r,null,[d.j]),t.zb(16,16384,null,0,d.s,[[4,d.r]],null,null),t.zb(17,16384,null,0,o.c,[t.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),t.Zb(-1,0,["Toggle Me!"])),(n()(),t.Ab(19,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t.Ab(20,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,l,r){var t=!0,e=n.component;return"click"===l&&(t=!1!==e.log(e.myForm.value)&&t),t}),null,null)),(n()(),t.Zb(-1,null,["Log form value"])),(n()(),t.Ab(22,0,null,null,9,"ts-card",[["class","ts-card"]],null,null,null,c.b,c.a)),t.zb(23,49152,null,0,i.a,[],null,null),(n()(),t.Ab(24,0,null,0,2,"h3",[["tsVerticalSpacing",""]],null,null,null,null,null)),t.zb(25,16384,null,0,o.c,[t.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),t.Zb(-1,null,["Seed via @Input"])),(n()(),t.Ab(27,0,null,0,4,"ts-toggle",[["class","ts-toggle"],["name","two"],["tsVerticalSpacing",""]],null,[[null,"selectionChange"]],(function(n,l,r){var t=!0;return"selectionChange"===l&&(t=!1!==n.component.isChanged(r)&&t),t}),s.b,s.a)),t.Ub(5120,null,d.q,(function(n){return[n]}),[u.a]),t.zb(29,16384,null,0,o.c,[t.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),t.zb(30,49152,null,0,u.a,[],{isChecked:[0,"isChecked"],isDisabled:[1,"isDisabled"],name:[2,"name"]},{selectionChange:"selectionChange"}),(n()(),t.Zb(-1,0,["Toggle Me!"]))],(function(n,l){var r=l.component;n(l,2,0,""),n(l,4,0,""),n(l,8,0,r.myForm),n(l,12,0,r.myForm.get("myToggle"),r.isDisabled,r.required,r.name),n(l,14,0,r.myForm.get("myToggle")),n(l,17,0,""),n(l,25,0,""),n(l,29,0,""),n(l,30,0,!0,!0,"two")}),(function(n,l){n(l,6,0,t.Pb(l,10).ngClassUntouched,t.Pb(l,10).ngClassTouched,t.Pb(l,10).ngClassPristine,t.Pb(l,10).ngClassDirty,t.Pb(l,10).ngClassValid,t.Pb(l,10).ngClassInvalid,t.Pb(l,10).ngClassPending),n(l,11,0,t.Pb(l,16).ngClassUntouched,t.Pb(l,16).ngClassTouched,t.Pb(l,16).ngClassPristine,t.Pb(l,16).ngClassDirty,t.Pb(l,16).ngClassValid,t.Pb(l,16).ngClassInvalid,t.Pb(l,16).ngClassPending)}))}function h(n){return t.cc(0,[(n()(),t.Ab(0,0,null,null,1,"demo-toggle",[],null,null,null,g,p)),t.zb(1,49152,null,0,b,[d.h],null,null)],null,null)}var m=t.wb("demo-toggle",b,h,{},{},[]),f=r("An66"),v=r("s2U3"),_=r("1VvW");class x{}var y=r("vE5V"),w=r("pTnX"),k=r("jL3B"),C=r("O1jd"),N=r("ydE+"),z=r("rmFo"),P=r("7wPV"),A=t.xb(e,[],(function(n){return t.Mb([t.Nb(512,t.j,t.bb,[[8,[a.a,m]],[3,t.j],t.y]),t.Nb(4608,f.o,f.n,[t.v]),t.Nb(4608,d.h,d.h,[]),t.Nb(4608,d.F,d.F,[]),t.Nb(4608,v.c,v.c,[]),t.Nb(1073742336,f.c,f.c,[]),t.Nb(1073742336,d.E,d.E,[]),t.Nb(1073742336,d.A,d.A,[]),t.Nb(1073742336,_.p,_.p,[[2,_.u],[2,_.l]]),t.Nb(1073742336,x,x,[]),t.Nb(1073742336,y.a,y.a,[]),t.Nb(1073742336,w.i,w.i,[k.j,[2,w.e],[2,f.d]]),t.Nb(1073742336,C.b,C.b,[]),t.Nb(1073742336,w.l,w.l,[]),t.Nb(1073742336,N.c,N.c,[]),t.Nb(1073742336,z.b,z.b,[]),t.Nb(1073742336,i.b,i.b,[]),t.Nb(1073742336,o.b,o.b,[]),t.Nb(1073742336,d.o,d.o,[]),t.Nb(1073742336,P.f,P.f,[]),t.Nb(1073742336,v.d,v.d,[]),t.Nb(1073742336,P.d,P.d,[]),t.Nb(1073742336,u.b,u.b,[]),t.Nb(1073742336,e,e,[]),t.Nb(1024,_.j,(function(){return[[{path:"",component:b}]]}),[])])}))},aruX:function(n,l,r){"use strict";r.d(l,"a",(function(){return b})),r.d(l,"b",(function(){return h}));var t=r("kZht"),e=(r("IkYl"),r("An66")),a=(r("vE5V"),r("pTnX")),c=(r("jL3B"),r("O1jd")),i=r("ydE+"),o=r("rmFo"),d=r("5JJz"),s=r("ENSU"),u=r("FxgA"),b=t.yb({encapsulation:2,styles:[":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-card{--card-disabled-opacity:.5;--card-disabled-menu-opacity:.3;display:flex;flex-flow:row nowrap}.ts-card :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-card h1,.ts-card h2,.ts-card h3,.ts-card h4,.ts-card h5,.ts-card p{margin:unset}.ts-card .c-card{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;background-color:var(--ts-color-light);position:relative;transition:height var(--ts-animation-time-duration-200) var(--ts-animation-easing-ease);width:100%}.ts-card .c-card:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-card .c-card:not(.c-card--aspect),.ts-card .c-card:not(.c-card--interaction){align-items:stretch;display:flex;flex-direction:row;justify-content:center}.c-card .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;width:100%}.c-card .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card .c-card__inner .c-card__title-accent-border{border-left:2px solid var(--ts-color-primary-500);padding-left:8px}.c-card .c-card__inner .c-card__title-accent-border[theme=accent]{border-left-color:var(--ts-color-accent-500)}.c-card .c-card__inner .c-card__title-accent-border[theme=warn]{border-left-color:var(--ts-color-warn-500)}.c-card--interaction:not(.c-card--disabled) .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow 250ms cubic-bezier(.4,0,.2,1);cursor:pointer}.c-card--interaction:not(.c-card--disabled) .c-card__inner:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.c-card--interaction:not(.c-card--disabled) .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card--centered .c-card__inner{align-items:center;display:flex;justify-content:center}.c-card--aspect .c-card__inner{bottom:0;left:0;position:absolute;right:0;top:0}.c-card--disabled .c-card__inner{opacity:var(--card-disabled-opacity)}.c-card--disabled .c-menu{opacity:var(--card-disabled-menu-opacity);pointer-events:none}.c-card--disabled .c-card__lock{--lock-top-alignment:2px;--lock-scale:.7;color:var(--ts-color-utility-500);position:absolute;right:var(--ts-space-inline-600);top:calc(var(--ts-space-inline-600) - var(--lock-top-alignment));transform:scale(var(--lock-scale))}.c-card--right-spacing .c-card__inner{padding-right:var(--ts-space-base-large4)}.c-card--flat>.c-card__inner{border:1px solid var(--ts-color-utility-300);box-shadow:none}.c-card--border-bottom.c-card--primary .c-card__inner{border-bottom:2px solid var(--ts-color-primary-500)}.c-card--border-bottom.c-card--accent .c-card__inner{border-bottom:2px solid var(--ts-color-accent-500)}.c-card--border-bottom.c-card--warn .c-card__inner{border-bottom:2px solid var(--ts-color-warn-500)}.c-card--border-left.c-card--primary .c-card__inner{border-left:2px solid var(--ts-color-primary-500)}.c-card--border-left.c-card--accent .c-card__inner{border-left:2px solid var(--ts-color-accent-500)}.c-card--border-left.c-card--warn .c-card__inner{border-left:2px solid var(--ts-color-warn-500)}.c-card--border-right.c-card--primary .c-card__inner{border-right:2px solid var(--ts-color-primary-500)}.c-card--border-right.c-card--accent .c-card__inner{border-right:2px solid var(--ts-color-accent-500)}.c-card--border-right.c-card--warn .c-card__inner{border-right:2px solid var(--ts-color-warn-500)}.c-card--border-top.c-card--primary .c-card__inner{border-top:2px solid var(--ts-color-primary-500)}.c-card--border-top.c-card--accent .c-card__inner{border-top:2px solid var(--ts-color-accent-500)}.c-card--border-top.c-card--warn .c-card__inner{border-top:2px solid var(--ts-color-warn-500)}.c-card__inner .ts-table~.ts-loading-overlay .c-loading-overlay{left:-var(--ts-space-inline-600);right:-var(--ts-space-inline-600)}"],data:{}});function p(n){return t.cc(0,[(n()(),t.Ab(0,16777216,null,null,1,null,null,null,null,null,null,null)),t.zb(1,540672,null,0,e.t,[t.R],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(n()(),t.jb(0,null,null,0))],(function(n,l){n(l,1,0,l.component.utilityMenuTemplate)}),null)}function g(n){return t.cc(0,[(n()(),t.Ab(0,0,null,null,2,"ts-icon",[["class","c-card__lock qa-card-lock ts-icon"]],[[2,"ts-icon--inline",null],[2,"ts-icon--primary",null],[2,"ts-icon--accent",null],[2,"ts-icon--warn",null],[2,"ts-icon--background",null]],null,null,d.b,d.a)),t.zb(1,49152,null,0,o.a,[i.d,s.b],null,null),(n()(),t.Zb(-1,0,["lock_outline"]))],null,(function(n,l){n(l,0,0,t.Pb(l,1).inline,"primary"===t.Pb(l,1).theme,"accent"===t.Pb(l,1).theme,"warn"===t.Pb(l,1).theme,t.Pb(l,1).background)}))}function h(n){return t.cc(2,[(n()(),t.Ab(0,0,null,null,9,"div",[],[[4,"paddingTop",null],[1,"id",0]],null,null,null,null)),t.zb(1,278528,null,0,e.k,[t.t,t.u,t.l,t.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Sb(2,{"c-card--interaction":0,"c-card--centered":1,"c-card--aspect":2,"c-card--disabled":3,"c-card--right-spacing":4,"c-card--flat":5}),(n()(),t.Ab(3,0,null,null,2,"div",[["class","c-card__inner mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),t.zb(4,212992,null,0,a.k,[t.l,t.A,c.a,[2,a.h],[2,u.a]],{disabled:[0,"disabled"]},null),t.Ob(null,0),(n()(),t.jb(16777216,null,null,1,null,p)),t.zb(7,16384,null,0,e.m,[t.R,t.N],{ngIf:[0,"ngIf"]},null),(n()(),t.jb(16777216,null,null,1,null,g)),t.zb(9,16384,null,0,e.m,[t.R,t.N],{ngIf:[0,"ngIf"]},null)],(function(n,l){var r=l.component,e=t.Hb(2,"c-card qa-card ",r.borderClass," c-card--",r.theme,""),a=n(l,2,0,r.supportsInteraction,r.centeredContent,r.aspectRatioPadding,r.isDisabled,r.utilityMenuTemplate||r.isDisabled,r.flat);n(l,1,0,e,a),n(l,4,0,!r.supportsInteraction||r.isDisabled),n(l,7,0,r.utilityMenuTemplate),n(l,9,0,r.isDisabled&&!r.utilityMenuTemplate)}),(function(n,l){var r=l.component;n(l,0,0,r.aspectRatioPadding,r.id),n(l,3,0,t.Pb(l,4).unbounded)}))}}}]);