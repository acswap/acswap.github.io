(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34d437cb"],{"058e":function(e,t,n){e.exports=n.p+"img/pledge-mining.badc93c2.svg"},"226e":function(e,t,n){"use strict";var a=n("156d"),s=n("7db5"),i=n("6403"),r=n("3b65"),o=TypeError,d="Reduce of empty array with no initial value",u=function(e){return function(t,n,u,p){var l=s(t),c=i(l),m=r(l);if(a(n),0===m&&u<2)throw new o(d);var y=e?m-1:0,f=e?-1:1;if(u<2)while(1){if(y in c){p=c[y],y+=f;break}if(y+=f,e?y<0:m<=y)throw new o(d)}for(;e?y>=0:m>y;y+=f)y in c&&(p=n(p,c[y],y,l));return p}};e.exports={left:u(!1),right:u(!0)}},"6afc":function(e,t,n){e.exports=n.p+"img/nft-mining.444be305.svg"},"76e0":function(e,t,n){e.exports=n.p+"img/history.0b4dcabf.svg"},"89b4":function(e,t,n){"use strict";n.r(t);n("2b12");var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"farms"},[t("div",{staticClass:"header"},[t("div",{staticClass:"income"},[t("div",[t("span",[e._v(e._s(e.$t("mining.text1")))]),t("span",[e._v(e._s(e.totalEarn.toFixed(2)))]),t("button",{on:{click:function(t){return e.$router.push("/farms/log")}}},[t("img",{attrs:{src:n("76e0")}}),t("span",[e._v(e._s(e.$t("mining.text2")))])])]),t("button",{on:{click:e.showAward}},[e._v(e._s(e.$t("mining.text3")))])]),t("div",{staticClass:"amounts"},[t("div",[t("div",[t("img",{attrs:{src:n("fbc4")}}),t("span",[e._v(e._s(e.$t("lp_mining")))])]),t("span",[e._v(e._s(e.earnLP.toFixed(0)))])]),t("div",[t("div",[t("img",{attrs:{src:n("6afc")}}),t("span",[e._v(e._s(e.$t("nft_mining")))])]),t("span",[e._v(e._s(e.earnNFT.toFixed(0)))])]),t("div",[t("div",[t("img",{attrs:{src:n("058e")}}),t("span",[e._v(e._s(e.$t("node_mining")))])]),t("span",[e._v(e._s(e.earnDAO.toFixed(0)))])])])]),t("div",{staticClass:"title"},[t("div",{class:{active:"LP"===e.tag},on:{click:function(t){e.tag="LP"}}},[t("span",[e._v(e._s(e.$t("mining.text7")))])]),t("div",{class:{active:"NFT"===e.tag},on:{click:function(t){e.tag="NFT"}}},[t("span",[e._v(e._s(e.$t("mining.text5")))])]),t("div",{class:{active:"BOARD"===e.tag},on:{click:function(t){e.tag="BOARD"}}},[t("span",[e._v(e._s(e.$t("mining.text8")))])])]),t("lp-mining",{directives:[{name:"show",rawName:"v-show",value:"LP"===e.tag,expression:"tag === 'LP'"}],attrs:{poolsInfo:e.poolsInfo},on:{reload:e.init}}),t("nft-mining",{directives:[{name:"show",rawName:"v-show",value:"NFT"===e.tag,expression:"tag === 'NFT'"}],on:{reload:e.init}}),t("board-mining",{directives:[{name:"show",rawName:"v-show",value:"BOARD"===e.tag,expression:"tag === 'BOARD'"}],on:{reload:e.init}}),t("take-award",{ref:"TakeAward",attrs:{earnLP:e.earnLP,earnNFT:e.earnNFT,earnDAO:e.earnDAO,totalEarn:e.totalEarn,poolsInfo:e.poolsInfo},on:{reload:e.init}})],1)},s=[],i=(n("c54c"),n("e549")),r=n("b9cc"),o={components:{"take-award":()=>n.e("chunk-2f613617").then(n.bind(null,"2443")),"lp-mining":()=>n.e("chunk-6af6bc68").then(n.bind(null,"6956")),"nft-mining":()=>n.e("chunk-54ccd75c").then(n.bind(null,"a4e5")),"board-mining":()=>n.e("chunk-702323f6").then(n.bind(null,"4c64"))},data(){return{tag:"LP",earnNFT:0,earnDAO:0,poolsInfo:[]}},computed:{earnLP(){return this.poolsInfo.reduce((e,t)=>e.plus(t.earn),"0".toBN()).toFixed()},totalEarn(){return this.earnLP.toBN().plus(this.earnNFT).plus(this.earnDAO).toFixed()}},created(){this.$contracts&&this.init()},methods:{showAward(){this.$refs.TakeAward.toggle()},init(){this.$contracts.Farm.methods.poolLength().call((e,t)=>{if(!e){const e=new this.$web3.BatchRequest;for(let n=0;n<+t;n++)e.add(this.$contracts.Farm.methods.pools(n).call.request("latest"));e.requestManager.sendBatch(e.requests,(e,t)=>{if(!e){const e=t.map(e=>(e.result||e).decode(["address"])).filter(e=>!(e.toBN().eq(this.$contracts.AcNFT.options.address.toBN())||e.toBN().eq(this.$contracts.AcDAO.options.address.toBN())));this.getPoolsInfo(e)}})}}),this.$contracts.Farm.methods.earn(this.$contracts.AcNFT.options.address,this.$address).call((e,t)=>{e||(this.earnNFT=t.fromWei())}),this.$contracts.Farm.methods.earn(this.$contracts.AcDAO.options.address,this.$address).call((e,t)=>{e||(this.earnDAO=t.fromWei())})},getPoolsInfo(e){const t=new this.$web3.BatchRequest;t.add(this.$contracts.Farm.methods.getDayOutpus().call.request("latest")),t.add(this.$contracts.AcSwapRouter.methods.getAmountsOut("1".toWei(),[this.$contracts.AcToken.options.address,this.$contracts.USDTToken.options.address]).call.request("latest")),t.add(this.$contracts.Farm.methods.totalRadio().call.request("latest"));for(let n=0;n<e.length;n++){const a=new this.$web3.eth.Contract(i,e[n]);t.add(a.methods.token0().call.request("latest")),t.add(a.methods.token1().call.request("latest")),t.add(this.$contracts.Farm.methods.poolInfo(e[n]).call.request("latest")),t.add(a.methods.balanceOf(this.$contracts.Farm.options.address).call.request("latest")),t.add(this.$contracts.Farm.methods.userInfo(e[n],this.$address).call.request("latest")),t.add(this.$contracts.Farm.methods.earn(e[n],this.$address).call.request("latest"))}t.requestManager.sendBatch(t.requests,async(t,n)=>{if(!t){const t=(n[0].result||n[0]).toBN().div(1e18).times(365),a=n[1].result.decode(["uint256[]"])[1].fromWei(),s=Number(n[2].result),i=[];let r=0;for(let o=3;o<n.length;o+=6){const d=n[o+2].result.decode([{type:"bool",name:"isNft"},{type:"address",name:"token"},{type:"uint256",name:"radio"},{type:"uint256",name:"accTokenPerShare"},{type:"uint256",name:"totalPower"}]),u=n[o+4].result.decode([{type:"uint256",name:"power"},{type:"uint256",name:"reward"},{type:"uint256",name:"taked"},{type:"uint256",name:"rewardDebt"}]),p=t.times(a).times(d.radio);i.push({pair:e[r++],token0:n[o].result.decode(["address"]),token1:n[o+1].result.decode(["address"]),radio:d.radio,totalDeposited:n[o+3].result.fromWei(),deposited:u.power.fromWei(),earn:n[o+5].result.fromWei(),priceAnnualOutput:p,totalRadio:s})}this.poolsInfo=await this.getTokensSymbol(i)}})},getTokensSymbol(e){return new Promise(t=>{const n=new this.$web3.BatchRequest;for(let a=0;a<e.length;a++){const t=new this.$web3.eth.Contract(r,e[a].token0),s=new this.$web3.eth.Contract(r,e[a].token1),o=new this.$web3.eth.Contract(i,e[a].pair);n.add(t.methods.symbol().call.request("latest")),n.add(s.methods.symbol().call.request("latest")),n.add(o.methods.totalSupply().call.request("latest")),n.add(this.$contracts.USDTToken.methods.balanceOf(e[a].pair).call.request("latest"))}n.requestManager.sendBatch(n.requests,(n,a)=>{if(!n){let n=0;for(let t=0;t<a.length;t+=4){const s=(a[t].result||a[t]).decode(["string"]),i=a[t+1].result.decode(["string"]),r=a[t+2].result.fromWei(),o=a[t+3].result.toBN().times(2).div(1e18).div(r),d=o.times(e[n].totalDeposited).times(e[n].totalRadio);e[n]={...e[n],symbol0:s,symbol1:i,symbol:`${s}-${i}/LP`,apy:e[n].priceAnnualOutput.div(d).toFixed(),depositedUSD:o.times(e[n].deposited).toFixed()},n++}t(e)}})})}}},d=o,u=d,p=(n("cc24"),n("b01b")),l=Object(p["a"])(u,a,s,!1,null,"3110506d",null);t["default"]=l.exports},a71a:function(e,t,n){},b9cc:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"pauser","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimal","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"new_operator","type":"address"},{"internalType":"address","name":"new_pauser","type":"address"}],"name":"changeUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},ba33:function(e,t,n){"use strict";var a=n("ee4c"),s=n("28ca");e.exports="process"===s(a.process)},bb4e:function(e,t,n){"use strict";var a=n("a067");e.exports=function(e,t){var n=[][e];return!!n&&a((function(){n.call(null,t||function(){return 1},1)}))}},c54c:function(e,t,n){"use strict";var a=n("6982"),s=n("226e").left,i=n("bb4e"),r=n("84d1"),o=n("ba33"),d=!o&&r>79&&r<83,u=d||!i("reduce");a({target:"Array",proto:!0,forced:u},{reduce:function(e){var t=arguments.length;return s(this,e,t,t>1?arguments[1]:void 0)}})},cc24:function(e,t,n){"use strict";n("a71a")},fbc4:function(e,t,n){e.exports=n.p+"img/power-mining.a4c4b886.svg"}}]);