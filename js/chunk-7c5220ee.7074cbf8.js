(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c5220ee"],{"36a2":function(e,t,s){"use strict";s("87b5")},"799b":function(e,t,s){"use strict";s("9dfd")},"87b5":function(e,t,s){},"9dfd":function(e,t,s){},bab4:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-popup",{attrs:{round:"",position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("div",{staticClass:"search-token"},[n("van-search",{attrs:{"show-action":"",placeholder:e.$t("searchToken.text1"),"action-text":e.$t("searchToken.text7")},on:{input:e.onInput,cancel:e.close},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("span",{staticClass:"title"},[e._v(e._s(e.$t("searchToken.text2")))]),n("div",{staticClass:"referral-tokens"},[n("div",e._l(e.hotList,(function(t){return n("div",{key:t.address,on:{click:function(s){return e.select(t)}}},[n("img",{attrs:{src:t.logoURI}}),n("span",{domProps:{textContent:e._s(t.symbol)}})])})),0)]),n("span",{staticClass:"title"},[e._v(e._s(e.$t("searchToken.text3")))]),n("div",{staticClass:"all-tokens"},[n("van-list",{directives:[{name:"show",rawName:"v-show",value:!e.empty&&!e.searching,expression:"!empty && !searching"}],attrs:{finished:e.finished,"finished-text":e.$t("searchToken.text4")},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.allTokens,(function(t){return n("div",{key:t.address,on:{click:function(s){return e.select(t)}}},[n("div",[n("img",{attrs:{src:t.logoURI}}),n("div",[n("span",{class:void 0!==t.balance?"icon":"",domProps:{textContent:e._s(t.symbol)}}),n("span",{domProps:{textContent:e._s(t.name)}})])]),n("div",[void 0!==t.balance?n("span",[e._v(e._s(t.balance))]):n("span"),n("span",{domProps:{textContent:e._s(t.address.slice(0,5)+"..."+t.address.slice(-5))}})])])})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:e.empty&&!e.searching,expression:"empty && !searching"}],staticClass:"empty"},[n("img",{attrs:{src:s("d4cd")}}),n("span",[e._v(e._s(e.$t("searchToken.text5")))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.searching,expression:"searching"}],staticClass:"loading"},[n("van-loading",{attrs:{type:"spinner",color:"#3C94FF","text-color":"#404D66",vertical:""}},[e._v(e._s(e.$t("searchToken.text6")))])],1)],1)],1)])},a=[],o=s("1da1"),r=s("5530"),i=(s("96cf"),s("d3b7"),s("4795"),s("4de4"),s("caad"),s("2532"),s("b0c0"),s("fb6a"),s("4160"),s("159b"),s("b680"),s("99af"),s("b9cc")),c={},d={data:function(){return{value:"",show:!1,hotList:[],allTokens:[],cacheTokens:[],loading:!1,finished:!1,empty:!1,searching:!1,who:"",start:0,end:10}},computed:Object(r["a"])(Object(r["a"])({},Vuex.mapState(["chainId"])),{},{tokensURI:function(){var e="bsc";switch(this.chainId){case 0:e="tron";break;case 1:e="eth";break;case 56:e="bsc";break;case 66:e="okex";break;case 128:e="heco";break;case 137:e="polygon";break;case 10001:e="ethw";break;case 513100:e="ethf";break}return"https://acswapinfo.github.io/tokens/ac_".concat(e,"_tokens.json")}}),created:function(){var e=this;this.$address&&fetch(this.tokensURI).then((function(e){return e.json()})).then((function(t){e.hotList=t.hot,c=t}))},methods:{onInput:function(){var e=this;if(""===this.value)return this.empty=!1,this.start=10,this.end=20,this.searching=!1,this.allTokens=this.cacheTokens,!1;if(this.searching)return!1;this.searching=!0;var t=setTimeout(Object(o["a"])(regeneratorRuntime.mark((function s(){var n,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!(e.value.length>0)){s.next=13;break}if(n=(0==e.chainId?window.tronWeb:e.$web3.utils).isAddress(e.value),!n){s.next=8;break}return s.next=5,e.getTokenByAddress();case 5:s.t0=s.sent,s.next=9;break;case 8:s.t0=e.getTokenBySymbol();case 9:a=s.t0,e.empty=0===a.length,e.allTokens=a,e.searching=!1;case 13:clearTimeout(t);case 14:case"end":return s.stop()}}),s)}))),500)},getTokenBySymbol:function(){var e=this;return c.all.filter((function(t){return t.symbol.includes(e.value.toUpperCase())}))},getTokenByAddress:function(){var e=this,t=c.all.filter((function(t){return t.address.toLowerCase()===e.value.toLowerCase()}));return t.length>0?t:new Promise((function(t){if(0==e.chainId)window.tronWeb.transactionBuilder.triggerConstantContract(e.$Multicall.address,"aggregate((address,bytes)[])",{},[{type:"(address,bytes)[]",value:[[e.value.toHex(),"name()".encodeFunction()],[e.value.toHex(),"symbol()".encodeFunction()],[e.value.toHex(),"decimals()".encodeFunction()],[e.value.toHex(),"balanceOf(address)".encodeFunction(["address"],[e.$address])]]}],e.address).then((function(s){var n=s.constant_result[0].decode([{name:"blockNumber",type:"uint256"},{name:"returnData",type:"bytes[]"}]),a=n.returnData,o=a[2].decode(["uint8"]);t([{decimals:o,address:e.value,name:a[0].decode(["string"]),symbol:a[1].decode(["string"]),balance:a[3].fromWei(o),logoURI:"https://acswapinfo.github.io/tokens/bsc/unknown.svg"}])}))["catch"]((function(e){return t([])}));else{var s=new e.$web3.BatchRequest,n=new e.$web3.eth.Contract(i,e.value);s.add(n.methods.name().call.request({from:e.address})),s.add(n.methods.symbol().call.request({from:e.address})),s.add(n.methods.decimals().call.request({from:e.address})),s.add(n.methods.balanceOf(e.$address).call.request({from:e.$address})),s.requestManager.sendBatch(s.requests,(function(s,n){if(s)t([]);else{var a=("string"===typeof n[0]?n[0]:n[0].result).decode(["string"]),o=n[1].result.decode(["string"]),r=n[2].result.decode(["uint8"]),i=n[3].result.fromWei(r);t([{name:a,symbol:o,balance:i,decimals:r,address:e.value,logoURI:"https://acswapinfo.github.io/tokens/bsc/unknown.svg"}])}}))}}))},open:function(e){this.show=!0,this.who=e},close:function(){this.show=!1},select:function(e){this.$emit("select",{token:e,who:this.who}),this.show=!1},onLoad:function(){var e=this;if(this.end>=c.all.length&&this.start>=c.all.length)return this.loading=!1,this.finished=!0,!1;var t=c.all.slice(this.start,this.end);if(0==this.chainId){for(var s=[],n=0;n<t.length;n++)s.push([t[n].address.toHex(),"balanceOf(address)".encodeFunction(["address"],[this.$address])]);window.tronWeb.transactionBuilder.triggerConstantContract(this.$Multicall.address,"aggregate((address,bytes)[])",{},[{type:"(address,bytes)[]",value:s}],this.address).then((function(s){var n=s.constant_result[0].decode([{name:"blockNumber",type:"uint256"},{name:"returnData",type:"bytes[]"}]),a=n.returnData;a.forEach((function(e,s){t[s].balance=e.fromWei(t[s].decimals).toFixed(4)})),0===e.start&&10===e.end&&(e.cacheTokens=t),e.allTokens=e.allTokens.concat(t),e.loading=!1,e.start=e.end,e.end+=10}))}else{for(var a=new this.$web3.BatchRequest,o=0;o<t.length;o++){var r=new this.$web3.eth.Contract(i,t[o].address);a.add(r.methods.balanceOf(this.$address).call.request({from:this.$address}))}a.requestManager.sendBatch(a.requests,(function(s,n){s||(n.forEach((function(e,s){t[s].balance=("string"===typeof e?e:e.result).fromWei(t[s].decimals).toFixed(4)})),0===e.start&&10===e.end&&(e.cacheTokens=t),e.allTokens=e.allTokens.concat(t),e.loading=!1,e.start=e.end,e.end+=10)}))}}}},l=d,u=l,h=(s("799b"),s("36a2"),s("2877")),f=Object(h["a"])(u,n,a,!1,null,"3998641e",null);t["default"]=f.exports},d4cd:function(e,t,s){e.exports=s.p+"img/tokens-empty.9a7b08f1.png"}}]);