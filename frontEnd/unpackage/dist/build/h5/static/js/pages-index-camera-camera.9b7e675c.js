(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-camera-camera"],{"4b8c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{src:""}},methods:{takePhoto:function(){var t=this,e=uni.createCameraContext();e.takePhoto({quality:"high",success:function(e){t.src=e.tempImagePath}})},error:function(e){t("log",e.detail," at pages/index/camera/camera.vue:28")}}};e.default=n}).call(this,n("0de9")["log"])},"7ae2":function(t,e,n){"use strict";n.r(e);var a=n("b092"),r=n("e420");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var c,u=n("f0c5"),o=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"10bb8147",null,!1,a["a"],c);e["default"]=o.exports},b092:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-camera",{staticStyle:{width:"100%",height:"300px"},attrs:{"device-position":"back",flash:"off"},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)}}}),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.takePhoto.apply(void 0,arguments)}}},[t._v("拍照")]),n("v-uni-view",[t._v("预览")]),n("v-uni-image",{attrs:{mode:"widthFix",src:t.src}})],1)},i=[]},e420:function(t,e,n){"use strict";n.r(e);var a=n("4b8c"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a}}]);