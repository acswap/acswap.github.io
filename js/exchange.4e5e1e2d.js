(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["exchange"],{"28e0":function(t,e,s){"use strict";s("a423")},"43fc":function(t,e,s){t.exports=s.p+"img/nft.aef2c40a.svg"},5201:function(t,e,s){t.exports=s.p+"img/usdt.5b771b34.svg"},a423:function(t,e,s){},a6f6:function(t,e,s){t.exports=s.p+"img/AC-NFT.66b41b20.gif"},d81d:function(t,e,s){"use strict";var r=s("23e7"),n=s("b727").map,a=s("1dde"),i=a("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e9f1:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:"exchange "+t.theme},[r("h2",[t._v(t._s(t.$t("exchange.text1")))]),r("span",[t._v(t._s(t.$t("exchange.text2")))]),r("div",{staticClass:"subscribe"},[r("div",{staticClass:"container"},[r("img",{attrs:{src:s("a6f6")}}),r("span",[t._v("AcSwap NFT")]),r("span",[t._v("AcSwap #"+t._s(t.tokenId))]),r("span",[t._v(t._s(t.$t("exchange.text3")))]),r("div",{staticClass:"price"},[r("img",{attrs:{src:s("5201")}}),r("span",[t._v(t._s(t.usdtPrice.toFixed(2)))]),r("span",[t._v("（～"+t._s(t.usdtPrice.toFixed(0))+" $）")])]),r("van-button",{attrs:{disabled:t.disabled},on:{click:t.showBuyNFT}},[t._v(t._s(t.$t("exchange.text4")))])],1)]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.nftList.length>0,expression:"nftList.length > 0"}]},[t._v(t._s(t.$t("exchange.text5")))]),t._l(t.nftList,(function(e){return r("div",{key:e,staticClass:"NFTs"},[r("div",{staticClass:"list-item"},[r("div",{staticClass:"info"},[r("img",{attrs:{src:s("43fc")}}),r("div",[r("span",[t._v("AcSwap NFT")]),r("span",[t._v("AcSwap #"+t._s(e))]),r("span",[t._v(t._s(t.$t("exchange.text6"))),r("span",[t._v(t._s(e))])])])]),r("span",{on:{click:function(s){return t.showTransfer(e)}}},[t._v(t._s(t.$t("exchange.text7")))])])])})),r("buy-nft",{ref:"BuyNFT",attrs:{tokenId:t.tokenId,usdtPrice:t.usdtPrice,fsvPrice:t.fsvPrice,buyNftFsvPrice:t.buyNftFsvPrice,fsvGetPower:t.fsvGetPower,usdtGetPower:t.usdtGetPower},on:{reload:t.init}}),r("transfer-nft",{ref:"TransferNFT",on:{reload:t.init}})],2)},n=[],a=s("5530"),i=(s("d3b7"),s("3ca3"),s("ddb0"),s("b680"),s("a9e3"),s("d81d"),{components:{"buy-nft":function(){return s.e("chunk-1cb36c81").then(s.bind(null,"5db4"))},"transfer-nft":function(){return s.e("chunk-294bb608").then(s.bind(null,"f95b"))}},data:function(){return{tokenId:0,usdtPrice:0,fsvPrice:0,buyNftFsvPrice:"0",fsvGetPower:"0",usdtGetPower:"0",nftList:[],purchases:0,maxPurchases:0,minted:0,maxMint:0}},computed:Object(a["a"])(Object(a["a"])({},Vuex.mapState(["theme"])),{},{disabled:function(){return this.purchases===this.maxPurchases||this.minted.toBN().gte(this.maxMint)}}),created:function(){this.$contracts&&this.init()},methods:{showBuyNFT:function(){this.$refs.BuyNFT.toggle()},showTransfer:function(t){this.$refs.TransferNFT.toggle(t)},init:function(){var t=this,e=new this.$web3.BatchRequest;e.add(this.$contracts.AcNft.methods.currentTokenId().call.request({from:this.$address})),e.add(this.$contracts.Genesis.methods.price(this.$contracts.USDTToken.options.address).call.request({from:this.$address})),e.add(this.$contracts.Genesis.methods.price(this.$contracts.FSVToken.options.address).call.request({from:this.$address})),e.add(this.$contracts.AcNft.methods.balanceOf(this.$address).call.request({from:this.$address})),e.add(this.$contracts.Oracle.methods.getTokenPrice(this.$contracts.FSVToken.options.address,"1".toWei()).call.request({from:this.$address})),e.add(this.$contracts.Genesis.methods.userInfos(this.$address).call.request({from:this.$address})),e.add(this.$contracts.Genesis.methods.maxByTime().call.request({from:this.$address})),e.add(this.$contracts.Genesis.methods.mintMax().call.request({from:this.$address})),e.add(this.$contracts.Genesis.methods.minted().call.request({from:this.$address})),e.requestManager.sendBatch(e.requests,(function(e,s){if(!e){var r=s[2].result.toBN().times(s[4].result.fromWei()).toFixed(0),n=s[5].result.decode([{name:"byTime",type:"uint256"},{name:"payValue",type:"uint256"},{name:"receiveForce",type:"uint256"}]);t.tokenId=s[0].result.decode(["uint256"]),t.usdtPrice=s[1].result.fromWei(),t.fsvPrice=s[2].result.fromWei(),t.buyNftFsvPrice=r.fromWei(),t.getNFTList(s[3].result.toBN().toNumber()),t.purchases=Number(n.byTime),t.maxPurchases=s[6].result.toBN().toNumber(),t.maxMint=s[7].result,t.minted=s[8].result,t.$contracts.ForceFactory.methods.getForceByUSDT(r).call({from:t.$address},(function(e,s){e||(t.fsvGetPower=s.fromWei())})),t.$contracts.ForceFactory.methods.getForceByUSDT(s[1].result).call({from:t.$address},(function(e,s){e||(t.usdtGetPower=s.fromWei())}))}}))},getNFTList:function(t){var e=this;if(0!==t){for(var s=[],r=0;r<t;r++)s.push([this.$contracts.AcNft.options.address,this.$contracts.AcNft.methods.tokenOfOwnerByIndex(this.$address,r).encodeABI()]);this.$contracts.Multicall.methods.aggregate(s).call({from:this.$address},(function(t,s){t||(e.nftList=s.returnData.map((function(t){return t.decode(["uint256"])})))}))}else this.nftList=[]}}}),c=i,o=c,d=(s("28e0"),s("2877")),u=Object(d["a"])(o,r,n,!1,null,"f9e2203e",null);e["default"]=u.exports}}]);