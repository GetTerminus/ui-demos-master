(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{EOaC:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return g})),a.d(t,"c",(function(){return h}));var i=a("2kYt"),n=a("EM62"),r=a("mFH5"),c=a("ZBpG"),o=a("7sjG"),l=a("UkLp");function s(e,t){if(1&e&&n.Tb(0,4),2&e){const e=n.jc();n.qc("ngTemplateOutlet",e.utilityMenuTemplate)}}function d(e,t){1&e&&(n.Xb(0,"ts-icon",5),n.Mc(1,"lock_outline"),n.Wb())}const b=function(e,t,a,i,n,r){return{"c-card--interaction":e,"c-card--centered":t,"c-card--aspect":a,"c-card--disabled":i,"c-card--right-spacing":n,"c-card--flat":r}},p=["*"];let u=0,m=(()=>{let e=class{constructor(){this.uid=`ts-card-${u++}`,this._border="none",this.centeredContent=!1,this.isDisabled=!1,this.flat=!1,this._id=this.uid,this.supportsInteraction=!1,this._theme="primary"}set aspectRatio(e){const t=parseInt(e.split(":")[0],10),a=parseInt(e.split(":")[1],10);this.aspectRatioPadding=`${(a/t*100).toFixed(2)}%`}set border(e){this._border=e||"none"}get border(){return this._border}set id(e){this._id=e||this.uid}get id(){return this._id}set theme(e){this._theme=e||"primary"}get theme(){return this._theme}get borderClass(){return this.border&&"none"!==this.border?`c-card--border-${this.border}`:""}};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Lb({type:e,selectors:[["ts-card"]],hostAttrs:[1,"ts-card"],inputs:{centeredContent:"centeredContent",isDisabled:"isDisabled",flat:"flat",supportsInteraction:"supportsInteraction",aspectRatio:"aspectRatio",border:"border",id:"id",theme:"theme",utilityMenuTemplate:"utilityMenuTemplate"},exportAs:["tsCard"],ngContentSelectors:p,decls:5,vars:18,consts:[[3,"ngClass"],["mat-ripple","",1,"c-card__inner",3,"matRippleDisabled"],[3,"ngTemplateOutlet",4,"ngIf"],["class","c-card__lock qa-card-lock",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"c-card__lock","qa-card-lock"]],template:function(e,t){1&e&&(n.pc(),n.Xb(0,"div",0),n.Xb(1,"div",1),n.oc(2),n.Wb(),n.Kc(3,s,1,1,"ng-container",2),n.Kc(4,d,2,0,"ts-icon",3),n.Wb()),2&e&&(n.Hb("c-card qa-card ",t.borderClass," c-card--",t.theme,""),n.Jc("padding-top",t.aspectRatioPadding),n.qc("ngClass",n.xc(11,b,t.supportsInteraction,t.centeredContent,t.aspectRatioPadding,t.isDisabled,t.utilityMenuTemplate||t.isDisabled,t.flat)),n.Eb("id",t.id),n.Db(1),n.qc("matRippleDisabled",!t.supportsInteraction||t.isDisabled),n.Db(2),n.qc("ngIf",t.utilityMenuTemplate),n.Db(1),n.qc("ngIf",t.isDisabled&&!t.utilityMenuTemplate))},directives:[i.k,r.o,i.m,i.r,c.a],styles:[".ts-card{display:flex;flex-flow:row nowrap}.ts-card :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-card h1,.ts-card h2,.ts-card h3,.ts-card h4,.ts-card h5,.ts-card p{margin:unset}.ts-card .c-card{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;background-color:#fafafa;position:relative;transition:height .2s;width:100%}.ts-card .c-card:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-card .c-card:not(.c-card--aspect),.ts-card .c-card:not(.c-card--interaction){align-items:stretch;display:flex;flex-direction:row;justify-content:center}.c-card .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;width:100%}.c-card .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card .c-card__inner .c-card__title-accent-border{border-left:2px solid #00538a;padding-left:8px}.c-card .c-card__inner .c-card__title-accent-border[theme=accent]{border-left-color:#2f854d}.c-card .c-card__inner .c-card__title-accent-border[theme=warn]{border-left-color:#c8604d}.c-card--interaction:not(.c-card--disabled) .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow 250ms cubic-bezier(.4,0,.2,1);cursor:pointer}.c-card--interaction:not(.c-card--disabled) .c-card__inner:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.c-card--interaction:not(.c-card--disabled) .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card--centered .c-card__inner{align-items:center;display:flex;justify-content:center}.c-card--aspect .c-card__inner{bottom:0;left:0;position:absolute;right:0;top:0}.c-card--disabled .c-card__inner{opacity:.5}.c-card--disabled .c-menu{opacity:.3;pointer-events:none}.c-card--disabled .c-card__lock{color:#999;position:absolute;right:24px;top:calc(24px - 2px);transform:scale(.7)}.c-card--right-spacing .c-card__inner{padding-right:56px}.c-card--flat>.c-card__inner{border:1px solid #cecdd1;box-shadow:none}.c-card--border-bottom.c-card--primary .c-card__inner{border-bottom:2px solid #00538a}.c-card--border-bottom.c-card--accent .c-card__inner{border-bottom:2px solid #2f854d}.c-card--border-bottom.c-card--warn .c-card__inner{border-bottom:2px solid #c8604d}.c-card--border-left.c-card--primary .c-card__inner{border-left:2px solid #00538a}.c-card--border-left.c-card--accent .c-card__inner{border-left:2px solid #2f854d}.c-card--border-left.c-card--warn .c-card__inner{border-left:2px solid #c8604d}.c-card--border-right.c-card--primary .c-card__inner{border-right:2px solid #00538a}.c-card--border-right.c-card--accent .c-card__inner{border-right:2px solid #2f854d}.c-card--border-right.c-card--warn .c-card__inner{border-right:2px solid #c8604d}.c-card--border-top.c-card--primary .c-card__inner{border-top:2px solid #00538a}.c-card--border-top.c-card--accent .c-card__inner{border-top:2px solid #2f854d}.c-card--border-top.c-card--warn .c-card__inner{border-top:2px solid #c8604d}.c-card__inner .ts-table~.ts-loading-overlay .c-loading-overlay{left:-24px;right:-24px}"],encapsulation:2,changeDetection:0}),e})(),h=(()=>{let e=class{constructor(e){if(this.theme="primary",this.tsCardTitle="c-card__title",!(e instanceof m)&&Object(n.X)())throw new l.c("The 'tsCardTitle' directive must be inside a <ts-card> component.")}set tsTitleAccentBorder(e){Object(o.b)(e)&&(this.tsCardTitle=`${this.tsCardTitle} c-card__title-accent-border`)}};return e.\u0275fac=function(t){return new(t||e)(n.Rb(m,13))},e.\u0275dir=n.Mb({type:e,selectors:[["","tsCardTitle",""]],hostVars:2,hostBindings:function(e,t){2&e&&n.Fb(t.tsCardTitle)},inputs:{theme:"theme",tsTitleAccentBorder:"tsTitleAccentBorder"}}),e})(),g=(()=>{let e=class{};return e.\u0275mod=n.Pb({type:e}),e.\u0275inj=n.Ob({factory:function(t){return new(t||e)},imports:[[i.c,r.p,c.b]]}),e})()},R2bR:function(e,t,a){"use strict";a.r(t),a.d(t,"SelectionListModule",(function(){return C}));var i=a("2kYt"),n=a("40Bj"),r=a("nIj0"),c=a("EOaC"),o=a("6VlH"),l=a("yZt1"),s=a("0Bg5"),d=a("sEIs"),b=a("HRj5"),p=a("C05f"),u=a("YtkY");const m=[{name:"Alabama",abbreviation:"AL"},{name:"Alaska",abbreviation:"AK"},{name:"American Samoa",abbreviation:"AS"},{name:"Arizona",abbreviation:"AZ"},{name:"Arkansas",abbreviation:"AR"},{name:"California",abbreviation:"CA"},{name:"Colorado",abbreviation:"CO"},{name:"Connecticut",abbreviation:"CT"},{name:"Delaware",abbreviation:"DE"},{name:"District Of Columbia",abbreviation:"DC"},{name:"Federated States Of Micronesia",abbreviation:"FM"},{name:"Florida",abbreviation:"FL"},{name:"Georgia",abbreviation:"GA"},{name:"Guam Gu",abbreviation:"GU"},{name:"Hawaii",abbreviation:"HI"},{name:"Idaho",abbreviation:"ID"},{name:"Illinois",abbreviation:"IL"},{name:"Indiana",abbreviation:"IN"},{name:"Iowa",abbreviation:"IA"},{name:"Kansas",abbreviation:"KS"},{name:"Kentucky",abbreviation:"KY"},{name:"Louisiana",abbreviation:"LA"},{name:"Maine",abbreviation:"ME"},{name:"Marshall Islands",abbreviation:"MH"},{name:"Maryland",abbreviation:"MD"},{name:"Massachusetts",abbreviation:"MA"},{name:"Michigan",abbreviation:"MI"},{name:"Minnesota",abbreviation:"MN"},{name:"Mississippi",abbreviation:"MS"},{name:"Missouri",abbreviation:"MO"},{name:"Montana",abbreviation:"MT"},{name:"Nebraska",abbreviation:"NE"},{name:"Nevada",abbreviation:"NV"},{name:"New Hampshire",abbreviation:"NH"},{name:"New Jersey",abbreviation:"NJ"},{name:"New Mexico",abbreviation:"NM"},{name:"New York",abbreviation:"NY"},{name:"North Carolina",abbreviation:"NC"},{name:"North Dakota",abbreviation:"ND"},{name:"Northern Mariana Islands",abbreviation:"MP"},{name:"Ohio",abbreviation:"OH"},{name:"Oklahoma",abbreviation:"OK"},{name:"Oregon",abbreviation:"OR"},{name:"Palau",abbreviation:"PW"},{name:"Pennsylvania",abbreviation:"PA"},{name:"Puerto Rico",abbreviation:"PR"},{name:"Rhode Island",abbreviation:"RI"},{name:"South Carolina",abbreviation:"SC"},{name:"South Dakota",abbreviation:"SD"},{name:"Tennessee",abbreviation:"TN"},{name:"Texas",abbreviation:"TX"},{name:"Utah",abbreviation:"UT"},{name:"Vermont",abbreviation:"VT"},{name:"Virgin Islands",abbreviation:"VI"},{name:"Virginia",abbreviation:"VA"},{name:"Washington",abbreviation:"WA"},{name:"West Virginia",abbreviation:"WV"},{name:"Wisconsin",abbreviation:"WI"},{name:"Wyoming",abbreviation:"WY"}];var h=a("EM62"),g=a("qFEQ");function f(e,t){if(1&e&&(h.Xb(0,"ts-option",10),h.Mc(1),h.Wb()),2&e){const e=t.$implicit;h.qc("value",e)("option",e),h.Db(1),h.Oc(" ",e.name," ")}}function v(e,t){if(1&e&&(h.Xb(0,"ts-option",10),h.Mc(1),h.Wb()),2&e){const e=t.$implicit;h.qc("value",e)("option",e),h.Db(1),h.Oc(" ",e.name," ")}}const x=function(){return{standalone:!0}},M=[{path:"",component:(()=>{class e{constructor(){this.isDisabledMulti=!1,this.isDisabledSingle=!1,this.allowInputMulti=!0,this.allowInputSingle=!1,this.states=m.slice(),this.complexMultipleControl=new r.g(""),this.simpleControl=new r.g(""),this.complexMultipleQuery$=new p.a(""),this.simpleQuery$=new p.a(""),this.complexMultipleAsync=!1,this.simpleAsync=!1}ngOnInit(){this.complexMultipleResults=this.complexMultipleQuery$.pipe(Object(b.j)(this),Object(u.a)(e=>this.queryStates(e))),this.simpleResults=this.simpleQuery$.pipe(Object(b.j)(this),Object(u.a)(e=>this.queryStates(e)))}ngOnDestroy(){}seedSelections(e,t=m.slice(0,8)){e.setValue(t)}queryStates(e){if(e=e.toLowerCase()){const t=e.split("").map(e=>`${e}.*`).join(""),a=new RegExp(t,"ig");return this.states.filter(e=>!!e.name.match(a))}return m.slice(0,10)}queryHasChanged(e,t){console.log(`DEMO: '${t}' query string changed: `,e),"complexMultiple"===t?this.complexMultipleQuery$.next(e):"simple"===t&&this.simpleQuery$.next(e)}formatter(e){return e.name}duplicate(e,t){console.log(`DEMO: '${t}' duplicate selection: `,e)}selectionChange(e,t){console.log(`DEMO: '${t}' selection change: `,e)}wasClosed(e){console.log(`DEMO: '${e}' panel closed`)}wasOpened(e){console.log(`DEMO: '${e}' panel opened`)}backdropClick(e){console.log(`DEMO: '${e}' backdrop clicked`)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h.Lb({type:e,selectors:[["demo-selection-list"]],decls:42,vars:36,consts:[["tsVerticalSpacing","","fxFlex",""],["tsCardTitle","","tsVerticalSpacing",""],["tsVerticalSpacing",""],["tabindex","-1",3,"click"],["type","checkbox",3,"ngModel","ngModelOptions","ngModelChange"],["novalidate","","fxLayout","column","fxLayoutGap","1rem"],["label","Select states","hint","Begin typing to search..","tsVerticalSpacing","",3,"isDisabled","formControl","allowMultiple","allowUserInput","reopenAfterSelection","showProgress","displayFormatter","duplicateSelection","selectionChange","queryChange","closed","opened","backdropClicked"],[3,"value","option",4,"ngFor","ngForOf"],["tsCardTitle","","tsVerticalSpacing","small--1"],["label","Select states","hint","Begin typing to search..","tsVerticalSpacing","",3,"allowUserInput","isDisabled","formControl","showProgress","displayFormatter","duplicateSelection","selectionChange","queryChange","closed","opened","backdropClicked"],[3,"value","option"]],template:function(e,t){1&e&&(h.Xb(0,"ts-card",0),h.Xb(1,"h3",1),h.Mc(2," SelectionList w/complex object (allowMultiple) "),h.Wb(),h.Xb(3,"div",2),h.Xb(4,"button",3),h.fc("click",(function(){return t.seedSelections(t.complexMultipleControl)})),h.Mc(5," Seed selections "),h.Wb(),h.Sb(6,"br"),h.Xb(7,"label"),h.Mc(8," Disable "),h.Xb(9,"input",4),h.fc("ngModelChange",(function(e){return t.isDisabledMulti=e})),h.Wb(),h.Wb(),h.Sb(10,"br"),h.Xb(11,"label"),h.Mc(12," Allow user input "),h.Xb(13,"input",4),h.fc("ngModelChange",(function(e){return t.allowInputMulti=e})),h.Wb(),h.Wb(),h.Wb(),h.Xb(14,"form",5),h.Xb(15,"ts-selection-list",6),h.fc("duplicateSelection",(function(e){return t.duplicate(e,"complexMultiple")}))("selectionChange",(function(e){return t.selectionChange(e,"complexMultiple")}))("queryChange",(function(e){return t.queryHasChanged(e,"complexMultiple")}))("closed",(function(){return t.wasClosed("complexMultiple")}))("opened",(function(){return t.wasOpened("complexMultiple")}))("backdropClicked",(function(){return t.backdropClick("complexMultiple")})),h.Kc(16,f,2,3,"ts-option",7),h.kc(17,"async"),h.Wb(),h.Xb(18,"div"),h.Mc(19),h.kc(20,"json"),h.Wb(),h.Wb(),h.Wb(),h.Xb(21,"ts-card",0),h.Xb(22,"form",5),h.Xb(23,"h3",8),h.Mc(24," SelectionList (single) "),h.Wb(),h.Xb(25,"div",2),h.Xb(26,"button",3),h.fc("click",(function(){return t.seedSelections(t.simpleControl,[t.states[9]])})),h.Mc(27," Seed selection "),h.Wb(),h.Sb(28,"br"),h.Xb(29,"label"),h.Mc(30," Disable "),h.Xb(31,"input",4),h.fc("ngModelChange",(function(e){return t.isDisabledSingle=e})),h.Wb(),h.Wb(),h.Sb(32,"br"),h.Xb(33,"label"),h.Mc(34," Allow user input "),h.Xb(35,"input",4),h.fc("ngModelChange",(function(e){return t.allowInputSingle=e})),h.Wb(),h.Wb(),h.Wb(),h.Xb(36,"ts-selection-list",9),h.fc("duplicateSelection",(function(e){return t.duplicate(e,"simple")}))("selectionChange",(function(e){return t.selectionChange(e,"simple")}))("queryChange",(function(e){return t.queryHasChanged(e,"simple")}))("closed",(function(){return t.wasClosed("simple")}))("opened",(function(){return t.wasOpened("simple")}))("backdropClicked",(function(){return t.backdropClick("simple")})),h.Kc(37,v,2,3,"ts-option",7),h.kc(38,"async"),h.Wb(),h.Xb(39,"div"),h.Mc(40),h.kc(41,"json"),h.Wb(),h.Wb(),h.Wb()),2&e&&(h.Db(9),h.qc("ngModel",t.isDisabledMulti)("ngModelOptions",h.uc(32,x)),h.Db(4),h.qc("ngModel",t.allowInputMulti)("ngModelOptions",h.uc(33,x)),h.Db(2),h.qc("isDisabled",t.isDisabledMulti)("formControl",t.complexMultipleControl)("allowMultiple",!0)("allowUserInput",t.allowInputMulti)("reopenAfterSelection",!0)("showProgress",t.complexMultipleAsync)("displayFormatter",t.formatter),h.Db(1),h.qc("ngForOf",h.lc(17,24,t.complexMultipleResults)),h.Db(3),h.Oc(" FormControl value: ",h.lc(20,26,t.complexMultipleControl.value)," "),h.Db(12),h.qc("ngModel",t.isDisabledSingle)("ngModelOptions",h.uc(34,x)),h.Db(4),h.qc("ngModel",t.allowInputSingle)("ngModelOptions",h.uc(35,x)),h.Db(1),h.qc("allowUserInput",t.allowInputSingle)("isDisabled",t.isDisabledSingle)("formControl",t.simpleControl)("showProgress",t.simpleAsync)("displayFormatter",t.formatter),h.Db(1),h.qc("ngForOf",h.lc(38,28,t.simpleResults)),h.Db(3),h.Oc(" FormControl value: ",h.lc(41,30,t.simpleControl.value)," "))},directives:[c.a,s.c,g.b,c.c,r.a,r.q,r.t,r.D,r.r,r.s,g.d,g.e,l.a,r.h,i.l,o.c],pipes:[i.b,i.g],encapsulation:2}),e})()}];let _=(()=>{class e{}return e.\u0275mod=h.Pb({type:e}),e.\u0275inj=h.Ob({factory:function(t){return new(t||e)},imports:[[d.f.forChild(M)],d.f]}),e})(),C=(()=>{class e{}return e.\u0275mod=h.Pb({type:e}),e.\u0275inj=h.Ob({factory:function(t){return new(t||e)},imports:[[i.c,r.m,n.a,r.y,_,c.b,o.e,l.b,s.b]]}),e})()}}]);