(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"2u5E":function(t,o,n){"use strict";n.d(o,"a",(function(){return v})),n.d(o,"b",(function(){return w}));var r=n("2kYt"),e=n("EM62"),i=n("PBFl"),a=n("csyo"),c=n("AW5y"),s=n("ZBpG"),l=n("UkLp");const b=["button"];function d(t,o){if(1&t&&(e.Xb(0,"ts-icon",5),e.Mc(1),e.Wb()),2&t){const t=e.jc();e.Db(1),e.Oc(" ",t.iconName," ")}}const u=function(t){return{"c-button__spinner--active":t}};function p(t,o){if(1&t&&e.Sb(0,"mat-progress-spinner",6),2&t){const t=e.jc();e.qc("ngClass",e.vc(1,u,t.showProgress&&!t.isDisabled))}}const m=function(t,o){return{"c-button--collapsed":t,"c-button--progress":o}},h=["*"];let g=0;const f=["filled","hollow","collapsable","collapsible"];let v=(()=>{let t=class{constructor(t,o,n){this.changeDetectorRef=t,this.windowService=o,this.renderer=n,this.isCollapsed=!1,this.interceptClick=!1,this.uid=`ts-button-${g++}`,this.actionName="Button",this.buttonType="button",this.isDisabled=!1,this._id=this.uid,this.showProgress=!1,this.tabIndex=0,this.clicked=new e.o}get shouldBeDisabled(){return this.isDisabled||this.showProgress}set collapsed(t){this.isCollapsed=t,!t&&this.collapseDelay&&this.collapseWithDelay(this.collapseDelay)}set format(t){t&&(f.indexOf(t)<0&&Object(e.X)()?console.warn(`TsButtonComponent: "${t}" is not an allowed format. See TsButtonFormatTypes for available options.`):("collapsable"===t&&Object(e.X)()&&console.warn('TsButtonComponent: "collapsable" has been deprecated. Please use "collapsible" instead.'),this._format=t,"collapsable"===this._format||"collapsible"===this._format?this.collapseDelay||(this.collapseDelay=4e3):this.collapseDelay&&(this.collapseDelay=void 0),this.updateClasses(t)))}get format(){return this._format}set id(t){this._id=t||this.uid}get id(){return this._id}set theme(t){t&&(l.f.indexOf(t)<0&&Object(e.X)()?console.warn(`TsButtonComponent: "${t}" is not an allowed theme. See TsStyleThemeTypes for available options.`):(this._theme=t,this.updateClasses(t)))}get theme(){return this._theme}ngOnInit(){if(this.collapseDelay&&(this.collapseTimeoutId=this.collapseWithDelay(this.collapseDelay)),this.theme?this.updateClasses(this.theme):this.theme="primary",this.format?this.updateClasses(this.format):this.format="filled",("collapsable"===this.format||"collapsible"===this.format)&&!this.iconName&&Object(e.X)())throw new Error("`iconName` must be defined for collapsible buttons.")}ngOnDestroy(){this.collapseTimeoutId&&this.windowService.nativeWindow.clearTimeout(this.collapseTimeoutId)}clickedButton(t){this.interceptClick?this.originalClickEvent=t:this.clicked.emit(t)}collapseWithDelay(t){return this.windowService.nativeWindow.setTimeout(()=>{this.isCollapsed=!0,this.changeDetectorRef.detectChanges()},t)}updateClasses(t){const o=["primary","accent","warn"],n=["filled","hollow","collapsable","collapsible"],r=o.indexOf(t)>=0,e=n.indexOf(t)>=0,i=this.button?this.button._elementRef.nativeElement:null,a=o.map(t=>`c-button--${t}`),c=n.map(t=>`c-button--${t}`);if(r&&i){for(const t of a)this.renderer.removeClass(i,t);this.renderer.addClass(i,`c-button--${t}`)}if(e&&i){for(const t of c)this.renderer.removeClass(i,t);this.renderer.addClass(i,`c-button--${t}`)}}};return t.\u0275fac=function(o){return new(o||t)(e.Rb(e.h),e.Rb(c.b),e.Rb(e.F))},t.\u0275cmp=e.Lb({type:t,selectors:[["ts-button"]],viewQuery:function(t,o){var n;1&t&&e.Ic(b,!0),2&t&&e.yc(n=e.gc())&&(o.button=n.first)},hostAttrs:[1,"ts-button"],inputs:{actionName:"actionName",buttonType:"buttonType",isDisabled:"isDisabled",showProgress:"showProgress",tabIndex:"tabIndex",collapsed:"collapsed",format:"format",id:"id",theme:"theme",iconName:"iconName"},outputs:{clicked:"clicked"},exportAs:["tsButton"],ngContentSelectors:h,decls:6,vars:11,consts:[["mat-raised-button","",1,"c-button","mat-raised-button","qa-button",3,"ngClass","disabled","tabindex","click"],["button",""],["class","c-button__icon",4,"ngIf"],[1,"c-button__content"],["class","c-button__spinner qa-button-spinner","diameter","21","mode","indeterminate",3,"ngClass",4,"ngIf"],[1,"c-button__icon"],["diameter","21","mode","indeterminate",1,"c-button__spinner","qa-button-spinner",3,"ngClass"]],template:function(t,o){1&t&&(e.pc(),e.Xb(0,"button",0,1),e.fc("click",(function(t){return o.clickedButton(t)})),e.Kc(2,d,2,1,"ts-icon",2),e.Xb(3,"span",3),e.oc(4),e.Wb(),e.Kc(5,p,1,3,"mat-progress-spinner",4),e.Wb()),2&t&&(e.rc("tabindex",o.tabIndex),e.qc("ngClass",e.wc(8,m,o.isCollapsed,o.showProgress&&!o.isDisabled))("disabled",o.shouldBeDisabled),e.Eb("aria-label",o.actionName)("id",o.id)("type",o.buttonType),e.Db(2),e.qc("ngIf",o.iconName),e.Db(3),e.qc("ngIf",o.showProgress&&!o.isDisabled))},directives:[i.a,r.k,r.m,s.a,a.a],styles:[":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}ts-button{--button-lineHeight:35px;--button-rotation:360deg;--button-icon-negative-padding-adjustment:-4px;--button-collapsible-first-icon-adjustment:-.15em;--button-content-transitionDuration:var(--ts-animation-time-duration-500);--button-icon-transitionDuration-collapse:calc(var(--button-content-transitionDuration) - 100ms);--button-icon-transitionDuration-expand:calc(var(--button-icon-transitionDuration-collapse) - 100ms);--button-label-transitionDuration:calc(var(--button-icon-transitionDuration-expand) - 100ms);--button-color-transitionDuration:calc(var(--button-label-transitionDuration) - 100ms);--button-color-transition:color var(--button-color-transitionDuration) var(--ts-animation-easing-ease);--button-background-transition:background var(--button-icon-transitionDuration-collapse) var(--ts-animation-easing-ease);--button-shadow-transition:box-shadow var(--button-icon-transitionDuration-expand) var(--ts-animation-easing-ease);--button-maxWidth-transition:max-width var(--button-content-transitionDuration) var(--ts-animation-easing-ease);--button-icon-transition:transform var(--button-icon-transitionDuration-expand) var(--ts-animation-easing-ease);--button-spinner-transition:opacity var(--button-label-transitionDuration) var(--ts-animation-easing-ease);--button-margin:4px 0;--button-padding:0 var(--ts-space-inline-400);--button-padding-collapsed:0 6px;--button-border:1px solid transparent;--button-border-radius:3px;--button-border-radius-collapsible:2em;--button-backgroundColor-disabled:var(--ts-color-utility-300);--button-backgroundColor-primary:var(--ts-color-primary-500);--button-backgroundColor-accent:var(--ts-color-accent-500);--button-backgroundColor-warn:var(--ts-color-warn-500);--button-color-disabled:var(--ts-color-utility-500);--button-color:var(--ts-color-light);--button-padding-right-progress:36px;--button-icon-vertical-adjustment:-.15em;--button-icon-horizontal-adjustment:.2em}.ts-button{display:inline-block;margin:var(--button-margin)}.ts-button :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-button h1,.ts-button h2,.ts-button h3,.ts-button h4,.ts-button h5,.ts-button p{margin:unset}.ts-button .c-button{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;border:var(--button-border);border-radius:var(--button-border-radius);color:var(--button-color);line-height:var(--button-lineHeight);min-width:auto;padding:var(--button-padding);transition:var(--button-color-transition),var(--button-background-transition),var(--button-shadow-transition)}.ts-button .c-button:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-button .c-button--primary:not(.c-button--hollow){background-color:var(--button-backgroundColor-primary)}.ts-button .c-button--primary[disabled]{background-color:var(--button-backgroundColor-disabled);color:var(--button-color-disabled)}.ts-button .c-button--primary.c-button--hollow{border-color:var(--ts-color-primary-500);box-shadow:none;color:var(--ts-color-primary-500)}.ts-button .c-button--primary.c-button--hollow:focus,.ts-button .c-button--primary.c-button--hollow:hover{background-color:var(--button-backgroundColor-primary);color:var(--button-color)}.ts-button .c-button--primary.c-button--hollow[disabled]{background-color:transparent;border-color:var(--ts-color-utility-500);color:var(--ts-color-utility-500)}.ts-button .c-button--accent:not(.c-button--hollow){background-color:var(--button-backgroundColor-accent)}.ts-button .c-button--accent[disabled]{background-color:var(--button-backgroundColor-disabled);color:var(--button-color-disabled)}.ts-button .c-button--accent.c-button--hollow{border-color:var(--ts-color-accent-500);box-shadow:none;color:var(--ts-color-accent-500)}.ts-button .c-button--accent.c-button--hollow:focus,.ts-button .c-button--accent.c-button--hollow:hover{background-color:var(--button-backgroundColor-accent);color:var(--button-color)}.ts-button .c-button--accent.c-button--hollow[disabled]{background-color:transparent;border-color:var(--ts-color-utility-500);color:var(--ts-color-utility-500)}.ts-button .c-button--warn:not(.c-button--hollow){background-color:var(--button-backgroundColor-warn)}.ts-button .c-button--warn[disabled]{background-color:var(--button-backgroundColor-disabled);color:var(--button-color-disabled)}.ts-button .c-button--warn.c-button--hollow{border-color:var(--ts-color-warn-500);box-shadow:none;color:var(--ts-color-warn-500)}.ts-button .c-button--warn.c-button--hollow:focus,.ts-button .c-button--warn.c-button--hollow:hover{background-color:var(--button-backgroundColor-warn);color:var(--button-color)}.ts-button .c-button--warn.c-button--hollow[disabled]{background-color:transparent;border-color:var(--ts-color-utility-500);color:var(--ts-color-utility-500)}.ts-search .ts-button{position:relative;top:calc(var(--ts-space-stack-45) * -1)}.c-button[disabled]{cursor:not-allowed}.c-button .mat-button-wrapper{position:relative;transition:padding .2s ease-out;will-change:padding,margin}.c-button.c-button--progress .mat-button-wrapper{padding-right:var(--button-padding-right-progress)}.c-button__icon{margin-right:var(--button-icon-horizontal-adjustment)}.c-button .c-icon{margin-top:var(--button-icon-vertical-adjustment);transition:var(--button-icon-transition);vertical-align:middle;will-change:transform}.c-button .c-button__spinner{display:inline-block;opacity:0;position:absolute;right:0;top:0;transition:var(--button-spinner-transition)}.c-button .c-button__spinner--active{opacity:1}.c-button .c-button__spinner circle{stroke:var(--ts-color-utility-500)}.c-button.c-button--collapsed:not(:hover):not(:focus){padding:var(--button-padding-collapsed)}.c-button.c-button--collapsed:not(:hover):not(:focus) .ts-icon{margin-right:0}.c-button.c-button--collapsed:not(:hover):not(:focus) .c-icon{position:relative;transform:rotate(var(--button-rotation));transition-duration:var(--button-icon-transitionDuration-collapse)}.c-button.c-button--collapsed:not(:hover):not(:focus) .c-button__content{max-width:0;padding:0}.c-button.c-button--collapsable,.c-button.c-button--collapsible{border-radius:var(--button-border-radius-collapsible)}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus),.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus){padding:var(--button-padding-collapsed)}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus) .ts-icon,.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus) .ts-icon{margin-right:0}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus) .c-icon,.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus) .c-icon{position:relative;transform:rotate(var(--button-rotation));transition-duration:var(--button-icon-transitionDuration-collapse)}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus) .c-button__content,.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus) .c-button__content{max-width:0;padding:0}.c-button.c-button--collapsable:focus .c-icon,.c-button.c-button--collapsable:hover .c-icon,.c-button.c-button--collapsible:focus .c-icon,.c-button.c-button--collapsible:hover .c-icon{margin-left:var(--button-collapsible-first-icon-adjustment)}.c-button.c-button--collapsable .c-button__content,.c-button.c-button--collapsible .c-button__content{display:inline-block;max-width:400px;overflow:hidden;transition:var(--button-maxWidth-transition);white-space:nowrap}.c-button.c-button--collapsable .c-button__content .ts-icon,.c-button.c-button--collapsible .c-button__content .ts-icon{margin-left:var(--button-icon-negative-padding-adjustment);margin-right:var(--button-icon-negative-padding-adjustment)}.c-button.c-button--collapsable .mat-ripple,.c-button.c-button--collapsible .mat-ripple{border-radius:var(--button-border-radius-collapsible)}.mat-menu-panel .ts-button button.c-button{--menu-item-color:var(--ts-color-base-black);--menu-item-backgroundColor:transparent;background-color:var(--menu-item-backgroundColor);border-radius:0;box-shadow:none;color:var(--menu-item-color);text-align:left;transition-duration:var(--ts-animation-time-duration-400);transition-property:background-color,color;transition-timing-function:var(--ts-animation-easing-ease);width:100%}.mat-menu-panel .ts-button button.c-button:active,.mat-menu-panel .ts-button button.c-button:focus,.mat-menu-panel .ts-button button.c-button:hover{--menu-item-backgroundColor:var(--ts-color-utility-100);--menu-item-color:var(--ts-color-primary-500);box-shadow:none}"],encapsulation:2,changeDetection:0}),t})(),w=(()=>{let t=class{};return t.\u0275mod=e.Pb({type:t}),t.\u0275inj=e.Ob({factory:function(o){return new(o||t)},providers:[c.b],imports:[[r.c,i.b,a.b,s.b]]}),t})()},EOaC:function(t,o,n){"use strict";n.d(o,"a",(function(){return m})),n.d(o,"b",(function(){return g})),n.d(o,"c",(function(){return h}));var r=n("2kYt"),e=n("EM62"),i=n("mFH5"),a=n("ZBpG"),c=n("7sjG"),s=n("UkLp");function l(t,o){if(1&t&&e.Tb(0,4),2&t){const t=e.jc();e.qc("ngTemplateOutlet",t.utilityMenuTemplate)}}function b(t,o){1&t&&(e.Xb(0,"ts-icon",5),e.Mc(1,"lock_outline"),e.Wb())}const d=function(t,o,n,r,e,i){return{"c-card--interaction":t,"c-card--centered":o,"c-card--aspect":n,"c-card--disabled":r,"c-card--right-spacing":e,"c-card--flat":i}},u=["*"];let p=0,m=(()=>{let t=class{constructor(){this.uid=`ts-card-${p++}`,this._border="none",this.centeredContent=!1,this.isDisabled=!1,this.flat=!1,this._id=this.uid,this.supportsInteraction=!1,this._theme="primary"}set aspectRatio(t){const o=parseInt(t.split(":")[0],10),n=parseInt(t.split(":")[1],10);this.aspectRatioPadding=`${(n/o*100).toFixed(2)}%`}set border(t){this._border=t||"none"}get border(){return this._border}set id(t){this._id=t||this.uid}get id(){return this._id}set theme(t){this._theme=t||"primary"}get theme(){return this._theme}get borderClass(){return this.border&&"none"!==this.border?`c-card--border-${this.border}`:""}};return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Lb({type:t,selectors:[["ts-card"]],hostAttrs:[1,"ts-card"],inputs:{centeredContent:"centeredContent",isDisabled:"isDisabled",flat:"flat",supportsInteraction:"supportsInteraction",aspectRatio:"aspectRatio",border:"border",id:"id",theme:"theme",utilityMenuTemplate:"utilityMenuTemplate"},exportAs:["tsCard"],ngContentSelectors:u,decls:5,vars:18,consts:[[3,"ngClass"],["mat-ripple","",1,"c-card__inner",3,"matRippleDisabled"],[3,"ngTemplateOutlet",4,"ngIf"],["class","c-card__lock qa-card-lock",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"c-card__lock","qa-card-lock"]],template:function(t,o){1&t&&(e.pc(),e.Xb(0,"div",0),e.Xb(1,"div",1),e.oc(2),e.Wb(),e.Kc(3,l,1,1,"ng-container",2),e.Kc(4,b,2,0,"ts-icon",3),e.Wb()),2&t&&(e.Hb("c-card qa-card ",o.borderClass," c-card--",o.theme,""),e.Jc("padding-top",o.aspectRatioPadding),e.qc("ngClass",e.xc(11,d,o.supportsInteraction,o.centeredContent,o.aspectRatioPadding,o.isDisabled,o.utilityMenuTemplate||o.isDisabled,o.flat)),e.Eb("id",o.id),e.Db(1),e.qc("matRippleDisabled",!o.supportsInteraction||o.isDisabled),e.Db(2),e.qc("ngIf",o.utilityMenuTemplate),e.Db(1),e.qc("ngIf",o.isDisabled&&!o.utilityMenuTemplate))},directives:[r.k,i.o,r.m,r.r,a.a],styles:[".ts-card{display:flex;flex-flow:row nowrap}.ts-card :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-card h1,.ts-card h2,.ts-card h3,.ts-card h4,.ts-card h5,.ts-card p{margin:unset}.ts-card .c-card{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;background-color:#fafafa;position:relative;transition:height .2s;width:100%}.ts-card .c-card:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-card .c-card:not(.c-card--aspect),.ts-card .c-card:not(.c-card--interaction){align-items:stretch;display:flex;flex-direction:row;justify-content:center}.c-card .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;width:100%}.c-card .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card .c-card__inner .c-card__title-accent-border{border-left:2px solid #00538a;padding-left:8px}.c-card .c-card__inner .c-card__title-accent-border[theme=accent]{border-left-color:#2f854d}.c-card .c-card__inner .c-card__title-accent-border[theme=warn]{border-left-color:#c8604d}.c-card--interaction:not(.c-card--disabled) .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow 250ms cubic-bezier(.4,0,.2,1);cursor:pointer}.c-card--interaction:not(.c-card--disabled) .c-card__inner:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.c-card--interaction:not(.c-card--disabled) .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card--centered .c-card__inner{align-items:center;display:flex;justify-content:center}.c-card--aspect .c-card__inner{bottom:0;left:0;position:absolute;right:0;top:0}.c-card--disabled .c-card__inner{opacity:.5}.c-card--disabled .c-menu{opacity:.3;pointer-events:none}.c-card--disabled .c-card__lock{color:#999;position:absolute;right:24px;top:calc(24px - 2px);transform:scale(.7)}.c-card--right-spacing .c-card__inner{padding-right:56px}.c-card--flat>.c-card__inner{border:1px solid #cecdd1;box-shadow:none}.c-card--border-bottom.c-card--primary .c-card__inner{border-bottom:2px solid #00538a}.c-card--border-bottom.c-card--accent .c-card__inner{border-bottom:2px solid #2f854d}.c-card--border-bottom.c-card--warn .c-card__inner{border-bottom:2px solid #c8604d}.c-card--border-left.c-card--primary .c-card__inner{border-left:2px solid #00538a}.c-card--border-left.c-card--accent .c-card__inner{border-left:2px solid #2f854d}.c-card--border-left.c-card--warn .c-card__inner{border-left:2px solid #c8604d}.c-card--border-right.c-card--primary .c-card__inner{border-right:2px solid #00538a}.c-card--border-right.c-card--accent .c-card__inner{border-right:2px solid #2f854d}.c-card--border-right.c-card--warn .c-card__inner{border-right:2px solid #c8604d}.c-card--border-top.c-card--primary .c-card__inner{border-top:2px solid #00538a}.c-card--border-top.c-card--accent .c-card__inner{border-top:2px solid #2f854d}.c-card--border-top.c-card--warn .c-card__inner{border-top:2px solid #c8604d}.c-card__inner .ts-table~.ts-loading-overlay .c-loading-overlay{left:-24px;right:-24px}"],encapsulation:2,changeDetection:0}),t})(),h=(()=>{let t=class{constructor(t){if(this.theme="primary",this.tsCardTitle="c-card__title",!(t instanceof m)&&Object(e.X)())throw new s.c("The 'tsCardTitle' directive must be inside a <ts-card> component.")}set tsTitleAccentBorder(t){Object(c.b)(t)&&(this.tsCardTitle=`${this.tsCardTitle} c-card__title-accent-border`)}};return t.\u0275fac=function(o){return new(o||t)(e.Rb(m,13))},t.\u0275dir=e.Mb({type:t,selectors:[["","tsCardTitle",""]],hostVars:2,hostBindings:function(t,o){2&t&&e.Fb(o.tsCardTitle)},inputs:{theme:"theme",tsTitleAccentBorder:"tsTitleAccentBorder"}}),t})(),g=(()=>{let t=class{};return t.\u0275mod=e.Pb({type:t}),t.\u0275inj=e.Ob({factory:function(o){return new(o||t)},imports:[[r.c,i.p,a.b]]}),t})()},X5Wf:function(t,o,n){"use strict";n.r(o),n.d(o,"LoginFormModule",(function(){return x}));var r=n("2kYt"),e=n("EOaC"),i=n("EM62"),a=n("40Bj"),c=n("nIj0"),s=n("2u5E"),l=n("DN/S"),b=n("7WWT"),d=n("ww40"),u=n("0Bg5"),p=n("l50I"),m=n("qFEQ");let h=(()=>{let t=class{constructor(t,o){this.formBuilder=t,this.validatorsService=o,this.forgotPasswordLink=["/forgot"],this.forgotPasswordText="Forgot your password?",this.inProgress=!1,this.isRedirecting=!1,this.loginCTA="Log In",this.triggerFormReset=!1,this.submission=new i.o,this.loginForm=this.createForm()}get emailControl(){return this.loginForm.get("email")}get passwordControl(){return this.loginForm.get("password")}get rememberMeControl(){return this.loginForm.get("rememberMe")}ngOnChanges(t){t.hasOwnProperty("triggerFormReset")&&t.triggerFormReset.currentValue&&this.resetForm()}resetForm(){this.loginForm.reset(),this.loginForm=this.createForm()}createForm(){return this.formBuilder.group({email:new c.g("",[c.B.required,this.validatorsService.email()]),password:new c.g("",c.B.required),rememberMe:new c.g(!1)})}};return t.\u0275fac=function(o){return new(o||t)(i.Rb(c.f),i.Rb(p.b))},t.\u0275cmp=i.Lb({type:t,selectors:[["ts-login-form"]],viewQuery:function(t,o){var n;1&t&&(i.Ic(l.a,!0),i.Rc(b.a,!0)),2&t&&(i.yc(n=i.gc())&&(o.checkbox=n.first),i.yc(n=i.gc())&&(o.inputComponents=n))},hostAttrs:[1,"ts-login-form"],inputs:{forgotPasswordLink:"forgotPasswordLink",forgotPasswordText:"forgotPasswordText",inProgress:"inProgress",isRedirecting:"isRedirecting",loginCTA:"loginCTA",triggerFormReset:"triggerFormReset"},outputs:{submission:"submission"},exportAs:["tsLoginForm"],features:[i.Bb],decls:10,vars:15,consts:[["fxLayout","column",1,"c-login-form","qa-login-form",3,"formGroup","keydown.enter"],["label","Email","name","email","type","email","autocomplete","email","tabindex","-1","tabIndex","1",3,"formControl","isRequired","spellcheck","autocapitalize"],["label","Password","name","password","type","password","autocomplete","current-password","tabindex","-1","tabIndex","2",3,"formControl","isRequired","autocapitalize","spellcheck"],["tabindex","-1","tabIndex","3","tsVerticalSpacing","",3,"formControl"],["tsVerticalSpacing","","tabindex","-1","tabIndex","5",3,"destination"],["fxLayout","row","fxFlexAlign","end"],["actionName","Submit","buttonType","submit","tabindex","-1","tabIndex","4",3,"showProgress","isDisabled","clicked"]],template:function(t,o){1&t&&(i.Xb(0,"form",0),i.fc("keydown.enter",(function(){return(null==o.loginForm?null:o.loginForm.valid)&&o.submission.emit(null==o.loginForm?null:o.loginForm.value)})),i.Sb(1,"ts-input",1),i.Sb(2,"ts-input",2),i.Xb(3,"ts-checkbox",3),i.Mc(4," Remember me "),i.Wb(),i.Xb(5,"ts-link",4),i.Mc(6),i.Wb(),i.Xb(7,"div",5),i.Xb(8,"ts-button",6),i.fc("clicked",(function(){return o.submission.emit(null==o.loginForm?null:o.loginForm.value)})),i.Mc(9),i.Wb(),i.Wb(),i.Wb()),2&t&&(i.qc("formGroup",o.loginForm),i.Db(1),i.qc("formControl",o.emailControl)("isRequired",!0)("spellcheck",!1)("autocapitalize",!1),i.Db(1),i.qc("formControl",o.passwordControl)("isRequired",!0)("autocapitalize",!1)("spellcheck",!1),i.Db(1),i.qc("formControl",o.rememberMeControl),i.Db(2),i.qc("destination",o.forgotPasswordLink),i.Db(1),i.Nc(o.forgotPasswordText),i.Db(2),i.qc("showProgress",o.inProgress||o.isRedirecting)("isDisabled",!(null!=o.loginForm&&o.loginForm.valid)),i.Db(1),i.Oc(" ",o.loginCTA," "))},directives:[c.D,c.r,m.d,c.k,b.a,c.q,c.h,l.a,u.c,d.a,m.a,s.a],styles:[".ts-login-form{display:block;width:100%}.ts-login-form :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-login-form h1,.ts-login-form h2,.ts-login-form h3,.ts-login-form h4,.ts-login-form h5,.ts-login-form p{margin:unset}"],encapsulation:2,changeDetection:0}),t})(),g=(()=>{let t=class{};return t.\u0275mod=i.Pb({type:t}),t.\u0275inj=i.Ob({factory:function(o){return new(o||t)},providers:[p.b],imports:[[r.c,a.a,c.y,s.b,l.b,b.b,d.b,u.b]]}),t})();var f=n("sEIs");const v=[{path:"",component:(()=>{class t{constructor(){this.progress=!1,this.link="/reset"}formSubmission(t){console.warn("DEMO: Form value: ",t),this.progress=!0,setTimeout(()=>{this.resetForm(),this.progress=!1},1e3)}resetForm(){console.log("DEMO: Reset form"),this.loginFormComponent.resetForm()}logForm(){console.log("DEMO: Current form state: ",this.loginFormComponent.loginForm)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=i.Lb({type:t,selectors:[["demo-login-form"]],viewQuery:function(t,o){var n;1&t&&i.Ic(h,!0),2&t&&i.yc(n=i.gc())&&(o.loginFormComponent=n.first)},decls:8,vars:1,consts:[["tsVerticalSpacing",""],[3,"click"],["tsVerticalSpacing","",3,"inProgress","submission"]],template:function(t,o){1&t&&(i.Xb(0,"ts-card"),i.Xb(1,"div",0),i.Xb(2,"button",1),i.fc("click",(function(){return o.resetForm()})),i.Mc(3,"Reset Form"),i.Wb(),i.Sb(4,"br"),i.Xb(5,"button",1),i.fc("click",(function(){return o.logForm()})),i.Mc(6,"Log form to console"),i.Wb(),i.Wb(),i.Xb(7,"ts-login-form",2),i.fc("submission",(function(t){return o.formSubmission(t)})),i.Wb(),i.Wb()),2&t&&(i.Db(7),i.qc("inProgress",o.progress))},directives:[e.a,u.c,h],encapsulation:2}),t})()}];let w=(()=>{class t{}return t.\u0275mod=i.Pb({type:t}),t.\u0275inj=i.Ob({factory:function(o){return new(o||t)},imports:[[f.f.forChild(v)],f.f]}),t})(),x=(()=>{class t{}return t.\u0275mod=i.Pb({type:t}),t.\u0275inj=i.Ob({factory:function(o){return new(o||t)},imports:[[r.c,w,e.b,g,u.b]]}),t})()}}]);