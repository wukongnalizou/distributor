<template>
	<div class="cartoonlistbox">
		<div class="listinput">
			<input type="text" placeholder="漫画名称" v-model="condition">
			<span class="search" @click="getlist(1)">
				<span class="el-icon-search"></span>
			</span>
		</div>
		<div class="clearboth"></div>
		<table class="cartoontable">
			<thead>
				<tr>
					<th width="12%">封面</th>
					<th>名称</th>
					<th width="12%" style="text-align:center">派单指数</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="cartoon in cartoonlist">
					<td class="textcenter">
						<div class="imgbox">
							<img :src="cartoon.midelphoto">
						</div>
					</td>
					<td>
						<!-- <span @click="epslist">[都市]</span> -->
						<span @click="epslist(cartoon.id)">{{cartoon.cartoonname}}</span>
						<span @click="epslist(cartoon.id)">{{cartoon.serialstate == 0 ? '[连载中]':'[已完结]'}}</span>
						<i>更新至{{cartoon.updatetile}}</i>
					</td>
					<td style="text-align:center">{{cartoon.recommendationindex}}</td>
				</tr>
			</tbody>
		</table>
		<el-pagination
		  background
		  layout="prev, pager, next"
		  :total="total" @current-change="page" style="margin-top:10px;">
		</el-pagination>
	</div>
</template>
<script>
export default{
	data(){
		return {
			cartoonlist:[],
			nowpage:'1',
			total:0,
			condition:'',
		}
	},
	created(){
		this.getlist(1);
	},
	methods:{
		async getlist(val){
			await this.$axios({
	          method: "post",
	          data:{
	          	'pageNum':val,
	          	'pageSize':10,
	          	'condition':this.condition
	          },
	          url: "/crxl/qpp/distributor/getCartoon"
	        }).then((res)=>{
	            if(res.data.code == 200){
	            	this.cartoonlist = res.data.obj.list;
	            	this.total = res.data.obj.total;
	            }else{
	              this.$message(res.data.msg);
	            }
	        })
		},
		page:function(val){
			this.getlist(val)
		},
		epslist:function(id){
			this.$router.push('/home/epslist?id='+id);
		}
	}
}	
</script>
<style lang="stylus">
.cartoonlistbox
	.listinput
		display:inline-table;
		box-sizing:border-box;
		float:right;
		overflow:hidden;
		position:relative;
		input
			// margin-top:1px;
			color:#858585;
			// box-sizing:border-box;
			background:#fff;
			border:1px solid #d5d5d5;
			padding:5px 4px 6px;
			font-size:14px;
		.search
			// padding:5px 8px;
			padding:5px 10px;
			margin-left:-1px;	
			width:auto;	
			vertical-align: middle;
			box-sizing:border-box;	
			background:baseColor;
			border:1px solid transparent;
			span	
				vertical-align:middle;
				display:table-cell;
				box-sizing:border-box;
				color:#fff;	
				font-size:14px;
			&:hover
				cursor:pointer;		
	.clearboth
		clear:both;
	.cartoontable
		margin-top:20px;
		width:100%;
		text-align:left;
		border:1px solid #ccc;
		border-collapse:collapse;
		thead
			tr
				color:#707070;
				font-weight:400;
				background:#f2f2f2 repeat-x;
				font-size:14px;
				th	
					padding:8px;
					border:1px solid #ddd;
		tbody
			tr
				td
					padding:8px;
					border:1px solid #ddd;
					vertical-align:top;
					b
						display:block;
						color:baseColor;
					span
						font-size:14px;
						color:baseColor;
						&:hover
							cursor:pointer;
					i
						display:block;
						margin-top:5px;
						font-size:12px;
						color:#777;	
					.imgbox
						width:50px;
						height:70px;
						margin:0 auto;
						img
							width:100%;
							height:100%;									
</style>