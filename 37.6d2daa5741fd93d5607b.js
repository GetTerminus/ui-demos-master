(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"58Gr":function(n,t,e){"use strict";e.r(t);var i=e("CcnG"),l=function(){return function(){}}(),a=e("pMnS"),o=e("ehiB"),u=e("1xtn"),s=e("l5YW"),r=e("21Lb"),c=e("OzfB"),b=e("mrSG"),g=e("6jrj"),d=e("26FU"),m=20,f=20,p=function(){function n(n){this.changeDetectorRef=n,this.breakWidths=[],this.hiddenItems=new d.a([]),this.visibleItems=new d.a([]),this.userNameLength=m,this.welcomeMessage="Welcome",this.welcomeMsgLength=f,this.action=new i.n}return Object.defineProperty(n.prototype,"availableSpace",{get:function(){return this.visibleItemsList.nativeElement.offsetWidth-10},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"usersFullName",{get:function(){var n=!!this.user;return n&&n&&this.user.fullName.length>0?this.user.fullName:null},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"visibleItemsLength",{get:function(){return this.visibleItems.getValue().length},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"items",{set:function(n){var t=n.filter(function(n){return!n.isDisabled});this.pristineItems=t,this.setUpInitialArrays(this.pristineItems),this.generateBreakWidths(),this.updateLists()},enumerable:!0,configurable:!0}),n.prototype.onResize=function(){this.updateLists()},n.prototype.ngOnInit=function(){this.setUpInitialArrays(this.pristineItems)},n.prototype.ngAfterViewInit=function(){this.generateBreakWidths(),this.updateLists(),this.changeDetectorRef.detectChanges()},n.prototype.generateBreakWidths=function(){var n=this,t=0;this.breakWidths.length=0,this.visibleLinkElement.forEach(function(e){n.breakWidths.push(t+=e.nativeElement.offsetWidth)})},n.prototype.setUpInitialArrays=function(n){var t=this,e=n.map(function(n){var e=Object(b.__assign)({},n);return e.destination&&(e.isExternal=t.isExternalLink(e.destination)),e}),i=Object(g.c)(e,"alwaysHidden");this.visibleItems.next(i.false),this.hiddenItems.next(i.true),this.changeDetectorRef.detectChanges()},n.prototype.updateLists=function(){if(this.breakWidths[this.visibleItemsLength-1]>this.availableSpace){var n=this.visibleItems.getValue().pop(),t=this.hiddenItems.getValue();n&&t.unshift(n),this.hiddenItems.next(t),this.updateLists()}else if(this.availableSpace>this.breakWidths[this.visibleItemsLength]){n=this.hiddenItems.getValue().shift();var e=this.visibleItems.getValue();n&&e.push(n),this.visibleItems.next(e)}this.changeDetectorRef.detectChanges()},n.prototype.isExternalLink=function(n){return n.indexOf("http")>=0},n.prototype.trackByFn=function(n){return n},n}(),h=function(){return function(){}}(),v=e("NcP4"),_=e("Ip0R"),k=e("eDkP"),y=e("Fzqc"),x=e("mVsa"),w=e("iLpn"),L=e("M2Lx"),F=e("v9Dh"),H=e("ZYjt"),I=e("Wf4p"),A=e("hUWP"),N=e("3pJQ"),M=e("V9q+"),O=e("dWZg"),R=e("UodH"),C=e("4c35"),E=e("qAlS"),j=e("ZYCi"),P=e("SMsm"),$=e("SG5n"),q=e("lLAP"),S=e("Zb6y"),D=e("7TCY"),V=e("2Q+G"),K=e("bujt"),W=e("wFw1"),z=e("Nfn5"),B=i.tb({encapsulation:2,styles:[".ts-navigation{display:inline-block;flex:1 1 auto;max-width:100%;overflow:hidden}.ts-navigation :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-navigation h1,.ts-navigation h2,.ts-navigation h3,.ts-navigation h4,.ts-navigation h5,.ts-navigation p{margin:unset}.ts-navigation .c-navigation{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:500;background-color:#00538a;color:#fafafa}.c-navigation .c-navigation__items{overflow:hidden;padding-right:16px}.c-navigation .c-navigation__item{color:inherit;cursor:pointer;font-family:inherit;font-size:inherit;letter-spacing:.04em;padding:0 16px;position:relative;text-decoration:none}.c-navigation .c-navigation__item--active,.c-navigation .c-navigation__item:focus,.c-navigation .c-navigation__item:hover{outline:0}.c-navigation .c-navigation__item--active .c-navigation__item-inner::after,.c-navigation .c-navigation__item:focus .c-navigation__item-inner::after,.c-navigation .c-navigation__item:hover .c-navigation__item-inner::after{opacity:1;transition-duration:.2s}.c-navigation .c-navigation__item-inner{display:block;white-space:nowrap;width:100%}.c-navigation .c-navigation__item-inner::after{background-color:#fafafa;bottom:0;content:'';height:4px;left:50%;opacity:0;position:absolute;transform:translateX(-50%);transition:opacity .1s ease-in-out;width:calc(100% - 32px);will-change:opacity}.c-navigation .c-navigation__trigger{background-color:transparent;border:0;cursor:pointer;outline:0;text-align:center;display:block;letter-spacing:.04em;line-height:24px}.c-navigation .c-navigation__trigger:focus{outline:0}.c-navigation .c-navigation__trigger::after{background-color:rgba(250,250,250,.5);bottom:15%;content:'';height:70%;left:0;position:absolute;top:15%;width:1px}.c-navigation .c-navigation__trigger .mat-button-wrapper{display:inline-block;padding:8px 24px 8px 16px;position:relative;text-align:right}.c-navigation .c-navigation__trigger-welcome{font-weight:400}.c-navigation .c-navigation__trigger-icon{position:absolute;right:0;transform:translateY(1px)}.c-navigation__hidden-items{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;position:relative}.c-navigation__hidden-items:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.c-navigation__hidden-items.mat-menu-panel{border-top-left-radius:0;border-top-right-radius:0}.c-navigation__hidden-items .mat-menu-content{background-color:#00538a;padding:0}.c-navigation__hidden-items .mat-menu-content .mat-menu-item{color:#fafafa}.c-navigation__hidden-items .c-navigation__hidden-item--admin{background-color:#0c4271}.c-navigation__hidden-items .c-navigation__hidden-item--admin.mat-menu-item{color:#cecdd1}.c-navigation__hidden-items .c-navigation__hidden-item:not(.c-navigation__hidden-item--admin)+.c-navigation__hidden-item--admin::before{background-color:#1666b1;content:'';display:block;height:1px;left:0;opacity:.6;position:absolute;right:0;top:0}"],data:{}});function T(n){return i.Rb(0,[(n()(),i.vb(0,0,[[2,0],["visibleLinkElement",1]],null,9,"a",[["class","c-navigation__item qa-navigation-item"],["fxLayout","row"],["fxLayoutAlign","center center"],["routerLinkActive","c-navigation__item--active"],["tabindex","0"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==i.Hb(n,3).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&l),l},null,null)),i.ub(1,671744,null,0,r.d,[i.k,c.i,[2,r.m],c.f],{fxLayout:[0,"fxLayout"]},null),i.ub(2,671744,null,0,r.c,[i.k,c.i,[2,r.k],c.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),i.ub(3,671744,[[4,4]],0,j.o,[j.l,j.a,_.j],{routerLink:[0,"routerLink"]},null),i.ub(4,1720320,null,2,j.n,[j.l,i.k,i.F,[2,j.m],[2,j.o]],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),i.Nb(603979776,3,{links:1}),i.Nb(603979776,4,{linksWithHrefs:1}),i.Kb(7,{exact:0}),(n()(),i.vb(8,0,null,null,1,"span",[["class","c-navigation__item-inner"]],null,null,null,null,null)),(n()(),i.Pb(9,null,[" "," "]))],function(n,t){n(t,1,0,"row"),n(t,2,0,"center center"),n(t,3,0,i.zb(1,"",t.parent.context.$implicit.destination,""));var e=n(t,7,0,!0);n(t,4,0,e,"c-navigation__item--active")},function(n,t){n(t,0,0,i.Hb(t,3).target,i.Hb(t,3).href),n(t,9,0,t.parent.context.$implicit.name)})}function G(n){return i.Rb(0,[(n()(),i.vb(0,0,[[2,0],["visibleLinkElement",1]],null,4,"a",[["class","c-navigation__item qa-navigation-item"],["fxLayout","row"],["fxLayoutAlign","center center"],["tabindex","0"]],[[8,"href",4]],null,null,null,null)),i.ub(1,671744,null,0,r.d,[i.k,c.i,[2,r.m],c.f],{fxLayout:[0,"fxLayout"]},null),i.ub(2,671744,null,0,r.c,[i.k,c.i,[2,r.k],c.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(n()(),i.vb(3,0,null,null,1,"span",[["class","c-navigation__item-inner"]],null,null,null,null,null)),(n()(),i.Pb(4,null,[" "," "]))],function(n,t){n(t,1,0,"row"),n(t,2,0,"center center")},function(n,t){n(t,0,0,i.zb(1,"",t.parent.context.$implicit.destination,"")),n(t,4,0,t.parent.context.$implicit.name)})}function U(n){return i.Rb(0,[(n()(),i.vb(0,0,[[2,0],["visibleLinkElement",1]],null,4,"a",[["class","c-navigation__item qa-navigation-item"],["fxLayout","row"],["fxLayoutAlign","center center"],["tabindex","0"]],null,[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.action.emit({event:e,action:n.parent.context.$implicit.action})&&i),i},null,null)),i.ub(1,671744,null,0,r.d,[i.k,c.i,[2,r.m],c.f],{fxLayout:[0,"fxLayout"]},null),i.ub(2,671744,null,0,r.c,[i.k,c.i,[2,r.k],c.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(n()(),i.vb(3,0,null,null,1,"span",[["class","c-navigation__item-inner"]],null,null,null,null,null)),(n()(),i.Pb(4,null,[" "," "]))],function(n,t){n(t,1,0,"row"),n(t,2,0,"center center")},function(n,t){n(t,4,0,t.parent.context.$implicit.name)})}function Z(n){return i.Rb(0,[(n()(),i.vb(0,0,null,null,6,null,null,null,null,null,null,null)),(n()(),i.kb(16777216,null,null,1,null,T)),i.ub(2,16384,null,0,_.m,[i.R,i.N],{ngIf:[0,"ngIf"]},null),(n()(),i.kb(16777216,null,null,1,null,G)),i.ub(4,16384,null,0,_.m,[i.R,i.N],{ngIf:[0,"ngIf"]},null),(n()(),i.kb(16777216,null,null,1,null,U)),i.ub(6,16384,null,0,_.m,[i.R,i.N],{ngIf:[0,"ngIf"]},null),(n()(),i.kb(0,null,null,0))],function(n,t){n(t,2,0,t.context.$implicit.destination&&!t.context.$implicit.isExternal),n(t,4,0,t.context.$implicit.destination&&t.context.$implicit.isExternal),n(t,6,0,!t.context.$implicit.destination)},null)}function J(n){return i.Rb(0,[(n()(),i.vb(0,0,null,null,4,"span",[["class","c-navigation__trigger-welcome"]],null,null,null,null,null)),(n()(),i.vb(1,0,null,null,3,"ts-tooltip",[["class","ts-tooltip"]],null,null,null,D.b,D.a)),i.ub(2,49152,null,0,S.a,[],{tooltipValue:[0,"tooltipValue"]},null),(n()(),i.Pb(3,0,[" "," "])),i.Lb(4,2)],function(n,t){n(t,2,0,t.component.welcomeMessage)},function(n,t){var e=t.component,l=i.Qb(t,3,0,n(t,4,0,i.Hb(t.parent,0),e.welcomeMessage,e.welcomeMsgLength));n(t,3,0,l)})}function Q(n){return i.Rb(0,[(n()(),i.vb(0,0,null,null,1,"span",[["class","c-navigation__trigger-welcome"]],null,null,null,null,null)),(n()(),i.Pb(1,null,[" "," "]))],null,function(n,t){n(t,1,0,t.component.welcomeMessage)})}function Y(n){return i.Rb(0,[(n()(),i.vb(0,0,null,null,0,"br",[],null,null,null,null,null))],null,null)}function X(n){return i.Rb(0,[(n()(),i.vb(0,0,null,null,4,"span",[],null,null,null,null,null)),(n()(),i.vb(1,0,null,null,3,"ts-tooltip",[["class","ts-tooltip"]],null,null,null,D.b,D.a)),i.ub(2,49152,null,0,S.a,[],{tooltipValue:[0,"tooltipValue"]},null),(n()(),i.Pb(3,0,[" "," "])),i.Lb(4,2)],function(n,t){n(t,2,0,t.component.usersFullName)},function(n,t){var e=t.component,l=i.Qb(t,3,0,n(t,4,0,i.Hb(t.parent,0),e.usersFullName,e.userNameLength));n(t,3,0,l)})}function nn(n){return i.Rb(0,[(n()(),i.vb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),i.Pb(1,null,[" "," "]))],null,function(n,t){n(t,1,0,t.component.usersFullName)})}function tn(n){return i.Rb(0,[(n()(),i.vb(0,0,null,null,8,"a",[["class","c-navigation__hidden-item qa-navigation-secondary-item mat-menu-item"],["mat-menu-item",""]],[[1,"role",0],[2,"mat-menu-item-highlighted",null],[2,"mat-menu-item-submenu-trigger",null],[1,"tabindex",0],[1,"aria-disabled",0],[1,"disabled",0],[1,"target",0],[8,"href",4]],[[null,"click"],[null,"mouseenter"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==i.Hb(n,6)._checkDisabled(e)&&l),"mouseenter"===t&&(l=!1!==i.Hb(n,6)._handleMouseEnter()&&l),"click"===t&&(l=!1!==i.Hb(n,7).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&l),l},V.c,V.a)),i.Mb(512,null,_.A,_.B,[i.t,i.u,i.k,i.F]),i.ub(2,278528,null,0,_.k,[_.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i.Kb(3,{"c-navigation__hidden-item--admin":0}),i.ub(4,933888,null,0,A.a,[i.k,c.i,c.f,_.A,[6,_.k]],{ngClass:[0,"ngClass"],klass:[1,"klass"]},null),i.Kb(5,{"c-navigation__hidden-item--admin":0}),i.ub(6,180224,[[5,4],[6,4],["hiddenLinkElement",4]],0,x.e,[i.k,_.d,q.h,[2,x.b]],null,null),i.ub(7,671744,null,0,j.o,[j.l,j.a,_.j],{routerLink:[0,"routerLink"]},null),(n()(),i.Pb(8,0,[" "," "]))],function(n,t){var e=n(t,3,0,t.parent.context.$implicit.alwaysHidden);n(t,2,0,"c-navigation__hidden-item qa-navigation-secondary-item",e);var l=n(t,5,0,t.parent.context.$implicit.alwaysHidden);n(t,4,0,l,"c-navigation__hidden-item qa-navigation-secondary-item"),n(t,7,0,i.zb(1,"",t.parent.context.$implicit.destination,""))},function(n,t){n(t,0,0,i.Hb(t,6).role,i.Hb(t,6)._highlighted,i.Hb(t,6)._triggersSubmenu,i.Hb(t,6)._getTabIndex(),i.Hb(t,6).disabled.toString(),i.Hb(t,6).disabled||null,i.Hb(t,7).target,i.Hb(t,7).href),n(t,8,0,t.parent.context.$implicit.name)})}function en(n){return i.Rb(0,[(n()(),i.vb(0,0,null,null,7,"a",[["class","c-navigation__hidden-item qa-navigation-secondary-item mat-menu-item"],["mat-menu-item",""]],[[8,"href",4],[1,"role",0],[2,"mat-menu-item-highlighted",null],[2,"mat-menu-item-submenu-trigger",null],[1,"tabindex",0],[1,"aria-disabled",0],[1,"disabled",0]],[[null,"click"],[null,"mouseenter"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==i.Hb(n,6)._checkDisabled(e)&&l),"mouseenter"===t&&(l=!1!==i.Hb(n,6)._handleMouseEnter()&&l),l},V.c,V.a)),i.Mb(512,null,_.A,_.B,[i.t,i.u,i.k,i.F]),i.ub(2,278528,null,0,_.k,[_.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i.Kb(3,{"c-navigation__hidden-item--admin":0}),i.ub(4,933888,null,0,A.a,[i.k,c.i,c.f,_.A,[6,_.k]],{ngClass:[0,"ngClass"],klass:[1,"klass"]},null),i.Kb(5,{"c-navigation__hidden-item--admin":0}),i.ub(6,180224,[[5,4],[6,4],["hiddenLinkElement",4]],0,x.e,[i.k,_.d,q.h,[2,x.b]],null,null),(n()(),i.Pb(7,0,[" "," "]))],function(n,t){var e=n(t,3,0,t.parent.context.$implicit.alwaysHidden);n(t,2,0,"c-navigation__hidden-item qa-navigation-secondary-item",e);var i=n(t,5,0,t.parent.context.$implicit.alwaysHidden);n(t,4,0,i,"c-navigation__hidden-item qa-navigation-secondary-item")},function(n,t){n(t,0,0,i.zb(1,"",t.parent.context.$implicit.destination,""),i.Hb(t,6).role,i.Hb(t,6)._highlighted,i.Hb(t,6)._triggersSubmenu,i.Hb(t,6)._getTabIndex(),i.Hb(t,6).disabled.toString(),i.Hb(t,6).disabled||null),n(t,7,0,t.parent.context.$implicit.name)})}function ln(n){return i.Rb(0,[(n()(),i.vb(0,0,null,null,7,"a",[["class","c-navigation__hidden-item qa-navigation-secondary-item mat-menu-item"],["mat-menu-item",""]],[[1,"role",0],[2,"mat-menu-item-highlighted",null],[2,"mat-menu-item-submenu-trigger",null],[1,"tabindex",0],[1,"aria-disabled",0],[1,"disabled",0]],[[null,"click"],[null,"mouseenter"]],function(n,t,e){var l=!0,a=n.component;return"click"===t&&(l=!1!==i.Hb(n,6)._checkDisabled(e)&&l),"mouseenter"===t&&(l=!1!==i.Hb(n,6)._handleMouseEnter()&&l),"click"===t&&(l=!1!==a.action.emit({event:e,action:n.parent.context.$implicit.action})&&l),l},V.c,V.a)),i.Mb(512,null,_.A,_.B,[i.t,i.u,i.k,i.F]),i.ub(2,278528,null,0,_.k,[_.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i.Kb(3,{"c-navigation__hidden-item--admin":0}),i.ub(4,933888,null,0,A.a,[i.k,c.i,c.f,_.A,[6,_.k]],{ngClass:[0,"ngClass"],klass:[1,"klass"]},null),i.Kb(5,{"c-navigation__hidden-item--admin":0}),i.ub(6,180224,[[5,4],[6,4],["hiddenLinkElement",4]],0,x.e,[i.k,_.d,q.h,[2,x.b]],null,null),(n()(),i.Pb(7,0,[" "," "]))],function(n,t){var e=n(t,3,0,t.parent.context.$implicit.alwaysHidden);n(t,2,0,"c-navigation__hidden-item qa-navigation-secondary-item",e);var i=n(t,5,0,t.parent.context.$implicit.alwaysHidden);n(t,4,0,i,"c-navigation__hidden-item qa-navigation-secondary-item")},function(n,t){n(t,0,0,i.Hb(t,6).role,i.Hb(t,6)._highlighted,i.Hb(t,6)._triggersSubmenu,i.Hb(t,6)._getTabIndex(),i.Hb(t,6).disabled.toString(),i.Hb(t,6).disabled||null),n(t,7,0,t.parent.context.$implicit.name)})}function an(n){return i.Rb(0,[(n()(),i.vb(0,0,null,null,6,null,null,null,null,null,null,null)),(n()(),i.kb(16777216,null,null,1,null,tn)),i.ub(2,16384,null,0,_.m,[i.R,i.N],{ngIf:[0,"ngIf"]},null),(n()(),i.kb(16777216,null,null,1,null,en)),i.ub(4,16384,null,0,_.m,[i.R,i.N],{ngIf:[0,"ngIf"]},null),(n()(),i.kb(16777216,null,null,1,null,ln)),i.ub(6,16384,null,0,_.m,[i.R,i.N],{ngIf:[0,"ngIf"]},null),(n()(),i.kb(0,null,null,0))],function(n,t){n(t,2,0,t.context.$implicit.destination&&!t.context.$implicit.isExternal),n(t,4,0,t.context.$implicit.destination&&t.context.$implicit.isExternal),n(t,6,0,!t.context.$implicit.destination)},null)}function on(n){return i.Rb(2,[i.Jb(0,w.g,[]),i.Nb(402653184,1,{visibleItemsList:0}),i.Nb(671088640,2,{visibleLinkElement:1}),(n()(),i.vb(3,0,null,null,40,"nav",[["class","c-navigation t-dark qa-navigation"],["fxLayout","row"]],null,null,null,null,null)),i.ub(4,671744,null,0,r.d,[i.k,c.i,[2,r.m],c.f],{fxLayout:[0,"fxLayout"]},null),(n()(),i.vb(5,0,[[1,0],["visibleItemsList",1]],null,6,"div",[["class","c-navigation__items qa-navigation-items"],["fxFlex","1 1 auto"],["fxLayout","row"],["fxLayoutAlign","end stretch"]],null,null,null,null,null)),i.ub(6,671744,null,0,r.d,[i.k,c.i,[2,r.m],c.f],{fxLayout:[0,"fxLayout"]},null),i.ub(7,671744,null,0,r.c,[i.k,c.i,[2,r.k],c.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),i.ub(8,671744,null,0,r.b,[i.k,c.i,c.e,r.j,c.f],{fxFlex:[0,"fxFlex"]},null),(n()(),i.kb(16777216,null,null,2,null,Z)),i.ub(10,278528,null,0,_.l,[i.R,i.N,i.t],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),i.Jb(131072,_.b,[i.h]),(n()(),i.vb(12,16777216,null,null,21,"button",[["aria-haspopup","true"],["class","c-navigation__trigger qa-navigation-secondary-trigger mat-menu-trigger"],["fxFlex","none"],["mat-button",""],["tabindex","0"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[1,"aria-expanded",0]],[[null,"mousedown"],[null,"keydown"],[null,"click"]],function(n,t,e){var l=!0;return"mousedown"===t&&(l=!1!==i.Hb(n,20)._handleMousedown(e)&&l),"keydown"===t&&(l=!1!==i.Hb(n,20)._handleKeydown(e)&&l),"click"===t&&(l=!1!==i.Hb(n,20)._handleClick(e)&&l),l},K.b,K.a)),i.Mb(512,null,_.A,_.B,[i.t,i.u,i.k,i.F]),i.ub(14,278528,null,0,_.k,[_.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i.Kb(15,{"c-navigation__trigger--separator":0}),i.ub(16,671744,null,0,r.b,[i.k,c.i,c.e,r.j,c.f],{fxFlex:[0,"fxFlex"]},null),i.ub(17,933888,null,0,A.a,[i.k,c.i,c.f,_.A,[6,_.k]],{ngClass:[0,"ngClass"],klass:[1,"klass"]},null),i.Kb(18,{"c-navigation__trigger--separator":0}),i.ub(19,180224,null,0,R.b,[i.k,q.h,[2,W.a]],null,null),i.ub(20,1196032,null,0,x.g,[k.c,i.k,i.R,x.c,[2,x.d],[8,null],[2,y.b],q.h],{menu:[0,"menu"]},null),(n()(),i.kb(16777216,null,0,1,null,J)),i.ub(22,16384,null,0,_.m,[i.R,i.N],{ngIf:[0,"ngIf"]},null),(n()(),i.kb(16777216,null,0,1,null,Q)),i.ub(24,16384,null,0,_.m,[i.R,i.N],{ngIf:[0,"ngIf"]},null),(n()(),i.kb(16777216,null,0,1,null,Y)),i.ub(26,16384,null,0,_.m,[i.R,i.N],{ngIf:[0,"ngIf"]},null),(n()(),i.kb(16777216,null,0,1,null,X)),i.ub(28,16384,null,0,_.m,[i.R,i.N],{ngIf:[0,"ngIf"]},null),(n()(),i.kb(16777216,null,0,1,null,nn)),i.ub(30,16384,null,0,_.m,[i.R,i.N],{ngIf:[0,"ngIf"]},null),(n()(),i.vb(31,0,null,0,2,"ts-icon",[["class","c-navigation__trigger-icon ts-icon"]],[[2,"ts-icon--inline",null],[2,"ts-icon--primary",null],[2,"ts-icon--accent",null],[2,"ts-icon--warn",null],[2,"ts-icon--background",null]],null,null,z.b,z.a)),i.ub(32,49152,null,0,$.a,[P.d,H.b],null,null),(n()(),i.Pb(-1,0,[" keyboard_arrow_down "])),(n()(),i.vb(34,0,null,null,9,"mat-menu",[["class","c-navigation__hidden-items qa-navigation-secondary-items"],["xPosition","before"]],null,null,null,V.d,V.b)),i.Mb(6144,null,x.d,null,[x.h]),i.Mb(6144,null,x.b,null,[x.d]),i.ub(37,1294336,[["secondaryNav",4]],3,x.h,[i.k,i.A,x.a],{xPosition:[0,"xPosition"],overlapTrigger:[1,"overlapTrigger"],panelClass:[2,"panelClass"]},null),i.Nb(603979776,5,{_allItems:1}),i.Nb(603979776,6,{items:1}),i.Nb(603979776,7,{lazyContent:0}),(n()(),i.kb(16777216,null,0,2,null,an)),i.ub(42,278528,null,0,_.l,[i.R,i.N,i.t],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),i.Jb(131072,_.b,[i.h])],function(n,t){var e=t.component;n(t,4,0,"row"),n(t,6,0,"row"),n(t,7,0,"end stretch"),n(t,8,0,"1 1 auto"),n(t,10,0,i.Qb(t,10,0,i.Hb(t,11).transform(e.visibleItems)),e.trackByFn);var l=n(t,15,0,e.visibleItemsLength);n(t,14,0,"c-navigation__trigger qa-navigation-secondary-trigger",l),n(t,16,0,"none");var a=n(t,18,0,e.visibleItemsLength);n(t,17,0,a,"c-navigation__trigger qa-navigation-secondary-trigger"),n(t,20,0,i.Hb(t,37)),n(t,22,0,e.welcomeMessage.length>e.welcomeMsgLength),n(t,24,0,e.welcomeMessage.length<=e.welcomeMsgLength),n(t,26,0,e.usersFullName),n(t,28,0,e.usersFullName&&e.usersFullName.length>e.userNameLength),n(t,30,0,e.usersFullName&&e.usersFullName.length<=e.userNameLength),n(t,37,0,"before",!1,"c-navigation__hidden-items qa-navigation-secondary-items"),n(t,42,0,i.Qb(t,42,0,i.Hb(t,43).transform(e.hiddenItems)),e.trackByFn)},function(n,t){n(t,12,0,i.Hb(t,19).disabled||null,"NoopAnimations"===i.Hb(t,19)._animationMode,i.Hb(t,20).menuOpen||null),n(t,31,0,i.Hb(t,32).inline,"primary"===i.Hb(t,32).theme,"accent"===i.Hb(t,32).theme,"warn"===i.Hb(t,32).theme,i.Hb(t,32).background)})}var un=e("F/XL"),sn=[{name:"1 Components",destination:"/components",alwaysHidden:!1},{name:"2 Nav",destination:"/components/navigation",alwaysHidden:!1},{name:"3 Buttons",destination:["/components/button"],alwaysHidden:!1},{name:"4 Action",action:{type:"Do:thing"},alwaysHidden:!1},{name:"5 Menus",destination:["/components/menu"],alwaysHidden:!1},{name:"7 External",destination:"https://google.com",alwaysHidden:!0},{name:"8 Hidden",action:{type:"Do:another:thing"},alwaysHidden:!0}],rn={name:"0 Foo",action:{type:"my:action"},alwaysHidden:!1},cn=function(){function n(){this.currentUser$=Object(un.a)({id:1,email:"max@roadwarrior.com",firstname:"Max",lastname:"Rockatansky",fullName:"Max Rockatansky"}),this.navigationItems$=Object(un.a)(sn),this.myMessage="Hello, this message is 37 characters."}return n.prototype.triggerAction=function(n){console.log("DEMO: triggerAction: ",n),n.event.metaKey?console.log("DEMO: meta key was used"):console.log("DEMO: meta key was NOT used")},n.prototype.updateNav=function(){var n=sn.slice(0);n.unshift(rn),this.navigationItems$=Object(un.a)(n)},n}(),bn=i.tb({encapsulation:0,styles:[[".outer[_ngcontent-%COMP%]{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background-color:#00538a}.outer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fafafa;padding:0 1rem}a[_ngcontent-%COMP%]{display:inline-block;padding:8px}"]],data:{}});function gn(n){return i.Rb(0,[(n()(),i.vb(0,0,null,null,8,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,o.b,o.a)),i.ub(1,49152,null,0,u.a,[],null,null),i.ub(2,16384,null,0,s.c,[i.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),i.vb(3,0,null,0,3,"h3",[["tsCardTitle",""],["tsVerticalSpacing",""]],[[8,"className",0]],null,null,null,null)),i.ub(4,16384,null,0,u.c,[[3,u.a]],null,null),i.ub(5,16384,null,0,s.c,[i.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),i.Pb(-1,null,[" Demo Controls "])),(n()(),i.vb(7,0,null,0,1,"button",[],null,[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.updateNav()&&i),i},null,null)),(n()(),i.Pb(-1,null,["Update Nav"])),(n()(),i.vb(9,0,null,null,12,"div",[["class","outer"],["fxLayout","row"],["fxLayoutAlign","space-between stretch"]],null,null,null,null,null)),i.ub(10,671744,null,0,r.d,[i.k,c.i,[2,r.m],c.f],{fxLayout:[0,"fxLayout"]},null),i.ub(11,671744,null,0,r.c,[i.k,c.i,[2,r.k],c.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(n()(),i.vb(12,0,null,null,5,"div",[["fxFlex","none"],["fxLayout","row"],["fxLayoutAlign","center center"]],null,null,null,null,null)),i.ub(13,671744,null,0,r.d,[i.k,c.i,[2,r.m],c.f],{fxLayout:[0,"fxLayout"]},null),i.ub(14,671744,null,0,r.c,[i.k,c.i,[2,r.k],c.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),i.ub(15,671744,null,0,r.b,[i.k,c.i,c.e,r.j,c.f],{fxFlex:[0,"fxFlex"]},null),(n()(),i.vb(16,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),i.Pb(-1,null,[" Logo "])),(n()(),i.vb(18,0,null,null,3,"ts-navigation",[["class","ts-navigation"],["userNameLength","10"],["welcomeMsgLength","30"]],null,[[null,"action"],["window","resize"]],function(n,t,e){var l=!0,a=n.component;return"window:resize"===t&&(l=!1!==i.Hb(n,19).onResize()&&l),"action"===t&&(l=!1!==a.triggerAction(e)&&l),l},on,B)),i.ub(19,4308992,null,0,p,[i.h],{items:[0,"items"],user:[1,"user"],userNameLength:[2,"userNameLength"],welcomeMessage:[3,"welcomeMessage"],welcomeMsgLength:[4,"welcomeMsgLength"]},{action:"action"}),i.Jb(131072,_.b,[i.h]),i.Jb(131072,_.b,[i.h])],function(n,t){var e=t.component;n(t,2,0,""),n(t,5,0,""),n(t,10,0,"row"),n(t,11,0,"space-between stretch"),n(t,13,0,"row"),n(t,14,0,"center center"),n(t,15,0,"none"),n(t,19,0,i.Qb(t,19,0,i.Hb(t,20).transform(e.navigationItems$)),i.Qb(t,19,1,i.Hb(t,21).transform(e.currentUser$)),"10",e.myMessage,"30")},function(n,t){n(t,3,0,i.Hb(t,4).tsCardTitle)})}function dn(n){return i.Rb(0,[(n()(),i.vb(0,0,null,null,1,"demo-navigation",[],null,null,null,gn,bn)),i.ub(1,49152,null,0,cn,[],null,null)],null,null)}var mn=i.rb("demo-navigation",cn,dn,{},{},[]),fn=function(){return function(){}}();e.d(t,"NavigationModuleNgFactory",function(){return pn});var pn=i.sb(l,[],function(n){return i.Eb([i.Fb(512,i.j,i.db,[[8,[a.a,mn,v.a]],[3,i.j],i.y]),i.Fb(4608,_.o,_.n,[i.v,[2,_.F]]),i.Fb(5120,i.b,function(n,t){return[c.j(n,t)]},[_.d,i.C]),i.Fb(4608,k.c,k.c,[k.i,k.e,i.j,k.h,k.f,i.r,i.A,_.d,y.b,[2,_.i]]),i.Fb(5120,k.j,k.k,[k.c]),i.Fb(5120,x.c,x.j,[k.c]),i.Fb(4608,w.a,w.a,[]),i.Fb(4608,w.c,w.c,[]),i.Fb(4608,w.d,w.d,[]),i.Fb(4608,w.e,w.e,[]),i.Fb(4608,w.f,w.f,[]),i.Fb(4608,w.g,w.g,[]),i.Fb(4608,L.c,L.c,[]),i.Fb(5120,F.b,F.c,[k.c]),i.Fb(4608,H.e,I.e,[[2,I.i],[2,I.k]]),i.Fb(1073742336,_.c,_.c,[]),i.Fb(1073742336,c.c,c.c,[]),i.Fb(1073742336,y.a,y.a,[]),i.Fb(1073742336,r.i,r.i,[]),i.Fb(1073742336,A.b,A.b,[]),i.Fb(1073742336,N.a,N.a,[]),i.Fb(1073742336,M.a,M.a,[[2,c.g],i.C]),i.Fb(1073742336,j.p,j.p,[[2,j.u],[2,j.l]]),i.Fb(1073742336,fn,fn,[]),i.Fb(1073742336,I.k,I.k,[[2,I.f],[2,H.f]]),i.Fb(1073742336,O.b,O.b,[]),i.Fb(1073742336,I.n,I.n,[]),i.Fb(1073742336,P.c,P.c,[]),i.Fb(1073742336,$.b,$.b,[]),i.Fb(1073742336,u.b,u.b,[]),i.Fb(1073742336,R.c,R.c,[]),i.Fb(1073742336,C.g,C.g,[]),i.Fb(1073742336,E.b,E.b,[]),i.Fb(1073742336,k.g,k.g,[]),i.Fb(1073742336,x.i,x.i,[]),i.Fb(1073742336,x.f,x.f,[]),i.Fb(1073742336,w.b,w.b,[]),i.Fb(1073742336,L.d,L.d,[]),i.Fb(1073742336,q.a,q.a,[]),i.Fb(1073742336,F.e,F.e,[]),i.Fb(1073742336,S.b,S.b,[]),i.Fb(1073742336,h,h,[]),i.Fb(1073742336,s.b,s.b,[]),i.Fb(1073742336,l,l,[]),i.Fb(1024,j.j,function(){return[[{path:"",component:cn}]]},[])])})},"7TCY":function(n,t,e){"use strict";e.d(t,"a",function(){return g}),e.d(t,"b",function(){return d});var i=e("CcnG"),l=(e("Zb6y"),e("NcP4"),e("Ip0R")),a=(e("M2Lx"),e("eDkP")),o=e("Fzqc"),u=e("v9Dh"),s=e("ZYjt"),r=(e("Wf4p"),e("dWZg")),c=e("lLAP"),b=(e("4c35"),e("qAlS")),g=i.tb({encapsulation:2,styles:[".ts-tooltip{display:inline-block}.ts-tooltip :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-tooltip h1,.ts-tooltip h2,.ts-tooltip h3,.ts-tooltip h4,.ts-tooltip h5,.ts-tooltip p{margin:unset}.c-tooltip--underline{border-bottom:.1em dotted;border-color:inherit;cursor:help}.mat-tooltip-panel .mat-tooltip{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;letter-spacing:.02em;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);background-color:#fafafa;color:#302d35;overflow-wrap:break-word;white-space:normal}"],data:{}});function d(n){return i.Rb(2,[i.Nb(402653184,1,{matTooltip:0}),(n()(),i.vb(1,16777216,null,null,5,"span",[["class","c-tooltip qa-tooltip"]],null,[[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(n,t,e){var l=!0;return"longpress"===t&&(l=!1!==i.Hb(n,5).show()&&l),"keydown"===t&&(l=!1!==i.Hb(n,5)._handleKeydown(e)&&l),"touchend"===t&&(l=!1!==i.Hb(n,5)._handleTouchend()&&l),l},null,null)),i.Mb(512,null,l.A,l.B,[i.t,i.u,i.k,i.F]),i.ub(3,278528,null,0,l.k,[l.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i.Kb(4,{"c-tooltip--underline":0}),i.ub(5,212992,[[1,4],["tooltip",4]],0,u.d,[a.c,i.k,b.a,i.R,i.A,r.a,c.c,c.h,u.b,[2,o.b],[2,u.a],[2,s.f]],{position:[0,"position"],message:[1,"message"]},null),i.Gb(null,0)],function(n,t){var e=t.component,i=n(t,4,0,e.hasUnderline);n(t,3,0,"c-tooltip qa-tooltip",i),n(t,5,0,e.tooltipPosition,e.tooltipValue)},null)}},M2Lx:function(n,t,e){"use strict";e.d(t,"c",function(){return s}),e.d(t,"b",function(){return r}),e.d(t,"a",function(){return c}),e.d(t,"d",function(){return b});var i=e("n6gG"),l=e("CcnG"),a=e("6blF"),o=e("K9Ia"),u=e("Gi3i"),s=function(){function n(){}return n.prototype.create=function(n){return"undefined"==typeof MutationObserver?null:new MutationObserver(n)},n.ngInjectableDef=Object(l.Vb)({factory:function(){return new n},token:n,providedIn:"root"}),n}(),r=function(){function n(n){this._mutationObserverFactory=n,this._observedElements=new Map}return n.prototype.ngOnDestroy=function(){var n=this;this._observedElements.forEach(function(t,e){return n._cleanupObserver(e)})},n.prototype.observe=function(n){var t=this,e=Object(i.d)(n);return new a.a(function(n){var i=t._observeElement(e).subscribe(n);return function(){i.unsubscribe(),t._unobserveElement(e)}})},n.prototype._observeElement=function(n){if(this._observedElements.has(n))this._observedElements.get(n).count++;else{var t=new o.a,e=this._mutationObserverFactory.create(function(n){return t.next(n)});e&&e.observe(n,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(n,{observer:e,stream:t,count:1})}return this._observedElements.get(n).stream},n.prototype._unobserveElement=function(n){this._observedElements.has(n)&&(this._observedElements.get(n).count--,this._observedElements.get(n).count||this._cleanupObserver(n))},n.prototype._cleanupObserver=function(n){if(this._observedElements.has(n)){var t=this._observedElements.get(n),e=t.observer,i=t.stream;e&&e.disconnect(),i.complete(),this._observedElements.delete(n)}},n.ngInjectableDef=Object(l.Vb)({factory:function(){return new n(Object(l.Wb)(s))},token:n,providedIn:"root"}),n}(),c=function(){function n(n,t,e){this._contentObserver=n,this._elementRef=t,this._ngZone=e,this.event=new l.n,this._disabled=!1,this._currentSubscription=null}return Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(n){this._disabled=Object(i.b)(n),this._disabled?this._unsubscribe():this._subscribe()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"debounce",{get:function(){return this._debounce},set:function(n){this._debounce=Object(i.e)(n),this._subscribe()},enumerable:!0,configurable:!0}),n.prototype.ngAfterContentInit=function(){this._currentSubscription||this.disabled||this._subscribe()},n.prototype.ngOnDestroy=function(){this._unsubscribe()},n.prototype._subscribe=function(){var n=this;this._unsubscribe();var t=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(function(){n._currentSubscription=(n.debounce?t.pipe(Object(u.a)(n.debounce)):t).subscribe(n.event)})},n.prototype._unsubscribe=function(){this._currentSubscription&&this._currentSubscription.unsubscribe()},n}(),b=function(){return function(){}}()}}]);