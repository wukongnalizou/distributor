<template>
	<div class="detailbox" ref="boxbox">
		<div class="page-content" id="copyall">
			<h2 class="title" id="copytitle">{{headtitle}}</h2>
			<div id="copyimg">
				<div class="content" >
					<div class="fengmian" id="copyfengmian">
						<img :src="fengmian">
					</div>
					<div class="titleimg">
						<img :src="img.photourl" v-for="img in imglist">
					</div>
					
				</div>
				<div class="read">
					&nbsp;
					<img :src="imgyin">
				</div>
			</div>
		</div>
		<div class="copybox">
			<div class="selectitem">
				<el-dropdown  @command="selecttitle">
				<span class="el-dropdown-link">
			    选择标题<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown" class="titlebox">
					    <el-dropdown-item divided v-for="(title,key) in titlelist" :command="key">{{title.cartoontitle}}</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<div class="selectitem">
				<el-dropdown @command="selectimg">
					<span class="el-dropdown-link">
				    选择图片<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
					    <el-dropdown-item divided v-for="(img,key) in selectimglist" :command="key">
					    	<div class="imgbox">
					    		<img :src="img.modelurl">
					    	</div>
					    </el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<div class="selectitem">
				<el-dropdown @command="selectyin">
					<span class="el-dropdown-link">
				    引导关注<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
					    <el-dropdown-item divided command="http://p0oqd5s9w.bkt.clouddn.com/ka%20dong03.gif">
					    	<div class="dubox">
					    		<img src="http://p0oqd5s9w.bkt.clouddn.com/ka%20dong03.gif">
					    	</div>
					    </el-dropdown-item>
					    <el-dropdown-item divided command="http://p0oqd5s9w.bkt.clouddn.com/ka%20dong04.gif">
					    	<div class="dubox">
					    		<img src="http://p0oqd5s9w.bkt.clouddn.com/ka%20dong04.gif">
					    	</div>
					    </el-dropdown-item>
					    <el-dropdown-item divided command="http://p0oqd5s9w.bkt.clouddn.com/ka%20dong05.gif">
					    	<div class="dubox">
					    		<img src="http://p0oqd5s9w.bkt.clouddn.com/ka%20dong05.gif">
					    	</div>
					    </el-dropdown-item>
					    <el-dropdown-item divided command="http://p0oqd5s9w.bkt.clouddn.com/ka%20dong06.gif">
					    	<div class="dubox">
					    		<img src="http://p0oqd5s9w.bkt.clouddn.com/ka%20dong06.gif">
					    	</div>
					    </el-dropdown-item>
					    <el-dropdown-item divided command="http://p0oqd5s9w.bkt.clouddn.com/ka%20dong07.gif">
					    	<div class="dubox">
					    		<img src="http://p0oqd5s9w.bkt.clouddn.com/ka%20dong07.gif">
					    	</div>
					    </el-dropdown-item>
					    <el-dropdown-item divided command="http://p0oqd5s9w.bkt.clouddn.com/yueduyuanwen.gif">
					    	<div class="dubox">
					    		<img src="http://p0oqd5s9w.bkt.clouddn.com/yueduyuanwen.gif">
					    	</div>
					    </el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<div class="selectitem lastitem">
				<div class="tag-read"  data-clipboard-target="#copytitle">复制标题</div>
				<div class="tag-read"  data-clipboard-target="#copyimg">复制正文</div>
				<div class="nexturl" @click="geturl">原文链接</div>
				<!-- <el-dropdown>
					<span class="el-dropdown-link">
				    一键复制<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
					    <el-dropdown-item><button class="tag-read"  data-clipboard-target="#copytitle" @click="hah">1111111111</button></el-dropdown-item>
					    <el-dropdown-item class="tag-read">封面图片</el-dropdown-item>
					    <el-dropdown-item class="tag-read">全部内容</el-dropdown-item>
					    <el-dropdown-item>
					    	<div class="tag-read" data-clipboard-target="#copytitle">复制标题</div>
					    </el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown> --> 
			</div>
		</div>
		<el-dialog title="阅读链接" :visible.sync="dialogVisible" id="urldialog1">
		  <span id="nextpageurl">{{nexturl}}</span>
		  <span slot="footer" class="dialog-footer">
		    <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
		    <el-button type="primary" class="tag-read" data-clipboard-target="#nextpageurl">一键复制</el-button>
		  </span>
		</el-dialog>
	</div>
</template>
<script>
import Clipboard from 'clipboard';  
export default{
	data(){
		return {
			titlelist:[],
			selectimglist:[],
			headtitle:'',
			imglist:[],
			scrollTop:100,
			fengmian:'',
			nexturl:'',
			dialogVisible:false,
			imgyin:'http://p0oqd5s9w.bkt.clouddn.com/yueduyuanwen%282%29.gif',
		}
	},
	computed:{
		// headtitle:function(){

		// }
	},
	created(){
		this.gettitle();
		this.getimg();
		this.getimglist();
	},
	methods:{
		gettitle:function(){
			this.$axios({
				method:'post',
				data:{
					"id":this.$route.query.id
				},
				url:'/crxl/qpp/distributor/getCartoonTitle'
			}).then((res)=>{
				if(res.data.code == 200){
					this.titlelist = res.data.obj;
					this.headtitle = res.data.obj[0].cartoontitle;
				}else{
					this.$message(res.data.msg);
				}
			})
		},
		copytitle:function(){
			var clipboard = new Clipboard('.tag-read')
        	clipboard.on('success', function(e) {
   //      	console.log(e)  
          	console.log('复制成功')  
   //        	// 释放内存  
          	clipboard.destroy()  
        	})  
		},
		getimg:function(){
			this.$axios({
				method:'post',
				data:{
					"id":this.$route.query.id
				},
				url:'/crxl/qpp/distributor/getCartoonModel'
			}).then((res)=>{
				if(res.data.code == 200){
					this.selectimglist = res.data.obj;
					this.fengmian = res.data.obj[0].modelurl;
				}else{
					this.$message(res.data.msg);
				}
			})
		},
		getimglist:function(){
			// console.log(this.$route.query.id)
			this.$axios({
				method:'post',
				data:{
					"cartoonid":this.$route.query.id,
					"sort":this.$route.query.sort
				},
				url:'/crxl/qpp/distributor/generateUrl/cover'
			}).then((res)=>{
				if(res.data.code == 200){
					this.imglist = res.data.obj;
				}else{
					this.$message(res.data.msg);
				}
			})
		},
		selecttitle:function(command){
			this.headtitle = this.titlelist[command].cartoontitle;
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		},
		selectimg:function(command){
			this.fengmian = this.selectimglist[command].modelurl;
		},
		selectyin:function(command){
			this.imgyin = command
		},
		geturl:function(){
			this.$axios({
				method:'post',
				data:{
					"distributorId":this.$store.state.userinfo.id,
					"id":this.$route.query.cartoonsetid,
					"cartoonid":this.$route.query.id
				},
				url:'/crxl/qpp/distributor/generateNextUrl',
			}).then((res)=>{
				if(res.data.code == 200){
					this.nexturl = res.data.obj;
					this.dialogVisible = true;
				}else{
					this.$message(res.data.msg);
				}
			})
		}
	},
	mounted() {
		let _this = this;
    	const clipboard = new Clipboard('.tag-read');
    	// const clipboard1 = new Clipboard('.tag-read1');
    	// const clipboard2 = new Clipboard('.tag-read2');
    	// const clipboard3 = new Clipboard('.tag-read3');
    	clipboard.on('success', function(e) {
          	_this.$message('复制成功');  
   			e.clearSelection(); 
          	// clipboard.destroy()  
        })
  	},
}
</script>
<style lang="stylus" scoped>
.detailbox
	position:relative;
	width:100%;
	padding-bottom:50px;
	.page-content
		position:relative;
		margin-left:auto;
		margin-right:auto;
		width:740px;
		padding:20px 15px;
		.title
			display:block;
			// width:720px;
			padding-bottom:10px;
			margin-bottom:14px;
			border-bottom:1px solid #e7e7eb;
			line-height:1.4;
			font-weight:400;
			font-size:24px;
		.fengmian
			img
				width:100%;	
		.content
			// width:720px;
			div
				width:100%;
				img
					width:100%;
			.titleimg
				img
					display:block;		
			.conimg
				margin-top:20px;
			.read
				width:100%;
				display:flex;
				section
					span
						font-size:20px; 					
	.copybox
		position:fixed;
		display:flex;
		bottom:0;
		// left:0;
		// margin-left:20px;
		padding:0 30px;
		width:100%;
		height:50px;
		background:baseColor;
		div
			margin-left:40px;
		.selectitem
			// flex:1;
			// width:10%;
			display:flex
			line-height:50px;
			span
				font-size:16px;
				color:#fff;
				&:hover
					cursor:pointer;
		.lastitem
			// width:40%;
			margin-left:30%;	
			div
				// width:30%;
				width:100px;
				// margin-left:10px;
				color:#fff;
				&:hover
					cursor:pointer;			
	#urldialog1
		.el-dialog
			width:40%;
			height:300px;
			span
				word-break:break-all				
.titlebox
	width:400px;
	li
		line-height:1.5;					
.imgbox
	width:100px;
	height:50px;
	img
		width:100%;
		height:100%;
.dubox
	width:100px;
	img
		width:100%;					
								
</style>