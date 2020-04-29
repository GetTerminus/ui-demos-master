function _createForOfIteratorHelper(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var e,a,i=!0,r=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return i=t.done,t},e:function(t){r=!0,a=t},f:function(){try{i||null==e.return||e.return()}finally{if(r)throw a}}}}function _unsupportedIterableToArray(t,o){if(t){if("string"==typeof t)return _arrayLikeToArray(t,o);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,o):void 0}}function _arrayLikeToArray(t,o){(null==o||o>t.length)&&(o=t.length);for(var n=0,e=new Array(o);n<o;n++)e[n]=t[n];return e}function _defineProperties(t,o){for(var n=0;n<o.length;n++){var e=o[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _createClass(t,o,n){return o&&_defineProperties(t.prototype,o),n&&_defineProperties(t,n),t}function _classCallCheck(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"1ytk":function(t,o,n){"use strict";n.r(o),n.d(o,"ConfirmationModule",(function(){return A}));var e=n("2kYt"),a=n("40Bj"),i=n("nIj0"),r=n("2u5E"),c=n("EOaC"),s=n("HYj3"),l=n("EM62"),u=n("0Bg5"),b=n("ZTXN"),d=n("g6G6"),f=n("Sv/w"),p=n("7sjG"),h=n("HRj5"),m=n("qFEQ");function v(t,o){if(1&t&&(l.Xb(0,"p",5),l.Mc(1),l.Wb()),2&t){var n=l.jc();l.Db(1),l.Oc(" ",n.explanationText," ")}}var y,g,w,x=((y=function t(){_classCallCheck(this,t),this.confirm=new b.a,this.gap=u.a.large[0]}).\u0275fac=function(t){return new(t||y)},y.\u0275cmp=l.Lb({type:y,selectors:[["ts-confirmation-overlay"]],hostAttrs:[1,"ts-confirmation"],exportAs:["tsConfirmation"],decls:7,vars:4,consts:[["fxLayout","column"],["class","ts-confirmation-overlay__explanation",4,"ngIf"],["fxLayout","row","fxLayoutAlign","center space-between",3,"fxLayoutGap"],["theme","warn","format","hollow",1,"qa-confirmation-cancel",3,"clicked"],[1,"qa-confirmation-confirm",3,"clicked"],[1,"ts-confirmation-overlay__explanation"]],template:function(t,o){1&t&&(l.Xb(0,"div",0),l.Kc(1,v,2,1,"p",1),l.Xb(2,"div",2),l.Xb(3,"ts-button",3),l.fc("clicked",(function(){return o.confirm.next(!1)})),l.Mc(4),l.Wb(),l.Xb(5,"ts-button",4),l.fc("clicked",(function(){return o.confirm.next(!0)})),l.Mc(6),l.Wb(),l.Wb(),l.Wb()),2&t&&(l.Db(1),l.qc("ngIf",o.explanationText),l.Db(1),l.qc("fxLayoutGap",o.gap),l.Db(2),l.Oc(" ",o.cancelButtonText," "),l.Db(2),l.Oc(" ",o.confirmationButtonText," "))},directives:[m.d,e.m,m.c,m.e,r.a],styles:[".ts-confirmation :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-confirmation h1,.ts-confirmation h2,.ts-confirmation h3,.ts-confirmation h4,.ts-confirmation h5,.ts-confirmation p{margin:unset}.ts-confirmation-overlay{background-color:rgba(250,250,250,.5)}.ts-confirmation-overlay :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-confirmation-overlay h1,.ts-confirmation-overlay h2,.ts-confirmation-overlay h3,.ts-confirmation-overlay h4,.ts-confirmation-overlay h5,.ts-confirmation-overlay p{margin:unset}.ts-confirmation-overlay__panel{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fafafa;display:block;padding:16px}.ts-confirmation-overlay__panel :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-confirmation-overlay__panel h1,.ts-confirmation-overlay__panel h2,.ts-confirmation-overlay__panel h3,.ts-confirmation-overlay__panel h4,.ts-confirmation-overlay__panel h5,.ts-confirmation-overlay__panel p{margin:unset}.ts-confirmation-overlay__panel .ts-confirmation-overlay__explanation{margin-bottom:24px}.ts-confirmation-overlay__panel.ts-confirmation-overlay__panel-above::before{content:'';height:0;position:absolute;width:0;z-index:503;border-left:8px solid transparent;border-right:8px solid transparent;top:100%;border-top:12px solid #fafafa;left:50%}.ts-confirmation-overlay__panel.ts-confirmation-overlay__panel-below::before{content:'';height:0;position:absolute;width:0;z-index:503;border-left:8px solid transparent;border-right:8px solid transparent;bottom:100%;border-bottom:12px solid #fafafa;left:50%;transform:translateX(-50%)}.ts-confirmation-overlay__panel.ts-confirmation-overlay__panel-before::before{content:'';height:0;position:absolute;width:0;z-index:503;border-bottom:8px solid transparent;border-top:8px solid transparent;border-left:12px solid #fafafa;right:-12px;top:50%;transform:translateY(-50%)}.ts-confirmation-overlay__panel.ts-confirmation-overlay__panel-after::before{content:'';height:0;position:absolute;width:0;z-index:503;border-bottom:8px solid transparent;border-top:8px solid transparent;border-right:12px solid #fafafa;left:-12px;top:50%;transform:translateY(-50%)}"],encapsulation:2,changeDetection:0}),y),_=["above","below","before","after"],k=((w=function(){function t(o,n,e,a){_classCallCheck(this,t),this.elementRef=o,this.overlay=n,this.host=e,this.changeDetectorRef=a,this._confirmationButtonText="Confirm",this._cancelButtonText="Cancel",this._overlayPosition="below",this.cancelled=new l.o}return _createClass(t,[{key:"onClick",value:function(t){this.createOverlay()}},{key:"onKeydownHandler",value:function(){this.dismissOverlay()}},{key:"ngOnInit",value:function(){this.host.interceptClick=!0}},{key:"ngOnDestroy",value:function(){this.dismissOverlay(),this.host.interceptClick=!1}},{key:"createOverlay",value:function(){var t=this,o=this.generateOverlayConfig(this.overlayPosition);this.overlayRef=this.overlay.create(o),Object(d.a)(this.overlayRef._keydownEvents,this.overlayRef.backdropClick()).pipe(Object(h.j)(this)).subscribe((function(){t.dismissOverlay(),t.cancelled.emit(!0)}));var n=new f.d(x);this.overlayInstance=this.overlayRef.attach(n).instance,this.overlayInstance.confirmationButtonText=this.confirmationButtonText,this.overlayInstance.cancelButtonText=this.cancelButtonText,this.overlayInstance.explanationText=this.explanationText,this.host.showProgress=!0,this.overlayInstance.confirm.subscribe((function(o){Object(p.b)(o)?(t.host.clicked.emit(t.host.originalClickEvent),t.dismissOverlay()):(t.dismissOverlay(),t.cancelled.emit(!0))}))}},{key:"generateOverlayConfig",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"below",o="center",n="bottom",e="center",a="top",i="ts-confirmation-overlay__panel-below",r=0,c=0;switch(t){case"above":n="top",a="bottom",i="ts-confirmation-overlay__panel-above",r=-16;break;case"below":n="bottom",a="top",i="ts-confirmation-overlay__panel-below",r=16;break;case"before":o="start",n="center",e="end",a="center",i="ts-confirmation-overlay__panel-before",c=-38;break;case"after":o="end",n="center",e="start",a="center",i="ts-confirmation-overlay__panel-after",c=38}var l=this.overlay.position().flexibleConnectedTo(this.elementRef).withDefaultOffsetY(r).withDefaultOffsetX(c).withPositions([{originX:o,originY:n,overlayX:e,overlayY:a}]);return new s.d({positionStrategy:l,scrollStrategy:this.overlay.scrollStrategies.reposition(),hasBackdrop:!0,backdropClass:"ts-confirmation-overlay",panelClass:["qa-confirmation","ts-confirmation-overlay__panel","".concat(i)]})}},{key:"dismissOverlay",value:function(){this.overlayRef&&this.overlayRef.dispose(),this.host.showProgress=!1,this.changeDetectorRef.markForCheck()}},{key:"confirmationButtonText",set:function(t){this._confirmationButtonText=t||"Confirm"},get:function(){return this._confirmationButtonText}},{key:"cancelButtonText",set:function(t){this._cancelButtonText=t||"Cancel"},get:function(){return this._cancelButtonText}},{key:"overlayPosition",set:function(t){t&&Object(l.X)()&&_.indexOf(t)<0&&console.warn('TsConfirmationOverlay: "'.concat(t,'" is not an allowed position.')+'Allowed positions are defined by "allowedOverlayPositionTypes".'),this._overlayPosition=t},get:function(){return this._overlayPosition}}]),t}()).\u0275fac=function(t){return new(t||w)(l.Rb(l.l),l.Rb(s.c),l.Rb(r.a),l.Rb(l.h))},w.\u0275dir=l.Mb({type:w,selectors:[["","tsConfirmation",""]],hostAttrs:[1,"ts-confirmation"],hostBindings:function(t,o){1&t&&l.fc("click",(function(t){return o.onClick(t)}))("keydown.escape",(function(){return o.onKeydownHandler()}),!1,l.Bc)},inputs:{confirmationButtonText:"confirmationButtonText",cancelButtonText:"cancelButtonText",overlayPosition:"overlayPosition",explanationText:"explanationText"},outputs:{cancelled:"cancelled"},exportAs:["tsConfirmation"]}),w),C=((g=function t(){_classCallCheck(this,t)}).\u0275mod=l.Pb({type:g}),g.\u0275inj=l.Ob({factory:function(t){return new(t||g)},imports:[[e.c,a.a,s.f,r.b]]}),g),D=n("MJ8w"),O=n("sEIs");function T(t,o){if(1&t&&(l.Xb(0,"option",6),l.Mc(1),l.Wb()),2&t){var n=o.$implicit;l.rc("value",n),l.Db(1),l.Oc(" ",n," ")}}function P(t,o){if(1&t){var n=l.Yb();l.Xb(0,"ts-card",7),l.Xb(1,"h3",1),l.Mc(2,"Use 'after' when the button is on the left"),l.Wb(),l.Xb(3,"div",8),l.Xb(4,"ts-button",9),l.fc("clicked",(function(){return l.Dc(n),l.jc().submit()}))("cancelled",(function(t){return l.Dc(n),l.jc().cancel(t)})),l.Mc(5," Click Me! "),l.Wb(),l.Wb(),l.Wb()}if(2&t){var e=l.jc();l.Db(4),l.qc("showProgress",e.progress)("explanationText",e.explanation)("overlayPosition",e.myOverlayPosition)}}function j(t,o){if(1&t){var n=l.Yb();l.Xb(0,"ts-card",7),l.Xb(1,"h3",1),l.Mc(2,"Use 'before' when the button is on the right"),l.Wb(),l.Xb(3,"div",10),l.Xb(4,"ts-button",9),l.fc("clicked",(function(){return l.Dc(n),l.jc().submit()}))("cancelled",(function(t){return l.Dc(n),l.jc().cancel(t)})),l.Mc(5," Click Me! "),l.Wb(),l.Wb(),l.Wb()}if(2&t){var e=l.jc();l.Db(4),l.qc("showProgress",e.progress)("explanationText",e.explanation)("overlayPosition",e.myOverlayPosition)}}function B(t,o){if(1&t){var n=l.Yb();l.Xb(0,"ts-card",11),l.Xb(1,"ts-button",9),l.fc("clicked",(function(){return l.Dc(n),l.jc().submit()}))("cancelled",(function(t){return l.Dc(n),l.jc().cancel(t)})),l.Mc(2," Click Me! "),l.Wb(),l.Wb()}if(2&t){var e=l.jc();l.qc("centeredContent",!0),l.Db(1),l.qc("showProgress",e.progress)("explanationText",e.explanation)("overlayPosition",e.myOverlayPosition)}}var I,X,W,M=[{path:"",component:(I=function(){function t(){_classCallCheck(this,t),this.progress=!1,this.myOverlayPosition="before",this.overlayPositions=["above","below","before","after"],this.explanation="Are you sure you want to do the thing you clicked to do?"}return _createClass(t,[{key:"cancel",value:function(t){console.log("DEMO: Cancel: ",t)}},{key:"submit",value:function(){var t=this;console.log("DEMO: Real Submit"),this.progress=!0,setTimeout((function(){t.progress=!1}),2e3)}}]),t}(),I.\u0275fac=function(t){return new(t||I)},I.\u0275cmp=l.Lb({type:I,selectors:[["demo-confirmation"]],decls:11,vars:5,consts:[["tsVerticalSpacing",""],["tsCardTitle","","tsVerticalSpacing","small--0"],["name","myOverlayPosition",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["tsVerticalSpacing","","aspectRatio","5:3",4,"ngIf"],["aspectRatio","5:3",3,"centeredContent",4,"ngIf"],[3,"value"],["tsVerticalSpacing","","aspectRatio","5:3"],["fxLayout","row","fxLayoutAlign","start"],["tsConfirmation","","confirmationButtonText","Custom Confirmation Button Text",3,"showProgress","explanationText","overlayPosition","clicked","cancelled"],["fxLayout","row","fxLayoutAlign","end"],["aspectRatio","5:3",3,"centeredContent"]],template:function(t,o){1&t&&(l.Xb(0,"ts-card",0),l.Xb(1,"h3",1),l.Mc(2,"Demo Controls"),l.Wb(),l.Xb(3,"div",0),l.Xb(4,"label"),l.Mc(5," Overlay Position: "),l.Xb(6,"select",2),l.fc("ngModelChange",(function(t){return o.myOverlayPosition=t})),l.Kc(7,T,2,2,"option",3),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Kc(8,P,6,3,"ts-card",4),l.Kc(9,j,6,3,"ts-card",4),l.Kc(10,B,3,4,"ts-card",5)),2&t&&(l.Db(6),l.qc("ngModel",o.myOverlayPosition),l.Db(1),l.qc("ngForOf",o.overlayPositions),l.Db(1),l.qc("ngIf","after"===o.myOverlayPosition),l.Db(1),l.qc("ngIf","before"===o.myOverlayPosition),l.Db(1),l.qc("ngIf","above"===o.myOverlayPosition||"below"===o.myOverlayPosition))},directives:[c.a,u.c,c.c,i.A,i.q,i.t,e.l,e.m,i.u,i.C,m.d,m.c,r.a,k],encapsulation:2}),I)}],R=((W=function t(){_classCallCheck(this,t)}).\u0275mod=l.Pb({type:W}),W.\u0275inj=l.Ob({factory:function(t){return new(t||W)},imports:[[O.f.forChild(M)],O.f]}),W),A=((X=function t(){_classCallCheck(this,t)}).\u0275mod=l.Pb({type:X}),X.\u0275inj=l.Ob({factory:function(t){return new(t||X)},imports:[[e.c,R,a.a,i.m,r.b,c.b,C,D.b,u.b]]}),X)},"2u5E":function(t,o,n){"use strict";n.d(o,"a",(function(){return y})),n.d(o,"b",(function(){return g}));var e=n("2kYt"),a=n("EM62"),i=n("PBFl"),r=n("csyo"),c=n("AW5y"),s=n("ZBpG"),l=n("UkLp"),u=["button"];function b(t,o){if(1&t&&(a.Xb(0,"ts-icon",5),a.Mc(1),a.Wb()),2&t){var n=a.jc();a.Db(1),a.Oc(" ",n.iconName," ")}}var d=function(t){return{"c-button__spinner--active":t}};function f(t,o){if(1&t&&a.Sb(0,"mat-progress-spinner",6),2&t){var n=a.jc();a.qc("ngClass",a.vc(1,d,n.showProgress&&!n.isDisabled))}}var p=function(t,o){return{"c-button--collapsed":t,"c-button--progress":o}},h=["*"],m=0,v=["filled","hollow","collapsable","collapsible"],y=function(){var t=function(){function t(o,n,e){_classCallCheck(this,t),this.changeDetectorRef=o,this.windowService=n,this.renderer=e,this.isCollapsed=!1,this.interceptClick=!1,this.uid="ts-button-".concat(m++),this.actionName="Button",this.buttonType="button",this.isDisabled=!1,this._id=this.uid,this.showProgress=!1,this.tabIndex=0,this.clicked=new a.o}return _createClass(t,[{key:"ngOnInit",value:function(){if(this.collapseDelay&&(this.collapseTimeoutId=this.collapseWithDelay(this.collapseDelay)),this.theme?this.updateClasses(this.theme):this.theme="primary",this.format?this.updateClasses(this.format):this.format="filled",("collapsable"===this.format||"collapsible"===this.format)&&!this.iconName&&Object(a.X)())throw new Error("`iconName` must be defined for collapsible buttons.")}},{key:"ngOnDestroy",value:function(){this.collapseTimeoutId&&this.windowService.nativeWindow.clearTimeout(this.collapseTimeoutId)}},{key:"clickedButton",value:function(t){this.interceptClick?this.originalClickEvent=t:this.clicked.emit(t)}},{key:"collapseWithDelay",value:function(t){var o=this;return this.windowService.nativeWindow.setTimeout((function(){o.isCollapsed=!0,o.changeDetectorRef.detectChanges()}),t)}},{key:"updateClasses",value:function(t){var o=["primary","accent","warn"],n=["filled","hollow","collapsable","collapsible"],e=o.indexOf(t)>=0,a=n.indexOf(t)>=0,i=this.button?this.button._elementRef.nativeElement:null,r=o.map((function(t){return"c-button--".concat(t)})),c=n.map((function(t){return"c-button--".concat(t)}));if(e&&i){var s,l=_createForOfIteratorHelper(r);try{for(l.s();!(s=l.n()).done;){var u=s.value;this.renderer.removeClass(i,u)}}catch(p){l.e(p)}finally{l.f()}this.renderer.addClass(i,"c-button--".concat(t))}if(a&&i){var b,d=_createForOfIteratorHelper(c);try{for(d.s();!(b=d.n()).done;){var f=b.value;this.renderer.removeClass(i,f)}}catch(p){d.e(p)}finally{d.f()}this.renderer.addClass(i,"c-button--".concat(t))}}},{key:"shouldBeDisabled",get:function(){return this.isDisabled||this.showProgress}},{key:"collapsed",set:function(t){this.isCollapsed=t,!t&&this.collapseDelay&&this.collapseWithDelay(this.collapseDelay)}},{key:"format",set:function(t){t&&(v.indexOf(t)<0&&Object(a.X)()?console.warn('TsButtonComponent: "'.concat(t,'" is not an allowed format. See TsButtonFormatTypes for available options.')):("collapsable"===t&&Object(a.X)()&&console.warn('TsButtonComponent: "collapsable" has been deprecated. Please use "collapsible" instead.'),this._format=t,"collapsable"===this._format||"collapsible"===this._format?this.collapseDelay||(this.collapseDelay=4e3):this.collapseDelay&&(this.collapseDelay=void 0),this.updateClasses(t)))},get:function(){return this._format}},{key:"id",set:function(t){this._id=t||this.uid},get:function(){return this._id}},{key:"theme",set:function(t){t&&(l.f.indexOf(t)<0&&Object(a.X)()?console.warn('TsButtonComponent: "'.concat(t,'" is not an allowed theme. See TsStyleThemeTypes for available options.')):(this._theme=t,this.updateClasses(t)))},get:function(){return this._theme}}]),t}();return t.\u0275fac=function(o){return new(o||t)(a.Rb(a.h),a.Rb(c.b),a.Rb(a.F))},t.\u0275cmp=a.Lb({type:t,selectors:[["ts-button"]],viewQuery:function(t,o){var n;1&t&&a.Ic(u,!0),2&t&&a.yc(n=a.gc())&&(o.button=n.first)},hostAttrs:[1,"ts-button"],inputs:{actionName:"actionName",buttonType:"buttonType",isDisabled:"isDisabled",showProgress:"showProgress",tabIndex:"tabIndex",collapsed:"collapsed",format:"format",id:"id",theme:"theme",iconName:"iconName"},outputs:{clicked:"clicked"},exportAs:["tsButton"],ngContentSelectors:h,decls:6,vars:11,consts:[["mat-raised-button","",1,"c-button","mat-raised-button","qa-button",3,"ngClass","disabled","tabindex","click"],["button",""],["class","c-button__icon",4,"ngIf"],[1,"c-button__content"],["class","c-button__spinner qa-button-spinner","diameter","21","mode","indeterminate",3,"ngClass",4,"ngIf"],[1,"c-button__icon"],["diameter","21","mode","indeterminate",1,"c-button__spinner","qa-button-spinner",3,"ngClass"]],template:function(t,o){1&t&&(a.pc(),a.Xb(0,"button",0,1),a.fc("click",(function(t){return o.clickedButton(t)})),a.Kc(2,b,2,1,"ts-icon",2),a.Xb(3,"span",3),a.oc(4),a.Wb(),a.Kc(5,f,1,3,"mat-progress-spinner",4),a.Wb()),2&t&&(a.rc("tabindex",o.tabIndex),a.qc("ngClass",a.wc(8,p,o.isCollapsed,o.showProgress&&!o.isDisabled))("disabled",o.shouldBeDisabled),a.Eb("aria-label",o.actionName)("id",o.id)("type",o.buttonType),a.Db(2),a.qc("ngIf",o.iconName),a.Db(3),a.qc("ngIf",o.showProgress&&!o.isDisabled))},directives:[i.a,e.k,e.m,s.a,r.a],styles:[":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}ts-button{--button-lineHeight:35px;--button-rotation:360deg;--button-icon-negative-padding-adjustment:-4px;--button-collapsible-first-icon-adjustment:-.15em;--button-content-transitionDuration:var(--ts-animation-time-duration-500);--button-icon-transitionDuration-collapse:calc(var(--button-content-transitionDuration) - 100ms);--button-icon-transitionDuration-expand:calc(var(--button-icon-transitionDuration-collapse) - 100ms);--button-label-transitionDuration:calc(var(--button-icon-transitionDuration-expand) - 100ms);--button-color-transitionDuration:calc(var(--button-label-transitionDuration) - 100ms);--button-color-transition:color var(--button-color-transitionDuration) var(--ts-animation-easing-ease);--button-background-transition:background var(--button-icon-transitionDuration-collapse) var(--ts-animation-easing-ease);--button-shadow-transition:box-shadow var(--button-icon-transitionDuration-expand) var(--ts-animation-easing-ease);--button-maxWidth-transition:max-width var(--button-content-transitionDuration) var(--ts-animation-easing-ease);--button-icon-transition:transform var(--button-icon-transitionDuration-expand) var(--ts-animation-easing-ease);--button-spinner-transition:opacity var(--button-label-transitionDuration) var(--ts-animation-easing-ease);--button-margin:4px 0;--button-padding:0 var(--ts-space-inline-400);--button-padding-collapsed:0 6px;--button-border:1px solid transparent;--button-border-radius:3px;--button-border-radius-collapsible:2em;--button-backgroundColor-disabled:var(--ts-color-utility-300);--button-backgroundColor-primary:var(--ts-color-primary-500);--button-backgroundColor-accent:var(--ts-color-accent-500);--button-backgroundColor-warn:var(--ts-color-warn-500);--button-color-disabled:var(--ts-color-utility-500);--button-color:var(--ts-color-light);--button-padding-right-progress:36px;--button-icon-vertical-adjustment:-.15em;--button-icon-horizontal-adjustment:.2em}.ts-button{display:inline-block;margin:var(--button-margin)}.ts-button :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-button h1,.ts-button h2,.ts-button h3,.ts-button h4,.ts-button h5,.ts-button p{margin:unset}.ts-button .c-button{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;border:var(--button-border);border-radius:var(--button-border-radius);color:var(--button-color);line-height:var(--button-lineHeight);min-width:auto;padding:var(--button-padding);transition:var(--button-color-transition),var(--button-background-transition),var(--button-shadow-transition)}.ts-button .c-button:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-button .c-button--primary:not(.c-button--hollow){background-color:var(--button-backgroundColor-primary)}.ts-button .c-button--primary[disabled]{background-color:var(--button-backgroundColor-disabled);color:var(--button-color-disabled)}.ts-button .c-button--primary.c-button--hollow{border-color:var(--ts-color-primary-500);box-shadow:none;color:var(--ts-color-primary-500)}.ts-button .c-button--primary.c-button--hollow:focus,.ts-button .c-button--primary.c-button--hollow:hover{background-color:var(--button-backgroundColor-primary);color:var(--button-color)}.ts-button .c-button--primary.c-button--hollow[disabled]{background-color:transparent;border-color:var(--ts-color-utility-500);color:var(--ts-color-utility-500)}.ts-button .c-button--accent:not(.c-button--hollow){background-color:var(--button-backgroundColor-accent)}.ts-button .c-button--accent[disabled]{background-color:var(--button-backgroundColor-disabled);color:var(--button-color-disabled)}.ts-button .c-button--accent.c-button--hollow{border-color:var(--ts-color-accent-500);box-shadow:none;color:var(--ts-color-accent-500)}.ts-button .c-button--accent.c-button--hollow:focus,.ts-button .c-button--accent.c-button--hollow:hover{background-color:var(--button-backgroundColor-accent);color:var(--button-color)}.ts-button .c-button--accent.c-button--hollow[disabled]{background-color:transparent;border-color:var(--ts-color-utility-500);color:var(--ts-color-utility-500)}.ts-button .c-button--warn:not(.c-button--hollow){background-color:var(--button-backgroundColor-warn)}.ts-button .c-button--warn[disabled]{background-color:var(--button-backgroundColor-disabled);color:var(--button-color-disabled)}.ts-button .c-button--warn.c-button--hollow{border-color:var(--ts-color-warn-500);box-shadow:none;color:var(--ts-color-warn-500)}.ts-button .c-button--warn.c-button--hollow:focus,.ts-button .c-button--warn.c-button--hollow:hover{background-color:var(--button-backgroundColor-warn);color:var(--button-color)}.ts-button .c-button--warn.c-button--hollow[disabled]{background-color:transparent;border-color:var(--ts-color-utility-500);color:var(--ts-color-utility-500)}.ts-search .ts-button{position:relative;top:calc(var(--ts-space-stack-45) * -1)}.c-button[disabled]{cursor:not-allowed}.c-button .mat-button-wrapper{position:relative;transition:padding .2s ease-out;will-change:padding,margin}.c-button.c-button--progress .mat-button-wrapper{padding-right:var(--button-padding-right-progress)}.c-button__icon{margin-right:var(--button-icon-horizontal-adjustment)}.c-button .c-icon{margin-top:var(--button-icon-vertical-adjustment);transition:var(--button-icon-transition);vertical-align:middle;will-change:transform}.c-button .c-button__spinner{display:inline-block;opacity:0;position:absolute;right:0;top:0;transition:var(--button-spinner-transition)}.c-button .c-button__spinner--active{opacity:1}.c-button .c-button__spinner circle{stroke:var(--ts-color-utility-500)}.c-button.c-button--collapsed:not(:hover):not(:focus){padding:var(--button-padding-collapsed)}.c-button.c-button--collapsed:not(:hover):not(:focus) .ts-icon{margin-right:0}.c-button.c-button--collapsed:not(:hover):not(:focus) .c-icon{position:relative;transform:rotate(var(--button-rotation));transition-duration:var(--button-icon-transitionDuration-collapse)}.c-button.c-button--collapsed:not(:hover):not(:focus) .c-button__content{max-width:0;padding:0}.c-button.c-button--collapsable,.c-button.c-button--collapsible{border-radius:var(--button-border-radius-collapsible)}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus),.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus){padding:var(--button-padding-collapsed)}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus) .ts-icon,.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus) .ts-icon{margin-right:0}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus) .c-icon,.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus) .c-icon{position:relative;transform:rotate(var(--button-rotation));transition-duration:var(--button-icon-transitionDuration-collapse)}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus) .c-button__content,.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus) .c-button__content{max-width:0;padding:0}.c-button.c-button--collapsable:focus .c-icon,.c-button.c-button--collapsable:hover .c-icon,.c-button.c-button--collapsible:focus .c-icon,.c-button.c-button--collapsible:hover .c-icon{margin-left:var(--button-collapsible-first-icon-adjustment)}.c-button.c-button--collapsable .c-button__content,.c-button.c-button--collapsible .c-button__content{display:inline-block;max-width:400px;overflow:hidden;transition:var(--button-maxWidth-transition);white-space:nowrap}.c-button.c-button--collapsable .c-button__content .ts-icon,.c-button.c-button--collapsible .c-button__content .ts-icon{margin-left:var(--button-icon-negative-padding-adjustment);margin-right:var(--button-icon-negative-padding-adjustment)}.c-button.c-button--collapsable .mat-ripple,.c-button.c-button--collapsible .mat-ripple{border-radius:var(--button-border-radius-collapsible)}.mat-menu-panel .ts-button button.c-button{--menu-item-color:var(--ts-color-base-black);--menu-item-backgroundColor:transparent;background-color:var(--menu-item-backgroundColor);border-radius:0;box-shadow:none;color:var(--menu-item-color);text-align:left;transition-duration:var(--ts-animation-time-duration-400);transition-property:background-color,color;transition-timing-function:var(--ts-animation-easing-ease);width:100%}.mat-menu-panel .ts-button button.c-button:active,.mat-menu-panel .ts-button button.c-button:focus,.mat-menu-panel .ts-button button.c-button:hover{--menu-item-backgroundColor:var(--ts-color-utility-100);--menu-item-color:var(--ts-color-primary-500);box-shadow:none}"],encapsulation:2,changeDetection:0}),t}(),g=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=a.Pb({type:t}),t.\u0275inj=a.Ob({factory:function(o){return new(o||t)},providers:[c.b],imports:[[e.c,i.b,r.b,s.b]]}),t}()}}]);