(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75456516"],{5942:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:"none"!==e.state,expression:"state !== 'none'"}],staticClass:"transaction-state"},[n("before",{directives:[{name:"show",rawName:"v-show",value:["approve","approved"].includes(e.state),expression:"['approve', 'approved'].includes(state)"}],attrs:{state:e.state,from:e.from,to:e.to},on:{exchange:e.exchange}}),n("in",{directives:[{name:"show",rawName:"v-show",value:"in"===e.state,expression:"state === 'in'"}],attrs:{from:e.from,to:e.to,min:e.min,slipPoint:e.slipPoint,toPrice:e.toPrice,fromPrice:e.fromPrice}}),n("after",{directives:[{name:"show",rawName:"v-show",value:"done"===e.state,expression:"state === 'done'"}],attrs:{from:e.from,to:e.to},on:{close:e.close}})],1)},o=[],i=(n("d3b7"),n("3ca3"),n("ddb0"),n("a9e3"),{components:{before:function(){return n.e("chunk-5c07072a").then(n.bind(null,"343f"))},in:function(){return n.e("chunk-7288fb44").then(n.bind(null,"dc88"))},after:function(){return n.e("chunk-47d29394").then(n.bind(null,"ce84"))}},props:{state:{type:String,require:!0},from:{type:Object,require:!0},to:{type:Object,require:!0},slipPoint:{type:String,require:!0},min:Number,toPrice:{type:[String,Number],require:!0},fromPrice:{type:[String,Number],require:!0}},data:function(){return{}},methods:{exchange:function(){this.$emit("exchange")},close:function(){this.$emit("close")}}}),s=i,a=s,c=(n("8bf1"),n("2877")),u=Object(c["a"])(a,r,o,!1,null,"6c46d81c",null);t["default"]=u.exports},"8bf1":function(e,t,n){"use strict";n("b97c")},b97c:function(e,t,n){}}]);