(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"1xtn":function(n,t,o){"use strict";o.d(t,"a",function(){return i}),o.d(t,"b",function(){return c}),o.d(t,"c",function(){return r}),o("mrSG");var e=o("CcnG"),l=o("VYBx"),a=0,i=function(){function n(){this._uid="ts-card-"+a++,this._border="none",this.centeredContent=!1,this.isDisabled=!1,this.flat=!1,this._id=this._uid,this.supportsInteraction=!1,this._theme="primary",this.id=this.id}return Object.defineProperty(n.prototype,"aspectRatio",{set:function(n){var t=parseInt(n.split(":")[0],10),o=parseInt(n.split(":")[1],10);this.aspectRatioPadding=(o/t*100).toFixed(2)+"%"},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"border",{get:function(){return this._border},set:function(n){n&&(this._border=n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"id",{get:function(){return this._id},set:function(n){this._id=n||this._uid},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"theme",{get:function(){return this._theme},set:function(n){n&&(this._theme=n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"borderClass",{get:function(){return this.border&&"none"!==this.border?"c-card--border-"+this.border:""},enumerable:!0,configurable:!0}),n}(),r=function(){function n(n){if(this.theme="primary",this.tsCardTitle="c-card__title",!(n instanceof i)&&Object(e.Z)())throw Error("The 'tsCardTitle' directive must be inside a <ts-card> component.")}return Object.defineProperty(n.prototype,"tsTitleAccentBorder",{set:function(n){Object(l.b)(n)&&(this.tsCardTitle=this.tsCardTitle+" c-card__title-accent-border")},enumerable:!0,configurable:!0}),n}(),c=function(){return function(){}}()},"6EVN":function(n,t,o){"use strict";o.d(t,"a",function(){return h}),o.d(t,"b",function(){return v});var e=o("CcnG"),l=(o("neDX"),o("Ip0R")),a=(o("Wf1G"),o("Fzqc"),o("Wf4p"),o("ZYjt")),i=o("dWZg"),r=o("UodH"),c=o("Blfk"),u=o("SMsm"),s=o("SG5n"),b=o("Nfn5"),d=o("NvT6"),p=o("wFw1"),f=o("bujt"),m=o("lLAP"),h=e.tb({encapsulation:2,styles:[".ts-button{display:inline-block;margin:4px 0}.ts-button :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-button h1,.ts-button h2,.ts-button h3,.ts-button h4,.ts-button h5,.ts-button p{margin:unset}.ts-button .c-button{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;border:1px solid transparent;border-radius:3px;color:#fafafa;line-height:35px;min-width:auto;padding:0 12px;transition:color .1s cubic-bezier(.26,.86,.44,.985),background .4s cubic-bezier(.25,.8,.25,1),box-shadow .3s cubic-bezier(.4,0,.2,1)!important}.ts-button .c-button:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-search .ts-button{position:relative;top:-12px}.c-button[disabled]{cursor:not-allowed}.c-button .mat-button-wrapper{position:relative;transition:padding .2s ease-out;will-change:padding,margin}.c-button.c-button--progress .mat-button-wrapper{padding-right:36px}.c-button__icon{margin-right:.2em}.c-button .c-icon{margin-top:-.15em;transition:transform .3s cubic-bezier(.26,.86,.44,.985);vertical-align:middle;will-change:transform}.c-button .c-button__spinner{display:inline-block;opacity:0;position:absolute;right:0;top:0;transition:opacity .2s cubic-bezier(.26,.86,.44,.985);will-change:opacity}.c-button .c-button__spinner--active{opacity:1}.c-button .c-button__spinner circle{stroke:#999}.c-button.c-button--collapsed:not(:hover):not(:focus){padding-left:6px;padding-right:6px}.c-button.c-button--collapsed:not(:hover):not(:focus) .c-icon{margin-left:0;margin-right:0;position:relative;transform:rotate(360deg);transition-duration:.4s}.c-button.c-button--collapsed:not(:hover):not(:focus) .c-button__content{max-width:0;padding:0}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus){padding-left:6px;padding-right:6px}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus) .c-icon{margin-left:0;margin-right:0;position:relative;transform:rotate(360deg);transition-duration:.4s}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus) .c-button__content{max-width:0;padding:0}.c-button.c-button--primary{background-color:#00538a}.c-button.c-button--primary[disabled]{background-color:#cecdd1;color:#999}.c-button.c-button--primary.c-button--collapsable{border-radius:2em}.c-button.c-button--primary.c-button--collapsable .c-icon{margin-left:-.15em}.c-button.c-button--primary.c-button--collapsable .c-button__content{display:inline-block;max-width:400px;overflow:hidden;padding:0 12px;transition:max-width .5s cubic-bezier(.26,.86,.44,.985);white-space:nowrap}.c-button.c-button--primary.c-button--collapsable .c-button__content .ts-icon{--negative-padding-adjustment:-4px;margin-left:var(--negative-padding-adjustment);margin-right:var(--negative-padding-adjustment)}.c-button.c-button--primary.c-button--collapsable .mat-ripple{border-radius:2em}.c-button.c-button--primary.c-button--hollow{background-color:transparent;border-color:#00538a;box-shadow:none;color:#00538a}.c-button.c-button--primary.c-button--hollow:focus,.c-button.c-button--primary.c-button--hollow:hover{background-color:#00538a;color:#fafafa}.c-button.c-button--primary.c-button--hollow[disabled]{background-color:transparent;border-color:#999;color:#999}.c-button.c-button--accent{background-color:#2f854d}.c-button.c-button--accent[disabled]{background-color:#cecdd1;color:#999}.c-button.c-button--accent.c-button--collapsable{border-radius:2em}.c-button.c-button--accent.c-button--collapsable .c-icon{margin-left:-.15em}.c-button.c-button--accent.c-button--collapsable .c-button__content{display:inline-block;max-width:400px;overflow:hidden;padding:0 12px;transition:max-width .5s cubic-bezier(.26,.86,.44,.985);white-space:nowrap}.c-button.c-button--accent.c-button--collapsable .c-button__content .ts-icon{--negative-padding-adjustment:-4px;margin-left:var(--negative-padding-adjustment);margin-right:var(--negative-padding-adjustment)}.c-button.c-button--accent.c-button--collapsable .mat-ripple{border-radius:2em}.c-button.c-button--accent.c-button--hollow{background-color:transparent;border-color:#2f854d;box-shadow:none;color:#2f854d}.c-button.c-button--accent.c-button--hollow:focus,.c-button.c-button--accent.c-button--hollow:hover{background-color:#2f854d;color:#fafafa}.c-button.c-button--accent.c-button--hollow[disabled]{background-color:transparent;border-color:#999;color:#999}.c-button.c-button--warn{background-color:#c8604d}.c-button.c-button--warn[disabled]{background-color:#cecdd1;color:#999}.c-button.c-button--warn.c-button--collapsable{border-radius:2em}.c-button.c-button--warn.c-button--collapsable .c-icon{margin-left:-.15em}.c-button.c-button--warn.c-button--collapsable .c-button__content{display:inline-block;max-width:400px;overflow:hidden;padding:0 12px;transition:max-width .5s cubic-bezier(.26,.86,.44,.985);white-space:nowrap}.c-button.c-button--warn.c-button--collapsable .c-button__content .ts-icon{--negative-padding-adjustment:-4px;margin-left:var(--negative-padding-adjustment);margin-right:var(--negative-padding-adjustment)}.c-button.c-button--warn.c-button--collapsable .mat-ripple{border-radius:2em}.c-button.c-button--warn.c-button--hollow{background-color:transparent;border-color:#c8604d;box-shadow:none;color:#c8604d}.c-button.c-button--warn.c-button--hollow:focus,.c-button.c-button--warn.c-button--hollow:hover{background-color:#c8604d;color:#fafafa}.c-button.c-button--warn.c-button--hollow[disabled]{background-color:transparent;border-color:#999;color:#999}.mat-menu-panel .c-button.c-button{background-color:transparent;box-shadow:none;color:#302d35;text-align:left;width:100%}.mat-menu-panel .c-button.c-button:active,.mat-menu-panel .c-button.c-button:focus,.mat-menu-panel .c-button.c-button:hover{background-color:#f2f0f7;box-shadow:none;color:#00538a}"],data:{}});function g(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,2,"ts-icon",[["class","c-button__icon ts-icon"]],[[2,"ts-icon--inline",null],[2,"ts-icon--primary",null],[2,"ts-icon--accent",null],[2,"ts-icon--warn",null],[2,"ts-icon--background",null]],null,null,b.b,b.a)),e.ub(1,49152,null,0,s.a,[u.d,a.b],null,null),(n()(),e.Pb(2,0,[" "," "]))],null,function(n,t){var o=t.component;n(t,0,0,e.Hb(t,1).inline,"primary"===e.Hb(t,1).theme,"accent"===e.Hb(t,1).theme,"warn"===e.Hb(t,1).theme,e.Hb(t,1).background),n(t,2,0,o.iconName)})}function y(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,4,"mat-progress-spinner",[["class","c-button__spinner qa-button-spinner mat-progress-spinner"],["diameter","21"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"],[1,"aria-valuemin",0],[1,"aria-valuemax",0],[1,"aria-valuenow",0],[1,"mode",0]],null,null,d.b,d.a)),e.Mb(512,null,l.A,l.B,[e.t,e.u,e.k,e.F]),e.ub(2,278528,null,0,l.k,[l.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Kb(3,{"c-button__spinner--active":0}),e.ub(4,49152,null,0,c.b,[e.k,i.a,[2,l.d],[2,p.a],c.a],{diameter:[0,"diameter"],mode:[1,"mode"]},null)],function(n,t){var o=t.component,e=n(t,3,0,o.showProgress&&!o.isDisabled);n(t,2,0,"c-button__spinner qa-button-spinner",e),n(t,4,0,"21","indeterminate")},function(n,t){n(t,0,0,e.Hb(t,4)._noopAnimations,e.Hb(t,4).diameter,e.Hb(t,4).diameter,"determinate"===e.Hb(t,4).mode?0:null,"determinate"===e.Hb(t,4).mode?100:null,"determinate"===e.Hb(t,4).mode?e.Hb(t,4).value:null,e.Hb(t,4).mode)})}function v(n){return e.Rb(2,[e.Nb(402653184,1,{button:0}),(n()(),e.vb(1,0,null,null,10,"button",[["class","c-button mat-raised-button qa-button"],["mat-raised-button",""]],[[1,"aria-label",0],[1,"type",0],[8,"tabIndex",0],[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,t,o){var e=!0;return"click"===t&&(e=!1!==n.component.clickedButton(o)&&e),e},f.b,f.a)),e.Mb(512,null,l.A,l.B,[e.t,e.u,e.k,e.F]),e.ub(3,278528,null,0,l.k,[l.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Kb(4,{"c-button--collapsed":0,"c-button--progress":1}),e.ub(5,180224,[[1,4],["button",4]],0,r.b,[e.k,m.h,[2,p.a]],{disabled:[0,"disabled"]},null),(n()(),e.kb(16777216,null,0,1,null,g)),e.ub(7,16384,null,0,l.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(8,0,null,0,1,"span",[["class","c-button__content"]],null,null,null,null,null)),e.Gb(null,0),(n()(),e.kb(16777216,null,0,1,null,y)),e.ub(11,16384,null,0,l.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null)],function(n,t){var o=t.component,e=n(t,4,0,o.isCollapsed,o.showProgress&&!o.isDisabled);n(t,3,0,"c-button mat-raised-button qa-button",e),n(t,5,0,o.shouldBeDisabled),n(t,7,0,o.iconName),n(t,11,0,o.showProgress&&!o.isDisabled)},function(n,t){var o=t.component;n(t,1,0,o.actionName,o.buttonType,e.zb(1,"",o.tabIndex,""),e.Hb(t,5).disabled||null,"NoopAnimations"===e.Hb(t,5)._animationMode)})}},eb2L:function(n,t,o){"use strict";o.r(t);var e=o("CcnG"),l=function(){return function(){}}(),a=o("pMnS"),i=o("gIcY"),r=o("ehiB"),c=o("1xtn"),u=o("l5YW"),s=o("21Lb"),b=o("OzfB"),d=o("6EVN"),p=o("neDX"),f=o("Wf1G"),m=(o("mrSG"),o("eDkP")),h=o("K9Ia"),g=o("p0ib"),y=o("4c35"),v=o("VYBx"),x=o("6jrj"),_=function(){return function(){this.confirm=new h.a,this.gap=u.a.large[0]}}(),w=["above","below","before","after"],k=function(){function n(n,t,o,l){this.elementRef=n,this.overlay=t,this.host=o,this.changeDetectorRef=l,this._confirmationButtonText="Confirm",this._cancelButtonText="Cancel",this._overlayPosition="below",this.cancelled=new e.n}return Object.defineProperty(n.prototype,"confirmationButtonText",{get:function(){return this._confirmationButtonText},set:function(n){n&&(this._confirmationButtonText=n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"cancelButtonText",{get:function(){return this._cancelButtonText},set:function(n){n&&(this._cancelButtonText=n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"explanationText",{get:function(){return this._explanationText},set:function(n){this._explanationText=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"overlayPosition",{get:function(){return this._overlayPosition},set:function(n){n&&Object(e.Z)()&&w.indexOf(n)<0&&console.warn('TsConfirmationOverlay: "'+n+'" is not an allowed position.Allowed positions are defined by "allowedOverlayPositionTypes".'),this._overlayPosition=n},enumerable:!0,configurable:!0}),n.prototype.onClick=function(n){this.createOverlay()},n.prototype.onKeydownHandler=function(){this.dismissOverlay()},n.prototype.ngOnInit=function(){this.host.interceptClick=!0},n.prototype.ngOnDestroy=function(){this.dismissOverlay(),this.host.interceptClick=!1},n.prototype.createOverlay=function(){var n=this,t=this.generateOverlayConfig(this.overlayPosition);this.overlayRef=this.overlay.create(t),Object(g.a)(this.overlayRef._keydownEvents,this.overlayRef.backdropClick()).pipe(Object(x.h)(this)).subscribe(function(){n.dismissOverlay(),n.cancelled.emit(!0)});var o=new y.d(_);this.overlayInstance=this.overlayRef.attach(o).instance,this.overlayInstance.confirmationButtonTxt=this.confirmationButtonText,this.overlayInstance.cancelButtonTxt=this.cancelButtonText,this.overlayInstance.explanationTxt=this.explanationText,this.host.showProgress=!0,this.overlayInstance.confirm.subscribe(function(t){Object(v.b)(t)?(n.host.clicked.emit(n.host.originalClickEvent),n.dismissOverlay()):(n.dismissOverlay(),n.cancelled.emit(!0))})},n.prototype.generateOverlayConfig=function(n){void 0===n&&(n="below");var t="center",o="bottom",e="center",l="top",a="ts-confirmation-overlay__panel-below",i=0,r=0;switch(n){case"above":o="top",l="bottom",a="ts-confirmation-overlay__panel-above",i=-16;break;case"below":o="bottom",l="top",a="ts-confirmation-overlay__panel-below",i=16;break;case"before":t="start",o="center",e="end",l="center",a="ts-confirmation-overlay__panel-before",r=-38;break;case"after":t="end",o="center",e="start",l="center",a="ts-confirmation-overlay__panel-after",r=38}var c=this.overlay.position().flexibleConnectedTo(this.elementRef).withDefaultOffsetY(i).withDefaultOffsetX(r).withPositions([{originX:t,originY:o,overlayX:e,overlayY:l}]);return new m.d({positionStrategy:c,scrollStrategy:this.overlay.scrollStrategies.reposition(),hasBackdrop:!0,backdropClass:"ts-confirmation-overlay",panelClass:["qa-confirmation","ts-confirmation-overlay__panel",""+a]})},n.prototype.dismissOverlay=function(){this.overlayRef&&this.overlayRef.dispose(),this.host.showProgress=!1,this.changeDetectorRef.markForCheck()},n}(),C=function(){return function(){}}(),F=o("Ip0R"),T=function(){function n(){this.progress=!1,this.myOverlayPosition="before",this.overlayPositions=["above","below","before","after"],this.explanation="Are you sure you want to do the thing you clicked to do?"}return n.prototype.cancel=function(n){console.log("DEMO: Cancel: ",n)},n.prototype.submit=function(){var n=this;console.log("DEMO: Real Submit"),this.progress=!0,setTimeout(function(){n.progress=!1},2e3)},n}(),P=e.tb({encapsulation:2,styles:[],data:{}});function O(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,3,"option",[],null,null,null,null,null)),e.ub(1,147456,null,0,i.x,[e.k,e.F,[2,i.D]],{value:[0,"value"]},null),e.ub(2,147456,null,0,i.I,[e.k,e.F,[8,null]],{value:[0,"value"]},null),(n()(),e.Pb(3,null,[" "," "]))],function(n,t){n(t,1,0,e.zb(1,"",t.context.$implicit,"")),n(t,2,0,e.zb(1,"",t.context.$implicit,""))},function(n,t){n(t,3,0,t.context.$implicit)})}function R(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,13,"ts-card",[["aspectRatio","5:3"],["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,r.b,r.a)),e.ub(1,49152,null,0,c.a,[],{aspectRatio:[0,"aspectRatio"]},null),e.ub(2,16384,null,0,u.c,[e.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),e.vb(3,0,null,0,3,"h3",[["tsCardTitle",""],["tsVerticalSpacing","small--0"]],[[8,"className",0]],null,null,null,null)),e.ub(4,16384,null,0,c.c,[[3,c.a]],null,null),e.ub(5,16384,null,0,u.c,[e.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),e.Pb(-1,null,["Use 'after' when the button is on the left"])),(n()(),e.vb(7,0,null,0,6,"div",[["fxLayout","row"],["fxLayoutAlign","start"]],null,null,null,null,null)),e.ub(8,671744,null,0,s.d,[e.k,b.i,[2,s.m],b.f],{fxLayout:[0,"fxLayout"]},null),e.ub(9,671744,null,0,s.c,[e.k,b.i,[2,s.k],b.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(n()(),e.vb(10,0,null,null,3,"ts-button",[["class","ts-button ts-confirmation"],["confirmationButtonText","Custom Confirmation Button Text"],["tsConfirmation",""]],null,[[null,"clicked"],[null,"cancelled"],[null,"click"],["document","keydown.escape"]],function(n,t,o){var l=!0,a=n.component;return"click"===t&&(l=!1!==e.Hb(n,12).onClick(o)&&l),"document:keydown.escape"===t&&(l=!1!==e.Hb(n,12).onKeydownHandler()&&l),"clicked"===t&&(l=!1!==a.submit()&&l),"cancelled"===t&&(l=!1!==a.cancel(o)&&l),l},d.b,d.a)),e.ub(11,245760,null,0,p.a,[e.h,f.b,e.F],{showProgress:[0,"showProgress"]},{clicked:"clicked"}),e.ub(12,212992,null,0,k,[e.k,m.c,p.a,e.h],{confirmationButtonText:[0,"confirmationButtonText"],explanationText:[1,"explanationText"],overlayPosition:[2,"overlayPosition"]},{cancelled:"cancelled"}),(n()(),e.Pb(-1,0,[" Click Me! "]))],function(n,t){var o=t.component;n(t,1,0,"5:3"),n(t,2,0,""),n(t,5,0,"small--0"),n(t,8,0,"row"),n(t,9,0,"start"),n(t,11,0,o.progress),n(t,12,0,"Custom Confirmation Button Text",o.explanation,o.myOverlayPosition)},function(n,t){n(t,3,0,e.Hb(t,4).tsCardTitle)})}function j(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,13,"ts-card",[["aspectRatio","5:3"],["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,r.b,r.a)),e.ub(1,49152,null,0,c.a,[],{aspectRatio:[0,"aspectRatio"]},null),e.ub(2,16384,null,0,u.c,[e.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),e.vb(3,0,null,0,3,"h3",[["tsCardTitle",""],["tsVerticalSpacing","small--0"]],[[8,"className",0]],null,null,null,null)),e.ub(4,16384,null,0,c.c,[[3,c.a]],null,null),e.ub(5,16384,null,0,u.c,[e.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),e.Pb(-1,null,["Use 'before' when the button is on the right"])),(n()(),e.vb(7,0,null,0,6,"div",[["fxLayout","row"],["fxLayoutAlign","end"]],null,null,null,null,null)),e.ub(8,671744,null,0,s.d,[e.k,b.i,[2,s.m],b.f],{fxLayout:[0,"fxLayout"]},null),e.ub(9,671744,null,0,s.c,[e.k,b.i,[2,s.k],b.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(n()(),e.vb(10,0,null,null,3,"ts-button",[["class","ts-button ts-confirmation"],["confirmationButtonText","Custom Confirmation Button Text"],["tsConfirmation",""]],null,[[null,"clicked"],[null,"cancelled"],[null,"click"],["document","keydown.escape"]],function(n,t,o){var l=!0,a=n.component;return"click"===t&&(l=!1!==e.Hb(n,12).onClick(o)&&l),"document:keydown.escape"===t&&(l=!1!==e.Hb(n,12).onKeydownHandler()&&l),"clicked"===t&&(l=!1!==a.submit()&&l),"cancelled"===t&&(l=!1!==a.cancel(o)&&l),l},d.b,d.a)),e.ub(11,245760,null,0,p.a,[e.h,f.b,e.F],{showProgress:[0,"showProgress"]},{clicked:"clicked"}),e.ub(12,212992,null,0,k,[e.k,m.c,p.a,e.h],{confirmationButtonText:[0,"confirmationButtonText"],explanationText:[1,"explanationText"],overlayPosition:[2,"overlayPosition"]},{cancelled:"cancelled"}),(n()(),e.Pb(-1,0,[" Click Me! "]))],function(n,t){var o=t.component;n(t,1,0,"5:3"),n(t,2,0,""),n(t,5,0,"small--0"),n(t,8,0,"row"),n(t,9,0,"end"),n(t,11,0,o.progress),n(t,12,0,"Custom Confirmation Button Text",o.explanation,o.myOverlayPosition)},function(n,t){n(t,3,0,e.Hb(t,4).tsCardTitle)})}function H(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,5,"ts-card",[["aspectRatio","5:3"],["class","ts-card"]],null,null,null,r.b,r.a)),e.ub(1,49152,null,0,c.a,[],{aspectRatio:[0,"aspectRatio"],centeredContent:[1,"centeredContent"]},null),(n()(),e.vb(2,0,null,0,3,"ts-button",[["class","ts-button ts-confirmation"],["confirmationButtonText","Custom Confirmation Button Text"],["tsConfirmation",""]],null,[[null,"clicked"],[null,"cancelled"],[null,"click"],["document","keydown.escape"]],function(n,t,o){var l=!0,a=n.component;return"click"===t&&(l=!1!==e.Hb(n,4).onClick(o)&&l),"document:keydown.escape"===t&&(l=!1!==e.Hb(n,4).onKeydownHandler()&&l),"clicked"===t&&(l=!1!==a.submit()&&l),"cancelled"===t&&(l=!1!==a.cancel(o)&&l),l},d.b,d.a)),e.ub(3,245760,null,0,p.a,[e.h,f.b,e.F],{showProgress:[0,"showProgress"]},{clicked:"clicked"}),e.ub(4,212992,null,0,k,[e.k,m.c,p.a,e.h],{confirmationButtonText:[0,"confirmationButtonText"],explanationText:[1,"explanationText"],overlayPosition:[2,"overlayPosition"]},{cancelled:"cancelled"}),(n()(),e.Pb(-1,0,[" Click Me! "]))],function(n,t){var o=t.component;n(t,1,0,"5:3",!0),n(t,3,0,o.progress),n(t,4,0,"Custom Confirmation Button Text",o.explanation,o.myOverlayPosition)},null)}function B(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,18,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,r.b,r.a)),e.ub(1,49152,null,0,c.a,[],null,null),e.ub(2,16384,null,0,u.c,[e.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),e.vb(3,0,null,0,3,"h3",[["tsCardTitle",""],["tsVerticalSpacing","small--0"]],[[8,"className",0]],null,null,null,null)),e.ub(4,16384,null,0,c.c,[[3,c.a]],null,null),e.ub(5,16384,null,0,u.c,[e.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),e.Pb(-1,null,["Demo Controls"])),(n()(),e.vb(7,0,null,0,11,"div",[["tsVerticalSpacing",""]],null,null,null,null,null)),e.ub(8,16384,null,0,u.c,[e.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),e.vb(9,0,null,null,9,"label",[],null,null,null,null,null)),(n()(),e.Pb(-1,null,[" Overlay Position: "])),(n()(),e.vb(11,0,null,null,7,"select",[["name","myOverlayPosition"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,t,o){var l=!0,a=n.component;return"change"===t&&(l=!1!==e.Hb(n,12).onChange(o.target.value)&&l),"blur"===t&&(l=!1!==e.Hb(n,12).onTouched()&&l),"ngModelChange"===t&&(l=!1!==(a.myOverlayPosition=o)&&l),l},null,null)),e.ub(12,16384,null,0,i.D,[e.F,e.k],null,null),e.Mb(1024,null,i.r,function(n){return[n]},[i.D]),e.ub(14,671744,null,0,i.w,[[8,null],[8,null],[8,null],[6,i.r]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Mb(2048,null,i.s,null,[i.w]),e.ub(16,16384,null,0,i.t,[[4,i.s]],null,null),(n()(),e.kb(16777216,null,null,1,null,O)),e.ub(18,278528,null,0,F.l,[e.R,e.N,e.t],{ngForOf:[0,"ngForOf"]},null),(n()(),e.kb(16777216,null,null,1,null,R)),e.ub(20,16384,null,0,F.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e.kb(16777216,null,null,1,null,j)),e.ub(22,16384,null,0,F.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e.kb(16777216,null,null,1,null,H)),e.ub(24,16384,null,0,F.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null)],function(n,t){var o=t.component;n(t,2,0,""),n(t,5,0,"small--0"),n(t,8,0,""),n(t,14,0,"myOverlayPosition",o.myOverlayPosition),n(t,18,0,o.overlayPositions),n(t,20,0,"after"===o.myOverlayPosition),n(t,22,0,"before"===o.myOverlayPosition),n(t,24,0,"above"===o.myOverlayPosition||"below"===o.myOverlayPosition)},function(n,t){n(t,3,0,e.Hb(t,4).tsCardTitle),n(t,11,0,e.Hb(t,16).ngClassUntouched,e.Hb(t,16).ngClassTouched,e.Hb(t,16).ngClassPristine,e.Hb(t,16).ngClassDirty,e.Hb(t,16).ngClassValid,e.Hb(t,16).ngClassInvalid,e.Hb(t,16).ngClassPending)})}function S(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,1,"demo-confirmation",[],null,null,null,B,P)),e.ub(1,49152,null,0,T,[],null,null)],null,null)}var D=e.rb("demo-confirmation",T,S,{},{},[]),I=o("Fzqc"),L=o("hUWP"),N=o("3pJQ"),z=o("V9q+"),A=o("dWZg"),V=o("qAlS"),M=o("Wf4p"),G=o("ZYjt"),q=o("UodH"),W=o("Blfk"),Y=o("SMsm"),Z=o("SG5n"),E=e.tb({encapsulation:2,styles:[".ts-confirmation :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-confirmation h1,.ts-confirmation h2,.ts-confirmation h3,.ts-confirmation h4,.ts-confirmation h5,.ts-confirmation p{margin:unset}.ts-confirmation-overlay{background-color:rgba(250,250,250,.5)}.ts-confirmation-overlay :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-confirmation-overlay h1,.ts-confirmation-overlay h2,.ts-confirmation-overlay h3,.ts-confirmation-overlay h4,.ts-confirmation-overlay h5,.ts-confirmation-overlay p{margin:unset}.ts-confirmation-overlay__panel{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fafafa;display:block;padding:16px}.ts-confirmation-overlay__panel :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-confirmation-overlay__panel h1,.ts-confirmation-overlay__panel h2,.ts-confirmation-overlay__panel h3,.ts-confirmation-overlay__panel h4,.ts-confirmation-overlay__panel h5,.ts-confirmation-overlay__panel p{margin:unset}.ts-confirmation-overlay__panel .ts-confirmation-overlay__explanation{margin-bottom:24px}.ts-confirmation-overlay__panel.ts-confirmation-overlay__panel-above::before{content:'';height:0;position:absolute;width:0;z-index:503;border-left:8px solid transparent;border-right:8px solid transparent;top:100%;border-top:12px solid #fafafa;left:50%}.ts-confirmation-overlay__panel.ts-confirmation-overlay__panel-below::before{content:'';height:0;position:absolute;width:0;z-index:503;border-left:8px solid transparent;border-right:8px solid transparent;bottom:100%;border-bottom:12px solid #fafafa;left:50%;transform:translateX(-50%)}.ts-confirmation-overlay__panel.ts-confirmation-overlay__panel-before::before{content:'';height:0;position:absolute;width:0;z-index:503;border-bottom:8px solid transparent;border-top:8px solid transparent;border-left:12px solid #fafafa;right:-12px;top:50%;transform:translateY(-50%)}.ts-confirmation-overlay__panel.ts-confirmation-overlay__panel-after::before{content:'';height:0;position:absolute;width:0;z-index:503;border-bottom:8px solid transparent;border-top:8px solid transparent;border-right:12px solid #fafafa;left:-12px;top:50%;transform:translateY(-50%)}"],data:{}});function K(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,1,"p",[["class","ts-confirmation-overlay__explanation"]],null,null,null,null,null)),(n()(),e.Pb(1,null,["",""]))],null,function(n,t){n(t,1,0,t.component.explanationTxt)})}function X(n){return e.Rb(2,[(n()(),e.vb(0,0,null,null,13,"div",[["fxLayout","column"]],null,null,null,null,null)),e.ub(1,671744,null,0,s.d,[e.k,b.i,[2,s.m],b.f],{fxLayout:[0,"fxLayout"]},null),(n()(),e.kb(16777216,null,null,1,null,K)),e.ub(3,16384,null,0,F.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(4,0,null,null,9,"div",[["fxLayout","row"],["fxLayoutAlign","center space-between"]],null,null,null,null,null)),e.ub(5,671744,null,0,s.d,[e.k,b.i,[2,s.m],b.f],{fxLayout:[0,"fxLayout"]},null),e.ub(6,1720320,null,0,s.e,[e.k,e.A,I.b,b.i,[2,s.l],b.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),e.ub(7,671744,null,0,s.c,[e.k,b.i,[2,s.k],b.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(n()(),e.vb(8,0,null,null,2,"ts-button",[["class","qa-confirmation-cancel ts-button"],["format","hollow"],["theme","warn"]],null,[[null,"clicked"]],function(n,t,o){var e=!0;return"clicked"===t&&(e=!1!==n.component.confirm.next(!1)&&e),e},d.b,d.a)),e.ub(9,245760,null,0,p.a,[e.h,f.b,e.F],{format:[0,"format"],theme:[1,"theme"]},{clicked:"clicked"}),(n()(),e.Pb(10,0,[" "," "])),(n()(),e.vb(11,0,null,null,2,"ts-button",[["class","qa-confirmation-confirm ts-button"]],null,[[null,"clicked"]],function(n,t,o){var e=!0;return"clicked"===t&&(e=!1!==n.component.confirm.next(!0)&&e),e},d.b,d.a)),e.ub(12,245760,null,0,p.a,[e.h,f.b,e.F],null,{clicked:"clicked"}),(n()(),e.Pb(13,0,[" "," "]))],function(n,t){var o=t.component;n(t,1,0,"column"),n(t,3,0,o.explanationTxt),n(t,5,0,"row"),n(t,6,0,o.gap),n(t,7,0,"center space-between"),n(t,9,0,"hollow","warn"),n(t,12,0)},function(n,t){var o=t.component;n(t,10,0,o.cancelButtonTxt),n(t,13,0,o.confirmationButtonTxt)})}function U(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,1,"ts-confirmation-overlay",[["class","ts-confirmation"]],null,null,null,X,E)),e.ub(1,49152,null,0,_,[],null,null)],null,null)}var J=e.rb("ts-confirmation-overlay",_,U,{},{},[]),Q=o("t68o"),$=o("zbXB"),nn=o("M2Lx"),tn=o("iLpn"),on=o("ZsLu"),en=o("o3x0"),ln=o("jQLj"),an=o("MStg"),rn=o("ZYCi"),cn=function(){return function(){}}(),un=o("/dO6"),sn=o("de3e"),bn=o("HL5S"),dn=o("qQLB"),pn=o("lLAP"),fn=o("KpYI"),mn=o("rK0N"),hn=o("mxRT"),gn=o("YSh2");o.d(t,"ConfirmationModuleNgFactory",function(){return yn});var yn=e.sb(l,[],function(n){return e.Eb([e.Fb(512,e.j,e.db,[[8,[a.a,D,J,Q.a,$.b,$.a]],[3,e.j],e.y]),e.Fb(4608,F.o,F.n,[e.v,[2,F.F]]),e.Fb(5120,e.b,function(n,t){return[b.j(n,t)]},[F.d,e.C]),e.Fb(4608,i.G,i.G,[]),e.Fb(4608,f.b,f.b,[]),e.Fb(4608,m.c,m.c,[m.i,m.e,e.j,m.h,m.f,e.r,e.A,F.d,I.b,[2,F.i]]),e.Fb(5120,m.j,m.k,[m.c]),e.Fb(4608,M.d,M.d,[]),e.Fb(4608,i.h,i.h,[]),e.Fb(4608,nn.c,nn.c,[]),e.Fb(4608,tn.a,tn.a,[]),e.Fb(4608,tn.c,tn.c,[]),e.Fb(4608,tn.d,tn.d,[]),e.Fb(4608,tn.e,tn.e,[]),e.Fb(4608,tn.f,tn.f,[]),e.Fb(4608,tn.g,tn.g,[]),e.Fb(4608,on.c,on.c,[tn.a]),e.Fb(5120,en.b,en.c,[m.c]),e.Fb(135680,en.d,en.d,[m.c,e.r,[2,F.i],[2,en.a],en.b,[3,en.d],m.e]),e.Fb(4608,ln.i,ln.i,[]),e.Fb(5120,ln.a,ln.b,[m.c]),e.Fb(4608,M.c,M.o,[[2,M.h],A.a]),e.Fb(4608,an.b,an.b,[]),e.Fb(1073742336,F.c,F.c,[]),e.Fb(1073742336,rn.p,rn.p,[[2,rn.u],[2,rn.l]]),e.Fb(1073742336,cn,cn,[]),e.Fb(1073742336,b.c,b.c,[]),e.Fb(1073742336,I.a,I.a,[]),e.Fb(1073742336,s.i,s.i,[]),e.Fb(1073742336,L.b,L.b,[]),e.Fb(1073742336,N.a,N.a,[]),e.Fb(1073742336,z.a,z.a,[[2,b.g],e.C]),e.Fb(1073742336,i.F,i.F,[]),e.Fb(1073742336,i.o,i.o,[]),e.Fb(1073742336,M.k,M.k,[[2,M.f],[2,G.f]]),e.Fb(1073742336,A.b,A.b,[]),e.Fb(1073742336,M.n,M.n,[]),e.Fb(1073742336,q.c,q.c,[]),e.Fb(1073742336,W.c,W.c,[]),e.Fb(1073742336,Y.c,Y.c,[]),e.Fb(1073742336,Z.b,Z.b,[]),e.Fb(1073742336,p.b,p.b,[]),e.Fb(1073742336,c.b,c.b,[]),e.Fb(1073742336,y.g,y.g,[]),e.Fb(1073742336,V.b,V.b,[]),e.Fb(1073742336,m.g,m.g,[]),e.Fb(1073742336,C,C,[]),e.Fb(1073742336,un.b,un.b,[]),e.Fb(1073742336,i.B,i.B,[]),e.Fb(1073742336,nn.d,nn.d,[]),e.Fb(1073742336,sn.f,sn.f,[]),e.Fb(1073742336,sn.d,sn.d,[]),e.Fb(1073742336,bn.b,bn.b,[]),e.Fb(1073742336,tn.b,tn.b,[]),e.Fb(1073742336,on.b,on.b,[]),e.Fb(1073742336,dn.c,dn.c,[]),e.Fb(1073742336,en.g,en.g,[]),e.Fb(1073742336,pn.a,pn.a,[]),e.Fb(1073742336,ln.j,ln.j,[]),e.Fb(1073742336,M.p,M.p,[]),e.Fb(1073742336,fn.d,fn.d,[]),e.Fb(1073742336,mn.f,mn.f,[]),e.Fb(1073742336,hn.b,hn.b,[]),e.Fb(1073742336,u.b,u.b,[]),e.Fb(1073742336,l,l,[]),e.Fb(1024,rn.j,function(){return[[{path:"",component:T}]]},[]),e.Fb(256,un.a,{separatorKeyCodes:[gn.f]},[]),e.Fb(256,M.g,fn.a,[])])})},ehiB:function(n,t,o){"use strict";o.d(t,"a",function(){return d}),o.d(t,"b",function(){return m});var e=o("CcnG"),l=(o("1xtn"),o("Ip0R")),a=(o("Fzqc"),o("Wf4p")),i=o("ZYjt"),r=o("dWZg"),c=o("SMsm"),u=o("SG5n"),s=o("Nfn5"),b=o("wFw1"),d=e.tb({encapsulation:2,styles:[".ts-card{display:flex;flex-flow:row nowrap}.ts-card :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-card h1,.ts-card h2,.ts-card h3,.ts-card h4,.ts-card h5,.ts-card p{margin:unset}.ts-card .c-card{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;background-color:#fafafa;position:relative;transition:height .2s;width:100%}.ts-card .c-card:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-card .c-card:not(.c-card--aspect),.ts-card .c-card:not(.c-card--interaction){align-items:stretch;display:flex;flex-direction:row;justify-content:center}.c-card .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;width:100%}.c-card .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card .c-card__inner .c-card__title-accent-border{border-left:2px solid #00538a;padding-left:8px}.c-card .c-card__inner .c-card__title-accent-border[theme=accent]{border-left-color:#2f854d}.c-card .c-card__inner .c-card__title-accent-border[theme=warn]{border-left-color:#c8604d}.c-card--interaction:not(.c-card--disabled) .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow 250ms cubic-bezier(.4,0,.2,1);cursor:pointer}.c-card--interaction:not(.c-card--disabled) .c-card__inner:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.c-card--interaction:not(.c-card--disabled) .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card--centered .c-card__inner{align-items:center;display:flex;justify-content:center}.c-card--aspect .c-card__inner{bottom:0;left:0;position:absolute;right:0;top:0}.c-card--disabled .c-card__inner{opacity:.5}.c-card--disabled .c-menu{opacity:.3;pointer-events:none}.c-card--disabled .c-card__lock{color:#999;position:absolute;right:24px;top:calc(24px - 2px);transform:scale(.7)}.c-card--right-spacing .c-card__inner{padding-right:56px}.c-card--flat>.c-card__inner{border:1px solid #cecdd1;box-shadow:none}.c-card--border-bottom.c-card--primary .c-card__inner{border-bottom:2px solid #00538a}.c-card--border-bottom.c-card--accent .c-card__inner{border-bottom:2px solid #2f854d}.c-card--border-bottom.c-card--warn .c-card__inner{border-bottom:2px solid #c8604d}.c-card--border-left.c-card--primary .c-card__inner{border-left:2px solid #00538a}.c-card--border-left.c-card--accent .c-card__inner{border-left:2px solid #2f854d}.c-card--border-left.c-card--warn .c-card__inner{border-left:2px solid #c8604d}.c-card--border-right.c-card--primary .c-card__inner{border-right:2px solid #00538a}.c-card--border-right.c-card--accent .c-card__inner{border-right:2px solid #2f854d}.c-card--border-right.c-card--warn .c-card__inner{border-right:2px solid #c8604d}.c-card--border-top.c-card--primary .c-card__inner{border-top:2px solid #00538a}.c-card--border-top.c-card--accent .c-card__inner{border-top:2px solid #2f854d}.c-card--border-top.c-card--warn .c-card__inner{border-top:2px solid #c8604d}.c-card__inner .ts-table~.ts-loading-overlay .c-loading-overlay{left:-24px;right:-24px}"],data:{}});function p(n){return e.Rb(0,[(n()(),e.vb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.ub(1,540672,null,0,l.t,[e.R],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(n()(),e.kb(0,null,null,0))],function(n,t){n(t,1,0,t.component.utilityMenuTemplate)},null)}function f(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,2,"ts-icon",[["class","c-card__lock qa-card-lock ts-icon"]],[[2,"ts-icon--inline",null],[2,"ts-icon--primary",null],[2,"ts-icon--accent",null],[2,"ts-icon--warn",null],[2,"ts-icon--background",null]],null,null,s.b,s.a)),e.ub(1,49152,null,0,u.a,[c.d,i.b],null,null),(n()(),e.Pb(-1,0,["lock_outline"]))],null,function(n,t){n(t,0,0,e.Hb(t,1).inline,"primary"===e.Hb(t,1).theme,"accent"===e.Hb(t,1).theme,"warn"===e.Hb(t,1).theme,e.Hb(t,1).background)})}function m(n){return e.Rb(2,[(n()(),e.vb(0,0,null,null,10,"div",[],[[4,"paddingTop",null],[1,"id",0]],null,null,null,null)),e.Mb(512,null,l.A,l.B,[e.t,e.u,e.k,e.F]),e.ub(2,278528,null,0,l.k,[l.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Kb(3,{"c-card--interaction":0,"c-card--centered":1,"c-card--aspect":2,"c-card--disabled":3,"c-card--right-spacing":4,"c-card--flat":5}),(n()(),e.vb(4,0,null,null,2,"div",[["class","c-card__inner mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),e.ub(5,212992,null,0,a.m,[e.k,e.A,r.a,[2,a.j],[2,b.a]],{disabled:[0,"disabled"]},null),e.Gb(null,0),(n()(),e.kb(16777216,null,null,1,null,p)),e.ub(8,16384,null,0,l.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e.kb(16777216,null,null,1,null,f)),e.ub(10,16384,null,0,l.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null)],function(n,t){var o=t.component,l=e.zb(2,"c-card qa-card ",o.borderClass," c-card--",o.theme,""),a=n(t,3,0,o.supportsInteraction,o.centeredContent,o.aspectRatioPadding,o.isDisabled,o.utilityMenuTemplate||o.isDisabled,o.flat);n(t,2,0,l,a),n(t,5,0,!o.supportsInteraction||o.isDisabled),n(t,8,0,o.utilityMenuTemplate),n(t,10,0,o.isDisabled&&!o.utilityMenuTemplate)},function(n,t){var o=t.component;n(t,0,0,o.aspectRatioPadding,o.id),n(t,4,0,e.Hb(t,5).unbounded)})}},neDX:function(n,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"b",function(){return c});var e=o("mrSG"),l=o("CcnG"),a=o("N0SF"),i=["filled","hollow","collapsable"],r=function(){function n(n,t,o){this.changeDetectorRef=n,this.windowService=t,this.renderer=o,this.isCollapsed=!1,this.interceptClick=!1,this.actionName="Button",this.buttonType="button",this.isDisabled=!1,this.showProgress=!1,this.tabIndex=0,this.clicked=new l.n}return Object.defineProperty(n.prototype,"collapsed",{set:function(n){this.isCollapsed=n,!n&&this.collapseDelay&&this.collapseWithDelay(this.collapseDelay)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"format",{get:function(){return this._format},set:function(n){n&&(i.indexOf(n)<0&&Object(l.Z)()?console.warn('TsButtonComponent: "'+n+'" is not an allowed format. See TsButtonFormatTypes for available options.'):(this._format=n,"collapsable"===this._format?this.collapseDelay||(this.collapseDelay=4e3):this.collapseDelay&&(this.collapseDelay=void 0),this.changeDetectorRef.detectChanges(),this.updateClasses(n)))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"theme",{get:function(){return this._theme},set:function(n){n&&(a.j.indexOf(n)<0&&Object(l.Z)()?console.warn('TsButtonComponent: "'+n+'" is not an allowed theme. See TsStyleThemeTypes for available options.'):(this._theme=n,this.updateClasses(n)))},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){if(this.collapseDelay&&(this.collapseTimeoutId=this.collapseWithDelay(this.collapseDelay)),this.theme||(this.theme="primary"),this.format||(this.format="filled"),"collapsable"===this.format&&!this.iconName&&Object(l.Z)())throw new Error("`iconName` must be defined for collapsable buttons.")},n.prototype.ngOnDestroy=function(){this.collapseTimeoutId&&this.windowService.nativeWindow.clearTimeout(this.collapseTimeoutId)},n.prototype.clickedButton=function(n){this.interceptClick?this.originalClickEvent=n:this.clicked.emit(n)},n.prototype.collapseWithDelay=function(n){var t=this;return this.windowService.nativeWindow.setTimeout(function(){t.isCollapsed=!0,t.changeDetectorRef.detectChanges()},n)},Object.defineProperty(n.prototype,"shouldBeDisabled",{get:function(){return this.isDisabled||this.showProgress},enumerable:!0,configurable:!0}),n.prototype.updateClasses=function(n){var t,o,l,a,i=["primary","accent","warn"],r=["filled","hollow","collapsable"],c=i.indexOf(n)>=0,u=r.indexOf(n)>=0,s=this.button._elementRef.nativeElement,b=i.map(function(n){return"c-button--"+n}),d=r.map(function(n){return"c-button--"+n});if(c){try{for(var p=Object(e.__values)(b),f=p.next();!f.done;f=p.next())this.renderer.removeClass(s,f.value)}catch(g){t={error:g}}finally{try{f&&!f.done&&(o=p.return)&&o.call(p)}finally{if(t)throw t.error}}this.renderer.addClass(s,"c-button--"+n)}if(u){try{for(var m=Object(e.__values)(d),h=m.next();!h.done;h=m.next())this.renderer.removeClass(s,h.value)}catch(y){l={error:y}}finally{try{h&&!h.done&&(a=m.return)&&a.call(m)}finally{if(l)throw l.error}}this.renderer.addClass(s,"c-button--"+n)}},n}(),c=function(){return function(){}}()}}]);