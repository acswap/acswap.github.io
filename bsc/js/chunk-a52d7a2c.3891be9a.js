(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a52d7a2c"],{"17c3":function(t,s,n){t.exports=n.p+"img/note.8d070b48.svg"},"32c3":function(t,s,n){},6506:function(t,s,n){"use strict";n("32c3")},f95b:function(t,s,n){"use strict";n.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("van-overlay",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],on:{click:t.toggle}},[a("div",{class:"transfer-nft "+t.theme,on:{click:function(t){t.stopPropagation()}}},[a("span",{staticClass:"title"},[t._v("转移NFT")]),a("div",{staticClass:"info"},[a("img",{attrs:{src:n("43fc")}}),a("div",[a("span",[t._v("AcSwap BOD NFT")]),a("span",[t._v("AcSwap BOD #"+t._s(t.id))]),a("span",[t._v("代币ID："),a("span",[t._v(t._s(t.id))])])])]),a("span",{staticClass:"subtitle"},[t._v("接收地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.toAddress,expression:"toAddress"}],attrs:{type:"text",placeholder:"粘贴接收地址"},domProps:{value:t.toAddress},on:{input:function(s){s.target.composing||(t.toAddress=s.target.value)}}}),a("div",{staticClass:"note"},[a("img",{attrs:{src:n("17c3")}}),a("span",[t._v("此操作会将您的 NFT 发送到您在上方指定的地址，请确保该地址正确无误。")])]),a("a-button",{attrs:{loading:t.trading,disabled:t.trading},on:{click:t.transfer}},[t._v(t._s(t.trading?"区块确认中":"确认"))])],1)])},e=[],i=n("5530"),o={data:function(){return{show:!1,id:"0",toAddress:"",trading:!1}},computed:Object(i["a"])({},Vuex.mapState(["theme"])),methods:{toggle:function(t){this.show=!this.show,t&&(this.id=t)},transfer:function(){var t=this;this.$web3.utils.isAddress(this.toAddress)?this.$contracts.AcNft.methods.transferFrom(this.address,this.toAddress,this.id).send({from:this.address}).on("transactionHash",(function(s){t.trading=!0})).on("receipt",(function(s){vant.Toast.success("转移成功！"),t.$emit("reload"),t.trading=!1,t.show=!1})).on("error",(function(s){t.trading=!1})):vant.Toast.fail("地址不正确！")}}},r=o,d=r,c=(n("6506"),n("2877")),u=Object(c["a"])(d,a,e,!1,null,"2c285d00",null);s["default"]=u.exports}}]);