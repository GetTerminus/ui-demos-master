(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"1xtn":function(l,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return i}),t.d(n,"c",function(){return a}),t("mrSG");var u=t("CcnG"),r=t("VYBx"),e=0,c=function(){function l(){this._uid="ts-card-"+e++,this._border="none",this.centeredContent=!1,this.isDisabled=!1,this.flat=!1,this._id=this._uid,this.supportsInteraction=!1,this._theme="primary",this.id=this.id}return Object.defineProperty(l.prototype,"aspectRatio",{set:function(l){var n=parseInt(l.split(":")[0],10),t=parseInt(l.split(":")[1],10);this.aspectRatioPadding=(t/n*100).toFixed(2)+"%"},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"border",{get:function(){return this._border},set:function(l){l&&(this._border=l)},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"id",{get:function(){return this._id},set:function(l){this._id=l||this._uid},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"theme",{get:function(){return this._theme},set:function(l){l&&(this._theme=l)},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"borderClass",{get:function(){return this.border&&"none"!==this.border?"c-card--border-"+this.border:""},enumerable:!0,configurable:!0}),l}(),a=function(){function l(l){if(this.theme="primary",this.tsCardTitle="c-card__title",!(l instanceof c)&&Object(u.Z)())throw Error("The 'tsCardTitle' directive must be inside a <ts-card> component.")}return Object.defineProperty(l.prototype,"tsTitleAccentBorder",{set:function(l){Object(r.b)(l)&&(this.tsCardTitle=this.tsCardTitle+" c-card__title-accent-border")},enumerable:!0,configurable:!0}),l}(),i=function(){return function(){}}()},OLJL:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),r=function(){return function(){}}(),e=t("pMnS"),c=t("iLpn"),a=t("ehiB"),i=t("1xtn"),b=t("l5YW"),d=function(){return function(l){this.sentenceCasePipe=l,this.date=new Date(2018,1,8),this.dateString=this.date.toISOString(),this.oldDate=new Date(2018,1,3),this.myString="ANOTHER STRING",this.myStringTransformed=this.sentenceCasePipe.transform(this.myString)}}(),s=u.tb({encapsulation:0,styles:["strong[_ngcontent-%COMP%] {\n      display: block;\n    }\n    pre[_ngcontent-%COMP%] {\n      font-size: 12px;\n    }"],data:{}});function o(l){return u.Rb(0,[u.Jb(0,c.a,[]),u.Jb(0,c.c,[]),u.Jb(0,c.d,[]),u.Jb(0,c.e,[]),u.Jb(0,c.f,[]),u.Jb(0,c.g,[]),(l()(),u.vb(6,0,null,null,31,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,a.b,a.a)),u.ub(7,49152,null,0,i.a,[],null,null),u.ub(8,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.vb(9,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Pb(-1,null,["Date"])),(l()(),u.vb(11,0,null,0,2,"pre",[["tsVerticalSpacing",""]],null,null,null,null,null)),u.ub(12,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.Pb(13,null,["Date:\n","\n\nDate String:\n","\n"])),(l()(),u.vb(14,0,null,0,5,"div",[["tsVerticalSpacing",""]],null,null,null,null,null)),u.ub(15,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.vb(16,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.Pb(-1,null,[" short (default) "])),(l()(),u.Pb(18,null,[" "," "])),u.Lb(19,1),(l()(),u.vb(20,0,null,0,5,"div",[["tsVerticalSpacing",""]],null,null,null,null,null)),u.ub(21,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.vb(22,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.Pb(-1,null,[" medium (using date string) "])),(l()(),u.Pb(24,null,[" "," "])),u.Lb(25,2),(l()(),u.vb(26,0,null,0,5,"div",[["tsVerticalSpacing",""]],null,null,null,null,null)),u.ub(27,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.vb(28,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.Pb(-1,null,[" extended "])),(l()(),u.Pb(30,null,[" "," "])),u.Lb(31,2),(l()(),u.vb(32,0,null,0,5,"div",[["tsVerticalSpacing",""]],null,null,null,null,null)),u.ub(33,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.vb(34,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.Pb(-1,null,[" timestamp "])),(l()(),u.Pb(36,null,[" "," "])),u.Lb(37,2),(l()(),u.vb(38,0,null,null,22,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,a.b,a.a)),u.ub(39,49152,null,0,i.a,[],null,null),u.ub(40,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.vb(41,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Pb(-1,null,["RoundNumber"])),(l()(),u.vb(43,0,null,0,2,"pre",[["tsVerticalSpacing",""]],null,null,null,null,null)),u.ub(44,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.Pb(-1,null,["Value:\n3456.3456\n"])),(l()(),u.vb(46,0,null,0,14,"div",[],null,null,null,null,null)),(l()(),u.Pb(-1,null,[" Round to 2: "])),(l()(),u.vb(48,0,null,null,2,"b",[],null,null,null,null,null)),(l()(),u.Pb(49,null,["",""])),u.Lb(50,2),(l()(),u.vb(51,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Pb(-1,null,[" Round to 0: "])),(l()(),u.vb(53,0,null,null,2,"b",[],null,null,null,null,null)),(l()(),u.Pb(54,null,["",""])),u.Lb(55,1),(l()(),u.vb(56,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Pb(-1,null,[" Round to -2: "])),(l()(),u.vb(58,0,null,null,2,"b",[],null,null,null,null,null)),(l()(),u.Pb(59,null,["",""])),u.Lb(60,2),(l()(),u.vb(61,0,null,null,10,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,a.b,a.a)),u.ub(62,49152,null,0,i.a,[],null,null),u.ub(63,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.vb(64,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Pb(-1,null,["SentenceCase"])),(l()(),u.vb(66,0,null,0,2,"pre",[["tsVerticalSpacing",""]],null,null,null,null,null)),u.ub(67,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.Pb(-1,null,["String:\n'HERE IS MY STRING'\n"])),(l()(),u.vb(69,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),u.Pb(70,null,[" "," "])),u.Lb(71,1),(l()(),u.vb(72,0,null,null,11,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,a.b,a.a)),u.ub(73,49152,null,0,i.a,[],null,null),u.ub(74,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.vb(75,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Pb(-1,null,["TimeAgo"])),(l()(),u.vb(77,0,null,0,2,"pre",[["tsVerticalSpacing",""]],null,null,null,null,null)),u.ub(78,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.Pb(79,null,["Date:\n","\n\nOld date:\n","\n"])),(l()(),u.vb(80,0,null,0,3,"div",[["tsVerticalSpacing",""]],null,null,null,null,null)),u.ub(81,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.Pb(82,null,[" "," since I did any work "])),u.Lb(83,2),(l()(),u.vb(84,0,null,null,13,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,a.b,a.a)),u.ub(85,49152,null,0,i.a,[],null,null),u.ub(86,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.vb(87,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Pb(-1,null,["TitleCase"])),(l()(),u.vb(89,0,null,0,2,"pre",[["tsVerticalSpacing",""]],null,null,null,null,null)),u.ub(90,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.Pb(-1,null,["String 1: Careful man, there’s a beverage here!\nString 2: THAT RUG REALLY TIED THE ROOM TOGETHER.\n"])),(l()(),u.vb(92,0,null,0,5,"div",[],null,null,null,null,null)),(l()(),u.Pb(93,null,[" "," "])),u.Lb(94,1),(l()(),u.vb(95,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Pb(96,null,[" "," "])),u.Lb(97,1),(l()(),u.vb(98,0,null,null,16,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,a.b,a.a)),u.ub(99,49152,null,0,i.a,[],null,null),u.ub(100,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.vb(101,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Pb(-1,null,["TruncateAt"])),(l()(),u.vb(103,0,null,0,2,"pre",[["tsVerticalSpacing",""]],null,null,null,null,null)),u.ub(104,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.Pb(-1,null,["  'Here is my string' | tsTruncateAt:7 \n  'Here is my string' | tsTruncateAt:8:'middle' \n  'Here is my string' | tsTruncateAt:6:'start'\n"])),(l()(),u.vb(106,0,null,0,8,"div",[],null,null,null,null,null)),(l()(),u.Pb(107,null,[" "," "])),u.Lb(108,2),(l()(),u.vb(109,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Pb(110,null,[" "," "])),u.Lb(111,3),(l()(),u.vb(112,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Pb(113,null,[" "," "])),u.Lb(114,3),(l()(),u.vb(115,0,null,null,10,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,a.b,a.a)),u.ub(116,49152,null,0,i.a,[],null,null),u.ub(117,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.vb(118,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Pb(-1,null,["Usage in Class"])),(l()(),u.Pb(-1,0,[" (See the associated .ts file) "])),(l()(),u.vb(121,0,null,0,2,"pre",[["tsVerticalSpacing",""]],null,null,null,null,null)),u.ub(122,16384,null,0,b.c,[u.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(l()(),u.Pb(123,null,["String: ","\n"])),(l()(),u.vb(124,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),u.Pb(125,null,[" "," "]))],function(l,n){l(n,8,0,""),l(n,12,0,""),l(n,15,0,""),l(n,21,0,""),l(n,27,0,""),l(n,33,0,""),l(n,40,0,""),l(n,44,0,""),l(n,63,0,""),l(n,67,0,""),l(n,74,0,""),l(n,78,0,""),l(n,81,0,""),l(n,86,0,""),l(n,90,0,""),l(n,100,0,""),l(n,104,0,""),l(n,117,0,""),l(n,122,0,"")},function(l,n){var t=n.component;l(n,13,0,t.date,t.dateString);var r=u.Qb(n,18,0,l(n,19,0,u.Hb(n,0),t.date));l(n,18,0,r);var e=u.Qb(n,24,0,l(n,25,0,u.Hb(n,0),t.dateString,"medium"));l(n,24,0,e);var c=u.Qb(n,30,0,l(n,31,0,u.Hb(n,0),t.date,"extended"));l(n,30,0,c);var a=u.Qb(n,36,0,l(n,37,0,u.Hb(n,0),t.date,"timestamp"));l(n,36,0,a);var i=u.Qb(n,49,0,l(n,50,0,u.Hb(n,1),3456.3456,2));l(n,49,0,i);var b=u.Qb(n,54,0,l(n,55,0,u.Hb(n,1),3456.3456));l(n,54,0,b);var d=u.Qb(n,59,0,l(n,60,0,u.Hb(n,1),3456.3456,-2));l(n,59,0,d);var s=u.Qb(n,70,0,l(n,71,0,u.Hb(n,2),"HERE IS MY STRING"));l(n,70,0,s),l(n,79,0,t.date,t.oldDate);var o=u.Qb(n,82,0,l(n,83,0,u.Hb(n,3),t.date,t.oldDate));l(n,82,0,o);var p=u.Qb(n,93,0,l(n,94,0,u.Hb(n,4),"Careful man, there’s a beverage here!"));l(n,93,0,p);var g=u.Qb(n,96,0,l(n,97,0,u.Hb(n,4),"THAT RUG REALLY TIED THE ROOM TOGETHER."));l(n,96,0,g);var f=u.Qb(n,107,0,l(n,108,0,u.Hb(n,5),"Here is my string",7));l(n,107,0,f);var h=u.Qb(n,110,0,l(n,111,0,u.Hb(n,5),"Here is my string",8,"middle"));l(n,110,0,h);var v=u.Qb(n,113,0,l(n,114,0,u.Hb(n,5),"Here is my string",6,"start"));l(n,113,0,v),l(n,123,0,t.myString),l(n,125,0,t.myStringTransformed)})}function p(l){return u.Rb(0,[(l()(),u.vb(0,0,null,null,1,"demo-pipes",[],null,null,null,o,s)),u.ub(1,49152,null,0,d,[c.d],null,null)],null,null)}var g=u.rb("demo-pipes",d,p,{},{},[]),f=t("Ip0R"),h=t("ZYCi"),v=function(){return function(){}}(),m=t("Fzqc"),_=t("Wf4p"),S=t("ZYjt"),x=t("dWZg"),V=t("SMsm"),y=t("SG5n");t.d(n,"PipesModuleNgFactory",function(){return P});var P=u.sb(r,[],function(l){return u.Eb([u.Fb(512,u.j,u.db,[[8,[e.a,g]],[3,u.j],u.y]),u.Fb(4608,f.o,f.n,[u.v,[2,f.F]]),u.Fb(4608,c.a,c.a,[]),u.Fb(4608,c.c,c.c,[]),u.Fb(4608,c.d,c.d,[]),u.Fb(4608,c.e,c.e,[]),u.Fb(4608,c.f,c.f,[]),u.Fb(4608,c.g,c.g,[]),u.Fb(1073742336,f.c,f.c,[]),u.Fb(1073742336,h.p,h.p,[[2,h.u],[2,h.l]]),u.Fb(1073742336,v,v,[]),u.Fb(1073742336,m.a,m.a,[]),u.Fb(1073742336,_.k,_.k,[[2,_.f],[2,S.f]]),u.Fb(1073742336,x.b,x.b,[]),u.Fb(1073742336,_.n,_.n,[]),u.Fb(1073742336,V.c,V.c,[]),u.Fb(1073742336,y.b,y.b,[]),u.Fb(1073742336,i.b,i.b,[]),u.Fb(1073742336,c.b,c.b,[]),u.Fb(1073742336,b.b,b.b,[]),u.Fb(1073742336,r,r,[]),u.Fb(1024,h.j,function(){return[[{path:"",component:d}]]},[])])})},ehiB:function(l,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return f});var u=t("CcnG"),r=(t("1xtn"),t("Ip0R")),e=(t("Fzqc"),t("Wf4p")),c=t("ZYjt"),a=t("dWZg"),i=t("SMsm"),b=t("SG5n"),d=t("Nfn5"),s=t("wFw1"),o=u.tb({encapsulation:2,styles:[".ts-card{display:flex;flex-flow:row nowrap}.ts-card :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-card h1,.ts-card h2,.ts-card h3,.ts-card h4,.ts-card h5,.ts-card p{margin:unset}.ts-card .c-card{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;background-color:#fafafa;position:relative;transition:height .2s;width:100%}.ts-card .c-card:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-card .c-card:not(.c-card--aspect),.ts-card .c-card:not(.c-card--interaction){align-items:stretch;display:flex;flex-direction:row;justify-content:center}.c-card .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;width:100%}.c-card .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card .c-card__inner .c-card__title-accent-border{border-left:2px solid #00538a;padding-left:8px}.c-card .c-card__inner .c-card__title-accent-border[theme=accent]{border-left-color:#2f854d}.c-card .c-card__inner .c-card__title-accent-border[theme=warn]{border-left-color:#c8604d}.c-card--interaction:not(.c-card--disabled) .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow 250ms cubic-bezier(.4,0,.2,1);cursor:pointer}.c-card--interaction:not(.c-card--disabled) .c-card__inner:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.c-card--interaction:not(.c-card--disabled) .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card--centered .c-card__inner{align-items:center;display:flex;justify-content:center}.c-card--aspect .c-card__inner{bottom:0;left:0;position:absolute;right:0;top:0}.c-card--disabled .c-card__inner{opacity:.5}.c-card--disabled .c-menu{opacity:.3;pointer-events:none}.c-card--disabled .c-card__lock{color:#999;position:absolute;right:24px;top:calc(24px - 2px);transform:scale(.7)}.c-card--right-spacing .c-card__inner{padding-right:56px}.c-card--flat>.c-card__inner{border:1px solid #cecdd1;box-shadow:none}.c-card--border-bottom.c-card--primary .c-card__inner{border-bottom:2px solid #00538a}.c-card--border-bottom.c-card--accent .c-card__inner{border-bottom:2px solid #2f854d}.c-card--border-bottom.c-card--warn .c-card__inner{border-bottom:2px solid #c8604d}.c-card--border-left.c-card--primary .c-card__inner{border-left:2px solid #00538a}.c-card--border-left.c-card--accent .c-card__inner{border-left:2px solid #2f854d}.c-card--border-left.c-card--warn .c-card__inner{border-left:2px solid #c8604d}.c-card--border-right.c-card--primary .c-card__inner{border-right:2px solid #00538a}.c-card--border-right.c-card--accent .c-card__inner{border-right:2px solid #2f854d}.c-card--border-right.c-card--warn .c-card__inner{border-right:2px solid #c8604d}.c-card--border-top.c-card--primary .c-card__inner{border-top:2px solid #00538a}.c-card--border-top.c-card--accent .c-card__inner{border-top:2px solid #2f854d}.c-card--border-top.c-card--warn .c-card__inner{border-top:2px solid #c8604d}.c-card__inner .ts-table~.ts-loading-overlay .c-loading-overlay{left:-24px;right:-24px}"],data:{}});function p(l){return u.Rb(0,[(l()(),u.vb(0,16777216,null,null,1,null,null,null,null,null,null,null)),u.ub(1,540672,null,0,r.t,[u.R],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(l()(),u.kb(0,null,null,0))],function(l,n){l(n,1,0,n.component.utilityMenuTemplate)},null)}function g(l){return u.Rb(0,[(l()(),u.vb(0,0,null,null,2,"ts-icon",[["class","c-card__lock qa-card-lock ts-icon"]],[[2,"ts-icon--inline",null],[2,"ts-icon--primary",null],[2,"ts-icon--accent",null],[2,"ts-icon--warn",null],[2,"ts-icon--background",null]],null,null,d.b,d.a)),u.ub(1,49152,null,0,b.a,[i.d,c.b],null,null),(l()(),u.Pb(-1,0,["lock_outline"]))],null,function(l,n){l(n,0,0,u.Hb(n,1).inline,"primary"===u.Hb(n,1).theme,"accent"===u.Hb(n,1).theme,"warn"===u.Hb(n,1).theme,u.Hb(n,1).background)})}function f(l){return u.Rb(2,[(l()(),u.vb(0,0,null,null,10,"div",[],[[4,"paddingTop",null],[1,"id",0]],null,null,null,null)),u.Mb(512,null,r.A,r.B,[u.t,u.u,u.k,u.F]),u.ub(2,278528,null,0,r.k,[r.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u.Kb(3,{"c-card--interaction":0,"c-card--centered":1,"c-card--aspect":2,"c-card--disabled":3,"c-card--right-spacing":4,"c-card--flat":5}),(l()(),u.vb(4,0,null,null,2,"div",[["class","c-card__inner mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),u.ub(5,212992,null,0,e.m,[u.k,u.A,a.a,[2,e.j],[2,s.a]],{disabled:[0,"disabled"]},null),u.Gb(null,0),(l()(),u.kb(16777216,null,null,1,null,p)),u.ub(8,16384,null,0,r.m,[u.R,u.N],{ngIf:[0,"ngIf"]},null),(l()(),u.kb(16777216,null,null,1,null,g)),u.ub(10,16384,null,0,r.m,[u.R,u.N],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component,r=u.zb(2,"c-card qa-card ",t.borderClass," c-card--",t.theme,""),e=l(n,3,0,t.supportsInteraction,t.centeredContent,t.aspectRatioPadding,t.isDisabled,t.utilityMenuTemplate||t.isDisabled,t.flat);l(n,2,0,r,e),l(n,5,0,!t.supportsInteraction||t.isDisabled),l(n,8,0,t.utilityMenuTemplate),l(n,10,0,t.isDisabled&&!t.utilityMenuTemplate)},function(l,n){var t=n.component;l(n,0,0,t.aspectRatioPadding,t.id),l(n,4,0,u.Hb(n,5).unbounded)})}}}]);