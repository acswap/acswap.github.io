(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e6ab47a"],{2932:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAABz0lEQVRIS63WS8tNYRQH8N9GyC2XmbExMZQwQIx5fQC5j6TclWuZKEXKpbzlK8hdfAhzvOULmDBRj9axtrbded9z9jn7jJ+eX/+11rPOrnT4lVKW4RjO4AJeV1X1c9wrqnEPxrlSyiLsxROsxlG8GRfshCW4FIdwBytxYtyEnbEEo5wB3sYqnMKrUQknwlrgrSzpSHBiLMHlmfAG1uA0Xs6XcCqsBV5PMBIOndI+sLgjejiDawuBU2OZLu6pS1qDJ9vPohesAdZTGj2Md/gf2Bs2BLyZ4PFM+KsqpazA4i6bZMTZuocHEWBsnSN4H9gVbOsRi6sCjE2zBRvxA4cD+4x1eaBPM8CoWry/37gb2KYc3T77F6UL5B424wXO9gkMqpL/DGtxH/vxCecw1yuWULTkAfYldB7fqqoqvWGllJjoSPQQe/ARF/E1oHpqph6KhCLRI+xO6BK+1FAvWAN6nNAHXG5DU2MN6Cl24h2uDoOmwnIY1iOgXXiLWBD/etTuz0QD0oCeYUcmitLNC02UrAHNJhSJYhgG473QtHVKVsrgqWzAc2zP0sX349woqHOyUkos17g8PlLjHf3dDCMS1Wm7JluCrTiAKOP3caEA/wBmjaj/5op2QAAAAABJRU5ErkJggg=="},"343f":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t._self._c;return s("van-overlay",{attrs:{show:""}},[s("div",{staticClass:"before-transaction"},[s("span",[t._v(t._s(t.$t("transationstatei.text1")))]),s("div",{staticClass:"info"},[s("div",[s("span",{domProps:{textContent:t._s(t.from.symbol)}}),s("span",{domProps:{textContent:t._s(t.from.amount)}})]),s("div",{staticClass:"arrowsLedt"},[s("img",{attrs:{src:e("2932")}})]),s("div",[s("span",{domProps:{textContent:t._s(t.to.symbol)}}),s("span",{domProps:{textContent:t._s(t.to.amount)}})])]),s("div",{staticClass:"message"},[s("ul",[s("li",{class:"approved"===t.state?"done":""},[s("i"),s("i"),s("span",[t._v(t._s(t.$t("transationstatei.text2"))+" "+t._s(t.from.symbol))]),s("van-loading",{directives:[{name:"show",rawName:"v-show",value:"approve"===t.state,expression:"state === 'approve'"}],attrs:{type:"spinner",color:"#9FD9D0"}})],1),s("li",[t._v(t._s(t.$t("transationstatei.text1"))+" "+t._s(t.from.symbol)+" "+t._s(t.$t("transationstatei.text6"))+" "+t._s(t.to.symbol))])])]),s("van-button",{directives:[{name:"show",rawName:"v-show",value:"approved"===t.state,expression:"state === 'approved'"}],on:{click:t.exchange}},[t._v(t._s(t.$t("transationstatei.text3")))]),s("van-button",{directives:[{name:"show",rawName:"v-show",value:"approve"===t.state,expression:"state === 'approve'"}],staticClass:"block",attrs:{disabled:"",loading:"","loading-text":t.title,"loading-type":"spinner"}})],1)])},o=[],n=(e("b58e"),e("4fc1")),i=(e("7d8c"),e("7541")),r={props:{state:String,from:Object,to:Object},components:{[i["a"].name]:i["a"],[n["a"].name]:n["a"]},data(){return{title:this.$t("transationstatei.text4")}},methods:{exchange(){this.$emit("exchange")}}},c=r,p=(e("e740"),e("b01b")),l=Object(p["a"])(c,a,o,!1,null,"7607fb08",null);s["default"]=l.exports},"7d8c":function(t,s,e){"use strict";e("1651"),e("80fd")},8450:function(t,s,e){},b58e:function(t,s,e){"use strict";e("1651"),e("035d")},e740:function(t,s,e){"use strict";e("8450")}}]);