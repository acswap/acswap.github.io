(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca849334"],{"4dca":function(t,e,s){},"97b7":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("van-overlay",{attrs:{show:""}},[o("div",{class:1==t.$ccstyle1?"before-transaction":"before-transaction1"},[o("span",[t._v(t._s(t.$t("nftstate.text2")))]),o("div",{staticClass:"info"},[o("div",[o("span",{domProps:{textContent:t._s(t.token0.symbol)}}),o("span",{domProps:{textContent:t._s(t.token0.amount)}})]),o("div",{staticClass:"addpicture"},[o("img",{attrs:{src:s("ad5c")}})]),o("div",[o("span",{domProps:{textContent:t._s(t.token1.symbol)}}),o("span",{domProps:{textContent:t._s(t.token1.amount)}})])]),o("div",{staticClass:"message"},[o("ul",[o("li",{staticClass:"token",class:t.showToken0?"":"done"},[o("i"),o("i"),o("span",[t._v(t._s(t.$t("nftstate.text3"))+" "+t._s(t.token0.symbol))]),o("van-loading",{directives:[{name:"show",rawName:"v-show",value:t.showToken0,expression:"showToken0"}],attrs:{type:"spinner",color:"#9FD9D0"}})],1),o("li",{staticClass:"token",class:t.showToken1?"":"done"},[o("i"),o("i"),o("span",[t._v(t._s(t.$t("nftstate.text3"))+" "+t._s(t.token1.symbol))]),o("van-loading",{directives:[{name:"show",rawName:"v-show",value:t.showToken1,expression:"showToken1"}],attrs:{type:"spinner",color:"#9FD9D0"}})],1),o("li",[t._v(t._s(t.$t("nftstate.text4")))])])]),o("van-button",{directives:[{name:"show",rawName:"v-show",value:"approved"===t.state,expression:"state === 'approved'"}],on:{click:t.addLiquidity}},[t._v(t._s(t.$t("nftstate.text5")))]),o("van-button",{directives:[{name:"show",rawName:"v-show",value:"approve"===t.state,expression:"state === 'approve'"}],staticClass:"block",attrs:{disabled:"",loading:"","loading-text":t.title,"loading-type":"spinner"}})],1)])},n=[],a=(s("4160"),s("159b"),{props:{state:String,token0:Object,token1:Object,waitApprove:Array},data:function(){return{title:this.$t("nftstate.text6")}},computed:{showToken0:function(){var t=this,e=!1;return this.waitApprove.forEach((function(s){s.tokenSymbol===t.token0.symbol&&(e=!0)})),e},showToken1:function(){var t=this,e=!1;return this.waitApprove.forEach((function(s){s.tokenSymbol===t.token1.symbol&&(e=!0)})),e}},methods:{addLiquidity:function(){this.$emit("addLiquidity")}}}),i=a,r=(s("9cea"),s("2877")),c=Object(r["a"])(i,o,n,!1,null,"08de0c6a",null);e["default"]=c.exports},"9cea":function(t,e,s){"use strict";s("4dca")},ad5c:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAA4CAYAAADjLujzAAAAvUlEQVRYR+2XwQkCMRREZ46WYBXbijawNmEB692LdqANbAtaiDVYwogQFxExfwNGWCeQUz6Z8Hg/IUSlwUo5cFAxaaMzuoGAZbAMlqHYAaOriE5SA2CRIk8kz2Piw3edpBbAIW3ekdw4KETA6F4xTdg6SZeMFTMA81RzBXCfn8aaZP8oGNBJUki/eNGK5PF3QbmDuo/+qI8swzdf2CWAbUK8I7nP4X5eD9/eYzZ9V+ugYoJGZ3T+iBU7MGF0N4YWaznZlWnAAAAAAElFTkSuQmCC"}}]);