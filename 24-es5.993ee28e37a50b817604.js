function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var c=0;c<e.length;c++){var r=e[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,c){return e&&_defineProperties(t.prototype,e),c&&_defineProperties(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{EOaC:function(t,e,c){"use strict";c.d(e,"a",(function(){return f})),c.d(e,"b",(function(){return m})),c.d(e,"c",(function(){return h}));var r=c("2kYt"),a=c("EM62"),n=c("mFH5"),i=c("ZBpG"),o=c("7sjG"),d=c("UkLp");function s(t,e){if(1&t&&a.Tb(0,4),2&t){var c=a.jc();a.qc("ngTemplateOutlet",c.utilityMenuTemplate)}}function l(t,e){1&t&&(a.Xb(0,"ts-icon",5),a.Mc(1,"lock_outline"),a.Wb())}var b=function(t,e,c,r,a,n){return{"c-card--interaction":t,"c-card--centered":e,"c-card--aspect":c,"c-card--disabled":r,"c-card--right-spacing":a,"c-card--flat":n}},p=["*"],u=0,f=function(){var t=function(){function t(){_classCallCheck(this,t),this.uid="ts-card-".concat(u++),this._border="none",this.centeredContent=!1,this.isDisabled=!1,this.flat=!1,this._id=this.uid,this.supportsInteraction=!1,this._theme="primary"}return _createClass(t,[{key:"aspectRatio",set:function(t){var e=parseInt(t.split(":")[0],10),c=parseInt(t.split(":")[1],10);this.aspectRatioPadding="".concat((c/e*100).toFixed(2),"%")}},{key:"border",set:function(t){this._border=t||"none"},get:function(){return this._border}},{key:"id",set:function(t){this._id=t||this.uid},get:function(){return this._id}},{key:"theme",set:function(t){this._theme=t||"primary"},get:function(){return this._theme}},{key:"borderClass",get:function(){return this.border&&"none"!==this.border?"c-card--border-".concat(this.border):""}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Lb({type:t,selectors:[["ts-card"]],hostAttrs:[1,"ts-card"],inputs:{centeredContent:"centeredContent",isDisabled:"isDisabled",flat:"flat",supportsInteraction:"supportsInteraction",aspectRatio:"aspectRatio",border:"border",id:"id",theme:"theme",utilityMenuTemplate:"utilityMenuTemplate"},exportAs:["tsCard"],ngContentSelectors:p,decls:5,vars:18,consts:[[3,"ngClass"],["mat-ripple","",1,"c-card__inner",3,"matRippleDisabled"],[3,"ngTemplateOutlet",4,"ngIf"],["class","c-card__lock qa-card-lock",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"c-card__lock","qa-card-lock"]],template:function(t,e){1&t&&(a.pc(),a.Xb(0,"div",0),a.Xb(1,"div",1),a.oc(2),a.Wb(),a.Kc(3,s,1,1,"ng-container",2),a.Kc(4,l,2,0,"ts-icon",3),a.Wb()),2&t&&(a.Hb("c-card qa-card ",e.borderClass," c-card--",e.theme,""),a.Jc("padding-top",e.aspectRatioPadding),a.qc("ngClass",a.xc(11,b,e.supportsInteraction,e.centeredContent,e.aspectRatioPadding,e.isDisabled,e.utilityMenuTemplate||e.isDisabled,e.flat)),a.Eb("id",e.id),a.Db(1),a.qc("matRippleDisabled",!e.supportsInteraction||e.isDisabled),a.Db(2),a.qc("ngIf",e.utilityMenuTemplate),a.Db(1),a.qc("ngIf",e.isDisabled&&!e.utilityMenuTemplate))},directives:[r.k,n.o,r.m,r.r,i.a],styles:[".ts-card{display:flex;flex-flow:row nowrap}.ts-card :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-card h1,.ts-card h2,.ts-card h3,.ts-card h4,.ts-card h5,.ts-card p{margin:unset}.ts-card .c-card{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;background-color:#fafafa;position:relative;transition:height .2s;width:100%}.ts-card .c-card:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-card .c-card:not(.c-card--aspect),.ts-card .c-card:not(.c-card--interaction){align-items:stretch;display:flex;flex-direction:row;justify-content:center}.c-card .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;width:100%}.c-card .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card .c-card__inner .c-card__title-accent-border{border-left:2px solid #00538a;padding-left:8px}.c-card .c-card__inner .c-card__title-accent-border[theme=accent]{border-left-color:#2f854d}.c-card .c-card__inner .c-card__title-accent-border[theme=warn]{border-left-color:#c8604d}.c-card--interaction:not(.c-card--disabled) .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow 250ms cubic-bezier(.4,0,.2,1);cursor:pointer}.c-card--interaction:not(.c-card--disabled) .c-card__inner:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.c-card--interaction:not(.c-card--disabled) .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card--centered .c-card__inner{align-items:center;display:flex;justify-content:center}.c-card--aspect .c-card__inner{bottom:0;left:0;position:absolute;right:0;top:0}.c-card--disabled .c-card__inner{opacity:.5}.c-card--disabled .c-menu{opacity:.3;pointer-events:none}.c-card--disabled .c-card__lock{color:#999;position:absolute;right:24px;top:calc(24px - 2px);transform:scale(.7)}.c-card--right-spacing .c-card__inner{padding-right:56px}.c-card--flat>.c-card__inner{border:1px solid #cecdd1;box-shadow:none}.c-card--border-bottom.c-card--primary .c-card__inner{border-bottom:2px solid #00538a}.c-card--border-bottom.c-card--accent .c-card__inner{border-bottom:2px solid #2f854d}.c-card--border-bottom.c-card--warn .c-card__inner{border-bottom:2px solid #c8604d}.c-card--border-left.c-card--primary .c-card__inner{border-left:2px solid #00538a}.c-card--border-left.c-card--accent .c-card__inner{border-left:2px solid #2f854d}.c-card--border-left.c-card--warn .c-card__inner{border-left:2px solid #c8604d}.c-card--border-right.c-card--primary .c-card__inner{border-right:2px solid #00538a}.c-card--border-right.c-card--accent .c-card__inner{border-right:2px solid #2f854d}.c-card--border-right.c-card--warn .c-card__inner{border-right:2px solid #c8604d}.c-card--border-top.c-card--primary .c-card__inner{border-top:2px solid #00538a}.c-card--border-top.c-card--accent .c-card__inner{border-top:2px solid #2f854d}.c-card--border-top.c-card--warn .c-card__inner{border-top:2px solid #c8604d}.c-card__inner .ts-table~.ts-loading-overlay .c-loading-overlay{left:-24px;right:-24px}"],encapsulation:2,changeDetection:0}),t}(),h=function(){var t=function(){function t(e){if(_classCallCheck(this,t),this.theme="primary",this.tsCardTitle="c-card__title",!(e instanceof f)&&Object(a.X)())throw new d.c("The 'tsCardTitle' directive must be inside a <ts-card> component.")}return _createClass(t,[{key:"tsTitleAccentBorder",set:function(t){Object(o.b)(t)&&(this.tsCardTitle="".concat(this.tsCardTitle," c-card__title-accent-border"))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Rb(f,13))},t.\u0275dir=a.Mb({type:t,selectors:[["","tsCardTitle",""]],hostVars:2,hostBindings:function(t,e){2&t&&a.Fb(e.tsCardTitle)},inputs:{theme:"theme",tsTitleAccentBorder:"tsTitleAccentBorder"}}),t}(),m=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=a.Pb({type:t}),t.\u0275inj=a.Ob({factory:function(e){return new(e||t)},imports:[[r.c,n.p,i.b]]}),t}()},FBW0:function(t,e,c){"use strict";c.r(e),c.d(e,"CardModule",(function(){return v}));var r=c("2kYt"),a=c("40Bj"),n=c("nIj0"),i=c("2u5E"),o=c("EOaC"),d=c("7XCD"),s=c("0Bg5"),l=c("sEIs"),b=c("EM62"),p=c("qFEQ"),u=["transitionCard"];function f(t,e){1&t&&(b.Vb(0),b.Mc(1," (centered content) "),b.Ub())}function h(t,e){1&t&&(b.Vb(0),b.Mc(1," (with interaction) "),b.Ub())}function m(t,e){1&t&&(b.Xb(0,"ts-button"),b.Mc(1," My menu item "),b.Wb())}function g(t,e){if(1&t&&(b.Sb(0,"ts-menu",33),b.Kc(1,m,2,0,"ng-template",null,34,b.Lc)),2&t){var c=b.zc(2);b.qc("menuItemsTemplate",c)}}var _,x,M,C=[{path:"",component:(_=function(){function t(){_classCallCheck(this,t),this.supportsInteraction=!1,this.centered=!1,this.flat=!1,this.theme="primary",this.border="none"}return _createClass(t,[{key:"ngAfterViewInit",value:function(){document.getElementById(this.transitionCard.id).style.height="100px"}},{key:"changeCardHeight",value:function(){var t=document.getElementById(this.transitionCard.id);t.style.height="100px"===t.style.height?"200px":"100px"}}]),t}(),_.\u0275fac=function(t){return new(t||_)},_.\u0275cmp=b.Lb({type:_,selectors:[["demo-card"]],viewQuery:function(t,e){var c;1&t&&b.Ic(u,!0),2&t&&b.yc(c=b.gc())&&(e.transitionCard=c.first)},decls:107,vars:27,consts:[["type","checkbox",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["value","primary"],["value","accent"],["value","warn"],["value","none"],["value","bottom"],["value","left"],["value","right"],["value","top"],["tsVerticalSpacing","",3,"supportsInteraction","centeredContent","border","theme","flat"],[4,"ngIf"],["aspectRatio","16:9","tsVerticalSpacing","",3,"supportsInteraction","centeredContent","utilityMenuTemplate"],["tsVerticalSpacing","",3,"centeredContent"],["tsVerticalSpacing",""],["fxFlex","","tsVerticalSpacing",""],["fxLayout","row","fxLayoutGap","1rem"],["fxFlex","",2,"background","lightblue"],["fxFlex",""],["aspectRatio","16:9","tsVerticalSpacing",""],["tsCardTitle",""],["tsCardTitle","","tsTitleAccentBorder",""],["tsVerticalSpacing","",3,"isDisabled","supportsInteraction"],["tsVerticalSpacing","",3,"isDisabled"],["tsCardTitle","","tsVerticalSpacing",""],["tsVerticalSpacing","",3,"isDisabled","utilityMenuTemplate"],["myTemplate",""],["tsVerticalSpacing","",3,"flat"],["tsVerticalSpacing","",3,"flat","isDisabled"],[3,"flat","isDisabled"],[3,"flat"],["transitionCard","tsCard"],[3,"click"],["triggerType","utility","menuPositionX","before",3,"menuItemsTemplate"],["utilityButtons",""]],template:function(t,e){if(1&t&&(b.Xb(0,"label"),b.Mc(1," Supports interaction: "),b.Xb(2,"input",0),b.fc("ngModelChange",(function(t){return e.supportsInteraction=t})),b.Wb(),b.Wb(),b.Xb(3,"label"),b.Mc(4," Centered content: "),b.Xb(5,"input",0),b.fc("ngModelChange",(function(t){return e.centered=t})),b.Wb(),b.Wb(),b.Xb(6,"label"),b.Mc(7," Is flat: "),b.Xb(8,"input",0),b.fc("ngModelChange",(function(t){return e.flat=t})),b.Wb(),b.Wb(),b.Xb(9,"label"),b.Mc(10," Theme: "),b.Xb(11,"select",1),b.fc("ngModelChange",(function(t){return e.theme=t})),b.Xb(12,"option",2),b.Mc(13,"Primary"),b.Wb(),b.Xb(14,"option",3),b.Mc(15,"Accent"),b.Wb(),b.Xb(16,"option",4),b.Mc(17,"Warn"),b.Wb(),b.Wb(),b.Wb(),b.Xb(18,"label"),b.Mc(19," Border: "),b.Xb(20,"select",1),b.fc("ngModelChange",(function(t){return e.border=t})),b.Xb(21,"option",5),b.Mc(22,"None"),b.Wb(),b.Xb(23,"option",6),b.Mc(24,"Bottom"),b.Wb(),b.Xb(25,"option",7),b.Mc(26,"Left"),b.Wb(),b.Xb(27,"option",8),b.Mc(28,"Right"),b.Wb(),b.Xb(29,"option",9),b.Mc(30,"Top"),b.Wb(),b.Wb(),b.Wb(),b.Sb(31,"br"),b.Xb(32,"ts-card",10),b.Mc(33," Standard card "),b.Kc(34,f,2,0,"ng-container",11),b.Kc(35,h,2,0,"ng-container",11),b.Wb(),b.Xb(36,"ts-card",12),b.Mc(37," Standard card with utility menu and aspect ratio\n"),b.Wb(),b.Xb(38,"ts-card",13),b.Mc(39," Centered content\n"),b.Wb(),b.Xb(40,"p",14),b.Mc(41," Nested within flex layout:\n"),b.Wb(),b.Xb(42,"div",15),b.Xb(43,"div",16),b.Xb(44,"ts-card",17),b.Mc(45," Card 1 Foo Bar "),b.Wb(),b.Xb(46,"ts-card",18),b.Mc(47," Card 1 "),b.Sb(48,"br"),b.Mc(49," Foo "),b.Sb(50,"br"),b.Mc(51," Bar "),b.Sb(52,"br"),b.Mc(53," baz "),b.Sb(54,"br"),b.Mc(55," nitch "),b.Wb(),b.Wb(),b.Wb(),b.Xb(56,"ts-card",19),b.Xb(57,"h3",20),b.Mc(58,"Card with Title & aspect"),b.Wb(),b.Wb(),b.Xb(59,"ts-card",14),b.Xb(60,"h3",21),b.Mc(61,"Card with Title & accent border"),b.Wb(),b.Wb(),b.Xb(62,"ts-card",22),b.Mc(63," Disabled with interactions\n"),b.Wb(),b.Xb(64,"ts-card",23),b.Xb(65,"h3",24),b.Mc(66," Disabled Card with a very long title foo bar baz "),b.Wb(),b.Mc(67," Foo "),b.Sb(68,"br"),b.Mc(69," Bar "),b.Sb(70,"br"),b.Mc(71," Baz "),b.Sb(72,"br"),b.Mc(73," Bing\n"),b.Wb(),b.Xb(74,"ts-card",25),b.Xb(75,"p"),b.Mc(76," DISABLED WITH UTILITY Repellat alias explicabo voluptatibus nesciunt. Optio maxime delectus ex aspernatur quidem. Dolorem nihil eos cum. "),b.Wb(),b.Xb(77,"p"),b.Mc(78," Voluptate perferendis facere pariatur. Hic ipsum est tempora dignissimos dolores. Magnam blanditiis quisquam fugit. "),b.Wb(),b.Xb(79,"p"),b.Mc(80," Officia voluptatum consequuntur rem quo. Fugiat mollitia maiores tempora et. Culpa distinctio ipsum blanditiis. "),b.Wb(),b.Wb(),b.Kc(81,g,3,1,"ng-template",null,26,b.Lc),b.Xb(83,"ts-card",27),b.Xb(84,"p"),b.Mc(85," FLAT CARD Repellat alias explicabo voluptatibus nesciunt. Optio maxime delectus ex aspernatur quidem. Dolorem nihil eos cum. "),b.Wb(),b.Xb(86,"p"),b.Mc(87," Voluptate perferendis facere pariatur. Hic ipsum est tempora dignissimos dolores. Magnam blanditiis quisquam fugit. "),b.Wb(),b.Xb(88,"p"),b.Mc(89," Officia voluptatum consequuntur rem quo. Fugiat mollitia maiores tempora et. Culpa distinctio ipsum blanditiis. "),b.Wb(),b.Wb(),b.Xb(90,"ts-card",28),b.Xb(91,"h3",14),b.Mc(92,"Nested card"),b.Wb(),b.Xb(93,"p"),b.Mc(94,"This card is flat and not disabled"),b.Wb(),b.Xb(95,"ts-card",29),b.Mc(96," This card is not flat and disabled "),b.Wb(),b.Wb(),b.Xb(97,"ts-card",30,31),b.Xb(99,"h3",14),b.Mc(100,"Example showing transition"),b.Wb(),b.Xb(101,"button",32),b.fc("click",(function(){return e.changeCardHeight()})),b.Mc(102,"Change card height"),b.Wb(),b.Wb(),b.Sb(103,"br"),b.Sb(104,"br"),b.Sb(105,"br"),b.Sb(106,"br")),2&t){var c=b.zc(82);b.Db(2),b.qc("ngModel",e.supportsInteraction),b.Db(3),b.qc("ngModel",e.centered),b.Db(3),b.qc("ngModel",e.flat),b.Db(3),b.qc("ngModel",e.theme),b.Db(9),b.qc("ngModel",e.border),b.Db(12),b.qc("supportsInteraction",e.supportsInteraction)("centeredContent",e.centered)("border",e.border)("theme",e.theme)("flat",e.flat),b.Db(2),b.qc("ngIf",e.centered),b.Db(1),b.qc("ngIf",e.supportsInteraction),b.Db(1),b.qc("supportsInteraction",!0)("centeredContent",!0)("utilityMenuTemplate",c),b.Db(2),b.qc("centeredContent",!0),b.Db(24),b.qc("isDisabled",!0)("supportsInteraction",!0),b.Db(2),b.qc("isDisabled",!0),b.Db(10),b.qc("isDisabled",!1)("utilityMenuTemplate",c),b.Db(9),b.qc("flat",!0),b.Db(7),b.qc("flat",!0)("isDisabled",!1),b.Db(5),b.qc("flat",!1)("isDisabled",!0),b.Db(2),b.qc("flat",!0)}},directives:[n.a,n.q,n.t,n.A,n.u,n.C,o.a,s.c,r.m,p.b,p.d,p.e,o.c,d.a,i.a],encapsulation:2}),_)}],y=((M=function t(){_classCallCheck(this,t)}).\u0275mod=b.Pb({type:M}),M.\u0275inj=b.Ob({factory:function(t){return new(t||M)},imports:[[l.f.forChild(C)],l.f]}),M),v=((x=function t(){_classCallCheck(this,t)}).\u0275mod=b.Pb({type:x}),x.\u0275inj=b.Ob({factory:function(t){return new(t||x)},imports:[[y,r.c,a.a,n.m,i.b,o.b,d.b,s.b]]}),x)}}]);