(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"7TCY":function(n,t,e){"use strict";e.d(t,"a",function(){return p}),e.d(t,"b",function(){return d});var o=e("CcnG"),l=(e("Zb6y"),e("NcP4"),e("Ip0R")),i=(e("M2Lx"),e("eDkP")),c=e("Fzqc"),r=e("v9Dh"),u=e("ZYjt"),s=(e("Wf4p"),e("dWZg")),a=e("lLAP"),b=(e("4c35"),e("qAlS")),p=o.rb({encapsulation:2,styles:[".ts-tooltip{display:inline-block}.ts-tooltip :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-tooltip h1,.ts-tooltip h2,.ts-tooltip h3,.ts-tooltip h4,.ts-tooltip h5,.ts-tooltip p{margin:unset}.c-tooltip--underline{border-bottom:.1em dotted;border-color:inherit;cursor:help}"],data:{}});function d(n){return o.Nb(2,[o.Jb(402653184,1,{matTooltip:0}),(n()(),o.tb(1,16777216,null,null,5,"span",[["class","c-tooltip qa-tooltip"]],null,[[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(n,t,e){var l=!0;return"longpress"===t&&(l=!1!==o.Db(n,5).show()&&l),"keydown"===t&&(l=!1!==o.Db(n,5)._handleKeydown(e)&&l),"touchend"===t&&(l=!1!==o.Db(n,5)._handleTouchend()&&l),l},null,null)),o.Ib(512,null,l.A,l.B,[o.t,o.u,o.k,o.F]),o.sb(3,278528,null,0,l.k,[l.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Gb(4,{"c-tooltip--underline":0}),o.sb(5,212992,[[1,4],["tooltip",4]],0,r.d,[i.c,o.k,b.a,o.R,o.A,s.a,a.c,a.h,r.b,[2,c.b],[2,r.a],[2,u.f]],{position:[0,"position"],message:[1,"message"]},null),o.Cb(null,0)],function(n,t){var e=t.component,o=n(t,4,0,e.hasUnderline);n(t,3,0,"c-tooltip qa-tooltip",o),n(t,5,0,e.tooltipPosition,e.tooltipValue)},null)}},M2Lx:function(n,t,e){"use strict";e.d(t,"c",function(){return u}),e.d(t,"b",function(){return s}),e.d(t,"a",function(){return a}),e.d(t,"d",function(){return b});var o=e("n6gG"),l=e("CcnG"),i=e("6blF"),c=e("K9Ia"),r=e("Gi3i"),u=function(){function n(){}return n.prototype.create=function(n){return"undefined"==typeof MutationObserver?null:new MutationObserver(n)},n.ngInjectableDef=Object(l.Pb)({factory:function(){return new n},token:n,providedIn:"root"}),n}(),s=function(){function n(n){this._mutationObserverFactory=n,this._observedElements=new Map}return n.prototype.ngOnDestroy=function(){var n=this;this._observedElements.forEach(function(t,e){return n._cleanupObserver(e)})},n.prototype.observe=function(n){var t=this,e=Object(o.d)(n);return new i.a(function(n){var o=t._observeElement(e).subscribe(n);return function(){o.unsubscribe(),t._unobserveElement(e)}})},n.prototype._observeElement=function(n){if(this._observedElements.has(n))this._observedElements.get(n).count++;else{var t=new c.a,e=this._mutationObserverFactory.create(function(n){return t.next(n)});e&&e.observe(n,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(n,{observer:e,stream:t,count:1})}return this._observedElements.get(n).stream},n.prototype._unobserveElement=function(n){this._observedElements.has(n)&&(this._observedElements.get(n).count--,this._observedElements.get(n).count||this._cleanupObserver(n))},n.prototype._cleanupObserver=function(n){if(this._observedElements.has(n)){var t=this._observedElements.get(n),e=t.observer,o=t.stream;e&&e.disconnect(),o.complete(),this._observedElements.delete(n)}},n.ngInjectableDef=Object(l.Pb)({factory:function(){return new n(Object(l.Tb)(u))},token:n,providedIn:"root"}),n}(),a=function(){function n(n,t,e){this._contentObserver=n,this._elementRef=t,this._ngZone=e,this.event=new l.n,this._disabled=!1,this._currentSubscription=null}return Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(n){this._disabled=Object(o.b)(n),this._disabled?this._unsubscribe():this._subscribe()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"debounce",{get:function(){return this._debounce},set:function(n){this._debounce=Object(o.e)(n),this._subscribe()},enumerable:!0,configurable:!0}),n.prototype.ngAfterContentInit=function(){this._currentSubscription||this.disabled||this._subscribe()},n.prototype.ngOnDestroy=function(){this._unsubscribe()},n.prototype._subscribe=function(){var n=this;this._unsubscribe();var t=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(function(){n._currentSubscription=(n.debounce?t.pipe(Object(r.a)(n.debounce)):t).subscribe(n.event)})},n.prototype._unsubscribe=function(){this._currentSubscription&&this._currentSubscription.unsubscribe()},n}(),b=function(){return function(){}}()},ckx0:function(n,t,e){"use strict";e.r(t);var o=e("CcnG"),l=function(){return function(){}}(),i=e("pMnS"),c=e("ehiB"),r=e("1xtn"),u=e("l5YW"),s=e("gIcY"),a=(e("mrSG"),function(){function n(n,t){this.documentService=n,this.windowService=t,this.document=this.documentService.document,this.hasSelected=!1,this.icon="content_copy",this.rippleColor="#1a237e",this.window=this.windowService.nativeWindow,this.disableInitialSelection=!1,this.enableQuickCopy=!1,this.theme="primary"}return Object.defineProperty(n.prototype,"textContent",{get:function(){return this.content&&this.content.nativeElement&&this.content.nativeElement.innerText?this.content.nativeElement.innerText:""},enumerable:!0,configurable:!0}),n.prototype.selectText=function(n,t,e){if(e||t)return!1;var o=this.window.getSelection(),l=this.document.createRange();return l.selectNodeContents(n),o.removeAllRanges(),o.addRange(l),this.hasSelected=!0,!0},n.prototype.resetSelection=function(){this.hasSelected=!1},n.prototype.copyToClipboard=function(n){var t=this.document.createElement("textarea");t.className="targetElement",t.style.position="absolute",t.style.left="101%",t.style.top="0",t.style.width="1px",t.style.height="1px",t.textContent=n,this.document.body.appendChild(t),t.focus(),t.setSelectionRange(0,t.value.length);try{this.document.execCommand("copy"),t.remove()}catch(e){this.window.prompt("Copy to clipboard: Ctrl+C, Enter",n)}},n}()),b=function(){return function(){}}(),p=e("NcP4"),d=e("Ip0R"),f=e("OzfB"),h=e("M2Lx"),m=e("eDkP"),g=e("Fzqc"),y=e("v9Dh"),v=e("ZYjt"),x=e("Wf4p"),_=e("21Lb"),k=e("hUWP"),C=e("3pJQ"),w=e("V9q+"),B=e("dWZg"),S=e("SMsm"),D=e("SG5n"),E=e("lLAP"),j=e("4c35"),O=e("qAlS"),M=e("Zb6y"),F=e("7TCY"),I=e("wFw1"),T=e("Nfn5"),P=e("Wf1G"),V=o.rb({encapsulation:2,styles:[".ts-copy{display:block;max-width:100%}.ts-copy :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-copy h1,.ts-copy h2,.ts-copy h3,.ts-copy h4,.ts-copy h5,.ts-copy p{margin:unset}.ts-copy .c-copy{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;background-color:#f2f0f7;border:1px solid #cecdd1;border-radius:3px;color:#757575;padding:.2em .4em;-webkit-transition:border-color .2s ease-in-out 50ms;transition:border-color .2s ease-in-out 50ms;will-change:border-color}.ts-copy .c-copy:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-copy .c-copy:focus{border:1px solid #999;outline:0;-webkit-transition-delay:0;transition-delay:0}.ts-copy[theme=accent] .c-copy__icon{background-color:#2f854d}.ts-copy[theme=warn] .c-copy__icon{background-color:#c8604d}.c-copy .c-copy__content{line-height:24px;overflow-x:scroll;white-space:nowrap}.c-copy .c-copy__icon{cursor:pointer;background-color:#00538a;border-radius:0 3px 3px 0;color:#fafafa;margin:calc(-.2em - 1px) calc(-.4em - 1px) calc(-.2em - 1px) 0;padding:.25em .2em .2em .5em;position:relative;-webkit-transition:background-color .2s ease-in;transition:background-color .2s ease-in;width:38px;will-change:background-color}.c-copy .mat-icon{vertical-align:bottom}"],data:{}});function A(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,7,"ts-tooltip",[["class","ts-tooltip"],["tooltipValue","Copy to clipboard"]],null,null,null,F.b,F.a)),o.sb(1,49152,null,0,M.a,[],{tooltipValue:[0,"tooltipValue"]},null),(n()(),o.tb(2,0,null,0,5,"div",[["class","c-copy__icon qa-copy-icon mat-ripple"],["fxFlex","noshrink"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],[[null,"click"]],function(n,t,e){var o=!0,l=n.component;return"click"===t&&(o=!1!==l.copyToClipboard(l.textContent)&&o),o},null,null)),o.sb(3,671744,null,0,_.b,[o.k,f.i,f.e,_.j,f.f],{fxFlex:[0,"fxFlex"]},null),o.sb(4,212992,null,0,x.m,[o.k,o.A,B.a,[2,x.j],[2,I.a]],{color:[0,"color"]},null),(n()(),o.tb(5,0,null,null,2,"ts-icon",[["class","ts-icon"],["matSuffix",""]],[[2,"ts-icon--inline",null],[2,"ts-icon--primary",null],[2,"ts-icon--accent",null],[2,"ts-icon--warn",null],[2,"ts-icon--background",null]],null,null,T.b,T.a)),o.sb(6,49152,null,0,D.a,[S.d,v.b],null,null),(n()(),o.Lb(7,0,[" "," "]))],function(n,t){var e=t.component;n(t,1,0,"Copy to clipboard"),n(t,3,0,"noshrink"),n(t,4,0,e.rippleColor)},function(n,t){var e=t.component;n(t,2,0,o.Db(t,4).unbounded),n(t,5,0,o.Db(t,6).inline,"primary"===o.Db(t,6).theme,"accent"===o.Db(t,6).theme,"warn"===o.Db(t,6).theme,o.Db(t,6).background),n(t,7,0,e.icon)})}function L(n){return o.Nb(2,[o.Jb(402653184,1,{content:0}),(n()(),o.tb(1,0,null,null,6,"div",[["class","c-copy qa-copy"],["fxLayout","row"],["tabindex","1"]],null,[[null,"click"],[null,"blur"]],function(n,t,e){var l=!0,i=n.component;return"click"===t&&(l=!1!==i.selectText(o.Db(n,3),i.hasSelected,i.disableInitialSelection)&&l),"blur"===t&&(l=!1!==i.resetSelection()&&l),l},null,null)),o.sb(2,671744,null,0,_.d,[o.k,f.i,[2,_.m],f.f],{fxLayout:[0,"fxLayout"]},null),(n()(),o.tb(3,0,[[1,0],["content",1]],null,2,"div",[["class","c-copy__content qa-copy-content"],["fxFlex","auto"]],[[8,"title",0]],null,null,null,null)),o.sb(4,671744,null,0,_.b,[o.k,f.i,f.e,_.j,f.f],{fxFlex:[0,"fxFlex"]},null),o.Cb(null,0),(n()(),o.ib(16777216,null,null,1,null,A)),o.sb(7,16384,null,0,d.m,[o.R,o.N],{ngIf:[0,"ngIf"]},null)],function(n,t){var e=t.component;n(t,2,0,"row"),n(t,4,0,"auto"),n(t,7,0,e.enableQuickCopy)},function(n,t){n(t,3,0,o.vb(1,"",t.component.textContent,""))})}var N=function(){return function(){this.fakeUrl="https://github.com/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom",this.canCopy=!1}}(),z=o.rb({encapsulation:2,styles:[],data:{}});function G(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,14,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,c.b,c.a)),o.sb(1,49152,null,0,r.a,[],null,null),o.sb(2,16384,null,0,u.c,[o.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),o.tb(3,0,null,0,3,"h3",[["tsCardTitle",""],["tsVerticalSpacing",""]],[[8,"className",0]],null,null,null,null)),o.sb(4,16384,null,0,r.c,[[3,r.a]],null,null),o.sb(5,16384,null,0,u.c,[o.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),o.Lb(-1,null,[" Demo Controls "])),(n()(),o.tb(7,0,null,0,7,"label",[],null,null,null,null,null)),(n()(),o.Lb(-1,null,[" Enable quick copy: "])),(n()(),o.tb(9,0,null,null,5,"input",[["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,t,e){var l=!0,i=n.component;return"change"===t&&(l=!1!==o.Db(n,10).onChange(e.target.checked)&&l),"blur"===t&&(l=!1!==o.Db(n,10).onTouched()&&l),"ngModelChange"===t&&(l=!1!==(i.canCopy=e)&&l),l},null,null)),o.sb(10,16384,null,0,s.b,[o.F,o.k],null,null),o.Ib(1024,null,s.r,function(n){return[n]},[s.b]),o.sb(12,671744,null,0,s.w,[[8,null],[8,null],[8,null],[6,s.r]],{model:[0,"model"]},{update:"ngModelChange"}),o.Ib(2048,null,s.s,null,[s.w]),o.sb(14,16384,null,0,s.t,[[4,s.s]],null,null),(n()(),o.tb(15,0,null,null,4,"ts-card",[["class","ts-card"],["style","width: 22rem;"]],null,null,null,c.b,c.a)),o.sb(16,49152,null,0,r.a,[],null,null),(n()(),o.tb(17,0,null,0,2,"ts-copy",[["class","ts-copy"]],null,null,null,L,V)),o.sb(18,49152,null,0,a,[P.a,P.b],{enableQuickCopy:[0,"enableQuickCopy"]},null),(n()(),o.Lb(19,0,["",""]))],function(n,t){var e=t.component;n(t,2,0,""),n(t,5,0,""),n(t,12,0,e.canCopy),n(t,18,0,e.canCopy)},function(n,t){var e=t.component;n(t,3,0,o.Db(t,4).tsCardTitle),n(t,9,0,o.Db(t,14).ngClassUntouched,o.Db(t,14).ngClassTouched,o.Db(t,14).ngClassPristine,o.Db(t,14).ngClassDirty,o.Db(t,14).ngClassValid,o.Db(t,14).ngClassInvalid,o.Db(t,14).ngClassPending),n(t,19,0,e.fakeUrl)})}function R(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,1,"demo-copy",[],null,null,null,G,z)),o.sb(1,49152,null,0,N,[],null,null)],null,null)}var q=o.pb("demo-copy",N,R,{},{},[]),Z=e("ZYCi"),W=function(){return function(){}}();e.d(t,"CopyModuleNgFactory",function(){return Y});var Y=o.qb(l,[],function(n){return o.Ab([o.Bb(512,o.j,o.db,[[8,[i.a,q,p.a]],[3,o.j],o.y]),o.Bb(4608,d.o,d.n,[o.v,[2,d.F]]),o.Bb(4608,s.G,s.G,[]),o.Bb(5120,o.b,function(n,t){return[f.j(n,t)]},[d.d,o.C]),o.Bb(4608,h.c,h.c,[]),o.Bb(4608,m.c,m.c,[m.i,m.e,o.j,m.h,m.f,o.r,o.A,d.d,g.b,[2,d.i]]),o.Bb(5120,m.j,m.k,[m.c]),o.Bb(5120,y.b,y.c,[m.c]),o.Bb(4608,v.e,x.e,[[2,x.i],[2,x.k]]),o.Bb(1073742336,d.c,d.c,[]),o.Bb(1073742336,Z.p,Z.p,[[2,Z.u],[2,Z.l]]),o.Bb(1073742336,W,W,[]),o.Bb(1073742336,s.F,s.F,[]),o.Bb(1073742336,s.o,s.o,[]),o.Bb(1073742336,g.a,g.a,[]),o.Bb(1073742336,x.k,x.k,[[2,x.f],[2,v.f]]),o.Bb(1073742336,B.b,B.b,[]),o.Bb(1073742336,x.n,x.n,[]),o.Bb(1073742336,S.c,S.c,[]),o.Bb(1073742336,D.b,D.b,[]),o.Bb(1073742336,r.b,r.b,[]),o.Bb(1073742336,f.c,f.c,[]),o.Bb(1073742336,_.i,_.i,[]),o.Bb(1073742336,k.b,k.b,[]),o.Bb(1073742336,C.a,C.a,[]),o.Bb(1073742336,w.a,w.a,[[2,f.g],o.C]),o.Bb(1073742336,h.d,h.d,[]),o.Bb(1073742336,E.a,E.a,[]),o.Bb(1073742336,j.h,j.h,[]),o.Bb(1073742336,O.b,O.b,[]),o.Bb(1073742336,m.g,m.g,[]),o.Bb(1073742336,y.e,y.e,[]),o.Bb(1073742336,M.b,M.b,[]),o.Bb(1073742336,b,b,[]),o.Bb(1073742336,u.b,u.b,[]),o.Bb(1073742336,l,l,[]),o.Bb(1024,Z.j,function(){return[[{path:"",component:N}]]},[])])})},l5YW:function(n,t,e){"use strict";e.d(t,"a",function(){return l}),e.d(t,"b",function(){return c}),e.d(t,"c",function(){return i}),e("mrSG");var o=e("CcnG"),l={none:["0"],small:[Math.floor(12)+"px",Math.floor(8)+"px",Math.floor(4)+"px"],default:["16px"],large:[Math.floor(24)+"px",Math.floor(32)+"px",Math.floor(40)+"px",Math.floor(48)+"px",Math.floor(56)+"px",Math.floor(72)+"px",Math.floor(96)+"px"]},i=function(){function n(n){this.elementRef=n}return Object.defineProperty(n.prototype,"tsVerticalSpacing",{set:function(n){n||(n="default--0");var t=n.split("--")[0],e=parseInt(n.split("--")[1],10),i="none"===n,c=!(l[t]&&!(l[t].length<0));if((c||c||!l[t][e])&&!i&&Object(o.Z)())throw Error(n+" is not a valid spacing definition for TsVerticalSpacingDirective. See all valid TsVerticalSpacingTypes: http://bnj.bz/3e1E2l0k0C11");this.elementRef.nativeElement.style.marginBottom=i?"0":l[t][e]},enumerable:!0,configurable:!0}),n}(),c=function(){return function(){}}()}}]);