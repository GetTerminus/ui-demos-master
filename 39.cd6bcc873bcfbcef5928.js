(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{M2Lx:function(n,e,t){"use strict";t.d(e,"c",function(){return o}),t.d(e,"b",function(){return c}),t.d(e,"a",function(){return b}),t.d(e,"d",function(){return a});var l=t("n6gG"),u=t("CcnG"),r=t("6blF"),i=t("K9Ia"),s=t("Gi3i"),o=function(){function n(){}return n.prototype.create=function(n){return"undefined"==typeof MutationObserver?null:new MutationObserver(n)},n.ngInjectableDef=Object(u.Pb)({factory:function(){return new n},token:n,providedIn:"root"}),n}(),c=function(){function n(n){this._mutationObserverFactory=n,this._observedElements=new Map}return n.prototype.ngOnDestroy=function(){var n=this;this._observedElements.forEach(function(e,t){return n._cleanupObserver(t)})},n.prototype.observe=function(n){var e=this,t=Object(l.d)(n);return new r.a(function(n){var l=e._observeElement(t).subscribe(n);return function(){l.unsubscribe(),e._unobserveElement(t)}})},n.prototype._observeElement=function(n){if(this._observedElements.has(n))this._observedElements.get(n).count++;else{var e=new i.a,t=this._mutationObserverFactory.create(function(n){return e.next(n)});t&&t.observe(n,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(n,{observer:t,stream:e,count:1})}return this._observedElements.get(n).stream},n.prototype._unobserveElement=function(n){this._observedElements.has(n)&&(this._observedElements.get(n).count--,this._observedElements.get(n).count||this._cleanupObserver(n))},n.prototype._cleanupObserver=function(n){if(this._observedElements.has(n)){var e=this._observedElements.get(n),t=e.observer,l=e.stream;t&&t.disconnect(),l.complete(),this._observedElements.delete(n)}},n.ngInjectableDef=Object(u.Pb)({factory:function(){return new n(Object(u.Tb)(o))},token:n,providedIn:"root"}),n}(),b=function(){function n(n,e,t){this._contentObserver=n,this._elementRef=e,this._ngZone=t,this.event=new u.n,this._disabled=!1,this._currentSubscription=null}return Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(n){this._disabled=Object(l.b)(n),this._disabled?this._unsubscribe():this._subscribe()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"debounce",{get:function(){return this._debounce},set:function(n){this._debounce=Object(l.e)(n),this._subscribe()},enumerable:!0,configurable:!0}),n.prototype.ngAfterContentInit=function(){this._currentSubscription||this.disabled||this._subscribe()},n.prototype.ngOnDestroy=function(){this._unsubscribe()},n.prototype._subscribe=function(){var n=this;this._unsubscribe();var e=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(function(){n._currentSubscription=(n.debounce?e.pipe(Object(s.a)(n.debounce)):e).subscribe(n.event)})},n.prototype._unsubscribe=function(){this._currentSubscription&&this._currentSubscription.unsubscribe()},n}(),a=function(){return function(){}}()},"O/ay":function(n,e,t){"use strict";t.r(e);var l=t("CcnG"),u=function(){return function(){}}(),r=t("pMnS"),i=t("ehiB"),s=t("1xtn"),o=t("l5YW"),c=t("gIcY"),b=t("egPT"),a=t("EzXM"),g=function(){function n(n){this.formBuilder=n,this.isChecked=!1,this.isDisabled=!1,this.name="myToggle",this.required=!0,this.myForm=this.formBuilder.group({myToggle:[null,[]]})}return n.prototype.isChanged=function(n){console.log("in changed: ",n)},n.prototype.log=function(n){console.log("DEMO: From value: ",n)},n}(),d=l.rb({encapsulation:2,styles:[],data:{}});function f(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,21,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,i.b,i.a)),l.sb(1,49152,null,0,s.a,[],null,null),l.sb(2,16384,null,0,o.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.tb(3,0,null,0,2,"h3",[["tsVerticalSpacing",""]],null,null,null,null,null)),l.sb(4,16384,null,0,o.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.Lb(-1,null,["Form"])),(n()(),l.tb(6,0,null,0,15,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,e,t){var u=!0;return"submit"===e&&(u=!1!==l.Db(n,8).onSubmit(t)&&u),"reset"===e&&(u=!1!==l.Db(n,8).onReset()&&u),u},null,null)),l.sb(7,16384,null,0,c.J,[],null,null),l.sb(8,540672,null,0,c.m,[[8,null],[8,null]],{form:[0,"form"]},null),l.Ib(2048,null,c.d,null,[c.m]),l.sb(10,16384,null,0,c.u,[[4,c.d]],null,null),(n()(),l.tb(11,0,null,null,7,"ts-toggle",[["class","ts-toggle"],["tsVerticalSpacing",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"]],function(n,e,t){var l=!0;return"change"===e&&(l=!1!==n.component.isChanged(t)&&l),l},b.b,b.a)),l.sb(12,49152,null,0,a.a,[],{formControl:[0,"formControl"],isDisabled:[1,"isDisabled"],isRequired:[2,"isRequired"],name:[3,"name"]},{change:"change"}),l.Ib(1024,null,c.r,function(n){return[n]},[a.a]),l.sb(14,540672,null,0,c.j,[[8,null],[8,null],[6,c.r],[2,c.H]],{form:[0,"form"]},null),l.Ib(2048,null,c.s,null,[c.j]),l.sb(16,16384,null,0,c.t,[[4,c.s]],null,null),l.sb(17,16384,null,0,o.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.Lb(-1,0,["Toggle Me!"])),(n()(),l.tb(19,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),l.tb(20,0,null,null,1,"button",[],null,[[null,"click"]],function(n,e,t){var l=!0,u=n.component;return"click"===e&&(l=!1!==u.log(u.myForm.value)&&l),l},null,null)),(n()(),l.Lb(-1,null,["Log form value"])),(n()(),l.tb(22,0,null,null,9,"ts-card",[["class","ts-card"]],null,null,null,i.b,i.a)),l.sb(23,49152,null,0,s.a,[],null,null),(n()(),l.tb(24,0,null,0,2,"h3",[["tsVerticalSpacing",""]],null,null,null,null,null)),l.sb(25,16384,null,0,o.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.Lb(-1,null,["Seed via @Input"])),(n()(),l.tb(27,0,null,0,4,"ts-toggle",[["class","ts-toggle"],["name","two"],["tsVerticalSpacing",""]],null,[[null,"change"]],function(n,e,t){var l=!0;return"change"===e&&(l=!1!==n.component.isChanged(t)&&l),l},b.b,b.a)),l.Ib(5120,null,c.r,function(n){return[n]},[a.a]),l.sb(29,16384,null,0,o.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),l.sb(30,49152,null,0,a.a,[],{isChecked:[0,"isChecked"],isDisabled:[1,"isDisabled"],name:[2,"name"]},{change:"change"}),(n()(),l.Lb(-1,0,["Toggle Me!"]))],function(n,e){var t=e.component;n(e,2,0,""),n(e,4,0,""),n(e,8,0,t.myForm),n(e,12,0,t.myForm.get("myToggle"),t.isDisabled,t.required,t.name),n(e,14,0,t.myForm.get("myToggle")),n(e,17,0,""),n(e,25,0,""),n(e,29,0,""),n(e,30,0,!0,!0,"two")},function(n,e){n(e,6,0,l.Db(e,10).ngClassUntouched,l.Db(e,10).ngClassTouched,l.Db(e,10).ngClassPristine,l.Db(e,10).ngClassDirty,l.Db(e,10).ngClassValid,l.Db(e,10).ngClassInvalid,l.Db(e,10).ngClassPending),n(e,11,0,l.Db(e,16).ngClassUntouched,l.Db(e,16).ngClassTouched,l.Db(e,16).ngClassPristine,l.Db(e,16).ngClassDirty,l.Db(e,16).ngClassValid,l.Db(e,16).ngClassInvalid,l.Db(e,16).ngClassPending)})}function p(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"demo-toggle",[],null,null,null,f,d)),l.sb(1,49152,null,0,g,[c.h],null,null)],null,null)}var h=l.pb("demo-toggle",g,p,{},{},[]),m=t("Ip0R"),v=t("M2Lx"),_=t("ZYjt"),y=t("Wf4p"),B=t("ZYCi"),D=function(){return function(){}}(),S=t("Fzqc"),C=t("dWZg"),O=t("SMsm"),E=t("SG5n"),M=t("kWGw");t.d(e,"ToggleModuleNgFactory",function(){return j});var j=l.qb(u,[],function(n){return l.Ab([l.Bb(512,l.j,l.db,[[8,[r.a,h]],[3,l.j],l.y]),l.Bb(4608,m.o,m.n,[l.v,[2,m.F]]),l.Bb(4608,c.h,c.h,[]),l.Bb(4608,c.G,c.G,[]),l.Bb(4608,v.c,v.c,[]),l.Bb(4608,_.e,y.e,[[2,y.i],[2,y.k]]),l.Bb(1073742336,m.c,m.c,[]),l.Bb(1073742336,c.F,c.F,[]),l.Bb(1073742336,c.B,c.B,[]),l.Bb(1073742336,B.p,B.p,[[2,B.u],[2,B.l]]),l.Bb(1073742336,D,D,[]),l.Bb(1073742336,S.a,S.a,[]),l.Bb(1073742336,y.k,y.k,[[2,y.f],[2,_.f]]),l.Bb(1073742336,C.b,C.b,[]),l.Bb(1073742336,y.n,y.n,[]),l.Bb(1073742336,O.c,O.c,[]),l.Bb(1073742336,E.b,E.b,[]),l.Bb(1073742336,s.b,s.b,[]),l.Bb(1073742336,o.b,o.b,[]),l.Bb(1073742336,c.o,c.o,[]),l.Bb(1073742336,v.d,v.d,[]),l.Bb(1073742336,M.d,M.d,[]),l.Bb(1073742336,a.b,a.b,[]),l.Bb(1073742336,u,u,[]),l.Bb(1024,B.j,function(){return[[{path:"",component:g}]]},[])])})},l5YW:function(n,e,t){"use strict";t.d(e,"a",function(){return u}),t.d(e,"b",function(){return i}),t.d(e,"c",function(){return r}),t("mrSG");var l=t("CcnG"),u={none:["0"],small:[Math.floor(12)+"px",Math.floor(8)+"px",Math.floor(4)+"px"],default:["16px"],large:[Math.floor(24)+"px",Math.floor(32)+"px",Math.floor(40)+"px",Math.floor(48)+"px",Math.floor(56)+"px",Math.floor(72)+"px",Math.floor(96)+"px"]},r=function(){function n(n){this.elementRef=n}return Object.defineProperty(n.prototype,"tsVerticalSpacing",{set:function(n){n||(n="default--0");var e=n.split("--")[0],t=parseInt(n.split("--")[1],10),r="none"===n,i=!(u[e]&&!(u[e].length<0));if((i||i||!u[e][t])&&!r&&Object(l.Z)())throw Error(n+" is not a valid spacing definition for TsVerticalSpacingDirective. See all valid TsVerticalSpacingTypes: http://bnj.bz/3e1E2l0k0C11");this.elementRef.nativeElement.style.marginBottom=r?"0":u[e][t]},enumerable:!0,configurable:!0}),n}(),i=function(){return function(){}}()}}]);