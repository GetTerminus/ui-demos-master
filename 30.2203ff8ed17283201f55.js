(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{JrBb:function(e,n,t){"use strict";var l=t("CcnG"),a=(t("HL5S"),t("Ip0R"),t("gIcY")),c=t("M2Lx"),i=(t("Fzqc"),t("Wf4p")),o=(t("ZYjt"),t("dWZg")),r=t("de3e"),u=t("wFw1"),s=t("lLAP"),b=l.tb({encapsulation:2,styles:["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.91026}50%{animation-timing-function:cubic-bezier(0,0,.2,.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(.4,0,1,1);stroke-dashoffset:0}to{stroke-dashoffset:-22.91026}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}100%,32.8%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}@media (-ms-high-contrast:active){.mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0,0,.2,.1),opacity 90ms cubic-bezier(0,0,.2,.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.91026;stroke-dasharray:22.91026;stroke-width:2.13333px}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0);border-radius:2px}@media (-ms-high-contrast:active){.mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0s mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0s mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:.3s linear 0s mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}"],data:{}});function m(e){return l.Pb(2,[l.Lb(402653184,1,{_inputElement:0}),l.Lb(402653184,2,{ripple:0}),(e()(),l.vb(2,0,[["label",1]],null,16,"label",[["class","mat-checkbox-layout"]],[[1,"for",0]],null,null,null,null)),(e()(),l.vb(3,0,null,null,10,"div",[["class","mat-checkbox-inner-container"]],[[2,"mat-checkbox-inner-container-no-side-margin",null]],null,null,null,null)),(e()(),l.vb(4,0,[[1,0],["input",1]],null,0,"input",[["class","mat-checkbox-input cdk-visually-hidden"],["type","checkbox"]],[[8,"id",0],[8,"required",0],[8,"checked",0],[1,"value",0],[8,"disabled",0],[1,"name",0],[8,"tabIndex",0],[8,"indeterminate",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-checked",0]],[[null,"change"],[null,"click"]],function(e,n,t){var l=!0,a=e.component;return"change"===n&&(l=!1!==a._onInteractionEvent(t)&&l),"click"===n&&(l=!1!==a._onInputClick(t)&&l),l},null,null)),(e()(),l.vb(5,0,null,null,3,"div",[["class","mat-checkbox-ripple mat-ripple"],["matRipple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),l.ub(6,212992,[[2,4]],0,i.m,[l.k,l.C,o.a,[2,i.j],[2,u.a]],{centered:[0,"centered"],radius:[1,"radius"],animation:[2,"animation"],disabled:[3,"disabled"],trigger:[4,"trigger"]},null),l.Ib(7,{enterDuration:0}),(e()(),l.vb(8,0,null,null,0,"div",[["class","mat-ripple-element mat-checkbox-persistent-ripple"]],null,null,null,null,null)),(e()(),l.vb(9,0,null,null,0,"div",[["class","mat-checkbox-frame"]],null,null,null,null,null)),(e()(),l.vb(10,0,null,null,3,"div",[["class","mat-checkbox-background"]],null,null,null,null,null)),(e()(),l.vb(11,0,null,null,1,":svg:svg",[[":xml:space","preserve"],["class","mat-checkbox-checkmark"],["focusable","false"],["version","1.1"],["viewBox","0 0 24 24"]],null,null,null,null,null)),(e()(),l.vb(12,0,null,null,0,":svg:path",[["class","mat-checkbox-checkmark-path"],["d","M4.1,12.7 9,17.6 20.3,6.3"],["fill","none"],["stroke","white"]],null,null,null,null,null)),(e()(),l.vb(13,0,null,null,0,"div",[["class","mat-checkbox-mixedmark"]],null,null,null,null,null)),(e()(),l.vb(14,0,[["checkboxLabel",1]],null,4,"span",[["class","mat-checkbox-label"]],null,[[null,"cdkObserveContent"]],function(e,n,t){var l=!0;return"cdkObserveContent"===n&&(l=!1!==e.component._onLabelTextChange()&&l),l},null,null)),l.ub(15,1196032,null,0,c.a,[c.b,l.k,l.C],null,{event:"cdkObserveContent"}),(e()(),l.vb(16,0,null,null,1,"span",[["style","display:none"]],null,null,null,null,null)),(e()(),l.Nb(-1,null,["\xa0"])),l.Eb(null,0)],function(e,n){var t=n.component,a=e(n,7,0,150);e(n,6,0,!0,20,a,t._isRippleDisabled(),l.Fb(n,2))},function(e,n){var t=n.component;e(n,2,0,t.inputId),e(n,3,0,!l.Fb(n,14).textContent||!l.Fb(n,14).textContent.trim()),e(n,4,1,[t.inputId,t.required,t.checked,t.value,t.disabled,t.name,t.tabIndex,t.indeterminate,t.ariaLabel||null,t.ariaLabelledby,t._getAriaChecked()]),e(n,5,0,l.Fb(n,6).unbounded)})}t.d(n,"a",function(){return d}),t.d(n,"b",function(){return h});var d=l.tb({encapsulation:2,styles:[".ts-checkbox{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;display:block}.ts-checkbox :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-checkbox h1,.ts-checkbox h2,.ts-checkbox h3,.ts-checkbox h4,.ts-checkbox h5,.ts-checkbox p{margin:unset}.ts-checkbox:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-optgroup .ts-optgroup-label .ts-checkbox{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:500;color:#999;line-height:3em}.ts-checkbox .c-checkbox{display:block}.ts-select-panel .ts-checkbox .c-checkbox{line-height:3em;padding:0 16px}.ts-select-panel .ts-checkbox .mat-checkbox-layout{max-width:100%}.ts-select-panel .ts-checkbox .mat-checkbox-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;max-width:calc(100% - 28px)}.ts-select-panel .ts-checkbox .ts-option-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.mat-menu-panel .ts-checkbox .c-checkbox{line-height:2em;padding:0 16px}.ts-option .ts-checkbox .mat-checkbox-layout,.ts-select-panel__toggle-all .ts-checkbox .mat-checkbox-layout{width:100%}.ts-option .ts-checkbox .mat-checkbox-layout .mat-checkbox-inner-container,.ts-select-panel__toggle-all .ts-checkbox .mat-checkbox-layout .mat-checkbox-inner-container{margin:auto 10px auto 0}"],data:{}});function h(e){return l.Pb(2,[l.Lb(402653184,1,{checkbox:0}),(e()(),l.vb(1,0,null,null,9,"mat-checkbox",[["class","c-checkbox qa-checkbox mat-checkbox"]],[[1,"required",0],[1,"required",0],[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"indeterminateChange"]],function(e,n,t){var l=!0,a=e.component;return"ngModelChange"===n&&(l=!1!==(a.value=t)&&l),"change"===n&&(l=!1!==a.inputChange.emit(t.checked)&&l),"indeterminateChange"===n&&(l=!1!==a.indeterminateChange.emit(t)&&l),l},m,b)),l.ub(2,16384,null,0,a.B,[],{required:[0,"required"]},null),l.ub(3,16384,null,0,r.e,[],{required:[0,"required"]},null),l.Kb(1024,null,a.q,function(e,n){return[e,n]},[a.B,r.e]),l.ub(5,8568832,[[1,4]],0,r.b,[l.k,l.h,s.h,l.C,[8,null],[2,r.a],[2,u.a]],{color:[0,"color"],tabIndex:[1,"tabIndex"],required:[2,"required"],disabled:[3,"disabled"],indeterminate:[4,"indeterminate"]},{change:"change",indeterminateChange:"indeterminateChange"}),l.Kb(1024,null,a.r,function(e){return[e]},[r.b]),l.ub(7,671744,null,0,a.w,[[8,null],[6,a.q],[8,null],[6,a.r]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),l.Kb(2048,null,a.s,null,[a.w]),l.ub(9,16384,null,0,a.t,[[4,a.s]],null,null),l.Eb(0,0)],function(e,n){var t=n.component;e(n,2,0,t.isRequired?"":null),e(n,3,0,t.isRequired?"":null),e(n,5,0,t.theme,l.xb(1,"",t.tabIndex,""),t.isRequired?"":null,t.isDisabled?"disabled":null,t.isIndeterminate),e(n,7,0,t.isDisabled?"disabled":null,t.value)},function(e,n){e(n,1,1,[l.Fb(n,2).required?"":null,l.Fb(n,3).required?"":null,l.Fb(n,5).id,null,l.Fb(n,5).indeterminate,l.Fb(n,5).checked,l.Fb(n,5).disabled,"before"==l.Fb(n,5).labelPosition,"NoopAnimations"===l.Fb(n,5)._animationMode,l.Fb(n,9).ngClassUntouched,l.Fb(n,9).ngClassTouched,l.Fb(n,9).ngClassPristine,l.Fb(n,9).ngClassDirty,l.Fb(n,9).ngClassValid,l.Fb(n,9).ngClassInvalid,l.Fb(n,9).ngClassPending])})}},M2Lx:function(e,n,t){"use strict";t.d(n,"c",function(){return r}),t.d(n,"b",function(){return u}),t.d(n,"a",function(){return s}),t.d(n,"d",function(){return b});var l=t("n6gG"),a=t("CcnG"),c=t("6blF"),i=t("K9Ia"),o=t("Gi3i"),r=function(){function e(){}return e.prototype.create=function(e){return"undefined"==typeof MutationObserver?null:new MutationObserver(e)},e.ngInjectableDef=Object(a.Y)({factory:function(){return new e},token:e,providedIn:"root"}),e}(),u=function(){function e(e){this._mutationObserverFactory=e,this._observedElements=new Map}return e.prototype.ngOnDestroy=function(){var e=this;this._observedElements.forEach(function(n,t){return e._cleanupObserver(t)})},e.prototype.observe=function(e){var n=this,t=Object(l.d)(e);return new c.a(function(e){var l=n._observeElement(t).subscribe(e);return function(){l.unsubscribe(),n._unobserveElement(t)}})},e.prototype._observeElement=function(e){if(this._observedElements.has(e))this._observedElements.get(e).count++;else{var n=new i.a,t=this._mutationObserverFactory.create(function(e){return n.next(e)});t&&t.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:t,stream:n,count:1})}return this._observedElements.get(e).stream},e.prototype._unobserveElement=function(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))},e.prototype._cleanupObserver=function(e){if(this._observedElements.has(e)){var n=this._observedElements.get(e),t=n.observer,l=n.stream;t&&t.disconnect(),l.complete(),this._observedElements.delete(e)}},e.ngInjectableDef=Object(a.Y)({factory:function(){return new e(Object(a.cb)(r))},token:e,providedIn:"root"}),e}(),s=function(){function e(e,n,t){this._contentObserver=e,this._elementRef=n,this._ngZone=t,this.event=new a.n,this._disabled=!1,this._currentSubscription=null}return Object.defineProperty(e.prototype,"disabled",{get:function(){return this._disabled},set:function(e){this._disabled=Object(l.b)(e),this._disabled?this._unsubscribe():this._subscribe()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"debounce",{get:function(){return this._debounce},set:function(e){this._debounce=Object(l.e)(e),this._subscribe()},enumerable:!0,configurable:!0}),e.prototype.ngAfterContentInit=function(){this._currentSubscription||this.disabled||this._subscribe()},e.prototype.ngOnDestroy=function(){this._unsubscribe()},e.prototype._subscribe=function(){var e=this;this._unsubscribe();var n=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(function(){e._currentSubscription=(e.debounce?n.pipe(Object(o.a)(e.debounce)):n).subscribe(e.event)})},e.prototype._unsubscribe=function(){this._currentSubscription&&this._currentSubscription.unsubscribe()},e}(),b=function(){return function(){}}()},X9ZF:function(e,n,t){"use strict";t.r(n);var l=t("CcnG"),a=function(){return function(){}}(),c=t("pMnS"),i=t("ehiB"),o=t("1xtn"),r=t("l5YW"),u=t("gIcY"),s=t("JrBb"),b=t("HL5S"),m=function(){function e(e){this.formBuilder=e,this.myValue=!0,this.checked=!0,this.disabled=!1,this.required=!0,this.indeterminate=!1,this.myTheme="accent",this.myForm=this.formBuilder.group({myCheck:[!1]})}return e.prototype.changed=function(e){console.log("Input changed: ",e)},e.prototype.interChanged=function(e){console.log("Indeterminate input changed: ",e)},e.prototype.submit=function(e){console.log("DEMO: form submit: ",e)},e}(),d=l.tb({encapsulation:2,styles:[],data:{}});function h(e){return l.Pb(0,[(e()(),l.vb(0,0,null,null,21,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,i.b,i.a)),l.ub(1,49152,null,0,o.a,[],null,null),l.ub(2,16384,null,0,r.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(e()(),l.vb(3,0,null,0,3,"h3",[["tsCardTitle",""],["tsVerticalSpacing",""]],[[8,"className",0]],null,null,null,null)),l.ub(4,16384,null,0,o.c,[[3,o.a]],null,null),l.ub(5,16384,null,0,r.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(e()(),l.Nb(-1,null,[" Reactive Form "])),(e()(),l.vb(7,0,null,0,14,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(e,n,t){var a=!0;return"submit"===n&&(a=!1!==l.Fb(e,9).onSubmit(t)&&a),"reset"===n&&(a=!1!==l.Fb(e,9).onReset()&&a),a},null,null)),l.ub(8,16384,null,0,u.G,[],null,null),l.ub(9,540672,null,0,u.m,[[8,null],[8,null]],{form:[0,"form"]},null),l.Kb(2048,null,u.d,null,[u.m]),l.ub(11,16384,null,0,u.u,[[4,u.d]],null,null),(e()(),l.vb(12,0,null,null,7,"ts-checkbox",[["class","ts-checkbox"],["tsVerticalSpacing",""]],[[1,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,s.b,s.a)),l.ub(13,49152,null,0,b.a,[l.h],{formControl:[0,"formControl"]},null),l.Kb(1024,null,u.r,function(e){return[e]},[b.a]),l.ub(15,540672,null,0,u.j,[[8,null],[8,null],[6,u.r],[2,u.I]],{form:[0,"form"]},null),l.Kb(2048,null,u.s,null,[u.j]),l.ub(17,16384,null,0,u.t,[[4,u.s]],null,null),l.ub(18,16384,null,0,r.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(e()(),l.Nb(-1,0,["My (form) checkbox!"])),(e()(),l.vb(20,0,null,null,1,"button",[],null,[[null,"click"]],function(e,n,t){var l=!0,a=e.component;return"click"===n&&(l=!1!==a.submit(a.myForm.value)&&l),l},null,null)),(e()(),l.Nb(-1,null,["Submit"])),(e()(),l.vb(22,0,null,null,10,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,i.b,i.a)),l.ub(23,49152,null,0,o.a,[],null,null),l.ub(24,16384,null,0,r.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(e()(),l.vb(25,0,null,0,3,"h3",[["tsCardTitle",""],["tsVerticalSpacing",""]],[[8,"className",0]],null,null,null,null)),l.ub(26,16384,null,0,o.c,[[3,o.a]],null,null),l.ub(27,16384,null,0,r.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(e()(),l.Nb(-1,null,[" isChecked property "])),(e()(),l.vb(29,0,null,0,3,"ts-checkbox",[["class","ts-checkbox"]],[[1,"id",0]],[[null,"inputChange"],[null,"indeterminateChange"]],function(e,n,t){var l=!0,a=e.component;return"inputChange"===n&&(l=!1!==a.changed(t)&&l),"indeterminateChange"===n&&(l=!1!==a.interChanged(t)&&l),l},s.b,s.a)),l.Kb(5120,null,u.r,function(e){return[e]},[b.a]),l.ub(31,49152,null,0,b.a,[l.h],{isChecked:[0,"isChecked"],isDisabled:[1,"isDisabled"],isIndeterminate:[2,"isIndeterminate"],isRequired:[3,"isRequired"],theme:[4,"theme"]},{inputChange:"inputChange",indeterminateChange:"indeterminateChange"}),(e()(),l.Nb(-1,0,["My checkbox!"])),(e()(),l.vb(33,0,null,null,15,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,i.b,i.a)),l.ub(34,49152,null,0,o.a,[],null,null),l.ub(35,16384,null,0,r.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(e()(),l.vb(36,0,null,0,3,"h3",[["tsCardTitle",""],["tsVerticalSpacing",""]],[[8,"className",0]],null,null,null,null)),l.ub(37,16384,null,0,o.c,[[3,o.a]],null,null),l.ub(38,16384,null,0,r.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(e()(),l.Nb(-1,null,[" ngModel "])),(e()(),l.vb(40,0,null,0,6,"ts-checkbox",[["class","ts-checkbox"]],[[1,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"inputChange"],[null,"indeterminateChange"]],function(e,n,t){var l=!0,a=e.component;return"ngModelChange"===n&&(l=!1!==(a.myValue=t)&&l),"inputChange"===n&&(l=!1!==a.changed(t)&&l),"indeterminateChange"===n&&(l=!1!==a.interChanged(t)&&l),l},s.b,s.a)),l.ub(41,49152,null,0,b.a,[l.h],{isDisabled:[0,"isDisabled"],isIndeterminate:[1,"isIndeterminate"],isRequired:[2,"isRequired"],ngModel:[3,"ngModel"],theme:[4,"theme"]},{inputChange:"inputChange",indeterminateChange:"indeterminateChange"}),l.Kb(1024,null,u.r,function(e){return[e]},[b.a]),l.ub(43,671744,null,0,u.w,[[8,null],[8,null],[8,null],[6,u.r]],{model:[0,"model"]},{update:"ngModelChange"}),l.Kb(2048,null,u.s,null,[u.w]),l.ub(45,16384,null,0,u.t,[[4,u.s]],null,null),(e()(),l.Nb(-1,0,["My (ngModel) checkbox!"])),(e()(),l.vb(47,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),l.Nb(48,0,[" Value: ","\n"]))],function(e,n){var t=n.component;e(n,2,0,""),e(n,5,0,""),e(n,9,0,t.myForm),e(n,13,0,t.myForm.get("myCheck")),e(n,15,0,t.myForm.get("myCheck")),e(n,18,0,""),e(n,24,0,""),e(n,27,0,""),e(n,31,0,t.checked,t.disabled,t.indeterminate,t.required,t.myTheme),e(n,35,0,""),e(n,38,0,""),e(n,41,0,t.disabled,t.indeterminate,t.required,t.myValue,t.myTheme),e(n,43,0,t.myValue)},function(e,n){var t=n.component;e(n,3,0,l.Fb(n,4).tsCardTitle),e(n,7,0,l.Fb(n,11).ngClassUntouched,l.Fb(n,11).ngClassTouched,l.Fb(n,11).ngClassPristine,l.Fb(n,11).ngClassDirty,l.Fb(n,11).ngClassValid,l.Fb(n,11).ngClassInvalid,l.Fb(n,11).ngClassPending),e(n,12,0,l.Fb(n,13).id,l.Fb(n,17).ngClassUntouched,l.Fb(n,17).ngClassTouched,l.Fb(n,17).ngClassPristine,l.Fb(n,17).ngClassDirty,l.Fb(n,17).ngClassValid,l.Fb(n,17).ngClassInvalid,l.Fb(n,17).ngClassPending),e(n,25,0,l.Fb(n,26).tsCardTitle),e(n,29,0,l.Fb(n,31).id),e(n,36,0,l.Fb(n,37).tsCardTitle),e(n,40,0,l.Fb(n,41).id,l.Fb(n,45).ngClassUntouched,l.Fb(n,45).ngClassTouched,l.Fb(n,45).ngClassPristine,l.Fb(n,45).ngClassDirty,l.Fb(n,45).ngClassValid,l.Fb(n,45).ngClassInvalid,l.Fb(n,45).ngClassPending),e(n,48,0,t.myValue)})}function k(e){return l.Pb(0,[(e()(),l.vb(0,0,null,null,1,"demo-checkbox",[],null,null,null,h,d)),l.ub(1,49152,null,0,m,[u.h],null,null)],null,null)}var p=l.rb("demo-checkbox",m,k,{},{},[]),g=t("Ip0R"),x=t("M2Lx"),f=t("ZYCi"),v=function(){return function(){}}(),y=t("Fzqc"),C=t("Wf4p"),F=t("ZYjt"),_=t("dWZg"),w=t("SMsm"),D=t("SG5n"),S=t("de3e");t.d(n,"CheckboxModuleNgFactory",function(){return M});var M=l.sb(a,[],function(e){return l.Cb([l.Db(512,l.j,l.hb,[[8,[c.a,p]],[3,l.j],l.A]),l.Db(4608,g.o,g.n,[l.w,[2,g.B]]),l.Db(4608,u.H,u.H,[]),l.Db(4608,u.h,u.h,[]),l.Db(4608,x.c,x.c,[]),l.Db(1073742336,f.o,f.o,[[2,f.u],[2,f.l]]),l.Db(1073742336,v,v,[]),l.Db(1073742336,g.c,g.c,[]),l.Db(1073742336,u.E,u.E,[]),l.Db(1073742336,u.o,u.o,[]),l.Db(1073742336,u.A,u.A,[]),l.Db(1073742336,y.a,y.a,[]),l.Db(1073742336,C.k,C.k,[[2,C.f],[2,F.g]]),l.Db(1073742336,_.b,_.b,[]),l.Db(1073742336,C.n,C.n,[]),l.Db(1073742336,w.c,w.c,[]),l.Db(1073742336,D.b,D.b,[]),l.Db(1073742336,o.b,o.b,[]),l.Db(1073742336,x.d,x.d,[]),l.Db(1073742336,S.d,S.d,[]),l.Db(1073742336,b.b,b.b,[]),l.Db(1073742336,r.b,r.b,[]),l.Db(1073742336,a,a,[]),l.Db(1024,f.j,function(){return[[{path:"",component:m}]]},[])])})},l5YW:function(e,n,t){"use strict";t.d(n,"b",function(){return i}),t.d(n,"c",function(){return c}),t.d(n,"a",function(){return a});var l=t("CcnG"),a={none:["0"],small:[Math.floor(12)+"px",Math.floor(8)+"px",Math.floor(4)+"px"],default:["16px"],large:[Math.floor(24)+"px",Math.floor(32)+"px",Math.floor(40)+"px",Math.floor(48)+"px",Math.floor(56)+"px",Math.floor(72)+"px",Math.floor(96)+"px"]},c=function(){function e(e){this.elementRef=e}return Object.defineProperty(e.prototype,"tsVerticalSpacing",{set:function(e){e||(e="default--0");var n=e.split("--")[0],t=parseInt(e.split("--")[1],10),c="none"===e,i=!(a[n]&&!(a[n].length<0));if((i||i||!a[n][t])&&!c&&Object(l.db)())throw Error(e+" is not a valid spacing definition for TsVerticalSpacingDirective. See all valid TsVerticalSpacingTypes: http://bnj.bz/3e1E2l0k0C11");this.elementRef.nativeElement.style.marginBottom=c?"0":a[n][t]},enumerable:!0,configurable:!0}),e}(),i=function(){return function(){}}()}}]);