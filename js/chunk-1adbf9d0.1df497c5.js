(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1adbf9d0"],{"3f46":function(t,e,n){"use strict";n("b37a")},8065:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-overlay",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],on:{click:t.toggle}},[n("div",{class:"board-redeem "+t.theme,on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"header"},[n("span",[t._v(t._s(t.$t("boardRedeem.text1")))]),n("van-icon",{attrs:{name:"cross"},on:{click:t.toggle}})],1),n("span",[t._v(t._s(t.$t("boardRedeem.text2")))]),n("div",{staticClass:"amount"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"number",placeholder:t.$t("boardRedeem.text3")},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),n("span",[t._v("BOD")]),n("van-button",{on:{click:function(e){t.amount=t.pledged}}},[t._v(t._s(t.$t("boardRedeem.text4")))])],1),n("span",[t._v(t._s(t.$t("boardRedeem.text5"))+" "),n("span",[t._v(t._s(t.pledged.toFixed()))]),t._v(" BOD")]),n("van-button",{attrs:{loading:t.trading,disabled:t.trading||Number(t.amount)<=0},on:{click:t.withdraw}},[t._v(t._s(t.btnText))])],1)])},o=[],s=n("1da1"),r=n("5530"),i=(n("96cf"),n("a9e3"),n("aca7")),d={props:{pledged:String},data:function(){return{show:!1,amount:"",trading:!1}},computed:Object(r["a"])(Object(r["a"])({},Vuex.mapState(["contracts","address","theme"])),{},{btnText:function(){return this.trading?this.$t("boardRedeem.text6"):Number(this.amount)<=0?this.$t("boardRedeem.text7"):this.$t("boardRedeem.text8")}}),created:function(){this.$contracts&&this.init()},methods:{init:function(){return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},toggle:function(){this.show=!this.show},withdraw:function(){var t=this;if(this.amount.toBN().gt(this.pledged))vant.Toast.fail(this.$t("boardRedeem.text9"));else{var e=this.$contracts.Farm.methods.withdraw(i["a"].BOARD,this.amount.toWei());e.call({from:this.$address},(function(n,a){n||e.send({from:t.$address}).on("transactionHash",(function(e){t.trading=!0})).on("receipt",(function(e){t.$emit("reload"),vant.Toast.success(t.$t("boardRedeem.text10")),t.amount="",t.trading=!1})).on("error",(function(e){t.trading=!1}))}))}}}},c=d,u=c,m=(n("3f46"),n("2877")),l=Object(m["a"])(u,a,o,!1,null,"45cdf23a",null);e["default"]=l.exports},b37a:function(t,e,n){}}]);