(function(e){function t(t){for(var o,i,r=t[0],l=t[1],s=t[2],d=0,f=[];d<r.length;d++)i=r[d],a[i]&&f.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={index:0},c=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var u=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){n("927d"),e.exports=n("4997")},"265a":function(e,t,n){},2971:function(e,t,n){},"3e82":function(e,t,n){"use strict";var o=n("c748"),a=n.n(o);a.a},4695:function(e,t,n){"use strict";var o=n("ef82"),a=n.n(o);a.a},4997:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d"),n("f5df"),n("e2fe"),n("ac6a");var o=n("75fc"),a=n("0346");document.addEventListener("DOMContentLoaded",function(){var e=Object(o["a"])(document.querySelectorAll(".main-carousel")),t=Object(o["a"])(document.querySelectorAll(".category-list")),n=Object(o["a"])(document.querySelectorAll(".banner"));e.forEach(function(e){new a["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:5e3,hoverpause:!0,animationDuration:500}).mount()}),t.forEach(function(e){var t=new a["a"](e,{type:"carousel",startAt:0,perView:3,gap:40,autoplay:5e3,hoverpause:!0,animationDuration:500,breakpoints:{767:{perView:2,gap:9},1024:{gap:16}}}).mount();window.matchMedia("(max-width: 767px)").matches&&t.destroy()}),n.forEach(function(e){new a["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:5e3,hoverpause:!0,animationDuration:500}).mount()})});n("bfd7"),n("a481");var c=Object(o["a"])(document.querySelectorAll(".category-preview"));c&&document.addEventListener("DOMContentLoaded",function(){c.forEach(function(e){var t=Object(o["a"])(e.querySelectorAll(".category-tabs__item")),n=Object(o["a"])(e.querySelectorAll(".category-view"));e.addEventListener("click",function(e){e.preventDefault();var o=e.target,a=o.parentElement,c=a.classList.contains("category-tabs__item"),i=a.getAttribute("href").replace("#","");c&&(t.forEach(function(e){e.classList.remove("category-tabs__item_active")}),n.forEach(function(e){e.classList.remove("category-view_visible")}),a.classList.add("category-tabs__item_active"),document.getElementById(i).classList.add("category-view_visible"))})})});n("28a5"),n("c5f6");var i=function(e){var t=document.body,n=document.querySelector(".backdrop"),o=document.createElement("div"),a=document.createElement("div"),c=document.createElement("i");o.classList.add("modal-wrapper"),c.classList.add("icon-close"),a.classList.add("review-item__modal"),a.innerHTML=e,a.appendChild(c),o.appendChild(a),t.appendChild(o),n.classList.add("backdrop_opened"),o.classList.add("modal-wrapper_opened"),c.addEventListener("click",function(){n.classList.remove("backdrop_opened"),o.remove("modal-wrapper_opened")})},r=function(e,t,n){var a=Object(o["a"])(document.querySelectorAll(e)),c=document.createElement("a");c.classList.add("crop-text__button"),c.innerText="Развернуть текст",a.forEach(function(e){e.classList.add("crop-text");var o,a=window.getComputedStyle(e,null),r=Math.round(Number(a.getPropertyValue("line-height").replace("px",""))),l=Math.round(Number(a.getPropertyValue("height").replace("px",""))),s=e.innerHTML.split(" "),u=e.textContent,d=document.createElement("span"),f=e.parentElement.innerHTML;if(l/r>=t){e.style.height="".concat(r*t,"px"),e.style.overflow="hidden";do{s.pop(),e.innerHTML=s.join(" "),o=u.replace(e.textContent,""),e.appendChild(c)}while(e.scrollHeight>e.offsetHeight);d.textContent=o,e.appendChild(d),c.addEventListener("click",function(t){t.preventDefault();var o=t.target;o.classList.add("open"),n?e.style.height="".concat(l,"px"):i(f)})}})};window.addEventListener("load",function(){r(".review-item__text",3,!1),r(".seo-text__content",5,!0)});n("f416");document.addEventListener("DOMContentLoaded",function(){var e=Object(o["a"])(document.querySelectorAll("[data-modal-target]")),t=document.querySelector(".backdrop"),n=Object(o["a"])(document.querySelectorAll(".icon-close")),a=Object(o["a"])(document.querySelectorAll(".modal-wrapper"));e.forEach(function(e){var n=e.dataset.modalTarget.replace("#",""),o=document.getElementById(n);e.addEventListener("click",function(e){e.preventDefault();var n=e.target;n.classList.contains("nobackdrop")||t.classList.add("backdrop_opened"),o.classList.add("modal-wrapper_opened")})}),n.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),t.classList.remove("backdrop_opened"),a.forEach(function(e){return e.classList.remove("modal-wrapper_opened")})})}),t.addEventListener("click",function(e){e.preventDefault();var t=e.target;t.classList.remove("backdrop_opened"),a.forEach(function(e){return e.classList.remove("modal-wrapper_opened")})})}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-navigation"),n=Object(o["a"])(document.querySelectorAll(".dropdown-list")),a=Object(o["a"])(document.querySelectorAll(".dropdown-list__label"));e.addEventListener("click",function(e){e.preventDefault(),t.classList.add("active")}),t.addEventListener("click",function(e){e.preventDefault();var t=e.target,n=t.classList.contains("mobile-navigation");n&&t.classList.remove("active")}),n.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=e.target,n=t.classList.contains("dropdown-list__label");n&&(a.filter(function(e){return e!==t}).forEach(function(e){return e.classList.remove("active")}),t.classList.toggle("active"))})})}),document.addEventListener("DOMContentLoaded",function(){var e=Object(o["a"])(document.querySelectorAll(".phone-code"));e.forEach(function(e){var t=e.parentNode.querySelector("input"),n=e.querySelector("ul"),a=e.querySelector(".phone-code__field"),c=e.querySelector("i"),i=n.firstElementChild,r=i.firstElementChild.cloneNode(),l=Object(o["a"])(n.children);e.dataset.phoneCode=i.textContent.trim(),a.insertBefore(r,c),l.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault();var o,c=t.target,i=c.classList.contains("phone-code__item");i&&(o=c.firstElementChild.cloneNode(),e.dataset.phoneCode=c.textContent.trim(),a.replaceChild(o,a.firstElementChild),n.classList.remove("phone-code__list_open"))})}),a.addEventListener("click",function(e){n.classList.toggle("phone-code__list_open")}),t.addEventListener("input",function(e){var t=e.target;console.log(t.value)})})})},6443:function(e,t,n){"use strict";var o=n("ad3b"),a=n.n(o);a.a},"927d":function(e,t,n){"use strict";n.r(t);n("c5f6"),n("ac6a");var o=n("75fc"),a=(n("cadf"),n("551c"),n("f751"),n("097d"),n("a026")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"cart",class:{cart_mobile:!e.fullVersion}},[e.fullVersion?n("i",{staticClass:"icon-cart"}):n("i",{staticClass:"icon-shopping-cart"}),e.fullVersion?e._t("default"):e._e(),n("span",{class:{counter:!e.fullVersion}},[e._v("\n    "+e._s(e.fullVersion?"("+e.count+")":e.count)+"\n  ")])],2)},i=[],r={name:"Cart",data:function(){return{count:14,fullVersion:!0}},mounted:function(){this.$nextTick(function(){var e=this;this.fullVersion=!window.matchMedia("(max-width: 1024px)").matches,window.addEventListener("resize",function(){e.fullVersion=!window.matchMedia("(max-width: 1024px)").matches})})}},l=r,s=(n("6443"),n("2877")),u=Object(s["a"])(l,c,i,!1,null,"8facc67a",null),d=u.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"category-list__item-button",on:{click:e.getData}},[e._v("\n  в корзину\n  "),e._t("default")],2)},p=[],m={name:"CategoryButton",props:{dataPrice:{type:Number,required:!0,default:0},dataItemId:{type:Number,required:!0,default:0}},methods:{getData:function(){console.log(this.dataPrice,this.dataItemId,this)}}},v=m,h=(n("4695"),Object(s["a"])(v,f,p,!1,null,null,null)),_=h.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.question?n("question",{on:{"close-modal":e.closeModal,"choose-location":e.view}}):n("location-form",{attrs:{mobile:e.mobile},on:{"close-modal":e.closeModal}})},y=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"city-modal",on:{click:e.close}},[e.mobile?e._e():n("span",{staticClass:"city-modal__mobile-heading"},[n("span",{staticClass:"fas fa-chevron-left",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}}),e._v(" Выбор города доставки\n  ")]),e.mobile?n("h2",{staticClass:"city-modal__heading"},[e._v("\n    Ваш город доставки\n  ")]):e._e(),e.mobile?n("field",{ref:"locationCountries",attrs:{list:e.countries,placeholder:"Введите страну"}}):e._e(),n("field",{ref:"locationCities",attrs:{list:e.cities,placeholder:"Введите населённый пункт"}}),e.mobile?n("button",{staticClass:"city-modal__submit",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}},[e._v("\n    Да, верно\n  ")]):n("button",{staticClass:"city-modal__submit",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}},[e._v("\n    Готово\n  ")]),e.mobile?n("i",{staticClass:"icon-close",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}}):e._e()],1)},w=[],L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"city-modal__field search-field",class:{"city-modal__field_drop":e.open}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.field,expression:"field"}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.field},on:{input:[function(t){t.target.composing||(e.field=t.target.value)},function(t){e.open=!0}]}}),n("ul",{staticClass:"city-list",class:{"city-list_opened":e.open}},e._l(e.inputFiltering,function(t,o){return n("li",{key:o,staticClass:"city-list__item",on:{click:function(n){return e.setValue(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])}),0),n("span",{staticClass:"fas fa-chevron-down",class:{up:e.open},on:{click:function(t){t.preventDefault(),e.open=!e.open}}})])},E=[],C=(n("3b2b"),{name:"Field",props:{list:{type:Array,required:!0,default:function(){return[]}},placeholder:{type:String,required:!0,default:""}},data:function(){return{open:!1,field:""}},computed:{inputFiltering:function(){var e=new RegExp(this.field,"i");return Object(o["a"])(this.list.filter(function(t){return e.test(t)}))}},methods:{setValue:function(e){this.field=e,this.open=!1}}}),x=C,O=(n("3e82"),Object(s["a"])(x,L,E,!1,null,"212ec3c4",null)),q=O.exports,k={name:"LocationForm",props:{mobile:{type:Boolean,required:!0,default:!1}},components:{Field:q},data:function(){return{countries:["Австралия","Венгрия","Германия","Италия","Китай","Литва","Польша","Россия","США","Чехия"],cities:["Куйбышев","Купино","Курильск","Москва","Волгоград","Екатеринбург","Уфа","Норильск","Красноярск","Пенза"]}},methods:{close:function(e){var t=e.target;t.classList.contains("city-modal")&&(this.$refs.locationCountries.open=!1,this.$refs.locationCities.open=!1)}}},S=k,j=(n("edf5"),Object(s["a"])(S,g,w,!1,null,"21c17648",null)),D=j.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"city-modal"},[e._m(0),n("button",{staticClass:"city-modal__button active",on:{click:function(t){return e.$emit("close-modal")}}},[e._v("\n    Да, верно\n  ")]),n("button",{staticClass:"city-modal__button",on:{click:function(t){return e.$emit("choose-location")}}},[e._v("\n    Нет, другой\n  ")])])},A=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"city-modal__question"},[e._v("\n    Доставка заказа "),n("br"),e._v(" по Москве и области?\n  ")])}],$={name:"Question"},V=$,P=(n("bca1"),Object(s["a"])(V,M,A,!1,null,"572cd656",null)),T=P.exports,N=document.querySelector(".backdrop"),H=Object(o["a"])(document.querySelectorAll(".modal-wrapper")),I={name:"Location",components:{LocationForm:D,Question:T},data:function(){return{question:!0,mobile:!0}},mounted:function(){window.matchMedia("(max-width: 767px)").matches&&(this.mobile=!1,this.question=!1)},methods:{view:function(){this.question=!this.question},closeModal:function(){N.classList.remove("backdrop_opened"),H.forEach(function(e){return e.classList.remove("modal-wrapper_opened")})}}},F=I,B=Object(s["a"])(F,b,y,!1,null,null,null),J=B.exports,Q=n("2f62");a["a"].use(Q["a"]);var Y=new Q["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({store:Y,components:{"location-modal":J}}).$mount("location-modal"),new a["a"]({store:Y,components:{"product-cart":d}}).$mount("product-cart");var z=Object(o["a"])(document.querySelectorAll(".category-button"));z.forEach(function(e){new a["a"]({store:Y,render:function(t){return t(_,{props:{dataPrice:Number(e.dataset.price),dataItemId:Number(e.dataset.itemId)}})}}).$mount("#".concat(e.id))})},ad3b:function(e,t,n){},bca1:function(e,t,n){"use strict";var o=n("265a"),a=n.n(o);a.a},bfd7:function(e,t){var n=document.querySelector(".header__top"),o=document.querySelector(".header__middle");document.addEventListener("DOMContentLoaded",function(){window.addEventListener("scroll",function(e){var t=n.offsetHeight+o.offsetHeight,a=window.scrollY;a>=t&&!window.matchMedia("(max-width: 768px)").matches?n.classList.add("header__top_scroll"):n.classList.remove("header__top_scroll")})})},c748:function(e,t,n){},e2fe:function(e,t,n){},edf5:function(e,t,n){"use strict";var o=n("2971"),a=n.n(o);a.a},ef82:function(e,t,n){},f416:function(e,t){document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".scroll-top");document.addEventListener("scroll",function(t){var n=window.innerHeight,o=window.pageYOffset;o>n?e.classList.add("scroll-top_visible"):e.classList.remove("scroll-top_visible")}),e.addEventListener("click",function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})})}});
//# sourceMappingURL=index-legacy.b4106e24.js.map