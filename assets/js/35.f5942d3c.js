(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{595:function(t,e,i){},657:function(t,e,i){"use strict";var s=i(595);i.n(s).a},693:function(t,e,i){"use strict";i.r(e);i(308);var s={name:"svg-viewbox1",data:function(){return{step:0,timer:null,width:40,height:30}},methods:{next:function(){var t=document.getElementById("svg"),e=document.getElementById("button"),i=document.getElementById("cover"),s=document.getElementById("text");if(t&&e){if(null!=this.timer)return;if(this.step++,1==this.step)i.style.display="block",s.innerHTML="点击下一步，执行视区全屏动画",t.getElementsByTagName("rect")[0].style.display="none";else if(2==this.step){i.style.width="400px",i.style.height="300px";var n=this;this.timer=setTimeout((function(){s.innerHTML="点击下一步，状态还原",clearTimeout(n.timer),n.timer=null}),1e3)}else 3==this.step&&(i.style.display="none",i.style.width="",i.style.height="",t.getElementsByTagName("rect")[0].style.display="",s.innerHTML="点击下一步，显示viewBox区域",this.step=0,this.timer=null)}}}},n=(i(657),i(14)),l=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo"},[this._m(0),this._v(" "),e("svg",{staticClass:"cover",attrs:{id:"cover",width:"40",height:"30",viewBox:"0 0 40 30"}},[e("rect",{attrs:{x:"10",y:"5",width:"20",height:"15",fill:"#cd0000"}})]),this._v(" "),e("svg",{staticStyle:{border:"1px solid #cd0000"},attrs:{id:"svg",width:"400",height:"300"}},[e("rect",{attrs:{x:"10",y:"5",width:"20",height:"15",fill:"#cd0000"}})]),this._v(" "),e("p",[e("input",{attrs:{id:"button",type:"button",value:"下一步"},on:{click:this.next}})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",{attrs:{id:"text"}},[this._v("点击下一步，显示viewBox区域")])])}],!1,null,"01db5d40",null);e.default=l.exports}}]);