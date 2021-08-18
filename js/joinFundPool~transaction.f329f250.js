(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["joinFundPool~transaction"],{"0430":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-popup",{attrs:{round:"",closeable:"",position:"bottom"},on:{"click-close-icon":t.close},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"trading-setup"},[n("span",{staticClass:"title"},[t._v(t._s(t.$t("tradingSetup.text1")))]),n("div",{staticClass:"slippage-setting"},[n("div",{staticClass:"title"},[n("span",[t._v(t._s(t.$t("tradingSetup.text2")))]),n("span",[t._v(t._s(t.value)+"%")])]),n("van-slider",{attrs:{min:"1",max:"5",step:"0.5","button-size":"15","active-color":"#0DC8B5","inactive-color":"#D8D8D8"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),n("div",{staticClass:"slider-items"},[n("span",[t._v("1%")]),n("span",[t._v("2%")]),n("span",[t._v("3%")]),n("span",[t._v("4%")]),n("span",[t._v("5%")])]),n("span",[t._v(t._s(t.$t("tradingSetup.text3")))])],1),n("div",{staticClass:"deadline"},[n("div",[n("span",[t._v(t._s(t.$t("tradingSetup.text4")))]),n("van-field",{attrs:{type:"number","input-align":"center"},model:{value:t.deadline,callback:function(e){t.deadline=e},expression:"deadline"}}),n("span",[t._v(t._s(t.$t("tradingSetup.text5")))])],1),n("span",[t._v(t._s(t.$t("tradingSetup.text6")))])]),n("van-button",{attrs:{type:"info"},on:{click:t.setSlipPoint}},[t._v(t._s(t.$t("tradingSetup.text7")))])],1)])},i=[],u=(n("a9e3"),{data:function(){return{value:2,deadline:10,show:!1}},methods:{open:function(){this.show=!0},setSlipPoint:function(){this.$emit("change",{slipPoint:this.value,deadline:60*Number(this.deadline)}),this.show=!1}}}),p=u,s=p,y=(n("9a1f"),n("364c"),n("2877")),l=Object(y["a"])(s,a,i,!1,null,"4b2eda14",null);e["default"]=l.exports},1169:function(t,e,n){},"364c":function(t,e,n){"use strict";n("1169")},3952:function(t){t.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"stop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stopped","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[{"name":"result","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"symbol_","type":"string"}],"name":"setSymbol","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name_","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"guy","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"symbol_","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"sad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"}]')},"3e22":function(t,e,n){},"4fd3":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAElElEQVRIS6VXb2gcVRCfeXs1lyYFhYBNjVhTxNakoFAhgkKkARtsIdWczV6h3J8Qk9wGK7bgNyt+bMWG3CUHvbuuSu8OErUg0kgi5EPBgB8stGeFtrFSvaQYQfDUPZN9I28321w2e5tN3G93OzO/NzO/mfdbBA9Pe3u7b+ee/a8g8Q5EbCOi3Yi4U7gS0QIi3iWiWUI2vXDn+tczMzPLG4VFN4OuUOhhP6t/C5EUBGzYKJhxEKBFIoxrvDR8WVX/qOZTFViOKK8DUtIGOAsAVznxAnJYMIIiNiHDpwHgRQBos4DEAYCwP5eJf+YEvg5YlHVX8zMjgKzfzABKQJQql8sffn4p9Ytb1q8d722qqal5BxB7EaDesCWeLM79MGQv/xpgAdrY3JJDxG7TCaa1shbeCNB+mJ5Q/27GfBcAoWOFBxPzcwW5EnwNcDCijAGCmSnR+Vwm8baXvjrZrCRxFhFPriSRzGbiA5btA2DRU0SY2Ai0Jxo7yAi7CWEvAGnA8SpIUiqXGr7vdAA5EvvIAieCbqvnBrBgb61Ud0sQiYAmc+lEpz1IIDBY79vBPkWELvs7AioBByV3MfGx/Z3JmdYrouxi9P7hf+0TbDeAeyLKewzhjCBSWdP22XvaHgr5G1ndFCIK5opnFoCmgYyDdlkzzQEP59MjXzn2XJJuAqCfE5zJZ+Lvo3GiPS3zILKt0tdjoYE2SZK+XQl4MpuOD1vBzWrVTyHAASC6nc0knnIvOS0W7xQa8Vg4dlhi+KUw1jTt8WoMDkaUKKH+ey49dnldRhHlAEP4Tvy/pPPnxtXRa3YbMWp+v/+e+F/ndAQrmj+bTcdf2AqLj8h9DTu2P/Sb8OU6vJxX4zNOcYJRRVRNrNzzaP0AgHPZdPz0VoDl8OCbyFhS+P6tlx6ptiqDUeUsAJwSHBEZzwtycOLhfGZU3SxwT3ToVQSeR8B6IprIZRKBajHkcKwXGV4wLpZgVCFjdnXemVNHJ70Cmwui9QNEeNf0odtLOr00ro6aO9zhkUODh1BiV8SrLQNXLgZRuiWdH3UDFWCVRN5SqWW5rwFrt90DRD8QJItzN9ZdAo7kiihRQEhZpTaYthlyvREZ6PChNCWCF/VS7Yyqal5aZCeXtUs9j5Mc6tuL0rbvAfDaZkZwzTh5XSD2jMTs/lnzb8lrtusWiJeV6VTGwIn+x8T/458kf/VS5lUyrqxM4bR6SVCJdH1/Xk3edQsWCA0+65OYsSKXdf6804qs9DeFgXRTkPHBJSEMxKLfLtXdEheFUB3FuRudbkpRDg10oSR9Yc6/fjSnrt/fFrDrtWhkHR7sZoyNG8E8qI/jkVhM2F7KJBJu1amcd855IH9x1BAbrtJnfq5w2otGdgL2LH2Es5PYA6TebDrxsxcCWTbBaOwJIEx5FnsW+K7m1hFL9AGRRgDJ5WX93EYMFkz3+aRTCNBvbDWjb86braqgN3uOYwbhVh9D0APBj0BgamyEJjCEn03QEy0Q0ZDVU3vFPH3CMCTFdgCXytMi/z+fMJWRRe8ffbLlEEM46PbRxgm+uf9TYdILIf8DHsJ/Vytv2r8AAAAASUVORK5CYII="},9283:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAQCAYAAAABOs/SAAADEklEQVRIS63TX2ibVRjH8e9z3jdN0jet2rlNUBmiqAypQ026P+AuFKxpJ4gIeuGFF7vyxoGIoLjGzU2c2g1LLRQVnegoKkJtbGTwynBh7bqLTZ2gKCiIA0W3NX3zZs17HnljVtTZNdWdy3Oe8/vw43DEmy6+B7pRlF0Vx+7nji0Bl3qNjTnJNd71jtpBI+Ym67qPizc1EQokVQiw8mwSRn9bnz97yWzfd9vSZ9e6OCNGZANQV9VPJTNVLIPmAEchAFtw0zJ6prv/9/+N+76bSM/dmkSGENY38lRnrbBNUocn1rgJ3kWJcVfRqgq7TWhGKnfmf/nP+MxMIn3uVNY4slcgC6KqetpiC9XJY69KHJyeLl1rmH9bkI0obSpUBX1JkeG5XN+pZeNfjbVlZts3IbwCsq7RE35VpRBMHn2NgQHbgBv4keI1RvR1gc38+eZVrN1nUwxV1235qWW8WEx6XWwW0T1AdwNV/VlFtgefHH0jRuOsBbiBl8evNg4jIHcJklaoAcNRgn3hbX0/LIn7fqqjPbhb0d0gtzSb/hiJGQizvW8houcz/gbHm960f5XYYEiFXgEvxhUdjepmb21T/rtFcd9PZVJzeYzsANbGKPB9XSmEPfl3/ope0Ph8qPfFwdUEtUGBfqBDhZoqbzowONvT980FeLmczrin78PaAURuRrCq9luLKVRz+QP/RBeF44PM8dIqDaMXBb0f6FQ4B+wXV1+u3N7/9QI+M97u1c0DIjwD3AhqFU5anOequd73/w29KNzAD5dWkYh2ovogcHkTPyDG3VPJ3vMlx0teRzj/kGKeAr2hiZ5ooh8thi4JN/BDxZU2JduN6sOgXU38g0jNsGuiblV5QuA6IFLVYyqyI8jlJy6GtgTHQx0z41daK0+L8gjICoV54IwobQidMWqVI2LYOZfNl5ZCW4Yb+NSHK6xNPimGR1FWLnxEJVLh87ryfK0nf7AVdFlwPNxZnuyyJtqmolsFWU2Mgh+hu8Kevs9aRZcNxxcuO/HxFfOhPCbKVuCkRPJCZcO9h5aDxjl/AICfVCTp0Ft2AAAAAElFTkSuQmCC"},"9a1f":function(t,e,n){"use strict";n("3e22")},a981:function(t){t.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":true,"internalType":"uint256","name":"trx_amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"token_amount","type":"uint256"}],"name":"AddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":true,"internalType":"uint256","name":"trx_amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"token_amount","type":"uint256"}],"name":"RemoveLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"uint256","name":"trx_sold","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"tokens_bought","type":"uint256"}],"name":"TokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokens_sold","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"trx_bought","type":"uint256"}],"name":"TrxPurchase","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[{"internalType":"uint256","name":"min_liquidity","type":"uint256"},{"internalType":"uint256","name":"max_tokens","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"factoryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"input_amount","type":"uint256"},{"internalType":"uint256","name":"input_reserve","type":"uint256"},{"internalType":"uint256","name":"output_reserve","type":"uint256"}],"name":"getInputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"output_amount","type":"uint256"},{"internalType":"uint256","name":"input_reserve","type":"uint256"},{"internalType":"uint256","name":"output_reserve","type":"uint256"}],"name":"getOutputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokens_sold","type":"uint256"}],"name":"getTokenToTrxInputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"trx_bought","type":"uint256"}],"name":"getTokenToTrxOutputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"trx_sold","type":"uint256"}],"name":"getTrxToTokenInputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokens_bought","type":"uint256"}],"name":"getTrxToTokenOutputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"min_trx","type":"uint256"},{"internalType":"uint256","name":"min_tokens","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokens_sold","type":"uint256"},{"internalType":"uint256","name":"min_tokens_bought","type":"uint256"},{"internalType":"uint256","name":"min_trx_bought","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"exchange_addr","type":"address"}],"name":"tokenToExchangeSwapInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokens_bought","type":"uint256"},{"internalType":"uint256","name":"max_tokens_sold","type":"uint256"},{"internalType":"uint256","name":"max_trx_sold","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"exchange_addr","type":"address"}],"name":"tokenToExchangeSwapOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokens_sold","type":"uint256"},{"internalType":"uint256","name":"min_tokens_bought","type":"uint256"},{"internalType":"uint256","name":"min_trx_bought","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"address","name":"exchange_addr","type":"address"}],"name":"tokenToExchangeTransferInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokens_bought","type":"uint256"},{"internalType":"uint256","name":"max_tokens_sold","type":"uint256"},{"internalType":"uint256","name":"max_trx_sold","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"address","name":"exchange_addr","type":"address"}],"name":"tokenToExchangeTransferOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokens_sold","type":"uint256"},{"internalType":"uint256","name":"min_tokens_bought","type":"uint256"},{"internalType":"uint256","name":"min_trx_bought","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"token_addr","type":"address"}],"name":"tokenToTokenSwapInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokens_bought","type":"uint256"},{"internalType":"uint256","name":"max_tokens_sold","type":"uint256"},{"internalType":"uint256","name":"max_trx_sold","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"token_addr","type":"address"}],"name":"tokenToTokenSwapOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokens_sold","type":"uint256"},{"internalType":"uint256","name":"min_tokens_bought","type":"uint256"},{"internalType":"uint256","name":"min_trx_bought","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"address","name":"token_addr","type":"address"}],"name":"tokenToTokenTransferInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokens_bought","type":"uint256"},{"internalType":"uint256","name":"max_tokens_sold","type":"uint256"},{"internalType":"uint256","name":"max_trx_sold","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"address","name":"token_addr","type":"address"}],"name":"tokenToTokenTransferOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokens_sold","type":"uint256"},{"internalType":"uint256","name":"min_trx","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"tokenToTrxSwapInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"trx_bought","type":"uint256"},{"internalType":"uint256","name":"max_tokens","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"tokenToTrxSwapOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokens_sold","type":"uint256"},{"internalType":"uint256","name":"min_trx","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"tokenToTrxTransferInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"trx_bought","type":"uint256"},{"internalType":"uint256","name":"max_tokens","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"tokenToTrxTransferOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"min_tokens","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"trxToTokenSwapInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokens_bought","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"trxToTokenSwapOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"min_tokens","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"trxToTokenTransferInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokens_bought","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"trxToTokenTransferOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"}]')}}]);