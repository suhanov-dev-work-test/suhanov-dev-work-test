(function(e){function t(t){for(var r,c,i=t[0],u=t[1],l=t[2],d=0,f=[];d<i.length;d++)c=i[d],o[c]&&f.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={index:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){n("927d"),e.exports=n("4997")},4695:function(e,t,n){"use strict";var r=n("ef82"),o=n.n(r);o.a},4997:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d"),n("f5df"),n("e2fe"),n("ac6a");var r=n("75fc"),o=n("0346"),a=Object(r["a"])(document.querySelectorAll(".main-carousel")),c=Object(r["a"])(document.querySelectorAll(".category-list")),i=Object(r["a"])(document.querySelectorAll(".banner"));document.addEventListener("DOMContentLoaded",function(){a.forEach(function(e){new o["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:5e3,hoverpause:!0,animationDuration:500}).mount()}),c.forEach(function(e){new o["a"](e,{type:"carousel",startAt:0,perView:3,gap:40,autoplay:5e3,hoverpause:!0,animationDuration:500}).mount()}),i.forEach(function(e){new o["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:5e3,hoverpause:!0,animationDuration:500}).mount()})});n("bfd7"),n("a481");var u=Object(r["a"])(document.querySelectorAll(".category-preview"));u&&document.addEventListener("DOMContentLoaded",function(){u.forEach(function(e){var t=Object(r["a"])(e.querySelectorAll(".category-tabs__item")),n=Object(r["a"])(e.querySelectorAll(".category-view"));e.addEventListener("click",function(e){e.preventDefault();var r=e.target,o=r.parentElement,a=o.classList.contains("category-tabs__item"),c=o.getAttribute("href").replace("#","");a&&(t.forEach(function(e){e.classList.remove("category-tabs__item_active")}),n.forEach(function(e){e.classList.remove("category-view_visible")}),o.classList.add("category-tabs__item_active"),document.getElementById(c).classList.add("category-view_visible"))})})});n("c5f6");var l=function(e,t,n){var r=document.querySelectorAll(".".concat(e)),o=document.createElement("a");o.classList.add("review-item__full-text"),o.innerText="Развернуть текст",r.forEach(function(e){e.style.position="relative",e.style.transition="all ease 0.5s";var r=window.getComputedStyle(e,null),a=Math.round(Number(r.getPropertyValue("line-height").replace("px",""))),c=Math.round(Number(r.getPropertyValue("height").replace("px","")));o.addEventListener("click",function(){n&&(e.style.height="".concat(c,"px"))}),c/a>=t&&(e.style.height="".concat(a*t,"px"),e.style.overflow="hidden",e.appendChild(o))})};window.addEventListener("load",function(){l("review-item__text",3,!1),l("seo-text__content",5,!0)})},"927d":function(e,t,n){"use strict";n.r(t);n("ac6a");var r=n("75fc"),o=(n("cadf"),n("551c"),n("f751"),n("097d"),n("a026")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{attrs:{id:"cart"}},[e._v("\n  ("+e._s(e.count)+")\n")])},c=[],i={name:"Cart",data:function(){return{count:14}}},u=i,l=n("2877"),s=Object(l["a"])(u,a,c,!1,null,null,null),d=s.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"category-list__item-button"},[e._v("\n  в корзину\n")])},p=[],v={name:"CategoryButton"},y=v,m=(n("4695"),Object(l["a"])(y,f,p,!1,null,null,null)),h=m.exports,_=n("2f62");o["a"].use(_["a"]);var b=new _["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({store:b,render:function(e){return e(d)}}).$mount("#cart");var g=Object(r["a"])(document.querySelectorAll(".category-button"));g.forEach(function(e){new o["a"]({store:b,render:function(e){return e(h)}}).$mount("#".concat(e.id))})},bfd7:function(e,t){var n=document.querySelector(".header__top"),r=document.querySelector(".header__middle");document.addEventListener("DOMContentLoaded",function(){window.addEventListener("scroll",function(e){var t=n.offsetHeight+r.offsetHeight,o=window.scrollY;o>=t?n.classList.add("header__top_scroll"):n.classList.remove("header__top_scroll")})})},e2fe:function(e,t,n){},ef82:function(e,t,n){}});
//# sourceMappingURL=index-legacy.e922689e.js.map