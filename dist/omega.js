parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EJq4":[function(require,module,exports) {
"use strict";function t(t,n,e,r,o,i,u){try{var c=t[i](u),a=c.value}catch(f){return void e(f)}c.done?n(a):Promise.resolve(a).then(r,o)}function n(n){return function(){var e=this,r=arguments;return new Promise(function(o,i){var u=n.apply(e,r);function c(n){t(u,o,i,c,a,"next",n)}function a(n){t(u,o,i,c,a,"throw",n)}c(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.µAll=exports.µ=void 0;var e=function(t){var n,e={grab:function(){return n||document.querySelector(t)},toggleClass:function(t){return n.classList.toggle(t),this},addClass:function(t){return Array.isArray(t)?t.forEach(function(t){n.classList.add(t)}):n.classList.add(t),this},removeClass:function(t){return n.classList.remove(t),this},hasClass:function(t){return n.classList.contains(t)},css:function(t){return Array.isArray(t)?t.forEach(function(t){n.style[Object.keys(t)[0]]=t.value}):n.style[Object.keys(t)[0]]=t.value,this},replaceWith:function(t){return n.outerHTML=t,this},html:function(t){return t?(n.innerHTML=t,this):n.innerHTML},empty:function(){return n.innerHTML=null,this},wrap:function(t){var e=document.createElement("div");e.className=t,n.parentNode.insertBefore(e,n),n.parentNode.removeChild(n),e.appendChild(n)},context:function(){return n.outerHTML},remove:function(){return n.parentNode.removeChild(n),this},set:function(t){return Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])}),this},child:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return"append"!==e&&null!=e||n.append(t),"prepend"===e&&n.prepend(t),this},text:function(t){return n.textContent=t.toString(),this},textChild:function(t){var e=document.createTextNode(t.toString());return n.appendChild(e),this},type:function(t){return n.type=t,this},name:function(t){return n.name=t,this},intro:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.name,r=t.type;return n.name=e,n.type=r,this},htmlFor:function(t){return n.htmlFor=t,this},find:function(t){return n.querySelectorAll(t)},siblings:function(){return Array.from(n.parentNode.children).filter(function(t){return t!==n})},previous:function(){return n.previousElementSibling},next:function(){return n.nextElementSibling},val:function(t){return n.value=t,this},data:function(t){return n.getAttribute("data-".concat(t))},height:function(){var t=window.getComputedStyle(n),e=n.offsetHeight,r=parseFloat(t.borderTopWidth);return e-parseFloat(t.borderBottomWidth)-r-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom)},width:function(){var t=window.getComputedStyle(n),e=n.offsetWidth,r=parseFloat(t.borderTopWidth);return e-parseFloat(t.borderBottomWidth)-r-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom)},diameter:function(){return{width:n.scrollWidth,height:n.scrollHeight}},stats:function(){var t=n.getBoundingClientRect(),e=window.getComputedStyle(n),r=n.offsetHeight,o=n.offsetWidth,i=parseFloat(e.borderTopWidth),u=parseFloat(e.borderBottomWidth),c=parseFloat(e.paddingTop),a=parseFloat(e.paddingBottom),f=r-u-i-c-a,s=o-u-i-c-a;return{offsetTop:t.top+window.pageYOffset-document.documentElement.clientTop,offsetLeft:t.left+window.pageXOffset-document.documentElement.clientLeft,positionTop:n.offsetTop,positionLeft:n.offsetLeft,heightRestricted:f,widthRestricted:s,height:n.scrollHeight,width:n.scrollWidth}},position:function(){return{left:n.offsetLeft,top:n.offsetTop}},offset:function(){var t=n.getBoundingClientRect();return{top:t.top+window.pageYOffset-document.documentElement.clientTop,left:t.left+window.pageXOffset-document.documentElement.clientLeft}},load:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null==e?fetch(t).then(function(t){return t.text()}).then(function(t){n.innerHTML=t}):fetch(t).then(function(t){return t.text()}).then(function(t){n.innerHTML=t}).then(e),this},on:function(t,e){return n.addEventListener(t,e),this},off:function(t,e){n.removeEventListener(t,e)}};return n=e.grab(t),e};exports.µ=e;var r=function(){var t=n(regeneratorRuntime.mark(function t(n){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={grabAll:function(){return e||document.querySelectorAll(n)},toggleClass:function(t){return e.forEach(function(n){n.classList.toggle(t)}),this},addClass:function(t){return e.forEach(function(n){n.classList.add(t)}),this},removeClass:function(t){return e.forEach(function(n){n.classList.remove(t)}),this},replaceWith:function(t){return e.forEach(function(n){n.outerHTML=t}),this},html:function(t){return e.forEach(function(n){n.innerHTML=t}),this},remove:function(){return e.forEach(function(t){t.parentNode.removeChild(e)}),this},text:function(t){return e.forEach(function(n){n.textContent=t.toString()}),this},type:function(t){return e.forEach(function(n){n.type=t}),this},name:function(t){return e.forEach(function(n){n.name=t}),this},intro:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,r=t.type;return e.forEach(function(t){t.name=n,t.type=r}),this},wrap:function(t){e.forEach(function(n){var e=document.createElement("div");e.className=t,n.parentNode.insertBefore(e,n),n.parentNode.removeChild(n),e.appendChild(n)})},load:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null==n?e.forEach(function(n){fetch(t).then(function(t){return t.text()}).then(function(t){n.innerHTML=t})}):e.forEach(function(e){fetch(t).then(function(t){return t.text()}).then(function(t){e.innerHTML=t}).then(n)}),this},on:function(t,n){return e.forEach(function(e){e.addEventListener(t,n)}),this},off:function(t,n){e.forEach(function(e){e.removeEventListener(t,n)})}},e=r.grabAll(n),t.abrupt("return",r);case 3:case"end":return t.stop()}},t)}));return function(n){return t.apply(this,arguments)}}();exports.µAll=r;var o={"µ":e,"µAll":r};exports.default=o;
},{}],"Hozp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.ΩCSS=exports.ΩMany=exports.Ω=void 0;var e=require("./micro.js"),t=function(t,r,n){var o=document.createElement(t);return o.id=r,document.querySelector(n).appendChild(o),(0,e.µ)("#".concat(r))};exports.Ω=t;var r=function(e){e.forEach(function(e){var t=document.createElement(e.element);t.id=e.idForNewElement,document.querySelector(e.appendTo).appendChild(t)})};exports.ΩMany=r;var n=function(e){var t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)};exports.ΩCSS=n;var o={"Ω":t,"ΩCSS":n,"ΩMany":r};exports.default=o;
},{"./micro.js":"EJq4"}]},{},["Hozp"], null)
//# sourceMappingURL=/omega.js.map