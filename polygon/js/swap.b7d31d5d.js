(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["swap"],{"0d03":function(t,e,n){var a=n("6eeb"),s=Date.prototype,i="Invalid Date",o="toString",r=s[o],c=s.getTime;new Date(NaN)+""!=i&&a(s,o,(function(){var t=c.call(this);return t===t?r.call(this):i}))},"191a":function(t,e,n){t.exports=n.p+"img/rate-switch.1543baa5.svg"},2072:function(t,e,n){t.exports=n.p+"img/swap-success.38266ded.svg"},2532:function(t,e,n){"use strict";var a=n("23e7"),s=n("5a34"),i=n("1d80"),o=n("ab13");a({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~String(i(this)).indexOf(s(t),arguments.length>1?arguments[1]:void 0)}})},"26e9":function(t,e,n){"use strict";var a=n("23e7"),s=n("e8b5"),i=[].reverse,o=[1,2];a({target:"Array",proto:!0,forced:String(o)===String(o.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),i.call(this)}})},"277d":function(t,e,n){var a=n("23e7"),s=n("e8b5");a({target:"Array",stat:!0},{isArray:s})},"3e93":function(t,e,n){t.exports=n.p+"img/look.46575a8e.svg"},"415a":function(t,e,n){},"44e7":function(t,e,n){var a=n("861d"),s=n("c6b6"),i=n("b622"),o=i("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==s(t))}},"4df4":function(t,e,n){"use strict";var a=n("0366"),s=n("7b0b"),i=n("9bdd"),o=n("e95a"),r=n("50c4"),c=n("8418"),u=n("35a1");t.exports=function(t){var e,n,d,l,p,m,h=s(t),f="function"==typeof this?this:Array,y=arguments.length,b=y>1?arguments[1]:void 0,v=void 0!==b,g=u(h),x=0;if(v&&(b=a(b,y>2?arguments[2]:void 0,2)),void 0==g||f==Array&&o(g))for(e=r(h.length),n=new f(e);e>x;x++)m=v?b(h[x],x):h[x],c(n,x,m);else for(l=g.call(h),p=l.next,n=new f;!(d=p.call(l)).done;x++)m=v?i(l,b,[d.value,x],!0):d.value,c(n,x,m);return n.length=x,n}},"5a34":function(t,e,n){var a=n("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},"605e":function(t,e,n){t.exports=n.p+"img/router-path.e489826a.svg"},"707d":function(t,e,n){},7085:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"swap "+t.theme},[a("div",{staticClass:"content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("div",{staticClass:"input"},[a("div",{staticClass:"lable"},[a("span",[t._v(t._s(t.$t("swap.text1")))]),a("span",[t._v(t._s(t.$t("swap.text3")))])]),a("div",{staticClass:"token-amount"},[a("div",{on:{click:function(e){return t.openSearch("token0")}}},[a("img",{staticClass:"token-logo",attrs:{src:t.token0.logoURI}}),a("span",{domProps:{textContent:t._s(t.token0.symbol)}}),a("img",{attrs:{src:n("e4b1")}})]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.amount0,expression:"amount0"}],attrs:{type:"number",placeholder:"0.0"},domProps:{value:t.amount0},on:{input:[function(e){e.target.composing||(t.amount0=e.target.value)},t.input]}})]),a("span",{on:{click:t.allIn}},[t._v(t._s(t.$t("transaction.text2")+" "+t.balance.toFixed(4)))])]),a("div",{staticClass:"slider"},[a("img",{attrs:{src:n("7dd5")},on:{click:t.switchToken}}),a("div",{staticClass:"slider"},[a("van-slider",{attrs:{"active-color":"#0CC9B5","inactive-color":"#0C252F"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),a("div",{staticClass:"scale"},[a("span",{on:{click:function(e){t.value=0}}},[t._v("0")]),a("span",{on:{click:function(e){t.value=25}}},[t._v("25%")]),a("span",{on:{click:function(e){t.value=50}}},[t._v("50%")]),a("span",{on:{click:function(e){t.value=75}}},[t._v("75%")]),a("span",{on:{click:function(e){t.value=100}}},[t._v("100%")])])],1)]),a("div",{staticClass:"input"},[a("div",{staticClass:"lable"},[a("span",[t._v(t._s(t.$t("swap.text4")))]),a("span",[t._v(t._s(t.$t("swap.text5")))])]),a("div",{staticClass:"token-amount"},[a("div",{on:{click:function(e){return t.openSearch("token1")}}},[a("img",{staticClass:"token-logo",attrs:{src:t.token1.logoURI}}),a("span",{domProps:{textContent:t._s(t.token1.symbol)}}),a("img",{attrs:{src:n("e4b1")}})]),a("input",{attrs:{type:"number",placeholder:"0.0",readonly:""},domProps:{value:t.amount1.toFixed(4)}})]),a("span",[t._v(t._s(t.$t("transaction.text2")+" "+t.balance1.toFixed(4)))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.amount0.toBN().gt(0)&&!t.invalidPair,expression:"amount0.toBN().gt(0) && !invalidPair"}],staticClass:"trade-info"},[a("div",{staticClass:"info-item rate"},[a("span",[t._v(t._s(t.$t("transaction.text4")+" 1 "+t.token0.symbol+"≈"+t.rate1+" "+t.token1.symbol))]),a("img",{attrs:{src:n("191a")}})]),a("span",{staticClass:"info-item"},[t._v(t._s(t.$t("nftswap.text5")+" "+t.gasPrice))]),a("span",{directives:[{name:"show",rawName:"v-show",value:[t.token0.symbol,t.token1.symbol].includes("AC"),expression:"[token0.symbol, token1.symbol].includes('AC')"}],staticClass:"info-item"},[t._v(t._s(t.$t("nftswap.text6")+" "+t.gasPrice))]),a("div",{staticClass:"info-item router"},[a("span",[t._v(t._s(t.$t("transaction.text15")))]),a("div",[a("span",[t._v(t._s(t.token0.symbol))]),a("img",{attrs:{src:n("605e")}}),t.path.length>2?a("span",[t._v(t._s(t.path[1].symbol))]):t._e(),t.path.length>2?a("img",{attrs:{src:n("605e")}}):t._e(),t.path.length>3?a("span",[t._v(t._s(t.path[2].symbol))]):t._e(),t.path.length>3?a("img",{attrs:{src:n("605e")}}):t._e(),a("span",[t._v(t._s(t.token1.symbol))])])])]),a("van-button",{directives:[{name:"show",rawName:"v-show",value:t.amount0.toBN().lte(0)||0===t.amount0.length||t.invalidPair,expression:"amount0.toBN().lte(0) || amount0.length === 0 || invalidPair"}],attrs:{disabled:""}},[t._v(t._s(t.invalidPair?t.$t("swap.text6"):t.$t("swap.text7")))]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.amount0.toBN().gt(0)&&!t.invalidPair,expression:"amount0.toBN().gt(0) && !invalidPair"}],staticClass:"buttons"},[a("van-button",{attrs:{loading:"approve"===t.transactionState,disabled:!t.needApprove},on:{click:t.approve}},[t._v(t._s("approve"===t.transactionState?t.$t("swap.text8"):t.$t("swap.text9")))]),a("van-button",{attrs:{loading:"in"===t.transactionState,disabled:t.needApprove},on:{click:t.exchange}},[t._v(t._s("in"===t.transactionState?t.$t("swap.text10"):t.$t("swap.text11")))])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.amount0.toBN().gt(0)&&!t.invalidPair,expression:"amount0.toBN().gt(0) && !invalidPair"}],staticClass:"steps"},[a("span",{staticClass:"active"},[t._v("1")]),a("i",{class:{active:!t.needApprove}}),a("span",{class:{active:!t.needApprove}},[t._v("2")])])],1)]),t.latestSwap?a("div",{staticClass:"history"},[a("span",[t._v(t._s(t.$t("swap.text12")))]),a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[a("span",[t._v(t._s(t.$t("Transactioni.text12"))+" "),a("span",[t._v(t._s(t.latestSwap.date))])]),a("a",{attrs:{target:"_",href:"https://bscscan.com/tx/"+t.latestSwap.hash}},[a("span",[t._v(t._s(t.$t("swap.text13")))]),a("img",{attrs:{src:n("3e93")}})])]),a("div",{staticClass:"info"},[a("div",[a("span",[t._v(t._s(t.latestSwap.router[0]))]),a("span",[t._v(t._s(t.latestSwap.amount0))])]),a("img",{attrs:{src:n("2072")}}),a("div",[a("span",[t._v(t._s(t.latestSwap.router[t.latestSwap.router.length-1]))]),a("span",[t._v(t._s(t.latestSwap.amount1))])])]),a("div",{staticClass:"router"},[a("span",[t._v(t._s(t.$t("transaction.text15")))]),a("div",[a("span",[t._v(t._s(t.latestSwap.router[0]))]),a("img",{attrs:{src:n("605e")}}),a("span",[t._v(t._s(t.latestSwap.router[1]))]),t.latestSwap.router.length>2?[a("img",{attrs:{src:n("605e")}}),a("span",[t._v(t._s(t.latestSwap.router[2]))])]:t._e(),t.latestSwap.router.length>3?[a("img",{attrs:{src:n("605e")}}),a("span",[t._v(t._s(t.latestSwap.router[3]))])]:t._e()],2)])])]):a("div",{staticClass:"no-deals"},[a("img",{attrs:{src:n("91fe")}}),a("span",[t._v(t._s(t.$t("Transactioni.text5")))])]),a("transation-state",{attrs:{state:t.transactionState,from:{amount:t.amount0,symbol:t.token0.symbol},to:{amount:t.amount1.toFixed(4),symbol:t.token1.symbol},"slip-point":t.slipPoint,min:t.amountOutMin,"to-price":t.rate1,"from-price":t.rate0},on:{exchange:t.sendTokenTransaction,close:t.close}}),a("search-tokens",{ref:"searchTokens",on:{select:t.select}})],1)},s=[];n("277d");function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function o(t){if(Array.isArray(t))return i(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n("fb6a"),n("b0c0");function c(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t){return o(t)||r(t)||c(t)||u()}function l(t){if(Array.isArray(t))return t}function p(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var a,s,i=[],o=!0,r=!1;try{for(n=n.call(t);!(o=(a=n.next()).done);o=!0)if(i.push(a.value),e&&i.length===e)break}catch(c){r=!0,s=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(r)throw s}}return i}}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t,e){return l(t)||p(t,e)||c(t,e)||m()}var f=n("1da1"),y=n("5530"),b=(n("96cf"),n("4795"),n("caad"),n("a9e3"),n("99af"),n("b680"),n("2532"),n("d81d"),n("0d03"),n("26e9"),n("4160"),n("159b"),n("aca7")),v={components:{"mk-header":function(){return n.e("chunk-6a43be11").then(n.bind(null,"68d4"))},"search-tokens":function(){return n.e("chunk-29f635d7").then(n.bind(null,"bab4"))},"transation-state":function(){return n.e("chunk-1cb9b797").then(n.bind(null,"5942"))}},data:function(){return{balance:0,balance1:0,gasPrice:"0.25%",ERC20Contract:null,allowance:0,value:0,amountOutMin:0,disabled:!1,rerate:!1,transactionState:"none",gasPopover:!1,gasActions:[{text:this.$t("Transactioni.text7")}],token0:b["b"],token1:b["c"],amount0:"",amount1:"",rate0:"--",rate1:"--",reserve0:0,reserve1:0,isauthorization:!1,ismoney:!0,isaexchange:!1,path:[b["b"],b["c"]],inputing:!1,latestSwap:null}},computed:Object(y["a"])(Object(y["a"])({},Vuex.mapState(["slippage","deadline","theme"])),{},{invalidPair:function(){return 0===this.path.length},needApprove:function(){return this.token0.symbol!==b["a"].symbol&&this.amount0.toBN().gt(this.allowance)}}),watch:{value:function(){var t=(this.balance/100*this.value).toFixed(6);this.amount0=t||"",this.input()}},destroyed:function(){clearInterval(this.interval)}},g=n("b9cc"),x=Object(y["a"])(Object(y["a"])({},v),{},{created:function(){var t=this;this.$address&&(this.init(),this.interval=setInterval((function(){"none"===t.transactionState&&t.init()}),1e4))},methods:{init:function(){var t=this.$route.query;t.token?this.select({token:JSON.parse(t.token),who:"token1"}):this.select({token:this.token0,who:"token0"}),this.getTransactions()},allIn:function(){this.amount0=this.balance,this.amount1=this.balance1,this.input()},close:function(){this.amount0="",this.amount1="",this.transactionState="none",this.init()},toInfo:function(){var t=this.token1.symbol===b["a"].symbol?this.token1:this.token0,e=this.token1.symbol===b["a"].symbol?this.token0:this.token1;this.$router.push({path:"/tokenInfo",query:{token0:JSON.stringify(t),token1:JSON.stringify(e)}})},openSearch:function(t){this.$refs.searchTokens.open(t)},switchToken:function(){var t=this.token0;this.token0=this.token1,this.token1=t,this.select({token:t,who:"token1"})},input:function(){var t=this;if(this.inputing)return!1;if(this.invalidPair)return this.disabled=!0,this.amount1="",!1;if(["","0"].includes(this.amount0))return this.amount1="",this.disabled=!0,this.ismoney=!0,this.isauthorization=!1,this.isaexchange=!1,this.gasPrice="0.25%",!1;this.token0.symbol===b["a"].symbol?(this.isauthorization=!1,this.ismoney=!1,this.isaexchange=!0):this.amount0.toBN().gt(this.allowance)?(this.isauthorization=!0,this.ismoney=!1,this.isaexchange=!1):this.amount0<=0?(this.ismoney=!0,this.isaexchange=!1,this.isauthorization=!1):(this.isaexchange=!0,this.isauthorization=!1,this.ismoney=!1),this.inputing=!0;var e=setTimeout(Object(f["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(Number(t.amount0)<=0)){n.next=8;break}return t.amount1="",t.gasPrice="0.25%",t.burn="5%",t.disabled=!0,t.inputing=!1,clearTimeout(e),n.abrupt("return",!1);case 8:return n.next=10,t.searchRouter();case 10:a=n.sent,t.path=a,t.inputing=!1,clearTimeout(e);case 14:case"end":return n.stop()}}),n)}))),500);this.disabled=!1,this.gasPrice="".concat(this.amount0.toBN().times(.0025).toFixed().toFixed(this.token0.decimals)," ").concat(this.token0.symbol),this.burn="".concat(this.amount0.toBN().times(.05).toFixed().toFixed(this.token0.decimals)," ").concat(this.token0.symbol)},getAmountsOut:function(t,e){var n=this;return Object(f["a"])(regeneratorRuntime.mark((function a(){var s,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=[n.token0.symbol,n.token1.symbol].includes("AI")?n.$AIRouter:n.$Router,a.next=3,s.methods.getAmountsOut(t.toWei(e[0].decimals),e.map((function(t){return t.address}))).call({from:n.$address});case 3:return i=a.sent,o=e.length-1,a.abrupt("return",i[o].fromWei(e[o].decimals).toFixed(e[o].decimals));case 6:case"end":return a.stop()}}),a)})))()},exchange:function(){if(this.amount0.toBN().gt(this.balance))return vant.Toast.fail(this.$t("transaction.text12"));this.token0.symbol===b["a"].symbol?this.swapExactETHForTokens():this.amount0.toBN().gt(this.allowance)?this.approve():this.sendTokenTransaction()},sendTokenTransaction:function(){this.token1.symbol===b["a"].symbol?this.swapExactTokensForETH():this.swapExactTokensForTokens()},approve:function(){var t=this;if(this.amount0.toBN().gt(this.balance))return vant.Toast.fail(this.$t("transaction.text12"));var e=new this.$web3.eth.Contract(g,this.token0.address);e.methods.approve(this.$Router._address,this.amount0.toWei(this.token0.decimals).toBN().times(10).toFixed()).send({from:this.$address}).on("transactionHash",(function(e){t.transactionState="approve",t.isaexchange=!1,t.isauthorization=!1,t.ismoney=!1})).on("receipt",(function(e){t.transactionState="approved",t.isaexchange=!1,t.isauthorization=!1,t.ismoney=!1})).on("error",(function(e){vant.Toast.fail(t.$t("Transactioni.text2")),t.transactionState="none",t.isaexchange=!1,t.isauthorization=!1,t.ismoney=!0,t.amount1=""}))},swapExactETHForTokens:function(){var t=this,e=Math.floor((new Date).getTime()/1e3)+this.deadline,n=this.amount1.toWei(this.token1.decimals).toBN(),a=n.minus(n.div(100).times(this.slippage)).toFixed(0);this.amountOutMin=a.fromWei(this.token1.decimals).toFixed(4),this.$Router.methods.swapExactETHForTokens(a,this.path,this.$address,e).send({from:this.$address,value:this.amount0.toWei(this.token0.decimals)}).on("transactionHash",(function(e){t.transactionState="in",t.isaexchange=!1,t.isauthorization=!1,t.ismoney=!1})).on("receipt",(function(e){t.transactionState="done",t.isaexchange=!1,t.isauthorization=!1,t.ismoney=!1})).on("error",(function(e){vant.Toast.fail(t.$t("Transactioni.text2")),t.transactionState="none",t.amount1="",t.isaexchange=!1,t.isauthorization=!1,t.ismoney=!0}))},swapExactTokensForETH:function(){var t=this,e=Math.floor((new Date).getTime()/1e3)+this.deadline,n=this.amount1.toWei(this.token1.decimals).toBN(),a=n.minus(n.div(100).times(this.slippage)).toFixed(0);this.amountOutMin=a.fromWei(this.token1.decimals).toFixed(4),this.$Router.methods.swapExactTokensForETH(this.amount0.toWei(this.token0.decimals),a,this.path,this.$address,e).send({from:this.$address}).on("transactionHash",(function(e){t.transactionState="in",t.isaexchange=!1,t.isauthorization=!1,t.ismoney=!1})).on("receipt",(function(e){t.transactionState="done",t.isaexchange=!1,t.isauthorization=!1,t.ismoney=!1})).on("error",(function(e){vant.Toast.fail(t.$t("Transactioni.text2")),t.transactionState="none",t.amount1="",t.isaexchange=!1,t.isauthorization=!1,t.ismoney=!0}))},swapExactTokensForTokens:function(){var t=this,e=Math.floor((new Date).getTime()/1e3)+this.deadline,n=this.amount1.toWei(this.token1.decimals).toBN(),a=n.minus(n.div(100).times(this.slippage)).toFixed(0);this.amountOutMin=a.fromWei(this.token1.decimals).toFixed(4),this.$Router.methods.swapExactTokensForTokens(this.amount0.toWei(this.token0.decimals),a,this.path,this.$address,e).send({from:this.$address}).on("transactionHash",(function(e){t.transactionState="in",t.isaexchange=!1,t.isauthorization=!1,t.ismoney=!1})).on("receipt",(function(e){t.transactionState="done",t.isaexchange=!1,t.isauthorization=!1,t.ismoney=!1})).on("error",(function(e){vant.Toast.fail("交易失败！"),t.amount1="",t.isaexchange=!1,t.isauthorization=!1,t.ismoney=!0,t.transactionState="none"}))},select:function(t){var e=this,n=t.token,a=t.who,s="token0"===a?this.token1:this.token0;if(s.symbol===n.symbol)return this.switchToken();if(this[a]=n,this.token0.symbol===b["a"].symbol){var i=new this.$web3.eth.Contract(g,this.token1.address);this.$web3.eth.getBalance(this.$address).then((function(t){e.balance=t.fromWei()})),i.methods.balanceOf(this.$address).call({from:this.$address},(function(t,n){t||(e.balance1=n.fromWei(e.token1.decimals))}))}else{var o=new this.$web3.eth.Contract(g,this.token0.address),r=new this.$web3.eth.Contract(g,this.token1.address);this.token1.symbol===b["a"].symbol?this.$web3.eth.getBalance(this.$address).then((function(t){e.balanc1=t.fromWei()})):r.methods.balanceOf(this.$address).call({from:this.$address},(function(t,n){t||(e.balance1=n.fromWei(e.token1.decimals))})),this.$Multicall.methods.aggregate([[this.token0.address,o.methods.balanceOf(this.$address).encodeABI()],[this.token0.address,o.methods.allowance(this.$address,this.$Router.options.address).encodeABI()]]).call({from:this.$address},(function(t,n){if(!t){var a=h(n.returnData,2),s=a[0],i=a[1];e.balance=s.fromWei(e.token0.decimals),e.allowance=i.fromWei(e.token0.decimals)}}))}this.amount0.toBN().gt(0)&&this.input()},searchRouter:function(){var t=this;return new Promise((function(e){for(var n=Object(b["g"])(t.token0,t.token1),a=[],s=(t.amount0.toBN().gt(0)?t.amount0:1).toWei(t.token0.decimals),i=0;i<n.length;i++)a.push([t.$Router.options.address,t.$Router.methods.getAmountsOut(s,n[i].map((function(t){return t.address}))).encodeABI()]);t.$Multicall.methods.tryAggregate(!1,a).call({from:t.$address},(function(a,s){if(!a){for(var i="0".toBN(),o=-1,r=0;r<s.length;r++)if(s[r][0]){var c=s[r][1].decode(["uint256[]"]);i.lt(c[c.length-1])&&(i=c[c.length-1].toBN(),o=r)}if(-1!==o){t.amount1=i.toFixed().fromWei(t.token1.decimals),t.getAmountsOut(1,n[o]).then((function(e){t.rate1=e.toFixed(4)}));var u=d(n[o]);t.getAmountsOut(1,u.reverse()).then((function(e){t.rate0=e.toFixed(4)})),e(n[o])}else t.amount1="",e([])}}))}))},getTransactions:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(b["h"])(t.$address);case 2:n=e.sent.slice(0,1),n.length>0&&(a=["0x7ff36ab5","0xb6f9de95"].includes(n[0].input.slice(0,10))?Object(y["a"])(Object(y["a"])({},n[0].input.slice(10).decode([{type:"uint",name:"amountOutMin"},{type:"address[]",name:"path"}])),{},{amountIn:n[0].value,date:t.formatDate(n[0].timeStamp)}):Object(y["a"])(Object(y["a"])({},n[0].input.slice(10).decode([{type:"uint",name:"amountIn"},{type:"uint",name:"amountOutMin"},{type:"address[]",name:"path"}])),{},{date:t.formatDate(n[0].timeStamp)}),s=[],a.path.forEach((function(e){var n=new t.$web3.eth.Contract(g,e);s.push([e,n.methods.symbol().encodeABI()]),s.push([e,n.methods.decimals().encodeABI()])})),t.$Multicall.methods.aggregate(s).call({from:t.$address},(function(e,i){if(!e){for(var o=[],r=i.returnData[1].decode(["uint8"]),c=i.returnData[s.length-1].decode(["uint8"]),u=0;u<i.returnData.length;u+=2){var d=i.returnData[u].decode(["string"]);o.push(d==="W".concat(b["a"].symbol)?b["a"].symbol:d)}t.latestSwap={router:o,hash:n[0].hash,amount0:a.amountIn.fromWei(r).toFixed(6),amount1:a.amountOutMin.fromWei(c).toFixed(6),date:a.date}}})));case 4:case"end":return e.stop()}}),e)})))()},formatDate:function(t){function e(t){return t<10?"0".concat(t):t}var n=new Date(1e3*t),a=n.getFullYear(),s=e(n.getMonth()+1),i=e(n.getDate()),o=e(n.getHours()),r=e(n.getMinutes());return"".concat(a,"/").concat(s,"/").concat(i," ").concat(o,":").concat(r)}}}),w=x,k=w,T=(n("fbd1"),n("d499"),n("2877")),C=Object(T["a"])(k,a,s,!1,null,"94b55c68",null);e["default"]=C.exports},"7dd5":function(t,e,n){t.exports=n.p+"img/change-btn.4f8b8895.svg"},"91fe":function(t,e,n){t.exports=n.p+"img/no-deals.e441ef00.svg"},"9bdd":function(t,e,n){var a=n("825a"),s=n("2a62");t.exports=function(t,e,n,i){try{return i?e(a(n)[0],n[1]):e(n)}catch(o){throw s(t),o}}},a630:function(t,e,n){var a=n("23e7"),s=n("4df4"),i=n("1c7e"),o=!i((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:o},{from:s})},ab13:function(t,e,n){var a=n("b622"),s=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[s]=!1,"/./"[t](e)}catch(a){}}return!1}},aca7:function(t,e,n){"use strict";n.d(e,"h",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return p})),n.d(e,"f",(function(){return h})),n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return g})),n.d(e,"i",(function(){return x})),n.d(e,"g",(function(){return w}));var a=n("1da1"),s=(n("96cf"),n("4de4"),n("fb6a"),n("caad"),n("2532"),n("d3b7"),n("0d03"),n("99af"),function(t){var e=3600*Math.floor(new Date/1e3/3600);return JSON.stringify({query:'query pair {\n            pair(id: "'.concat(t,'") {\n                pairHourData(\n                    where: {\n                        hourStartUnix_gte: ').concat(e-86400,"\n                        hourStartUnix_lte: ").concat(e,"\n                    }\n                ) {\n                    hourlyVolumeUSD\n                    hourlyTxns\n                }\n            }\n        }")})});function i(t){return JSON.stringify({query:"query poolTransactions($address: Bytes!) {\n            mints(first: 35, orderBy: timestamp, orderDirection: desc, where: {\n                pair: $address\n            }) {\n                id\n                timestamp\n                amount0\n                amount1\n            }\n            swaps(first: 35, orderBy: timestamp, orderDirection: desc, where: {\n                pair: $address\n            }) {\n                id\n                timestamp\n                amount0In\n                amount1In\n                amount0Out\n                amount1Out\n            }\n            burns(first: 35, orderBy: timestamp, orderDirection: desc, where: {\n                pair: $address\n            }) {\n                id\n                timestamp\n                amount0\n                amount1\n            }\n        }",variables:{address:t}})}function o(t,e){return r.apply(this,arguments)}function r(){return r=Object(a["a"])(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n){t.next=6;break}return t.next=3,fetch(e,{cache:"reload"});case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,fetch(e,{cache:"reload",method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:n});case 8:t.t0=t.sent;case 9:return a=t.t0,t.next=12,a.json();case 12:return t.abrupt("return",t.sent);case 13:case"end":return t.stop()}}),t)}))),r.apply(this,arguments)}var c={"0x18cbafe5":"swapExactTokensForETH","0x7ff36ab5":"swapExactETHForTokens","0x38ed1739":"swapExactTokensForTokens","0xb6f9de95":"swapExactETHForTokensSupportingFeeOnTransferTokens","0x5c11d795":"swapExactTokensForTokensSupportingFeeOnTransferTokens","0x791ac947":"swapExactTokensForETHSupportingFeeOnTransferTokens"},u=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o("https://api.polygonscan.com/api?module=account&action=txlist&address=".concat(e,"&startblock=0&endblock=latest&sort=desc&apikey=YourApiKeyToken"));case 2:return n=t.sent.result,t.abrupt("return",n.filter((function(t){return Object.hasOwnProperty.call(c,t.input.slice(0,10))})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d="https://api.thegraph.com/subgraphs/name/sushiswap/matic-exchange",l=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o(d,s(e));case 2:return t.abrupt("return",t.sent.data.pair);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function p(t){return m.apply(this,arguments)}function m(){return m=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o(d,i(e));case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return f=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o(d,y(e));case 2:return t.abrupt("return",t.sent.data.pair);case 3:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function y(t){return JSON.stringify({query:'query pair {\n            pair(id: "'.concat(t,'") {\n                reserveUSD\n            }\n        }')})}var b={address:"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",chainId:137,decimals:18,logoURI:"https://acswapinfo.github.io/tokens/polygon/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270.jpg",name:"MATIC",symbol:"MATIC"},v={address:"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",chainId:137,decimals:18,logoURI:"https://acswapinfo.github.io/tokens/polygon/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270.jpg",name:"MATIC",symbol:"MATIC"},g={name:"Tether USD",address:"0xc2132D05D31c914a87C6611C10748AEb04B58e8F",decimals:6,chainId:137,logoURI:"https://acswapinfo.github.io/tokens/polygon/0xc2132D05D31c914a87C6611C10748AEb04B58e8F.jpg",symbol:"USDT"},x=[{symbol:"MATIC",decimals:18,address:"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",logoURI:"https://acswapinfo.github.io/tokens/polygon/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270.jpg"},{symbol:"USDC",decimals:6,address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",logoURI:"https://acswapinfo.github.io/tokens/polygon/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174.jpg"},{symbol:"WBTC",decimals:8,address:"0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",logoURI:"https://acswapinfo.github.io/tokens/polygon/0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6.jpg"},{symbol:"DAI",decimals:18,address:"0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",logoURI:"https://acswapinfo.github.io/tokens/polygon/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063.jpg"},{symbol:"WETH",decimals:18,address:"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",logoURI:"https://acswapinfo.github.io/tokens/polygon/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619.jpg"},{symbol:"USDT",decimals:6,address:"0xc2132D05D31c914a87C6611C10748AEb04B58e8F",logoURI:"https://acswapinfo.github.io/tokens/polygon/0xc2132D05D31c914a87C6611C10748AEb04B58e8F.jpg"},{symbol:"MIM",decimals:18,address:"0x49a0400587A7F65072c87c4910449fDcC5c47242",logoURI:"https://acswapinfo.github.io/tokens/polygon/0x49a0400587A7F65072c87c4910449fDcC5c47242.jpg"},{symbol:"SUSHI",decimals:18,address:"0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a",logoURI:"https://acswapinfo.github.io/tokens/polygon/0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a.jpg"},{symbol:"FRAX",decimals:18,address:"0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89",logoURI:"https://acswapinfo.github.io/tokens/polygon/0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89.png"},{symbol:"STG",decimals:18,address:"0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",logoURI:"https://acswapinfo.github.io/tokens/polygon/0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590.jpg"}];function w(t,e){for(var n=x.filter((function(n){return![t.symbol,e.symbol].includes(n.symbol)})),a=[[t,e]],s=0;s<n.length;s++){a.push([t,n[s],e]);for(var i=s+1;i<n.length;i++)a.push([t,n[s],n[i],e])}return a}},b0c0:function(t,e,n){var a=n("83ab"),s=n("9bf2").f,i=Function.prototype,o=i.toString,r=/^\s*function ([^ (]*)/,c="name";a&&!(c in i)&&s(i,c,{configurable:!0,get:function(){try{return o.call(this).match(r)[1]}catch(t){return""}}})},b9cc:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"pauser","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimal","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"new_operator","type":"address"},{"internalType":"address","name":"new_pauser","type":"address"}],"name":"changeUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},caad:function(t,e,n){"use strict";var a=n("23e7"),s=n("4d64").includes,i=n("44d2");a({target:"Array",proto:!0},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d28b:function(t,e,n){var a=n("746f");a("iterator")},d499:function(t,e,n){"use strict";n("415a")},d81d:function(t,e,n){"use strict";var a=n("23e7"),s=n("b727").map,i=n("1dde"),o=i("map");a({target:"Array",proto:!0,forced:!o},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},e01a:function(t,e,n){"use strict";var a=n("23e7"),s=n("83ab"),i=n("da84"),o=n("5135"),r=n("861d"),c=n("9bf2").f,u=n("e893"),d=i.Symbol;if(s&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new d(t):void 0===t?d():d(t);return""===t&&(l[e]=!0),e};u(p,d);var m=p.prototype=d.prototype;m.constructor=p;var h=m.toString,f="Symbol(test)"==String(d("test")),y=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=r(this)?this.valueOf():this,e=h.call(t);if(o(l,t))return"";var n=f?e.slice(7,-1):e.replace(y,"$1");return""===n?void 0:n}}),a({global:!0,forced:!0},{Symbol:p})}},e4b1:function(t,e,n){t.exports=n.p+"img/select-btn.06f167f5.svg"},fbd1:function(t,e,n){"use strict";n("707d")}}]);