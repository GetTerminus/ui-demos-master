(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{EzXM:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o});var l=n("mrSG"),i=n("CcnG"),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._isChecked=!1,t.isDisabled=!1,t.isRequired=!1,t.labelPosition="after",t.name="toggle",t.theme="primary",t.change=new i.n,t.selectionChange=new i.n,t}return Object(l.__extends)(t,e),Object.defineProperty(t.prototype,"isChecked",{get:function(){return this._isChecked},set:function(e){this._isChecked=e,this.value=this._isChecked},enumerable:!0,configurable:!0}),t}((n("kWGw"),n("N0SF")).a),o=function(){return function(){}}()},egPT:function(e,t,n){"use strict";var l=n("CcnG"),i=(n("EzXM"),n("Ip0R"),n("gIcY")),a=n("M2Lx"),o=(n("ZYjt"),n("Wf4p")),r=n("kWGw"),s=n("Fzqc"),u=n("dWZg"),g=n("wFw1"),d=n("lLAP"),c=l.tb({encapsulation:2,styles:[".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px,0,0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px,0,0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}.mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-right:8px;margin-left:0}.mat-slide-toggle-label-before .mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0,0,0);transition:all 80ms linear;transition-property:transform;cursor:-webkit-grab;cursor:grab}.mat-slide-toggle-thumb-container.mat-dragging{transition-duration:0s}.mat-slide-toggle-thumb-container:active{cursor:-webkit-grabbing;cursor:grabbing}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media (hover:none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}@media (-ms-high-contrast:active){.mat-slide-toggle-thumb{background:#fff;border:1px solid #000}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background:#000;border:1px solid #fff}.mat-slide-toggle-bar{background:#fff}.mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:1px dotted;outline-offset:5px}}@media (-ms-high-contrast:black-on-white){.mat-slide-toggle-bar{border:1px solid #000}}"],data:{}});function h(e){return l.Rb(2,[l.Nb(671088640,1,{_thumbEl:0}),l.Nb(671088640,2,{_thumbBarEl:0}),l.Nb(671088640,3,{_inputElement:0}),(e()(),l.vb(3,0,[["label",1]],null,13,"label",[["class","mat-slide-toggle-label"]],[[1,"for",0]],null,null,null,null)),(e()(),l.vb(4,0,[[2,0],["toggleBar",1]],null,7,"div",[["class","mat-slide-toggle-bar"]],[[2,"mat-slide-toggle-bar-no-side-margin",null]],null,null,null,null)),(e()(),l.vb(5,0,[[3,0],["input",1]],null,0,"input",[["class","mat-slide-toggle-input cdk-visually-hidden"],["role","switch"],["type","checkbox"]],[[8,"id",0],[8,"required",0],[8,"tabIndex",0],[8,"checked",0],[8,"disabled",0],[1,"name",0],[1,"aria-checked",0],[1,"aria-label",0],[1,"aria-labelledby",0]],[[null,"change"],[null,"click"]],function(e,t,n){var l=!0,i=e.component;return"change"===t&&(l=!1!==i._onChangeEvent(n)&&l),"click"===t&&(l=!1!==i._onInputClick(n)&&l),l},null,null)),(e()(),l.vb(6,0,[[1,0],["thumbContainer",1]],null,5,"div",[["class","mat-slide-toggle-thumb-container"]],null,[[null,"slidestart"],[null,"slide"],[null,"slideend"]],function(e,t,n){var l=!0,i=e.component;return"slidestart"===t&&(l=!1!==i._onDragStart()&&l),"slide"===t&&(l=!1!==i._onDrag(n)&&l),"slideend"===t&&(l=!1!==i._onDragEnd()&&l),l},null,null)),(e()(),l.vb(7,0,null,null,0,"div",[["class","mat-slide-toggle-thumb"]],null,null,null,null,null)),(e()(),l.vb(8,0,null,null,3,"div",[["class","mat-slide-toggle-ripple mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),l.ub(9,212992,null,0,o.m,[l.k,l.A,u.a,[2,o.j],[2,g.a]],{centered:[0,"centered"],radius:[1,"radius"],animation:[2,"animation"],disabled:[3,"disabled"],trigger:[4,"trigger"]},null),l.Kb(10,{enterDuration:0}),(e()(),l.vb(11,0,null,null,0,"div",[["class","mat-ripple-element mat-slide-toggle-persistent-ripple"]],null,null,null,null,null)),(e()(),l.vb(12,0,[["labelContent",1]],null,4,"span",[["class","mat-slide-toggle-content"]],null,[[null,"cdkObserveContent"]],function(e,t,n){var l=!0;return"cdkObserveContent"===t&&(l=!1!==e.component._onLabelTextChange()&&l),l},null,null)),l.ub(13,1196032,null,0,a.a,[a.b,l.k,l.A],null,{event:"cdkObserveContent"}),(e()(),l.vb(14,0,null,null,1,"span",[["style","display:none"]],null,null,null,null,null)),(e()(),l.Pb(-1,null,[" "])),l.Gb(null,0)],function(e,t){var n=t.component,i=e(t,10,0,150);e(t,9,0,!0,20,i,n.disableRipple||n.disabled,l.Hb(t,3))},function(e,t){var n=t.component;e(t,3,0,n.inputId),e(t,4,0,!l.Hb(t,12).textContent||!l.Hb(t,12).textContent.trim()),e(t,5,0,n.inputId,n.required,n.tabIndex,n.checked,n.disabled,n.name,n.checked.toString(),n.ariaLabel,n.ariaLabelledby),e(t,8,0,l.Hb(t,9).unbounded)})}n.d(t,"a",function(){return b}),n.d(t,"b",function(){return m});var b=l.tb({encapsulation:2,styles:[".ts-toggle{display:inline-block}.ts-toggle :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-toggle h1,.ts-toggle h2,.ts-toggle h3,.ts-toggle h4,.ts-toggle h5,.ts-toggle p{margin:unset}"],data:{}});function m(e){return l.Rb(2,[(e()(),l.vb(0,0,null,null,9,"mat-slide-toggle",[["class","c-toggle qa-toggle mat-slide-toggle"]],[[1,"required",0],[8,"id",0],[1,"tabindex",0],[2,"mat-checked",null],[2,"mat-disabled",null],[2,"mat-slide-toggle-label-before",null],[2,"_mat-animation-noopable",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"focus"]],function(e,t,n){var i=!0,a=e.component;return"focus"===t&&(i=!1!==l.Hb(e,4)._inputElement.nativeElement.focus()&&i),"ngModelChange"===t&&(i=!1!==(a.value=n)&&i),"change"===t&&(i=!1!==a.change.emit(n)&&i),"change"===t&&(i=!1!==a.selectionChange.emit(n)&&i),i},h,c)),l.ub(1,16384,null,0,i.C,[],{required:[0,"required"]},null),l.ub(2,16384,null,0,r.e,[],{required:[0,"required"]},null),l.Mb(1024,null,i.q,function(e,t){return[e,t]},[i.C,r.e]),l.ub(4,1228800,null,0,r.b,[l.k,d.h,l.h,[8,null],l.A,r.a,[2,g.a],[2,s.b]],{disabled:[0,"disabled"],color:[1,"color"],name:[2,"name"],labelPosition:[3,"labelPosition"],ariaLabel:[4,"ariaLabel"],required:[5,"required"]},{change:"change"}),l.Mb(1024,null,i.r,function(e){return[e]},[r.b]),l.ub(6,671744,null,0,i.w,[[8,null],[6,i.q],[8,null],[6,i.r]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),l.Mb(2048,null,i.s,null,[i.w]),l.ub(8,16384,null,0,i.t,[[4,i.s]],null,null),l.Gb(0,0)],function(e,t){var n=t.component;e(t,1,0,n.isRequired),e(t,2,0,n.isRequired),e(t,4,0,n.isDisabled,n.theme,n.name,n.labelPosition,n.ariaLabel,n.isRequired),e(t,6,0,n.name,n.isDisabled,n.value)},function(e,t){e(t,0,1,[l.Hb(t,1).required?"":null,l.Hb(t,4).id,l.Hb(t,4).disabled?null:-1,l.Hb(t,4).checked,l.Hb(t,4).disabled,"before"==l.Hb(t,4).labelPosition,"NoopAnimations"===l.Hb(t,4)._animationMode,l.Hb(t,8).ngClassUntouched,l.Hb(t,8).ngClassTouched,l.Hb(t,8).ngClassPristine,l.Hb(t,8).ngClassDirty,l.Hb(t,8).ngClassValid,l.Hb(t,8).ngClassInvalid,l.Hb(t,8).ngClassPending])})}},kWGw:function(e,t,n){"use strict";n.d(t,"f",function(){return b}),n.d(t,"d",function(){return m}),n.d(t,"c",function(){return g}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"e",function(){return h});var l=n("CcnG"),i=n("mrSG"),a=n("n6gG"),o=n("gIcY"),r=n("Wf4p"),s=new l.q("mat-slide-toggle-default-options",{providedIn:"root",factory:function(){return{disableToggleValue:!1,disableDragValue:!1}}}),u=0,g=function(){return function(e,t){this.source=e,this.checked=t}}(),d=function(){return function(e){this._elementRef=e}}(),c=function(e){function t(t,n,i,a,o,r,s,g){var d=e.call(this,t)||this;return d._focusMonitor=n,d._changeDetectorRef=i,d._ngZone=o,d.defaults=r,d._animationMode=s,d._dir=g,d._onChange=function(e){},d._onTouched=function(){},d._uniqueId="mat-slide-toggle-"+ ++u,d._required=!1,d._checked=!1,d._dragging=!1,d.name=null,d.id=d._uniqueId,d.labelPosition="after",d.ariaLabel=null,d.ariaLabelledby=null,d.change=new l.n,d.toggleChange=new l.n,d.dragChange=new l.n,d.tabIndex=parseInt(a)||0,d}return Object(i.__extends)(t,e),Object.defineProperty(t.prototype,"required",{get:function(){return this._required},set:function(e){this._required=Object(a.b)(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"checked",{get:function(){return this._checked},set:function(e){this._checked=Object(a.b)(e),this._changeDetectorRef.markForCheck()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"inputId",{get:function(){return(this.id||this._uniqueId)+"-input"},enumerable:!0,configurable:!0}),t.prototype.ngAfterContentInit=function(){var e=this;this._focusMonitor.monitor(this._elementRef,!0).subscribe(function(t){t||Promise.resolve().then(function(){return e._onTouched()})})},t.prototype.ngOnDestroy=function(){this._focusMonitor.stopMonitoring(this._elementRef)},t.prototype._onChangeEvent=function(e){e.stopPropagation(),this._dragging||this.toggleChange.emit(),this._dragging||this.defaults.disableToggleValue?this._inputElement.nativeElement.checked=this.checked:(this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent())},t.prototype._onInputClick=function(e){e.stopPropagation()},t.prototype.writeValue=function(e){this.checked=!!e},t.prototype.registerOnChange=function(e){this._onChange=e},t.prototype.registerOnTouched=function(e){this._onTouched=e},t.prototype.setDisabledState=function(e){this.disabled=e,this._changeDetectorRef.markForCheck()},t.prototype.focus=function(e){this._focusMonitor.focusVia(this._inputElement,"keyboard",e)},t.prototype.toggle=function(){this.checked=!this.checked,this._onChange(this.checked)},t.prototype._emitChangeEvent=function(){this._onChange(this.checked),this.change.emit(new g(this,this.checked))},t.prototype._getDragPercentage=function(e){var t=e/this._thumbBarWidth*100;return this._previousChecked&&(t+=100),Math.max(0,Math.min(t,100))},t.prototype._onDragStart=function(){if(!this.disabled&&!this._dragging){var e=this._thumbEl.nativeElement;this._thumbBarWidth=this._thumbBarEl.nativeElement.clientWidth-e.clientWidth,e.classList.add("mat-dragging"),this._previousChecked=this.checked,this._dragging=!0}},t.prototype._onDrag=function(e){if(this._dragging){var t=this._dir&&"rtl"===this._dir.value?-1:1;this._dragPercentage=this._getDragPercentage(e.deltaX*t),this._thumbEl.nativeElement.style.transform="translate3d("+this._dragPercentage/100*this._thumbBarWidth*t+"px, 0, 0)"}},t.prototype._onDragEnd=function(){var e=this;if(this._dragging){var t=this._dragPercentage>50;t!==this.checked&&(this.dragChange.emit(),this.defaults.disableDragValue||(this.checked=t,this._emitChangeEvent())),this._ngZone.runOutsideAngular(function(){return setTimeout(function(){e._dragging&&(e._dragging=!1,e._thumbEl.nativeElement.classList.remove("mat-dragging"),e._thumbEl.nativeElement.style.transform="")})})}},t.prototype._onLabelTextChange=function(){this._changeDetectorRef.detectChanges()},t}(Object(r.y)(Object(r.u)(Object(r.v)(Object(r.w)(d)),"accent"))),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(i.__extends)(t,e),t}(o.c),b=function(){return function(){}}(),m=function(){return function(){}}()}}]);