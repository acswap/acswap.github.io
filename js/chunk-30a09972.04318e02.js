(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30a09972"],{"0716":function(t,s,e){},"43fc":function(t,s,e){t.exports=e.p+"img/nft.aef2c40a.svg"},"5db4":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("van-overlay",{attrs:{show:t.show},on:{click:t.toggle}},[s("div",{staticClass:"buy-nft",on:{click:function(t){t.stopPropagation()}}},[s("span",{staticClass:"title"},[t._v(t._s(t.$t("buyNft.text1")))]),s("div",{staticClass:"info"},[s("img",{attrs:{src:e("43fc")}}),s("div",[s("span",[t._v("AcSwap NFT")]),s("span",[t._v("AcSwap NFT #"+t._s(t.tokenId))]),s("span",[t._v(t._s(t.$t("buyNft.text2"))),s("span",[t._v(t._s(t.tokenId))])])])]),s("div",{staticClass:"payments"},[s("div",[s("span",[t._v(t._s(t.$t("buyNft.text3")))]),s("div",{staticClass:"btn"},[s("span",{class:{active:"BNB"===t.method},on:{click:function(s){t.method="BNB"}}},[t._v("BNB")]),s("span",{class:{active:"USDT"===t.method},on:{click:function(s){t.method="USDT"}}},[t._v("USDT")])])]),s("div",[s("span",[t._v(t._s(t.$t("buyNft.text4")))]),s("div",{staticClass:"column"},[s("span",[t._v(t._s(("BNB"===t.method?t.priceBNB:t.priceUSDT).toFixed()))]),s("span",[t._v("($"+t._s(t.priceUSDT.toFixed(0))+")")])])]),s("div",[s("span",[t._v(t._s(t.$t("buyNft.text5",{symbol:t.method}))+" ")]),s("div",{staticClass:"column"},[s("span",[t._v(t._s(("BNB"===t.method?t.balanceBNB:t.balanceUSDT).toFixed()))]),s("span",[t._v("($"+t._s(("BNB"===t.method?t.balanceWorthUSD:t.balanceUSDT).toFixed(0))+")")])])])]),s("van-button",{attrs:{disabled:t.disabled,loading:t.trading,"loading-text":t.$t("transacting")},on:{click:t.subscribe}},[t._v(t._s(t.btnText))])],1)])},a=[],n=(e("f8b6"),e("36ad")),o=(e("7d8c"),e("7541")),c={props:{tokenId:Number,priceBNB:[String,Number],priceUSDT:[String,Number]},components:{[o["a"].name]:o["a"]},data(){return{show:!1,method:"BNB",balanceBNB:0,balanceWorthUSD:0,balanceUSDT:0,allowance:0,trading:!1}},computed:{disabled(){return this.trading||"BNB"===this.method&&this.balanceBNB.toBN().lt(this.priceBNB)||"USDT"===this.method&&this.balanceUSDT.toBN().lt(this.priceUSDT)},btnText(){return"USDT"===this.method&&this.allowance.toBN().lt(this.priceUSDT)?this.$t("approve"):this.$t("confirm")}},created(){this.$contracts&&this.init()},methods:{toggle(){this.show=!this.show},init(){const t=new this.$web3.BatchRequest;t.add(this.$web3.eth.getBalance.request(this.$address,"latest")),t.add(this.$contracts.AcSwapRouter.methods.getAmountsOut("1".toWei(),["0xcAfEDA13f42B44e6E4A7B1fd9A79dee948868Fe7",this.$contracts.USDTToken.options.address]).call.request("latest")),t.requestManager.sendBatch(t.requests,(t,s)=>{if(!t){const t=(s[0].result||s[0]).fromWei(),e=s[1].result.decode(["uint256[]"]);this.balanceBNB=t,this.balanceWorthUSD=t.toBN().times(e[1].fromWei()).toFixed()}}),this.$web3.eth.getBalance(this.$address).then(t=>{this.balanceBNB=t.fromWei()}),this.$contracts.USDTToken.methods.balanceOf(this.$address).call((t,s)=>{t||(this.balanceUSDT=s.fromWei())}),this.$contracts.USDTToken.methods.allowance(this.$address,this.$contracts.Genesis.options.address).call((t,s)=>{t||(this.allowance=s.fromWei())})},approve(){this.trading=!0;const t=this.priceUSDT.toBN().times(1e19).toFixed();this.$contracts.USDTToken.methods.approve(this.$contracts.Genesis.options.address,t).send({from:this.$address}).on("receipt",async()=>{const t=await this.$contracts.USDTToken.methods.allowance(this.$address,this.$contracts.Genesis.options.address).call({from:this.$address});this.allowance=t.fromWei(),this.trading=!1,this.subscribe()}).on("error",t=>{console.log(t),this.trading=!1})},async subscribe(){if("USDT"===this.method&&this.allowance.toBN().lt(this.priceUSDT))return this.approve();this.trading=!0;const t=this.$contracts.Genesis.methods["subscribeBy"+("BNB"===this.method?"Eth":"Usdt")]();try{await t.call({from:this.$address}),t.send({from:this.$address}).on("receipt",()=>{this.$emit("reload"),this.init(),n["a"].success(this.$t("minting_success")),this.trading=!1}).on("error",t=>{console.log(t),n["a"].fail(this.$t("minting_failure")),this.trading=!1})}catch(s){console.log(s),n["a"].fail(this.$t("minting_failure")),this.trading=!1}}}},r=c,d=r,h=(e("7e61"),e("b01b")),l=Object(h["a"])(d,i,a,!1,null,"13ae2c7e",null);s["default"]=l.exports},"7d8c":function(t,s,e){"use strict";e("1651"),e("80fd")},"7e61":function(t,s,e){"use strict";e("0716")}}]);