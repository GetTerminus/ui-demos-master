(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{mxRT:function(t,e,i){"use strict";i.d(e,"b",function(){return I}),i.d(e,"a",function(){return _}),i.d(e,"c",function(){return C});var n=i("mrSG"),o=i("lLAP"),s=i("YlbQ"),r=i("CcnG"),l=i("9Kf0"),a=i("VYBx"),c=i("9k2g"),h=i("rK0N"),p=i("l5YW"),u=i("N0SF"),f=i("K9Ia"),g=i("lYZG"),d=i("p0ib"),y=i("26FU"),b=i("p0Sj"),m=i("t9fZ"),O=i("ny24"),v=(i("ihYY"),0),C=function(){function t(){this.uid="ts-select-trigger-"+v++,this._id=this.uid}return Object.defineProperty(t.prototype,"id",{get:function(){return this._id},set:function(t){this._id=t||this.uid},enumerable:!0,configurable:!0}),t}(),w=",",M=function(t,e){return t===e},j=function(){return function(t,e){this.source=t,this.value=e}}(),R=0,S=100,_=function(){function t(t,e,i,o,s,l){var a=this;this.viewportRuler=t,this.changeDetectorRef=e,this.ngZone=i,this.documentService=o,this.elementRef=s,this.ngControl=l,this.flexGap=p.a.small[0],this.labelChanges=new f.a,this.offsetY=0,this.optionIds="",this.optionSelectionChanges=Object(g.a)(function(){return d.a.apply(void 0,Object(n.__spread)(a.options.map(function(t){return t.selectionChange})))}),this.panelDoneAnimatingStream=new f.a,this.panelOpen=!1,this.positions=[{originX:"start",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"bottom",overlayX:"start",overlayY:"bottom"}],this.scrollTop=0,this.searchQuery="",this.selfReference=this,this.stateChanges=new f.a,this.transformOrigin="top",this.triggerFontSize=0,this.uid="ts-select-"+R++,this.querySubject=new y.a(""),this.viewportMarginSpacing=S,this.allowMultiple=!1,this._compareWith=M,this._delimiter=w,this.hideRequiredMarker=!1,this._id=this.uid,this.isDisabled=!1,this.isFilterable=!1,this._isRequired=!1,this.showProgress=!1,this._tabIndex=0,this.theme="primary",this.validateOnChange=!1,this.closed=new r.n,this.duplicateSelection=new r.n,this.opened=new r.n,this.optionDeselected=new r.n,this.optionSelected=new r.n,this.queryChange=new r.n,this.selectionChange=new r.n,this.valueChange=new r.n,this.onChange=function(){},this.onTouched=function(){},this.document=this.documentService.document,this.ngControl&&(this.ngControl.valueAccessor=this)}return Object.defineProperty(t.prototype,"allOptionsSelected",{get:function(){return Object(h.h)(this.options)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"empty",{get:function(){return this.selectionModel&&this.selectionModel.isEmpty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"focused",{get:function(){return this.document.activeElement===(this.inputElement&&this.inputElement.nativeElement)||this.panelOpen},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"itemCount",{get:function(){return this.options.length+this.optionGroups.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"itemHeight",{get:function(){var t=this.options.toArray();return(t[1]||t[0]).elementRef.nativeElement.offsetHeight},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"someOptionsSelected",{get:function(){return Object(h.k)(this.options)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"shouldLabelFloat",{get:function(){return this.focused||!this.empty||this.searchQuery.length>0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectTriggerValue",{get:function(){return this.allowMultiple?this.selectionModel.selected.map(function(t){return t.viewValue}).join(this.delimiter+" "):this.selectionModel.selected[0].viewValue},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selected",{get:function(){return this.allowMultiple?this.selectionModel.selected:this.selectionModel.selected[0]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"compareWith",{get:function(){return this._compareWith},set:function(t){"function"!=typeof t&&Object(r.db)()&&(console.warn('TsSelectComponent: "compareWith" must be a function. Falling back to the default.'),this._compareWith=M),this._compareWith=t,this.selectionModel&&this.initializeSelection()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"delimiter",{get:function(){return this._delimiter},set:function(t){this._delimiter=Object(l.l)(t)?t:w},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hint",{get:function(){return this._hint},set:function(t){this._hint=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"id",{get:function(){return this._id},set:function(t){this._id=t||this.uid},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isRequired",{get:function(){var t=this.ngControl&&this.ngControl.control,e=!!t&&Object(l.f)(t);return this._isRequired||e},set:function(t){this._isRequired=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"label",{get:function(){return this._label},set:function(t){this._label=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"placeholder",{get:function(){return this._placeholder},set:function(t){this._placeholder=t,this.stateChanges.next()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tabIndex",{get:function(){return this._tabIndex},set:function(t){this._tabIndex=Object(a.c)(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){return this._value},set:function(t){t!==this._value&&(this._value=t)},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){var t=this;this.selectionModel=new s.c(this.allowMultiple),this.ngControl&&this.ngControl.form&&this.ngControl.valueChanges&&this.ngControl.valueChanges.pipe(Object(l.q)(this)).subscribe(function(e){e&&t.setSelectionByValue(e)})},t.prototype.ngAfterContentInit=function(){var t=this;this.initKeyManager(),this.selectionModel.changed.pipe(Object(l.q)(this)).subscribe(function(e){e.added.forEach(function(e){e.select(),t.optionSelected.emit(new j(t,e.value))}),e.removed.forEach(function(e){e.deselect(),t.optionDeselected.emit(new j(t,e.value))})}),this.options.changes.pipe(Object(b.a)(null),Object(l.q)(this)).subscribe(function(){t.resetOptions(),t.initializeSelection()})},t.prototype.ngOnChanges=function(t){Object(u.c)(t,"label")&&!t.label.firstChange&&(this.changeDetectorRef.detectChanges(),this.labelChanges.next())},t.prototype.ngOnDestroy=function(){this.stateChanges.complete()},t.prototype.toggle=function(){this.isDisabled||(this.panelOpen?this.close():this.open())},t.prototype.open=function(){var t=this;!this.isDisabled&&this.options&&this.options.length&&!this.panelOpen&&(this.triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this.triggerFontSize=parseInt(getComputedStyle(this.trigger.nativeElement)["font-size"],10),this.panelOpen=!0,this.keyManager.withHorizontalOrientation(null),this.highlightCorrectOption(),this.changeDetectorRef.markForCheck(),this.ngZone.onStable.asObservable().pipe(Object(m.a)(1)).subscribe(function(){t.triggerFontSize&&t.overlayDir.overlayRef&&t.overlayDir.overlayRef.overlayElement&&(t.overlayDir.overlayRef.overlayElement.style.fontSize=t.triggerFontSize+"px"),t.optionRect=t.options.first.elementRef.nativeElement.getBoundingClientRect(),t.calculateOverlayPosition()}),this.opened.emit())},t.prototype.close=function(){this.panelOpen&&(this.panelOpen=!1,this.keyManager.withHorizontalOrientation("ltr"),this.changeDetectorRef.markForCheck(),this.onTouched(),this.updateValueAndValidity(),this.closed.emit())},t.prototype.onAttached=function(){var t=this;this.overlayDir.positionChange.pipe(Object(m.a)(1)).subscribe(function(){t.changeDetectorRef.detectChanges(),t.setPanelScrollTop(t.scrollTop)})},t.prototype.handleKeydown=function(t){this.isDisabled||(this.panelOpen?this.handleOpenKeydown(t):this.handleClosedKeydown(t))},t.prototype.handleClosedKeydown=function(t){var e=t.code,i=[c.a.DOWN_ARROW.code,c.a.UP_ARROW.code,c.a.LEFT_ARROW.code,c.a.RIGHT_ARROW.code].indexOf(e)>=0;e===c.a.ENTER.code||e===c.a.SPACE.code||(this.allowMultiple||t.altKey)&&i?(t.preventDefault(),this.open()):this.allowMultiple||this.keyManager.onKeydown(t)},t.prototype.handleOpenKeydown=function(t){var e=t.code,i=e===c.a.DOWN_ARROW.code||e===c.a.UP_ARROW.code,n=this.keyManager,o=this.isFilterable&&"input"===t.target.tagName.toLowerCase();if(e===c.a.HOME.code||e===c.a.END.code)t.preventDefault(),e===c.a.HOME.code?n.setFirstItemActive():n.setLastItemActive();else if(i&&t.altKey)t.preventDefault(),this.close();else if((e===c.a.ENTER.code||e===c.a.SPACE.code&&!o)&&n.activeItem)t.preventDefault(),n.activeItem.selectViaInteraction();else if(this.allowMultiple&&e===c.a.A.code&&t.ctrlKey){t.preventDefault();var s=this.options.some(function(t){return!t.isDisabled&&!t.selected});this.options.forEach(function(t){t.isDisabled||(s?t.select():t.deselect())})}else{var r=this.allowMultiple&&i&&t.shiftKey;i&&t.shiftKey?e===c.a.DOWN_ARROW.code?n.setNextItemActive():n.setPreviousItemActive():n.onKeydown(t),r&&n.activeItem&&n.activeItem.selectViaInteraction()}},t.prototype.resetOptions=function(){var t=this;this.optionSelectionChanges.pipe(Object(O.a)(this.options.changes),Object(l.q)(this)).subscribe(function(e){t.onSelect(e.source,e.isUserInput),e.isUserInput&&!t.allowMultiple&&t.panelOpen&&(t.close(),t.focus())}),d.a.apply(void 0,Object(n.__spread)(this.options.map(function(t){return t.stateChanges}))).pipe(Object(l.q)(this)).subscribe(function(){t.changeDetectorRef.markForCheck(),t.stateChanges.next()}),this.setOptionIds()},t.prototype.onSelect=function(t,e){var i=this.selectionModel.isSelected(t);null!=t.value||this.allowMultiple?(t.selected?this.selectionModel.select(t):this.selectionModel.deselect(t),e&&this.keyManager.setActiveItem(t),this.allowMultiple&&(this.sortValues(),e&&this.focus())):(t.deselect(),this.selectionModel.clear(),this.propagateChanges(t.value)),i!==this.selectionModel.isSelected(t)&&this.propagateChanges(),this.stateChanges.next()},t.prototype.setOptionIds=function(){this.optionIds=this.options.map(function(t){return t.id}).join(" ")},t.prototype.initKeyManager=function(){var t=this;this.keyManager=new o.b(this.options).withTypeAhead().withVerticalOrientation().withHorizontalOrientation("ltr"),this.keyManager.tabOut.pipe(Object(l.q)(this)).subscribe(function(){t.focus(),t.close()}),this.keyManager.change.pipe(Object(l.q)(this)).subscribe(function(){t.panelOpen&&t.panel?t.scrollActiveOptionIntoView():t.panelOpen||t.allowMultiple||!t.keyManager.activeItem||t.keyManager.activeItem.selectViaInteraction()})},t.prototype.focus=function(){this.elementRef.nativeElement.focus()},t.prototype.sortValues=function(){var t=this;if(this.allowMultiple){var e=this.options.toArray();this.selectionModel.sort(function(i,n){return t.sortComparator?t.sortComparator(i,n,e):e.indexOf(i)-e.indexOf(n)}),this.stateChanges.next()}},t.prototype.propagateChanges=function(t){var e;e=this.allowMultiple?this.selected.map(function(t){return t.value}):this.selected?this.selected.value:t,this.value=e,this.valueChange.emit(e),this.onChange(e),this.selectionChange.emit(new j(this,e)),this.changeDetectorRef.markForCheck()},t.prototype.updateValueAndValidity=function(){this.ngControl&&this.ngControl.control&&this.ngControl.control.updateValueAndValidity()},t.prototype.writeValue=function(t){},t.prototype.registerOnChange=function(t){this.onChange=t},t.prototype.registerOnTouched=function(t){this.onTouched=t},t.prototype.setDisabledState=function(t){this.isDisabled=t,this.changeDetectorRef.markForCheck(),this.stateChanges.next()},t.prototype.initializeSelection=function(){var t=this;Promise.resolve().then(function(){t.setSelectionByValue(t.ngControl?t.ngControl.value:t.value)})},t.prototype.setSelectionByValue=function(t){var e=this;if(this.allowMultiple&&t)t=Object(a.a)(t),this.selectionModel.clear(),t.forEach(function(t){return e.selectOptionByValue(t)}),this.sortValues();else{this.selectionModel.clear();var i=this.selectOptionByValue(t);i&&this.keyManager.setActiveItem(i)}this.changeDetectorRef.markForCheck()},t.prototype.selectOptionByValue=function(t){var e=this,i=this.options.find(function(i){try{return null!=i.value&&e.compareWith(i.value,t)}catch(n){return Object(r.db)()&&console.warn(n),!1}});return i&&this.selectionModel.select(i),i},t.prototype.scrollActiveOptionIntoView=function(){var t=this.keyManager.activeItemIndex||0,e=Object(h.i)(t,this.options,this.optionGroups),i=Object(h.j)(t+e,this.itemHeight,this.getPanelScrollTop(),256);this.setPanelScrollTop(i)},t.prototype.calculateOverlayPosition=function(){var t=this.itemHeight,e=this.itemCount,i=Math.min(e*t,256),n=e*t-i,o=this.empty?0:this.getOptionIndex(this.selectionModel.selected[0]);o+=Object(h.i)(o,this.options,this.optionGroups);var s=i/2;this.scrollTop=this.calculateOverlayScroll(o,s,n),this.offsetY=this.calculateOverlayOffsetY(o,s,n),this.checkOverlayWithinViewport(n)},t.prototype.calculateOverlayScroll=function(t,e,i){var n=this.itemHeight;return Math.min(Math.max(0,n*t-e+n/2),i)},t.prototype.calculateOverlayOffsetY=function(t,e,i){var n=this.itemHeight,o=(n-(this.triggerRect?this.triggerRect.height:0))/2,s=Math.floor(256/n);return Math.round(-1*(0===this.scrollTop?t*n:this.scrollTop===i?(t-(this.itemCount-s))*n+(n-(this.itemCount*n-256)%n):e-n/2)-o)},t.prototype.checkOverlayWithinViewport=function(t){var e=this.itemHeight,i=this.viewportRuler.getViewportSize(),n=this.triggerRect?this.triggerRect.top-8:0,o=i.height-(this.triggerRect?this.triggerRect.bottom:0)-8,s=Math.abs(this.offsetY),r=Math.min(this.itemCount*e,256)-s-(this.triggerRect?this.triggerRect.height:0);r>o?this.adjustPanelUp(r,o):s>n?this.adjustPanelDown(s,n,t):this.transformOrigin=this.getOriginBasedOnOption()},t.prototype.adjustPanelUp=function(t,e){var i=Math.round(t-e);this.scrollTop-=i,this.offsetY=this.offsetY-i<0?0:this.offsetY-i,this.transformOrigin=this.getOriginBasedOnOption(),this.scrollTop<=0&&(this.scrollTop=0,this.offsetY=0,this.transformOrigin="50% bottom 0px")},t.prototype.adjustPanelDown=function(t,e,i){var n=Math.round(t-e);if(this.scrollTop+=n,this.offsetY=this.offsetY+n<0?0:this.offsetY+n,this.transformOrigin=this.getOriginBasedOnOption(),this.scrollTop>=i)return this.scrollTop=i,this.offsetY=0,void(this.transformOrigin="50% top 0px")},t.prototype.getOriginBasedOnOption=function(){var t=this.itemHeight,e=(t-(this.triggerRect?this.triggerRect.height:0))/2;return"50% "+(Math.abs(this.offsetY)-e+t/2)+"px 0px"},t.prototype.getOptionIndex=function(t){return this.options.reduce(function(e,i,n){var o=t===i?n:void 0;return Object(l.m)(e)?o:e},void 0)},t.prototype.highlightCorrectOption=function(){this.keyManager&&(this.empty?this.keyManager.setFirstItemActive():this.keyManager.setActiveItem(this.selectionModel.selected[0]))},t.prototype.toggleAllOptions=function(){Object(h.l)(this.options)},t.prototype.onContainerClick=function(){this.focus(),this.isDisabled||this.open()},t.prototype.getPanelScrollTop=function(){return this.panel?this.panel.nativeElement.scrollTop:0},t.prototype.setPanelScrollTop=function(t){this.panel&&(this.panel.nativeElement.scrollTop=t)},t}(),I=function(){return function(){}}()}}]);