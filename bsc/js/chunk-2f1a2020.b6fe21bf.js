(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f1a2020"],{"0355":function(e,t,n){},"799b":function(e,t,n){"use strict";n("9dfd")},"9dfd":function(e,t,n){},aad0:function(e,t,n){"use strict";n("0355")},bab4:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("van-popup",{attrs:{round:"",position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[s("div",{staticClass:"search-token"},[s("van-search",{attrs:{"show-action":"",placeholder:e.$t("searchToken.text1")},on:{input:e.onInput,cancel:e.close},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),s("span",{staticClass:"title"},[e._v(e._s(e.$t("searchToken.text2")))]),s("div",{staticClass:"referral-tokens"},[s("div",e._l(e.hotList,(function(t){return s("div",{key:t.address,on:{click:function(n){return e.select(t)}}},[s("img",{attrs:{src:t.logoURI}}),s("span",{domProps:{textContent:e._s(t.symbol)}})])})),0)]),s("span",{staticClass:"title"},[e._v(e._s(e.$t("searchToken.text3")))]),s("div",{staticClass:"all-tokens"},[s("van-list",{directives:[{name:"show",rawName:"v-show",value:!e.empty&&!e.searching,expression:"!empty && !searching"}],attrs:{finished:e.finished,"finished-text":e.$t("searchToken.text4")},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.allTokens,(function(t){return s("div",{key:t.address,on:{click:function(n){return e.select(t)}}},[s("div",[s("img",{attrs:{src:t.logoURI}}),s("div",[s("span",{class:void 0!==t.balance?"icon":"",domProps:{textContent:e._s(t.symbol)}}),s("span",{domProps:{textContent:e._s(t.name)}})])]),s("div",[void 0!==t.balance?s("span",[e._v(e._s(t.balance))]):s("span"),s("span",{domProps:{textContent:e._s(t.address.slice(0,5)+"..."+t.address.slice(-5))}})])])})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:e.empty&&!e.searching,expression:"empty && !searching"}],staticClass:"empty"},[s("img",{attrs:{src:n("d4cd")}}),s("span",[e._v(e._s(e.$t("searchToken.text5")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.searching,expression:"searching"}],staticClass:"loading"},[s("van-loading",{attrs:{type:"spinner",color:"#3C94FF","text-color":"#404D66",vertical:""}},[e._v(e._s(e.$t("searchToken.text6")))])],1)],1)],1)])},a=[],o=n("1da1"),i=(n("96cf"),n("d3b7"),n("4795"),n("4de4"),n("caad"),n("2532"),n("fb6a"),n("4160"),n("159b"),n("b680"),n("99af"),n("b9cc")),r={},c={data:function(){return{value:"",show:!1,hotList:[],allTokens:[],cacheTokens:[],loading:!1,finished:!1,empty:!1,searching:!1,who:"",start:0,end:10}},created:function(){var e=this;fetch("https://chainconfig.github.io/bsc/ac_bsc_tokens.json").then((function(e){return e.json()})).then((function(t){e.hotList=t.hot,r=t}))},methods:{onInput:function(){var e=this;if(""===this.value)return this.empty=!1,this.start=10,this.end=20,this.searching=!1,this.allTokens=this.cacheTokens,!1;if(this.searching)return!1;this.searching=!0;var t=setTimeout(Object(o["a"])(regeneratorRuntime.mark((function n(){var s,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.value.length>0&&(s=e.$web3.utils.isAddress(e.value),a=s?e.getTokenByAddress():e.getTokenBySymbol(),e.empty=0===a.length,e.allTokens=a,e.searching=!1),clearTimeout(t);case 2:case"end":return n.stop()}}),n)}))),500)},getTokenBySymbol:function(){var e=this;return r.all.filter((function(t){return t.symbol.includes(e.value.toUpperCase())}))},getTokenByAddress:function(){var e=this;return r.all.filter((function(t){return t.address===e.value}))},open:function(e){this.show=!0,this.who=e},close:function(){this.show=!1},select:function(e){this.$emit("select",{token:e,who:this.who}),this.show=!1},onLoad:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,s,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.end>=r.all.length&&e.start>=r.all.length)){t.next=4;break}return e.loading=!1,e.finished=!0,t.abrupt("return",!1);case 4:for(n=r.all.slice(e.start,e.end),s=new e.$web3.BatchRequest,a=0;a<n.length;a++)o=new e.$web3.eth.Contract(i,n[a].address),s.add(o.methods.balanceOf(e.$address).call.request({from:e.$address}));s.requestManager.sendBatch(s.requests,(function(t,s){t||(s.forEach((function(e,t){n[t].balance=e.result.fromWei(n[t].decamls).toFixed(4)})),0===e.start&&10===e.end&&(e.cacheTokens=n),e.allTokens=e.allTokens.concat(n),e.loading=!1,e.start=e.end,e.end+=10)}));case 8:case"end":return t.stop()}}),t)})))()}}},l=c,d=l,u=(n("799b"),n("aad0"),n("2877")),h=Object(u["a"])(d,s,a,!1,null,"6b11f7f6",null);t["default"]=h.exports},d4cd:function(e,t,n){e.exports=n.p+"img/tokens-empty.9a7b08f1.png"}}]);