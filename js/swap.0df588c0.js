(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["swap"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3");var a=n("6b75");function s(t,e){if(t){if("string"===typeof t)return Object(a["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a["a"])(t,e):void 0}}},"07ac":function(t,e,n){var a=n("23e7"),s=n("6f53").values;a({target:"Object",stat:!0},{values:function(t){return s(t)}})},"191a":function(t,e,n){t.exports=n.p+"img/rate-switch.1543baa5.svg"},2072:function(t,e,n){t.exports=n.p+"img/swap-success.38266ded.svg"},"26e9":function(t,e,n){"use strict";var a=n("23e7"),s=n("e8b5"),r=[].reverse,o=[1,2];a({target:"Array",proto:!0,forced:String(o)===String(o.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),r.call(this)}})},"277d":function(t,e,n){var a=n("23e7"),s=n("e8b5");a({target:"Array",stat:!0},{isArray:s})},"3e93":function(t,e,n){t.exports=n.p+"img/look.46575a8e.svg"},"4df4":function(t,e,n){"use strict";var a=n("0366"),s=n("7b0b"),r=n("9bdd"),o=n("e95a"),i=n("50c4"),c=n("8418"),u=n("35a1");t.exports=function(t){var e,n,d,l,p,h,m=s(t),f="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,b=void 0!==y,g=u(m),k=0;if(b&&(y=a(y,v>2?arguments[2]:void 0,2)),void 0==g||f==Array&&o(g))for(e=i(m.length),n=new f(e);e>k;k++)h=b?y(m[k],k):m[k],c(n,k,h);else for(l=g.call(m),p=l.next,n=new f;!(d=p.call(l)).done;k++)h=b?r(l,y,[d.value,k],!0):d.value,c(n,k,h);return n.length=k,n}},"605e":function(t,e,n){t.exports=n.p+"img/router-path.e489826a.svg"},"6b15":function(t,e,n){"use strict";n("765f")},"6b75":function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}n.d(e,"a",(function(){return a}))},"6f53":function(t,e,n){var a=n("83ab"),s=n("df75"),r=n("fc6a"),o=n("d1e7").f,i=function(t){return function(e){var n,i=r(e),c=s(i),u=c.length,d=0,l=[];while(u>d)n=c[d++],a&&!o.call(i,n)||l.push(t?[n,i[n]]:i[n]);return l}};t.exports={entries:i(!0),values:i(!1)}},"707d":function(t,e,n){},7085:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"swap "+t.theme},[a("div",{staticClass:"content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("div",{staticClass:"input"},[a("div",{staticClass:"container"},[a("div",{staticClass:"select-token-btn"},[a("span",{staticClass:"lable"},[t._v(t._s(t.$t("swap.text1")))]),a("div",{on:{click:function(e){return t.openSearch("token0")}}},[a("img",{staticClass:"token-logo",attrs:{src:t.token0.logoURI}}),a("span",{domProps:{textContent:t._s(t.token0.symbol)}}),a("img",{attrs:{src:n("e4b1")}})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.amount0,expression:"amount0"}],attrs:{type:"number",placeholder:"0.0"},domProps:{value:t.amount0},on:{input:[function(e){e.target.composing||(t.amount0=e.target.value)},t.input]}})]),a("span",{on:{click:t.allIn}},[t._v(t._s(t.$t("transaction.text2")+" "+t.balance.toFixed()))])]),a("div",{staticClass:"slider"},[a("img",{attrs:{src:n("7dd5")},on:{click:t.switchToken}}),a("div",{staticClass:"slider"},[a("van-slider",{attrs:{"active-color":"#0CC9B5","inactive-color":"#0C252F"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),a("div",{staticClass:"scale"},[a("span",{on:{click:function(e){t.value=0}}},[t._v("0")]),a("span",{on:{click:function(e){t.value=25}}},[t._v("25%")]),a("span",{on:{click:function(e){t.value=50}}},[t._v("50%")]),a("span",{on:{click:function(e){t.value=75}}},[t._v("75%")]),a("span",{on:{click:function(e){t.value=100}}},[t._v("100%")])])],1)]),a("div",{staticClass:"input"},[a("div",{staticClass:"container"},[a("div",{staticClass:"select-token-btn"},[a("span",{staticClass:"lable"},[t._v(t._s(t.$t("swap.text4")))]),a("div",{on:{click:function(e){return t.openSearch("token1")}}},[a("img",{staticClass:"token-logo",attrs:{src:t.token1.logoURI}}),a("span",{domProps:{textContent:t._s(t.token1.symbol)}}),a("img",{attrs:{src:n("e4b1")}})])]),a("input",{attrs:{type:"number",placeholder:"0.0",readonly:""},domProps:{value:t.amount1.toFixed()}})]),a("span",[t._v(t._s(t.$t("transaction.text2")+" "+t.balance1.toFixed()))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.amount0.toBN().gt(0)&&!t.invalidPair,expression:"amount0.toBN().gt(0) && !invalidPair"}],staticClass:"trade-info"},[a("div",{staticClass:"info-item rate"},[a("span",[t._v(t._s(t.$t("transaction.text4")+" 1 "+t.token0.symbol+"≈"+t.rate1+" "+t.token1.symbol))]),a("img",{attrs:{src:n("191a")}})]),a("span",{staticClass:"info-item"},[t._v(t._s(t.$t("nftswap.text5")+" "+t.gasPrice))]),a("span",{directives:[{name:"show",rawName:"v-show",value:[t.token0.symbol,t.token1.symbol].includes("AC"),expression:"[token0.symbol, token1.symbol].includes('AC')"}],staticClass:"info-item"},[t._v(t._s(t.$t("nftswap.text6")+" "+t.gasPrice))]),t.routerInfo?a("div",{staticClass:"info-item router"},[a("span",[t._v(t._s(t.$t("transaction.text15")))]),a("div",[a("span",[t._v(t._s(t.token0.symbol))]),a("img",{attrs:{src:n("605e")}}),Array.isArray(t.routerInfo)?[t.routerInfo.length>2?a("span",[t._v(t._s(t.routerInfo[1].symbol))]):t._e(),t.routerInfo.length>2?a("img",{attrs:{src:n("605e")}}):t._e(),t.routerInfo.length>3?a("span",[t._v(t._s(t.routerInfo[2].symbol))]):t._e(),t.routerInfo.length>3?a("img",{attrs:{src:n("605e")}}):t._e()]:[t.routerInfo.tokensPath.length>2?a("span",[t._v(t._s(t.routerInfo.tokensPath[1].symbol))]):t._e(),t.routerInfo.tokensPath.length>2?a("img",{attrs:{src:n("605e")}}):t._e(),t.routerInfo.tokensPath.length>3?a("span",[t._v(t._s(t.routerInfo.tokensPath[2].symbol))]):t._e(),t.routerInfo.tokensPath.length>3?a("img",{attrs:{src:n("605e")}}):t._e()],a("span",[t._v(t._s(t.token1.symbol))])],2)]):t._e()]),a("van-button",{directives:[{name:"show",rawName:"v-show",value:Number(t.amount0)<=0||t.invalidPair,expression:"(Number(amount0) <= 0) || invalidPair"}],attrs:{disabled:""}},[t._v(t._s(Number(t.amount0)<=0?t.$t("swap.text7"):t.$t("swap.text6")))]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.amount0.toBN().gt(0)&&!t.invalidPair,expression:"amount0.toBN().gt(0) && !invalidPair"}],staticClass:"buttons"},[a("van-button",{attrs:{loading:"approve"===t.transactionState,disabled:!t.needApprove},on:{click:t.approve}},[t._v(t._s("approve"===t.transactionState?t.$t("swap.text8"):t.$t("swap.text9")))]),a("van-button",{attrs:{loading:"in"===t.transactionState,disabled:t.needApprove},on:{click:t.exchange}},[t._v(t._s("in"===t.transactionState?t.$t("swap.text10"):t.$t("swap.text11")))])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.amount0.toBN().gt(0)&&!t.invalidPair,expression:"amount0.toBN().gt(0) && !invalidPair"}],staticClass:"steps"},[a("span",{staticClass:"active"},[t._v("1")]),a("i",{class:{active:!t.needApprove}}),a("span",{class:{active:!t.needApprove}},[t._v("2")])])],1)]),t.latestSwap?a("div",{staticClass:"history"},[a("span",[t._v(t._s(t.$t("swap.text12")))]),a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[a("span",[t._v(t._s(t.$t("Transactioni.text12"))+" "),a("span",[t._v(t._s(t.latestSwap.date))])]),a("a",{attrs:{target:"_",href:t.latestSwap.hash}},[a("span",[t._v(t._s(t.$t("swap.text13")))]),a("img",{attrs:{src:n("3e93")}})])]),a("div",{staticClass:"info"},[a("div",[a("span",[t._v(t._s(t.latestSwap.router[0]))]),a("span",[t._v(t._s(t.latestSwap.amount0.toFixed(6)))])]),a("img",{attrs:{src:n("2072")}}),a("div",[a("span",[t._v(t._s(t.latestSwap.router[t.latestSwap.router.length-1]))]),a("span",[t._v(t._s(t.latestSwap.amount1.toFixed(6)))])])]),a("div",{staticClass:"router"},[a("span",[t._v(t._s(t.$t("transaction.text15")))]),a("div",[a("span",[t._v(t._s(t.latestSwap.router[0]))]),a("img",{attrs:{src:n("605e")}}),a("span",[t._v(t._s(t.latestSwap.router[1]))]),t.latestSwap.router.length>2?[a("img",{attrs:{src:n("605e")}}),a("span",[t._v(t._s(t.latestSwap.router[2]))])]:t._e(),t.latestSwap.router.length>3?[a("img",{attrs:{src:n("605e")}}),a("span",[t._v(t._s(t.latestSwap.router[3]))])]:t._e()],2)])])]):a("div",{staticClass:"no-deals"},[a("img",{attrs:{src:n("98bc")}}),a("span",[t._v(t._s(t.$t("Transactioni.text5")))])]),t.showAirDrop?a("ac-airdrop",{attrs:{airdropNum:t.airdropNum},on:{close:function(e){t.showAirDrop=!1}}}):t._e(),a("transation-state",{attrs:{state:t.transactionState,from:{amount:t.amount0,symbol:t.token0.symbol},to:{amount:t.amount1.toFixed(),symbol:t.token1.symbol},"slip-point":t.slipPoint,min:t.amountOutMin,"to-price":t.rate1,"from-price":t.rate0},on:{exchange:t.sendTokenTransaction,close:t.close}}),a("search-tokens",{ref:"searchTokens",on:{select:t.select}})],1)},s=[],r=(n("277d"),n("6b75"));function o(t){if(Array.isArray(t))return Object(r["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var c=n("06c5");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t){return o(t)||i(t)||Object(c["a"])(t)||u()}var l=n("ade3"),p=n("1da1"),h=n("5530"),m=(n("96cf"),n("4795"),n("a9e3"),n("99af"),n("b680"),n("d81d"),n("0d03"),n("07ac"),n("26e9"),n("fb6a"),n("caad"),n("4160"),n("159b"),n("aca7")),f=n("1b4b"),v={components:{"mk-header":function(){return n.e("chunk-9c3b3ad6").then(n.bind(null,"68d4"))},"search-tokens":function(){return n.e("chunk-7c5220ee").then(n.bind(null,"bab4"))},"transation-state":function(){return n.e("chunk-75456516").then(n.bind(null,"5942"))},"ac-airdrop":function(){return n.e("chunk-2f2fa285").then(n.bind(null,"4ef2"))}},data:function(){return{balance:0,balance1:0,gasPrice:"0.25%",ERC20Contract:null,allowance:0,value:0,amountOutMin:0,disabled:!1,rerate:!1,transactionState:"none",gasPopover:!1,gasActions:[{text:this.$t("Transactioni.text7")}],token0:m["b"],token1:m["c"],amount0:"",amount1:"",rate0:"--",rate1:"--",reserve0:0,reserve1:0,routerInfo:null,inputing:!1,latestSwap:null,showAirDrop:!1,airdropNum:"???",factorys:[],initCodes:{},lastEnter:""}},computed:Object(h["a"])(Object(h["a"])({},Vuex.mapState(["slippage","deadline","theme","chainId"])),{},{invalidPair:function(){return!this.routerInfo},needApprove:function(){var t=f["a"][this.chainId];return this.token0.symbol!==t.mainCoin.symbol&&this.amount0.toBN().gt(this.allowance)}}),watch:{value:function(){var t=(this.balance/100*this.value).toFixed(6);this.amount0=t||"",this.input()}},destroyed:function(){clearInterval(this.interval)}},y=n("b9cc"),b=Object(h["a"])(Object(h["a"])({},v),{},{created:function(){var t=this;if(this.$address){var e=f["a"][this.chainId];this.token0=e.mainCoin,this.token1=e.defaultCoin,this.init(),0!=this.chainId&&this.$Aggregation&&this.$Aggregation.methods.allFactory().call({from:this.$address},(function(e,n){if(!e){t.factorys=n;for(var a=new t.$web3.BatchRequest,s=0;s<n.length;s++)a.add(t.$Aggregation.methods.initCodes(n[s]).call.request({from:t.$address}));a.requestManager.sendBatch(a.requests,(function(e,a){if(!e){t.initCodes[n[0]]=("string"===typeof a[0]?a[0]:a[0].result).decode(["bytes32"]);for(var s=1;s<n.length;s++)t.initCodes[n[s]]=a[s].result.decode(["bytes32"])}}))}})),this.interval=setInterval((function(){"none"===t.transactionState&&t.init()}),1e4)}},methods:{init:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.$route.query,n.token?t.select({token:JSON.parse(n.token),who:"token1"}):t.select({token:t.token0,who:"token0"}),t.getTransactions();case 3:case"end":return e.stop()}}),e)})))()},allIn:function(){this.amount0=this.balance,this.amount1=this.balance1,this.input()},close:function(){this.amount0="",this.amount1="",this.transactionState="none",this.init()},toInfo:function(){var t=f["a"][this.chainId],e=this.token1.symbol===t.mainCoin.symbol?this.token1:this.token0,n=this.token1.symbol===t.mainCoin.symbol?this.token0:this.token1;this.$router.push({path:"/tokenInfo",query:{token0:JSON.stringify(e),token1:JSON.stringify(n)}})},openSearch:function(t){this.$refs.searchTokens.open(t)},switchToken:function(){var t=this.token0;this.token0=this.token1,this.token1=t,this.select({token:t,who:"token1"})},input:function(){var t=this;if(Number(this.amount0)<=0)return this.amount1="",this.disabled=!0,void(this.gasPrice="0.25%");if(!this.inputing){this.inputing=!0,this.disabled=!1,this.lastEnter=this.amount0,this.gasPrice="".concat(this.amount0.toBN().times(.0025).toFixed().toFixed(this.token0.decimals)," ").concat(this.token0.symbol);var e=setTimeout(Object(p["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(Number(t.amount0)<=0)){n.next=7;break}return t.amount1="",t.gasPrice="0.25%",t.disabled=!0,t.inputing=!1,clearTimeout(e),n.abrupt("return");case 7:return n.next=9,t.searchRouter();case 9:a=n.sent,t.routerInfo=a,t.inputing=!1,clearTimeout(e),t.lastEnter!==t.amount0&&t.input();case 14:case"end":return n.stop()}}),n)}))),500)}},getReserves:function(){var t=this;return new Promise((function(e){for(var n=Object(m["h"])(t.token0,t.token1,f["e"][t.chainId],t.factorys),a=[],s=0;s<n.length;s++)a.push([t.$Aggregation.options.address,t.$Aggregation.methods.getReserves(n[s].factory,t.initCodes[n[s].factory],n[s].token0.address,n[s].token1.address).encodeABI()]);t.$Multicall.methods.tryAggregate(!1,a).call({from:t.$address},(function(t,a){if(!t){for(var s={},r=0;r<n.length;r++)if(a[r].success){var o=a[r].returnData.decode([{type:"uint256",name:"reserve0"},{type:"uint256",name:"reserve1"}]),i=o.reserve0,c=o.reserve1;Object.prototype.hasOwnProperty.call(s,n[r].factory)?s[n[r].factory].push(Object(h["a"])(Object(h["a"])({},n[r]),{},{reserve0:i,reserve1:c})):s[n[r].factory]=[Object(h["a"])(Object(h["a"])({},n[r]),{},{reserve0:i,reserve1:c})]}e(s)}}))}))},getAmountsOut:function(t,e){var n=this;return Object(p["a"])(regeneratorRuntime.mark((function a(){var s,r,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=n.$Aggregation?n.$Aggregation.methods.getAmountsOut(t.toWei(e.tokensPath[0].decimals),e.tokensPath.map((function(t){return t.address})),e.factorysPath):(0==n.chainId?n.$Router:n.$Router.methods).getAmountsOut(t.toWei(e[0].decimals),e.map((function(t){return t.address}))),a.next=3,s.call({from:n.$address});case 3:return r=a.sent,o=Array.isArray(e)?e:e.tokensPath,i=o.length-1,a.abrupt("return",(0==n.chainId?r[i]._hex:r[i]).fromWei(o[i].decimals).toFixed(o[i].decimals));case 7:case"end":return a.stop()}}),a)})))()},exchange:function(){if(this.amount0.toBN().gt(this.balance))return vant.Toast.fail(this.$t("transaction.text12"));var t=f["a"][this.chainId];this.token0.symbol===t.mainCoin.symbol?this.swapExactETHForTokens():this.amount0.toBN().gt(this.allowance)?this.approve():this.sendTokenTransaction()},sendTokenTransaction:function(){var t=f["a"][this.chainId];this.token1.symbol===t.mainCoin.symbol?this.swapExactTokensForETH():this.swapExactTokensForTokens()},approve:function(){var t=this;if(this.amount0.toBN().gt(this.balance))return vant.Toast.fail(this.$t("transaction.text12"));var e=0==this.chainId?window.tronWeb.contract(y,this.token0.address):new this.$web3.eth.Contract(y,this.token0.address),n=0==this.chainId?this.$Router.address:(this.$Aggregation||this.$Router).options.address,a=(0==this.chainId?e:e.methods).approve(n,this.amount0.toWei(this.token0.decimals).toBN().times(10).toFixed()).send({from:this.$address});0==this.chainId?a.then(function(){var a=Object(p["a"])(regeneratorRuntime.mark((function a(s){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.transactionState="approve",a.next=3,t.$loading(s);case 3:if(!a.sent){a.next=11;break}return a.next=6,e.allowance(t.$address,n).call({from:t.$address});case 6:r=a.sent,t.allowance=r._hex.fromWei(t.token0.decimals),t.transactionState="approved",a.next=13;break;case 11:t.transactionState="none",t.amount1="";case 13:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()):a.on("transactionHash",(function(e){t.transactionState="approve"})).on("receipt",(function(e){t.transactionState="approved"})).on("error",(function(e){vant.Toast.fail(t.$t("Transactioni.text2")),t.transactionState="none",t.amount1=""}))},swapExactETHForTokens:function(){var t=this;if(this.lastEnter===this.amount0){var e=Math.floor((new Date).getTime()/1e3)+this.deadline,n=this.amount1.toWei(this.token1.decimals).toBN(),a=n.minus(n.div(100).times(this.slippage)).toFixed(0);this.amountOutMin=a.fromWei(this.token1.decimals).toFixed();var s=(this.$Aggregation?this.$Aggregation.methods.swapExactETHForTokens(a,this.routerInfo.tokensPath.map((function(t){return t.address})),this.routerInfo.factorysPath,this.$address,e):(0==this.chainId?this.$Router:this.$Router.methods).swapExactETHForTokens(a,this.routerInfo.map((function(t){return t.address})),this.$address,e)).send(Object(l["a"])({from:this.$address},0==this.chainId?"callValue":"value",this.amount0.toWei(this.token0.decimals)));0==this.chainId?s.then(function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.transactionState="in",e.next=3,t.$loading(n);case 3:if(!e.sent){e.next=7;break}e.t0="done",e.next=8;break;case 7:e.t0="none";case 8:t.transactionState=e.t0;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):s.on("transactionHash",(function(e){t.transactionState="in"})).on("receipt",(function(e){t.transactionState="done";for(var n=0,a=Object.values(e.events);n<a.length;n++){var s=a[n];if(s.address.toLowerCase()===t.$contracts.AirDrop.options.address.toLowerCase()){var r=s.raw.data.decode([{name:"user",type:"address"},{name:"dropAmount",type:"uint256"},{name:"time",type:"uint256"}]);t.airdropNum=r.dropAmount.fromWei(),t.showAirDrop=!0;break}}})).on("error",(function(e){vant.Toast.fail(t.$t("Transactioni.text2")),t.transactionState="none"}))}},swapExactTokensForETH:function(){var t=this;if(this.lastEnter===this.amount0){var e=Math.floor((new Date).getTime()/1e3)+this.deadline,n=this.amount1.toWei(this.token1.decimals).toBN(),a=n.minus(n.div(100).times(this.slippage)).toFixed(0);this.amountOutMin=a.fromWei(this.token1.decimals).toFixed();var s=(this.$Aggregation?this.$Aggregation.methods.swapExactTokensForETH(this.amount0.toWei(this.token0.decimals),a,this.routerInfo.tokensPath.map((function(t){return t.address})),this.routerInfo.factorysPath,this.$address,e):(0==this.chainId?this.$Router:this.$Router.methods).swapExactTokensForETH(this.amount0.toWei(this.token0.decimals),a,this.routerInfo.map((function(t){return t.address})),this.$address,e)).send({from:this.$address});0==this.chainId?s.then(function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.transactionState="in",e.next=3,t.$loading(n);case 3:if(!e.sent){e.next=7;break}e.t0="done",e.next=8;break;case 7:e.t0="none";case 8:t.transactionState=e.t0;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):s.on("transactionHash",(function(e){t.transactionState="in"})).on("receipt",(function(e){t.transactionState="done"})).on("error",(function(e){vant.Toast.fail(t.$t("Transactioni.text2")),t.transactionState="none"}))}},swapExactTokensForTokens:function(){var t=this;if(this.lastEnter===this.amount0){var e=Math.floor((new Date).getTime()/1e3)+this.deadline,n=this.amount1.toWei(this.token1.decimals).toBN(),a=n.minus(n.div(100).times(this.slippage)).toFixed(0);this.amountOutMin=a.fromWei(this.token1.decimals).toFixed();var s=(this.$Aggregation?this.$Aggregation.methods.swapExactTokensForTokens(this.amount0.toWei(this.token0.decimals),a,this.routerInfo.tokensPath.map((function(t){return t.address})),this.routerInfo.factorysPath,this.$address,e):(0==this.chainId?this.$Router:this.$Router.methods).swapExactTokensForTokens(this.amount0.toWei(this.token0.decimals),a,this.routerInfo.map((function(t){return t.address})),this.$address,e)).send({from:this.$address});0==this.chainId?s.then(function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.transactionState="in",e.next=3,t.$loading(n);case 3:if(!e.sent){e.next=7;break}e.t0="done",e.next=8;break;case 7:e.t0="none";case 8:t.transactionState=e.t0;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):s.on("transactionHash",(function(e){t.transactionState="in"})).on("receipt",(function(e){t.transactionState="done";for(var n=0,a=Object.values(e.events);n<a.length;n++){var s=a[n];if(s.address.toLowerCase()===t.$contracts.AirDrop.options.address.toLowerCase()){var r=s.raw.data.decode([{name:"user",type:"address"},{name:"dropAmount",type:"uint256"},{name:"time",type:"uint256"}]);t.airdropNum=r.dropAmount.fromWei(),t.showAirDrop=!0;break}}})).on("error",(function(e){vant.Toast.fail(t.$t("Transactioni.text2")),t.transactionState="none"}))}},select:function(t){var e=this,n=t.token,a=t.who,s="token0"===a?this.token1:this.token0;if(s.symbol===n.symbol)return this.switchToken();this[a]=n;var r=f["a"][this.chainId].mainCoin;if(this.token0.symbol===r.symbol)if(0==this.chainId){var o=[[this.$Multicall.address.toHex(),"getEthBalance(address)".encodeFunction(["address"],[this.$address])],[this.token1.address.toHex(),"balanceOf(address)".encodeFunction(["address"],[this.$address])]];window.tronWeb.transactionBuilder.triggerConstantContract(this.$Multicall.address,"aggregate((address,bytes)[])",{},[{type:"(address,bytes)[]",value:o}],this.$address).then((function(t){var n=t.constant_result[0].decode([{name:"blockNumber",type:"uint256"},{name:"returnData",type:"bytes[]"}]),a=n.returnData;e.balance=a[0].fromWei(6),e.balance1=a[1].fromWei(e.token1.decimals)}))}else{var i=new this.$web3.BatchRequest,c=new this.$web3.eth.Contract(y,this.token1.address);i.add(this.$web3.eth.getBalance.request(this.$address,"latest")),i.add(c.methods.balanceOf(this.$address).call.request({from:this.$address})),i.requestManager.sendBatch(i.requests,(function(t,n){t||(e.balance=("string"===typeof n[0]?n[0]:n[0].result).fromWei(),e.balance1=n[1].result.fromWei(e.token1.decimals))}))}else if(0==this.chainId){var u="balanceOf(address)".encodeFunction(["address"],[this.$address]),d="getEthBalance(address)".encodeFunction(["address"],[this.$address]),l="allowance(address,address)".encodeFunction(["address","address"],[this.$address,this.$Router.address]),p=[[this.token0.address.toHex(),u],[this.token0.address.toHex(),l]];this.token1.symbol===r.symbol?p.push([this.$Multicall.address.toHex(),d]):p.push([this.token1.address.toHex(),u]),window.tronWeb.transactionBuilder.triggerConstantContract(this.$Multicall.address,"aggregate((address,bytes)[])",{},[{type:"(address,bytes)[]",value:p}],this.$address).then((function(t){var n=t.constant_result[0].decode([{name:"blockNumber",type:"uint256"},{name:"returnData",type:"bytes[]"}]),a=n.returnData;e.balance=a[0].fromWei(e.token0.decimals),e.allowance=a[1].fromWei(e.token0.decimals),e.balance1=a[2].fromWei(e.token1.decimals)}))}else{var h=new this.$web3.BatchRequest,m=new this.$web3.eth.Contract(y,this.token0.address),v=new this.$web3.eth.Contract(y,this.token1.address);h.add(m.methods.balanceOf(this.$address).call.request({from:this.$address})),h.add(m.methods.allowance(this.$address,(this.$Aggregation||this.$Router).options.address).call.request({from:this.$address})),this.token1.symbol===r.symbol?h.add(this.$web3.eth.getBalance.request(this.$address,"latest")):h.add(v.methods.balanceOf(this.$address).call.request({from:this.$address})),h.requestManager.sendBatch(h.requests,(function(t,n){t||(e.balance=("string"===typeof n[0]?n[0]:n[0].result).fromWei(e.token0.decimals),e.allowance=n[1].result.fromWei(e.token0.decimals),e.balance1=n[2].result.fromWei(e.token1.decimals),console.log(e.allowance))}))}this.amount0.toBN().gt(0)&&this.input()},searchRouter:function(){var t=this;return new Promise(function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(n){var a,s,r,o,i,c,u,l,p,h,v,y,b,g;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=Object(m["m"])(t.token0,t.token1,f["e"][t.chainId],t.factorys),s=[],r=(t.amount0.toBN().gt(0)?t.amount0:1).toWei(t.token0.decimals),o="0".toBN(),i=-1,0!=t.chainId){e.next=8;break}for(c=0;c<a.length;c++)s.push([t.$Router.address.toHex(),"getAmountsOut(uint256,address[])".encodeFunction(["uint256","address[]"],[r,a[c].map((function(t){return t.address.toHex()}))])]);window.tronWeb.transactionBuilder.triggerConstantContract(t.$Multicall.address,"tryAggregate(bool,(address,bytes)[])",{},[{type:"bool",value:!1},{type:"(address,bytes)[]",value:s}],t.$address).then((function(e){for(var s=e.constant_result[0].decode([{type:"tuple[]",components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}]}]),r=0;r<s.length;r++)if(s[r].success){var c=s[r].returnData.decode(["uint256[]"]);o.lt(c[c.length-1])&&(o=c[c.length-1].toBN(),i=r)}if(-1!==i){t.amount1=o.toFixed().fromWei(t.token1.decimals),t.getAmountsOut(1,a[i]).then((function(e){t.rate1=e}));var u=d(a[i]);t.getAmountsOut(1,u.reverse()).then((function(e){t.rate0=e})),n(a[i])}else t.amount1="",n([])})),e.next=18;break;case 8:if(!t.$Aggregation){e.next=16;break}return e.next=11,t.getReserves();case 11:for(u=e.sent,l=0;l<a.length;l++)p=Object(m["f"])(r,a[l].tokensPath,a[l].factorysPath,u),o.lt(p[p.length-1])&&(o=p[p.length-1].toBN(),i=l);-1!==i?(t.amount1=o.toFixed().fromWei(t.token1.decimals),t.getAmountsOut(1,a[i]).then((function(e){t.rate1=e})),h={tokensPath:d(a[i].tokensPath),factorysPath:d(a[i].factorysPath)},v=h.factorysPath.reverse(),y=v.pop(),v.unshift(y),t.getAmountsOut(1,{tokensPath:h.tokensPath.reverse(),factorysPath:v}).then((function(e){t.rate0=e})),n(a[i])):(t.amount1="",n(null)),e.next=18;break;case 16:for(b=0;b<a.length;b++)g=t.$Router.methods.getAmountsOut(r,a[b].map((function(t){return t.address}))),s.push([t.$Router.options.address,g.encodeABI()]);t.$Multicall.methods.tryAggregate(!1,s).call({from:t.$address},(function(e,s){if(!e){for(var r="0".toBN(),o=-1,i=0;i<s.length;i++)if(s[i].success){var c=s[i].returnData.decode(["uint256[]"]);r.lt(c[c.length-1])&&(r=c[c.length-1].toBN(),o=i)}if(-1!==o){t.amount1=r.toFixed().fromWei(t.token1.decimals),t.getAmountsOut(1,a[o]).then((function(e){t.rate1=e}));var u=d(a[o]);t.getAmountsOut(1,u.reverse()).then((function(e){t.rate0=e})),n(a[o])}else t.amount1="",n(null)}}));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getTransactions:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,a,s,r,o,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(m["o"])(Object(f["f"])(t.chainId,t.$address),t.chainId);case 2:n=e.sent.slice(0,1),n.length>0&&(a=0==t.chainId?"0x".concat(n[0].trigger_info.data):n[0].input,s=0==t.chainId?n[0].timestamp:1e3*n[0].timeStamp,r=["0x7ff36ab5","0xb6f9de95"].includes(a.slice(0,10))?Object(h["a"])(Object(h["a"])({},a.slice(10).decode([{type:"uint",name:"amountOutMin"},{type:"address[]",name:"path"}])),{},{amountIn:n[0][0==t.chainId?"amount":"value"],date:t.formatDate(s)}):Object(h["a"])(Object(h["a"])({},a.slice(10).decode([{type:"uint",name:"amountIn"},{type:"uint",name:"amountOutMin"},{type:"address[]",name:"path"}])),{},{date:t.formatDate(s)}),o=[],i=f["a"][t.chainId].mainCoin,0==t.chainId?(r.path.forEach((function(t){o.push([t,"symbol()".encodeFunction()]),o.push([t,"decimals()".encodeFunction()])})),window.tronWeb.transactionBuilder.triggerConstantContract(t.$Multicall.address,"aggregate((address,bytes)[])",{},[{type:"(address,bytes)[]",value:o}],t.$address).then((function(e){for(var a=e.constant_result[0].decode([{name:"blockNumber",type:"uint256"},{name:"returnData",type:"bytes[]"}]),s=a.returnData,c=[],u=s[1].decode(["uint8"]),d=s[o.length-1].decode(["uint8"]),l=0;l<s.length;l+=2){var p=s[l].decode(["string"]);c.push(p==="W".concat(i.symbol)?i.symbol:p)}t.latestSwap={router:c,hash:Object(m["n"])(t.chainId,n[0].hash),amount0:r.amountIn.fromWei(u),amount1:r.amountOutMin.fromWei(d),date:r.date}}))):(c=new t.$web3.BatchRequest,r.path.forEach((function(e){var n=new t.$web3.eth.Contract(y,e);c.add(n.methods.symbol().call.request({from:t.$address})),c.add(n.methods.decimals().call.request({from:t.$address}))})),c.requestManager.sendBatch(c.requests,(function(e,a){if(!e){for(var s=("string"===typeof a[0]?a[0]:a[0].result).decode(["string"]),o=[s==="W".concat(i.symbol)?i.symbol:s],c=a[1].result.decode(["uint8"]),u=a[a.length-1].result.decode(["uint8"]),d=2;d<a.length;d+=2){var l=a[d].result.decode(["string"]);o.push(l==="W".concat(i.symbol)?i.symbol:l)}t.latestSwap={router:o,hash:Object(m["n"])(t.chainId,n[0].hash),amount0:r.amountIn.fromWei(c),amount1:r.amountOutMin.fromWei(u),date:r.date}}}))));case 4:case"end":return e.stop()}}),e)})))()},formatDate:function(t){function e(t){return t<10?"0".concat(t):t}var n=new Date(t),a=n.getFullYear(),s=e(n.getMonth()+1),r=e(n.getDate()),o=e(n.getHours()),i=e(n.getMinutes());return"".concat(a,"/").concat(s,"/").concat(r," ").concat(o,":").concat(i)}}}),g=b,k=g,w=(n("fbd1"),n("6b15"),n("2877")),x=Object(w["a"])(k,a,s,!1,null,"481357a7",null);e["default"]=x.exports},"765f":function(t,e,n){},"7dd5":function(t,e,n){t.exports=n.p+"img/change-btn.4f8b8895.svg"},"98bc":function(t,e,n){t.exports=n.p+"img/transaction-empty.d9bd8235.svg"},"9bdd":function(t,e,n){var a=n("825a"),s=n("2a62");t.exports=function(t,e,n,r){try{return r?e(a(n)[0],n[1]):e(n)}catch(o){throw s(t),o}}},a630:function(t,e,n){var a=n("23e7"),s=n("4df4"),r=n("1c7e"),o=!r((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:o},{from:s})},b0c0:function(t,e,n){var a=n("83ab"),s=n("9bf2").f,r=Function.prototype,o=r.toString,i=/^\s*function ([^ (]*)/,c="name";a&&!(c in r)&&s(r,c,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(t){return""}}})},b9cc:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"pauser","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimal","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"new_operator","type":"address"},{"internalType":"address","name":"new_pauser","type":"address"}],"name":"changeUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},d28b:function(t,e,n){var a=n("746f");a("iterator")},e01a:function(t,e,n){"use strict";var a=n("23e7"),s=n("83ab"),r=n("da84"),o=n("5135"),i=n("861d"),c=n("9bf2").f,u=n("e893"),d=r.Symbol;if(s&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new d(t):void 0===t?d():d(t);return""===t&&(l[e]=!0),e};u(p,d);var h=p.prototype=d.prototype;h.constructor=p;var m=h.toString,f="Symbol(test)"==String(d("test")),v=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=i(this)?this.valueOf():this,e=m.call(t);if(o(l,t))return"";var n=f?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),a({global:!0,forced:!0},{Symbol:p})}},e4b1:function(t,e,n){t.exports=n.p+"img/select-btn.06f167f5.svg"},fbd1:function(t,e,n){"use strict";n("707d")}}]);