(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"7TCY":function(n,t,e){"use strict";e.d(t,"a",function(){return p}),e.d(t,"b",function(){return d});var l=e("CcnG"),o=(e("Zb6y"),e("NcP4"),e("Ip0R")),i=(e("M2Lx"),e("eDkP")),c=e("Fzqc"),u=e("v9Dh"),r=e("ZYjt"),s=(e("Wf4p"),e("dWZg")),a=e("lLAP"),b=(e("4c35"),e("qAlS")),p=l.tb({encapsulation:2,styles:[".ts-tooltip{display:inline-block}.ts-tooltip :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-tooltip h1,.ts-tooltip h2,.ts-tooltip h3,.ts-tooltip h4,.ts-tooltip h5,.ts-tooltip p{margin:unset}.c-tooltip--underline{border-bottom:.1em dotted;border-color:inherit;cursor:help}"],data:{}});function d(n){return l.Pb(2,[(n()(),l.vb(0,16777216,null,null,4,"span",[["class","c-tooltip qa-tooltip"]],null,[[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(n,t,e){var o=!0;return"longpress"===t&&(o=!1!==l.Fb(n,3).show()&&o),"keydown"===t&&(o=!1!==l.Fb(n,3)._handleKeydown(e)&&o),"touchend"===t&&(o=!1!==l.Fb(n,3)._handleTouchend()&&o),o},null,null)),l.ub(1,278528,null,0,o.k,[l.u,l.v,l.k,l.H],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Ib(2,{"c-tooltip--underline":0}),l.ub(3,147456,null,0,u.d,[i.c,l.k,b.a,l.U,l.C,s.a,a.c,a.h,u.b,[2,c.b],[2,u.a],[2,r.g]],{position:[0,"position"],message:[1,"message"]},null),l.Eb(null,0)],function(n,t){var e=t.component,l=n(t,2,0,e.hasUnderline);n(t,1,0,"c-tooltip qa-tooltip",l),n(t,3,0,e.tooltipPosition,e.tooltipValue)},null)}},M2Lx:function(n,t,e){"use strict";e.d(t,"c",function(){return r}),e.d(t,"b",function(){return s}),e.d(t,"a",function(){return a}),e.d(t,"d",function(){return b});var l=e("n6gG"),o=e("CcnG"),i=e("6blF"),c=e("K9Ia"),u=e("Gi3i"),r=function(){function n(){}return n.prototype.create=function(n){return"undefined"==typeof MutationObserver?null:new MutationObserver(n)},n.ngInjectableDef=Object(o.Y)({factory:function(){return new n},token:n,providedIn:"root"}),n}(),s=function(){function n(n){this._mutationObserverFactory=n,this._observedElements=new Map}return n.prototype.ngOnDestroy=function(){var n=this;this._observedElements.forEach(function(t,e){return n._cleanupObserver(e)})},n.prototype.observe=function(n){var t=this,e=Object(l.d)(n);return new i.a(function(n){var l=t._observeElement(e).subscribe(n);return function(){l.unsubscribe(),t._unobserveElement(e)}})},n.prototype._observeElement=function(n){if(this._observedElements.has(n))this._observedElements.get(n).count++;else{var t=new c.a,e=this._mutationObserverFactory.create(function(n){return t.next(n)});e&&e.observe(n,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(n,{observer:e,stream:t,count:1})}return this._observedElements.get(n).stream},n.prototype._unobserveElement=function(n){this._observedElements.has(n)&&(this._observedElements.get(n).count--,this._observedElements.get(n).count||this._cleanupObserver(n))},n.prototype._cleanupObserver=function(n){if(this._observedElements.has(n)){var t=this._observedElements.get(n),e=t.observer,l=t.stream;e&&e.disconnect(),l.complete(),this._observedElements.delete(n)}},n.ngInjectableDef=Object(o.Y)({factory:function(){return new n(Object(o.cb)(r))},token:n,providedIn:"root"}),n}(),a=function(){function n(n,t,e){this._contentObserver=n,this._elementRef=t,this._ngZone=e,this.event=new o.n,this._disabled=!1,this._currentSubscription=null}return Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(n){this._disabled=Object(l.b)(n),this._disabled?this._unsubscribe():this._subscribe()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"debounce",{get:function(){return this._debounce},set:function(n){this._debounce=Object(l.e)(n),this._subscribe()},enumerable:!0,configurable:!0}),n.prototype.ngAfterContentInit=function(){this._currentSubscription||this.disabled||this._subscribe()},n.prototype.ngOnDestroy=function(){this._unsubscribe()},n.prototype._subscribe=function(){var n=this;this._unsubscribe();var t=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(function(){n._currentSubscription=(n.debounce?t.pipe(Object(u.a)(n.debounce)):t).subscribe(n.event)})},n.prototype._unsubscribe=function(){this._currentSubscription&&this._currentSubscription.unsubscribe()},n}(),b=function(){return function(){}}()},ckx0:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),o=function(){return function(){}}(),i=e("pMnS"),c=e("ehiB"),u=e("1xtn"),r=e("l5YW"),s=e("gIcY"),a=function(){function n(n,t){this.documentService=n,this.windowService=t,this.document=this.documentService.document,this.hasSelected=!1,this.icon="content_copy",this.rippleColor="#1a237e",this.window=this.windowService.nativeWindow,this.disableInitialSelection=!1,this.enableQuickCopy=!1,this.theme="primary"}return Object.defineProperty(n.prototype,"textContent",{get:function(){return this.content&&this.content.nativeElement&&this.content.nativeElement.innerText?this.content.nativeElement.innerText:""},enumerable:!0,configurable:!0}),n.prototype.selectText=function(n,t,e){if(e||t)return!1;var l=this.window.getSelection(),o=this.document.createRange();return o.selectNodeContents(n),l.removeAllRanges(),l.addRange(o),this.hasSelected=!0,!0},n.prototype.resetSelection=function(){this.hasSelected=!1},n.prototype.copyToClipboard=function(n){var t=this.document.createElement("textarea");t.className="targetElement",t.style.position="absolute",t.style.left="101%",t.style.top="0",t.style.width="1px",t.style.height="1px",t.textContent=n,this.document.body.appendChild(t),t.focus(),t.setSelectionRange(0,t.value.length);try{this.document.execCommand("copy"),t.remove()}catch(e){this.window.prompt("Copy to clipboard: Ctrl+C, Enter",n)}},n}(),b=function(){return function(){}}(),p=e("NcP4"),d=e("Ip0R"),f=e("OzfB"),h=e("M2Lx"),m=e("eDkP"),g=e("Fzqc"),y=e("v9Dh"),v=e("ZYjt"),x=e("Wf4p"),_=e("21Lb"),C=e("hUWP"),k=e("3pJQ"),w=e("V9q+"),D=e("dWZg"),S=e("SMsm"),E=e("SG5n"),F=e("lLAP"),j=e("4c35"),O=e("qAlS"),M=e("Zb6y"),P=e("7TCY"),I=e("wFw1"),T=e("Nfn5"),V=e("9Kf0"),z=l.tb({encapsulation:2,styles:[".ts-copy{display:block;max-width:100%}.ts-copy :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-copy h1,.ts-copy h2,.ts-copy h3,.ts-copy h4,.ts-copy h5,.ts-copy p{margin:unset}.ts-copy .c-copy{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;background-color:#f2f0f7;border:1px solid #cecdd1;border-radius:3px;color:#757575;padding:.2em .4em;transition:border-color .2s ease-in-out 50ms;will-change:border-color}.ts-copy .c-copy:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-copy .c-copy:focus{border:1px solid #999;outline:0;transition-delay:0}.ts-copy[theme=accent] .c-copy__icon{background-color:#2f854d}.ts-copy[theme=warn] .c-copy__icon{background-color:#c8604d}.c-copy .c-copy__content{line-height:24px;overflow-x:scroll;white-space:nowrap}.c-copy .c-copy__icon{cursor:pointer;background-color:#00538a;border-radius:0 3px 3px 0;color:#fafafa;margin:calc(-.2em - 1px) calc(-.4em - 1px) calc(-.2em - 1px) 0;padding:.25em .2em .2em .5em;position:relative;transition:background-color .2s ease-in;width:38px;will-change:background-color}.c-copy .mat-icon{vertical-align:bottom}"],data:{}});function N(n){return l.Pb(0,[(n()(),l.vb(0,0,null,null,7,"ts-tooltip",[["class","ts-tooltip"],["tooltipValue","Copy to clipboard"]],null,null,null,P.b,P.a)),l.ub(1,49152,null,0,M.a,[],{tooltipValue:[0,"tooltipValue"]},null),(n()(),l.vb(2,0,null,0,5,"div",[["class","c-copy__icon qa-copy-icon mat-ripple"],["fxFlex","noshrink"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],[[null,"click"]],function(n,t,e){var l=!0,o=n.component;return"click"===t&&(l=!1!==o.copyToClipboard(o.textContent)&&l),l},null,null)),l.ub(3,671744,null,0,_.b,[l.k,f.l,f.e,_.j,f.g],{fxFlex:[0,"fxFlex"]},null),l.ub(4,212992,null,0,x.m,[l.k,l.C,D.a,[2,x.j],[2,I.a]],{color:[0,"color"]},null),(n()(),l.vb(5,0,null,null,2,"ts-icon",[["class","ts-icon"],["matSuffix",""]],[[2,"ts-icon--inline",null],[2,"ts-icon--primary",null],[2,"ts-icon--accent",null],[2,"ts-icon--warn",null],[2,"ts-icon--background",null]],null,null,T.b,T.a)),l.ub(6,49152,null,0,E.a,[S.d,v.c],null,null),(n()(),l.Nb(7,0,[" "," "]))],function(n,t){var e=t.component;n(t,1,0,"Copy to clipboard"),n(t,3,0,"noshrink"),n(t,4,0,e.rippleColor)},function(n,t){var e=t.component;n(t,2,0,l.Fb(t,4).unbounded),n(t,5,0,l.Fb(t,6).inline,"primary"===l.Fb(t,6).theme,"accent"===l.Fb(t,6).theme,"warn"===l.Fb(t,6).theme,l.Fb(t,6).background),n(t,7,0,e.icon)})}function q(n){return l.Pb(2,[l.Lb(402653184,1,{content:0}),(n()(),l.vb(1,0,null,null,6,"div",[["class","c-copy qa-copy"],["fxLayout","row"],["tabindex","1"]],null,[[null,"click"],[null,"blur"]],function(n,t,e){var o=!0,i=n.component;return"click"===t&&(o=!1!==i.selectText(l.Fb(n,3),i.hasSelected,i.disableInitialSelection)&&o),"blur"===t&&(o=!1!==i.resetSelection()&&o),o},null,null)),l.ub(2,671744,null,0,_.d,[l.k,f.l,[2,_.m],f.g],{fxLayout:[0,"fxLayout"]},null),(n()(),l.vb(3,0,[[1,0],["content",1]],null,2,"div",[["class","c-copy__content qa-copy-content"],["fxFlex","auto"]],[[8,"title",0]],null,null,null,null)),l.ub(4,671744,null,0,_.b,[l.k,f.l,f.e,_.j,f.g],{fxFlex:[0,"fxFlex"]},null),l.Eb(null,0),(n()(),l.mb(16777216,null,null,1,null,N)),l.ub(7,16384,null,0,d.m,[l.U,l.Q],{ngIf:[0,"ngIf"]},null)],function(n,t){var e=t.component;n(t,2,0,"row"),n(t,4,0,"auto"),n(t,7,0,e.enableQuickCopy)},function(n,t){n(t,3,0,l.xb(1,"",t.component.textContent,""))})}var L=function(){return function(){this.fakeUrl="https://github.com/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom",this.canCopy=!1}}(),R=l.tb({encapsulation:2,styles:[],data:{}});function Y(n){return l.Pb(0,[(n()(),l.vb(0,0,null,null,14,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,c.b,c.a)),l.ub(1,49152,null,0,u.a,[],null,null),l.ub(2,16384,null,0,r.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.vb(3,0,null,0,3,"h3",[["tsCardTitle",""],["tsVerticalSpacing",""]],[[8,"className",0]],null,null,null,null)),l.ub(4,16384,null,0,u.c,[[3,u.a]],null,null),l.ub(5,16384,null,0,r.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.Nb(-1,null,[" Demo Controls "])),(n()(),l.vb(7,0,null,0,7,"label",[],null,null,null,null,null)),(n()(),l.Nb(-1,null,[" Enable quick copy: "])),(n()(),l.vb(9,0,null,null,5,"input",[["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,t,e){var o=!0,i=n.component;return"change"===t&&(o=!1!==l.Fb(n,10).onChange(e.target.checked)&&o),"blur"===t&&(o=!1!==l.Fb(n,10).onTouched()&&o),"ngModelChange"===t&&(o=!1!==(i.canCopy=e)&&o),o},null,null)),l.ub(10,16384,null,0,s.b,[l.H,l.k],null,null),l.Kb(1024,null,s.r,function(n){return[n]},[s.b]),l.ub(12,671744,null,0,s.w,[[8,null],[8,null],[8,null],[6,s.r]],{model:[0,"model"]},{update:"ngModelChange"}),l.Kb(2048,null,s.s,null,[s.w]),l.ub(14,16384,null,0,s.t,[[4,s.s]],null,null),(n()(),l.vb(15,0,null,null,4,"ts-card",[["class","ts-card"],["style","width: 22rem;"]],null,null,null,c.b,c.a)),l.ub(16,49152,null,0,u.a,[],null,null),(n()(),l.vb(17,0,null,0,2,"ts-copy",[["class","ts-copy"]],null,null,null,q,z)),l.ub(18,49152,null,0,a,[V.a,V.b],{enableQuickCopy:[0,"enableQuickCopy"]},null),(n()(),l.Nb(19,0,["",""]))],function(n,t){var e=t.component;n(t,2,0,""),n(t,5,0,""),n(t,12,0,e.canCopy),n(t,18,0,e.canCopy)},function(n,t){var e=t.component;n(t,3,0,l.Fb(t,4).tsCardTitle),n(t,9,0,l.Fb(t,14).ngClassUntouched,l.Fb(t,14).ngClassTouched,l.Fb(t,14).ngClassPristine,l.Fb(t,14).ngClassDirty,l.Fb(t,14).ngClassValid,l.Fb(t,14).ngClassInvalid,l.Fb(t,14).ngClassPending),n(t,19,0,e.fakeUrl)})}function A(n){return l.Pb(0,[(n()(),l.vb(0,0,null,null,1,"demo-copy",[],null,null,null,Y,R)),l.ub(1,49152,null,0,L,[],null,null)],null,null)}var Z=l.rb("demo-copy",L,A,{},{},[]),W=e("ZYCi"),G=function(){return function(){}}();e.d(t,"CopyModuleNgFactory",function(){return U});var U=l.sb(o,[],function(n){return l.Cb([l.Db(512,l.j,l.hb,[[8,[i.a,Z,p.a]],[3,l.j],l.A]),l.Db(4608,d.o,d.n,[l.w,[2,d.B]]),l.Db(4608,s.H,s.H,[]),l.Db(5120,l.b,function(n,t){return[f.m(n,t)]},[d.d,l.E]),l.Db(4608,f.i,f.h,[f.c,f.f]),l.Db(4608,h.c,h.c,[]),l.Db(4608,m.c,m.c,[m.i,m.e,l.j,m.h,m.f,l.s,l.C,d.d,g.b,[2,d.i]]),l.Db(5120,m.j,m.k,[m.c]),l.Db(5120,y.b,y.c,[m.c]),l.Db(4608,v.f,x.e,[[2,x.i],[2,x.k]]),l.Db(1073742336,d.c,d.c,[]),l.Db(1073742336,W.o,W.o,[[2,W.u],[2,W.l]]),l.Db(1073742336,G,G,[]),l.Db(1073742336,s.E,s.E,[]),l.Db(1073742336,s.o,s.o,[]),l.Db(1073742336,g.a,g.a,[]),l.Db(1073742336,x.k,x.k,[[2,x.f],[2,v.g]]),l.Db(1073742336,D.b,D.b,[]),l.Db(1073742336,x.n,x.n,[]),l.Db(1073742336,S.c,S.c,[]),l.Db(1073742336,E.b,E.b,[]),l.Db(1073742336,u.b,u.b,[]),l.Db(1073742336,f.d,f.d,[]),l.Db(1073742336,_.i,_.i,[]),l.Db(1073742336,C.b,C.b,[]),l.Db(1073742336,k.a,k.a,[]),l.Db(1073742336,w.a,w.a,[[2,f.j],l.E]),l.Db(1073742336,h.d,h.d,[]),l.Db(1073742336,F.a,F.a,[]),l.Db(1073742336,j.h,j.h,[]),l.Db(1073742336,O.b,O.b,[]),l.Db(1073742336,m.g,m.g,[]),l.Db(1073742336,y.e,y.e,[]),l.Db(1073742336,M.b,M.b,[]),l.Db(1073742336,b,b,[]),l.Db(1073742336,r.b,r.b,[]),l.Db(1073742336,o,o,[]),l.Db(1024,W.j,function(){return[[{path:"",component:L}]]},[])])})},l5YW:function(n,t,e){"use strict";e.d(t,"b",function(){return c}),e.d(t,"c",function(){return i}),e.d(t,"a",function(){return o});var l=e("CcnG"),o={none:["0"],small:[Math.floor(12)+"px",Math.floor(8)+"px",Math.floor(4)+"px"],default:["16px"],large:[Math.floor(24)+"px",Math.floor(32)+"px",Math.floor(40)+"px",Math.floor(48)+"px",Math.floor(56)+"px",Math.floor(72)+"px",Math.floor(96)+"px"]},i=function(){function n(n){this.elementRef=n}return Object.defineProperty(n.prototype,"tsVerticalSpacing",{set:function(n){n||(n="default--0");var t=n.split("--")[0],e=parseInt(n.split("--")[1],10),i="none"===n,c=!(o[t]&&!(o[t].length<0));if((c||c||!o[t][e])&&!i&&Object(l.db)())throw Error(n+" is not a valid spacing definition for TsVerticalSpacingDirective. See all valid TsVerticalSpacingTypes: http://bnj.bz/3e1E2l0k0C11");this.elementRef.nativeElement.style.marginBottom=i?"0":o[t][e]},enumerable:!0,configurable:!0}),n}(),c=function(){return function(){}}()}}]);