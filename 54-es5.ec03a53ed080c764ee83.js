function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{B6KP:function(e,t,o){"use strict";o.r(t),o.d(t,"PopoverModule",(function(){return Re}));var n=o("2kYt"),r=o("nIj0"),i=o("6VlH"),p=o("EM62"),a=o("h9lW"),s=o("HRj5"),f=o("UkLp"),c=o("KTx3"),l=o("xVbo"),d="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,u=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(d&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}(),h=d&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),u))}};function m(e){return e&&"[object Function]"==={}.toString.call(e)}function v(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?o[t]:o}function g(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function b(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=v(e);return/(auto|scroll|overlay)/.test(t.overflow+t.overflowY+t.overflowX)?e:b(g(e))}function w(e){return e&&e.referenceNode?e.referenceNode:e}var y=d&&!(!window.MSInputMethodContext||!document.documentMode),O=d&&/MSIE 10/.test(navigator.userAgent);function x(e){return 11===e?y:10===e?O:y||O}function C(e){if(!e)return document.documentElement;for(var t=x(10)?document.body:null,o=e.offsetParent||null;o===t&&e.nextElementSibling;)o=(e=e.nextElementSibling).offsetParent;var n=o&&o.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TH","TD","TABLE"].indexOf(o.nodeName)&&"static"===v(o,"position")?C(o):o:e?e.ownerDocument.documentElement:document.documentElement}function E(e){return null!==e.parentNode?E(e.parentNode):e}function k(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,r=o?t:e,i=document.createRange();i.setStart(n,0),i.setEnd(r,0);var p,a,s=i.commonAncestorContainer;if(e!==s&&t!==s||n.contains(r))return"BODY"===(a=(p=s).nodeName)||"HTML"!==a&&C(p.firstElementChild)!==p?C(s):s;var f=E(e);return f.host?k(f.host,t):k(e,E(t).host)}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",o="top"===t?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var r=e.ownerDocument.documentElement,i=e.ownerDocument.scrollingElement||r;return i[o]}return e[o]}function T(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=_(t,"top"),r=_(t,"left"),i=o?-1:1;return e.top+=n*i,e.bottom+=n*i,e.left+=r*i,e.right+=r*i,e}function L(e,t){var o="x"===t?"Left":"Top",n="Left"===o?"Right":"Bottom";return parseFloat(e["border"+o+"Width"])+parseFloat(e["border"+n+"Width"])}function M(e,t,o,n){return Math.max(t["offset"+e],t["scroll"+e],o["client"+e],o["offset"+e],o["scroll"+e],x(10)?parseInt(o["offset"+e])+parseInt(n["margin"+("Height"===e?"Top":"Left")])+parseInt(n["margin"+("Height"===e?"Bottom":"Right")]):0)}function H(e){var t=e.body,o=e.documentElement,n=x(10)&&getComputedStyle(o);return{height:M("Height",t,o,n),width:M("Width",t,o,n)}}var D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},S=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),P=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e};function B(e){return R({},e,{right:e.left+e.width,bottom:e.top+e.height})}function j(e){var t={};try{if(x(10)){t=e.getBoundingClientRect();var o=_(e,"top"),n=_(e,"left");t.top+=o,t.left+=n,t.bottom+=o,t.right+=n}else t=e.getBoundingClientRect()}catch(f){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?H(e.ownerDocument):{},p=e.offsetWidth-(i.width||e.clientWidth||r.width),a=e.offsetHeight-(i.height||e.clientHeight||r.height);if(p||a){var s=v(e);p-=L(s,"x"),a-=L(s,"y"),r.width-=p,r.height-=a}return B(r)}function A(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=x(10),r="HTML"===t.nodeName,i=j(e),p=j(t),a=b(e),s=v(t),f=parseFloat(s.borderTopWidth),c=parseFloat(s.borderLeftWidth);o&&r&&(p.top=Math.max(p.top,0),p.left=Math.max(p.left,0));var l=B({top:i.top-p.top-f,left:i.left-p.left-c,width:i.width,height:i.height});if(l.marginTop=0,l.marginLeft=0,!n&&r){var d=parseFloat(s.marginTop),u=parseFloat(s.marginLeft);l.top-=f-d,l.bottom-=f-d,l.left-=c-u,l.right-=c-u,l.marginTop=d,l.marginLeft=u}return(n&&!o?t.contains(a):t===a&&"BODY"!==a.nodeName)&&(l=T(l,t)),l}function W(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=A(e,o),r=Math.max(o.clientWidth,window.innerWidth||0),i=Math.max(o.clientHeight,window.innerHeight||0),p=t?0:_(o),a=t?0:_(o,"left"),s={top:p-n.top+n.marginTop,left:a-n.left+n.marginLeft,width:r,height:i};return B(s)}function I(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===v(e,"position"))return!0;var o=g(e);return!!o&&I(o)}function N(e){if(!e||!e.parentElement||x())return document.documentElement;for(var t=e.parentElement;t&&"none"===v(t,"transform");)t=t.parentElement;return t||document.documentElement}function F(e,t,o,n){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},p=r?N(e):k(e,w(t));if("viewport"===n)i=W(p,r);else{var a=void 0;"scrollParent"===n?"BODY"===(a=b(g(t))).nodeName&&(a=e.ownerDocument.documentElement):a="window"===n?e.ownerDocument.documentElement:n;var s=A(a,p,r);if("HTML"!==a.nodeName||I(p))i=s;else{var f=H(e.ownerDocument),c=f.height,l=f.width;i.top+=s.top-s.marginTop,i.bottom=c+s.top,i.left+=s.left-s.marginLeft,i.right=l+s.left}}var d="number"==typeof(o=o||0);return i.left+=d?o:o.left||0,i.top+=d?o:o.top||0,i.right-=d?o:o.right||0,i.bottom-=d?o:o.bottom||0,i}function U(e){return e.width*e.height}function V(e,t,o,n,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var p=F(o,n,i,r),a={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},s=Object.keys(a).map((function(e){return R({key:e},a[e],{area:U(a[e])})})).sort((function(e,t){return t.area-e.area})),f=s.filter((function(e){return e.width>=o.clientWidth&&e.height>=o.clientHeight})),c=f.length>0?f[0].key:s[0].key,l=e.split("-")[1];return c+(l?"-"+l:"")}function X(e,t,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=n?N(t):k(t,w(o));return A(o,r,n)}function q(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),o=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),n=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+n,height:e.offsetHeight+o}}function Y(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function K(e,t,o){o=o.split("-")[0];var n=q(e),r={width:n.width,height:n.height},i=-1!==["right","left"].indexOf(o),p=i?"top":"left",a=i?"left":"top",s=i?"height":"width",f=i?"width":"height";return r[p]=t[p]+t[s]/2-n[s]/2,r[a]=o===a?t[a]-n[f]:t[Y(a)],r}function z(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function Z(e,t,o){return(void 0===o?e:e.slice(0,function(e,t,o){if(Array.prototype.findIndex)return e.findIndex((function(e){return e.name===o}));var n=z(e,(function(e){return e.name===o}));return e.indexOf(n)}(e,0,o))).forEach((function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var o=e.function||e.fn;e.enabled&&m(o)&&(t.offsets.popper=B(t.offsets.popper),t.offsets.reference=B(t.offsets.reference),t=o(t,e))})),t}function G(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=X(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=V(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=K(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=Z(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function J(e,t){return e.some((function(e){return e.enabled&&e.name===t}))}function Q(e){for(var t=[!1,"ms","Webkit","Moz","O"],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var r=t[n],i=r?""+r+o:e;if(void 0!==document.body.style[i])return i}return null}function $(){return this.state.isDestroyed=!0,J(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[Q("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function ee(e){var t=e.ownerDocument;return t?t.defaultView:window}function te(){this.state.eventsEnabled||(this.state=function(e,t,o,n){o.updateBound=n,ee(e).addEventListener("resize",o.updateBound,{passive:!0});var r=b(e);return function e(t,o,n,r){var i="BODY"===t.nodeName,p=i?t.ownerDocument.defaultView:t;p.addEventListener(o,n,{passive:!0}),i||e(b(p.parentNode),o,n,r),r.push(p)}(r,"scroll",o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}(this.reference,0,this.state,this.scheduleUpdate))}function oe(){var e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.state,ee(this.reference).removeEventListener("resize",e.updateBound),e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)})),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function ne(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function re(e,t){Object.keys(t).forEach((function(o){var n="";-1!==["width","height","top","right","bottom","left"].indexOf(o)&&ne(t[o])&&(n="px"),e.style[o]=t[o]+n}))}var ie=d&&/Firefox/i.test(navigator.userAgent);function pe(e,t,o){var n=z(e,(function(e){return e.name===t})),r=!!n&&e.some((function(e){return e.name===o&&e.enabled&&e.order<n.order}));if(!r){var i="`"+t+"`";console.warn("`"+o+"` modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}var ae=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],se=ae.slice(3);function fe(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=se.indexOf(e),n=se.slice(o+1).concat(se.slice(0,o));return t?n.reverse():n}var ce={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split("-")[0],n=t.split("-")[1];if(n){var r=e.offsets,i=r.reference,p=r.popper,a=-1!==["bottom","top"].indexOf(o),s=a?"left":"top",f=a?"width":"height",c={start:P({},s,i[s]),end:P({},s,i[s]+i[f]-p[f])};e.offsets.popper=R({},p,c[n])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var o,n=t.offset,r=e.offsets,i=r.popper,p=r.reference,a=e.placement.split("-")[0];return o=ne(+n)?[+n,0]:function(e,t,o,n){var r=[0,0],i=-1!==["right","left"].indexOf(n),p=e.split(/(\+|\-)/).map((function(e){return e.trim()})),a=p.indexOf(z(p,(function(e){return-1!==e.search(/,|\s/)})));p[a]&&-1===p[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var s=/\s*,\s*|\s+/,f=-1!==a?[p.slice(0,a).concat([p[a].split(s)[0]]),[p[a].split(s)[1]].concat(p.slice(a+1))]:[p];return(f=f.map((function(e,n){var r=(1===n?!i:i)?"height":"width",p=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,o,n){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],p=r[2];if(!i)return e;if(0===p.indexOf("%")){var a=void 0;switch(p){case"%p":a=o;break;case"%":case"%r":default:a=n}return B(a)[t]/100*i}return"vh"===p||"vw"===p?("vh"===p?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i:i}(e,r,t,o)}))}))).forEach((function(e,t){e.forEach((function(o,n){ne(o)&&(r[t]+=o*("-"===e[n-1]?-1:1))}))})),r}(n,i,p,a),"left"===a?(i.top+=o[0],i.left-=o[1]):"right"===a?(i.top+=o[0],i.left+=o[1]):"top"===a?(i.left+=o[0],i.top-=o[1]):"bottom"===a&&(i.left+=o[0],i.top+=o[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||C(e.instance.popper);e.instance.reference===o&&(o=C(o));var n=Q("transform"),r=e.instance.popper.style,i=r.top,p=r.left,a=r[n];r.top="",r.left="",r[n]="";var s=F(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);r.top=i,r.left=p,r[n]=a,t.boundaries=s;var f=e.offsets.popper,c={primary:function(e){var o=f[e];return f[e]<s[e]&&!t.escapeWithReference&&(o=Math.max(f[e],s[e])),P({},e,o)},secondary:function(e){var o="right"===e?"left":"top",n=f[o];return f[e]>s[e]&&!t.escapeWithReference&&(n=Math.min(f[o],s[e]-("right"===e?f.width:f.height))),P({},o,n)}};return t.priority.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";f=R({},f,c[t](e))})),e.offsets.popper=f,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,r=e.placement.split("-")[0],i=Math.floor,p=-1!==["top","bottom"].indexOf(r),a=p?"right":"bottom",s=p?"left":"top",f=p?"width":"height";return o[a]<i(n[s])&&(e.offsets.popper[s]=i(n[s])-o[f]),o[s]>i(n[a])&&(e.offsets.popper[s]=i(n[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var o;if(!pe(e.instance.modifiers,"arrow","keepTogether"))return e;var n=t.element;if("string"==typeof n){if(!(n=e.instance.popper.querySelector(n)))return e}else if(!e.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],i=e.offsets,p=i.popper,a=i.reference,s=-1!==["left","right"].indexOf(r),f=s?"height":"width",c=s?"Top":"Left",l=c.toLowerCase(),d=s?"left":"top",u=s?"bottom":"right",h=q(n)[f];a[u]-h<p[l]&&(e.offsets.popper[l]-=p[l]-(a[u]-h)),a[l]+h>p[u]&&(e.offsets.popper[l]+=a[l]+h-p[u]),e.offsets.popper=B(e.offsets.popper);var m=a[l]+a[f]/2-h/2,g=v(e.instance.popper),b=parseFloat(g["margin"+c]),w=parseFloat(g["border"+c+"Width"]),y=m-e.offsets.popper[l]-b-w;return y=Math.max(Math.min(p[f]-h,y),0),e.arrowElement=n,e.offsets.arrow=(P(o={},l,Math.round(y)),P(o,d,""),o),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(J(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=F(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split("-")[0],r=Y(n),i=e.placement.split("-")[1]||"",p=[];switch(t.behavior){case"flip":p=[n,r];break;case"clockwise":p=fe(n);break;case"counterclockwise":p=fe(n,!0);break;default:p=t.behavior}return p.forEach((function(a,s){if(n!==a||p.length===s+1)return e;n=e.placement.split("-")[0],r=Y(n);var f=e.offsets.popper,c=e.offsets.reference,l=Math.floor,d="left"===n&&l(f.right)>l(c.left)||"right"===n&&l(f.left)<l(c.right)||"top"===n&&l(f.bottom)>l(c.top)||"bottom"===n&&l(f.top)<l(c.bottom),u=l(f.left)<l(o.left),h=l(f.right)>l(o.right),m=l(f.top)<l(o.top),v=l(f.bottom)>l(o.bottom),g="left"===n&&u||"right"===n&&h||"top"===n&&m||"bottom"===n&&v,b=-1!==["top","bottom"].indexOf(n),w=!!t.flipVariations&&(b&&"start"===i&&u||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&v)||!!t.flipVariationsByContent&&(b&&"start"===i&&h||b&&"end"===i&&u||!b&&"start"===i&&v||!b&&"end"===i&&m);(d||g||w)&&(e.flipped=!0,(d||g)&&(n=p[s+1]),w&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=n+(i?"-"+i:""),e.offsets.popper=R({},e.offsets.popper,K(e.instance.popper,e.offsets.reference,e.placement)),e=Z(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split("-")[0],n=e.offsets,r=n.popper,i=n.reference,p=-1!==["left","right"].indexOf(o),a=-1===["top","left"].indexOf(o);return r[p?"left":"top"]=i[o]-(a?r[p?"width":"height"]:0),e.placement=Y(t),e.offsets.popper=B(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!pe(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,o=z(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,r=e.offsets.popper,i=z(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var p,a,s=void 0!==i?i:t.gpuAcceleration,f=C(e.instance.popper),c=j(f),l={position:r.position},d=function(e,t){var o=e.offsets,n=o.popper,r=Math.round,i=Math.floor,p=function(e){return e},a=r(o.reference.width),s=r(n.width),f=-1!==["left","right"].indexOf(e.placement),c=-1!==e.placement.indexOf("-"),l=t?f||c||a%2==s%2?r:i:p,d=t?r:p;return{left:l(a%2==1&&s%2==1&&!c&&t?n.left-1:n.left),top:d(n.top),bottom:d(n.bottom),right:l(n.right)}}(e,window.devicePixelRatio<2||!ie),u="bottom"===o?"top":"bottom",h="right"===n?"left":"right",m=Q("transform");if(a="bottom"===u?"HTML"===f.nodeName?-f.clientHeight+d.bottom:-c.height+d.bottom:d.top,p="right"===h?"HTML"===f.nodeName?-f.clientWidth+d.right:-c.width+d.right:d.left,s&&m)l[m]="translate3d("+p+"px, "+a+"px, 0)",l[u]=0,l[h]=0,l.willChange="transform";else{var v="right"===h?-1:1;l[u]=a*("bottom"===u?-1:1),l[h]=p*v,l.willChange=u+", "+h}return e.attributes=R({},{"x-placement":e.placement},e.attributes),e.styles=R({},l,e.styles),e.arrowStyles=R({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,o;return re(e.instance.popper,e.styles),t=e.instance.popper,o=e.attributes,Object.keys(o).forEach((function(e){!1!==o[e]?t.setAttribute(e,o[e]):t.removeAttribute(e)})),e.arrowElement&&Object.keys(e.arrowStyles).length&&re(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,r){var i=X(r,t,e,o.positionFixed),p=V(o.placement,i,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute("x-placement",p),re(t,{position:o.positionFixed?"fixed":"absolute"}),o},gpuAcceleration:void 0}}},le=function(){function e(t,o){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};D(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=h(this.update.bind(this)),this.options=R({},e.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=o&&o.jquery?o[0]:o,this.options.modifiers={},Object.keys(R({},e.Defaults.modifiers,r.modifiers)).forEach((function(t){n.options.modifiers[t]=R({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return R({name:e},n.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(e){e.enabled&&m(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)})),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return S(e,[{key:"update",value:function(){return G.call(this)}},{key:"destroy",value:function(){return $.call(this)}},{key:"enableEventListeners",value:function(){return te.call(this)}},{key:"disableEventListeners",value:function(){return oe.call(this)}}]),e}();le.Utils=("undefined"!=typeof window?window:global).PopperUtils,le.placements=ae,le.Defaults=ce;var de,ue,he,me,ve,ge,be,we=le,ye=["popoverViewRef"],Oe=function(e,t){return{"c-popover--visible":e,"c-popover--hidden":t}},xe=["*"],Ce=["top","bottom","left","right","top-start","bottom-start","right-start","top-end","bottom-end","left-end","right-end","top-end","bottom-end","left-end","right-end","auto","auto-start","auto-end"],Ee=function(){var e=function e(){_classCallCheck(this,e)};return e.Top="top",e.Bottom="bottom",e.Left="left",e.Right="right",e.TopStart="top-start",e.BottomStart="bottom-start",e.LeftStart="left-start",e.RightStart="right-start",e.TopEnd="top-end",e.BottomEnd="bottom-end",e.LeftEnd="left-end",e.RightEnd="right-end",e.Auto="auto",e.AutoStart="auto-start",e.AutoEnd="auto-end",e}(),ke=function(){var e=function e(){_classCallCheck(this,e)};return e.CLICK="click",e}(),_e=((de=function(){function e(t){_classCallCheck(this,e),this.CDR=t,this.displayType="none",this.opacity=0,this.ariaHidden="true",this.visibility=!1,this.id="",this.popoverOptions={placement:Ee.Bottom,trigger:ke.CLICK},this.onHidden=new p.o,this.onUpdate=new p.o,this.popoverHidden=new p.o,this.popoverShown=new p.o}return _createClass(e,[{key:"ngOnInit",value:function(){if(!we)throw new f.c("TsPopoverComponent: popper.js is not available to reference.")}},{key:"ngOnDestroy",value:function(){this.popoverInstance&&this.popoverInstance.destroy()}},{key:"hide",value:function(){this.popoverInstance&&this.popoverInstance.destroy(),this.toggleVisibility(!1),this.onHidden.emit()}},{key:"show",value:function(e){this.referenceObject&&(this.onUpdate.emit(this.popoverInstance),this.popoverInstance=new we(this.referenceObject,this.popoverViewRef.nativeElement,e),this.scheduleUpdate(),this.toggleVisibility(!0))}},{key:"scheduleUpdate",value:function(){this.popoverInstance&&this.popoverInstance.scheduleUpdate()}},{key:"toggleVisibility",value:function(e){e?(this.opacity=1,this.displayType="block",this.ariaHidden="false",this.visibility=!0):(this.opacity=0,this.displayType="none",this.ariaHidden="true",this.visibility=!1),this.CDR.destroyed||this.CDR.detectChanges()}}]),e}()).\u0275fac=function(e){return new(e||de)(p.Rb(p.h))},de.\u0275cmp=p.Lb({type:de,selectors:[["ts-popover"]],viewQuery:function(e,t){var o;1&e&&p.Ic(ye,!0),2&e&&p.yc(o=p.gc())&&(t.popoverViewRef=o.first)},hostAttrs:[1,"ts-popover"],outputs:{onHidden:"onHidden",onUpdate:"onUpdate",popoverHidden:"popoverHidden",popoverShown:"popoverShown"},exportAs:["tsPopoverComponent"],ngContentSelectors:xe,decls:5,vars:7,consts:[[1,"popover__container",3,"ngClass"],["popoverViewRef",""],[1,"popover__inner"],[1,"popover__arrow"]],template:function(e,t){1&e&&(p.pc(),p.Xb(0,"div",0,1),p.Xb(2,"div",2),p.oc(3),p.Wb(),p.Sb(4,"div",3),p.Wb()),2&e&&(p.qc("ngClass",p.wc(4,Oe,t.visibility,!t.visibility)),p.Eb("aria-hidden",t.ariaHidden)("role",t.popoverOptions.ariaRole)("aria-labelledby",t.id))},directives:[n.k],styles:[".popover__container{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);background-color:#fafafa;padding:16px;position:absolute}.popover__container .popover__arrow{border-color:#fafafa;border-style:solid;height:0;position:absolute;width:0}.popover__container.c-popover--visible{display:block;opacity:1}.popover__container.c-popover--hidden{display:none;opacity:0}.popover__container[x-placement^=top]{margin-bottom:5px}.popover__container[x-placement^=top] .popover__arrow{border-bottom-color:transparent;border-left-color:transparent;border-right-color:transparent;border-width:5px 5px 0;bottom:-5px;left:calc(50% - 5px);margin-bottom:0;margin-top:0}.popover__container[x-placement^=bottom]{margin-top:5px}.popover__container[x-placement^=bottom] .popover__arrow{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent;border-width:0 5px 5px;left:calc(50% - 5px);margin-bottom:0;margin-top:0;top:-5px}.popover__container[x-placement^=right]{margin-left:5px}.popover__container[x-placement^=right] .popover__arrow{border-bottom-color:transparent;border-left-color:transparent;border-top-color:transparent;border-width:5px 5px 5px 0;left:-5px;margin-left:0;margin-right:0;top:calc(50% - 5px)}.popover__container[x-placement^=left]{display:block;margin-right:5px}.popover__container[x-placement^=left] .popover__arrow{border-bottom-color:transparent;border-right-color:transparent;border-top-color:transparent;border-width:5px 0 5px 5px;margin-left:0;margin-right:0;right:-5px;top:calc(50% - 5px)}"],encapsulation:2,changeDetection:0}),de),Te=0,Le=((me=ue=function(){function e(t,o,n,r){var i=this;_classCallCheck(this,e),this.viewContainerRef=t,this.changeDetectorRef=o,this.elementRef=n,this.ngZone=r,this.uid="ts-popover-trigger-".concat(Te++),this.isOpen=!1,this.defaultOpened=!1,this.hideOnBlur=!0,this._id=this.uid,this._position=Ee.Bottom,this.popoverOnCreate=new p.o,this.popoverOnShown=new p.o,this.popoverOnHidden=new p.o,this.popoverOnUpdate=new p.o,this.ngZone.runOutsideAngular((function(){Object(c.a)(i.elementRef.nativeElement,"keydown").pipe(Object(l.a)((function(e){return e.code===a.a.ESCAPE.code})),Object(s.j)(i)).subscribe((function(e){return i.ngZone.run((function(){i.hide(),e.stopPropagation(),e.preventDefault()}))}))}))}return _createClass(e,[{key:"onClick",value:function(e){!this.popover.popoverViewRef.nativeElement.contains(e)&&this.hideOnBlur&&this.hide()}},{key:"ngOnInit",value:function(){var e=this;this.popover.referenceObject=this.viewContainerRef.element.nativeElement,this.setContentProperties(this.popover),Object(c.a)(this.elementRef.nativeElement,"click").pipe(Object(s.j)(this)).subscribe((function(t){e.toggle(),t.stopPropagation(),t.preventDefault()}))}},{key:"ngAfterContentInit",value:function(){this.defaultOpened&&this.show()}},{key:"ngAfterContentChecked",value:function(){this.popover&&(this.popover.id=this.id)}},{key:"ngOnChanges",value:function(e){e.position&&(this.popover.popoverOptions.placement=e.position.currentValue)}},{key:"ngOnDestroy",value:function(){}},{key:"setContentProperties",value:function(e){var t=this;e.popoverOptions=Object.assign(Object.assign({},ue.defaultOptions),{placement:this.position}),e.onHidden.pipe(Object(s.j)(this)).subscribe((function(e){return t.popoverOnUpdate.emit(e)}))}},{key:"toggle",value:function(){this.isOpen?this.hide():this.show(),this.changeDetectorRef.detectChanges()}},{key:"hide",value:function(){this.isOpen=!1,this.popover.hide(),this.popoverOnHidden.emit(this.popover.popoverInstance)}},{key:"show",value:function(){this.isOpen=!0,this.popover.show(this.popover.popoverOptions),this.popoverOnShown.emit(this.popover.popoverInstance)}},{key:"id",set:function(e){this._id=e||this.uid},get:function(){return this._id}},{key:"position",set:function(e){if(Ce.indexOf(e)<0)throw new f.c('"'.concat(e,'" is not an allowed position value.'));this._position=e||Ee.Bottom},get:function(){return this._position}}]),e}()).\u0275fac=function(e){return new(e||me)(p.Rb(p.Q),p.Rb(p.h),p.Rb(p.l),p.Rb(p.A))},me.\u0275dir=p.Mb({type:me,selectors:[["","tsPopoverTrigger",""]],hostAttrs:[1,"ts-popover-trigger"],hostBindings:function(e,t){1&e&&p.fc("click",(function(e){return t.onClick(e.target)}),!1,p.Bc)},inputs:{defaultOpened:"defaultOpened",hideOnBlur:"hideOnBlur",id:"id",position:"position",popover:"popover"},outputs:{popoverOnCreate:"popoverOnCreate",popoverOnShown:"popoverOnShown",popoverOnHidden:"popoverOnHidden",popoverOnUpdate:"popoverOnUpdate"},exportAs:["tsPopoverTrigger"],features:[p.Bb]}),me.defaultOptions={trigger:ke.CLICK,ariaRole:"popover",placement:Ee.Bottom},me),Me=((he=function e(){_classCallCheck(this,e)}).\u0275mod=p.Pb({type:he}),he.\u0275inj=p.Ob({factory:function(e){return new(e||he)},imports:[[n.c]]}),he),He=o("yZt1"),De=o("sEIs"),Se=[{path:"",component:(ve=function(){function e(t){_classCallCheck(this,e),this.elem=t,this.myform=new r.g("bottom"),this.positions=["bottom","top","left","right"],this.myId="custom-id",this.example1select="right"}return _createClass(e,[{key:"popoverOnShown",value:function(e){console.log("popper on shown emitted event: ",e)}},{key:"popoverOnHidden",value:function(e){console.log("popover on hidden emitted event: ",e)}},{key:"change",value:function(){var e=this;setTimeout((function(){e.elem.nativeElement.querySelector(".ts-popover-trigger").dispatchEvent(new Event("click"))}),100)}}]),e}(),ve.\u0275fac=function(e){return new(e||ve)(p.Rb(p.l))},ve.\u0275cmp=p.Lb({type:ve,selectors:[["demo-popover"]],decls:18,vars:5,consts:[[1,"demo-popover",2,"max-width","200px","height","600px"],[3,"ngModel","ngModelChange","change"],["value","top"],["value","right"],["value","bottom"],["value","left"],["tsPopoverTrigger","popper1",2,"margin","200px 250px",3,"position","popover","defaultOpened","id","popoverOnShown","popoverOnHidden"],["popper1",""]],template:function(e,t){if(1&e&&(p.Xb(0,"div",0),p.Xb(1,"select",1),p.fc("ngModelChange",(function(e){return t.example1select=e}))("change",(function(){return t.change()})),p.Xb(2,"option",2),p.Mc(3,"Top"),p.Wb(),p.Xb(4,"option",3),p.Mc(5,"Right"),p.Wb(),p.Xb(6,"option",4),p.Mc(7,"Bottom"),p.Wb(),p.Xb(8,"option",5),p.Mc(9,"Left"),p.Wb(),p.Wb(),p.Xb(10,"button",6),p.fc("popoverOnShown",(function(e){return t.popoverOnShown(e)}))("popoverOnHidden",(function(e){return t.popoverOnHidden(e)})),p.Mc(11,"Click me!"),p.Wb(),p.Wb(),p.Xb(12,"ts-popover",null,7),p.Xb(14,"h1"),p.Mc(15,"My Title"),p.Wb(),p.Xb(16,"p"),p.Mc(17,"Other random content."),p.Wb(),p.Wb()),2&e){var o=p.zc(13);p.Db(1),p.qc("ngModel",t.example1select),p.Db(9),p.qc("position",t.example1select)("popover",o)("defaultOpened",!1)("id",t.myId)}},directives:[r.A,r.q,r.t,r.u,r.C,Le,_e],encapsulation:2}),ve)}],Pe=((be=function e(){_classCallCheck(this,e)}).\u0275mod=p.Pb({type:be}),be.\u0275inj=p.Ob({factory:function(e){return new(e||be)},imports:[[De.f.forChild(Se)],De.f]}),be),Re=((ge=function e(){_classCallCheck(this,e)}).\u0275mod=p.Pb({type:ge}),ge.\u0275inj=p.Ob({factory:function(e){return new(e||ge)},imports:[[n.c,r.m,Pe,r.y,Me,He.b,i.e]]}),ge)}}]);