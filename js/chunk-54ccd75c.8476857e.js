(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54ccd75c"],{"008e":function(t,s,e){"use strict";e("14a1")},"14a1":function(t,s,e){},"4b0d":function(t,s,e){t.exports=e.p+"img/nft.aef2c40a.svg"},a4e5:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"nft-mining"},[s("div",{staticClass:"container"},[s("div",{staticClass:"tokens"},[s("img",{attrs:{src:e("4b0d")}}),s("div",{staticClass:"content"},[s("span",[t._v("AcSwap NFT")]),s("div",[s("span",[t._v(t._s(t.$t("nftMining.text1")))]),s("span",[t._v(t._s(t.radio)+"X")])])])]),s("div",{staticClass:"info"},[s("div",[s("span",[t._v(t._s(t.$t("nftMining.text3")))]),s("span",[t._v("AC")])]),s("div",[s("span",[t._v(t._s(t.$t("nftMining.text4")))]),s("span",[t._v(t._s(t.totalPledge.toFixed(2)))])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isPledge,expression:"!isPledge"}],staticClass:"pledge"},[s("div",{staticClass:"pledge-amount"},[s("div",[s("span",[t._v("AcSwap NFT "),s("span",[t._v(t._s(t.$t("nftMining.text5")))])]),s("span",[t._v("0")])]),s("router-link",{attrs:{to:""}},[t._v(t._s(t.$t("nftMining.text6")))])],1),s("button",{staticClass:"ant-btn",on:{click:t.showPledge}},[t._v(t._s(t.$t("nftMining.text7")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isPledge,expression:"isPledge"}],staticClass:"pledged"},[s("div",{staticClass:"info"},[s("span",[t._v("AcSwap NFT "),s("span",[t._v(t._s(t.$t("nftMining.text5")))])]),s("div",[s("span",[t._v(t._s(t.pledged))]),s("div",{staticClass:"buttons"},[s("button",{staticClass:"ant-btn",on:{click:t.showRedeem}},[s("img",{attrs:{src:e("b4fc")}})]),s("button",{staticClass:"ant-btn",on:{click:t.showPledge}},[s("img",{attrs:{src:e("cabd")}})])])])])])]),s("nft-pledge",{ref:"NftPledge",on:{reload:t.reload}}),s("nft-redeem",{ref:"NftRedeem",on:{reload:t.reload}})],1)},n=[],a={components:{"nft-pledge":()=>e.e("chunk-5230a91e").then(e.bind(null,"26f7")),"nft-redeem":()=>e.e("chunk-545df3b7").then(e.bind(null,"2782"))},data(){return{radio:0,totalPledge:"0",isPledge:!1,pledged:"0"}},created(){this.$contracts&&this.init()},methods:{showPledge(){this.$refs.NftPledge.toggle()},showRedeem(){this.$refs.NftRedeem.toggle()},reload(){this.$emit("reload"),this.init(),this.$refs.NftPledge.init(),this.$refs.NftRedeem.init()},init(){this.$contracts.Farm.methods.poolInfo(this.$contracts.AcNFT.options.address).call((t,s)=>{t||(this.radio=s.radio,this.totalPledge=s.totalPower.fromWei())}),this.$contracts.Farm.methods.userInfo(this.$contracts.AcNFT.options.address,this.$address).call((t,s)=>{t||(this.isPledge=s.power.toBN().gt(0),this.pledged=s.power.fromWei())})}}},d=a,o=d,l=(e("008e"),e("b01b")),c=Object(l["a"])(o,i,n,!1,null,"6830dd90",null);s["default"]=c.exports},b4fc:function(t,s,e){t.exports=e.p+"img/less.1207c938.svg"},cabd:function(t,s,e){t.exports=e.p+"img/plus.2f1de441.svg"}}]);