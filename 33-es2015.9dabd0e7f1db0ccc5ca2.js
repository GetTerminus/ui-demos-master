(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"1A4H":function(t,o,n){"use strict";n.r(o),n.d(o,"FormControlsModule",(function(){return _}));var e=n("2kYt"),a=n("40Bj"),i=n("nIj0"),r=n("2u5E"),s=n("EOaC"),c=n("DN/S"),l=n("7WWT"),b=n("6VlH"),u=n("Vv8f"),d=n("MJ8w"),p=n("yZt1"),m=n("0Bg5"),h=n("fG6x"),g=n("sEIs"),v=n("EM62"),f=n("qFEQ");const w=["*"];let y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=v.Lb({type:t,selectors:[["demo-row"]],ngContentSelectors:w,decls:2,vars:0,consts:[["fxLayout","row","fxLayoutAlign","start start","tsVerticalSpacing",""]],template:function(t,o){1&t&&(v.pc(),v.Xb(0,"div",0),v.oc(1),v.Wb())},directives:[f.d,f.c,m.c],encapsulation:2}),t})();function M(t,o){if(1&t&&(v.Xb(0,"ts-option",10),v.Mc(1),v.Wb()),2&t){const t=o.$implicit,n=v.jc();v.qc("option",t)("value",t),v.Db(1),v.Oc(" ",n.selectionListFormatter(t)," ")}}function x(t,o){if(1&t&&(v.Xb(0,"ts-option",10),v.Mc(1),v.Wb()),2&t){const t=o.$implicit,n=v.jc();v.qc("option",t)("value",t),v.Db(1),v.Oc(" ",n.selectionListFormatter(t)," ")}}function k(t,o){if(1&t&&(v.Xb(0,"ts-option",10),v.Mc(1),v.Wb()),2&t){const t=o.$implicit,n=v.jc();v.qc("option",t)("value",t),v.Db(1),v.Oc(" ",n.selectionListFormatter(t)," ")}}function D(t,o){if(1&t&&(v.Xb(0,"ts-option",10),v.Mc(1),v.Wb()),2&t){const t=o.$implicit,n=v.jc();v.qc("option",t)("value",t),v.Db(1),v.Oc(" ",n.selectionListFormatter(t)," ")}}function C(t,o){if(1&t&&(v.Xb(0,"ts-option",11),v.Mc(1),v.Wb()),2&t){const t=o.$implicit;v.qc("value",t.value),v.Db(1),v.Nc(t.name)}}const F=[{path:"",component:(()=>{class t{constructor(){this.options=[{name:"One",value:100},{name:"Two",value:200},{name:"Three",value:300}],this.selectionListModel=[this.options[0]],this.selectionListModelSingle=[this.options[0]],this.emptyModel1=[],this.emptyModel2=[],this.selectionListFormatter=t=>t?t.name:"",this.uiFormatterRadio=t=>t.name,this.modelFormatterRadio=t=>t.value,this.inputModel="My value"}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=v.Lb({type:t,selectors:[["demo-form-controls"]],hostAttrs:[1,"form-control-demo"],decls:58,vars:21,consts:[["tsVerticalSpacing",""],["label","Enter information",3,"ngModel","ngModelChange"],["label","Seeded multi-select",3,"allowMultiple","ngModel","displayFormatter","ngModelChange"],[3,"option","value",4,"ngFor","ngForOf"],["label","Seeded single select",3,"allowMultiple","ngModel","displayFormatter","ngModelChange"],["label","Empty multi-select",3,"allowMultiple","ngModel","displayFormatter","ngModelChange"],["label","Empty single select",3,"allowMultiple","ngModel","displayFormatter","ngModelChange"],[3,"options","formatUILabelFn","formatModelValueFn"],["label","Make a selection","fxFlex",""],[3,"value",4,"ngFor","ngForOf"],[3,"option","value"],[3,"value"]],template:function(t,o){1&t&&(v.Xb(0,"ts-card"),v.Xb(1,"p",0),v.Mc(2,"Horizontal alignment test cases."),v.Wb(),v.Xb(3,"demo-row"),v.Xb(4,"ts-button"),v.Mc(5,"Foo"),v.Wb(),v.Xb(6,"ts-input",1),v.fc("ngModelChange",(function(t){return o.inputModel=t})),v.Wb(),v.Xb(7,"ts-button"),v.Mc(8,"Foo"),v.Wb(),v.Wb(),v.Xb(9,"demo-row"),v.Xb(10,"ts-button"),v.Mc(11,"Foo"),v.Wb(),v.Xb(12,"ts-selection-list",2),v.fc("ngModelChange",(function(t){return o.selectionListModel=t})),v.Kc(13,M,2,3,"ts-option",3),v.Wb(),v.Xb(14,"ts-button"),v.Mc(15,"Foo"),v.Wb(),v.Xb(16,"ts-selection-list",4),v.fc("ngModelChange",(function(t){return o.selectionListModelSingle=t})),v.Kc(17,x,2,3,"ts-option",3),v.Wb(),v.Xb(18,"ts-button"),v.Mc(19,"Foo"),v.Wb(),v.Wb(),v.Xb(20,"demo-row"),v.Xb(21,"ts-button"),v.Mc(22,"Foo"),v.Wb(),v.Xb(23,"ts-selection-list",5),v.fc("ngModelChange",(function(t){return o.emptyModel1=t})),v.Kc(24,k,2,3,"ts-option",3),v.Wb(),v.Xb(25,"ts-button"),v.Mc(26,"Foo"),v.Wb(),v.Xb(27,"ts-selection-list",6),v.fc("ngModelChange",(function(t){return o.emptyModel2=t})),v.Kc(28,D,2,3,"ts-option",3),v.Wb(),v.Xb(29,"ts-button"),v.Mc(30,"Foo"),v.Wb(),v.Wb(),v.Xb(31,"demo-row"),v.Xb(32,"ts-button"),v.Mc(33,"Foo"),v.Wb(),v.Xb(34,"ts-toggle"),v.Mc(35,"Toggle Me!"),v.Wb(),v.Xb(36,"ts-button"),v.Mc(37,"Foo"),v.Wb(),v.Wb(),v.Xb(38,"demo-row"),v.Xb(39,"ts-button"),v.Mc(40,"Foo"),v.Wb(),v.Sb(41,"ts-radio-group",7),v.Xb(42,"ts-button"),v.Mc(43,"Foo"),v.Wb(),v.Wb(),v.Xb(44,"demo-row"),v.Xb(45,"ts-button"),v.Mc(46,"Foo"),v.Wb(),v.Xb(47,"ts-select",8),v.Kc(48,C,2,2,"ts-option",9),v.Wb(),v.Xb(49,"ts-button"),v.Mc(50,"Foo"),v.Wb(),v.Wb(),v.Xb(51,"demo-row"),v.Xb(52,"ts-button"),v.Mc(53,"Foo"),v.Wb(),v.Xb(54,"ts-checkbox"),v.Mc(55,"My checkbox!"),v.Wb(),v.Xb(56,"ts-button"),v.Mc(57,"Foo"),v.Wb(),v.Wb(),v.Wb()),2&t&&(v.Db(6),v.qc("ngModel",o.inputModel),v.Db(6),v.qc("allowMultiple",!0)("ngModel",o.selectionListModel)("displayFormatter",o.selectionListFormatter),v.Db(1),v.qc("ngForOf",o.options),v.Db(3),v.qc("allowMultiple",!1)("ngModel",o.selectionListModelSingle)("displayFormatter",o.selectionListFormatter),v.Db(1),v.qc("ngForOf",o.options),v.Db(6),v.qc("allowMultiple",!0)("ngModel",o.emptyModel1)("displayFormatter",o.selectionListFormatter),v.Db(1),v.qc("ngForOf",o.options),v.Db(3),v.qc("allowMultiple",!1)("ngModel",o.emptyModel2)("displayFormatter",o.selectionListFormatter),v.Db(1),v.qc("ngForOf",o.options),v.Db(13),v.qc("options",o.options)("formatUILabelFn",o.uiFormatterRadio)("formatModelValueFn",o.modelFormatterRadio),v.Db(7),v.qc("ngForOf",o.options))},directives:[s.a,m.c,y,r.a,l.a,i.q,i.t,p.a,e.l,h.a,u.a,d.a,f.b,c.a,b.c],styles:["[_nghost-%COMP%]{outline:1px solid red}[_nghost-%COMP%]     ts-card.ts-card{--white:#fff;--white-trans:hsla(0,0%,100%,0.3)}[_nghost-%COMP%]     ts-card.ts-card .c-card{background-color:rgba(34,102,153,.1);background-image:linear-gradient(var(--white) 2px,transparent 0),linear-gradient(90deg,var(--white) 2px,transparent 0),linear-gradient(hsla(0,0%,100%,.3) 1px,transparent 0),linear-gradient(90deg,hsla(0,0%,100%,.3) 1px,transparent 0);background-position:-2px -2px,-2px -2px,-1px -1px,-1px -1px;background-size:100px 100px,100px 100px,20px 20px,20px 20px}"]}),t})()}];let W=(()=>{class t{}return t.\u0275mod=v.Pb({type:t}),t.\u0275inj=v.Ob({factory:function(o){return new(o||t)},imports:[[g.f.forChild(F)],g.f]}),t})(),_=(()=>{class t{}return t.\u0275mod=v.Pb({type:t}),t.\u0275inj=v.Ob({factory:function(o){return new(o||t)},imports:[[e.c,a.a,W,i.m,i.y,r.b,s.b,c.b,l.b,b.e,u.b,p.b,d.b,m.b,h.b]]}),t})()},"2u5E":function(t,o,n){"use strict";n.d(o,"a",(function(){return f})),n.d(o,"b",(function(){return w}));var e=n("2kYt"),a=n("EM62"),i=n("PBFl"),r=n("csyo"),s=n("AW5y"),c=n("ZBpG"),l=n("UkLp");const b=["button"];function u(t,o){if(1&t&&(a.Xb(0,"ts-icon",5),a.Mc(1),a.Wb()),2&t){const t=a.jc();a.Db(1),a.Oc(" ",t.iconName," ")}}const d=function(t){return{"c-button__spinner--active":t}};function p(t,o){if(1&t&&a.Sb(0,"mat-progress-spinner",6),2&t){const t=a.jc();a.qc("ngClass",a.vc(1,d,t.showProgress&&!t.isDisabled))}}const m=function(t,o){return{"c-button--collapsed":t,"c-button--progress":o}},h=["*"];let g=0;const v=["filled","hollow","collapsable","collapsible"];let f=(()=>{let t=class{constructor(t,o,n){this.changeDetectorRef=t,this.windowService=o,this.renderer=n,this.isCollapsed=!1,this.interceptClick=!1,this.uid=`ts-button-${g++}`,this.actionName="Button",this.buttonType="button",this.isDisabled=!1,this._id=this.uid,this.showProgress=!1,this.tabIndex=0,this.clicked=new a.o}get shouldBeDisabled(){return this.isDisabled||this.showProgress}set collapsed(t){this.isCollapsed=t,!t&&this.collapseDelay&&this.collapseWithDelay(this.collapseDelay)}set format(t){t&&(v.indexOf(t)<0&&Object(a.X)()?console.warn(`TsButtonComponent: "${t}" is not an allowed format. See TsButtonFormatTypes for available options.`):("collapsable"===t&&Object(a.X)()&&console.warn('TsButtonComponent: "collapsable" has been deprecated. Please use "collapsible" instead.'),this._format=t,"collapsable"===this._format||"collapsible"===this._format?this.collapseDelay||(this.collapseDelay=4e3):this.collapseDelay&&(this.collapseDelay=void 0),this.updateClasses(t)))}get format(){return this._format}set id(t){this._id=t||this.uid}get id(){return this._id}set theme(t){t&&(l.f.indexOf(t)<0&&Object(a.X)()?console.warn(`TsButtonComponent: "${t}" is not an allowed theme. See TsStyleThemeTypes for available options.`):(this._theme=t,this.updateClasses(t)))}get theme(){return this._theme}ngOnInit(){if(this.collapseDelay&&(this.collapseTimeoutId=this.collapseWithDelay(this.collapseDelay)),this.theme?this.updateClasses(this.theme):this.theme="primary",this.format?this.updateClasses(this.format):this.format="filled",("collapsable"===this.format||"collapsible"===this.format)&&!this.iconName&&Object(a.X)())throw new Error("`iconName` must be defined for collapsible buttons.")}ngOnDestroy(){this.collapseTimeoutId&&this.windowService.nativeWindow.clearTimeout(this.collapseTimeoutId)}clickedButton(t){this.interceptClick?this.originalClickEvent=t:this.clicked.emit(t)}collapseWithDelay(t){return this.windowService.nativeWindow.setTimeout(()=>{this.isCollapsed=!0,this.changeDetectorRef.detectChanges()},t)}updateClasses(t){const o=["primary","accent","warn"],n=["filled","hollow","collapsable","collapsible"],e=o.indexOf(t)>=0,a=n.indexOf(t)>=0,i=this.button?this.button._elementRef.nativeElement:null,r=o.map(t=>`c-button--${t}`),s=n.map(t=>`c-button--${t}`);if(e&&i){for(const t of r)this.renderer.removeClass(i,t);this.renderer.addClass(i,`c-button--${t}`)}if(a&&i){for(const t of s)this.renderer.removeClass(i,t);this.renderer.addClass(i,`c-button--${t}`)}}};return t.\u0275fac=function(o){return new(o||t)(a.Rb(a.h),a.Rb(s.b),a.Rb(a.F))},t.\u0275cmp=a.Lb({type:t,selectors:[["ts-button"]],viewQuery:function(t,o){var n;1&t&&a.Ic(b,!0),2&t&&a.yc(n=a.gc())&&(o.button=n.first)},hostAttrs:[1,"ts-button"],inputs:{actionName:"actionName",buttonType:"buttonType",isDisabled:"isDisabled",showProgress:"showProgress",tabIndex:"tabIndex",collapsed:"collapsed",format:"format",id:"id",theme:"theme",iconName:"iconName"},outputs:{clicked:"clicked"},exportAs:["tsButton"],ngContentSelectors:h,decls:6,vars:11,consts:[["mat-raised-button","",1,"c-button","mat-raised-button","qa-button",3,"ngClass","disabled","tabindex","click"],["button",""],["class","c-button__icon",4,"ngIf"],[1,"c-button__content"],["class","c-button__spinner qa-button-spinner","diameter","21","mode","indeterminate",3,"ngClass",4,"ngIf"],[1,"c-button__icon"],["diameter","21","mode","indeterminate",1,"c-button__spinner","qa-button-spinner",3,"ngClass"]],template:function(t,o){1&t&&(a.pc(),a.Xb(0,"button",0,1),a.fc("click",(function(t){return o.clickedButton(t)})),a.Kc(2,u,2,1,"ts-icon",2),a.Xb(3,"span",3),a.oc(4),a.Wb(),a.Kc(5,p,1,3,"mat-progress-spinner",4),a.Wb()),2&t&&(a.rc("tabindex",o.tabIndex),a.qc("ngClass",a.wc(8,m,o.isCollapsed,o.showProgress&&!o.isDisabled))("disabled",o.shouldBeDisabled),a.Eb("aria-label",o.actionName)("id",o.id)("type",o.buttonType),a.Db(2),a.qc("ngIf",o.iconName),a.Db(3),a.qc("ngIf",o.showProgress&&!o.isDisabled))},directives:[i.a,e.k,e.m,c.a,r.a],styles:[":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}ts-button{--button-lineHeight:35px;--button-rotation:360deg;--button-icon-negative-padding-adjustment:-4px;--button-collapsible-first-icon-adjustment:-.15em;--button-content-transitionDuration:var(--ts-animation-time-duration-500);--button-icon-transitionDuration-collapse:calc(var(--button-content-transitionDuration) - 100ms);--button-icon-transitionDuration-expand:calc(var(--button-icon-transitionDuration-collapse) - 100ms);--button-label-transitionDuration:calc(var(--button-icon-transitionDuration-expand) - 100ms);--button-color-transitionDuration:calc(var(--button-label-transitionDuration) - 100ms);--button-color-transition:color var(--button-color-transitionDuration) var(--ts-animation-easing-ease);--button-background-transition:background var(--button-icon-transitionDuration-collapse) var(--ts-animation-easing-ease);--button-shadow-transition:box-shadow var(--button-icon-transitionDuration-expand) var(--ts-animation-easing-ease);--button-maxWidth-transition:max-width var(--button-content-transitionDuration) var(--ts-animation-easing-ease);--button-icon-transition:transform var(--button-icon-transitionDuration-expand) var(--ts-animation-easing-ease);--button-spinner-transition:opacity var(--button-label-transitionDuration) var(--ts-animation-easing-ease);--button-margin:4px 0;--button-padding:0 var(--ts-space-inline-400);--button-padding-collapsed:0 6px;--button-border:1px solid transparent;--button-border-radius:3px;--button-border-radius-collapsible:2em;--button-backgroundColor-disabled:var(--ts-color-utility-300);--button-backgroundColor-primary:var(--ts-color-primary-500);--button-backgroundColor-accent:var(--ts-color-accent-500);--button-backgroundColor-warn:var(--ts-color-warn-500);--button-color-disabled:var(--ts-color-utility-500);--button-color:var(--ts-color-light);--button-padding-right-progress:36px;--button-icon-vertical-adjustment:-.15em;--button-icon-horizontal-adjustment:.2em}.ts-button{display:inline-block;margin:var(--button-margin)}.ts-button :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-button h1,.ts-button h2,.ts-button h3,.ts-button h4,.ts-button h5,.ts-button p{margin:unset}.ts-button .c-button{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;border:var(--button-border);border-radius:var(--button-border-radius);color:var(--button-color);line-height:var(--button-lineHeight);min-width:auto;padding:var(--button-padding);transition:var(--button-color-transition),var(--button-background-transition),var(--button-shadow-transition)}.ts-button .c-button:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-button .c-button--primary:not(.c-button--hollow){background-color:var(--button-backgroundColor-primary)}.ts-button .c-button--primary[disabled]{background-color:var(--button-backgroundColor-disabled);color:var(--button-color-disabled)}.ts-button .c-button--primary.c-button--hollow{border-color:var(--ts-color-primary-500);box-shadow:none;color:var(--ts-color-primary-500)}.ts-button .c-button--primary.c-button--hollow:focus,.ts-button .c-button--primary.c-button--hollow:hover{background-color:var(--button-backgroundColor-primary);color:var(--button-color)}.ts-button .c-button--primary.c-button--hollow[disabled]{background-color:transparent;border-color:var(--ts-color-utility-500);color:var(--ts-color-utility-500)}.ts-button .c-button--accent:not(.c-button--hollow){background-color:var(--button-backgroundColor-accent)}.ts-button .c-button--accent[disabled]{background-color:var(--button-backgroundColor-disabled);color:var(--button-color-disabled)}.ts-button .c-button--accent.c-button--hollow{border-color:var(--ts-color-accent-500);box-shadow:none;color:var(--ts-color-accent-500)}.ts-button .c-button--accent.c-button--hollow:focus,.ts-button .c-button--accent.c-button--hollow:hover{background-color:var(--button-backgroundColor-accent);color:var(--button-color)}.ts-button .c-button--accent.c-button--hollow[disabled]{background-color:transparent;border-color:var(--ts-color-utility-500);color:var(--ts-color-utility-500)}.ts-button .c-button--warn:not(.c-button--hollow){background-color:var(--button-backgroundColor-warn)}.ts-button .c-button--warn[disabled]{background-color:var(--button-backgroundColor-disabled);color:var(--button-color-disabled)}.ts-button .c-button--warn.c-button--hollow{border-color:var(--ts-color-warn-500);box-shadow:none;color:var(--ts-color-warn-500)}.ts-button .c-button--warn.c-button--hollow:focus,.ts-button .c-button--warn.c-button--hollow:hover{background-color:var(--button-backgroundColor-warn);color:var(--button-color)}.ts-button .c-button--warn.c-button--hollow[disabled]{background-color:transparent;border-color:var(--ts-color-utility-500);color:var(--ts-color-utility-500)}.ts-search .ts-button{position:relative;top:calc(var(--ts-space-stack-45) * -1)}.c-button[disabled]{cursor:not-allowed}.c-button .mat-button-wrapper{position:relative;transition:padding .2s ease-out;will-change:padding,margin}.c-button.c-button--progress .mat-button-wrapper{padding-right:var(--button-padding-right-progress)}.c-button__icon{margin-right:var(--button-icon-horizontal-adjustment)}.c-button .c-icon{margin-top:var(--button-icon-vertical-adjustment);transition:var(--button-icon-transition);vertical-align:middle;will-change:transform}.c-button .c-button__spinner{display:inline-block;opacity:0;position:absolute;right:0;top:0;transition:var(--button-spinner-transition)}.c-button .c-button__spinner--active{opacity:1}.c-button .c-button__spinner circle{stroke:var(--ts-color-utility-500)}.c-button.c-button--collapsed:not(:hover):not(:focus){padding:var(--button-padding-collapsed)}.c-button.c-button--collapsed:not(:hover):not(:focus) .ts-icon{margin-right:0}.c-button.c-button--collapsed:not(:hover):not(:focus) .c-icon{position:relative;transform:rotate(var(--button-rotation));transition-duration:var(--button-icon-transitionDuration-collapse)}.c-button.c-button--collapsed:not(:hover):not(:focus) .c-button__content{max-width:0;padding:0}.c-button.c-button--collapsable,.c-button.c-button--collapsible{border-radius:var(--button-border-radius-collapsible)}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus),.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus){padding:var(--button-padding-collapsed)}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus) .ts-icon,.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus) .ts-icon{margin-right:0}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus) .c-icon,.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus) .c-icon{position:relative;transform:rotate(var(--button-rotation));transition-duration:var(--button-icon-transitionDuration-collapse)}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus) .c-button__content,.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus) .c-button__content{max-width:0;padding:0}.c-button.c-button--collapsable:focus .c-icon,.c-button.c-button--collapsable:hover .c-icon,.c-button.c-button--collapsible:focus .c-icon,.c-button.c-button--collapsible:hover .c-icon{margin-left:var(--button-collapsible-first-icon-adjustment)}.c-button.c-button--collapsable .c-button__content,.c-button.c-button--collapsible .c-button__content{display:inline-block;max-width:400px;overflow:hidden;transition:var(--button-maxWidth-transition);white-space:nowrap}.c-button.c-button--collapsable .c-button__content .ts-icon,.c-button.c-button--collapsible .c-button__content .ts-icon{margin-left:var(--button-icon-negative-padding-adjustment);margin-right:var(--button-icon-negative-padding-adjustment)}.c-button.c-button--collapsable .mat-ripple,.c-button.c-button--collapsible .mat-ripple{border-radius:var(--button-border-radius-collapsible)}.mat-menu-panel .ts-button button.c-button{--menu-item-color:var(--ts-color-base-black);--menu-item-backgroundColor:transparent;background-color:var(--menu-item-backgroundColor);border-radius:0;box-shadow:none;color:var(--menu-item-color);text-align:left;transition-duration:var(--ts-animation-time-duration-400);transition-property:background-color,color;transition-timing-function:var(--ts-animation-easing-ease);width:100%}.mat-menu-panel .ts-button button.c-button:active,.mat-menu-panel .ts-button button.c-button:focus,.mat-menu-panel .ts-button button.c-button:hover{--menu-item-backgroundColor:var(--ts-color-utility-100);--menu-item-color:var(--ts-color-primary-500);box-shadow:none}"],encapsulation:2,changeDetection:0}),t})(),w=(()=>{let t=class{};return t.\u0275mod=a.Pb({type:t}),t.\u0275inj=a.Ob({factory:function(o){return new(o||t)},providers:[s.b],imports:[[e.c,i.b,r.b,c.b]]}),t})()}}]);