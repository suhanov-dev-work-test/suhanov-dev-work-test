(function(e){function t(t){for(var o,c,l=t[0],i=t[1],s=t[2],u=0,p=[];u<l.length;u++)c=l[u],r[c]&&p.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={index:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){n("927d"),e.exports=n("4997")},4695:function(e,t,n){"use strict";var o=n("ef82"),r=n.n(o);r.a},4997:function(e,t,n){"use strict";n.r(t);n("f5df"),n("e2fe"),n("ac6a");var o=n("0346");const r=[...document.querySelectorAll(".main-carousel")],a=[...document.querySelectorAll(".category-list")],c=[...document.querySelectorAll(".banner")];document.addEventListener("DOMContentLoaded",()=>{r.forEach(e=>{new o["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:5e3,hoverpause:!0,animationDuration:500}).mount()}),a.forEach(e=>{new o["a"](e,{type:"carousel",startAt:0,perView:3,gap:40,autoplay:5e3,hoverpause:!0,animationDuration:500}).mount()}),c.forEach(e=>{new o["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:5e3,hoverpause:!0,animationDuration:500}).mount()})});n("bfd7"),n("a481");const l=[...document.querySelectorAll(".category-preview")];l&&document.addEventListener("DOMContentLoaded",()=>{l.forEach(e=>{const t=[...e.querySelectorAll(".category-tabs__item")],n=[...e.querySelectorAll(".category-view")];e.addEventListener("click",e=>{e.preventDefault();const o=e.target,r=o.parentElement,a=r.classList.contains("category-tabs__item"),c=r.getAttribute("href").replace("#","");a&&(t.forEach(e=>{e.classList.remove("category-tabs__item_active")}),n.forEach(e=>{e.classList.remove("category-view_visible")}),r.classList.add("category-tabs__item_active"),document.getElementById(c).classList.add("category-view_visible"))})})});n("28a5");const i=e=>{const t=document.body,n=document.createElement("div"),o=document.createElement("div"),r=document.createElement("i");n.classList.add("backdrop"),t.appendChild(n),r.classList.add("icon-close"),o.classList.add("modal"),o.classList.add("review-item__modal"),n.appendChild(o),o.innerHTML=e,o.appendChild(r),n.classList.add("backdrop_opened"),r.addEventListener("click",()=>{n.classList.remove("backdrop_opened")})},s=(e,t,n)=>{const o=document.querySelectorAll(e),r=document.createElement("a");r.classList.add("crop-text__button"),r.innerText="Развернуть текст",o.forEach(e=>{e.classList.add("crop-text");const o=window.getComputedStyle(e,null),a=Math.round(Number(o.getPropertyValue("line-height").replace("px",""))),c=Math.round(Number(o.getPropertyValue("height").replace("px",""))),l=e.innerHTML.split(" "),s=e.textContent,d=document.createElement("span"),u=e.parentElement.innerHTML;let p;if(c/a>=t){e.style.height=`${a*t}px`,e.style.overflow="hidden";do{l.pop(),e.innerHTML=l.join(" "),p=s.replace(e.textContent,""),e.appendChild(r)}while(e.scrollHeight>e.offsetHeight+1);d.textContent=p,e.appendChild(d),r.addEventListener("click",t=>{t.preventDefault();const o=t.target;o.classList.add("open"),n?e.style.height=`${c}px`:i(u)})}})};window.addEventListener("load",()=>{s(".review-item__text",3,!1),s(".seo-text__content",5,!0)});n("f416")},"927d":function(e,t,n){"use strict";n.r(t);n("ac6a");var o=n("a026"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{attrs:{id:"cart"}},[e._v("\n  ("+e._s(e.count)+")\n")])},a=[],c={name:"Cart",data(){return{count:14}}},l=c,i=n("2877"),s=Object(i["a"])(l,r,a,!1,null,null,null),d=s.exports,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"category-list__item-button"},[e._v("\n  в корзину\n")])},p=[],f={name:"CategoryButton"},m=f,v=(n("4695"),Object(i["a"])(m,u,p,!1,null,null,null)),h=v.exports,y=n("2f62");o["a"].use(y["a"]);var _=new y["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({store:_,render:e=>e(d)}).$mount("#cart");const g=[...document.querySelectorAll(".category-button")];g.forEach(e=>{new o["a"]({store:_,render:e=>e(h)}).$mount(`#${e.id}`)})},bfd7:function(e,t){const n=document.querySelector(".header__top"),o=document.querySelector(".header__middle");document.addEventListener("DOMContentLoaded",()=>{window.addEventListener("scroll",e=>{const t=n.offsetHeight+o.offsetHeight,r=window.scrollY;r>=t?n.classList.add("header__top_scroll"):n.classList.remove("header__top_scroll")})})},e2fe:function(e,t,n){},ef82:function(e,t,n){},f416:function(e,t){document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".scroll-top");document.addEventListener("scroll",t=>{const n=window.innerHeight,o=window.pageYOffset;o>n?e.classList.add("scroll-top_visible"):e.classList.remove("scroll-top_visible")}),e.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})})}});
//# sourceMappingURL=index.6ca4396d.js.map