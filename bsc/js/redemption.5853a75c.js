(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["redemption"],{"0861":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{class:1==t.$ccstyle1?"mk-navbar":"mk-navbar1"},[t.$ccstyle1?i("img",{attrs:{src:e("c590")},on:{click:function(s){return t.$router.back(1)}}}):i("img",{attrs:{src:e("86d4")},on:{click:function(s){return t.$router.back(1)}}}),i("span",{domProps:{textContent:t._s(t.title)}})])},o=[],n={props:{title:{type:String,required:!0}}},a=n,r=a,d=(e("bd1e"),e("2877")),c=Object(d["a"])(r,i,o,!1,null,"3d34d58e",null);s["default"]=c.exports},"1eac":function(t,s,e){"use strict";e("ab2b")},"332e":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.info?i("div",{staticClass:"redemption"},[i("div",{staticClass:"box"},[i("div",{class:1==t.$ccstyle1?"content":"content1"},[i("div",{staticClass:"logos"},[i("div",[i("img",{attrs:{src:t.info.logo0}}),i("img",{attrs:{src:t.info.logo1}})]),i("span",[t._v(t._s(t.info.symbol0)+"/"+t._s(t.info.symbol1))])]),i("div",{staticClass:"info"},[i("div",[i("span",[t._v(t._s(t.info.symbol0))]),i("span",{domProps:{textContent:t._s(t.info.amount0.toFixed(6))}})]),i("div",[i("span",[t._v(t._s(t.info.symbol1))]),i("span",{domProps:{textContent:t._s(t.info.amount1.toFixed(6))}})]),i("div",[i("span",[t._v(t._s(t.$t("redemption.text2")))]),i("span",{domProps:{textContent:t._s(t.info.lp.toFixed(6))}})])]),i("div",{staticClass:"setting"},[i("span",[t._v(t._s(t.$t("redemption.text3")))]),i("span",[t._v(t._s(t.amountLP.toFixed(6)))]),t.$ccstyle1?i("van-slider",{attrs:{"active-color":"#02EAD0","inactive-color":"#252C32"},model:{value:t.prop,callback:function(s){t.prop=s},expression:"prop"}}):i("van-slider",{attrs:{"active-color":"#02EAD0","inactive-color":"#E4E4E4"},model:{value:t.prop,callback:function(s){t.prop=s},expression:"prop"}}),t._m(0)],1),i("div",{staticClass:"rate"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.rateChanged,expression:"!rateChanged"}]},[t._v(t._s(t.$t("redemption.text5"))+" 1 "+t._s(t.info.symbol0)+" = "+t._s(t.rate)+" "+t._s(t.info.symbol1))]),i("span",{directives:[{name:"show",rawName:"v-show",value:t.rateChanged,expression:"rateChanged"}]},[t._v(t._s(t.$t("redemption.text5"))+" 1 "+t._s(t.info.symbol1)+" = "+t._s(t.reRate)+" "+t._s(t.info.symbol0))])]),i("div",{staticClass:"coin"},[i("img",{attrs:{src:t.info.logo0}}),i("span",[t._v(t._s(t.amount0.toFixed(6))+" "+t._s(t.info.symbol0))])]),i("div",{staticClass:"coin"},[i("img",{attrs:{src:t.info.logo1}}),i("span",[t._v(t._s(t.amount1.toFixed(6))+" "+t._s(t.info.symbol1))])]),i("van-button",{attrs:{type:"info"},on:{click:t.approve}},[t._v(t._s(t.$t("redemption.text6")))])],1)]),i("van-overlay",{staticClass:"approve",attrs:{show:["approve","approved"].includes(t.state)}},[i("div",{class:1==t.$ccstyle1?"before-transaction":"before-transaction1"},[i("span",[t._v(t._s(t.$t("NFTRedemption.text1")))]),i("div",{staticClass:"info"},[i("div",[i("span",{domProps:{textContent:t._s(t.info.symbol0)}}),i("span",{domProps:{textContent:t._s(t.token0)}})]),i("div",{staticClass:"addpicture"},[i("img",{attrs:{src:e("ad5c")}})]),i("div",[i("span",{domProps:{textContent:t._s(t.info.symbol1)}}),i("span",{domProps:{textContent:t._s(t.token1)}})])]),i("div",{staticClass:"message"},[i("ul",[i("li",{class:"approved"===t.state?"done":""},[i("i"),i("i"),i("span",[t._v(t._s(t.$t("NFTRedemption.text2"))+" "+t._s(t.info.symbol0)+"-"+t._s(t.info.symbol1)+"-LP")]),i("van-loading",{directives:[{name:"show",rawName:"v-show",value:"approve"===t.state,expression:"state === 'approve'"}],attrs:{type:"spinner",color:"#9FD9D0"}})],1),i("li",[t._v(t._s(t.$t("NFTRedemption.text3")))])])]),i("van-button",{directives:[{name:"show",rawName:"v-show",value:"approved"===t.state,expression:"state === 'approved'"}],on:{click:function(s){t.state="before"}}},[t._v(t._s(t.$t("NFTRedemption.text4")))]),i("van-button",{directives:[{name:"show",rawName:"v-show",value:"approve"===t.state,expression:"state === 'approve'"}],attrs:{disabled:"",loading:"","loading-text":t.title,"loading-type":"spinner"}})],1)]),i("van-overlay",{staticClass:"redemption-confirm",attrs:{show:["before","in","done"].includes(t.state)}},[i("div",{directives:[{name:"show",rawName:"v-show",value:["before","in"].includes(t.state),expression:"['before', 'in'].includes(state)"}],class:1==t.$ccstyle1?"transaction":"transaction1"},[i("span",[t._v(t._s(t.$t("NFTRedemption.text6")))]),i("div",{staticClass:"tokens"},[i("div",[i("span",[t._v(t._s(t.info.symbol0))]),i("span",[t._v(t._s(t.token0))])]),i("div",{staticClass:"addpicture"},[i("img",{attrs:{src:e("ad5c")}})]),i("div",[i("span",[t._v(t._s(t.info.symbol1))]),i("span",[t._v(t._s(t.token1))])])]),i("div",{staticClass:"info"},[i("span",[t._v(t._s(t.$t("NFTRedemption.text7")))]),i("div",[i("span",[t._v("1 "+t._s(t.info.symbol0)+"="+t._s(t.rate.toFixed(6))+" "+t._s(t.info.symbol1))]),i("span",[t._v("1 "+t._s(t.info.symbol1)+"="+t._s(t.reRate.toFixed(6))+" "+t._s(t.info.symbol0))])]),i("span",[t._v(t._s(t.$t("NFTRedemption.text8")))]),i("div",[i("span",[t._v(t._s(t.amountLP.toFixed(6)))])])]),i("van-button",{directives:[{name:"show",rawName:"v-show",value:"before"===t.state,expression:"state === 'before'"}],on:{click:t.removeLiquidity}},[t._v(t._s(t.$t("NFTRedemption.text9")))]),i("van-button",{directives:[{name:"show",rawName:"v-show",value:"in"===t.state,expression:"state === 'in'"}],staticClass:"block",attrs:{disabled:"",loading:"","loading-type":"spinner","loading-text":t.title1}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:"done"===t.state,expression:"state === 'done'"}],class:1==t.$ccstyle1?"transacted":"transacted1"},[i("img",{attrs:{src:e("6582")}}),i("span",[t._v(t._s(t.$t("NFTRedemption.text11")))]),i("div",{staticClass:"tokens"},[i("div",[i("span",[t._v(t._s(t.info.symbol0))]),i("span",[t._v(t._s(t.token0))])]),i("div",{staticClass:"addpicture"},[i("img",{attrs:{src:e("ad5c")}})]),i("div",[i("span",[t._v(t._s(t.info.symbol1))]),i("span",[t._v(t._s(t.token1))])])]),i("van-button",{on:{click:t.close}},[t._v(t._s(t.$t("NFTRedemption.text12")))]),i("span",[t._v(t._s(t.$t("NFTRedemption.text13")))])],1)])],1):t._e()},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"props"},[e("span",[t._v("0%")]),e("span",[t._v("25%")]),e("span",[t._v("50%")]),e("span",[t._v("75%")]),e("span",[t._v("100%")])])}],n=e("5530"),a=(e("b680"),e("caad"),e("2532"),e("0d03"),e("d3b7"),e("3ca3"),e("ddb0"),{components:{"mk-navbar":function(){return Promise.all([e.e("joinFundPool~redemption~tokenInfo~transaction"),e.e("redemption")]).then(e.bind(null,"0861"))}},data:function(){return{prop:25,info:null,deadline:600,pairAddress:"",decimals0:0,decimals1:0,address0:"",address1:"",rate:0,reRate:0,rateChanged:!1,state:"done",allowance:0,contract:null}},computed:{amountLP:function(){return this.info?this.info.lp.toWei(18).toBN().div(100).times(this.prop).toFixed(0).fromWei(18):0},amount0:function(){return this.info?this.info.amount0.toWei(this.decimals0).toBN().div(100).times(this.prop).toFixed(0).fromWei(this.decimals0):0},amount1:function(){return this.info?this.info.amount1.toWei(this.decimals1).toBN().div(100).times(this.prop).toFixed(0).fromWei(this.decimals1):0}}}),r=e("b9cc"),d=Object(n["a"])(Object(n["a"])({},a),{},{created:function(){if(!this.$address)return!1;var t=JSON.parse(this.$route.query.info),s=t.logo0,e=t.logo1,i=t.symbol0,o=t.symbol1,n=t.amount0,a=t.amount1,r=t.reserve0,d=t.reserve1,c=t.lp,l=t.address0,m=t.address1,p=t.decimals0,v=t.decimals1,u=t.pair;this.info={logo0:s,logo1:e,symbol0:i,symbol1:o,amount0:n,amount1:a,lp:c},this.reserve0=r,this.reserve1=d,this.decimals0=p,this.decimals1=v,this.address0=l,this.address1=m,this.pair=u,this.init()},methods:{close:function(){this.state="none",this.$router.back()},init:function(){var t=this;this.rate="1".toWei(this.decimals0).toBN().times(this.reserve1).div(this.reserve0).toFixed(0).fromWei(this.decimals1),this.reRate="1".toWei(this.decimals1).toBN().times(this.reserve0).div(this.reserve1).toFixed(0).fromWei(this.decimals0),this.contract=new this.$web3.eth.Contract(r,this.pair),this.contract.methods.allowance(this.$address,this.$Router._address).call((function(s,e){s||(t.allowance=e.fromWei(18).toBN())}))},approve:function(){var t=this;if(this.allowance.gte(this.amountLP))return this.state="before";this.contract.methods.approve(this.$Router._address,this.amountLP.toWei(18).toBN().times(10).toFixed()).send({from:this.$address}).on("transactionHash",(function(s){t.state="approve"})).on("receipt",(function(s){t.state="approved"})).on("error",(function(s){t.state="none"}))},removeLiquidity:function(){var t=this;if([this.info.symbol0,this.info.symbol1].includes("HT"))return this.removeLiquidityETH();var s=Math.floor((new Date).getTime()/1e3)+this.deadline;this.$Router.methods.removeLiquidity(this.address0,this.address1,this.amountLP.toWei(18),this.amount0.toWei(this.decimals0).toBN().times(.99).toFixed(0),this.amount1.toWei(this.decimals1).toBN().times(.99).toFixed(0),this.$address,s).send({from:this.$address}).on("transactionHash",(function(s){t.state="in"})).on("receipt",(function(s){t.state="done"})).on("error",(function(s){t.state="none",vant.Toast.fail("暂无可赎回额度！")}))},removeLiquidityETH:function(){var t=this,s=Math.floor((new Date).getTime()/1e3)+this.deadline,e="HT"===this.info.symbol0?"0":"1",i="HT"===this.info.symbol0?"1":"0";this.$Router.methods.removeLiquidityETH(this["address".concat(i)],this.amountLP.toWei(18),this["amount".concat(i)].toWei(this["decimals".concat(i)]).toBN().times(.99).toFixed(0),this["amount".concat(e)].toWei(this["decimals".concat(e)]).toBN().times(.99).toFixed(0),this.$address,s).send({from:this.$address}).on("transactionHash",(function(s){t.state="in"})).on("receipt",(function(s){t.state="done"})).on("error",(function(s){t.state="none",vant.Toast.fail("暂无可赎回额度！")}))}}}),c=d,l=c,m=(e("1eac"),e("fd0d"),e("2877")),p=Object(m["a"])(l,i,o,!1,null,"57996c12",null);s["default"]=p.exports},5838:function(t,s,e){},6582:function(t,s,e){t.exports=e.p+"img/success.b5ad3b68.png"},"86d4":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAArCAYAAACNWyPFAAADhklEQVRYR63XR6idVRTF8V+MmtgjsYugBg0oZiIklkHAgG0izqwJ0QQjdlBjbAMVFQsIYm8TBRUEBRFFFBQn4sACYkGDDUOw9x5lhf3B9eXed+/3ve9M3uM9zln3nL3Xf+07S/9raxyCe3Ao7prVs8a2OAIPYUGd/VmfInNwDO7HvsjZf+D2vkS2x0m4A7vXDX7FLbi1D5GdcQpuxrwS+BFX40H8PhOR7M2hq3EVdsK/+AaX4skIRLSrSPbthotxIXbAJmzA+Xi+6rH5Yl1EtsJeuAZnIvX4B5/gHLyGPwe7tq3IbOxXBT4Wc/E3PsDZeBN/TbVFG5GYLL2fFl1cAmnRt0rgw2ECbZ5rm3Lvw+XmeOI3vI5V+LRuNNTbk9wkBx6OR7A/4uqf8SrW4MuqyUh4jBPZDkcjN0ix82Q/4YXqqq/GCYx7rvT9sgJd2jVF/x5P43J8W207Fn+jbhKTBRO3YVekbb/Go7geP0wqMOom83EarkOQkbURd+NOBBlx9sRr8Cb5fY/qljzHjnXKF7gBj1fBWwkM3iQCe+MSnFsuDibi4suq0GnZ1gKNSN47Lr4Wp5bJgomPSjBeiEDnlRvExSnwieWBYOE9rMS7g6DrqhKRZ3FceSAcehunY/0oTLQVi8h32KWIHHoGdPHCL11rMAyQawvbQXYK+znW4ZmqRadiT0V9jBdf3Fjplv8nfFKnTB3h1IyEGp/EdCdkRiqH5+8xYDI6Yq0NOCq0EqHNSJOJI62dvH6i2jvcindar6nsCnWPqmfK7NRA8bkyaqAYD7VawwDZ5EfwfiASWHmuVyrDg/e0+sRrFIVz8GF4oBIxQZVhLe5fUfXaIstHqU4XWgmohdUMSwo3maPewRkVuf+bSrqIZE9qEuxk3Gymk9zgfSyvnxkmpl3j4jebG4BeWbiJaVOTYCfT4xvNpNj1Js2+fJhkfKbF8ypr0s6hw0V4cTpST3KTQaFk/VmFnRg4JIhpr8BT1Rxb0KGNSCOWzA+lE88Ba1b8k6n+vmFg7SKSQ3OLk/PdA5kJck68dC9umoqhriIRCoaOr+FizxKKlx6r5wuGNj/dTESyPxhaWrNZIjwtHy8lJi4o9m2aqUiEGgwlFg4qoZj0pWrxDX2IRCgYytfqzMuLSiheCoaW9yXS0OGAEjqyhOKll/sUaeiwT32HCYZCi4/7FmmaKW0dgx6c0PsPjAzCNM08Nz8AAAAASUVORK5CYII="},ab2b:function(t,s,e){},ad5c:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAA4CAYAAADjLujzAAAAvUlEQVRYR+2XwQkCMRREZ46WYBXbijawNmEB692LdqANbAtaiDVYwogQFxExfwNGWCeQUz6Z8Hg/IUSlwUo5cFAxaaMzuoGAZbAMlqHYAaOriE5SA2CRIk8kz2Piw3edpBbAIW3ekdw4KETA6F4xTdg6SZeMFTMA81RzBXCfn8aaZP8oGNBJUki/eNGK5PF3QbmDuo/+qI8swzdf2CWAbUK8I7nP4X5eD9/eYzZ9V+ugYoJGZ3T+iBU7MGF0N4YWaznZlWnAAAAAAElFTkSuQmCC"},bd1e:function(t,s,e){"use strict";e("d933")},c590:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAArCAYAAACNWyPFAAADsUlEQVRYR63XWajtcxjG8c/PPA+ZSRlCmW6U8UJRphu5Mx6ZQuYyTxcIGUqZObihUIqSSBS5ObkwlAxxMuUkHMcxHPNPz+7dp2Wftc9ea539u9ntVev/Xe/vfZ/nef/NPJ/e+zrYGw9hX9zX5pPRe18PB+Mx7F7P/nLeIL339XEEHsFOyLP/wN3zAum9b4TjcQ+2qQp+wx24c40hvffNcCJuxxYFWI7rsbC19vvEkN57vpuHnoPrsCk6fsDleDaAQCeCFGBrXIqLsTH+xRJciJdba+nH1Bkb0ntfC9vjBpyG9OMffI5z8VZr7c/BqR0L0ntfGztXg4/CBvgbH+MsvNNa+2umLEaGlMgy+xnRAwuQK3m3AJ8MA4x8Xb33dbEPHi81RxMrsAhn44vWWioaeuaspER2AJ7ALoiqf8GbOA/ftNbSk1nPaiG99w1xWFWQZseXfsYrNVXfzQVY7XX13jP3R+JBZFzT9GV4HldiaWstYzvnGVpJ7z0ii03chS2Rsf0eT+Jm/DQqYGglvfetcDJuQiwj51s8gHuxvLUWZY98VlZSKt62piXXsUk95WvcgqfT8HEBKyspwA64DOeXinPfUfEV1egVkwCmIGUTUfGNOKlElpH8tICLWmvRxMQnkKg4DT6uNBBb+BBn4INBo5uUEsiLOLo0ENW+h1OweDabGBcWyI/YvBw57hmjixZ+nbQHM39EIFeVbceyM5pf4Rq8EH+aD1AgEV50cWulW35Iwid9ytYx0dgOVjOlk8rpY3F/KTyfR4ALCza2AFeBFCgROr3SZOOIlSSvn6nxXjaOlQyFFCiue2hdU3anaVN8qYQaU1ytrQ+bvFUMciA/ElC7IYGVFeeNyvDY+6wBNRKkKsqD98OjlYgJqixrScLT069xNDRraFWm71XDcFDZTfao93FqRe7/tpLZRDpXMqYnsZ2sm9PbSWznIyzI31FsZ5SMz5TFQK8tu4lo05PFtT2+Pb0pTlTJ9JcqCpLx2RYvqKxJFMQdLsGrq3PqOSuZAUrWn1m2k9SMDUW0V+O5DMcwGxoZMgBL5selE88x1pyltdU/PMxYx4YM2NAJefdAdoI8J1rKK9xtM/eAiSADNnRMLRfbFShaeqquLzY0tXBMDBmwocNrN8sEZuSjpcTERfG++N0aQQqUvThrbGJhjwJFpK/ViC9ZY8iADeW1Ovvy/gWKlmJDC+YFUqBc1a4FOqRA0dLr8wYpUNxhx3qHiQ3l/8/mFVKgPDNjHYHumdD7D1iiQylQCWPqAAAAAElFTkSuQmCC"},d933:function(t,s,e){},fd0d:function(t,s,e){"use strict";e("5838")}}]);