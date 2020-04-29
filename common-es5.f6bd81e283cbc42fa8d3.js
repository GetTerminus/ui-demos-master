function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3z11":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return h}));var a=n("2kYt"),i=n("EM62"),r=n("40Bj"),o=n("7WWT"),s=n("nIj0"),l=n("HRj5"),c=n("C05f"),d=n("qFEQ"),u=function(){var t=function(){function t(e){_classCallCheck(this,t),this.changeDetectorRef=e,this.endMinDate$=new c.a(void 0),this.endLabel="End date",this.internalEndControl=new s.g,this.internalStartControl=new s.g,this.separator="-",this.startMaxDate$=new c.a(void 0),this.startLabel="Start date",this.isDisabled=!1,this.startingView="month",this.theme="primary",this.dateRangeChange=new i.o,this.endSelected=new i.o,this.startSelected=new i.o}return _createClass(t,[{key:"ngOnInit",value:function(){this.dateFormGroup&&this.initializeMinAndMax(this.dateFormGroup),this.endDateControl.value||this.startMaxDate$.next(this.startMaxDate),this.startDateControl.value||this.endMinDate$.next(this.endMinDate),this.setUpFormControlSync()}},{key:"ngOnDestroy",value:function(){}},{key:"setUpFormControlSync",value:function(){var t=this;if(this.dateFormGroup){var e=this.dateFormGroup.get("startDate"),n=this.dateFormGroup.get("endDate");e&&n&&(this.changeDetectorRef.detectChanges(),this.internalStartControl.setValue(e.value),this.internalEndControl.setValue(n.value),e.valueChanges.pipe(Object(l.j)(this)).subscribe((function(e){t.internalStartControl.setValue(e),t.endMinDate$.next(e)})),e.statusChanges.pipe(Object(l.j)(this)).subscribe((function(){t.internalStartControl.setErrors(e.errors)})),n.valueChanges.pipe(Object(l.j)(this)).subscribe((function(e){t.internalEndControl.setValue(e),t.startMaxDate$.next(e)})),n.statusChanges.pipe(Object(l.j)(this)).subscribe((function(){t.internalEndControl.setErrors(n.errors)})),this.changeDetectorRef.detectChanges())}}},{key:"initializeMinAndMax",value:function(t){var e=t.get("startDate"),n=t.get("endDate"),a=(n?n.value:void 0)||this.endMinDate;this.endMinDate$.next((e?e.value:void 0)||this.endMinDate),this.startMaxDate$.next(a)}},{key:"startDateSelected",value:function(t){t?(this.endMinDate$.next(t),this.dateFormGroup&&this.startDateControl&&this.startDateControl.setValue(t),this.startSelected.emit(t),this.dateRangeChange.emit(this.dateRange)):this.endMinDate$.next(this.endMinDate)}},{key:"endDateSelected",value:function(t){t?(this.startMaxDate$.next(t),this.dateFormGroup&&this.endDateControl&&this.endDateControl.setValue(t),this.endSelected.emit(t),this.dateRangeChange.emit(this.dateRange)):this.startMaxDate$.next(this.startMaxDate)}},{key:"startBlur",value:function(t){var e=this.dateFormGroup?this.dateFormGroup.get("startDate"):null,n=t||null;this.endMinDate$.next(n),e&&(e.setValue(n),e.markAsTouched(),e.updateValueAndValidity(),this.dateRangeChange.emit(this.dateRange))}},{key:"endBlur",value:function(t){var e=this.dateFormGroup?this.dateFormGroup.get("endDate"):null,n=t||null;this.startMaxDate$.next(n),e&&(e.setValue(n),e.markAsTouched(),e.updateValueAndValidity(),this.dateRangeChange.emit(this.dateRange))}},{key:"dateRange",get:function(){return{start:this.startDateControl.value,end:this.endDateControl.value}}},{key:"endDateControl",get:function(){return(this.dateFormGroup?this.dateFormGroup.get("endDate"):null)||this.internalEndControl}},{key:"startDateControl",get:function(){return(this.dateFormGroup?this.dateFormGroup.get("startDate"):null)||this.internalStartControl}},{key:"dateFormGroup",set:function(t){this._dateFormGroup=t},get:function(){return this._dateFormGroup}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Rb(i.h))},t.\u0275cmp=i.Lb({type:t,selectors:[["ts-date-range"]],hostAttrs:[1,"ts-date-range"],inputs:{isDisabled:"isDisabled",startingView:"startingView",theme:"theme",dateFormGroup:"dateFormGroup",dateLocale:"dateLocale",endMaxDate:"endMaxDate",endMinDate:"endMinDate",startMaxDate:"startMaxDate",startMinDate:"startMinDate"},outputs:{dateRangeChange:"dateRangeChange",endSelected:"endSelected",startSelected:"startSelected"},exportAs:["tsDateRange"],decls:9,vars:23,consts:[["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap",".6em",1,"c-date-range","qa-date-range"],["mask","date",1,"c-date-range--start","qa-date-range-start-datepicker",3,"dateLocale","formControl","label","maxDate","minDate","startingView","isDisabled","theme","datepicker","selected","inputBlur"],["start",""],[1,"c-date-range__separator"],["mask","date",1,"c-date-range--end","qa-date-range-end-datepicker",3,"dateLocale","formControl","label","maxDate","minDate","startingView","isDisabled","theme","datepicker","selected","inputBlur"],["end",""]],template:function(t,e){1&t&&(i.Xb(0,"div",0),i.Xb(1,"ts-input",1,2),i.fc("selected",(function(t){return e.startDateSelected(t)}))("inputBlur",(function(t){return e.startBlur(t)})),i.kc(3,"async"),i.Wb(),i.Xb(4,"span",3),i.Mc(5),i.Wb(),i.Xb(6,"ts-input",4,5),i.fc("selected",(function(t){return e.endDateSelected(t)}))("inputBlur",(function(t){return e.endBlur(t)})),i.kc(8,"async"),i.Wb(),i.Wb()),2&t&&(i.Db(1),i.qc("dateLocale",e.dateLocale)("formControl",e.internalStartControl)("label",e.startLabel)("maxDate",i.lc(3,19,e.startMaxDate$))("minDate",e.startMinDate)("startingView",e.startingView)("isDisabled",e.isDisabled||e.startDateControl.disabled)("theme",e.theme)("datepicker",!0),i.Db(4),i.Oc(" ",e.separator," "),i.Db(1),i.qc("dateLocale",e.dateLocale)("formControl",e.internalEndControl)("label",e.endLabel)("maxDate",e.endMaxDate)("minDate",i.lc(8,21,e.endMinDate$))("startingView",e.startingView)("isDisabled",e.isDisabled||e.endDateControl.disabled)("theme",e.theme)("datepicker",!0))},directives:[d.d,d.c,d.e,o.a],pipes:[a.b],styles:[".ts-date-range{display:block}.ts-date-range :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-date-range h1,.ts-date-range h2,.ts-date-range h3,.ts-date-range h4,.ts-date-range h5,.ts-date-range p{margin:unset}.c-date-range .c-date-range__separator{color:#999;margin-top:-1.2em}"],encapsulation:2,changeDetection:0}),t}(),h=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=i.Pb({type:t}),t.\u0275inj=i.Ob({factory:function(e){return new(e||t)},imports:[[a.c,r.a,o.b]]}),t}()},ww40:function(t,e,n){"use strict";n.d(e,"a",(function(){return k})),n.d(e,"b",(function(){return b}));var a=n("2kYt"),i=n("sEIs"),r=n("ZBpG"),o=n("RmZO"),s=n("EM62");function l(t,e){}function c(t,e){1&t&&s.Kc(0,l,0,0,"ng-template")}function d(t,e){if(1&t&&(s.Xb(0,"a",3),s.Kc(1,c,1,0,void 0,4),s.Wb()),2&t){var n=s.jc(),a=s.zc(3);s.rc("fragment",n.fragment),s.rc("tabindex",n.tabIndex),s.qc("routerLink",n.destination||n.localRoute),s.Db(1),s.qc("ngTemplateOutlet",a)}}function u(t,e){}function h(t,e){1&t&&s.Kc(0,u,0,0,"ng-template")}function m(t,e){1&t&&(s.Xb(0,"ts-icon"),s.Mc(1," open_in_new "),s.Wb())}function f(t,e){if(1&t&&(s.Xb(0,"a",5),s.Kc(1,h,1,0,void 0,4),s.Kc(2,m,2,0,"ts-icon",6),s.Wb()),2&t){var n=s.jc(),a=s.zc(3);s.rc("tabindex",n.tabIndex),s.qc("href",n.destination,s.Fc),s.Db(1),s.qc("ngTemplateOutlet",a),s.Db(1),s.qc("ngIf",n.showExternalIcon)}}function g(t,e){1&t&&s.oc(0)}var p=["*"],k=function(){var t=function(){function t(){_classCallCheck(this,t),this.externalIcon="open_in_new",this.localRoute=["."],this.showExternalIcon=!0,this.isExternal=!1,this.tabIndex=0,this.theme="primary"}return _createClass(t,[{key:"destination",set:function(t){Object(o.i)(t)&&(t.includes("mailto")||t.includes("tel"))&&(this.showExternalIcon=!1),this._destination=t},get:function(){return this._destination}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Lb({type:t,selectors:[["ts-link"]],hostAttrs:[1,"ts-link"],hostVars:6,hostBindings:function(t,e){2&t&&s.Ib("ts-link--primary","primary"===e.theme)("ts-link--accent","accent"===e.theme)("ts-link--warn","warn"===e.theme)},inputs:{isExternal:"isExternal",tabIndex:"tabIndex",theme:"theme",destination:"destination",fragment:"fragment"},exportAs:["tsLink"],ngContentSelectors:p,decls:4,vars:2,consts:[["class","c-link qa-link qa-link-internal",3,"routerLink","fragment","tabindex",4,"ngIf"],["class","c-link qa-link qa-link-external","target","_blank",3,"href","tabindex",4,"ngIf"],["contentTemplate",""],[1,"c-link","qa-link","qa-link-internal",3,"routerLink","fragment","tabindex"],[4,"ngTemplateOutlet"],["target","_blank",1,"c-link","qa-link","qa-link-external",3,"href","tabindex"],[4,"ngIf"]],template:function(t,e){1&t&&(s.pc(),s.Kc(0,d,2,4,"a",0),s.Kc(1,f,3,4,"a",1),s.Kc(2,g,1,0,"ng-template",null,2,s.Lc)),2&t&&(s.qc("ngIf",!e.isExternal),s.Db(1),s.qc("ngIf",e.isExternal))},directives:[a.m,i.e,a.r,r.a],styles:[":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.ts-link{--link-color:inherit;display:inline-block}.ts-link :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-link h1,.ts-link h2,.ts-link h3,.ts-link h4,.ts-link h5,.ts-link p{margin:unset}.ts-link .c-link{color:var(--link-color);display:inline-block;text-decoration:underline;transition:color var(--ts-animation-time-duration-200) var(--ts-animation-easing-ease)}.ts-link .c-link:focus{outline:0}.ts-link--primary{--link-color:var(--ts-color-primary-500)}.ts-link--primary .c-link:focus,.ts-link--primary .c-link:hover{--link-color:var(--ts-color-primary-300)}.ts-link--primary .c-link:visited{--link-color:var(--ts-color-primary-700)}.ts-link--accent{--link-color:var(--ts-color-accent-500)}.ts-link--accent .c-link:focus,.ts-link--accent .c-link:hover{--link-color:var(--ts-color-accent-300)}.ts-link--accent .c-link:visited{--link-color:var(--ts-color-accent-700)}.ts-link--warn{--link-color:var(--ts-color-warn-500)}.ts-link--warn .c-link:focus,.ts-link--warn .c-link:hover{--link-color:var(--ts-color-warn-300)}.ts-link--warn .c-link:visited{--link-color:var(--ts-color-warn-700)}.c-link .mat-icon.material-icons{--material-icon-fontSize-override:1.2em;font-size:var(--material-icon-fontSize-override);height:auto;line-height:1em;vertical-align:middle;width:auto}.c-menu .c-link{--menu-margin-adjustment-for-menu:var(--ts-space-stack-300) 0;margin:var(--menu-margin-adjustment-for-menu)}.mat-menu-content .c-link{--menu-item-color:var(--ts-color-base-black);--menu-item-backgroundColor:transparent;background-color:var(--menu-item-backgroundColor);color:var(--menu-item-color);display:block;font-weight:400;padding:var(--ts-space-inset-300) var(--ts-space-inset-500);text-decoration:none;transition-duration:var(--ts-animation-time-duration-400);transition-property:background-color,color;transition-timing-function:var(--ts-animation-easing-ease)}.mat-menu-content .c-link:focus,.mat-menu-content .c-link:hover{--menu-item-backgroundColor:var(--ts-color-utility-100);--menu-item-color:var(--ts-color-primary-500)}"],encapsulation:2,changeDetection:0}),t}(),b=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=s.Pb({type:t}),t.\u0275inj=s.Ob({factory:function(e){return new(e||t)},imports:[[a.c,i.f,r.b]]}),t}()}}]);