(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["joinFundPool","redemption","tokenInfo","chunk-7c5220ee","chunk-7a63f741"],{"01c7":function(e,t,n){},"0430":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-popup",{attrs:{round:"",closeable:"",position:"bottom"},on:{"click-overlay":e.close,"click-close-icon":e.close},model:{value:e.showSetting,callback:function(t){e.showSetting=t},expression:"showSetting"}},[n("div",{staticClass:"trading-setup"},[n("span",{staticClass:"title"},[e._v(e._s(e.$t("tradingSetup.text1")))]),n("div",{staticClass:"slippage-setting"},[n("div",{staticClass:"title"},[n("span",[e._v(e._s(e.$t("tradingSetup.text2")))]),n("div",[n("input",{attrs:{type:"number"},domProps:{value:e.value},on:{input:e.input}}),n("span",[e._v("%")])])]),n("van-slider",{attrs:{min:"1",max:"5",step:"0.5","button-size":"15","active-color":"#0DC8B5","inactive-color":"#D8D8D8"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("div",{staticClass:"slider-items"},[n("span",[e._v("1%")]),n("span",[e._v("2%")]),n("span",[e._v("3%")]),n("span",[e._v("4%")]),n("span",[e._v("5%")])]),n("span",[e._v(e._s(e.$t("tradingSetup.text3")))])],1),n("div",{staticClass:"deadline"},[n("div",[n("span",[e._v(e._s(e.$t("tradingSetup.text4")))]),n("van-field",{attrs:{type:"number","input-align":"center"},model:{value:e.deadlineValue,callback:function(t){e.deadlineValue=t},expression:"deadlineValue"}}),n("span",[e._v(e._s(e.$t("tradingSetup.text5")))])],1),n("span",[e._v(e._s(e.$t("tradingSetup.text6")))])]),n("van-button",{attrs:{type:"info"},on:{click:e.setSlipPoint}},[e._v(e._s(e.$t("tradingSetup.text7")))])],1)])},a=[],i=n("5530"),r=(n("a9e3"),{computed:Object(i["a"])({},Vuex.mapState(["showSetting","slippage","deadline"])),data:function(){return{value:2,deadlineValue:10,show:!1,slipPoint:2}},created:function(){this.value=this.slippage,this.slipPoint=this.slippage,this.deadlineValue=this.deadline/60},methods:{close:function(){this.$store.commit("setShowSetting",!1)},setSlipPoint:function(){this.$store.commit("setSlippage",this.slipPoint),this.$store.commit("setDeadline",60*Number(this.deadline)),this.close()},input:function(e){this.slipPoint=e.target.value}}}),o=r,c=o,l=(n("a536"),n("364c"),n("2877")),d=Object(l["a"])(c,s,a,!1,null,"4ccd7c36",null);t["default"]=d.exports},"0861":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:1==e.$ccstyle1?"mk-navbar":"mk-navbar1"},[e.$ccstyle1?s("img",{attrs:{src:n("c590")},on:{click:function(t){return e.$router.back(1)}}}):s("img",{attrs:{src:n("86d4")},on:{click:function(t){return e.$router.back(1)}}}),s("span",{domProps:{textContent:e._s(e.title)}})])},a=[],i={props:{title:{type:String,required:!0}}},r=i,o=r,c=(n("bd1e"),n("2877")),l=Object(c["a"])(o,s,a,!1,null,"3d34d58e",null);t["default"]=l.exports},1169:function(e,t,n){},"364c":function(e,t,n){"use strict";n("1169")},"36a2":function(e,t,n){"use strict";n("87b5")},"799b":function(e,t,n){"use strict";n("9dfd")},"86d4":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAArCAYAAACNWyPFAAADhklEQVRYR63XR6idVRTF8V+MmtgjsYugBg0oZiIklkHAgG0izqwJ0QQjdlBjbAMVFQsIYm8TBRUEBRFFFBQn4sACYkGDDUOw9x5lhf3B9eXed+/3ve9M3uM9zln3nL3Xf+07S/9raxyCe3Ao7prVs8a2OAIPYUGd/VmfInNwDO7HvsjZf+D2vkS2x0m4A7vXDX7FLbi1D5GdcQpuxrwS+BFX40H8PhOR7M2hq3EVdsK/+AaX4skIRLSrSPbthotxIXbAJmzA+Xi+6rH5Yl1EtsJeuAZnIvX4B5/gHLyGPwe7tq3IbOxXBT4Wc/E3PsDZeBN/TbVFG5GYLL2fFl1cAmnRt0rgw2ECbZ5rm3Lvw+XmeOI3vI5V+LRuNNTbk9wkBx6OR7A/4uqf8SrW4MuqyUh4jBPZDkcjN0ix82Q/4YXqqq/GCYx7rvT9sgJd2jVF/x5P43J8W207Fn+jbhKTBRO3YVekbb/Go7geP0wqMOom83EarkOQkbURd+NOBBlx9sRr8Cb5fY/qljzHjnXKF7gBj1fBWwkM3iQCe+MSnFsuDibi4suq0GnZ1gKNSN47Lr4Wp5bJgomPSjBeiEDnlRvExSnwieWBYOE9rMS7g6DrqhKRZ3FceSAcehunY/0oTLQVi8h32KWIHHoGdPHCL11rMAyQawvbQXYK+znW4ZmqRadiT0V9jBdf3Fjplv8nfFKnTB3h1IyEGp/EdCdkRiqH5+8xYDI6Yq0NOCq0EqHNSJOJI62dvH6i2jvcindar6nsCnWPqmfK7NRA8bkyaqAYD7VawwDZ5EfwfiASWHmuVyrDg/e0+sRrFIVz8GF4oBIxQZVhLe5fUfXaIstHqU4XWgmohdUMSwo3maPewRkVuf+bSrqIZE9qEuxk3Gymk9zgfSyvnxkmpl3j4jebG4BeWbiJaVOTYCfT4xvNpNj1Js2+fJhkfKbF8ypr0s6hw0V4cTpST3KTQaFk/VmFnRg4JIhpr8BT1Rxb0KGNSCOWzA+lE88Ba1b8k6n+vmFg7SKSQ3OLk/PdA5kJck68dC9umoqhriIRCoaOr+FizxKKlx6r5wuGNj/dTESyPxhaWrNZIjwtHy8lJi4o9m2aqUiEGgwlFg4qoZj0pWrxDX2IRCgYytfqzMuLSiheCoaW9yXS0OGAEjqyhOKll/sUaeiwT32HCYZCi4/7FmmaKW0dgx6c0PsPjAzCNM08Nz8AAAAASUVORK5CYII="},"87b5":function(e,t,n){},"9dfd":function(e,t,n){},a536:function(e,t,n){"use strict";n("e823")},b0c0:function(e,t,n){var s=n("83ab"),a=n("9bf2").f,i=Function.prototype,r=i.toString,o=/^\s*function ([^ (]*)/,c="name";s&&!(c in i)&&a(i,c,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(e){return""}}})},bab4:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("van-popup",{attrs:{round:"",position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[s("div",{staticClass:"search-token"},[s("van-search",{attrs:{"show-action":"",placeholder:e.$t("searchToken.text1"),"action-text":e.$t("searchToken.text7")},on:{input:e.onInput,cancel:e.close},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),s("span",{staticClass:"title"},[e._v(e._s(e.$t("searchToken.text2")))]),s("div",{staticClass:"referral-tokens"},[s("div",e._l(e.hotList,(function(t){return s("div",{key:t.address,on:{click:function(n){return e.select(t)}}},[s("img",{attrs:{src:t.logoURI}}),s("span",{domProps:{textContent:e._s(t.symbol)}})])})),0)]),s("span",{staticClass:"title"},[e._v(e._s(e.$t("searchToken.text3")))]),s("div",{staticClass:"all-tokens"},[s("van-list",{directives:[{name:"show",rawName:"v-show",value:!e.empty&&!e.searching,expression:"!empty && !searching"}],attrs:{finished:e.finished,"finished-text":e.$t("searchToken.text4")},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.allTokens,(function(t){return s("div",{key:t.address,on:{click:function(n){return e.select(t)}}},[s("div",[s("img",{attrs:{src:t.logoURI}}),s("div",[s("span",{class:void 0!==t.balance?"icon":"",domProps:{textContent:e._s(t.symbol)}}),s("span",{domProps:{textContent:e._s(t.name)}})])]),s("div",[void 0!==t.balance?s("span",[e._v(e._s(t.balance))]):s("span"),s("span",{domProps:{textContent:e._s(t.address.slice(0,5)+"..."+t.address.slice(-5))}})])])})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:e.empty&&!e.searching,expression:"empty && !searching"}],staticClass:"empty"},[s("img",{attrs:{src:n("d4cd")}}),s("span",[e._v(e._s(e.$t("searchToken.text5")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.searching,expression:"searching"}],staticClass:"loading"},[s("van-loading",{attrs:{type:"spinner",color:"#3C94FF","text-color":"#404D66",vertical:""}},[e._v(e._s(e.$t("searchToken.text6")))])],1)],1)],1)])},a=[],i=n("1da1"),r=n("5530"),o=(n("96cf"),n("d3b7"),n("4795"),n("4de4"),n("caad"),n("2532"),n("b0c0"),n("fb6a"),n("4160"),n("159b"),n("b680"),n("99af"),n("b9cc")),c={},l={data:function(){return{value:"",show:!1,hotList:[],allTokens:[],cacheTokens:[],loading:!1,finished:!1,empty:!1,searching:!1,who:"",start:0,end:10}},computed:Object(r["a"])(Object(r["a"])({},Vuex.mapState(["chainId"])),{},{tokensURI:function(){var e="bsc";switch(this.chainId){case 0:e="tron";break;case 1:e="eth";break;case 56:e="bsc";break;case 66:e="okex";break;case 128:e="heco";break;case 137:e="polygon";break;case 10001:e="ethw";break;case 513100:e="ethf";break}return"https://acswapinfo.github.io/tokens/ac_".concat(e,"_tokens.json")}}),created:function(){var e=this;this.$address&&fetch(this.tokensURI).then((function(e){return e.json()})).then((function(t){e.hotList=t.hot,c=t}))},methods:{onInput:function(){var e=this;if(""===this.value)return this.empty=!1,this.start=10,this.end=20,this.searching=!1,this.allTokens=this.cacheTokens,!1;if(this.searching)return!1;this.searching=!0;var t=setTimeout(Object(i["a"])(regeneratorRuntime.mark((function n(){var s,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(e.value.length>0)){n.next=13;break}if(s=(0==e.chainId?window.tronWeb:e.$web3.utils).isAddress(e.value),!s){n.next=8;break}return n.next=5,e.getTokenByAddress();case 5:n.t0=n.sent,n.next=9;break;case 8:n.t0=e.getTokenBySymbol();case 9:a=n.t0,e.empty=0===a.length,e.allTokens=a,e.searching=!1;case 13:clearTimeout(t);case 14:case"end":return n.stop()}}),n)}))),500)},getTokenBySymbol:function(){var e=this;return c.all.filter((function(t){return t.symbol.includes(e.value.toUpperCase())}))},getTokenByAddress:function(){var e=this,t=c.all.filter((function(t){return t.address.toLowerCase()===e.value.toLowerCase()}));return t.length>0?t:new Promise((function(t){if(0==e.chainId)window.tronWeb.transactionBuilder.triggerConstantContract(e.$Multicall.address,"aggregate((address,bytes)[])",{},[{type:"(address,bytes)[]",value:[[e.value.toHex(),"name()".encodeFunction()],[e.value.toHex(),"symbol()".encodeFunction()],[e.value.toHex(),"decimals()".encodeFunction()],[e.value.toHex(),"balanceOf(address)".encodeFunction(["address"],[e.$address])]]}],e.address).then((function(n){var s=n.constant_result[0].decode([{name:"blockNumber",type:"uint256"},{name:"returnData",type:"bytes[]"}]),a=s.returnData,i=a[2].decode(["uint8"]);t([{decimals:i,address:e.value,name:a[0].decode(["string"]),symbol:a[1].decode(["string"]),balance:a[3].fromWei(i),logoURI:"https://acswapinfo.github.io/tokens/bsc/unknown.svg"}])}))["catch"]((function(e){return t([])}));else{var n=new e.$web3.BatchRequest,s=new e.$web3.eth.Contract(o,e.value);n.add(s.methods.name().call.request({from:e.address})),n.add(s.methods.symbol().call.request({from:e.address})),n.add(s.methods.decimals().call.request({from:e.address})),n.add(s.methods.balanceOf(e.$address).call.request({from:e.$address})),n.requestManager.sendBatch(n.requests,(function(n,s){if(n)t([]);else{var a=("string"===typeof s[0]?s[0]:s[0].result).decode(["string"]),i=s[1].result.decode(["string"]),r=s[2].result.decode(["uint8"]),o=s[3].result.fromWei(r);t([{name:a,symbol:i,balance:o,decimals:r,address:e.value,logoURI:"https://acswapinfo.github.io/tokens/bsc/unknown.svg"}])}}))}}))},open:function(e){this.show=!0,this.who=e},close:function(){this.show=!1},select:function(e){this.$emit("select",{token:e,who:this.who}),this.show=!1},onLoad:function(){var e=this;if(this.end>=c.all.length&&this.start>=c.all.length)return this.loading=!1,this.finished=!0,!1;var t=c.all.slice(this.start,this.end);if(0==this.chainId){for(var n=[],s=0;s<t.length;s++)n.push([t[s].address.toHex(),"balanceOf(address)".encodeFunction(["address"],[this.$address])]);window.tronWeb.transactionBuilder.triggerConstantContract(this.$Multicall.address,"aggregate((address,bytes)[])",{},[{type:"(address,bytes)[]",value:n}],this.address).then((function(n){var s=n.constant_result[0].decode([{name:"blockNumber",type:"uint256"},{name:"returnData",type:"bytes[]"}]),a=s.returnData;a.forEach((function(e,n){t[n].balance=e.fromWei(t[n].decimals).toFixed(4)})),0===e.start&&10===e.end&&(e.cacheTokens=t),e.allTokens=e.allTokens.concat(t),e.loading=!1,e.start=e.end,e.end+=10}))}else{for(var a=new this.$web3.BatchRequest,i=0;i<t.length;i++){var r=new this.$web3.eth.Contract(o,t[i].address);a.add(r.methods.balanceOf(this.$address).call.request({from:this.$address}))}a.requestManager.sendBatch(a.requests,(function(n,s){n||(s.forEach((function(e,n){t[n].balance=("string"===typeof e?e:e.result).fromWei(t[n].decimals).toFixed(4)})),0===e.start&&10===e.end&&(e.cacheTokens=t),e.allTokens=e.allTokens.concat(t),e.loading=!1,e.start=e.end,e.end+=10)}))}}}},d=l,u=d,h=(n("799b"),n("36a2"),n("2877")),p=Object(h["a"])(u,s,a,!1,null,"3998641e",null);t["default"]=p.exports},bd1e:function(e,t,n){"use strict";n("d933")},c590:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAArCAYAAACNWyPFAAADsUlEQVRYR63XWajtcxjG8c/PPA+ZSRlCmW6U8UJRphu5Mx6ZQuYyTxcIGUqZObihUIqSSBS5ObkwlAxxMuUkHMcxHPNPz+7dp2Wftc9ea539u9ntVev/Xe/vfZ/nef/NPJ/e+zrYGw9hX9zX5pPRe18PB+Mx7F7P/nLeIL339XEEHsFOyLP/wN3zAum9b4TjcQ+2qQp+wx24c40hvffNcCJuxxYFWI7rsbC19vvEkN57vpuHnoPrsCk6fsDleDaAQCeCFGBrXIqLsTH+xRJciJdba+nH1Bkb0ntfC9vjBpyG9OMffI5z8VZr7c/BqR0L0ntfGztXg4/CBvgbH+MsvNNa+2umLEaGlMgy+xnRAwuQK3m3AJ8MA4x8Xb33dbEPHi81RxMrsAhn44vWWioaeuaspER2AJ7ALoiqf8GbOA/ftNbSk1nPaiG99w1xWFWQZseXfsYrNVXfzQVY7XX13jP3R+JBZFzT9GV4HldiaWstYzvnGVpJ7z0ii03chS2Rsf0eT+Jm/DQqYGglvfetcDJuQiwj51s8gHuxvLUWZY98VlZSKt62piXXsUk95WvcgqfT8HEBKyspwA64DOeXinPfUfEV1egVkwCmIGUTUfGNOKlElpH8tICLWmvRxMQnkKg4DT6uNBBb+BBn4INBo5uUEsiLOLo0ENW+h1OweDabGBcWyI/YvBw57hmjixZ+nbQHM39EIFeVbceyM5pf4Rq8EH+aD1AgEV50cWulW35Iwid9ytYx0dgOVjOlk8rpY3F/KTyfR4ALCza2AFeBFCgROr3SZOOIlSSvn6nxXjaOlQyFFCiue2hdU3anaVN8qYQaU1ytrQ+bvFUMciA/ElC7IYGVFeeNyvDY+6wBNRKkKsqD98OjlYgJqixrScLT069xNDRraFWm71XDcFDZTfao93FqRe7/tpLZRDpXMqYnsZ2sm9PbSWznIyzI31FsZ5SMz5TFQK8tu4lo05PFtT2+Pb0pTlTJ9JcqCpLx2RYvqKxJFMQdLsGrq3PqOSuZAUrWn1m2k9SMDUW0V+O5DMcwGxoZMgBL5selE88x1pyltdU/PMxYx4YM2NAJefdAdoI8J1rKK9xtM/eAiSADNnRMLRfbFShaeqquLzY0tXBMDBmwocNrN8sEZuSjpcTERfG++N0aQQqUvThrbGJhjwJFpK/ViC9ZY8iADeW1Ovvy/gWKlmJDC+YFUqBc1a4FOqRA0dLr8wYpUNxhx3qHiQ3l/8/mFVKgPDNjHYHumdD7D1iiQylQCWPqAAAAAElFTkSuQmCC"},d4cd:function(e,t,n){e.exports=n.p+"img/tokens-empty.9a7b08f1.png"},d933:function(e,t,n){},e0d3:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:"none"!==e.state,expression:"state !== 'none'"}],staticClass:"transaction-state"},[n("before",{directives:[{name:"show",rawName:"v-show",value:["approve","approved"].includes(e.state),expression:"['approve', 'approved'].includes(state)"}],attrs:{state:e.state,token0:e.token0,token1:e.token1,waitApprove:e.waitApprove},on:{addLiquidity:e.addLiquidity}}),n("in",{directives:[{name:"show",rawName:"v-show",value:"in"===e.state,expression:"state === 'in'"}],attrs:{token0:e.token0,token1:e.token1,lp:e.lp,rate:e.rate,reRate:e.reRate,prop:e.prop}}),n("after",{directives:[{name:"show",rawName:"v-show",value:"done"===e.state,expression:"state === 'done'"}],attrs:{token0:e.token0,token1:e.token1},on:{close:e.close}})],1)},a=[],i=(n("d3b7"),n("3ca3"),n("ddb0"),n("a9e3"),{components:{before:function(){return n.e("chunk-c90bc7ec").then(n.bind(null,"6c15"))},in:function(){return n.e("chunk-c9800d94").then(n.bind(null,"7089"))},after:function(){return n.e("chunk-2fe3850e").then(n.bind(null,"229b"))}},props:{state:{type:String,required:!0},token0:{type:Object,required:!0},token1:{type:Object,required:!0},waitApprove:{type:Array,required:!0},lp:{type:[Number,String],required:!0},rate:{type:[Number,String],required:!0},reRate:{type:[Number,String],required:!0},prop:{type:[Number,String],required:!0}},data:function(){return{}},methods:{addLiquidity:function(){this.$emit("addLiquidity")},close:function(){this.$emit("close")}}}),r=i,o=r,c=(n("ebd7"),n("2877")),l=Object(c["a"])(o,s,a,!1,null,"4304648b",null);t["default"]=l.exports},e823:function(e,t,n){},ebd7:function(e,t,n){"use strict";n("01c7")}}]);