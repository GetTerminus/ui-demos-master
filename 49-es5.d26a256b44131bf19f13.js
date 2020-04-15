function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var c=0;c<e.length;c++){var r=e[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,c){return e&&_defineProperties(t.prototype,e),c&&_defineProperties(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"2d8k":function(t,e,c){"use strict";c.r(e),c.d(e,"ValidationModule",(function(){return x}));var r,o,a,n=c("2kYt"),i=c("40Bj"),s=c("nIj0"),d=c("4mc+"),l=c("OEuM"),p=c("/Gcv"),f=c("cCIM"),m=c("sEIs"),b=c("EM62"),u=c("qFEQ"),h=[{path:"",component:(r=function(){function t(e,c){_classCallCheck(this,t),this.formBuilder=e,this.validatorsService=c,this.flexGap=p.a.default[0],this.minDate=new Date(2018,0,5).toISOString(),this.maxDate=new Date(2018,0,25).toISOString(),this.myCollection=["foo","bar","baz","bing","bang","boom"],this.myCollectionFn=function(t){return t.name},this.myDeepCollection=[{name:"foo",id:1},{name:"bar",id:2},{name:"baz",id:3},{name:"bing",id:4}],this.myForm=this.formBuilder.group({email:[null,[this.validatorsService.email()]],password:[null,[this.validatorsService.password()]],creditCard:[null,[this.validatorsService.creditCard()]],date:[new Date(2018,0,10),[this.validatorsService.minDate(this.minDate),this.validatorsService.maxDate(this.maxDate)]],greaterThan:[null,[this.validatorsService.greaterThan(10)]],isInRange:[null,[this.validatorsService.isInRange(10,100)]],lessThan:[null,[this.validatorsService.lessThan(10)]],url:[null,[this.validatorsService.url()]],domain:[null,[this.validatorsService.domain()]],compare1:[null],compare2:[null],lowercase:[null,[this.validatorsService.lowercase(4)]],uppercase:[null,[this.validatorsService.uppercase(4)]],numbers:[null,[this.validatorsService.numbers(4)]],greaterThanSource:[null],greaterThanInUse:[null],inCollection:[null,[this.validatorsService.inCollection(this.myCollection)]],inCollectionDeep:[null,[this.validatorsService.inCollection(this.myDeepCollection,this.myCollectionFn)]]})}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this.myForm.get("compare1"),e=this.myForm.get("compare2"),c=this.myForm.get("greaterThanSource"),r=this.myForm.get("greaterThanInUse");t&&t.setValidators([this.validatorsService.equalToControl(t)]),e&&e.setValidators([this.validatorsService.equalToControl(e)]),r&&c&&r.setValidators([this.validatorsService.greaterThan(c)])}},{key:"log",value:function(t){console.log("DEMO: form value: ",t)}}]),t}(),r.\u0275fac=function(t){return new(t||r)(b.jc(s.f),b.jc(f.b))},r.\u0275cmp=b.dc({type:r,selectors:[["demo-validation"]],decls:115,vars:31,consts:[["novalidate","",3,"formGroup"],["tsVerticalSpacing",""],[3,"click"],["tsCardTitle",""],["fxLayout","row",3,"fxLayoutGap"],["fxFlex",""],["label","Email","type","email",3,"formControl"],["label","Password",3,"formControl"],["label","Credit Card Number",3,"formControl"],["tsCardTitle","","tsVerticalSpacing","small--0"],["datepicker","date","mask","date","label","My date","hint","Date must be between 1/5/2018 and 1/25/2018",3,"formControl"],["label","Number","type","number","hint","Must be less than 10",3,"formControl"],["label","Number","type","number","hint","Must be greater than 10",3,"formControl"],["label","Is In Range","type","number","hint","Number must be between 10 and 100",3,"formControl"],["hint","Must contain at least 4 lowercase",3,"formControl"],["hint","Must contain at least 4 uppercase",3,"formControl"],["hint","Must contain at least 4 numbers",3,"formControl"],["label","Url",3,"formControl"],["label","Domain",3,"formControl"],["tsCardTitle","","tsVerticalSpacing",""],["fxLayout","row","fxLayoutGap","2em"],["fxFlex","","label","Input 1",3,"formControl"],["fxFlex","","label","Input 2",3,"formControl"],["fxLayout","row","fxLayoutGap","2em","tsVerticalSpacing",""],["fxFlex","","hint","Change the number to set the validation minimum","label","Input 1","type","number",3,"formControl"],["fxFlex","","hint","My validation is based on the other control's value","label","Input 2","type","number",3,"formControl"],["fxFlex","50"],["hint","Input a value that exists","label","Verify in shallow collection",3,"formControl"],["hint","Input a value that exists","label","Verify in deep collection",3,"formControl"]],template:function(t,e){1&t&&(b.pc(0,"form",0),b.pc(1,"ts-card",1),b.pc(2,"h3",1),b.fd(3," Demo controls "),b.oc(),b.pc(4,"p"),b.fd(5," Note: You must leave the input for the validation to trigger. "),b.oc(),b.pc(6,"button",2),b.xc("click",(function(){return e.log(e.myForm.value)})),b.fd(7," Log form value "),b.oc(),b.oc(),b.pc(8,"ts-card",1),b.pc(9,"h3",3),b.fd(10,"Email"),b.oc(),b.pc(11,"div",4),b.pc(12,"pre",5),b.fd(13,"// Valid emails:\nfoo@bar.co\nfoo@bar.baz.net\n"),b.oc(),b.pc(14,"pre",5),b.fd(15,"// Invalid emails:\nfoo\nfoo@\nfoo@bar\nfoo@bar.\nfoo@bar.c\n"),b.oc(),b.oc(),b.kc(16,"ts-input",6),b.oc(),b.pc(17,"ts-card",1),b.pc(18,"h3",3),b.fd(19,"Password"),b.oc(),b.pc(20,"div",4),b.pc(21,"pre",5),b.fd(22,"// Valid passwords:\n7GmfvH\nV9Cpp7RGB9\n29N74UV9ogt2UKpT3pZN3oLngp8Trkk4mCZfCgdE\nFQ49j6BQ2BqerBnFMkeL7hfMw83fVsseAMV9xDJrTWd9J8xNFQ49j6BQ2BqerBnFMkeL7hfMw83fVsseAMV9xDJrTWd9J8xsdN\n"),b.oc(),b.pc(23,"pre",5),b.fd(24,"// Invalid passwords:\nMA9Lv\nxnhoQzDwAv\nyGiUf>DfQ2\nFQ49j BQ29\nFQ49j6BQ2BqerBnFMkeL7hfMw83fVsseAMV9xDJrTWd9J8xsdNFQ49j6BQ2BqerBnFMkeL7hfMw83fVsseAMV9xDJrTWd9J8xsdN1\n"),b.oc(),b.oc(),b.kc(25,"ts-input",7),b.oc(),b.pc(26,"ts-card",1),b.pc(27,"h3",3),b.fd(28,"Credit Card"),b.oc(),b.pc(29,"div",4),b.pc(30,"pre",5),b.fd(31,"// Valid card numbers:\n4242424242424242\n38520000023237\n6011111111111117\n378282246310005\n"),b.oc(),b.pc(32,"pre",5),b.fd(33,"// Invalid card numbers:\n1234\ne\ntest@test.com\n3852000023237\n424242424242424242\n"),b.oc(),b.oc(),b.kc(34,"ts-input",8),b.oc(),b.pc(35,"ts-card",1),b.pc(36,"h3",9),b.fd(37,"Date (min/max)"),b.oc(),b.kc(38,"ts-input",10),b.oc(),b.pc(39,"div",4),b.pc(40,"div",5),b.pc(41,"ts-card",1),b.pc(42,"h3",9),b.fd(43,"Less Than"),b.oc(),b.kc(44,"ts-input",11),b.oc(),b.oc(),b.pc(45,"div",5),b.pc(46,"ts-card",1),b.pc(47,"h3",9),b.fd(48,"Greater Than"),b.oc(),b.kc(49,"ts-input",12),b.oc(),b.oc(),b.oc(),b.pc(50,"div",4),b.pc(51,"div",5),b.pc(52,"ts-card",1),b.pc(53,"h3",9),b.fd(54,"isInRange (min/max)"),b.oc(),b.kc(55,"ts-input",13),b.oc(),b.oc(),b.oc(),b.pc(56,"div",4),b.pc(57,"div",5),b.pc(58,"ts-card",1),b.pc(59,"h3",9),b.fd(60,"Contains lowercase"),b.oc(),b.kc(61,"ts-input",14),b.oc(),b.oc(),b.pc(62,"div",5),b.pc(63,"ts-card",1),b.pc(64,"h3",9),b.fd(65,"Contains uppercase"),b.oc(),b.kc(66,"ts-input",15),b.oc(),b.oc(),b.pc(67,"div",5),b.pc(68,"ts-card",1),b.pc(69,"h3",9),b.fd(70,"Contains numbers"),b.oc(),b.kc(71,"ts-input",16),b.oc(),b.oc(),b.oc(),b.pc(72,"ts-card",1),b.pc(73,"h3",3),b.fd(74,"Url"),b.oc(),b.pc(75,"div",4),b.pc(76,"pre",5),b.fd(77,"// Valid URLs:\nhttp://foo.com\nhttp://foo.com/blah_blah_(wikipedia)\nhttps://www.example.com/foo/?bar=baz&inga=42&quux\nhttp://userid:password@example.com:8080/\nhttp://\u2318.ws\nftp://foo.bar/baz\nhttp://foo.bar/?q=Test%20URL-encoded%20stuff\nhttp://223.255.255.254\n"),b.oc(),b.pc(78,"pre",5),b.fd(79,"// Invalid URLs:\nhttp://\nhttp://foo.bar?q=Spaces should be encoded\nfoo.com\nrdar://1234\nhttp://1.1.1.1.1\nhttp://.www.foo.bar./\nhttp:// shouldfail.com\n"),b.oc(),b.oc(),b.kc(80,"ts-input",17),b.oc(),b.pc(81,"ts-card",1),b.pc(82,"h3",3),b.fd(83,"Domain"),b.oc(),b.pc(84,"div",4),b.pc(85,"pre",5),b.fd(86,"  // Valid domains:\n  foo.com\n  foo.com/blah_blah_(wikipedia)\n  www.example.com/foo/?bar=baz&inga=42&quux\n  userid:password@example.com:8080/\n  \u2318.ws\n  oo.bar/baz\n  foo.bar/?q=Test%20URL-encoded%20stuff\n  223.255.255.254\n  "),b.oc(),b.pc(87,"pre",5),b.fd(88,"  // Invalid domains:\n  http://\n  http://foo.bar?q=Spaces should be encoded\n  rdar://1234\n  1.1.1.1.1\n  .www.foo.bar./\n    shouldfail.com\n  "),b.oc(),b.oc(),b.kc(89,"ts-input",18),b.oc(),b.pc(90,"ts-card",1),b.pc(91,"h3",19),b.fd(92," Compare two form controls "),b.oc(),b.pc(93,"div",20),b.kc(94,"ts-input",21),b.kc(95,"ts-input",22),b.oc(),b.oc(),b.pc(96,"ts-card",1),b.pc(97,"h3",19),b.fd(98," Example using a control as a validation source "),b.oc(),b.pc(99,"div",23),b.kc(100,"ts-input",24),b.kc(101,"ts-input",25),b.oc(),b.oc(),b.pc(102,"ts-card",1),b.pc(103,"h3",19),b.fd(104," Verify value is in a collection "),b.oc(),b.pc(105,"div",23),b.pc(106,"div",26),b.kc(107,"ts-input",27),b.pc(108,"div"),b.fd(109),b.oc(),b.oc(),b.pc(110,"div",26),b.kc(111,"ts-input",28),b.pc(112,"div"),b.fd(113),b.Cc(114,"json"),b.oc(),b.oc(),b.oc(),b.oc(),b.oc()),2&t&&(b.Ic("formGroup",e.myForm),b.Vb(11),b.Ic("fxLayoutGap",e.flexGap),b.Vb(5),b.Ic("formControl",e.myForm.get("email")),b.Vb(4),b.Ic("fxLayoutGap",e.flexGap),b.Vb(5),b.Ic("formControl",e.myForm.get("password")),b.Vb(4),b.Ic("fxLayoutGap",e.flexGap),b.Vb(5),b.Ic("formControl",e.myForm.get("creditCard")),b.Vb(4),b.Ic("formControl",e.myForm.get("date")),b.Vb(1),b.Ic("fxLayoutGap",e.flexGap),b.Vb(5),b.Ic("formControl",e.myForm.get("lessThan")),b.Vb(5),b.Ic("formControl",e.myForm.get("greaterThan")),b.Vb(1),b.Ic("fxLayoutGap",e.flexGap),b.Vb(5),b.Ic("formControl",e.myForm.get("isInRange")),b.Vb(1),b.Ic("fxLayoutGap",e.flexGap),b.Vb(5),b.Ic("formControl",e.myForm.get("lowercase")),b.Vb(5),b.Ic("formControl",e.myForm.get("uppercase")),b.Vb(5),b.Ic("formControl",e.myForm.get("numbers")),b.Vb(4),b.Ic("fxLayoutGap",e.flexGap),b.Vb(5),b.Ic("formControl",e.myForm.get("url")),b.Vb(4),b.Ic("fxLayoutGap",e.flexGap),b.Vb(5),b.Ic("formControl",e.myForm.get("domain")),b.Vb(5),b.Ic("formControl",e.myForm.get("compare1")),b.Vb(1),b.Ic("formControl",e.myForm.get("compare2")),b.Vb(5),b.Ic("formControl",e.myForm.get("greaterThanSource")),b.Vb(1),b.Ic("formControl",e.myForm.get("greaterThanInUse")),b.Vb(6),b.Ic("formControl",e.myForm.get("inCollection")),b.Vb(2),b.hd(" Collection: ",e.myCollection," "),b.Vb(2),b.Ic("formControl",e.myForm.get("inCollectionDeep")),b.Vb(2),b.hd(" Collection: ",b.Dc(114,29,e.myDeepCollection)," "))},directives:[s.D,s.r,s.k,d.a,p.c,d.c,u.f,u.g,u.b,l.a,s.q,s.h],pipes:[n.k],styles:["pre[_ngcontent-%COMP%]{background-color:#eee;border:1px solid #999;font-size:.8em;max-width:50%;overflow-x:scroll;padding:1em}"]}),r)}],g=((a=function t(){_classCallCheck(this,t)}).\u0275mod=b.hc({type:a}),a.\u0275inj=b.gc({factory:function(t){return new(t||a)},imports:[[m.e.forChild(h)],m.e]}),a),x=((o=function t(){_classCallCheck(this,t)}).\u0275mod=b.hc({type:o}),o.\u0275inj=b.gc({factory:function(t){return new(t||o)},imports:[[n.c,i.a,s.m,s.y,d.b,l.b,p.b,f.a,g]]}),o)},"4mc+":function(t,e,c){"use strict";c.d(e,"a",(function(){return b})),c.d(e,"b",(function(){return h})),c.d(e,"c",(function(){return u}));var r=c("2kYt"),o=c("EM62"),a=c("mFH5"),n=c("0Hrt"),i=c("7sjG"),s=c("5uKI");function d(t,e){if(1&t&&Object(o.lc)(0,4),2&t){var c=Object(o.Bc)();Object(o.Ic)("ngTemplateOutlet",c.utilityMenuTemplate)}}function l(t,e){1&t&&(Object(o.pc)(0,"ts-icon",5),Object(o.fd)(1,"lock_outline"),Object(o.oc)())}var p=function(t,e,c,r,o,a){return{"c-card--interaction":t,"c-card--centered":e,"c-card--aspect":c,"c-card--disabled":r,"c-card--right-spacing":o,"c-card--flat":a}},f=["*"],m=0,b=function(){var t=function(){function t(){_classCallCheck(this,t),this.uid="ts-card-".concat(m++),this._border="none",this.centeredContent=!1,this.isDisabled=!1,this.flat=!1,this._id=this.uid,this.supportsInteraction=!1,this._theme="primary"}return _createClass(t,[{key:"aspectRatio",set:function(t){var e=parseInt(t.split(":")[0],10),c=parseInt(t.split(":")[1],10);this.aspectRatioPadding="".concat((c/e*100).toFixed(2),"%")}},{key:"border",set:function(t){this._border=t||"none"},get:function(){return this._border}},{key:"id",set:function(t){this._id=t||this.uid},get:function(){return this._id}},{key:"theme",set:function(t){this._theme=t||"primary"},get:function(){return this._theme}},{key:"borderClass",get:function(){return this.border&&"none"!==this.border?"c-card--border-".concat(this.border):""}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Object(o.dc)({type:t,selectors:[["ts-card"]],hostAttrs:[1,"ts-card"],inputs:{aspectRatio:"aspectRatio",border:"border",centeredContent:"centeredContent",isDisabled:"isDisabled",flat:"flat",id:"id",supportsInteraction:"supportsInteraction",theme:"theme",utilityMenuTemplate:"utilityMenuTemplate"},exportAs:["tsCard"],ngContentSelectors:f,decls:5,vars:18,consts:[[3,"ngClass"],["mat-ripple","",1,"c-card__inner",3,"matRippleDisabled"],[3,"ngTemplateOutlet",4,"ngIf"],["class","c-card__lock qa-card-lock",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"c-card__lock","qa-card-lock"]],template:function(t,e){1&t&&(Object(o.Hc)(),Object(o.pc)(0,"div",0),Object(o.pc)(1,"div",1),Object(o.Gc)(2),Object(o.oc)(),Object(o.dd)(3,d,1,1,"ng-container",2),Object(o.dd)(4,l,2,0,"ts-icon",3),Object(o.oc)()),2&t&&(Object(o.Zb)("c-card qa-card ",e.borderClass," c-card--",e.theme,""),Object(o.cd)("padding-top",e.aspectRatioPadding),Object(o.Ic)("ngClass",Object(o.Pc)(11,p,e.supportsInteraction,e.centeredContent,e.aspectRatioPadding,e.isDisabled,e.utilityMenuTemplate||e.isDisabled,e.flat)),Object(o.Wb)("id",e.id),Object(o.Vb)(1),Object(o.Ic)("matRippleDisabled",!e.supportsInteraction||e.isDisabled),Object(o.Vb)(2),Object(o.Ic)("ngIf",e.utilityMenuTemplate),Object(o.Vb)(1),Object(o.Ic)("ngIf",e.isDisabled&&!e.utilityMenuTemplate))},directives:[r.q,a.o,r.t,r.A,n.a],styles:[".ts-card{display:flex;flex-flow:row nowrap}.ts-card :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-card h1,.ts-card h2,.ts-card h3,.ts-card h4,.ts-card h5,.ts-card p{margin:unset}.ts-card .c-card{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;background-color:#fafafa;position:relative;transition:height .2s;width:100%}.ts-card .c-card:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-card .c-card:not(.c-card--aspect),.ts-card .c-card:not(.c-card--interaction){align-items:stretch;display:flex;flex-direction:row;justify-content:center}.c-card .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;width:100%}.c-card .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card .c-card__inner .c-card__title-accent-border{border-left:2px solid #00538a;padding-left:8px}.c-card .c-card__inner .c-card__title-accent-border[theme=accent]{border-left-color:#2f854d}.c-card .c-card__inner .c-card__title-accent-border[theme=warn]{border-left-color:#c8604d}.c-card--interaction:not(.c-card--disabled) .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow 250ms cubic-bezier(.4,0,.2,1);cursor:pointer}.c-card--interaction:not(.c-card--disabled) .c-card__inner:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.c-card--interaction:not(.c-card--disabled) .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card--centered .c-card__inner{align-items:center;display:flex;justify-content:center}.c-card--aspect .c-card__inner{bottom:0;left:0;position:absolute;right:0;top:0}.c-card--disabled .c-card__inner{opacity:.5}.c-card--disabled .c-menu{opacity:.3;pointer-events:none}.c-card--disabled .c-card__lock{color:#999;position:absolute;right:24px;top:calc(24px - 2px);transform:scale(.7)}.c-card--right-spacing .c-card__inner{padding-right:56px}.c-card--flat>.c-card__inner{border:1px solid #cecdd1;box-shadow:none}.c-card--border-bottom.c-card--primary .c-card__inner{border-bottom:2px solid #00538a}.c-card--border-bottom.c-card--accent .c-card__inner{border-bottom:2px solid #2f854d}.c-card--border-bottom.c-card--warn .c-card__inner{border-bottom:2px solid #c8604d}.c-card--border-left.c-card--primary .c-card__inner{border-left:2px solid #00538a}.c-card--border-left.c-card--accent .c-card__inner{border-left:2px solid #2f854d}.c-card--border-left.c-card--warn .c-card__inner{border-left:2px solid #c8604d}.c-card--border-right.c-card--primary .c-card__inner{border-right:2px solid #00538a}.c-card--border-right.c-card--accent .c-card__inner{border-right:2px solid #2f854d}.c-card--border-right.c-card--warn .c-card__inner{border-right:2px solid #c8604d}.c-card--border-top.c-card--primary .c-card__inner{border-top:2px solid #00538a}.c-card--border-top.c-card--accent .c-card__inner{border-top:2px solid #2f854d}.c-card--border-top.c-card--warn .c-card__inner{border-top:2px solid #c8604d}.c-card__inner .ts-table~.ts-loading-overlay .c-loading-overlay{left:-24px;right:-24px}"],encapsulation:2,changeDetection:0}),t}(),u=function(){var t=function(){function t(e){if(_classCallCheck(this,t),this.theme="primary",this.tsCardTitle="c-card__title",!(e instanceof b)&&Object(o.ob)())throw new s.c("The 'tsCardTitle' directive must be inside a <ts-card> component.")}return _createClass(t,[{key:"tsTitleAccentBorder",set:function(t){Object(i.b)(t)&&(this.tsCardTitle="".concat(this.tsCardTitle," c-card__title-accent-border"))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(Object(o.jc)(b,13))},t.\u0275dir=Object(o.ec)({type:t,selectors:[["","tsCardTitle",""]],hostVars:2,hostBindings:function(t,e){2&t&&Object(o.Xb)(e.tsCardTitle)},inputs:{tsTitleAccentBorder:"tsTitleAccentBorder",theme:"theme"}}),t}(),h=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=Object(o.hc)({type:t}),t.\u0275inj=Object(o.gc)({factory:function(e){return new(e||t)},imports:[[r.c,a.p,n.b]]}),t}()}}]);