(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["exchange"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3");var r=n("6b75");function s(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},"277d":function(t,e,n){var r=n("23e7"),s=n("e8b5");r({target:"Array",stat:!0},{isArray:s})},3835:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("277d");function r(t){if(Array.isArray(t))return t}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function s(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,s,o=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done);i=!0)if(o.push(r.value),e&&o.length===e)break}catch(a){c=!0,s=a}finally{try{i||null==n["return"]||n["return"]()}finally{if(c)throw s}}return o}}var o=n("06c5");function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){return r(t)||s(t,e)||Object(o["a"])(t,e)||i()}},"3df6":function(t,e,n){"use strict";n("b54b")},"43fc":function(t,e,n){t.exports=n.p+"img/nft.9212b8ff.svg"},"4df4":function(t,e,n){"use strict";var r=n("0366"),s=n("7b0b"),o=n("9bdd"),i=n("e95a"),c=n("50c4"),a=n("8418"),f=n("35a1");t.exports=function(t){var e,n,u,d,l,v,h=s(t),p="function"==typeof this?this:Array,b=arguments.length,m=b>1?arguments[1]:void 0,y=void 0!==m,g=f(h),w=0;if(y&&(m=r(m,b>2?arguments[2]:void 0,2)),void 0==g||p==Array&&i(g))for(e=c(h.length),n=new p(e);e>w;w++)v=y?m(h[w],w):h[w],a(n,w,v);else for(d=g.call(h),l=d.next,n=new p;!(u=l.call(d)).done;w++)v=y?o(d,m,[u.value,w],!0):u.value,a(n,w,v);return n.length=w,n}},5201:function(t,e,n){t.exports=n.p+"img/usdt.c20f2f6b.svg"},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},"9bdd":function(t,e,n){var r=n("825a"),s=n("2a62");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(i){throw s(t),i}}},a630:function(t,e,n){var r=n("23e7"),s=n("4df4"),o=n("1c7e"),i=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:i},{from:s})},a6f6:function(t,e,n){t.exports=n.p+"img/AC-NFT.66b41b20.gif"},b0c0:function(t,e,n){var r=n("83ab"),s=n("9bf2").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/,a="name";r&&!(a in o)&&s(o,a,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},b54b:function(t,e,n){},d28b:function(t,e,n){var r=n("746f");r("iterator")},d81d:function(t,e,n){"use strict";var r=n("23e7"),s=n("b727").map,o=n("1dde"),i=o("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},e01a:function(t,e,n){"use strict";var r=n("23e7"),s=n("83ab"),o=n("da84"),i=n("5135"),c=n("861d"),a=n("9bf2").f,f=n("e893"),u=o.Symbol;if(s&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},l=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof l?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};f(l,u);var v=l.prototype=u.prototype;v.constructor=l;var h=v.toString,p="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;a(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=h.call(t);if(i(d,t))return"";var n=p?e.slice(7,-1):e.replace(b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:l})}},e9f1:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:"exchange "+t.theme},[r("h2",[t._v("创世认购")]),r("span",[t._v("获得2倍头矿算力，DAO治理投票权，质押NFT挖矿，未来可期")]),r("div",{staticClass:"subscribe"},[r("div",{staticClass:"container"},[r("img",{attrs:{src:n("a6f6")}}),r("span",[t._v("AcSwap BOD NFT")]),r("span",[t._v("AcSwap BOD #"+t._s(t.tokenId))]),r("span",[t._v("价格")]),r("div",{staticClass:"price"},[r("img",{attrs:{src:n("5201")}}),r("span",[t._v(t._s(t.usdtPrice.toFixed(2)))]),r("span",[t._v("（～"+t._s(t.usdtPrice.toFixed(0))+" $）")])]),r("van-button",{on:{click:t.showBuyNFT}},[t._v("认购")])],1)]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.nftList.length>0,expression:"nftList.length > 0"}]},[t._v("我的认购")]),t._l(t.nftList,(function(e){return r("div",{key:e,staticClass:"NFTs"},[r("div",{staticClass:"list-item"},[r("div",{staticClass:"info"},[r("img",{attrs:{src:n("43fc")}}),r("div",[r("span",[t._v("AcSwap BOD NFT")]),r("span",[t._v("AcSwap BOD #"+t._s(e))]),r("span",[t._v("代币ID："),r("span",[t._v(t._s(e))])])])]),r("span",{on:{click:function(n){return t.showTransfer(e)}}},[t._v("转移")])])])})),r("buy-nft",{ref:"BuyNFT",attrs:{tokenId:t.tokenId,usdtPrice:t.usdtPrice,fsvPrice:t.fsvPrice,buyNftFsvPrice:t.buyNftFsvPrice,fsvGetPower:t.fsvGetPower,usdtGetPower:t.usdtGetPower},on:{reload:t.init}}),r("transfer-nft",{ref:"TransferNFT",on:{reload:t.init}})],2)},s=[],o=n("3835"),i=n("5530"),c=(n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),{components:{"buy-nft":function(){return n.e("chunk-5a5bfff2").then(n.bind(null,"5db4"))},"transfer-nft":function(){return n.e("chunk-a52d7a2c").then(n.bind(null,"f95b"))}},data:function(){return{tokenId:0,usdtPrice:0,fsvPrice:0,buyNftFsvPrice:"0",fsvGetPower:"0",usdtGetPower:"0",nftList:[]}},computed:Object(i["a"])({},Vuex.mapState(["theme"])),created:function(){this.$contracts&&this.init()},methods:{showBuyNFT:function(){this.$refs.BuyNFT.toggle()},showTransfer:function(t){this.$refs.TransferNFT.toggle(t)},init:function(){var t=this;this.$contracts.Multicall.methods.aggregate([[this.$contracts.AcNft.options.address,this.$contracts.AcNft.methods.currentTokenId().encodeABI()],[this.$contracts.Genesis.options.address,this.$contracts.Genesis.methods.price(this.$contracts.USDTToken.options.address).encodeABI()],[this.$contracts.Genesis.options.address,this.$contracts.Genesis.methods.price(this.$contracts.FSVToken.options.address).encodeABI()],[this.$contracts.AcNft.options.address,this.$contracts.AcNft.methods.balanceOf(this.$address).encodeABI()]]).call({from:this.$address},(function(e,n){if(!e){var r=Object(o["a"])(n.returnData,4),s=r[0],i=r[1],c=r[2],a=r[3];t.tokenId=s.decode(["uint256"]),t.usdtPrice=i.fromWei(),t.fsvPrice=c.fromWei(),t.getNFTList(a.toBN().toNumber()),t.$contracts.Oracle.methods.getTokenPrice(t.$contracts.FSVToken.options.address,c).call({from:t.address},(function(e,n){e||(t.buyNftFsvPrice=n.fromWei(),t.$contracts.ForceFactory.methods.getForceByUSDT(n).call({from:t.address},(function(e,n){e||(t.fsvGetPower=n.fromWei())})))})),t.$contracts.ForceFactory.methods.getForceByUSDT(i).call({from:t.address},(function(e,n){e||(t.usdtGetPower=n.fromWei())}))}}))},getNFTList:function(t){var e=this;if(0!==t){for(var n=[],r=0;r<t;r++)n.push([this.$contracts.AcNft.options.address,this.$contracts.AcNft.methods.tokenOfOwnerByIndex(this.$address,r).encodeABI()]);this.$contracts.Multicall.methods.aggregate(n).call({from:this.$address},(function(t,n){t||(e.nftList=n.returnData.map((function(t){return t.decode(["uint256"])})))}))}else this.nftList=[]}}}),a=c,f=a,u=(n("3df6"),n("2877")),d=Object(u["a"])(f,r,s,!1,null,"29a324e2",null);e["default"]=d.exports}}]);