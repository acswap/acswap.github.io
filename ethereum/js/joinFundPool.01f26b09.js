(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["joinFundPool"],{"01c7":function(t,e,n){},"0430":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-popup",{attrs:{round:"",closeable:"",position:"bottom"},on:{"click-close-icon":t.close},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"trading-setup"},[n("span",{staticClass:"title"},[t._v(t._s(t.$t("tradingSetup.text1")))]),n("div",{staticClass:"slippage-setting"},[n("div",{staticClass:"title"},[n("span",[t._v(t._s(t.$t("tradingSetup.text2")))]),n("div",[n("input",{attrs:{type:"number"},domProps:{value:t.value},on:{input:t.input}}),n("span",[t._v("%")])])]),n("van-slider",{attrs:{min:"1",max:"5",step:"0.5","button-size":"15","active-color":"#0DC8B5","inactive-color":"#D8D8D8"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),n("div",{staticClass:"slider-items"},[n("span",[t._v("1%")]),n("span",[t._v("2%")]),n("span",[t._v("3%")]),n("span",[t._v("4%")]),n("span",[t._v("5%")])]),n("span",[t._v(t._s(t.$t("tradingSetup.text3")))])],1),n("div",{staticClass:"deadline"},[n("div",[n("span",[t._v(t._s(t.$t("tradingSetup.text4")))]),n("van-field",{attrs:{type:"number","input-align":"center"},model:{value:t.deadline,callback:function(e){t.deadline=e},expression:"deadline"}}),n("span",[t._v(t._s(t.$t("tradingSetup.text5")))])],1),n("span",[t._v(t._s(t.$t("tradingSetup.text6")))])]),n("van-button",{attrs:{type:"info"},on:{click:t.setSlipPoint}},[t._v(t._s(t.$t("tradingSetup.text7")))])],1)])},a=[],i=(n("a9e3"),{data:function(){return{value:2,deadline:10,show:!1,slipPoint:2}},methods:{open:function(){this.show=!0},setSlipPoint:function(){this.$emit("change",{slipPoint:this.slipPoint,deadline:60*Number(this.deadline)}),this.show=!1},input:function(t){this.slipPoint=t.target.value}}}),o=i,r=o,l=(n("f6b1"),n("364c"),n("2877")),u=Object(l["a"])(r,s,a,!1,null,"19294a9b",null);e["default"]=u.exports},"0861":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:1==t.$ccstyle1?"mk-navbar":"mk-navbar1"},[t.$ccstyle1?s("img",{attrs:{src:n("c590")},on:{click:function(e){return t.$router.back(1)}}}):s("img",{attrs:{src:n("86d4")},on:{click:function(e){return t.$router.back(1)}}}),s("span",{domProps:{textContent:t._s(t.title)}})])},a=[],i={props:{title:{type:String,required:!0}}},o=i,r=o,l=(n("bd1e"),n("2877")),u=Object(l["a"])(r,s,a,!1,null,"3d34d58e",null);e["default"]=u.exports},1169:function(t,e,n){},1500:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"join-fund-pool"},[s("div",{staticClass:"box"},[s("div",{class:t.$ccstyle1?"tags":"tags-light"},[s("div",{on:{click:t.message}},[t._v("AcSwap")]),s("div",{staticClass:"active"},[t._v("UniSwap")])]),s("div",{staticClass:"just-swap"},[s("div",{class:1==t.$ccstyle1?"content":"content1"},[s("div",{staticClass:"tokens"},[s("div",{staticClass:"token"},[s("div",{staticClass:"symbol select",on:{click:function(e){return t.openSearch("token0")}}},[s("span",[t._v(t._s(t.token0.symbol))]),s("img",{attrs:{src:n("9283")}})]),s("span",{domProps:{textContent:t._s(t.$t("joinFundPool.text2"))}}),s("span",[t._v(t._s(t.balance0))])]),s("div",{staticClass:"logos"},[s("img",{attrs:{src:""+t.$imgPath+t.token0.logoURI}}),s("img",{attrs:{src:""+t.$imgPath+t.token1.logoURI}})]),s("div",{staticClass:"token"},[s("div",{staticClass:"symbol select",on:{click:function(e){return t.openSearch("token1")}}},[s("span",[t._v(t._s(t.token1.symbol))]),s("img",{attrs:{src:n("9283")}})]),s("span",{domProps:{textContent:t._s(t.$t("joinFundPool.text2"))}}),s("span",[t._v(t._s(t.balance1))])])]),s("div",{class:"en"==t.$i18n.locale?"inputs1   ":"inputs"},[s("van-field",{attrs:{type:"number",placeholder:t.$t("joinFundPool.text4")},on:{input:t.inputAmount0},model:{value:t.amount0,callback:function(e){t.amount0=e},expression:"amount0"}}),s("span",[t._v("+")]),s("van-field",{attrs:{type:"number",placeholder:t.$t("joinFundPool.text4")},on:{input:t.inputAmount1},model:{value:t.amount1,callback:function(e){t.amount1=e},expression:"amount1"}})],1),s("div",{staticClass:"rate"},[s("div",[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.rerate,expression:"!rerate"}]},[t._v(t._s(t.$t("joinFundPool.text5"))+" 1 "+t._s(t.token0.symbol)+" = "+t._s(t.rate1)+" "+t._s(t.token1.symbol))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.rerate,expression:"rerate"}]},[t._v(t._s(t.$t("joinFundPool.text5"))+" 1 "+t._s(t.token1.symbol)+" = "+t._s(t.rate0)+" "+t._s(t.token0.symbol))]),s("img",{attrs:{src:n("fe12")},on:{click:function(e){t.rerate=!t.rerate}}})]),s("div",[s("span",[t._v(t._s(t.$t("joinFundPool.text6"))+" "+t._s(t.poolProp))]),s("img",{attrs:{src:n("4fe1")},on:{click:t.openSetting,change:t.changeDeadline}})])]),s("van-button",{on:{click:t.addLiquidity}},[t._v(t._s(t.$t("joinFundPool.text7")))])],1),s("search-tokens",{ref:"searchTokens",on:{select:t.select}}),s("fundpool-state",{attrs:{state:t.state,token0:{amount:t.amount0,symbol:t.token0.symbol},token1:{amount:t.amount1,symbol:t.token1.symbol},waitApprove:t.waitApprove,lp:t.liquidity,rate:t.rate1,reRate:t.rate0,prop:t.poolProp},on:{addLiquidity:t.addLiquidity,close:t.close}}),s("trading-setup",{ref:"tradingSetup",on:{change:t.changeDeadline}})],1),t.assetsPool?s("div",{class:1==t.$ccstyle1?"your-share":"your-share1"},[s("div",{staticClass:"tokens"},[s("div",[s("div",[s("img",{attrs:{src:t.assetsPool.logo0}}),s("img",{attrs:{src:t.assetsPool.logo1}})]),s("span",[t._v(t._s(t.assetsPool.symbol0)+"/"+t._s(t.assetsPool.symbol1))])]),s("div",[s("span",[t._v("LP: "+t._s(t.assetsPool.lp))]),s("span",[t._v(t._s(t.assetsPool.myShare)+"%")])])]),s("div",{staticClass:"amounts"},[s("div",[s("span",[t._v(t._s(t.assetsPool.symbol0)+": "+t._s(t.assetsPool.amount0))]),s("span",[t._v(t._s(t.assetsPool.symbol1)+": "+t._s(t.assetsPool.amount1))])]),s("van-button",{on:{click:function(e){t.$router.push({path:"/redemption",query:{info:JSON.stringify(t.assetsPool)}})}}},[t._v(t._s(t.$t("joinFundPool.text11")))])],1)]):t._e(),t.assetsPool?t._e():s("div",{staticClass:"not-liquidity"},[t.$ccstyle1?s("img",{attrs:{src:n("f0b7")}}):s("img",{attrs:{src:n("7a58")}}),s("span",[t._v(t._s(t.$t("joinFundPool.text16")))])])])])},a=[],i=n("1da1"),o=n("5530"),r=(n("96cf"),n("4795"),n("caad"),n("b680"),n("99af"),n("2532"),n("0d03"),n("a9e3"),n("d3b7"),n("3ca3"),n("ddb0"),n("aca7")),l=n("e549"),u={components:{"mk-navbar":function(){return Promise.resolve().then(n.bind(null,"0861"))},"search-tokens":function(){return Promise.resolve().then(n.bind(null,"bab4"))},"fundpool-state":function(){return Promise.resolve().then(n.bind(null,"e0d3"))},"trading-setup":function(){return Promise.resolve().then(n.bind(null,"0430"))}},data:function(){return{token0:r["b"],token1:r["c"],balance0:0,balance1:0,contract0:null,contract1:null,allowance0:"0".toBN(),allowance1:"0".toBN(),reserve0:0,reserve1:0,amount0:"",amount1:"",inputing0:!1,inputing1:!1,rerate:!1,slipPoint:2,deadline:600,state:"none",pairAddress:null,totalLiquidity:0,assetsPool:null}},computed:{pairContract:function(){return this.pairAddress?new this.$web3.eth.Contract(l,this.pairAddress):this.pairAddress},rate0:function(){return this.pairAddress?"1".toWei(this.token1.decimals).toBN().times(this.reserve0).div(this.reserve1).toFixed().fromWei(this.token0.decimals).toFixed(6):"--"},rate1:function(){return this.pairAddress?"1".toWei(this.token0.decimals).toBN().times(this.reserve1).div(this.reserve0).toFixed().fromWei(this.token1.decimals).toFixed(6):"--"},poolProp:function(){return["","0"].includes(this.amount0)||!this.pairAddress?"--":"".concat(this.amount0.toWei(this.token0.decimals).toBN().div(this.reserve0.toBN().plus(this.amount0.toWei(this.token0.decimals))).times(100).toFixed().toFixed(6),"%")},liquidity:function(){if(this.reserve0.toBN().gt(0)){var t=this.amount0.toWei(this.token0.decimals).toBN().times(this.totalLiquidity).div(this.reserve0),e=this.amount1.toWei(this.token1.decimals).toBN().times(this.totalLiquidity).div(this.reserve1);return(t.lt(e)?t:e).toFixed(0).fromWei(18)}return this.amount0.toWei(this.token0.decimals).toBN().times(this.amount1.toWei(this.token1.decimals)).sqrt().toFixed(0).fromWei(18)},waitApprove:function(){var t=[];return this.token0.symbol!==r["a"].symbol&&this.allowance0.lt(this.amount0.toWei(this.token0.decimals))&&t.push(Object(o["a"])({who:"0"},this.token0)),this.token1.symbol!==r["a"].symbol&&this.allowance1.lt(this.amount1.toWei(this.token1.decimals))&&t.push(Object(o["a"])({who:"1"},this.token1)),t}},destroyed:function(){clearInterval(this.interval)}},d=n("b9cc"),p=Object(o["a"])(Object(o["a"])({},u),{},{created:function(){var t=this;this.$address&&(this.select({token:this.token0,who:"token0"}),this.interval=setInterval((function(){"none"===t.state&&t.select({token:t.token0,who:"token0"})}),1e4))},methods:{message:function(){return vant.Toast.fail("暂未开放！")},openSearch:function(t){this.$refs.searchTokens.open(t)},openSetting:function(){this.$refs.tradingSetup.open()},changeDeadline:function(t){var e=t.slipPoint,n=t.deadline;this.slipPoint=e,this.deadline=n},close:function(){this.state="none",this.amount0="",this.amount1="",this.select({token:this.token0,who:"token0"})},switch:function(){var t=this.token0;this.token0=this.token1,this.token1=t,this.select({token:this.token0,who:"token0"})},inputAmount0:function(){return!!this.pairAddress&&(this.inputing1?this.inputing1=!1:["","0"].includes(this.amount0)?this.amount1="":(this.inputing0=!0,void(this.amount1=this.amount0.toWei(this.token0.decimals).toBN().times(this.reserve1).div(this.reserve0).toFixed().fromWei(this.token1.decimals).toFixed(6))))},inputAmount1:function(){return!!this.pairAddress&&(this.inputing0?this.inputing0=!1:["","0"].includes(this.amount1)?this.amount0="":(this.inputing1=!0,void(this.amount0=this.amount1.toWei(this.token1.decimals).toBN().times(this.reserve0).div(this.reserve1).toFixed().fromWei(this.token0.decimals).toFixed(6))))},approve:function(){var t=this,e=new this.$web3.eth.Contract(d,this.waitApprove[0].address);e.methods.approve(this.$Router._address,this["amount".concat(this.waitApprove[0].who)].toWei(this.waitApprove[0].decimals)).send({from:this.$address}).on("transactionHash",(function(e){t.state="approve"})).on("receipt",function(){var n=Object(i["a"])(regeneratorRuntime.mark((function n(s){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.methods.allowance(t.$address,t.$Router._address).call({from:t.$address});case 2:t["allowance".concat(t.waitApprove[0].who)]=n.sent.toBN(),t.waitApprove.length>0?t.approve():t.state="approved";case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()).on("error",(function(e){t.state="none"}))},addLiquidity:function(){var t=this;if(this.balance0.toBN().lt(this.amount0))return vant.Toast.fail("".concat(this.token0.symbol).concat(this.$t("joinFundPool.text13")));if(this.balance1.toBN().lt(this.amount1))return vant.Toast.fail("".concat(this.token1.symbol).concat(this.$t("joinFundPool.text13")));if(this.waitApprove.length>0)return this.approve();if([this.token0.symbol,this.token1.symbol].includes(r["a"].symbol))return this.addLiquidityETH();var e=this.amount0.toWei(this.token0.decimals),n=this.amount1.toWei(this.token1.decimals),s=e.toBN().div(100).times(this.slipPoint).toFixed(0),a=n.toBN().div(100).times(this.slipPoint).toFixed(0),i=Math.floor((new Date).getTime()/1e3)+this.deadline;this.$Router.methods.addLiquidity(this.token0.address,this.token1.address,e,n,s,a,this.$address,i).send({from:this.$address}).on("transactionHash",(function(e){t.state="in"})).on("receipt",(function(e){t.state="done"})).on("error",(function(e){t.state="none"}))},addLiquidityETH:function(){var t=this,e=this.token0.symbol===r["a"].symbol?"1":"0",n=this.token0.symbol===r["a"].symbol?"0":"1",s=this["amount".concat(e)].toWei(this["token".concat(e)].decimals),a=s.toBN().div(100).times(this.slipPoint).toFixed(0),i=this["amount".concat(n)].toWei(this["token".concat(n)].decimals),o=i.toBN().div(100).times(this.slipPoint).toFixed(0),l=Math.floor((new Date).getTime()/1e3)+this.deadline;this.$Router.methods.addLiquidityETH(this["token".concat(e)].address,s,a,o,this.$address,l).send({from:this.$address,value:i}).on("transactionHash",(function(e){t.state="in"})).on("receipt",(function(e){t.state="done"})).on("error",(function(e){t.state="none"}))},select:function(t){var e=this,n=t.token,s=t.who;if("token0"===s&&this.token1.symbol===n.symbol)return this["switch"]();if("token1"===s&&this.token0.symbol===n.symbol)return this["switch"]();this[s]=n;var a=new this.$web3.BatchRequest,i=new this.$web3.eth.Contract(d,this.token0.address),o=new this.$web3.eth.Contract(d,this.token1.address);this.token0.symbol===r["a"].symbol?a.add(this.$web3.eth.getBalance.request(this.$address,"latest")):a.add(i.methods.balanceOf(this.$address).call.request({from:this.$address})),this.token1.symbol===r["a"].symbol?a.add(this.$web3.eth.getBalance.request(this.$address,"latest")):a.add(o.methods.balanceOf(this.$address).call.request({from:this.$address})),a.add(i.methods.allowance(this.$address,this.$Router._address).call.request({from:this.$address})),a.add(o.methods.allowance(this.$address,this.$Router._address).call.request({from:this.$address})),a.add(this.$Factory.methods.getPair(this.token0.address,this.token1.address).call.request({from:this.$address})),a.requestManager.sendBatch(a.requests,(function(t,n){if(t)console.log(n),console.log(t);else{var s=n[4].result.decode(["address"]);if(e.balance0=n[0].result.fromWei(e.token0.decimals).toFixed(2),e.balance1=n[1].result.fromWei(e.token1.decimals).toFixed(2),e.allowance0=n[2].result.toBN(),e.allowance1=n[3].result.toBN(),e.pairAddress=0!==Number(s)?s:null,e.pairAddress){var a=new e.$web3.BatchRequest;a.add(e.pairContract.methods.getReserves().call.request({from:e.$address})),a.add(e.pairContract.methods.totalSupply().call.request({from:e.$address})),a.add(e.pairContract.methods.balanceOf(e.$address).call.request({from:e.$address})),a.requestManager.sendBatch(a.requests,(function(t,n){if(!t){var s=n[0].result.decode([{type:"uint112",name:"_reserve0"},{type:"uint112",name:"_reserve1"}]),a=s._reserve0,i=s._reserve1,o=e.token0.address.toBN().lt(e.token1.address.toBN()),r=n[2].result.toBN();e.reserve0=o?a:i,e.reserve1=o?i:a,e.totalLiquidity=n[1].result.toBN(),r.gt(0)&&(e.assetsPool={logo0:e.token0.logoURI,logo1:e.token1.logoURI,symbol0:e.token0.symbol,symbol1:e.token1.symbol,amount0:r.times(e.reserve0).div(e.totalLiquidity).toFixed(0).fromWei(e.token0.decimals),amount1:r.times(e.reserve1).div(e.totalLiquidity).toFixed(0).fromWei(e.token1.decimals),reserve0:e.reserve0,reserve1:e.reserve1,lp:r.toFixed().fromWei(18),myShare:r.div(e.totalLiquidity).times(100).toFixed().toFixed(6),address0:e.token0.address,address1:e.token1.address,decimals0:e.token0.decimals,decimals1:e.token1.decimals,pair:e.pairAddress})}}))}}}))}}}),c=p,m=c,y=(n("379b"),n("2877")),h=Object(y["a"])(m,s,a,!1,null,"55c4f19b",null);e["default"]=h.exports},"25f1":function(t,e,n){},"364c":function(t,e,n){"use strict";n("1169")},"379b":function(t,e,n){"use strict";n("d6c8")},"4fe1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAE8klEQVRIS9VXXWgcVRT+zp1NW2x98yEpCqVpsSUpKFoQVIhYMUKFisbubivdzKS2m5mggg+VIiq22Ic+FDKbTWl2dkPr7NYoFlqwouKCL0oVhSY20jYWXBLf7X927pE7m4mTzWyStvrgPCVz7j3fnp/vnG8IizxdevrhGLRDBO4EUAH4fdcZ+Dh8Lan37mDQAQKaGXS2Cm/fiJP9bSHX1MjY1dW7Kna/2A/C2wTEwuckeEspl/lGvYsb5rMC9HXYzkAVjMPVv+TBkZGBq1EYkcDJbut5CAwBeFBdYnBJwjsoOLaDCPuYMTo1MfqosrWsbT9PhA0ADnuoDgto+wkUnwGrQKLHzdtf1oPPA95hWE9KoKyiZMa4B6/vEyfrR9SRSq1Yra08D9A6MBd8Z0QpZr4yJa9tLBcKN9WrV/X0Fg1av/pBKnqW/FQpn/khDD4POKmbeeVMOZ6cGNtdLper4QuJ7vROEtrxOamV3mvFfPZE+F1HR0espbUtS6Ae5ct1Mt2LAFunQdgqJeKlvH0yqj5Jw/wwKINqODeXeTfqXLzb2i4ESgycKubslxYGNqw3ABwJ6lgf8WIsCOwq4tWtbecAekQyWyUnk1kQWNWxRaz8nYiaWXKqmM8MLxVsbknMXSRI9UFl0ru6Pqh/cCayq+N6eq8gLVtLo/3Q3QAnDesPVQ7JXrrkZAcbdvX2XX2tQtToA5IWEb3C4LPFXOaF8KVkT/oxSK2HaxQCMcYhvCF3KPvTnHO6eRpEW5n5U7CwlU1KVE4O91/27yUSrz+A+5pGCNQxp1OBavWW3DhyYuCSTyVVs7Xt/SDsjcwAy8HJiV/7gp7o2tm7LrZcXKgfPgwu4/p0FyV0s0ikCM83mfHnPzWgguvYHwT/J3UrG4Aq3gI4NWPbRkRr/L8Zg65jp0N33mNwatYnoRmgFQycoKRu3gDRilseNn5WsMcjaaHveVxQ07nA+eTE6GxktUy0HfO5r9LJ05tLztEfo/y8nLI2LNdwAcw3KWlYrA65Obvh3A6i9SfUxNj6eor5w2Jt28WZyG03Z/c1asgAb0nACcP6loAOZj5SdDJvRWbFsPoFoKIoF3P2M/9v4P8o1eYN1WnT7G1otLzj/1JzKVHRRNq4YhAlDOs4ATtVpzHujE5MFCPmrUumE9CsGOTTqTZAlo2o5rm3AYLBMM0aDxCUcf121yyF1EEtJvyRSYJNNTLBfMZ1Mi+Gf5CfdjQZsyMTGJU8PVzP3YRhfkGgTjUyWZK/mbyqrASTMJK7CaN3D0GowX7PS4Ih9xZzA0cbLonAUJM3qy7WNovsLjkDNYlzh09c700JEvklr8W4bpqCyAb4l8nLY5vvRQi0tLb/TED7koRAwrA+J2AbwAk3lylFBZrQrY8I3DwzuytuPlr6JA0zDlARjDOuY8/plXk1ThjmMSXQGDw0dXksXR+xEu8gMUfYRemz8PJQvoq5zO5wEPOAt6fSTwhN+y6Qt0xsBeJ9RhZd8HkbkrdgvjQpr20K5I0S+cRkB/JWet7TJwvZ7xcEVsZEqreTNHFsVtAzl+DhADT0ENGbSm9PTYxuUmeDOjLjkASVBOS+2n73nwp7cnexMHB20a4ODiz0CQP2nnNnRH5ST28BaV/VD5+7+oQJO1HLe5kG1UydzHQF7B2sF+9K5IO0/US8Rn203fbwTiNREfj+G5+Vwwh1gLuqAAAAAElFTkSuQmCC"},"7a58":function(t,e,n){t.exports=n.p+"img/liquidity1.65738509.png"},"86d4":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAArCAYAAACNWyPFAAADhklEQVRYR63XR6idVRTF8V+MmtgjsYugBg0oZiIklkHAgG0izqwJ0QQjdlBjbAMVFQsIYm8TBRUEBRFFFBQn4sACYkGDDUOw9x5lhf3B9eXed+/3ve9M3uM9zln3nL3Xf+07S/9raxyCe3Ao7prVs8a2OAIPYUGd/VmfInNwDO7HvsjZf+D2vkS2x0m4A7vXDX7FLbi1D5GdcQpuxrwS+BFX40H8PhOR7M2hq3EVdsK/+AaX4skIRLSrSPbthotxIXbAJmzA+Xi+6rH5Yl1EtsJeuAZnIvX4B5/gHLyGPwe7tq3IbOxXBT4Wc/E3PsDZeBN/TbVFG5GYLL2fFl1cAmnRt0rgw2ECbZ5rm3Lvw+XmeOI3vI5V+LRuNNTbk9wkBx6OR7A/4uqf8SrW4MuqyUh4jBPZDkcjN0ix82Q/4YXqqq/GCYx7rvT9sgJd2jVF/x5P43J8W207Fn+jbhKTBRO3YVekbb/Go7geP0wqMOom83EarkOQkbURd+NOBBlx9sRr8Cb5fY/qljzHjnXKF7gBj1fBWwkM3iQCe+MSnFsuDibi4suq0GnZ1gKNSN47Lr4Wp5bJgomPSjBeiEDnlRvExSnwieWBYOE9rMS7g6DrqhKRZ3FceSAcehunY/0oTLQVi8h32KWIHHoGdPHCL11rMAyQawvbQXYK+znW4ZmqRadiT0V9jBdf3Fjplv8nfFKnTB3h1IyEGp/EdCdkRiqH5+8xYDI6Yq0NOCq0EqHNSJOJI62dvH6i2jvcindar6nsCnWPqmfK7NRA8bkyaqAYD7VawwDZ5EfwfiASWHmuVyrDg/e0+sRrFIVz8GF4oBIxQZVhLe5fUfXaIstHqU4XWgmohdUMSwo3maPewRkVuf+bSrqIZE9qEuxk3Gymk9zgfSyvnxkmpl3j4jebG4BeWbiJaVOTYCfT4xvNpNj1Js2+fJhkfKbF8ypr0s6hw0V4cTpST3KTQaFk/VmFnRg4JIhpr8BT1Rxb0KGNSCOWzA+lE88Ba1b8k6n+vmFg7SKSQ3OLk/PdA5kJck68dC9umoqhriIRCoaOr+FizxKKlx6r5wuGNj/dTESyPxhaWrNZIjwtHy8lJi4o9m2aqUiEGgwlFg4qoZj0pWrxDX2IRCgYytfqzMuLSiheCoaW9yXS0OGAEjqyhOKll/sUaeiwT32HCYZCi4/7FmmaKW0dgx6c0PsPjAzCNM08Nz8AAAAASUVORK5CYII="},9283:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAQCAYAAAABOs/SAAADEklEQVRIS63TX2ibVRjH8e9z3jdN0jet2rlNUBmiqAypQ026P+AuFKxpJ4gIeuGFF7vyxoGIoLjGzU2c2g1LLRQVnegoKkJtbGTwynBh7bqLTZ2gKCiIA0W3NX3zZs17HnljVtTZNdWdy3Oe8/vw43DEmy6+B7pRlF0Vx+7nji0Bl3qNjTnJNd71jtpBI+Ym67qPizc1EQokVQiw8mwSRn9bnz97yWzfd9vSZ9e6OCNGZANQV9VPJTNVLIPmAEchAFtw0zJ6prv/9/+N+76bSM/dmkSGENY38lRnrbBNUocn1rgJ3kWJcVfRqgq7TWhGKnfmf/nP+MxMIn3uVNY4slcgC6KqetpiC9XJY69KHJyeLl1rmH9bkI0obSpUBX1JkeG5XN+pZeNfjbVlZts3IbwCsq7RE35VpRBMHn2NgQHbgBv4keI1RvR1gc38+eZVrN1nUwxV1235qWW8WEx6XWwW0T1AdwNV/VlFtgefHH0jRuOsBbiBl8evNg4jIHcJklaoAcNRgn3hbX0/LIn7fqqjPbhb0d0gtzSb/hiJGQizvW8houcz/gbHm960f5XYYEiFXgEvxhUdjepmb21T/rtFcd9PZVJzeYzsANbGKPB9XSmEPfl3/ope0Ph8qPfFwdUEtUGBfqBDhZoqbzowONvT980FeLmczrin78PaAURuRrCq9luLKVRz+QP/RBeF44PM8dIqDaMXBb0f6FQ4B+wXV1+u3N7/9QI+M97u1c0DIjwD3AhqFU5anOequd73/w29KNzAD5dWkYh2ovogcHkTPyDG3VPJ3vMlx0teRzj/kGKeAr2hiZ5ooh8thi4JN/BDxZU2JduN6sOgXU38g0jNsGuiblV5QuA6IFLVYyqyI8jlJy6GtgTHQx0z41daK0+L8gjICoV54IwobQidMWqVI2LYOZfNl5ZCW4Yb+NSHK6xNPimGR1FWLnxEJVLh87ryfK0nf7AVdFlwPNxZnuyyJtqmolsFWU2Mgh+hu8Kevs9aRZcNxxcuO/HxFfOhPCbKVuCkRPJCZcO9h5aDxjl/AICfVCTp0Ft2AAAAAElFTkSuQmCC"},bd1e:function(t,e,n){"use strict";n("d933")},c590:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAArCAYAAACNWyPFAAADsUlEQVRYR63XWajtcxjG8c/PPA+ZSRlCmW6U8UJRphu5Mx6ZQuYyTxcIGUqZObihUIqSSBS5ObkwlAxxMuUkHMcxHPNPz+7dp2Wftc9ea539u9ntVev/Xe/vfZ/nef/NPJ/e+zrYGw9hX9zX5pPRe18PB+Mx7F7P/nLeIL339XEEHsFOyLP/wN3zAum9b4TjcQ+2qQp+wx24c40hvffNcCJuxxYFWI7rsbC19vvEkN57vpuHnoPrsCk6fsDleDaAQCeCFGBrXIqLsTH+xRJciJdba+nH1Bkb0ntfC9vjBpyG9OMffI5z8VZr7c/BqR0L0ntfGztXg4/CBvgbH+MsvNNa+2umLEaGlMgy+xnRAwuQK3m3AJ8MA4x8Xb33dbEPHi81RxMrsAhn44vWWioaeuaspER2AJ7ALoiqf8GbOA/ftNbSk1nPaiG99w1xWFWQZseXfsYrNVXfzQVY7XX13jP3R+JBZFzT9GV4HldiaWstYzvnGVpJ7z0ii03chS2Rsf0eT+Jm/DQqYGglvfetcDJuQiwj51s8gHuxvLUWZY98VlZSKt62piXXsUk95WvcgqfT8HEBKyspwA64DOeXinPfUfEV1egVkwCmIGUTUfGNOKlElpH8tICLWmvRxMQnkKg4DT6uNBBb+BBn4INBo5uUEsiLOLo0ENW+h1OweDabGBcWyI/YvBw57hmjixZ+nbQHM39EIFeVbceyM5pf4Rq8EH+aD1AgEV50cWulW35Iwid9ytYx0dgOVjOlk8rpY3F/KTyfR4ALCza2AFeBFCgROr3SZOOIlSSvn6nxXjaOlQyFFCiue2hdU3anaVN8qYQaU1ytrQ+bvFUMciA/ElC7IYGVFeeNyvDY+6wBNRKkKsqD98OjlYgJqixrScLT069xNDRraFWm71XDcFDZTfao93FqRe7/tpLZRDpXMqYnsZ2sm9PbSWznIyzI31FsZ5SMz5TFQK8tu4lo05PFtT2+Pb0pTlTJ9JcqCpLx2RYvqKxJFMQdLsGrq3PqOSuZAUrWn1m2k9SMDUW0V+O5DMcwGxoZMgBL5selE88x1pyltdU/PMxYx4YM2NAJefdAdoI8J1rKK9xtM/eAiSADNnRMLRfbFShaeqquLzY0tXBMDBmwocNrN8sEZuSjpcTERfG++N0aQQqUvThrbGJhjwJFpK/ViC9ZY8iADeW1Ovvy/gWKlmJDC+YFUqBc1a4FOqRA0dLr8wYpUNxhx3qHiQ3l/8/mFVKgPDNjHYHumdD7D1iiQylQCWPqAAAAAElFTkSuQmCC"},d6c8:function(t,e,n){},d933:function(t,e,n){},e0d3:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:"none"!==t.state,expression:"state !== 'none'"}],staticClass:"transaction-state"},[n("before",{directives:[{name:"show",rawName:"v-show",value:["approve","approved"].includes(t.state),expression:"['approve', 'approved'].includes(state)"}],attrs:{state:t.state,token0:t.token0,token1:t.token1,waitApprove:t.waitApprove},on:{addLiquidity:t.addLiquidity}}),n("in",{directives:[{name:"show",rawName:"v-show",value:"in"===t.state,expression:"state === 'in'"}],attrs:{token0:t.token0,token1:t.token1,lp:t.lp,rate:t.rate,reRate:t.reRate,prop:t.prop}}),n("after",{directives:[{name:"show",rawName:"v-show",value:"done"===t.state,expression:"state === 'done'"}],attrs:{token0:t.token0,token1:t.token1},on:{close:t.close}})],1)},a=[],i=(n("d3b7"),n("3ca3"),n("ddb0"),n("a9e3"),{components:{before:function(){return n.e("chunk-65f92075").then(n.bind(null,"6c15"))},in:function(){return n.e("chunk-b745c0fa").then(n.bind(null,"7089"))},after:function(){return n.e("chunk-3b35a8fc").then(n.bind(null,"229b"))}},props:{state:{type:String,required:!0},token0:{type:Object,required:!0},token1:{type:Object,required:!0},waitApprove:{type:Array,required:!0},lp:{type:[Number,String],required:!0},rate:{type:[Number,String],required:!0},reRate:{type:[Number,String],required:!0},prop:{type:[Number,String],required:!0}},data:function(){return{}},methods:{addLiquidity:function(){this.$emit("addLiquidity")},close:function(){this.$emit("close")}}}),o=i,r=o,l=(n("ebd7"),n("2877")),u=Object(l["a"])(r,s,a,!1,null,"4304648b",null);e["default"]=u.exports},e549:function(t){t.exports=JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"baseDecimal","type":"uint256"}],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')},ebd7:function(t,e,n){"use strict";n("01c7")},f0b7:function(t,e,n){t.exports=n.p+"img/not-liquidity.72d8e47f.png"},f6b1:function(t,e,n){"use strict";n("25f1")},fe12:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACnklEQVRIS8WWsWsTYRjGn+dyhVKqOFiooFAFseriUhB0SMFBQVDQaC8UvOYU2uSgih39D6xQMalWTLxBesFWEBwcFMygODrUYqdOSjs4BBq02ORe+dJeTWKqRO/01u+753fP+73f8x4R0hMfSp0RDY8I3pjOpm83YhgSF0YieZ3Uxjf0rzbCQwNHo1F9177DLsnzCi7wht3s5JRvNDSwAtTCBShDMODm0k/UWqjgX8E3wWdNc0eH1jEq4AkAu4M8e5K6r+k7r4IvWPaxiMgsye4ggVtqCYqMmcluPcI5gjsB+SweJ4Tep6A/gKBF8viG7jjjln0TwBiAj2sVr2/GmVwOGhq37FEAE+vdLQ/cbOYKjYT9gUSvJ5WRfO7uvVChIrNLi/NGoVAoK8eiYF4F/XknXQgSXOe0Blq9TmGBjYR9jsRstbwN0FDBvttm0FDBStww7V7XSS80Oz4alj0HoOdrpbTnqeMUgzzjWq14wrYASQs4qGKTKk+7ug61z8xMlsKCKt24lXoI0Ny8TlvBoqbZrtYKjrMaxAf5YECc6WxmqOmQGEyMHPAYeSkienlF9gdRjd+CB8zhHmqRtyq3RWQ5aLCITLi5zLU6xyq32zTtFYheBYW31u8695t2Zavlj1updwCPiHDMzd25tQmuhUKwsOZ5/UHl9sCQfVHTkK+GSeXbQWWmCq5zCilpHi974F8PC9E8nYLTIG0CukDybjZjVAOkzmmr9Wthv4i8Lq/IKb9RaVipSwSdFjRa2CqrInwvEGd5cX5KTSX/ZcZiyU59G5+rIS2QUgU8+TibftOC+h9tXT/j/wD/0dWxZGfbdu0FgKP/wvnW9zjksv8UmQ33ufjFK+0NY2o1zer1P0/tGYD2pUqpL6hBUduF3wHhjnJzZY6yMwAAAABJRU5ErkJggg=="}}]);