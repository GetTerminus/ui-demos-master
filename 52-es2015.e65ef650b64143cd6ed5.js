(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{UdpJ:function(e,n,t){"use strict";t.r(n),t.d(n,"ExpansionPanelModule",(function(){return g}));var a=t("2kYt"),i=t("2u5E"),o=t("DN/S"),s=t("Nv8/"),p=t("0Bg5"),c=t("sEIs"),l=t("EM62");function r(e,n){if(1&e){const e=l.Yb();l.Xb(0,"ts-expansion-panel",11),l.fc("opened",(function(){return l.Dc(e),l.jc().panelOpened()}))("closed",(function(){return l.Dc(e),l.jc().panelClosed()}))("expandedChange",(function(n){return l.Dc(e),l.jc().panelExpandedChange(n)}))("destroyed",(function(){return l.Dc(e),l.jc().panelDestroyed()}))("afterExpand",(function(){return l.Dc(e),l.jc().afterPanelExpanded()}))("afterCollapse",(function(){return l.Dc(e),l.jc().afterPanelCollapsed()})),l.Xb(1,"ts-expansion-panel-trigger"),l.Mc(2," Panel Trigger "),l.Wb(),l.Mc(3," And here is my standard panel content. "),l.Wb()}}function d(e,n){1&e&&l.Mc(0," Here is my deferred template! ")}const b=[{path:"",component:(()=>{class e{constructor(){this.loadPanel=!0,this.allowMultiple=!1,this.activeStep=0}panelOpened(){console.log("DEMO: Panel opened")}panelClosed(){console.log("DEMO: Panel closed")}panelExpandedChange(e){console.log("DEMO: Panel expanded state changed: ",e)}panelDestroyed(){console.log("DEMO: Panel destroyed")}afterPanelExpanded(){console.log("DEMO: Panel expand animation finished")}afterPanelCollapsed(){console.log("DEMO: Panel collapse animation finished")}nextStep(){this.activeStep++}previousStep(){this.activeStep--}setStep(e){this.activeStep=e}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l.Lb({type:e,selectors:[["demo-expansion-panel"]],decls:111,vars:9,consts:[["tsVerticalSpacing",""],["tsVerticalSpacing","",3,"ngModel","ngModelChange"],[3,"multi"],[3,"isDisabled"],[3,"opened","closed","expandedChange","destroyed","afterExpand","afterCollapse",4,"ngIf"],["collapsedHeight","100px","expandedHeight","200px"],["tsExpansionPanelContent",""],[3,"hideToggle"],[3,"isExpanded"],[3,"clicked"],["format","hollow",3,"clicked"],[3,"opened","closed","expandedChange","destroyed","afterExpand","afterCollapse"]],template:function(e,n){1&e&&(l.Xb(0,"div",0),l.Xb(1,"h3",0),l.Mc(2,"Single panel"),l.Wb(),l.Xb(3,"ts-expansion-panel"),l.Xb(4,"ts-expansion-panel-trigger"),l.Mc(5," Here is my trigger! "),l.Wb(),l.Xb(6,"p"),l.Mc(7," And here is my standard panel content. "),l.Wb(),l.Xb(8,"p"),l.Mc(9," Delectus ex maiores deleniti dolor earum minima possimus. Minima excepturi vel quos accusamus. Cupiditate cum ut iure modi. "),l.Wb(),l.Xb(10,"p"),l.Mc(11," Consequatur fugiat eius placeat tenetur consectetur labore. Laborum architecto animi. Inventore quod unde ea quae doloribus maxime. "),l.Wb(),l.Wb(),l.Wb(),l.Xb(12,"div",0),l.Xb(13,"h3",0),l.Mc(14,"Accordion"),l.Wb(),l.Xb(15,"ts-checkbox",1),l.fc("ngModelChange",(function(e){return n.allowMultiple=e})),l.Mc(16," Allow multiple panels to be open "),l.Wb(),l.Xb(17,"ts-accordion",2),l.Xb(18,"ts-expansion-panel"),l.Xb(19,"ts-expansion-panel-trigger"),l.Xb(20,"ts-expansion-panel-trigger-title"),l.Mc(21," Panel 1 "),l.Wb(),l.Xb(22,"ts-expansion-panel-trigger-description"),l.Mc(23," Quod voluptatem corporis soluta assumenda. "),l.Wb(),l.Wb(),l.Mc(24," And here is my standard panel content. "),l.Wb(),l.Xb(25,"ts-expansion-panel"),l.Xb(26,"ts-expansion-panel-trigger"),l.Xb(27,"ts-expansion-panel-trigger-title"),l.Mc(28," Panel 2 "),l.Wb(),l.Xb(29,"ts-expansion-panel-trigger-description"),l.Mc(30," Nemo magnam commodi unde. "),l.Wb(),l.Wb(),l.Mc(31," And here is my standard panel content. "),l.Wb(),l.Xb(32,"ts-expansion-panel"),l.Xb(33,"ts-expansion-panel-trigger"),l.Xb(34,"ts-expansion-panel-trigger-title"),l.Mc(35," Panel 3 "),l.Wb(),l.Xb(36,"ts-expansion-panel-trigger-description"),l.Mc(37," Quod voluptatem corporis soluta assumenda. "),l.Wb(),l.Wb(),l.Mc(38," And here is my standard panel content. "),l.Wb(),l.Wb(),l.Wb(),l.Xb(39,"div",0),l.Xb(40,"h3",0),l.Mc(41,"Accordion with a disabled panel"),l.Wb(),l.Xb(42,"ts-accordion"),l.Xb(43,"ts-expansion-panel"),l.Xb(44,"ts-expansion-panel-trigger"),l.Mc(45," Panel 1 "),l.Wb(),l.Xb(46,"p"),l.Mc(47," And here is my standard panel content. "),l.Wb(),l.Wb(),l.Xb(48,"ts-expansion-panel",3),l.Xb(49,"ts-expansion-panel-trigger"),l.Xb(50,"ts-expansion-panel-trigger-title"),l.Mc(51," Panel 2 "),l.Wb(),l.Xb(52,"ts-expansion-panel-trigger-description"),l.Mc(53," And here is the description "),l.Wb(),l.Wb(),l.Xb(54,"p"),l.Mc(55," And here is my standard panel content. "),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(56,"div",0),l.Xb(57,"h3",0),l.Mc(58,"Event emitters"),l.Wb(),l.Xb(59,"ts-checkbox",1),l.fc("ngModelChange",(function(e){return n.loadPanel=e})),l.Mc(60," Load panel (ngIf) "),l.Wb(),l.Kc(61,r,4,0,"ts-expansion-panel",4),l.Wb(),l.Xb(62,"div",0),l.Xb(63,"h3",0),l.Mc(64,"Panel with custom trigger heights"),l.Wb(),l.Xb(65,"ts-expansion-panel"),l.Xb(66,"ts-expansion-panel-trigger",5),l.Mc(67," Panel Trigger (100px -> 200px) "),l.Wb(),l.Mc(68," And here is my standard panel content. "),l.Wb(),l.Wb(),l.Xb(69,"div",0),l.Xb(70,"h3",0),l.Mc(71,"Panel with lazy loaded template"),l.Wb(),l.Xb(72,"ts-expansion-panel"),l.Xb(73,"ts-expansion-panel-trigger"),l.Mc(74," Panel Trigger "),l.Wb(),l.Kc(75,d,1,0,"ng-template",6),l.Wb(),l.Wb(),l.Xb(76,"div",0),l.Xb(77,"h3",0),l.Mc(78,"Accordion as a stepper"),l.Wb(),l.Xb(79,"ts-accordion",7),l.Xb(80,"ts-expansion-panel",8),l.Xb(81,"ts-expansion-panel-trigger"),l.Mc(82," Step 1 "),l.Wb(),l.Mc(83," And here is my standard panel content. "),l.Xb(84,"ts-expansion-panel-action-row"),l.Xb(85,"ts-button",9),l.fc("clicked",(function(){return n.nextStep()})),l.Mc(86," Next "),l.Wb(),l.Wb(),l.Wb(),l.Xb(87,"ts-expansion-panel",8),l.Xb(88,"ts-expansion-panel-trigger"),l.Xb(89,"ts-expansion-panel-trigger-title"),l.Mc(90," Step 2 "),l.Wb(),l.Xb(91,"ts-expansion-panel-trigger-description"),l.Mc(92," And here is the description "),l.Wb(),l.Wb(),l.Mc(93," And here is my standard panel content. "),l.Xb(94,"ts-expansion-panel-action-row"),l.Xb(95,"ts-button",10),l.fc("clicked",(function(){return n.previousStep()})),l.Mc(96," Previous "),l.Wb(),l.Xb(97,"ts-button",9),l.fc("clicked",(function(){return n.nextStep()})),l.Mc(98," Next "),l.Wb(),l.Wb(),l.Wb(),l.Xb(99,"ts-expansion-panel",8),l.Xb(100,"ts-expansion-panel-trigger"),l.Xb(101,"ts-expansion-panel-trigger-title"),l.Mc(102," Step 3 "),l.Wb(),l.Xb(103,"ts-expansion-panel-trigger-description"),l.Mc(104," Quod voluptatem corporis soluta assumenda. Nemo magnam commodi unde. "),l.Wb(),l.Wb(),l.Mc(105," And here is my standard panel content. "),l.Xb(106,"ts-expansion-panel-action-row"),l.Xb(107,"ts-button",10),l.fc("clicked",(function(){return n.previousStep()})),l.Mc(108," Previous "),l.Wb(),l.Xb(109,"ts-button",9),l.fc("clicked",(function(){return n.nextStep()})),l.Mc(110," End "),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb()),2&e&&(l.Db(15),l.qc("ngModel",n.allowMultiple),l.Db(2),l.qc("multi",n.allowMultiple),l.Db(31),l.qc("isDisabled",!0),l.Db(11),l.qc("ngModel",n.loadPanel),l.Db(2),l.qc("ngIf",n.loadPanel),l.Db(18),l.qc("hideToggle",!0),l.Db(1),l.qc("isExpanded",0===n.activeStep),l.Db(7),l.qc("isExpanded",1===n.activeStep),l.Db(12),l.qc("isExpanded",2===n.activeStep))},directives:[p.c,s.c,s.f,o.a,s.a,s.h,s.g,a.m,s.d,s.b,i.a],encapsulation:2}),e})()}];let u=(()=>{class e{}return e.\u0275mod=l.Pb({type:e}),e.\u0275inj=l.Ob({factory:function(n){return new(n||e)},imports:[[c.f.forChild(b)],c.f]}),e})(),g=(()=>{class e{}return e.\u0275mod=l.Pb({type:e}),e.\u0275inj=l.Ob({factory:function(n){return new(n||e)},imports:[[a.c,u,i.b,o.b,s.e,p.b]]}),e})()}}]);