(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["airdrop"],{"06c5":function(t,r,e){"use strict";e.d(r,"a",(function(){return a}));e("fb6a"),e("d3b7"),e("b0c0"),e("a630"),e("3ca3");var n=e("6b75");function a(t,r){if(t){if("string"===typeof t)return Object(n["a"])(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(n["a"])(t,r):void 0}}},"0d03":function(t,r,e){var n=e("6eeb"),a=Date.prototype,o="Invalid Date",i="toString",c=a[i],s=a.getTime;new Date(NaN)+""!=o&&n(a,i,(function(){var t=s.call(this);return t===t?c.call(this):o}))},"277d":function(t,r,e){var n=e("23e7"),a=e("e8b5");n({target:"Array",stat:!0},{isArray:a})},"2b28":function(t,r,e){t.exports=e.p+"img/reload-dark.90ae9eb6.svg"},"2bee":function(t,r,e){"use strict";e("375f")},"2c1c":function(t,r,e){t.exports=e.p+"img/prev-light.453ec76f.svg"},"35d0":function(t,r,e){var n={"./next-dark.svg":"9acd","./next-light.svg":"7697"};function a(t){var r=o(t);return e(r)}function o(t){if(!e.o(n,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id="35d0"},"375f":function(t,r,e){},3835:function(t,r,e){"use strict";e.d(r,"a",(function(){return c}));e("277d");function n(t){if(Array.isArray(t))return t}e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0");function a(t,r){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,a,o=[],i=!0,c=!1;try{for(e=e.call(t);!(i=(n=e.next()).done);i=!0)if(o.push(n.value),r&&o.length===r)break}catch(s){c=!0,a=s}finally{try{i||null==e["return"]||e["return"]()}finally{if(c)throw a}}return o}}var o=e("06c5");function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,r){return n(t)||a(t,r)||Object(o["a"])(t,r)||i()}},"4c0c":function(t,r,e){t.exports=e.p+"img/prev-dark.a359ab54.svg"},"4df4":function(t,r,e){"use strict";var n=e("0366"),a=e("7b0b"),o=e("9bdd"),i=e("e95a"),c=e("50c4"),s=e("8418"),u=e("35a1");t.exports=function(t){var r,e,d,l,f,v,p=a(t),g="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,b=void 0!==m,y=u(p),A=0;if(b&&(m=n(m,h>2?arguments[2]:void 0,2)),void 0==y||g==Array&&i(y))for(r=c(p.length),e=new g(r);r>A;A++)v=b?m(p[A],A):p[A],s(e,A,v);else for(l=y.call(p),f=l.next,e=new g;!(d=f.call(l)).done;A++)v=b?o(l,m,[d.value,A],!0):d.value,s(e,A,v);return e.length=A,e}},"6a50":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{class:"airdrop "+t.theme},[n("div",{staticClass:"card"},[n("span",[t._v(t._s(t.myAirdrop))]),n("span",[t._v(t._s(t.$t("pagedrop.text2")+"/AC"))])]),n("div",{staticClass:"background-round details"},[n("div",[n("span",[t._v(t._s(t.$t("pagedrop.text3")+"/AC"))]),n("span",[t._v(t._s(t.totalAirdrop))])]),n("i",{staticClass:"split-line"}),n("div",[n("span",[t._v(t._s(t.$t("pagedrop.text4")+"/AC"))]),n("span",[t._v(t._s(t.airdropContract))])])]),n("div",{staticClass:"background-round history"},[n("div",{staticClass:"header"},[n("span",[t._v(t._s(t.$t("pagedrop.text5")))]),n("img",{class:t.className,attrs:{src:e("e581")("./reload-"+t.theme+".svg")},on:{click:t.reload}})]),n("div",{staticClass:"list"},t._l(t.latestAirdrop[t.currentPage-1],(function(r){return n("div",{key:r.time},[n("div",[n("span",[t._v(t._s(t.$t("pagedrop.text7")))]),n("span",[t._v(t._s(r.amount)+" AC")])]),n("div",[n("span",[t._v(t._s(r.time))]),n("span",[t._v(t._s(r.owner))])])])})),0),n("div",{staticClass:"footer"},[n("img",{class:{disabled:1===t.currentPage},attrs:{src:e("7b26")("./prev-"+(1===t.currentPage?"dark":"light")+".svg")},on:{click:t.prevPage}}),n("span",[t._v(t._s(t.currentPage+"/"+t.latestAirdrop.length))]),n("img",{class:{disabled:t.currentPage===t.latestAirdrop.length},attrs:{src:e("35d0")("./next-"+(t.currentPage===t.latestAirdrop.length?"dark":"light")+".svg")},on:{click:t.nextPage}})])])])},a=[],o=e("3835"),i=e("5530"),c=(e("4795"),e("b680"),e("99af"),e("fb6a"),e("0d03"),e("a9e3"),"600000000e18".toBN()),s={data:function(){return{myAirdrop:"0",totalAirdrop:"0",airdropContract:"0",latestAirdrop:[[]],currentPage:1,className:""}},computed:Object(i["a"])({},Vuex.mapState(["theme"])),created:function(){this.$contracts&&this.init()},methods:{reload:function(){var t=this;this.getLogs(),this.currentPage=1,this.className="reload";var r=setTimeout((function(){t.className="",clearTimeout(r)}),500)},prevPage:function(){1!==this.currentPage&&this.currentPage--},nextPage:function(){this.currentPage!==this.totalPage&&this.currentPage++},init:function(){var t=this;this.$contracts.Multicall.methods.aggregate([[this.$contracts.AirDrop.options.address,this.$contracts.AirDrop.methods.balances(this.$address).encodeABI()],[this.$contracts.AirDrop.options.address,this.$contracts.AirDrop.methods.reserve().encodeABI()]]).call({from:this.$address},(function(r,e){if(!r){var n=Object(o["a"])(e.returnData,2),a=n[0],i=n[1];t.myAirdrop=a.fromWei(),t.totalAirdrop=c.minus(i).toFixed().fromWei(),t.airdropContract=i.fromWei()}})),this.getLogs()},getLogs:function(){var t=this;this.$contracts.AirDrop.getPastEvents("DropToken",{fromBlock:0}).then((function(r){for(var e=[[]],n=0,a=0;a<r.length;a++){var o=r[a].returnValues,i=o.user,c=o.dropAmount,s=o.time;10===e[n].length&&(n++,e[n]=[]),e.push({owner:"".concat(i.slice(0,6),"...").concat(i.slice(-4)),amount:c.fromWei(),time:t.formatDate(s)})}}))},formatDate:function(t){function r(t){return t<10?"0".concat(t):t}var e=new Date(1e3*Number(t)),n=e.getFullYear(),a=r(e.getMonth()+1),o=r(e.getDate()),i=r(e.getHours()),c=r(e.getMinutes());return"".concat(n,"/").concat(a,"/").concat(o," ").concat(i,":").concat(c)}}},u=s,d=u,l=(e("2bee"),e("2877")),f=Object(l["a"])(d,n,a,!1,null,"2f5afb40",null);r["default"]=f.exports},"6b75":function(t,r,e){"use strict";function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}e.d(r,"a",(function(){return n}))},7697:function(t,r,e){t.exports=e.p+"img/next-light.0c9a28a4.svg"},"7a7e":function(t,r,e){t.exports=e.p+"img/reload-light.d0373169.svg"},"7b26":function(t,r,e){var n={"./prev-dark.svg":"4c0c","./prev-light.svg":"2c1c"};function a(t){var r=o(t);return e(r)}function o(t){if(!e.o(n,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id="7b26"},"9acd":function(t,r,e){t.exports=e.p+"img/next-dark.dca4d14d.svg"},"9bdd":function(t,r,e){var n=e("825a"),a=e("2a62");t.exports=function(t,r,e,o){try{return o?r(n(e)[0],e[1]):r(e)}catch(i){throw a(t),i}}},a630:function(t,r,e){var n=e("23e7"),a=e("4df4"),o=e("1c7e"),i=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:a})},b0c0:function(t,r,e){var n=e("83ab"),a=e("9bf2").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/,s="name";n&&!(s in o)&&a(o,s,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},d28b:function(t,r,e){var n=e("746f");n("iterator")},e01a:function(t,r,e){"use strict";var n=e("23e7"),a=e("83ab"),o=e("da84"),i=e("5135"),c=e("861d"),s=e("9bf2").f,u=e("e893"),d=o.Symbol;if(a&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof f?new d(t):void 0===t?d():d(t);return""===t&&(l[r]=!0),r};u(f,d);var v=f.prototype=d.prototype;v.constructor=f;var p=v.toString,g="Symbol(test)"==String(d("test")),h=/^Symbol\((.*)\)[^)]+$/;s(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,r=p.call(t);if(i(l,t))return"";var e=g?r.slice(7,-1):r.replace(h,"$1");return""===e?void 0:e}}),n({global:!0,forced:!0},{Symbol:f})}},e581:function(t,r,e){var n={"./reload-dark.svg":"2b28","./reload-light.svg":"7a7e"};function a(t){var r=o(t);return e(r)}function o(t){if(!e.o(n,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id="e581"}}]);