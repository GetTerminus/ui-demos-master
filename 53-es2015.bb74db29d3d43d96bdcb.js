(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"Q92/":function(e,t,i){"use strict";i.r(t),i.d(t,"FileUploadModule",(function(){return ce}));var r=i("2kYt"),s=i("40Bj"),a=i("nIj0"),o=i("4mc+"),n=i("EM62"),l=i("mFH5"),c=i("5XID"),d=i("5lCh"),m=i("bwdy"),p=i("KTx3"),u=i("xVbo");const h=["primaryValueBar"];class f{constructor(e){this._elementRef=e}}const g=Object(l.w)(f,"primary"),b=new n.B("mat-progress-bar-location",{providedIn:"root",factory:function(){const e=Object(n.nb)(r.e),t=e?e.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}});let v=0,y=(()=>{class e extends g{constructor(e,t,i,r){super(e),this._elementRef=e,this._ngZone=t,this._animationMode=i,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new n.u,this._animationEndSubscription=m.a.EMPTY,this.mode="determinate",this.progressbarId=`mat-progress-bar-${v++}`;const s=r?r.getPathname().split("#")[0]:"";this._rectangleFillValue=`url('${s}#${this.progressbarId}')`,this._isNoopAnimation="NoopAnimations"===i}get value(){return this._value}set value(e){this._value=j(Object(c.e)(e)||0)}get bufferValue(){return this._bufferValue}set bufferValue(e){this._bufferValue=j(e||0)}_primaryTransform(){return{transform:`scaleX(${this.value/100})`}}_bufferTransform(){return"buffer"===this.mode?{transform:`scaleX(${this.bufferValue/100})`}:null}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{const e=this._primaryValueBar.nativeElement;this._animationEndSubscription=Object(p.a)(e,"transitionend").pipe(Object(u.a)(t=>t.target===e)).subscribe(()=>{"determinate"!==this.mode&&"buffer"!==this.mode||this._ngZone.run(()=>this.animationEnd.next({value:this.value}))})})}ngOnDestroy(){this._animationEndSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(n.jc(n.r),n.jc(n.M),n.jc(d.a,8),n.jc(b,8))},e.\u0275cmp=n.dc({type:e,selectors:[["mat-progress-bar"]],viewQuery:function(e,t){var i;1&e&&n.kd(h,!0),2&e&&n.Qc(i=n.yc())&&(t._primaryValueBar=i.first)},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"mat-progress-bar"],hostVars:4,hostBindings:function(e,t){2&e&&(n.Wb("aria-valuenow","indeterminate"===t.mode||"query"===t.mode?null:t.value)("mode",t.mode),n.ac("_mat-animation-noopable",t._isNoopAnimation))},inputs:{color:"color",mode:"mode",value:"value",bufferValue:"bufferValue"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[n.Sb],decls:9,vars:4,consts:[["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],["primaryValueBar",""],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(e,t){1&e&&(n.Ac(),n.pc(0,"svg",0),n.pc(1,"defs"),n.pc(2,"pattern",1),n.kc(3,"circle",2),n.oc(),n.oc(),n.kc(4,"rect",3),n.oc(),n.zc(),n.kc(5,"div",4),n.kc(6,"div",5,6),n.kc(8,"div",7)),2&e&&(n.Vb(2),n.Ic("id",t.progressbarId),n.Vb(2),n.Wb("fill",t._rectangleFillValue),n.Vb(1),n.Ic("ngStyle",t._bufferTransform()),n.Vb(1),n.Ic("ngStyle",t._primaryTransform()))},directives:[r.w],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n'],encapsulation:2,changeDetection:0}),e})();function j(e,t=0,i=100){return Math.max(t,Math.min(i,e))}let O=(()=>{class e{}return e.\u0275mod=n.hc({type:e}),e.\u0275inj=n.gc({factory:function(t){return new(t||e)},imports:[[r.c,l.j],l.j]}),e})();var x=i("AW5y"),w=i("wK4c"),_=i("0Hrt"),F=i("NDKv"),I=i("Hn30"),C=i("BRos"),k=i("hOI7"),V=i("7sjG"),D=i("h9lW"),S=i("RmZO"),M=i("HRj5"),T=i("/Gcv"),R=i("5uKI"),E=i("C05f"),L=i("qFEQ");let A=(()=>{class e{constructor(e){this.windowService=e,this.hasProtection=!1}add(){this.hasProtection||(this.windowService.nativeWindow.addEventListener("dragover",this.prevent,!1),this.windowService.nativeWindow.addEventListener("drop",this.prevent,!1),this.hasProtection=!0)}remove(){this.hasProtection&&(this.windowService.nativeWindow.removeEventListener("dragover",this.prevent,!1),this.windowService.nativeWindow.removeEventListener("drop",this.prevent,!1),this.hasProtection=!1)}prevent(e){e.preventDefault()}}return e.\u0275fac=function(t){return new(t||e)(Object(n.tc)(x.b))},e.\u0275prov=Object(n.fc)({token:e,factory:e.\u0275fac}),e})();const P=["text/csv","image/jpeg","image/jpg","image/png","image/gif","video/mp4","video/x-flv","video/webm","video/quicktime","video/mpeg"];class B{constructor(e,t){this.width=e,this.height=t}}const $=["text/csv","video/mp4"];class q{constructor(e,t,i,r,s){this.file=e,this.imageDimensionConstraints=t,this.typeConstraint=i,this.maxSize=r,this.ratioConstraint=s,this.validations={fileType:!1,fileSize:!1,imageDimensions:!1,imageRatio:!1},this.fileReader=new FileReader,this.fileLoaded$=new E.a(this.fileReference),this.mimeType=this.file.type,this.size=Math.ceil(this.file.size/1024),this.name=this.file.name,this.determineImageDimensions(()=>{this.typeConstraint&&this.typeConstraint.indexOf(this.file.type)>=0&&(this.validations.fileType=!0),this.size<=this.maxSize&&(this.validations.fileSize=!0),this.fileLoaded$.next(this)})}get width(){return this.dimensions?this.dimensions.width:0}get height(){return this.dimensions?this.dimensions.height:0}get isCSV(){return this.mimeType.includes("csv")}get isImage(){return this.mimeType.includes("image")}get isVideo(){return this.mimeType.includes("video")}get fileContents(){return Object(S.i)(this.fileReader.result)?this.fileReader.result:(Object(n.ob)()&&console.warn(`${this.fileReader.result} is not returning a string.`),"")}get isValid(){return this.validations.fileType&&this.validations.fileSize&&this.validations.imageDimensions&&this.validations.imageRatio}determineImageDimensions(e){let t;var i;i=this.mimeType,P.slice().filter(e=>!$.includes(e)).indexOf(i)>=0?(t=new Image,this.fileReader.onload=e=>{t&&(Object(S.i)(this.fileReader.result)?t.src=this.fileReader.result:Object(n.ob)()&&console.warn(`${t} is not returning a string.`))},t.onload=i=>{t&&(this.dimensions=new B(t.naturalWidth,t.naturalHeight)),this.validations.imageDimensions=this.validateImageDimensions(this.imageDimensionConstraints),this.validations.imageRatio=this.validateImageRatio(this.ratioConstraint),e&&e()}):(e&&e(),this.validations.imageDimensions=!0,this.validations.imageRatio=!0),this.fileReader.readAsDataURL(this.file)}validateImageDimensions(e){if(!e||e.length<1)return!0;const t=this.width,i=this.height;for(const r of e){const e=t>=r.width.min&&t<=r.width.max;if(i>=r.height.min&&i<=r.height.max&&e)return!0}return!1}validateImageRatio(e){if(!e)return!0;const t=e.map(e=>e.widthRatio/e.heightRatio);for(const i of t)if(this.isSame(i,this.width/this.height))return!0;return!1}isSame(e,t){return Math.abs((e-t)/e)<.001}}const z=["preview"];function K(e,t){if(1&e&&(Object(n.pc)(0,"div",18),Object(n.pc)(1,"ts-icon",19),Object(n.fd)(2," cloud_upload "),Object(n.oc)(),Object(n.fd)(3),Object(n.oc)()),2&e){const e=Object(n.Bc)();Object(n.Vb)(1),Object(n.Ic)("inline",!0),Object(n.Vb)(2),Object(n.id)("Drop file",e.multiple?"s":""," here ",e.hideButton?"or click to select":""," ")}}function X(e,t){if(1&e&&Object(n.kc)(0,"img",20,21),2&e){const e=Object(n.Bc)();Object(n.Wb)("src",null==e.file?null:e.file.fileContents,n.Xc)}}function N(e,t){1&e&&Object(n.kc)(0,"ts-icon",22),2&e&&Object(n.Ic)("svgIcon","csv")}function U(e,t){if(1&e&&Object(n.kc)(0,"mat-progress-bar",23),2&e){const e=Object(n.Bc)();Object(n.Ic)("value",e.progress)("color",e.theme)}}function H(e,t){if(1&e&&Object(n.kc)(0,"ts-validation-messages",24),2&e){const e=Object(n.Bc)();Object(n.Ic)("control",e.formControl)}}function W(e,t){if(1&e&&(Object(n.pc)(0,"div",25),Object(n.fd)(1),Object(n.oc)()),2&e){const e=t.$implicit;Object(n.Vb)(1),Object(n.hd)(" ",e," ")}}let G=0,Q=(()=>{class e extends R.b{constructor(e,t,i,r){super(),this.documentService=e,this.elementRef=t,this.changeDetectorRef=i,this.dropProtectionService=r,this.uid=`ts-file-upload-${G++}`,this.dragInProgress=!1,this.layoutGap=T.a.small[0],this._acceptedTypes=P.slice(),this._formControl=new a.g,this.hideButton=!1,this._id=this.uid,this.isDisabled=!1,this._maximumKilobytesPerFile=10240,this.multiple=!1,this._progress=0,this.theme="primary",this.cleared=new n.u,this.enter=new n.u,this.exit=new n.u,this.selected=new n.u,this.selectedMultiple=new n.u,this.updateInnerValue=e=>{this.value=e,this.changeDetectorRef.destroyed||this.changeDetectorRef.detectChanges()},this.virtualFileInput=this.createFileInput()}get buttonMessage(){return this.dragInProgress?`Drop File${this.multiple?"s":""}`:`Select File${this.multiple?"s":""}`}get hints(){const e=[],t=this.acceptedTypes.slice().map(e=>e.split("/")[1]).join(", ");return(this.acceptedTypes.indexOf("image/png")>=0||this.acceptedTypes.indexOf("image/jpeg")>=0||this.acceptedTypes.indexOf("image/jpg")>=0)&&this.supportedImageDimensions.length>0&&e.push(`Must be a valid dimension: ${this.supportedImageDimensions}`),e.push(`Must be ${t}`),e.push(`Must be under ${this.maximumKilobytesPerFile.toLocaleString()}kb`),this.ratioConstraints&&e.push(`Must have valid image ratio of ${this.ratioConstraints.join(" or ")} `),e}get supportedImageDimensions(){let e="";if(this.dimensionConstraints){const t=this.dimensionConstraints.slice();for(const i of t)if(e.length>0&&(e+=", "),i.height.min===i.height.max&&i.width.min===i.width.max)e+=`${i.width.min.toLocaleString()}x${i.height.min.toLocaleString()}`;else{const t=i.height.min===i.height.max?i.height.min.toLocaleString():`${i.height.min.toLocaleString()}-${i.height.max.toLocaleString()}`;e+=`${i.width.min===i.width.max?i.width.min.toLocaleString():`${i.width.min.toLocaleString()}-${i.width.max.toLocaleString()}`}x${t}`}}return e}set accept(e){this._acceptedTypes=e?Object(V.a)(e):P.slice()}get acceptedTypes(){return this._acceptedTypes}set dimensionConstraints(e){this._sizeConstraints=e}get dimensionConstraints(){return this._sizeConstraints}set formControl(e){this._formControl=e||new a.g}get formControl(){return this._formControl}set id(e){this._id=e||this.uid}get id(){return this._id}set maximumKilobytesPerFile(e){this._maximumKilobytesPerFile=e||10240}get maximumKilobytesPerFile(){return this._maximumKilobytesPerFile}set progress(e){this._progress=Object(V.d)(e)}get progress(){return this._progress}set ratioConstraints(e){if(e)for(const t of e){const e=t.split(":");if(2!==e.length||!Object(S.h)(e[0])||!Object(S.h)(e[1]))throw new Error('TsFileUploadComponent: An array of image ratios should be formatted as ["1:2", "3:4"]')}this._ratioConstraints=this.parseRatioStringToObject(e)}get ratioConstraints(){return this.parseRatioToString(this._ratioConstraints)}set seedFile(e){this._seedFile=e,e&&new q(e,this.dimensionConstraints,this.acceptedTypes,this.maximumKilobytesPerFile,this._ratioConstraints).fileLoaded$.pipe(Object(u.a)(e=>void 0!==e),Object(M.j)(this)).subscribe(e=>{this.formControl.setValue(e.file),this.selected.emit(e),this.setUpNewFile(e)})}get seedFile(){return this._seedFile}handleDragover(e){this.isDisabled||(this.preventAndStopEventPropagation(e),this.enter.emit(!0),this.dragInProgress=!0)}handleDragleave(e){this.isDisabled||(this.preventAndStopEventPropagation(e),this.exit.emit(!0),this.dragInProgress=!1)}handleDrop(e){this.isDisabled||(this.preventAndStopEventPropagation(e),this.dragInProgress=!1,this.collectFilesFromEvent(e))}handleClick(){this.isDisabled||this.promptForFiles()}ngOnInit(){this.dropProtectionService.add(),this.formControl&&this.formControl.valueChanges.pipe(Object(M.j)(this)).subscribe(()=>{this.changeDetectorRef.destroyed||this.changeDetectorRef.detectChanges()})}ngAfterContentInit(){this.virtualFileInput.addEventListener("change",this.onVirtualInputElementChange.bind(this)),this.updateVirtualFileInputAttrs(this.virtualFileInput)}ngOnChanges(e){(Object(M.f)(e,"multiple")||Object(M.f)(e,"accept"))&&(this.updateVirtualFileInputAttrs(this.virtualFileInput),this.registerOnChangeFn(this.updateInnerValue))}ngOnDestroy(){this.virtualFileInput&&this.virtualFileInput.removeEventListener("change",this.onVirtualInputElementChange.bind(this)),this.dropProtectionService.remove()}handleKeydown(e){e.code===D.a.ENTER.code&&(this.promptForFiles(),this.elementRef.nativeElement.blur())}promptForFiles(){this.virtualFileInput.click()}removeFile(e){e&&this.preventAndStopEventPropagation(e),this.file=void 0,this.clearValidationMessages(),this.cleared.emit(!0)}createFileInput(){const e=this.documentService.document.createElement("input");return e.setAttribute("type","file"),e.style.display="none",e}collectFilesFromEvent(e){let t;if(Object(S.d)(e)&&(t=e.dataTransfer&&e.dataTransfer.files?e.dataTransfer.files:void 0),e.target&&Object(S.f)(e.target)&&(t=e.target.files?e.target.files:void 0),(!t||t.length<1)&&Object(n.ob)())throw Error("TsFileUpload: Event contained no file.");const i=t?Array.from(t):[];if(i.length>1)return void this.selectedMultiple.emit(i);const r=i[0]?i[0]:void 0;r&&new q(r,this.dimensionConstraints,this.acceptedTypes,this.maximumKilobytesPerFile,this._ratioConstraints).fileLoaded$.pipe(Object(u.a)(e=>!!e),Object(M.j)(this)).subscribe(e=>{this.formControl.setValue(e.file),this.selected.emit(e),this.setUpNewFile(e)})}registerOnChangeFn(e){this.formControl&&this.formControl.registerOnChange(e)}setUpNewFile(e){e&&(this.file=e,this.setValidationMessages(e),this.changeDetectorRef.markForCheck())}onVirtualInputElementChange(e){this.isDisabled||(this.collectFilesFromEvent(e),this.virtualFileInput.value="")}preventAndStopEventPropagation(e){e.preventDefault(),e.stopPropagation()}updateVirtualFileInputAttrs(e){const t=e.hasAttribute("multiple");this.multiple&&!t&&this.virtualFileInput.setAttribute("multiple","true"),!this.multiple&&t&&this.virtualFileInput.removeAttribute("multiple"),this.acceptedTypes&&this.virtualFileInput.setAttribute("accept",this.acceptedTypes.toString())}setValidationMessages(e){if(!e)return;const t={},i={fileSize:{valid:!1,actual:e.size,max:this.maximumKilobytesPerFile},fileType:{valid:!1,actual:e.mimeType,accepted:this.acceptedTypes.join(", ")},imageDimensions:{valid:!1,actual:e.dimensions},imageRatio:{valid:!1,actual:e.width/e.height}},r=Object.keys(e.validations);for(let s=0;s<r.length;s+=1){const a=r[s];e.validations[a]||(t[a]=i[a])}0===Object.keys(t).length?this.formControl.setErrors(null):this.formControl.setErrors(t),this.formControl.markAsTouched(),this.changeDetectorRef.markForCheck()}clearValidationMessages(){this.formControl.setErrors(null),this.changeDetectorRef.markForCheck()}parseRatioStringToObject(e){if(!e)return;const t=[];return e.map(e=>t.push({widthRatio:Number(e.split(":")[0]),heightRatio:Number(e.split(":")[1])})),t}parseRatioToString(e){if(!e)return;const t=[];return e.map(e=>t.push(`${e.widthRatio.toString()}:${e.heightRatio.toString()}`)),t}trackByFn(e){return e}}return e.\u0275fac=function(t){return new(t||e)(Object(n.jc)(x.a),Object(n.jc)(n.r),Object(n.jc)(n.j),Object(n.jc)(A))},e.\u0275cmp=Object(n.dc)({type:e,selectors:[["ts-file-upload"]],viewQuery:function(e,t){var i;1&e&&Object(n.kd)(z,!0),2&e&&Object(n.Qc)(i=Object(n.yc)())&&(t.preview=i.first)},hostAttrs:[1,"ts-file-upload"],hostBindings:function(e,t){1&e&&Object(n.xc)("keydown",(function(e){return t.handleKeydown(e)}))("dragover",(function(e){return t.handleDragover(e)}))("dragleave",(function(e){return t.handleDragleave(e)}))("drop",(function(e){return t.handleDrop(e)}))("click",(function(){return t.handleClick()}))},inputs:{accept:"accept",dimensionConstraints:"dimensionConstraints",formControl:"formControl",hideButton:"hideButton",id:"id",isDisabled:"isDisabled",maximumKilobytesPerFile:"maximumKilobytesPerFile",multiple:"multiple",progress:"progress",ratioConstraints:"ratioConstraints",seedFile:"seedFile",theme:"theme"},outputs:{cleared:"cleared",enter:"enter",exit:"exit",selected:"selected",selectedMultiple:"selectedMultiple"},exportAs:["tsFileUpload"],features:[Object(n.Ub)([Object(R.a)(e)]),n.Sb,n.Tb],decls:21,vars:27,consts:[["tabindex","1","fxLayout","column",1,"c-file-upload","qa-file-upload",3,"id"],["fxLayout","row","fxLayoutAlign","start center",3,"fxLayoutGap"],["class","c-file-upload__empty qa-file-upload-empty","fxLayout","row","fxLayoutAlign","start center","fxFlex","grow",4,"ngIf"],["fxFlex","","fxLayout","column","fxLayoutAlign","center start",1,"c-file-upload__file"],["fxFill","","fxLayout","row","fxLayoutAlign","start center"],["fxFlex","noshrink",1,"c-file-upload__preview","qa-file-upload-preview",3,"hidden"],["alt","",4,"ngIf"],[3,"svgIcon",4,"ngIf"],["fxFlex","grow","fxLayout","row","fxLayoutAlign","start center",1,"c-file-upload__filename","qa-file-upload-name",3,"title"],[1,"c-file-upload__filename-inner"],["tooltipValue","Remove file"],["theme","warn","actionName","Reset",1,"c-file-upload__remove","qa-file-upload-remove",3,"click"],[1,"c-file-upload__prompt","qa-file-upload-prompt",3,"theme","isDisabled","clicked"],["class","c-file-upload__progress qa-file-upload-progress","mode","determinate",3,"value","color",4,"ngIf"],["fxLayout","column","fxLayout.gt-xs","row"],["fxFlex","noshrink","class","qa-file-upload-validation-messages",3,"control",4,"ngIf"],["fxFlex","grow",1,"c-file-upload__hints","qa-file-upload-hints"],["class","c-file-upload__hint",4,"ngFor","ngForOf","ngForTrackBy"],["fxLayout","row","fxLayoutAlign","start center","fxFlex","grow",1,"c-file-upload__empty","qa-file-upload-empty"],[3,"inline"],["alt",""],["preview",""],[3,"svgIcon"],["mode","determinate",1,"c-file-upload__progress","qa-file-upload-progress",3,"value","color"],["fxFlex","noshrink",1,"qa-file-upload-validation-messages",3,"control"],[1,"c-file-upload__hint"]],template:function(e,t){1&e&&(Object(n.pc)(0,"div",0),Object(n.pc)(1,"div",1),Object(n.dd)(2,K,4,3,"div",2),Object(n.pc)(3,"div",3),Object(n.pc)(4,"div",4),Object(n.pc)(5,"div",5),Object(n.dd)(6,X,2,1,"img",6),Object(n.dd)(7,N,1,1,"ts-icon",7),Object(n.oc)(),Object(n.pc)(8,"div",8),Object(n.pc)(9,"div",9),Object(n.fd)(10),Object(n.oc)(),Object(n.oc)(),Object(n.pc)(11,"ts-tooltip",10),Object(n.pc)(12,"ts-icon-button",11),Object(n.xc)("click",(function(e){return t.removeFile(e)})),Object(n.fd)(13,"clear"),Object(n.oc)(),Object(n.oc)(),Object(n.oc)(),Object(n.oc)(),Object(n.pc)(14,"ts-button",12),Object(n.xc)("clicked",(function(){return t.promptForFiles()})),Object(n.fd)(15),Object(n.oc)(),Object(n.oc)(),Object(n.dd)(16,U,1,2,"mat-progress-bar",13),Object(n.oc)(),Object(n.pc)(17,"div",14),Object(n.dd)(18,H,1,1,"ts-validation-messages",15),Object(n.pc)(19,"div",16),Object(n.dd)(20,W,2,1,"div",17),Object(n.oc)(),Object(n.oc)()),2&e&&(Object(n.ac)("c-file-upload--disabled",t.isDisabled)("c-file-upload--drag",t.dragInProgress)("c-file-upload--file",t.file)("c-file-upload--error",t.file&&!t.file.isValid),Object(n.Ic)("id",t.id),Object(n.Vb)(1),Object(n.Ic)("fxLayoutGap",t.layoutGap),Object(n.Vb)(1),Object(n.Ic)("ngIf",!t.file),Object(n.Vb)(1),Object(n.ac)("c-file-upload__file--hidden",!t.file),Object(n.Vb)(2),Object(n.Ic)("hidden",!t.file),Object(n.Vb)(1),Object(n.Ic)("ngIf",null==t.file?null:t.file.isImage),Object(n.Vb)(1),Object(n.Ic)("ngIf",null==t.file?null:t.file.isCSV),Object(n.Vb)(1),Object(n.Jc)("title",null==t.file?null:t.file.name),Object(n.Vb)(2),Object(n.hd)(" ",null==t.file?null:t.file.name," "),Object(n.Vb)(4),Object(n.ac)("c-file-upload__prompt--hidden",t.hideButton),Object(n.Ic)("theme",t.theme)("isDisabled",t.dragInProgress||t.isDisabled),Object(n.Vb)(1),Object(n.hd)(" ",t.buttonMessage," "),Object(n.Vb)(1),Object(n.Ic)("ngIf",t.file&&t.progress>0),Object(n.Vb)(2),Object(n.Ic)("ngIf",t.formControl&&t.formControl.errors),Object(n.Vb)(2),Object(n.Ic)("ngForOf",t.hints)("ngForTrackBy",t.trackByFn))},directives:[L.f,L.e,L.g,r.t,L.b,L.h,C.a,F.a,w.a,r.s,_.a,y,k.a],styles:[".ts-file-upload{display:block;position:relative}.ts-file-upload .c-file-upload:not(.c-file-upload--disabled){cursor:pointer}.ts-file-upload+.ts-file-upload{margin-top:24px}.c-file-upload{border:1px dashed #cecdd1;border-radius:3px;padding:12px;transition:background-color .2s ease-out,border-color .2s ease-out;will-change:background-color,border-color}.c-file-upload:focus:not(.c-file-upload--disabled),.c-file-upload:hover:not(.c-file-upload--disabled){border-color:#1777b6}.c-file-upload--drag{background-color:#d3eaf9;border-color:#1777b6}.c-file-upload--drag .c-file-upload__remove{opacity:0}.c-file-upload--file{border-color:#1777b6}.c-file-upload--error{border-color:#c8604d}.c-file-upload.c-file-upload--disabled .c-file-upload__empty{color:#cecdd1}.c-file-upload .c-file-upload__file{font-size:75%;font-weight:400;letter-spacing:.01em;line-height:1.5;font-family:Lucida Console,Monaco,DejaVu Sans Mono,monospace;color:#757575;overflow:auto;position:relative}.c-file-upload .c-file-upload__file--hidden{position:absolute;visibility:hidden}.c-file-upload .c-file-upload__empty{color:#757575}.c-file-upload .c-file-upload__empty .ts-icon{margin-right:4px}.c-file-upload .c-file-upload__preview{border:1px solid #cecdd1;border-radius:3px;height:2.375rem;margin-right:12px;max-width:4.75rem;overflow:hidden;padding:4px;position:relative}.c-file-upload .c-file-upload__preview img{display:block;max-height:100%;max-width:100%}.c-file-upload .c-file-upload__filename{overflow:hidden}.c-file-upload .c-file-upload__filename-inner{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.c-file-upload .c-file-upload__remove{transition:color .2s,opacity .1s;will-change:color,opacity}.c-file-upload .c-file-upload__progress{display:block;margin-top:12px}.c-file-upload .c-file-upload__progress .mat-progress-bar-buffer{background-color:#d3eaf9}.c-file-upload .c-file-upload__prompt{pointer-events:none}.c-file-upload .c-file-upload__prompt--hidden{position:absolute;visibility:hidden}.c-file-upload__hints{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;color:#999;font-size:75%;font-weight:400;letter-spacing:.01em;line-height:1.5;padding:.3em .4em .2em;text-align:right}"],encapsulation:2,changeDetection:0}),e})(),Z=(()=>{class e{}return e.\u0275mod=Object(n.hc)({type:e}),e.\u0275inj=Object(n.gc)({factory:function(t){return new(t||e)},providers:[I.b,x.a,A],imports:[[r.c,s.a,a.m,O,w.b,F.b,_.b,C.b,k.b]]}),e})();var Y=i("OEuM"),J=i("OXHR"),ee=i("QmDH"),te=i("dKA/"),ie=i("sEIs");function re(e,t){if(1&e&&(n.pc(0,"ts-option",10),n.fd(1),n.oc()),2&e){const e=t.$implicit;n.Ic("value",e),n.Vb(1),n.gd(e)}}function se(e,t){if(1&e){const e=n.qc();n.pc(0,"ts-file-upload",12),n.xc("selected",(function(t){return n.Vc(e),n.Bc(2).selected(t)}))("cleared",(function(){n.Vc(e);const t=n.Bc().$implicit;return n.Bc().clearFile(t.id)})),n.oc()}if(2&e){const e=n.Bc().$implicit,t=n.Bc();n.Ic("seedFile",e.file)("dimensionConstraints",t.constraints)("accept",t.mimeTypes)}}function ae(e,t){if(1&e&&(n.nc(0),n.dd(1,se,1,3,"ts-file-upload",11),n.mc()),2&e){const e=t.$implicit,i=n.Bc();n.Vb(1),n.Ic("ngIf",i.fileExists(e.id))}}const oe=[{height:{min:50,max:100},width:{min:50,max:100}},{height:{min:72,max:72},width:{min:72,max:72}},{height:{min:400,max:500},width:{min:700,max:800}},{height:{min:300,max:600},width:{min:100,max:300}},{height:{min:600,max:600},width:{min:160,max:160}},{height:{min:2500,max:2500},width:{min:3e4,max:3e4}}],ne=[{path:"",component:(()=>{class e{constructor(){this.mimeTypes=["image/png","image/jpg","image/jpeg"],this.files=[],this.constraints=oe.slice(),this.progress=0,this.multiple=!0,this.hideButton=!1,this.mimeTypeOptions=["image/png","image/jpg","image/jpeg","text/csv","video/mp4","video/x-flv","video/webm","video/quicktime","video/mpeg"],this.ratioConstraints=["1:2","1.9:1","5:1"],this.disabled=!1}selected(e){console.log("DEMO: selected: ",e),this.file=e,this.startProgress()}mimeTypeChange(e){e.value.length<1&&(this.mimeTypes=["image/png","image/jpg","image/jpeg"])}startProgress(){this.progress=0;const e=setInterval(()=>{this.progress<100?this.progress++:clearInterval(e)},20)}selectedMultiple(e){console.log("DEMO: selected multiple: ",e);let t=-1;this.files=e.map(e=>(t+=1,{id:t,file:e}))}clearFile(e){!this.files||this.files.length<1||(this.files=this.files.filter(t=>t.id!==e))}fileExists(e){return!(!this.files||this.files.length<1||!this.files.find(t=>t.id===e))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.dc({type:e,selectors:[["demo-file-upload"]],decls:22,vars:16,consts:[["tsVerticalSpacing",""],["fxLayout","column","fxLayoutGap","24px"],[3,"ngModel","ngModelChange"],["fxLayout","row","fxLayoutGap","24px"],["label","Max Size (kb)","type","number",3,"ngModel","ngModelChange"],["fxFlex","noshrink"],["label","Allowed MIME types",3,"allowMultiple","ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"isDisabled","hideButton","maximumKilobytesPerFile","multiple","dimensionConstraints","ratioConstraints","accept","progress","selected","selectedMultiple","cleared"],[4,"ngFor","ngForOf"],[3,"value"],[3,"seedFile","dimensionConstraints","accept","selected","cleared",4,"ngIf"],[3,"seedFile","dimensionConstraints","accept","selected","cleared"]],template:function(e,t){1&e&&(n.pc(0,"ts-card",0),n.pc(1,"h3",0),n.fd(2,"Demo Controls"),n.oc(),n.pc(3,"div",1),n.pc(4,"div"),n.pc(5,"ts-toggle",2),n.xc("ngModelChange",(function(e){return t.multiple=e})),n.fd(6,"Allow multiple selections"),n.oc(),n.kc(7,"br"),n.pc(8,"ts-toggle",2),n.xc("ngModelChange",(function(e){return t.hideButton=e})),n.fd(9,"Hide button"),n.oc(),n.kc(10,"br"),n.pc(11,"ts-toggle",2),n.xc("ngModelChange",(function(e){return t.disabled=e})),n.fd(12,"Disabled"),n.oc(),n.oc(),n.pc(13,"div",3),n.pc(14,"div"),n.pc(15,"ts-input",4),n.xc("ngModelChange",(function(e){return t.maxKb=e})),n.oc(),n.oc(),n.pc(16,"div",5),n.pc(17,"ts-select",6),n.xc("ngModelChange",(function(e){return t.mimeTypes=e}))("selectionChange",(function(e){return t.mimeTypeChange(e)})),n.dd(18,re,2,2,"ts-option",7),n.oc(),n.oc(),n.oc(),n.oc(),n.oc(),n.pc(19,"ts-card",0),n.pc(20,"ts-file-upload",8),n.xc("selected",(function(e){return t.selected(e)}))("selectedMultiple",(function(e){return t.selectedMultiple(e)}))("cleared",(function(){return t.file=null})),n.oc(),n.dd(21,ae,2,1,"ng-container",9),n.oc()),2&e&&(n.Vb(5),n.Ic("ngModel",t.multiple),n.Vb(3),n.Ic("ngModel",t.hideButton),n.Vb(3),n.Ic("ngModel",t.disabled),n.Vb(4),n.Ic("ngModel",t.maxKb),n.Vb(2),n.Ic("allowMultiple",!0)("ngModel",t.mimeTypes),n.Vb(1),n.Ic("ngForOf",t.mimeTypeOptions),n.Vb(2),n.Ic("isDisabled",t.disabled)("hideButton",t.hideButton)("maximumKilobytesPerFile",t.maxKb)("multiple",t.multiple)("dimensionConstraints",t.constraints)("ratioConstraints",t.ratioConstraints)("accept",t.mimeTypes)("progress",t.progress),n.Vb(1),n.Ic("ngForOf",t.files))},directives:[o.a,T.c,L.f,L.g,te.a,a.q,a.t,Y.a,L.b,ee.a,r.s,Q,J.c,r.t],encapsulation:2}),e})()}];let le=(()=>{class e{}return e.\u0275mod=n.hc({type:e}),e.\u0275inj=n.gc({factory:function(t){return new(t||e)},imports:[[ie.e.forChild(ne)],ie.e]}),e})(),ce=(()=>{class e{}return e.\u0275mod=n.hc({type:e}),e.\u0275inj=n.gc({factory:function(t){return new(t||e)},imports:[[r.c,le,s.a,a.m,o.b,Z,Y.b,J.e,ee.b,T.b,te.b]]}),e})()}}]);