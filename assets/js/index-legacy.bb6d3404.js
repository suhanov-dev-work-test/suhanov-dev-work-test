(function(t){function e(e){for(var r,c,o=e[0],s=e[1],l=e[2],d=0,f=[];d<o.length;d++)c=o[d],a[c]&&f.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={index:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){n("927d"),t.exports=n("4997")},"3da5":function(t,e){(function(){console.log("test Main")})()},"47cc":function(t,e,n){t.exports=n.p+"assets/img/image2.ef2b356c.png"},4997:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d"),n("f5df"),n("fc3a"),n("e2fe"),n("3da5"),n("ac6a");var r=n("75fc"),a=n("217b"),i=n.n(a),c=Object(r["a"])(document.querySelectorAll(".main-carousel"));document.addEventListener("DOMContentLoaded",function(){c.forEach(function(t){return new i.a(t,{cellAlign:"left",contain:!0,draggable:!0,pageDots:!0,wrapAround:!0,autoPlay:!0,adaptiveHeight:!0,lazyLoad:!0,arrowShape:"M31.4,50c0-0.8,0.4-1.7,1-2.3L64,1c0.6-0.6,1.5-1,2.3-1c0.8,0,1.7,0.4,2.3,1L43.3,50l25.3,49\n      c-0.6,0.6-1.5,1-2.3,1c-0.9,0-1.7-0.4-2.3-1L32.4,52.3C31.8,51.7,31.4,50.9,31.4,50L31.4,50z"})})});n("bfd7")},"4c48":function(t,e,n){t.exports=n.p+"assets/img/image3.c7b1208a.png"},"55b1":function(t,e,n){},"72a3":function(t,e,n){"use strict";var r=n("ee6a"),a=n.n(r);a.a},"73d1":function(t,e,n){"use strict";var r=n("55b1"),a=n.n(r);a.a},"927d":function(t,e,n){"use strict";n.r(e);n("ac6a");var r,a=n("75fc"),i=(n("cadf"),n("551c"),n("f751"),n("097d"),n("a026")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category-list__carousel"},[n("vue-glide",{attrs:{type:"carousel",perView:3,gap:40}},[t._l(t.items,function(t,e){return n("vue-glide-slide",{key:e},[n("CategoryItem",{attrs:{item:t}})],1)}),n("template",{staticClass:"slider-controls",slot:"control"},[n("button",{attrs:{"data-glide-dir":"<"}},[n("i",{staticClass:"icon-prev"})]),n("button",{attrs:{"data-glide-dir":">"}},[n("i",{staticClass:"icon-next"})])])],2)],1)},o=[],s=n("bd86"),l=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category-list__item"},[n("a",{staticClass:"category-list__item-link",attrs:{href:""}},[n("img",{staticClass:"category-list__item-image",attrs:{alt:t.item.title,src:t.item.image}}),n("span",{staticClass:"category-list__item-title",domProps:{innerHTML:t._s(t.item.title)}})]),n("div",{staticClass:"category-list__item-bottom"},[n("span",{staticClass:"category-list__item-price"},[t._v("от "+t._s(t.item.price)+" ₽")]),n("button",{staticClass:"category-list__item-button"},[t._v("в корзину")])])])}),u=[],d={name:"CategoryItem",props:{item:{type:Object,required:!0,default:function(){return{title:"image"}}}}},f=d,p=(n("73d1"),n("2877")),m=Object(p["a"])(f,l,u,!1,null,"430679d9",null),g=m.exports,_=n("c13f"),b=(n("033b"),{name:"Category",components:(r={CategoryItem:g},Object(s["a"])(r,_["Glide"].name,_["Glide"]),Object(s["a"])(r,_["GlideSlide"].name,_["GlideSlide"]),r),data:function(){return{items:[{image:n("c2ea"),title:"Букет роз “Fifth Avenue” <br> (25, 51 или 75)",price:4390},{image:n("47cc"),title:"Букет ирисов “White Magic” <br> (25, 51 или 101)",price:33890},{image:n("4c48"),title:"Букет «Фантазии лета»",price:4222390},{image:n("c2ea"),title:"Букет «Подсолнухи»",price:22390},{image:n("47cc"),title:"Букет «Бархатный сезон»",price:2390},{image:n("4c48"),title:"Букет «Осенний листопад»",price:2390},{image:n("c2ea"),title:"Букет роз “Fifth Avenue” <br> (25, 51 или 75)",price:4390},{image:n("47cc"),title:"Букет ирисов “White Magic” <br> (25, 51 или 101)",price:33890},{image:n("4c48"),title:"Букет «Фантазии лета»",price:4222390}]}}}),v=b,y=(n("72a3"),Object(p["a"])(v,c,o,!1,null,null,null)),h=y.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{id:"cart"}},[t._v("\n  ("+t._s(t.count)+")\n")])},C=[],O={name:"Cart",data:function(){return{count:14}}},j=O,x=Object(p["a"])(j,w,C,!1,null,null,null),L=x.exports,S=n("2f62");i["a"].use(S["a"]);var M=new S["a"].Store({state:{},mutations:{},actions:{}});i["a"].config.productionTip=!1,new i["a"]({store:M,render:function(t){return t(L)}}).$mount("#cart");var E=Object(a["a"])(document.querySelectorAll(".category-list__carousel"));E.forEach(function(t){new i["a"]({store:M,render:function(t){return t(h)}}).$mount("#".concat(t.id))})},bfd7:function(t,e){var n=document.querySelector(".header__top"),r=document.querySelector(".header__middle");document.addEventListener("DOMContentLoaded",function(){window.addEventListener("scroll",function(t){var e=n.offsetHeight+r.offsetHeight,a=window.scrollY;a>=e?n.classList.add("header__top_scroll"):n.classList.remove("header__top_scroll")})})},c2ea:function(t,e,n){t.exports=n.p+"assets/img/image1.4996ccbe.png"},e2fe:function(t,e,n){},ee6a:function(t,e,n){}});
//# sourceMappingURL=index-legacy.bb6d3404.js.map