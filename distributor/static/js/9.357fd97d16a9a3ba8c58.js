webpackJsonp([9],{NXz5:function(t,e){},vJeG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Xxa5"),a=n.n(i),s=n("exGp"),o=n.n(s),c={data:function(){return{cartoonlist:[],nowpage:"1",total:0,condition:""}},created:function(){this.getlist(1)},methods:{getlist:function(t){var e=this;return o()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios({method:"post",data:{pageNum:t,pageSize:10,condition:e.condition},url:"/crxl/qpp/distributor/getCartoon"}).then(function(t){200==t.data.code?(e.cartoonlist=t.data.obj.list,e.total=t.data.obj.total):e.$message(t.data.msg)});case 2:case"end":return n.stop()}},n,e)}))()},page:function(t){this.getlist(t)},epslist:function(t){this.$router.push("/home/epslist?id="+t)}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cartoonlistbox"},[n("div",{staticClass:"listinput"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.condition,expression:"condition"}],attrs:{type:"text",placeholder:"漫画名称"},domProps:{value:t.condition},on:{input:function(e){e.target.composing||(t.condition=e.target.value)}}}),t._v(" "),n("span",{staticClass:"search",on:{click:function(e){t.getlist(1)}}},[n("span",{staticClass:"el-icon-search"})])]),t._v(" "),n("div",{staticClass:"clearboth"}),t._v(" "),n("table",{staticClass:"cartoontable"},[t._m(0),t._v(" "),n("tbody",t._l(t.cartoonlist,function(e){return n("tr",[n("td",{staticClass:"textcenter"},[n("div",{staticClass:"imgbox"},[n("img",{attrs:{src:e.midelphoto}})])]),t._v(" "),n("td",[n("span",{on:{click:function(n){t.epslist(e.id)}}},[t._v(t._s(e.cartoonname))]),t._v(" "),n("span",{on:{click:function(n){t.epslist(e.id)}}},[t._v(t._s(0==e.serialstate?"[连载中]":"[已完结]"))]),t._v(" "),n("i",[t._v("更新至"+t._s(e.updatetile))])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.recommendationindex))])])}))]),t._v(" "),n("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.page}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{width:"12%"}},[this._v("封面")]),this._v(" "),e("th",[this._v("名称")]),this._v(" "),e("th",{staticStyle:{"text-align":"center"},attrs:{width:"12%"}},[this._v("派单指数")])])])}]};var l=n("VU/8")(c,r,!1,function(t){n("NXz5")},null,null);e.default=l.exports}});
//# sourceMappingURL=9.357fd97d16a9a3ba8c58.js.map