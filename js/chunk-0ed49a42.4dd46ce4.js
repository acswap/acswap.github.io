(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ed49a42"],{"382b":function(e,n,t){e.exports=t.p+"img/polygon.2a5f30eb.svg"},"659f":function(e,n,t){e.exports=t.p+"img/ethereum.61b46d49.svg"},"68d4":function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{class:1==e.$ccstyle1?"mk-header":"mk-header1"},[s("img",{attrs:{src:t("d290")},on:{click:function(n){return e.$router.push("/")}}}),s("div",{staticClass:"account",on:{click:function(n){return e.$store.commit("setShowChainList",!0)}}},[s("img",{attrs:{src:e.chainLogo}}),s("span",{domProps:{textContent:e._s(e.address)}}),s("i",{directives:[{name:"show",rawName:"v-show",value:e.address,expression:"address"}]})]),e.$ccstyle1?s("img",{attrs:{src:t("bef3")},on:{click:function(n){e.showMenus=!e.showMenus}}}):s("img",{attrs:{src:t("d4cb")},on:{click:function(n){e.showMenus=!e.showMenus}}}),s("nft-menus",{on:{setting:e.openSetting,close:function(n){e.showMenus=!1}},model:{value:e.showMenus,callback:function(n){e.showMenus=n},expression:"showMenus"}})],1)},o=[],c=t("5530"),i=(t("d3b7"),t("3ca3"),t("ddb0"),t("99af"),t("fb6a"),{0:t("7e6c"),1:t("659f"),56:t("fa64"),66:t("8f1f"),128:t("8c9f"),137:t("382b"),10001:t("f342"),513100:t("afd9")}),a={components:{"nft-menus":function(){return Promise.all([t.e("chunk-1c4f7b50"),t.e("chunk-f1e36868")]).then(t.bind(null,"595e"))}},data:function(){return{wallet:!1,menus:!1,address:"",showMenus:!1}},computed:Object(c["a"])(Object(c["a"])({},Vuex.mapState(["theme","chainId","showChainList"])),{},{chainLogo:function(){return i[this.chainId]}}),created:function(){this.$address&&(this.address="".concat(this.$address.slice(0,5),"...").concat(this.$address.slice(-3)))},methods:{changeLanguage:function(e){this.$i18n.locale=e,localStorage.setItem("language",e)},openSetting:function(){this.$store.commit("setShowSetting",!0)}}},u=a,r=u,f=(t("ff20"),t("2877")),d=Object(f["a"])(r,s,o,!1,null,"6eb76612",null);n["default"]=d.exports},"7e6c":function(e,n,t){e.exports=t.p+"img/tron.80d8ca5d.svg"},"8c9f":function(e,n,t){e.exports=t.p+"img/heco.2f0d32ff.svg"},"8f1f":function(e,n,t){e.exports=t.p+"img/okex.bec7e7c9.svg"},a344:function(e,n,t){},afd9:function(e,n,t){e.exports=t.p+"img/ethf.97c9c832.svg"},bef3:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAqCAYAAAD1T9h6AAABe0lEQVRoQ+2ZoUuEQRDFf3NwatBDEIug/g8Go//I2cRwQYMIJovZbNUqCjaDWbAIIlywaRUEkTsV9byREQwGYe6W5XNhNm2YmW/ee7Mf+1hR1S2FDWAaEMpYH8ClwIr0VZ+ARhl9/+ryU+HIAHSA8RIBACeiqtsKm8BEQSPUB64EVkuZ+T8HJABUfXZCgVAgkYEYoUQCk9NDgWQKEwuEAokEJqeHAskUJhaw63QNmANmAdtXsRQwX3InIo+DNGAA9hWaQH2QxAyxdse/EdgRkUNvfXNkr8CYNyFz3Atw2oVWQ+TB8y0DcP+PDH1H4bgG6yLSdQFQ1aZCC5ip0FLaGegqnPdgb1Sk7WneYuI36mUqV1wokItZb91QwMtUrrhQIBez3rqhgJepXHGhQC5mvXVDAS9TueLMkdnLzBIwVdDttAe0ReTaDM0FsFihHx5WnGeBNQPwBowMW6XCPPPQZwbgFpgvaHx+OOsJ7Mq76kIdloHJgkB8v1ICB18VZmFmDKC1wQAAAABJRU5ErkJggg=="},d290:function(e,n,t){e.exports=t.p+"img/LOGO.7974ebb9.gif"},d4cb:function(e,n,t){e.exports=t.p+"img/menus01.c36a6472.svg"},f342:function(e,n,t){e.exports=t.p+"img/ethw.8624c493.svg"},fa64:function(e,n,t){e.exports=t.p+"img/bsc.08e1d436.svg"},ff20:function(e,n,t){"use strict";t("a344")}}]);