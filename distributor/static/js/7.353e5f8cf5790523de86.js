webpackJsonp([7],{"4ov+":function(t,i){},lFou:function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=o("TQvf"),d=o.n(s),e={data:function(){return{titlelist:[],selectimglist:[],headtitle:"",imglist:[],scrollTop:100,fengmian:"",nexturl:"",dialogVisible:!1,imgyin:"http://p0oqd5s9w.bkt.clouddn.com/yueduyuanwen%282%29.gif"}},computed:{},created:function(){this.gettitle(),this.getimg(),this.getimglist()},methods:{gettitle:function(){var t=this;this.$axios({method:"post",data:{id:this.$route.query.id},url:"/crxl/qpp/distributor/getCartoonTitle"}).then(function(i){200==i.data.code?(t.titlelist=i.data.obj,t.headtitle=i.data.obj[0].cartoontitle):t.$message(i.data.msg)})},copytitle:function(){var t=new d.a(".tag-read");t.on("success",function(i){console.log("复制成功"),t.destroy()})},getimg:function(){var t=this;this.$axios({method:"post",data:{id:this.$route.query.id},url:"/crxl/qpp/distributor/getCartoonModel"}).then(function(i){200==i.data.code?(t.selectimglist=i.data.obj,t.fengmian=i.data.obj[0].modelurl):t.$message(i.data.msg)})},getimglist:function(){var t=this;this.$axios({method:"post",data:{cartoonid:this.$route.query.id,sort:this.$route.query.sort},url:"/crxl/qpp/distributor/generateUrl/cover"}).then(function(i){200==i.data.code?t.imglist=i.data.obj:t.$message(i.data.msg)})},selecttitle:function(t){this.headtitle=this.titlelist[t].cartoontitle,document.body.scrollTop=0,document.documentElement.scrollTop=0},selectimg:function(t){this.fengmian=this.selectimglist[t].modelurl},selectyin:function(t){this.imgyin=t},geturl:function(){var t=this;this.$axios({method:"post",data:{distributorId:this.$store.state.userinfo.id,id:this.$route.query.cartoonsetid,cartoonid:this.$route.query.id},url:"/crxl/qpp/distributor/generateNextUrl"}).then(function(i){200==i.data.code?(t.nexturl=i.data.obj,t.dialogVisible=!0):t.$message(i.data.msg)})}},mounted:function(){var t=this;new d.a(".tag-read").on("success",function(i){t.$message("复制成功"),i.clearSelection()})}},a={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{ref:"boxbox",staticClass:"detailbox"},[o("div",{staticClass:"page-content",attrs:{id:"copyall"}},[o("h2",{staticClass:"title",attrs:{id:"copytitle"}},[t._v(t._s(t.headtitle))]),t._v(" "),o("div",{attrs:{id:"copyimg"}},[o("div",{staticClass:"content"},[o("div",{staticClass:"fengmian",attrs:{id:"copyfengmian"}},[o("img",{attrs:{src:t.fengmian}})]),t._v(" "),o("div",{staticClass:"titleimg"},t._l(t.imglist,function(t){return o("img",{attrs:{src:t.photourl}})}))]),t._v(" "),o("div",{staticClass:"read"},[t._v("\n\t\t\t\t \n\t\t\t\t"),o("img",{attrs:{src:t.imgyin}})])])]),t._v(" "),o("div",{staticClass:"copybox"},[o("div",{staticClass:"selectitem"},[o("el-dropdown",{on:{command:t.selecttitle}},[o("span",{staticClass:"el-dropdown-link"},[t._v("\n\t\t    选择标题"),o("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),o("el-dropdown-menu",{staticClass:"titlebox",attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.titlelist,function(i,s){return o("el-dropdown-item",{attrs:{divided:"",command:s}},[t._v(t._s(i.cartoontitle))])}))],1)],1),t._v(" "),o("div",{staticClass:"selectitem"},[o("el-dropdown",{on:{command:t.selectimg}},[o("span",{staticClass:"el-dropdown-link"},[t._v("\n\t\t\t    选择图片"),o("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.selectimglist,function(t,i){return o("el-dropdown-item",{attrs:{divided:"",command:i}},[o("div",{staticClass:"imgbox"},[o("img",{attrs:{src:t.modelurl}})])])}))],1)],1),t._v(" "),o("div",{staticClass:"selectitem"},[o("el-dropdown",{on:{command:t.selectyin}},[o("span",{staticClass:"el-dropdown-link"},[t._v("\n\t\t\t    引导关注"),o("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{attrs:{divided:"",command:"http://p0oqd5s9w.bkt.clouddn.com/ka%20dong03.gif"}},[o("div",{staticClass:"dubox"},[o("img",{attrs:{src:"http://p0oqd5s9w.bkt.clouddn.com/ka%20dong03.gif"}})])]),t._v(" "),o("el-dropdown-item",{attrs:{divided:"",command:"http://p0oqd5s9w.bkt.clouddn.com/ka%20dong04.gif"}},[o("div",{staticClass:"dubox"},[o("img",{attrs:{src:"http://p0oqd5s9w.bkt.clouddn.com/ka%20dong04.gif"}})])]),t._v(" "),o("el-dropdown-item",{attrs:{divided:"",command:"http://p0oqd5s9w.bkt.clouddn.com/ka%20dong05.gif"}},[o("div",{staticClass:"dubox"},[o("img",{attrs:{src:"http://p0oqd5s9w.bkt.clouddn.com/ka%20dong05.gif"}})])]),t._v(" "),o("el-dropdown-item",{attrs:{divided:"",command:"http://p0oqd5s9w.bkt.clouddn.com/ka%20dong06.gif"}},[o("div",{staticClass:"dubox"},[o("img",{attrs:{src:"http://p0oqd5s9w.bkt.clouddn.com/ka%20dong06.gif"}})])]),t._v(" "),o("el-dropdown-item",{attrs:{divided:"",command:"http://p0oqd5s9w.bkt.clouddn.com/ka%20dong07.gif"}},[o("div",{staticClass:"dubox"},[o("img",{attrs:{src:"http://p0oqd5s9w.bkt.clouddn.com/ka%20dong07.gif"}})])]),t._v(" "),o("el-dropdown-item",{attrs:{divided:"",command:"http://p0oqd5s9w.bkt.clouddn.com/yueduyuanwen.gif"}},[o("div",{staticClass:"dubox"},[o("img",{attrs:{src:"http://p0oqd5s9w.bkt.clouddn.com/yueduyuanwen.gif"}})])])],1)],1)],1),t._v(" "),o("div",{staticClass:"selectitem lastitem",staticStyle:{width:"200px"}},[o("div",{staticClass:"tag-read",attrs:{"data-clipboard-target":"#copytitle"}},[t._v("复制标题")]),t._v(" "),o("div",{staticClass:"tag-read",attrs:{"data-clipboard-target":"#copyimg"}},[t._v("复制正文")]),t._v(" "),o("div",{staticClass:"nexturl",on:{click:t.geturl}},[t._v("原文链接")])])]),t._v(" "),o("el-dialog",{attrs:{title:"阅读链接",visible:t.dialogVisible,id:"urldialog1"},on:{"update:visible":function(i){t.dialogVisible=i}}},[o("span",{attrs:{id:"nextpageurl"}},[t._v(t._s(t.nexturl))]),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{staticClass:"tag-read",attrs:{type:"primary","data-clipboard-target":"#nextpageurl"}},[t._v("一键复制")])],1)])],1)},staticRenderFns:[]};var n=o("VU/8")(e,a,!1,function(t){o("4ov+")},"data-v-2d8aea4e",null);i.default=n.exports}});
//# sourceMappingURL=7.353e5f8cf5790523de86.js.map