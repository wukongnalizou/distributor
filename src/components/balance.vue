<template>
	<div class="balancebox">
		<el-row :gutter="20">
			<el-col :span="8">
			  	<div class="grid-content bg-purple">
			  		<div class="orderitem">
			  			<b class="ordertitle">总收益</b>
			  			<el-tooltip class="item" effect="dark" content="非实时，存在延迟性"placement="right">
					    	<i class="el-icon-question"></i>
					    </el-tooltip>
					    <div class="moneycount">￥{{totalmoney}}</div>
					    <div class="moneyinfo">
					    	<div class="orderinfo">
					    		<span class="title">已提现</span>
					    		<span class="money">{{finishmoney}}</span>
					    	</div>
					    	<div class="orderinfo">
					    		<span class="title">未提现</span>
					    		<span class="money">{{balancemoney}}</span>
					    	</div>
					    </div>
			  		</div>
			 	</div>
			</el-col>
		</el-row>
		<div class="block">
			<el-date-picker format="yyyy 年 MM 月 dd 日" v-model="timelist" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd">
		    </el-date-picker>
		    <el-button type="primary" @click="getlist(1)">时间搜索</el-button>
		</div>
		<div class="ordertable">
			<div class="tablehead">
				<h3 class="titlehead">
					<i class="el-icon-date"></i>
					近30天提现统计
				</h3>
			</div>
			<table class="datatable">
				<thead>
					<tr>
						<th>日期</th>
						<th>提现总额</th>
						<th>佣金比例</th>
						<th>提现金额</th>
						<th>结算状态</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="order in orderlist">
						<td>{{order.withdrawalsdate}}</td>
						<td>￥{{order.todayrecharge}}</td>
						<td class="tditem">
							<span>{{order.proportion}}</span>
						</td>
						<td class="tditem">
							<b>￥{{order.withdrawalsmoney}}</b>
						</td>
						<td>
							<span :class="[order.withdrawalsstate == 0?'unfinish':'finish']">{{order.withdrawalsstate == 0?'未结算':'已结算'}}</span>
						</td>
					</tr>
				</tbody>
			</table>
			<el-pagination
			  background
			  layout="prev, pager, next"
			  :total="total" @current-change="page" style="margin-top:10px;">
			</el-pagination>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			nowpage:'1',
			total:0,
			timelist:'',
			orderlist:[],
			totalmoney:0,
			finishmoney:0,
			balancemoney:0
		}
	},
	created(){
		this.getlist(1);
		this.getall();
	},
	methods:{
		async getlist(val){
			await this.$axios({
	          method: "post",
	          data:{
	          	'pageNum':val,
	          	'pageSize':10,
	          	'id':this.$store.state.userinfo.id,
	          	'startDate':this.timelist[0],
	          	'endDate':this.timelist[1],
	          },
	          url: "/crxl/qpp/distributor/getWithdrawals"
	        }).then((res)=>{
	            if(res.data.code == 200){
	            	this.orderlist = res.data.obj.list
	            	this.total = res.data.obj.total;
	            	// this.cartoonlist = res.data.obj.list;
	            	// this.total = res.data.obj.total;
	            }else{
	              this.$message(res.data.msg);
	            }
	        })
		},
		async getall(){
			await this.$axios({
	          method: "post",
	          data:{
	          	'id':this.$store.state.userinfo.id,
	          },
	          url: "/crxl/qpp/distributor/getTotalProfit"
	        }).then((res)=>{
	            if(res.data.code == 200){
	            	// this.orderlist = res.data.obj.list
	            	// this.total = res.data.obj.total;
	            	this.totalmoney = res.data.obj.allrecharge
	            	this.finishmoney = res.data.obj.overrecharge
	            	this.balancemoney = res.data.obj.balance
	            }else{
	              this.$message(res.data.msg);
	            }
	        })
		},
		page:function(val){
			this.getlist(val)
		},
	}
}	
</script>
<style lang="stylus" scoped>
.balancebox
	.el-row
		margin-bottom:20px;
		// &:last-child
		// 	margin-bottom:0;
	.el-col
		border-radius:4px;
	.bg-purple
		background:#f5f5f5;
	.grid-content
		border-radius:4px;
		min-height:36px;
	.orderitem
		padding:19px;
		border:1px solid #e3e3e3;
		.ordertitle
			font-size:14px;
		.moneycount
			margin-top:10px;
			font-size:28px;
			color:baseColor;
			margin-bottom:10px;
		.refresh
			font-size:14px;
			color:green;
			&:hover
				cursor:pointer;
			// margin-left:40%;	
		.moneyinfo
			display:flex;
			.orderinfo
				flex:1;
				.title
					font-size:14px;
					font-weight:700;
					margin-bottom:5px;
				.money
					font-size:14px;
					font-weight:700;
					color:baseColor;	
				span
					// display:flex;
					font-size:14px;
					b
						margin:0 5px;
						color:baseColor;
	.ordertable
			.tablehead
				color:#333;
				background-color:#f5f5f5;
				border-color:#ddd;
				padding:10px 15px;
				border-bottom:1px solid transparent;
				border-top-left-radius:3px;
				border-top-right-radius:3px;
				h3
					font-size:14px;
			.datatable
				width:100%;
				text-align:right;
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
							b
								display:block;
								color:baseColor;
							span
								font-size:14px;
								color:#777;
							.unfinish
								color:#e96900;
							.finish
								color:#228b22;							
</style>