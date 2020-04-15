function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,a=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){o=!0,r=e},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw r}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _createSuper(e){return function(){var t,i=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(i,arguments,n)}else t=i.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"Q92/":function(e,t,i){"use strict";i.r(t),i.d(t,"FileUploadModule",(function(){return be}));var n,r=i("2kYt"),a=i("40Bj"),o=i("nIj0"),s=i("4mc+"),l=i("EM62"),c=i("mFH5"),u=i("5XID"),d=i("5lCh"),f=i("bwdy"),p=i("KTx3"),m=i("xVbo"),h=["primaryValueBar"],b=Object(c.w)((function e(t){_classCallCheck(this,e),this._elementRef=t}),"primary"),g=new l.B("mat-progress-bar-location",{providedIn:"root",factory:function(){var e=Object(l.nb)(r.e),t=e?e.location:null;return{getPathname:function(){return t?t.pathname+t.search:""}}}}),v=0,y=((n=function(e){_inherits(i,e);var t=_createSuper(i);function i(e,n,r,a){var o;_classCallCheck(this,i),(o=t.call(this,e))._elementRef=e,o._ngZone=n,o._animationMode=r,o._isNoopAnimation=!1,o._value=0,o._bufferValue=0,o.animationEnd=new l.u,o._animationEndSubscription=f.a.EMPTY,o.mode="determinate",o.progressbarId="mat-progress-bar-".concat(v++);var s=a?a.getPathname().split("#")[0]:"";return o._rectangleFillValue="url('".concat(s,"#").concat(o.progressbarId,"')"),o._isNoopAnimation="NoopAnimations"===r,o}return _createClass(i,[{key:"_primaryTransform",value:function(){return{transform:"scaleX(".concat(this.value/100,")")}}},{key:"_bufferTransform",value:function(){return"buffer"===this.mode?{transform:"scaleX(".concat(this.bufferValue/100,")")}:null}},{key:"ngAfterViewInit",value:function(){var e=this;this._ngZone.runOutsideAngular((function(){var t=e._primaryValueBar.nativeElement;e._animationEndSubscription=Object(p.a)(t,"transitionend").pipe(Object(m.a)((function(e){return e.target===t}))).subscribe((function(){"determinate"!==e.mode&&"buffer"!==e.mode||e._ngZone.run((function(){return e.animationEnd.next({value:e.value})}))}))}))}},{key:"ngOnDestroy",value:function(){this._animationEndSubscription.unsubscribe()}},{key:"value",get:function(){return this._value},set:function(e){this._value=O(Object(u.e)(e)||0)}},{key:"bufferValue",get:function(){return this._bufferValue},set:function(e){this._bufferValue=O(e||0)}}]),i}(b)).\u0275fac=function(e){return new(e||n)(l.jc(l.r),l.jc(l.M),l.jc(d.a,8),l.jc(g,8))},n.\u0275cmp=l.dc({type:n,selectors:[["mat-progress-bar"]],viewQuery:function(e,t){var i;1&e&&l.kd(h,!0),2&e&&l.Qc(i=l.yc())&&(t._primaryValueBar=i.first)},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"mat-progress-bar"],hostVars:4,hostBindings:function(e,t){2&e&&(l.Wb("aria-valuenow","indeterminate"===t.mode||"query"===t.mode?null:t.value)("mode",t.mode),l.ac("_mat-animation-noopable",t._isNoopAnimation))},inputs:{color:"color",mode:"mode",value:"value",bufferValue:"bufferValue"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[l.Sb],decls:9,vars:4,consts:[["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],["primaryValueBar",""],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(e,t){1&e&&(l.Ac(),l.pc(0,"svg",0),l.pc(1,"defs"),l.pc(2,"pattern",1),l.kc(3,"circle",2),l.oc(),l.oc(),l.kc(4,"rect",3),l.oc(),l.zc(),l.kc(5,"div",4),l.kc(6,"div",5,6),l.kc(8,"div",7)),2&e&&(l.Vb(2),l.Ic("id",t.progressbarId),l.Vb(2),l.Wb("fill",t._rectangleFillValue),l.Vb(1),l.Ic("ngStyle",t._bufferTransform()),l.Vb(1),l.Ic("ngStyle",t._primaryTransform()))},directives:[r.w],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n'],encapsulation:2,changeDetection:0}),n);function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return Math.max(t,Math.min(i,e))}var _,j,k=((_=function e(){_classCallCheck(this,e)}).\u0275mod=l.hc({type:_}),_.\u0275inj=l.gc({factory:function(e){return new(e||_)},imports:[[r.c,c.j],c.j]}),_),w=i("AW5y"),x=i("wK4c"),C=i("0Hrt"),I=i("NDKv"),F=i("Hn30"),V=i("BRos"),S=i("hOI7"),T=i("7sjG"),D=i("h9lW"),R=i("RmZO"),P=i("HRj5"),M=i("/Gcv"),A=i("5uKI"),E=i("C05f"),L=i("qFEQ"),B=((j=function(){function e(t){_classCallCheck(this,e),this.windowService=t,this.hasProtection=!1}return _createClass(e,[{key:"add",value:function(){this.hasProtection||(this.windowService.nativeWindow.addEventListener("dragover",this.prevent,!1),this.windowService.nativeWindow.addEventListener("drop",this.prevent,!1),this.hasProtection=!0)}},{key:"remove",value:function(){this.hasProtection&&(this.windowService.nativeWindow.removeEventListener("dragover",this.prevent,!1),this.windowService.nativeWindow.removeEventListener("drop",this.prevent,!1),this.hasProtection=!1)}},{key:"prevent",value:function(e){e.preventDefault()}}]),e}()).\u0275fac=function(e){return new(e||j)(Object(l.tc)(w.b))},j.\u0275prov=Object(l.fc)({token:j,factory:j.\u0275fac}),j),z=["text/csv","image/jpeg","image/jpg","image/png","image/gif","video/mp4","video/x-flv","video/webm","video/quicktime","video/mpeg"],q=function e(t,i){_classCallCheck(this,e),this.width=t,this.height=i},K=["text/csv","video/mp4"],X=function(){function e(t,i,n,r,a){var o=this;_classCallCheck(this,e),this.file=t,this.imageDimensionConstraints=i,this.typeConstraint=n,this.maxSize=r,this.ratioConstraint=a,this.validations={fileType:!1,fileSize:!1,imageDimensions:!1,imageRatio:!1},this.fileReader=new FileReader,this.fileLoaded$=new E.a(this.fileReference),this.mimeType=this.file.type,this.size=Math.ceil(this.file.size/1024),this.name=this.file.name,this.determineImageDimensions((function(){o.typeConstraint&&o.typeConstraint.indexOf(o.file.type)>=0&&(o.validations.fileType=!0),o.size<=o.maxSize&&(o.validations.fileSize=!0),o.fileLoaded$.next(o)}))}return _createClass(e,[{key:"determineImageDimensions",value:function(e){var t,i,n=this;i=this.mimeType,z.slice().filter((function(e){return!K.includes(e)})).indexOf(i)>=0?(t=new Image,this.fileReader.onload=function(e){t&&(Object(R.i)(n.fileReader.result)?t.src=n.fileReader.result:Object(l.ob)()&&console.warn("".concat(t," is not returning a string.")))},t.onload=function(i){t&&(n.dimensions=new q(t.naturalWidth,t.naturalHeight)),n.validations.imageDimensions=n.validateImageDimensions(n.imageDimensionConstraints),n.validations.imageRatio=n.validateImageRatio(n.ratioConstraint),e&&e()}):(e&&e(),this.validations.imageDimensions=!0,this.validations.imageRatio=!0),this.fileReader.readAsDataURL(this.file)}},{key:"validateImageDimensions",value:function(e){if(!e||e.length<1)return!0;var t,i=this.width,n=this.height,r=_createForOfIteratorHelper(e);try{for(r.s();!(t=r.n()).done;){var a=t.value,o=i>=a.width.min&&i<=a.width.max;if(n>=a.height.min&&n<=a.height.max&&o)return!0}}catch(s){r.e(s)}finally{r.f()}return!1}},{key:"validateImageRatio",value:function(e){if(!e)return!0;var t,i=_createForOfIteratorHelper(e.map((function(e){return e.widthRatio/e.heightRatio})));try{for(i.s();!(t=i.n()).done;){var n=t.value;if(this.isSame(n,this.width/this.height))return!0}}catch(r){i.e(r)}finally{i.f()}return!1}},{key:"isSame",value:function(e,t){return Math.abs((e-t)/e)<.001}},{key:"width",get:function(){return this.dimensions?this.dimensions.width:0}},{key:"height",get:function(){return this.dimensions?this.dimensions.height:0}},{key:"isCSV",get:function(){return this.mimeType.includes("csv")}},{key:"isImage",get:function(){return this.mimeType.includes("image")}},{key:"isVideo",get:function(){return this.mimeType.includes("video")}},{key:"fileContents",get:function(){return Object(R.i)(this.fileReader.result)?this.fileReader.result:(Object(l.ob)()&&console.warn("".concat(this.fileReader.result," is not returning a string.")),"")}},{key:"isValid",get:function(){return this.validations.fileType&&this.validations.fileSize&&this.validations.imageDimensions&&this.validations.imageRatio}}]),e}(),H=["preview"];function N(e,t){if(1&e&&(Object(l.pc)(0,"div",18),Object(l.pc)(1,"ts-icon",19),Object(l.fd)(2," cloud_upload "),Object(l.oc)(),Object(l.fd)(3),Object(l.oc)()),2&e){var i=Object(l.Bc)();Object(l.Vb)(1),Object(l.Ic)("inline",!0),Object(l.Vb)(2),Object(l.id)("Drop file",i.multiple?"s":""," here ",i.hideButton?"or click to select":""," ")}}function U(e,t){if(1&e&&Object(l.kc)(0,"img",20,21),2&e){var i=Object(l.Bc)();Object(l.Wb)("src",null==i.file?null:i.file.fileContents,l.Xc)}}function W(e,t){1&e&&Object(l.kc)(0,"ts-icon",22),2&e&&Object(l.Ic)("svgIcon","csv")}function $(e,t){if(1&e&&Object(l.kc)(0,"mat-progress-bar",23),2&e){var i=Object(l.Bc)();Object(l.Ic)("value",i.progress)("color",i.theme)}}function G(e,t){if(1&e&&Object(l.kc)(0,"ts-validation-messages",24),2&e){var i=Object(l.Bc)();Object(l.Ic)("control",i.formControl)}}function Q(e,t){if(1&e&&(Object(l.pc)(0,"div",25),Object(l.fd)(1),Object(l.oc)()),2&e){var i=t.$implicit;Object(l.Vb)(1),Object(l.hd)(" ",i," ")}}var Z,Y,J=0,ee=((Y=function(e){_inherits(i,e);var t=_createSuper(i);function i(e,n,r,a){var s;return _classCallCheck(this,i),(s=t.call(this)).documentService=e,s.elementRef=n,s.changeDetectorRef=r,s.dropProtectionService=a,s.uid="ts-file-upload-".concat(J++),s.dragInProgress=!1,s.layoutGap=M.a.small[0],s._acceptedTypes=z.slice(),s._formControl=new o.g,s.hideButton=!1,s._id=s.uid,s.isDisabled=!1,s._maximumKilobytesPerFile=10240,s.multiple=!1,s._progress=0,s.theme="primary",s.cleared=new l.u,s.enter=new l.u,s.exit=new l.u,s.selected=new l.u,s.selectedMultiple=new l.u,s.updateInnerValue=function(e){s.value=e,s.changeDetectorRef.destroyed||s.changeDetectorRef.detectChanges()},s.virtualFileInput=s.createFileInput(),s}return _createClass(i,[{key:"handleDragover",value:function(e){this.isDisabled||(this.preventAndStopEventPropagation(e),this.enter.emit(!0),this.dragInProgress=!0)}},{key:"handleDragleave",value:function(e){this.isDisabled||(this.preventAndStopEventPropagation(e),this.exit.emit(!0),this.dragInProgress=!1)}},{key:"handleDrop",value:function(e){this.isDisabled||(this.preventAndStopEventPropagation(e),this.dragInProgress=!1,this.collectFilesFromEvent(e))}},{key:"handleClick",value:function(){this.isDisabled||this.promptForFiles()}},{key:"ngOnInit",value:function(){var e=this;this.dropProtectionService.add(),this.formControl&&this.formControl.valueChanges.pipe(Object(P.j)(this)).subscribe((function(){e.changeDetectorRef.destroyed||e.changeDetectorRef.detectChanges()}))}},{key:"ngAfterContentInit",value:function(){this.virtualFileInput.addEventListener("change",this.onVirtualInputElementChange.bind(this)),this.updateVirtualFileInputAttrs(this.virtualFileInput)}},{key:"ngOnChanges",value:function(e){(Object(P.f)(e,"multiple")||Object(P.f)(e,"accept"))&&(this.updateVirtualFileInputAttrs(this.virtualFileInput),this.registerOnChangeFn(this.updateInnerValue))}},{key:"ngOnDestroy",value:function(){this.virtualFileInput&&this.virtualFileInput.removeEventListener("change",this.onVirtualInputElementChange.bind(this)),this.dropProtectionService.remove()}},{key:"handleKeydown",value:function(e){e.code===D.a.ENTER.code&&(this.promptForFiles(),this.elementRef.nativeElement.blur())}},{key:"promptForFiles",value:function(){this.virtualFileInput.click()}},{key:"removeFile",value:function(e){e&&this.preventAndStopEventPropagation(e),this.file=void 0,this.clearValidationMessages(),this.cleared.emit(!0)}},{key:"createFileInput",value:function(){var e=this.documentService.document.createElement("input");return e.setAttribute("type","file"),e.style.display="none",e}},{key:"collectFilesFromEvent",value:function(e){var t,i=this;if(Object(R.d)(e)&&(t=e.dataTransfer&&e.dataTransfer.files?e.dataTransfer.files:void 0),e.target&&Object(R.f)(e.target)&&(t=e.target.files?e.target.files:void 0),(!t||t.length<1)&&Object(l.ob)())throw Error("TsFileUpload: Event contained no file.");var n=t?Array.from(t):[];if(n.length>1)this.selectedMultiple.emit(n);else{var r=n[0]?n[0]:void 0;r&&new X(r,this.dimensionConstraints,this.acceptedTypes,this.maximumKilobytesPerFile,this._ratioConstraints).fileLoaded$.pipe(Object(m.a)((function(e){return!!e})),Object(P.j)(this)).subscribe((function(e){i.formControl.setValue(e.file),i.selected.emit(e),i.setUpNewFile(e)}))}}},{key:"registerOnChangeFn",value:function(e){this.formControl&&this.formControl.registerOnChange(e)}},{key:"setUpNewFile",value:function(e){e&&(this.file=e,this.setValidationMessages(e),this.changeDetectorRef.markForCheck())}},{key:"onVirtualInputElementChange",value:function(e){this.isDisabled||(this.collectFilesFromEvent(e),this.virtualFileInput.value="")}},{key:"preventAndStopEventPropagation",value:function(e){e.preventDefault(),e.stopPropagation()}},{key:"updateVirtualFileInputAttrs",value:function(e){var t=e.hasAttribute("multiple");this.multiple&&!t&&this.virtualFileInput.setAttribute("multiple","true"),!this.multiple&&t&&this.virtualFileInput.removeAttribute("multiple"),this.acceptedTypes&&this.virtualFileInput.setAttribute("accept",this.acceptedTypes.toString())}},{key:"setValidationMessages",value:function(e){if(e){for(var t={},i={fileSize:{valid:!1,actual:e.size,max:this.maximumKilobytesPerFile},fileType:{valid:!1,actual:e.mimeType,accepted:this.acceptedTypes.join(", ")},imageDimensions:{valid:!1,actual:e.dimensions},imageRatio:{valid:!1,actual:e.width/e.height}},n=Object.keys(e.validations),r=0;r<n.length;r+=1){var a=n[r];e.validations[a]||(t[a]=i[a])}0===Object.keys(t).length?this.formControl.setErrors(null):this.formControl.setErrors(t),this.formControl.markAsTouched(),this.changeDetectorRef.markForCheck()}}},{key:"clearValidationMessages",value:function(){this.formControl.setErrors(null),this.changeDetectorRef.markForCheck()}},{key:"parseRatioStringToObject",value:function(e){if(e){var t=[];return e.map((function(e){return t.push({widthRatio:Number(e.split(":")[0]),heightRatio:Number(e.split(":")[1])})})),t}}},{key:"parseRatioToString",value:function(e){if(e){var t=[];return e.map((function(e){return t.push("".concat(e.widthRatio.toString(),":").concat(e.heightRatio.toString()))})),t}}},{key:"trackByFn",value:function(e){return e}},{key:"buttonMessage",get:function(){return this.dragInProgress?"Drop File".concat(this.multiple?"s":""):"Select File".concat(this.multiple?"s":"")}},{key:"hints",get:function(){var e=[],t=this.acceptedTypes.slice().map((function(e){return e.split("/")[1]})).join(", ");return(this.acceptedTypes.indexOf("image/png")>=0||this.acceptedTypes.indexOf("image/jpeg")>=0||this.acceptedTypes.indexOf("image/jpg")>=0)&&this.supportedImageDimensions.length>0&&e.push("Must be a valid dimension: ".concat(this.supportedImageDimensions)),e.push("Must be ".concat(t)),e.push("Must be under ".concat(this.maximumKilobytesPerFile.toLocaleString(),"kb")),this.ratioConstraints&&e.push("Must have valid image ratio of ".concat(this.ratioConstraints.join(" or ")," ")),e}},{key:"supportedImageDimensions",get:function(){var e="";if(this.dimensionConstraints){var t,i=_createForOfIteratorHelper(this.dimensionConstraints.slice());try{for(i.s();!(t=i.n()).done;){var n=t.value;if(e.length>0&&(e+=", "),n.height.min===n.height.max&&n.width.min===n.width.max)e+="".concat(n.width.min.toLocaleString(),"x").concat(n.height.min.toLocaleString());else{var r=n.height.min===n.height.max?n.height.min.toLocaleString():"".concat(n.height.min.toLocaleString(),"-").concat(n.height.max.toLocaleString());e+="".concat(n.width.min===n.width.max?n.width.min.toLocaleString():"".concat(n.width.min.toLocaleString(),"-").concat(n.width.max.toLocaleString()),"x").concat(r)}}}catch(a){i.e(a)}finally{i.f()}}return e}},{key:"accept",set:function(e){this._acceptedTypes=e?Object(T.a)(e):z.slice()}},{key:"acceptedTypes",get:function(){return this._acceptedTypes}},{key:"dimensionConstraints",set:function(e){this._sizeConstraints=e},get:function(){return this._sizeConstraints}},{key:"formControl",set:function(e){this._formControl=e||new o.g},get:function(){return this._formControl}},{key:"id",set:function(e){this._id=e||this.uid},get:function(){return this._id}},{key:"maximumKilobytesPerFile",set:function(e){this._maximumKilobytesPerFile=e||10240},get:function(){return this._maximumKilobytesPerFile}},{key:"progress",set:function(e){this._progress=Object(T.d)(e)},get:function(){return this._progress}},{key:"ratioConstraints",set:function(e){if(e){var t,i=_createForOfIteratorHelper(e);try{for(i.s();!(t=i.n()).done;){var n=t.value.split(":");if(2!==n.length||!Object(R.h)(n[0])||!Object(R.h)(n[1]))throw new Error('TsFileUploadComponent: An array of image ratios should be formatted as ["1:2", "3:4"]')}}catch(r){i.e(r)}finally{i.f()}}this._ratioConstraints=this.parseRatioStringToObject(e)},get:function(){return this.parseRatioToString(this._ratioConstraints)}},{key:"seedFile",set:function(e){var t=this;this._seedFile=e,e&&new X(e,this.dimensionConstraints,this.acceptedTypes,this.maximumKilobytesPerFile,this._ratioConstraints).fileLoaded$.pipe(Object(m.a)((function(e){return void 0!==e})),Object(P.j)(this)).subscribe((function(e){t.formControl.setValue(e.file),t.selected.emit(e),t.setUpNewFile(e)}))},get:function(){return this._seedFile}}]),i}(A.b)).\u0275fac=function(e){return new(e||Y)(Object(l.jc)(w.a),Object(l.jc)(l.r),Object(l.jc)(l.j),Object(l.jc)(B))},Y.\u0275cmp=Object(l.dc)({type:Y,selectors:[["ts-file-upload"]],viewQuery:function(e,t){var i;1&e&&Object(l.kd)(H,!0),2&e&&Object(l.Qc)(i=Object(l.yc)())&&(t.preview=i.first)},hostAttrs:[1,"ts-file-upload"],hostBindings:function(e,t){1&e&&Object(l.xc)("keydown",(function(e){return t.handleKeydown(e)}))("dragover",(function(e){return t.handleDragover(e)}))("dragleave",(function(e){return t.handleDragleave(e)}))("drop",(function(e){return t.handleDrop(e)}))("click",(function(){return t.handleClick()}))},inputs:{accept:"accept",dimensionConstraints:"dimensionConstraints",formControl:"formControl",hideButton:"hideButton",id:"id",isDisabled:"isDisabled",maximumKilobytesPerFile:"maximumKilobytesPerFile",multiple:"multiple",progress:"progress",ratioConstraints:"ratioConstraints",seedFile:"seedFile",theme:"theme"},outputs:{cleared:"cleared",enter:"enter",exit:"exit",selected:"selected",selectedMultiple:"selectedMultiple"},exportAs:["tsFileUpload"],features:[Object(l.Ub)([Object(A.a)(Y)]),l.Sb,l.Tb],decls:21,vars:27,consts:[["tabindex","1","fxLayout","column",1,"c-file-upload","qa-file-upload",3,"id"],["fxLayout","row","fxLayoutAlign","start center",3,"fxLayoutGap"],["class","c-file-upload__empty qa-file-upload-empty","fxLayout","row","fxLayoutAlign","start center","fxFlex","grow",4,"ngIf"],["fxFlex","","fxLayout","column","fxLayoutAlign","center start",1,"c-file-upload__file"],["fxFill","","fxLayout","row","fxLayoutAlign","start center"],["fxFlex","noshrink",1,"c-file-upload__preview","qa-file-upload-preview",3,"hidden"],["alt","",4,"ngIf"],[3,"svgIcon",4,"ngIf"],["fxFlex","grow","fxLayout","row","fxLayoutAlign","start center",1,"c-file-upload__filename","qa-file-upload-name",3,"title"],[1,"c-file-upload__filename-inner"],["tooltipValue","Remove file"],["theme","warn","actionName","Reset",1,"c-file-upload__remove","qa-file-upload-remove",3,"click"],[1,"c-file-upload__prompt","qa-file-upload-prompt",3,"theme","isDisabled","clicked"],["class","c-file-upload__progress qa-file-upload-progress","mode","determinate",3,"value","color",4,"ngIf"],["fxLayout","column","fxLayout.gt-xs","row"],["fxFlex","noshrink","class","qa-file-upload-validation-messages",3,"control",4,"ngIf"],["fxFlex","grow",1,"c-file-upload__hints","qa-file-upload-hints"],["class","c-file-upload__hint",4,"ngFor","ngForOf","ngForTrackBy"],["fxLayout","row","fxLayoutAlign","start center","fxFlex","grow",1,"c-file-upload__empty","qa-file-upload-empty"],[3,"inline"],["alt",""],["preview",""],[3,"svgIcon"],["mode","determinate",1,"c-file-upload__progress","qa-file-upload-progress",3,"value","color"],["fxFlex","noshrink",1,"qa-file-upload-validation-messages",3,"control"],[1,"c-file-upload__hint"]],template:function(e,t){1&e&&(Object(l.pc)(0,"div",0),Object(l.pc)(1,"div",1),Object(l.dd)(2,N,4,3,"div",2),Object(l.pc)(3,"div",3),Object(l.pc)(4,"div",4),Object(l.pc)(5,"div",5),Object(l.dd)(6,U,2,1,"img",6),Object(l.dd)(7,W,1,1,"ts-icon",7),Object(l.oc)(),Object(l.pc)(8,"div",8),Object(l.pc)(9,"div",9),Object(l.fd)(10),Object(l.oc)(),Object(l.oc)(),Object(l.pc)(11,"ts-tooltip",10),Object(l.pc)(12,"ts-icon-button",11),Object(l.xc)("click",(function(e){return t.removeFile(e)})),Object(l.fd)(13,"clear"),Object(l.oc)(),Object(l.oc)(),Object(l.oc)(),Object(l.oc)(),Object(l.pc)(14,"ts-button",12),Object(l.xc)("clicked",(function(){return t.promptForFiles()})),Object(l.fd)(15),Object(l.oc)(),Object(l.oc)(),Object(l.dd)(16,$,1,2,"mat-progress-bar",13),Object(l.oc)(),Object(l.pc)(17,"div",14),Object(l.dd)(18,G,1,1,"ts-validation-messages",15),Object(l.pc)(19,"div",16),Object(l.dd)(20,Q,2,1,"div",17),Object(l.oc)(),Object(l.oc)()),2&e&&(Object(l.ac)("c-file-upload--disabled",t.isDisabled)("c-file-upload--drag",t.dragInProgress)("c-file-upload--file",t.file)("c-file-upload--error",t.file&&!t.file.isValid),Object(l.Ic)("id",t.id),Object(l.Vb)(1),Object(l.Ic)("fxLayoutGap",t.layoutGap),Object(l.Vb)(1),Object(l.Ic)("ngIf",!t.file),Object(l.Vb)(1),Object(l.ac)("c-file-upload__file--hidden",!t.file),Object(l.Vb)(2),Object(l.Ic)("hidden",!t.file),Object(l.Vb)(1),Object(l.Ic)("ngIf",null==t.file?null:t.file.isImage),Object(l.Vb)(1),Object(l.Ic)("ngIf",null==t.file?null:t.file.isCSV),Object(l.Vb)(1),Object(l.Jc)("title",null==t.file?null:t.file.name),Object(l.Vb)(2),Object(l.hd)(" ",null==t.file?null:t.file.name," "),Object(l.Vb)(4),Object(l.ac)("c-file-upload__prompt--hidden",t.hideButton),Object(l.Ic)("theme",t.theme)("isDisabled",t.dragInProgress||t.isDisabled),Object(l.Vb)(1),Object(l.hd)(" ",t.buttonMessage," "),Object(l.Vb)(1),Object(l.Ic)("ngIf",t.file&&t.progress>0),Object(l.Vb)(2),Object(l.Ic)("ngIf",t.formControl&&t.formControl.errors),Object(l.Vb)(2),Object(l.Ic)("ngForOf",t.hints)("ngForTrackBy",t.trackByFn))},directives:[L.f,L.e,L.g,r.t,L.b,L.h,V.a,I.a,x.a,r.s,C.a,y,S.a],styles:[".ts-file-upload{display:block;position:relative}.ts-file-upload .c-file-upload:not(.c-file-upload--disabled){cursor:pointer}.ts-file-upload+.ts-file-upload{margin-top:24px}.c-file-upload{border:1px dashed #cecdd1;border-radius:3px;padding:12px;transition:background-color .2s ease-out,border-color .2s ease-out;will-change:background-color,border-color}.c-file-upload:focus:not(.c-file-upload--disabled),.c-file-upload:hover:not(.c-file-upload--disabled){border-color:#1777b6}.c-file-upload--drag{background-color:#d3eaf9;border-color:#1777b6}.c-file-upload--drag .c-file-upload__remove{opacity:0}.c-file-upload--file{border-color:#1777b6}.c-file-upload--error{border-color:#c8604d}.c-file-upload.c-file-upload--disabled .c-file-upload__empty{color:#cecdd1}.c-file-upload .c-file-upload__file{font-size:75%;font-weight:400;letter-spacing:.01em;line-height:1.5;font-family:Lucida Console,Monaco,DejaVu Sans Mono,monospace;color:#757575;overflow:auto;position:relative}.c-file-upload .c-file-upload__file--hidden{position:absolute;visibility:hidden}.c-file-upload .c-file-upload__empty{color:#757575}.c-file-upload .c-file-upload__empty .ts-icon{margin-right:4px}.c-file-upload .c-file-upload__preview{border:1px solid #cecdd1;border-radius:3px;height:2.375rem;margin-right:12px;max-width:4.75rem;overflow:hidden;padding:4px;position:relative}.c-file-upload .c-file-upload__preview img{display:block;max-height:100%;max-width:100%}.c-file-upload .c-file-upload__filename{overflow:hidden}.c-file-upload .c-file-upload__filename-inner{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.c-file-upload .c-file-upload__remove{transition:color .2s,opacity .1s;will-change:color,opacity}.c-file-upload .c-file-upload__progress{display:block;margin-top:12px}.c-file-upload .c-file-upload__progress .mat-progress-bar-buffer{background-color:#d3eaf9}.c-file-upload .c-file-upload__prompt{pointer-events:none}.c-file-upload .c-file-upload__prompt--hidden{position:absolute;visibility:hidden}.c-file-upload__hints{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;color:#999;font-size:75%;font-weight:400;letter-spacing:.01em;line-height:1.5;padding:.3em .4em .2em;text-align:right}"],encapsulation:2,changeDetection:0}),Y),te=((Z=function e(){_classCallCheck(this,e)}).\u0275mod=Object(l.hc)({type:Z}),Z.\u0275inj=Object(l.gc)({factory:function(e){return new(e||Z)},providers:[F.b,w.a,B],imports:[[r.c,a.a,o.m,k,x.b,I.b,C.b,V.b,S.b]]}),Z),ie=i("OEuM"),ne=i("OXHR"),re=i("QmDH"),ae=i("dKA/"),oe=i("sEIs");function se(e,t){if(1&e&&(l.pc(0,"ts-option",10),l.fd(1),l.oc()),2&e){var i=t.$implicit;l.Ic("value",i),l.Vb(1),l.gd(i)}}function le(e,t){if(1&e){var i=l.qc();l.pc(0,"ts-file-upload",12),l.xc("selected",(function(e){return l.Vc(i),l.Bc(2).selected(e)}))("cleared",(function(){l.Vc(i);var e=l.Bc().$implicit;return l.Bc().clearFile(e.id)})),l.oc()}if(2&e){var n=l.Bc().$implicit,r=l.Bc();l.Ic("seedFile",n.file)("dimensionConstraints",r.constraints)("accept",r.mimeTypes)}}function ce(e,t){if(1&e&&(l.nc(0),l.dd(1,le,1,3,"ts-file-upload",11),l.mc()),2&e){var i=t.$implicit,n=l.Bc();l.Vb(1),l.Ic("ngIf",n.fileExists(i.id))}}var ue,de,fe,pe=[{height:{min:50,max:100},width:{min:50,max:100}},{height:{min:72,max:72},width:{min:72,max:72}},{height:{min:400,max:500},width:{min:700,max:800}},{height:{min:300,max:600},width:{min:100,max:300}},{height:{min:600,max:600},width:{min:160,max:160}},{height:{min:2500,max:2500},width:{min:3e4,max:3e4}}],me=[{path:"",component:(ue=function(){function e(){_classCallCheck(this,e),this.mimeTypes=["image/png","image/jpg","image/jpeg"],this.files=[],this.constraints=pe.slice(),this.progress=0,this.multiple=!0,this.hideButton=!1,this.mimeTypeOptions=["image/png","image/jpg","image/jpeg","text/csv","video/mp4","video/x-flv","video/webm","video/quicktime","video/mpeg"],this.ratioConstraints=["1:2","1.9:1","5:1"],this.disabled=!1}return _createClass(e,[{key:"selected",value:function(e){console.log("DEMO: selected: ",e),this.file=e,this.startProgress()}},{key:"mimeTypeChange",value:function(e){e.value.length<1&&(this.mimeTypes=["image/png","image/jpg","image/jpeg"])}},{key:"startProgress",value:function(){var e=this;this.progress=0;var t=setInterval((function(){e.progress<100?e.progress++:clearInterval(t)}),20)}},{key:"selectedMultiple",value:function(e){console.log("DEMO: selected multiple: ",e);var t=-1;this.files=e.map((function(e){return{id:t+=1,file:e}}))}},{key:"clearFile",value:function(e){!this.files||this.files.length<1||(this.files=this.files.filter((function(t){return t.id!==e})))}},{key:"fileExists",value:function(e){return!(!this.files||this.files.length<1||!this.files.find((function(t){return t.id===e})))}}]),e}(),ue.\u0275fac=function(e){return new(e||ue)},ue.\u0275cmp=l.dc({type:ue,selectors:[["demo-file-upload"]],decls:22,vars:16,consts:[["tsVerticalSpacing",""],["fxLayout","column","fxLayoutGap","24px"],[3,"ngModel","ngModelChange"],["fxLayout","row","fxLayoutGap","24px"],["label","Max Size (kb)","type","number",3,"ngModel","ngModelChange"],["fxFlex","noshrink"],["label","Allowed MIME types",3,"allowMultiple","ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"isDisabled","hideButton","maximumKilobytesPerFile","multiple","dimensionConstraints","ratioConstraints","accept","progress","selected","selectedMultiple","cleared"],[4,"ngFor","ngForOf"],[3,"value"],[3,"seedFile","dimensionConstraints","accept","selected","cleared",4,"ngIf"],[3,"seedFile","dimensionConstraints","accept","selected","cleared"]],template:function(e,t){1&e&&(l.pc(0,"ts-card",0),l.pc(1,"h3",0),l.fd(2,"Demo Controls"),l.oc(),l.pc(3,"div",1),l.pc(4,"div"),l.pc(5,"ts-toggle",2),l.xc("ngModelChange",(function(e){return t.multiple=e})),l.fd(6,"Allow multiple selections"),l.oc(),l.kc(7,"br"),l.pc(8,"ts-toggle",2),l.xc("ngModelChange",(function(e){return t.hideButton=e})),l.fd(9,"Hide button"),l.oc(),l.kc(10,"br"),l.pc(11,"ts-toggle",2),l.xc("ngModelChange",(function(e){return t.disabled=e})),l.fd(12,"Disabled"),l.oc(),l.oc(),l.pc(13,"div",3),l.pc(14,"div"),l.pc(15,"ts-input",4),l.xc("ngModelChange",(function(e){return t.maxKb=e})),l.oc(),l.oc(),l.pc(16,"div",5),l.pc(17,"ts-select",6),l.xc("ngModelChange",(function(e){return t.mimeTypes=e}))("selectionChange",(function(e){return t.mimeTypeChange(e)})),l.dd(18,se,2,2,"ts-option",7),l.oc(),l.oc(),l.oc(),l.oc(),l.oc(),l.pc(19,"ts-card",0),l.pc(20,"ts-file-upload",8),l.xc("selected",(function(e){return t.selected(e)}))("selectedMultiple",(function(e){return t.selectedMultiple(e)}))("cleared",(function(){return t.file=null})),l.oc(),l.dd(21,ce,2,1,"ng-container",9),l.oc()),2&e&&(l.Vb(5),l.Ic("ngModel",t.multiple),l.Vb(3),l.Ic("ngModel",t.hideButton),l.Vb(3),l.Ic("ngModel",t.disabled),l.Vb(4),l.Ic("ngModel",t.maxKb),l.Vb(2),l.Ic("allowMultiple",!0)("ngModel",t.mimeTypes),l.Vb(1),l.Ic("ngForOf",t.mimeTypeOptions),l.Vb(2),l.Ic("isDisabled",t.disabled)("hideButton",t.hideButton)("maximumKilobytesPerFile",t.maxKb)("multiple",t.multiple)("dimensionConstraints",t.constraints)("ratioConstraints",t.ratioConstraints)("accept",t.mimeTypes)("progress",t.progress),l.Vb(1),l.Ic("ngForOf",t.files))},directives:[s.a,M.c,L.f,L.g,ae.a,o.q,o.t,ie.a,L.b,re.a,r.s,ee,ne.c,r.t],encapsulation:2}),ue)}],he=((fe=function e(){_classCallCheck(this,e)}).\u0275mod=l.hc({type:fe}),fe.\u0275inj=l.gc({factory:function(e){return new(e||fe)},imports:[[oe.e.forChild(me)],oe.e]}),fe),be=((de=function e(){_classCallCheck(this,e)}).\u0275mod=l.hc({type:de}),de.\u0275inj=l.gc({factory:function(e){return new(e||de)},imports:[[r.c,he,a.a,o.m,s.b,te,ie.b,ne.e,re.b,M.b,ae.b]]}),de)}}]);