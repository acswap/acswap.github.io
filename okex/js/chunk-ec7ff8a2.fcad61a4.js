(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec7ff8a2"],{"0d2f":function(t,e,n){t.exports=n.p+"img/polygon.dce498af.svg"},"2a72":function(t,e,n){"use strict";n("9fab")},"39fb":function(t,e,n){t.exports=n.p+"img/logo1.6c4a2b46.svg"},"61f5":function(t,e,n){t.exports=n.p+"img/heco.38c7e890.svg"},"68d4":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:1==t.$ccstyle1?"mk-header":"mk-header1"},[s("img",{attrs:{src:n("39fb")}}),s("div",{staticClass:"account",on:{click:function(e){t.selectChain=!0}}},[s("img",{attrs:{src:n("d69c")}}),s("span",{domProps:{textContent:t._s(t.address)}}),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.selectChain,expression:"selectChain"}],class:"en"==t.$i18n.locale?"en":""},[s("li",{on:{click:function(e){return e.stopPropagation(),t.message("以太坊")}}},[s("img",{attrs:{src:n("d091")}}),s("span",[t._v(t._s(t.$t("mkHeader.text6")))])]),s("li",{on:{click:function(e){return e.stopPropagation(),t.stop.apply(null,arguments)}}},[s("img",{attrs:{src:n("dfa5")}}),s("span",[t._v(t._s(t.$t("mkHeader.text7")))])]),s("li",{on:{click:function(e){return e.stopPropagation(),t.message("币安")}}},[s("img",{attrs:{src:n("7ba0")}}),s("span",[t._v(t._s(t.$t("mkHeader.text8")))])]),s("li",{on:{click:function(e){return e.stopPropagation(),t.message("火币")}}},[s("img",{attrs:{src:n("61f5")}}),s("span",[t._v(t._s(t.$t("mkHeader.text9")))])]),s("li",{on:{click:function(e){e.stopPropagation(),t.selectChain=!1}}},[s("img",{attrs:{src:n("d69c")}}),s("span",[t._v("OkexChain")])]),s("li",{on:{click:function(e){return e.stopPropagation(),t.message("Polygon")}}},[s("img",{attrs:{src:n("0d2f")}}),s("span",[t._v("Polygon")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.selectChain,expression:"selectChain"}],staticClass:"overlay",on:{click:function(e){e.stopPropagation(),t.selectChain=!1}}})]),t.$ccstyle1?s("img",{attrs:{src:n("bef3")},on:{click:function(e){t.showMenus=!t.showMenus}}}):s("img",{attrs:{src:n("d4cb")},on:{click:function(e){t.showMenus=!t.showMenus}}}),s("nft-menus",{on:{setting:t.openSetting,close:function(e){t.showMenus=!1}},model:{value:t.showMenus,callback:function(e){t.showMenus=e},expression:"showMenus"}})],1)},o=[],a=(n("d3b7"),n("3ca3"),n("ddb0"),n("99af"),n("fb6a"),{components:{"nft-menus":function(){return Promise.all([n.e("chunk-1c4f7b50"),n.e("chunk-3ec7a04c")]).then(n.bind(null,"595e"))}},data:function(){return{wallet:!1,menus:!1,address:"",showMenus:!1,selectChain:!1}},created:function(){this.$address&&(this.address="".concat(this.$address.slice(0,5),"...").concat(this.$address.slice(-3)))},methods:{stop:function(){vant.Toast.fail(this.$t("mkHeader.text5"))},changeLanguage:function(t){this.$i18n.locale=t,localStorage.setItem("language",t)},openSetting:function(){this.$store.commit("setShowSetting",!0)},message:function(t){return this.selectChain=!1,vant.Toast.fail("请切换到".concat(t,"节点"))}}}),c=a,i=c,r=(n("2a72"),n("2877")),u=Object(r["a"])(i,s,o,!1,null,"877c1a16",null);e["default"]=u.exports},"7ba0":function(t,e,n){t.exports=n.p+"img/bsc.9a9b7f28.svg"},"9fab":function(t,e,n){},bef3:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAqCAYAAAD1T9h6AAABe0lEQVRoQ+2ZoUuEQRDFf3NwatBDEIug/g8Go//I2cRwQYMIJovZbNUqCjaDWbAIIlywaRUEkTsV9byREQwGYe6W5XNhNm2YmW/ee7Mf+1hR1S2FDWAaEMpYH8ClwIr0VZ+ARhl9/+ryU+HIAHSA8RIBACeiqtsKm8BEQSPUB64EVkuZ+T8HJABUfXZCgVAgkYEYoUQCk9NDgWQKEwuEAokEJqeHAskUJhaw63QNmANmAdtXsRQwX3InIo+DNGAA9hWaQH2QxAyxdse/EdgRkUNvfXNkr8CYNyFz3Atw2oVWQ+TB8y0DcP+PDH1H4bgG6yLSdQFQ1aZCC5ip0FLaGegqnPdgb1Sk7WneYuI36mUqV1wokItZb91QwMtUrrhQIBez3rqhgJepXHGhQC5mvXVDAS9TueLMkdnLzBIwVdDttAe0ReTaDM0FsFihHx5WnGeBNQPwBowMW6XCPPPQZwbgFpgvaHx+OOsJ7Mq76kIdloHJgkB8v1ICB18VZmFmDKC1wQAAAABJRU5ErkJggg=="},d091:function(t,e,n){t.exports=n.p+"img/ethereum.91b85e63.svg"},d4cb:function(t,e,n){t.exports=n.p+"img/menus01.c36a6472.svg"},d69c:function(t,e,n){t.exports=n.p+"img/okex.cda6f267.svg"},dfa5:function(t,e,n){t.exports=n.p+"img/tron.f0bc2244.svg"}}]);