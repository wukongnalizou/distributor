webpackJsonp([1],{"9cVS":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Xxa5"),r=e.n(s),i=e("exGp"),n=e.n(i),o={data:function(){return{datalist:[{recharge:0,ordinaryRecharge:0,ordinaryrechargenum:0,viprecharge:0,viprechargenum:0,rechargepersonnum:0,percapitarecharge:0}],monthmoney:{recharge:0,ordinaryRecharge:0,ordinaryrechargenum:0,viprecharge:0,viprechargenum:0,rechargepersonnum:0,percapitarecharge:0},totalmoney:{recharge:0,ordinaryRecharge:0,ordinaryrechargenum:0,viprecharge:0,viprechargenum:0,rechargepersonnum:0,percapitarecharge:0},daymoney:{recharge:0,ordinaryRecharge:0,ordinaryrechargenum:0,viprecharge:0,viprechargenum:0,rechargepersonnum:0,percapitarecharge:0},timedate:""}},computed:{time:function(){return""==this.timedate?this.$store.state.userinfo.impldate:this.timedate}},created:function(){this.daydata(),this.monthdata(),this.getdata()},methods:{getdata:function(){var t=this;return n()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$axios({method:"post",data:{id:t.$store.state.userinfo.id},url:"/crxl/qpp/distributor/getOrderTotal/near30Days"}).then(function(a){200==a.data.code?t.datalist=a.data.obj:t.$message(a.data.msg)});case 2:case"end":return a.stop()}},a,t)}))()},monthdata:function(){var t=this;return n()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$axios({method:"post",data:{id:t.$store.state.userinfo.id},url:"/crxl/qpp/distributor/getOrderTotal/thisMonth"}).then(function(a){200==a.data.code?(t.monthmoney=a.data.obj[0],t.totalmoney=a.data.obj[1]):t.$message(a.data.msg)});case 2:case"end":return a.stop()}},a,t)}))()},daydata:function(){var t=this;return n()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$axios({method:"post",data:{id:t.$store.state.userinfo.id,time:t.time},url:"/crxl/qpp/distributor/userOrder/getUserOrderWithdrawals"}).then(function(a){200==a.data.code?(t.daymoney=a.data.obj,t.timedate=a.data.obj.time):t.$message(a.data.msg)});case 2:case"end":return a.stop()}},a,t)}))()}}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"databox"},[e("div",{staticClass:"orderbox"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:6}},[e("div",{staticClass:"grid-content bg-purple"},[e("div",{staticClass:"orderitem"},[e("b",{staticClass:"ordertitle"},[t._v("今日充值")]),t._v(" "),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"非实时，存在延迟性",placement:"right"}},[e("i",{staticClass:"el-icon-question"})]),t._v(" "),e("span",{staticClass:"refresh",on:{click:t.daydata}},[t._v("刷新")]),t._v(" "),e("div",{staticClass:"moneycount"},[t._v("￥"+t._s(t.daymoney.recharge))]),t._v(" "),e("div",{staticClass:"moneyinfo"},[e("div",{staticClass:"orderinfo"},[e("span",{staticClass:"title"},[t._v("咔咔豆充值")]),t._v(" "),e("span",{staticClass:"money"},[t._v(t._s(t.daymoney.ordinaryRecharge))]),t._v(" "),e("span",[t._v("已支付:"),e("b",[t._v(t._s(t.daymoney.ordinaryRechargeNum))]),t._v("笔")])]),t._v(" "),e("div",{staticClass:"orderinfo"},[e("span",{staticClass:"title"},[t._v("会员充值")]),t._v(" "),e("span",{staticClass:"money"},[t._v(t._s(t.daymoney.vipRecharge))]),t._v(" "),e("span",[t._v("已支付:"),e("b",[t._v(t._s(t.daymoney.vipRechargeNum))]),t._v("笔")])])])],1)])]),t._v(" "),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"grid-content bg-purple"},[e("div",{staticClass:"orderitem"},[e("b",{staticClass:"ordertitle"},[t._v("昨日充值")]),t._v(" "),e("div",{staticClass:"moneycount"},[t._v("￥"+t._s(t.datalist[0].recharge))]),t._v(" "),e("div",{staticClass:"moneyinfo"},[e("div",{staticClass:"orderinfo"},[e("span",{staticClass:"title"},[t._v("咔咔豆充值")]),t._v(" "),e("span",{staticClass:"money"},[t._v(t._s(t.datalist[0].ordinaryrecharge))]),t._v(" "),e("span",[t._v("已支付:"),e("b",[t._v(t._s(t.datalist[0].ordinaryrechargenum))]),t._v("笔")])]),t._v(" "),e("div",{staticClass:"orderinfo"},[e("span",{staticClass:"title"},[t._v("会员充值")]),t._v(" "),e("span",{staticClass:"money"},[t._v(t._s(t.datalist[0].viprecharge))]),t._v(" "),e("span",[t._v("已支付:"),e("b",[t._v(t._s(t.datalist[0].viprechargenum))]),t._v("笔")])])])])])]),t._v(" "),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"grid-content bg-purple"},[e("div",{staticClass:"orderitem"},[e("b",{staticClass:"ordertitle"},[t._v("本月充值(不含当日)")]),t._v(" "),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"非实时，存在延迟性",placement:"right"}},[e("i",{staticClass:"el-icon-question"})]),t._v(" "),e("div",{staticClass:"moneycount"},[t._v("￥"+t._s(t.monthmoney.recharge))]),t._v(" "),e("div",{staticClass:"moneyinfo"},[e("div",{staticClass:"orderinfo"},[e("span",{staticClass:"title"},[t._v("咔咔豆充值")]),t._v(" "),e("span",{staticClass:"money"},[t._v(t._s(t.monthmoney.ordinaryrecharge))]),t._v(" "),e("span",[t._v("已支付:"),e("b",[t._v(t._s(t.monthmoney.ordinaryrechargenum))]),t._v("笔")])]),t._v(" "),e("div",{staticClass:"orderinfo"},[e("span",{staticClass:"title"},[t._v("会员充值")]),t._v(" "),e("span",{staticClass:"money"},[t._v(t._s(t.monthmoney.viprecharge))]),t._v(" "),e("span",[t._v("已支付:"),e("b",[t._v(t._s(t.monthmoney.viprechargenum))]),t._v("笔")])])])],1)])]),t._v(" "),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"grid-content bg-purple"},[e("div",{staticClass:"orderitem"},[e("b",{staticClass:"ordertitle"},[t._v("累计充值(不含当日)")]),t._v(" "),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"非实时，存在延迟性",placement:"right"}},[e("i",{staticClass:"el-icon-question"})]),t._v(" "),e("div",{staticClass:"moneycount"},[t._v("￥"+t._s(t.totalmoney.recharge))]),t._v(" "),e("div",{staticClass:"moneyinfo"},[e("div",{staticClass:"orderinfo"},[e("span",{staticClass:"title"},[t._v("咔咔豆充值")]),t._v(" "),e("span",{staticClass:"money"},[t._v(t._s(t.totalmoney.ordinaryrecharge))]),t._v(" "),e("span",[t._v("已支付:"),e("b",[t._v(t._s(t.totalmoney.ordinaryrechargenum))]),t._v("笔")])]),t._v(" "),e("div",{staticClass:"orderinfo"},[e("span",{staticClass:"title"},[t._v("会员充值")]),t._v(" "),e("span",{staticClass:"money"},[t._v(t._s(t.totalmoney.viprecharge))]),t._v(" "),e("span",[t._v("已支付:"),e("b",[t._v(t._s(t.totalmoney.viprechargenum))]),t._v("笔")])])])],1)])])],1),t._v(" "),e("div",{staticClass:"ordertable"},[t._m(0),t._v(" "),e("table",{staticClass:"datatable"},[t._m(1),t._v(" "),e("tbody",t._l(t.datalist,function(a){return e("tr",[e("td",[t._v(t._s(a.impldate))]),t._v(" "),e("td",[t._v("￥"+t._s(a.recharge))]),t._v(" "),e("td",{staticClass:"tditem"},[e("b",[t._v("￥"+t._s(a.ordinaryrecharge))]),t._v(" "),e("span",[t._v("充值笔数:"+t._s(a.ordinaryrechargenum))])]),t._v(" "),e("td",{staticClass:"tditem"},[e("b",[t._v("￥"+t._s(a.viprecharge))]),t._v(" "),e("span",[t._v("充值笔数:"+t._s(a.viprechargenum))])]),t._v(" "),e("td",{staticClass:"tditem"},[e("b",[t._v(t._s(a.rechargepersonnum)+"人")]),t._v(" "),e("span",[t._v("人均:"+t._s(a.percapitarecharge))])])])}))])])],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tablehead"},[a("h3",{staticClass:"titlehead"},[a("i",{staticClass:"el-icon-date"}),this._v("\n\t\t\t\t\t近30天充值统计\n\t\t\t\t")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("日期")]),t._v(" "),e("th",[t._v("充值金额")]),t._v(" "),e("th",[t._v("咔咔豆充值")]),t._v(" "),e("th",[t._v("会员充值")]),t._v(" "),e("th",[t._v("数据统计")])])])}]};var v=e("VU/8")(o,c,!1,function(t){e("cS6X")},null,null);a.default=v.exports},cS6X:function(t,a){}});
//# sourceMappingURL=1.5e55d41c3365eeeff2fc.js.map