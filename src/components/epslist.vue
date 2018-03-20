<template>
	<div class="epslistbox">
		<div class="cartooninfo">
			<div class="cartoonimg">
				<img :src="cartoon.midelphoto">
			</div>
			<h1>{{cartoon.cartoonname}}</h1>
			<p>{{cartoon.introduc}}</p>
		</div>
		<div class="cartoonlist">
			<ul>
				<li v-for="(eps,key) in epslist">
					<div class="itembox">
						<span>{{key+1}}</span>
						<!-- <span class="title">第一zhang</span> -->
						<el-button type="text" @click="preview(eps.cartoonid,eps.id)">{{eps.titile}}</el-button>
						<span class="money" :class="[eps.moneystate == 1?'charge':'']">{{eps.moneystate == 0? '免费':'付费'}}</span>
						<div class="tuiguang" v-if="key <= 4 ">
							<div class="con">
								<span class="el-icon-share"></span>
								<!-- <span>生成推广文案</span> -->
								<el-tooltip class="item" effect="dark" content="文案内容到当前章节，原文链接为下一章" placement="top">
							      <span @click="todetail(eps.cartoonid,eps.id,eps.sort)">生成推广文案</span>
							    </el-tooltip>
							</div>
							<div class="con">
								<span class="el-icon-share"></span>
								<!-- <span>获取推广链接</span> -->
								<el-tooltip class="item" effect="dark" content="原文链接为当前章节" placement="top">
							      <span @click="tourl(eps.cartoonid,eps.id)">获取推广链接</span>
							    </el-tooltip>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<!-- <div class="yulanbox"> -->
		<el-dialog title="漫画预览" :visible.sync="dialogTableVisible" id="yulan" custom-class="yulanbox">
			<div class="photobox">
				<img :src="photo.photourl" v-for="photo in photoList">
			</div>
		</el-dialog>
		<!-- </div> -->
		<el-dialog title="生成链接" :visible.sync="dialogUrlVisible" id="urldialog" width="30%">
		  <span id="nowpageurl">{{url}}</span>
		  <span slot="footer" class="dialog-footer">
		    <!-- <el-button @click="dialogUrlVisible = false">取 消</el-button> -->
		    <el-button type="primary" @click="dialogUrlVisible = false" class="tag-read" data-clipboard-target="#nowpageurl">一键复制</el-button>
		  </span>
		</el-dialog>
	</div>
</template>
<script>
import Clipboard from 'clipboard';
export default {
	data() {
		return {
			dialogTableVisible:false,
			dialogUrlVisible:false,
			epslist:[],
			photoList:[],
			url:"",
			cartoon:Object,
			qd:this.$store.state.userinfo.id
		}
	},
	computed:{
		
	},
	created(){
		this.getlist();
	},
	methods:{
		async getlist(){
			await this.$axios({
				method: "post",
				data:{
					"cartoonid":this.$route.query.id
				},
				url:"/crxl/qpp/distributor/getCartoonSet"
			}).then((res)=>{
				if(res.data.code == 200){
					this.epslist = res.data.obj;
					this.cartoon = res.data.spare;
				}else{
					this.$message(res.data.msg);
				}
			})
		},
		async preview(cartoonid,cartoonsetid){
			await this.$axios({
				method: "post",
				data:{
					"cartoonid":cartoonid,
					"cartoonsetid":cartoonsetid
				},
				url:"/crxl/qpp/distributor/getCartoonPhoto"
			}).then((res)=>{
				if(res.data.code == 200){
					this.dialogTableVisible = true;
					this.photoList = res.data.obj;
				}else{
					this.$message(res.data.msg);
				}
			})
		},
		async tourl(cartoonid,cartoonsetid){
			console.log('qd'+this.qd)
			await this.$axios({
				method: "post",
				data:{
					"cartoonid":cartoonid,
					"id":cartoonsetid,
					"distributorId":this.qd
				},
				url:"/crxl/qpp/distributor/generateUrl"
			}).then((res)=>{
				if(res.data.code == 200){
					this.dialogUrlVisible = true;
					this.url = res.data.obj;
				}else{
					this.$message(res.data.msg);
				}
			})
		},
		todetail:function(cartoonid,cartoonsetid,sort){
			this.$router.push('/home/detail?id='+cartoonid+'&cartoonsetid='+cartoonsetid+'&sort='+sort);
		}
	},
	mounted() {
		let _this = this;
    	const clipboard = new Clipboard('.tag-read');
    	clipboard.on('success', function(e) {
          	_this.$message('复制成功');  
   			e.clearSelection();  
        })
  	},
}	
</script>
<style lang="stylus">
.epslistbox
	margin-top:30px;
	width:100%;
	display:flex;
	.cartooninfo
		width:400px;
		.cartoonimg
			width:200px;
			height:306px;
			margin:0 auto;
			img
				width:100%;
				height:100%;
		h1
			margin-top:5px;
			font-size:16px;
		p
			margin-top:5px;
			font-size:14px;
			color:#777;				
	.cartoonlist
		width:80%;
		ul		
			border:1px solid #ccc;
			border-bottom:none;
			li
				padding:5px 10px;
				border-bottom:1px solid #ccc;
				.itembox
					span
						margin-left:5px;
						font-size:14px;
					.title
						color:baseColor;
						&:hover
							cursor:pointer;
					.money
						color:forestgreen			
					// float:right;
					.charge
						color:#e96900;	
					.tuiguang
						display:flex;
						line-height:40px;
						// margin-right:10px;
						float:right;
						div
							margin-left:10px;
							font-size:14px;
							color:baseColor;
							&:hover
								cursor:pointer;
	// .yulanbox
	// 	width:435px;
	// 	height:667px;							
	#yulan
		.yulanbox
			width:435px;
			height:667px;
			overflow:auto;
			.photobox
				width:100%;
				img
					display:block;
					width:100%;
	#urldialog
		.el-dialog
			width:40%;
			// height:350px;
			span
				word-break:break-all										
</style>