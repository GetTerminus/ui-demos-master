(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{Blfk:function(e,t,n){"use strict";n.d(t,"b",function(){return b}),n.d(t,"d",function(){return c}),n.d(t,"a",function(){return d}),n.d(t,"c",function(){return f});var r=n("mrSG"),a=n("n6gG"),o=n("CcnG"),l=n("Wf4p"),i=100,s=function(){return function(e){this._elementRef=e}}(),u=Object(l.u)(s,"primary"),d=new o.q("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:i}}}),b=function(e){function t(n,r,a,o,l){var s=e.call(this,n)||this;s._elementRef=n,s._document=a,s._diameter=i,s._value=0,s._fallbackAnimation=!1,s.mode="determinate";var u=t._diameters;return u.has(a.head)||u.set(a.head,new Set([i])),s._styleRoot=function(e,t){if("undefined"!=typeof window){var n=t.head;if(n&&(n.createShadowRoot||n.attachShadow)){var r=e.getRootNode?e.getRootNode():null;if(r instanceof window.ShadowRoot)return r}}return null}(n.nativeElement,a)||a.head,s._fallbackAnimation=r.EDGE||r.TRIDENT,s._noopAnimations="NoopAnimations"===o&&!!l&&!l._forceAnimations,l&&(l.diameter&&(s.diameter=l.diameter),l.strokeWidth&&(s.strokeWidth=l.strokeWidth)),n.nativeElement.classList.add("mat-progress-spinner-indeterminate"+(s._fallbackAnimation?"-fallback":"")+"-animation"),s}return Object(r.__extends)(t,e),Object.defineProperty(t.prototype,"diameter",{get:function(){return this._diameter},set:function(e){if(this._diameter=Object(a.e)(e),!this._fallbackAnimation){var n=t._diameters.get(this._styleRoot);n&&n.has(this._diameter)||this._attachStyleNode()}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"strokeWidth",{get:function(){return this._strokeWidth||this.diameter/10},set:function(e){this._strokeWidth=Object(a.e)(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){return"determinate"===this.mode?this._value:0},set:function(e){this._value=Math.max(0,Math.min(100,Object(a.e)(e)))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_circleRadius",{get:function(){return(this.diameter-10)/2},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_viewBox",{get:function(){var e=2*this._circleRadius+this.strokeWidth;return"0 0 "+e+" "+e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_strokeCircumference",{get:function(){return 2*Math.PI*this._circleRadius},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_strokeDashOffset",{get:function(){return"determinate"===this.mode?this._strokeCircumference*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._strokeCircumference:null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_circleStrokeWidth",{get:function(){return this.strokeWidth/this.diameter*100},enumerable:!0,configurable:!0}),t.prototype._attachStyleNode=function(){var e=this._document.createElement("style"),n=this._styleRoot,r=this._diameter,a=t._diameters,o=a.get(n);e.setAttribute("mat-spinner-animation",r+""),e.textContent=this._getAnimationText(),n.appendChild(e),o||(o=new Set,a.set(n,o)),o.add(r)},t.prototype._getAnimationText=function(){return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*this._strokeCircumference).replace(/END_VALUE/g,""+.2*this._strokeCircumference).replace(/DIAMETER/g,""+this.diameter)},t._diameters=new WeakMap,t}(u),c=function(e){function t(t,n,r,a,o){var l=e.call(this,t,n,r,a,o)||this;return l.mode="indeterminate",l}return Object(r.__extends)(t,e),t}(b),f=function(){return function(){}}()},"b/Av":function(e,t,n){"use strict";n.r(t);var r=n("CcnG"),a=function(){return function(){}}(),o=n("pMnS"),l=n("ehiB"),i=n("1xtn"),s=n("gIcY"),u=(n("mrSG"),function(){return function(e,t,n){this.start=e,this.end=t,this.source=n}}()),d=function(){function e(e){this.formBuilder=e,this.disableDateRange=!1,this.formGroup=this.formBuilder.group({dateRange:this.formBuilder.group({startDate:[null],endDate:[null]})}),this.dateRangeFg=this.formGroup.get("dateRange"),this.allowCustomDates=!0,this.isDisabled=!1,this.cohortDateRangeChanged=new r.n}return e.prototype.cohortDateRangeChange=function(e){this.cohortDateRangeChanged.emit(new u(e.start,e.end,this))},e.prototype.selectionChange=function(e){var t=this.formGroup.get("dateRange.startDate"),n=this.formGroup.get("dateRange.endDate");if(t&&n){var r=e.value.start,a=e.value.end;r&&a?(t.setValue(r),n.setValue(a),this.disableDateRange=!0,this.cohortDateRangeChange(e.value)):this.disableDateRange=!1}},e.prototype.trackByFn=function(e){return e},e}(),b=function(){return function(){}}(),c=n("t68o"),f=n("zbXB"),g=n("Ip0R"),h=n("OzfB"),m=n("eDkP"),p=n("Fzqc"),F=n("o3x0"),y=n("M2Lx"),_=n("jQLj"),D=n("Wf4p"),k=n("dWZg"),v=n("iLpn"),R=n("ZsLu"),w=n("MStg"),E=n("21Lb"),A=n("hUWP"),C=n("3pJQ"),T=n("V9q+"),H=n("ZYjt"),j=n("UodH"),O=n("4c35"),S=n("qAlS"),L=n("lLAP"),V=n("qQLB"),N=n("SMsm"),M=n("SG5n"),B=n("KpYI"),U=n("QBuA"),x=n("/dO6"),q=n("Blfk"),G=n("de3e"),W=n("HL5S"),P=n("rK0N"),I=n("mxRT"),Y=n("YSh2"),X=n("wp7h"),K=n("Bgn0"),J=n("T9oG"),Q=n("Wf1G"),Z=r.tb({encapsulation:2,styles:[".ts-select.ts-cohort-date-range__select{display:inline-block;min-width:200px}.ts-date-range.ts-cohort-date-range__date-range{display:inline-block;margin-right:24px}"],data:{}});function z(e){return r.Rb(0,[(e()(),r.vb(0,0,null,null,4,"ts-option",[["class","ts-option"],["role","option"]],[[2,"ts-selected",null],[2,"ts-option--multiple",null],[2,"ts-option--active",null],[2,"ts-option--disabled",null],[2,"ts-option--template",null],[1,"tabindex",0],[1,"aria-selected",0],[1,"aria-disabled",0],[1,"title",0],[8,"id",0]],[[null,"click"],[null,"keydown"]],function(e,t,n){var a=!0;return"click"===t&&(a=!1!==r.Hb(e,1).selectViaInteraction()&&a),"keydown"===t&&(a=!1!==r.Hb(e,1).handleKeydown(n)&&a),a},X.d,X.b)),r.ub(1,9617408,[[2,4]],2,P.d,[r.k,r.h,r.A,[2,P.b],[2,P.a]],{value:[0,"value"],option:[1,"option"]},null),r.Nb(603979776,4,{optionTemplate:0}),r.Nb(603979776,5,{displayElementRef:0}),(e()(),r.Pb(4,0,[" "," "]))],function(e,t){e(t,1,0,t.context.$implicit.range,t.context.$implicit)},function(e,t){e(t,0,0,r.Hb(t,1).selected,r.Hb(t,1).allowMultiple,r.Hb(t,1).active,r.Hb(t,1).isDisabled,r.Hb(t,1).optionTemplate,r.Hb(t,1).tabIndex,r.Hb(t,1).selected.toString(),!!r.Hb(t,1).isDisabled,r.Hb(t,1).title,r.Hb(t,1).id),e(t,4,0,t.context.$implicit.display)})}function $(e){return r.Rb(2,[(e()(),r.vb(0,0,null,null,12,"div",[],null,null,null,null,null)),(e()(),r.vb(1,0,null,null,1,"ts-date-range",[["class","ts-cohort-date-range__date-range ts-date-range"]],null,[[null,"dateRangeChange"]],function(e,t,n){var r=!0;return"dateRangeChange"===t&&(r=!1!==e.component.cohortDateRangeChange(n)&&r),r},K.b,K.a)),r.ub(2,245760,null,0,U.a,[r.h],{dateFormGroup:[0,"dateFormGroup"],isDisabled:[1,"isDisabled"]},{dateRangeChange:"dateRangeChange"}),(e()(),r.vb(3,0,null,null,9,"ts-select",[["class","ts-cohort-date-range__select ts-select"],["label","Select a date range"]],[[2,"ts-select--required",null],[2,"ts-select--disabled",null],[1,"aria-owns",0],[1,"aria-required",0],[1,"aria-multiselectable",0],[1,"tabindex",0]],[[null,"selectionChange"],[null,"keydown"]],function(e,t,n){var a=!0,o=e.component;return"keydown"===t&&(a=!1!==r.Hb(e,6).handleKeydown(n)&&a),"selectionChange"===t&&(a=!1!==o.selectionChange(n)&&a),a},J.c,J.a)),r.Mb(6144,null,P.b,null,[I.a]),r.Mb(6144,null,V.b,null,[I.a]),r.ub(6,1818624,null,3,I.a,[S.d,r.h,r.A,Q.a,r.k,[8,null]],{isDisabled:[0,"isDisabled"],label:[1,"label"]},{selectionChange:"selectionChange"}),r.Nb(603979776,1,{customTrigger:0}),r.Nb(603979776,2,{options:1}),r.Nb(603979776,3,{optionGroups:1}),r.Mb(256,null,G.a,"noop",[]),(e()(),r.kb(16777216,null,1,1,null,z)),r.ub(12,278528,null,0,g.l,[r.R,r.N,r.t],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null)],function(e,t){var n=t.component;e(t,2,0,n.dateRangeFg,!n.allowCustomDates||n.isDisabled||n.disableDateRange),e(t,6,0,n.isDisabled,"Select a date range"),e(t,12,0,n.cohorts,n.trackByFn)},function(e,t){e(t,3,0,r.Hb(t,6).isRequired,r.Hb(t,6).isDisabled,r.Hb(t,6).panelOpen?r.Hb(t,6).optionIds:null,r.Hb(t,6).isRequired.toString(),r.Hb(t,6).allowMultiple,r.Hb(t,6).tabIndex)})}var ee=n("/Tr7");function te(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object(ee.a)(e);return t.setHours(0,0,0,0),t}var ne=n("/h9T");function re(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");return function(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(ee.a)(e),r=Object(ne.a)(t);return n.setDate(n.getDate()+r),n}(e,-Object(ne.a)(t))}function ae(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");return function(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(ee.a)(e),r=Object(ne.a)(t),a=n.getMonth()+r,o=new Date(0);o.setFullYear(n.getFullYear(),a,1),o.setHours(0,0,0,0);var l=function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object(ee.a)(e),n=t.getFullYear(),r=t.getMonth(),a=new Date(0);return a.setFullYear(n,r+1,0),a.setHours(0,0,0,0),a.getDate()}(o);return n.setMonth(a,Math.min(l,n.getDate())),n}(e,-Object(ne.a)(t))}function oe(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object(ee.a)(e);return t.setDate(1),t.setHours(0,0,0,0),t}function le(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object(ee.a)(e);return t.setHours(23,59,59,999),t}var ie=new Date,se=function(){function e(e){this.formBuilder=e,this.myForm=this.formBuilder.group({dateRange:this.formBuilder.group({startDate:[null,[s.E.required]],endDate:[null,[s.E.required]]})}),this.cohorts=[{display:"Last 90 days",range:{start:te(re(new Date,90)),end:ie}},{display:"Last full month",range:{start:te(ae(oe(ie),1)),end:le(re(oe(ie),1))}},{display:"Custom dates",range:{start:"",end:""}}]}return e.prototype.printRange=function(e){console.log("DEMO: formValue: ",e)},e}(),ue=r.tb({encapsulation:2,styles:[],data:{}});function de(e){return r.Rb(0,[(e()(),r.vb(0,0,null,null,8,"ts-card",[["class","ts-card"]],null,null,null,l.b,l.a)),r.ub(1,49152,null,0,i.a,[],null,null),(e()(),r.vb(2,0,null,0,6,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(e,t,n){var a=!0;return"submit"===t&&(a=!1!==r.Hb(e,4).onSubmit(n)&&a),"reset"===t&&(a=!1!==r.Hb(e,4).onReset()&&a),a},null,null)),r.ub(3,16384,null,0,s.J,[],null,null),r.ub(4,540672,null,0,s.m,[[8,null],[8,null]],{form:[0,"form"]},null),r.Mb(2048,null,s.d,null,[s.m]),r.ub(6,16384,null,0,s.u,[[4,s.d]],null,null),(e()(),r.vb(7,0,null,null,1,"ts-cohort-date-range",[["class","ts-cohort-date-range"]],[[2,"ts-cohort-date-range--disabled",null],[1,"disabled",0],[1,"aria-disabled",0]],[[null,"cohortDateRangeChanged"]],function(e,t,n){var r=!0;return"cohortDateRangeChanged"===t&&(r=!1!==e.component.printRange(n)&&r),r},$,Z)),r.ub(8,49152,null,0,d,[s.h],{allowCustomDates:[0,"allowCustomDates"],cohorts:[1,"cohorts"],isDisabled:[2,"isDisabled"]},{cohortDateRangeChanged:"cohortDateRangeChanged"})],function(e,t){var n=t.component;e(t,4,0,n.myForm),e(t,8,0,!0,n.cohorts,!1)},function(e,t){e(t,2,0,r.Hb(t,6).ngClassUntouched,r.Hb(t,6).ngClassTouched,r.Hb(t,6).ngClassPristine,r.Hb(t,6).ngClassDirty,r.Hb(t,6).ngClassValid,r.Hb(t,6).ngClassInvalid,r.Hb(t,6).ngClassPending),e(t,7,0,r.Hb(t,8).isDisabled,r.Hb(t,8).isDisabled,r.Hb(t,8).isDisabled)})}function be(e){return r.Rb(0,[(e()(),r.vb(0,0,null,null,1,"demo-cohort-date-range",[],null,null,null,de,ue)),r.ub(1,49152,null,0,se,[s.h],null,null)],null,null)}var ce=r.rb("demo-cohort-date-range",se,be,{},{},[]),fe=n("ZYCi"),ge=function(){return function(){}}(),he=n("l5YW");n.d(t,"CohortDateRangeModuleNgFactory",function(){return me});var me=r.sb(a,[],function(e){return r.Eb([r.Fb(512,r.j,r.db,[[8,[o.a,ce,c.a,f.b,f.a]],[3,r.j],r.y]),r.Fb(4608,g.o,g.n,[r.v,[2,g.F]]),r.Fb(4608,s.G,s.G,[]),r.Fb(4608,s.h,s.h,[]),r.Fb(5120,r.b,function(e,t){return[h.j(e,t)]},[g.d,r.C]),r.Fb(4608,m.c,m.c,[m.i,m.e,r.j,m.h,m.f,r.r,r.A,g.d,p.b,[2,g.i]]),r.Fb(5120,m.j,m.k,[m.c]),r.Fb(5120,F.b,F.c,[m.c]),r.Fb(135680,F.d,F.d,[m.c,r.r,[2,g.i],[2,F.a],F.b,[3,F.d],m.e]),r.Fb(4608,y.c,y.c,[]),r.Fb(4608,_.i,_.i,[]),r.Fb(5120,_.a,_.b,[m.c]),r.Fb(4608,D.c,D.o,[[2,D.h],k.a]),r.Fb(4608,v.a,v.a,[]),r.Fb(4608,v.c,v.c,[]),r.Fb(4608,v.d,v.d,[]),r.Fb(4608,v.e,v.e,[]),r.Fb(4608,v.f,v.f,[]),r.Fb(4608,v.g,v.g,[]),r.Fb(4608,R.c,R.c,[v.a]),r.Fb(4608,w.b,w.b,[]),r.Fb(4608,D.d,D.d,[]),r.Fb(1073742336,g.c,g.c,[]),r.Fb(1073742336,fe.p,fe.p,[[2,fe.u],[2,fe.l]]),r.Fb(1073742336,ge,ge,[]),r.Fb(1073742336,s.F,s.F,[]),r.Fb(1073742336,s.o,s.o,[]),r.Fb(1073742336,s.B,s.B,[]),r.Fb(1073742336,p.a,p.a,[]),r.Fb(1073742336,D.k,D.k,[[2,D.f],[2,H.f]]),r.Fb(1073742336,k.b,k.b,[]),r.Fb(1073742336,D.n,D.n,[]),r.Fb(1073742336,N.c,N.c,[]),r.Fb(1073742336,M.b,M.b,[]),r.Fb(1073742336,i.b,i.b,[]),r.Fb(1073742336,h.c,h.c,[]),r.Fb(1073742336,E.i,E.i,[]),r.Fb(1073742336,A.b,A.b,[]),r.Fb(1073742336,C.a,C.a,[]),r.Fb(1073742336,T.a,T.a,[[2,h.g],r.C]),r.Fb(1073742336,j.c,j.c,[]),r.Fb(1073742336,O.g,O.g,[]),r.Fb(1073742336,S.b,S.b,[]),r.Fb(1073742336,m.g,m.g,[]),r.Fb(1073742336,F.g,F.g,[]),r.Fb(1073742336,y.d,y.d,[]),r.Fb(1073742336,L.a,L.a,[]),r.Fb(1073742336,_.j,_.j,[]),r.Fb(1073742336,D.p,D.p,[]),r.Fb(1073742336,v.b,v.b,[]),r.Fb(1073742336,R.b,R.b,[]),r.Fb(1073742336,V.c,V.c,[]),r.Fb(1073742336,B.d,B.d,[]),r.Fb(1073742336,U.b,U.b,[]),r.Fb(1073742336,x.b,x.b,[]),r.Fb(1073742336,q.c,q.c,[]),r.Fb(1073742336,G.f,G.f,[]),r.Fb(1073742336,G.d,G.d,[]),r.Fb(1073742336,W.b,W.b,[]),r.Fb(1073742336,P.f,P.f,[]),r.Fb(1073742336,I.b,I.b,[]),r.Fb(1073742336,b,b,[]),r.Fb(1073742336,he.b,he.b,[]),r.Fb(1073742336,a,a,[]),r.Fb(1024,fe.j,function(){return[[{path:"",component:se}]]},[]),r.Fb(256,D.g,B.a,[]),r.Fb(256,x.a,{separatorKeyCodes:[Y.f]},[])])})}}]);