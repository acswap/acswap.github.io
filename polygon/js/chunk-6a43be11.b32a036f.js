(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a43be11"],{"0d2f":function(e,t,s){e.exports=s.p+"img/polygon.dce498af.svg"},"39fb":function(e,t,s){e.exports=s.p+"img/logo1.6c4a2b46.svg"},"5b92":function(e,t,s){"use strict";s("b87a")},"61f5":function(e,t,s){e.exports=s.p+"img/heco.38c7e890.svg"},"68d4":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:1==e.$ccstyle1?"mk-header":"mk-header1"},[n("img",{attrs:{src:s("39fb")}}),n("div",{staticClass:"account",on:{click:function(t){e.selectChain=!0}}},[n("img",{attrs:{src:s("0d2f")}}),n("span",{domProps:{textContent:e._s(e.address)}}),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.selectChain,expression:"selectChain"}],class:"en"==e.$i18n.locale?"en":""},[n("li",{on:{click:function(t){return t.stopPropagation(),e.message("以太坊")}}},[n("img",{attrs:{src:s("d091")}}),n("span",[e._v(e._s(e.$t("mkHeader.text6")))])]),n("li",{on:{click:function(t){return t.stopPropagation(),e.stop.apply(null,arguments)}}},[n("img",{attrs:{src:s("dfa5")}}),n("span",[e._v(e._s(e.$t("mkHeader.text7")))])]),n("li",{on:{click:function(t){return t.stopPropagation(),e.message("币安")}}},[n("img",{attrs:{src:s("7ba0")}}),n("span",[e._v(e._s(e.$t("mkHeader.text8")))])]),n("li",{on:{click:function(t){return t.stopPropagation(),e.message("火币")}}},[n("img",{attrs:{src:s("61f5")}}),n("span",[e._v(e._s(e.$t("mkHeader.text9")))])]),n("li",{on:{click:function(t){return t.stopPropagation(),e.message("Okex")}}},[n("img",{attrs:{src:s("d69c")}}),n("span",[e._v("OkexChain")])]),n("li",{on:{click:function(t){t.stopPropagation(),e.selectChain=!1}}},[n("img",{attrs:{src:s("0d2f")}}),n("span",[e._v("Polygon")])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.selectChain,expression:"selectChain"}],staticClass:"overlay",on:{click:function(t){t.stopPropagation(),e.selectChain=!1}}})]),e.$ccstyle1?n("img",{attrs:{src:s("bef3")},on:{click:function(t){e.showMenus=!e.showMenus}}}):n("img",{attrs:{src:s("d4cb")},on:{click:function(t){e.showMenus=!e.showMenus}}}),n("nft-menus",{on:{setting:e.openSetting,close:function(t){e.showMenus=!1}},model:{value:e.showMenus,callback:function(t){e.showMenus=t},expression:"showMenus"}})],1)},o=[],a=(s("d3b7"),s("3ca3"),s("ddb0"),s("99af"),s("fb6a"),{components:{"nft-menus":function(){return Promise.all([s.e("chunk-1c4f7b50"),s.e("chunk-3ec7a04c")]).then(s.bind(null,"595e"))}},data:function(){return{wallet:!1,menus:!1,address:"",showMenus:!1,selectChain:!1}},created:function(){this.$address&&(this.address="".concat(this.$address.slice(0,5),"...").concat(this.$address.slice(-3)))},methods:{stop:function(){vant.Toast.fail(this.$t("mkHeader.text5"))},changeLanguage:function(e){this.$i18n.locale=e,localStorage.setItem("language",e)},openSetting:function(){this.$store.commit("setShowSetting",!0)},message:function(e){return this.selectChain=!1,vant.Toast.fail("请切换到".concat(e,"节点"))}}}),c=a,i=c,r=(s("5b92"),s("2877")),u=Object(r["a"])(i,n,o,!1,null,"729f13da",null);t["default"]=u.exports},"7ba0":function(e,t,s){e.exports=s.p+"img/bsc.9a9b7f28.svg"},b87a:function(e,t,s){},bef3:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAqCAYAAAD1T9h6AAABe0lEQVRoQ+2ZoUuEQRDFf3NwatBDEIug/g8Go//I2cRwQYMIJovZbNUqCjaDWbAIIlywaRUEkTsV9byREQwGYe6W5XNhNm2YmW/ee7Mf+1hR1S2FDWAaEMpYH8ClwIr0VZ+ARhl9/+ryU+HIAHSA8RIBACeiqtsKm8BEQSPUB64EVkuZ+T8HJABUfXZCgVAgkYEYoUQCk9NDgWQKEwuEAokEJqeHAskUJhaw63QNmANmAdtXsRQwX3InIo+DNGAA9hWaQH2QxAyxdse/EdgRkUNvfXNkr8CYNyFz3Atw2oVWQ+TB8y0DcP+PDH1H4bgG6yLSdQFQ1aZCC5ip0FLaGegqnPdgb1Sk7WneYuI36mUqV1wokItZb91QwMtUrrhQIBez3rqhgJepXHGhQC5mvXVDAS9TueLMkdnLzBIwVdDttAe0ReTaDM0FsFihHx5WnGeBNQPwBowMW6XCPPPQZwbgFpgvaHx+OOsJ7Mq76kIdloHJgkB8v1ICB18VZmFmDKC1wQAAAABJRU5ErkJggg=="},d091:function(e,t,s){e.exports=s.p+"img/ethereum.91b85e63.svg"},d4cb:function(e,t,s){e.exports=s.p+"img/menus01.c36a6472.svg"},d69c:function(e,t,s){e.exports=s.p+"img/okex.cda6f267.svg"},dfa5:function(e,t,s){e.exports=s.p+"img/tron.f0bc2244.svg"}}]);