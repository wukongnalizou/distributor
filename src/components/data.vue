<template>
	<div class="databox">
		<div class="orderbox">
			<el-row :gutter="20">
				<el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<div class="orderitem">
				  			<b class="ordertitle">今日充值</b>
				  			<el-tooltip class="item" effect="dark" content="非实时，存在延迟性"placement="right">
						    	<i class="el-icon-question"></i>
						    </el-tooltip>
						    <span class="refresh" @click="daydata">刷新</span>
						    <div class="moneycount">￥{{daymoney.recharge}}</div>
						    <div class="moneyinfo">
						    	<div class="orderinfo">
						    		<span class="title">咔咔豆充值</span>
						    		<span class="money">{{daymoney.ordinaryRecharge}}</span>
						    		<span>已支付:<b>{{daymoney.ordinaryRechargeNum}}</b>笔</span>
						    		<!-- <span>未支付:<b>0</b>笔</span>
						    		<span>完成率:<b>0</b>%</span> -->
						    	</div>
						    	<div class="orderinfo">
						    		<span class="title">会员充值</span>
						    		<span class="money">{{daymoney.vipRecharge}}</span>
						    		<span>已支付:<b>{{daymoney.vipRechargeNum}}</b>笔</span>
						    		<!-- <span>未支付:<b>0</b>笔</span>
						    		<span>完成率:<b>0</b>%</span> -->
						    	</div>
						    </div>
				  		</div>
				 	</div>
				</el-col>
			  	<el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<div class="orderitem">
				  			<b class="ordertitle">昨日充值</b>
						    <div class="moneycount">￥{{datalist[0].recharge}}</div>
						    <div class="moneyinfo">
						    	<div class="orderinfo">
						    		<span class="title">咔咔豆充值</span>
						    		<span class="money">{{datalist[0].ordinaryrecharge}}</span>
						    		<span>已支付:<b>{{datalist[0].ordinaryrechargenum}}</b>笔</span>
						    	</div>
						    	<div class="orderinfo">
						    		<span class="title">会员充值</span>
						    		<span class="money">{{datalist[0].viprecharge}}</span>
						    		<span>已支付:<b>{{datalist[0].viprechargenum}}</b>笔</span>
						    	</div>
						    </div>
				  		</div>
				 	</div>
				</el-col>
				<el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<div class="orderitem">
				  			<b class="ordertitle">本月充值(不含当日)</b>
				  			<el-tooltip class="item" effect="dark" content="非实时，存在延迟性"placement="right">
						    	<i class="el-icon-question"></i>
						    </el-tooltip>
						    <div class="moneycount">￥{{monthmoney.recharge}}</div>
						    <div class="moneyinfo">
						    	<div class="orderinfo">
						    		<span class="title">咔咔豆充值</span>
						    		<span class="money">{{monthmoney.ordinaryrecharge}}</span>
						    		<span>已支付:<b>{{monthmoney.ordinaryrechargenum}}</b>笔</span>
						    		<!-- <span>未支付:<b>0</b>笔</span>
						    		<span>完成率:<b>0</b>%</span> -->
						    	</div>
						    	<div class="orderinfo">
						    		<span class="title">会员充值</span>
						    		<span class="money">{{monthmoney.viprecharge}}</span>
						    		<span>已支付:<b>{{monthmoney.viprechargenum}}</b>笔</span>
						    		<!-- <span>未支付:<b>0</b>笔</span>
						    		<span>完成率:<b>0</b>%</span> -->
						    	</div>
						    </div>
				  		</div>
				 	</div>
				</el-col>
				<el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<div class="orderitem">
				  			<b class="ordertitle">累计充值(不含当日)</b>
				  			<el-tooltip class="item" effect="dark" content="非实时，存在延迟性"placement="right">
						    	<i class="el-icon-question"></i>
						    </el-tooltip>
						    <div class="moneycount">￥{{totalmoney.recharge}}</div>
						    <div class="moneyinfo">
						    	<div class="orderinfo">
						    		<span class="title">咔咔豆充值</span>
						    		<span class="money">{{totalmoney.ordinaryrecharge}}</span>
						    		<span>已支付:<b>{{totalmoney.ordinaryrechargenum}}</b>笔</span>
						    		<!-- <span>未支付:<b>0</b>笔</span>
						    		<span>完成率:<b>0</b>%</span> -->
						    	</div>
						    	<div class="orderinfo">
						    		<span class="title">会员充值</span>
						    		<span class="money">{{totalmoney.viprecharge}}</span>
						    		<span>已支付:<b>{{totalmoney.viprechargenum}}</b>笔</span>
						    		<!-- <span>未支付:<b>0</b>笔</span>
						    		<span>完成率:<b>0</b>%</span> -->
						    	</div>
						    </div>
				  		</div>
				 	</div>
				</el-col>
			</el-row>
			<div class="ordertable">
				<div class="tablehead">
					<h3 class="titlehead">
						<i class="el-icon-date"></i>
						近30天充值统计
					</h3>
				</div>
				<table class="datatable">
					<thead>
						<tr>
							<th>日期</th>
							<th>充值金额</th>
							<th>咔咔豆充值</th>
							<th>会员充值</th>
							<th>数据统计</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="data in datalist">
							<td>{{data.impldate}}</td>
							<td>￥{{data.recharge}}</td>
							<td class="tditem">
								<b>￥{{data.ordinaryrecharge}}</b>
								<span>充值笔数:{{data.ordinaryrechargenum}}</span>
							</td>
							<td class="tditem">
								<b>￥{{data.viprecharge}}</b>
								<span>充值笔数:{{data.viprechargenum}}</span>
							</td>
							<td class="tditem">
								<b>{{data.rechargepersonnum}}人</b>
								<span>人均:{{data.percapitarecharge}}</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return {
			datalist:[
				{
					"recharge":0,
					"ordinaryRecharge":0,
					"ordinaryrechargenum":0,
					"viprecharge":0,
					"viprechargenum":0,
					"rechargepersonnum":0,
					"percapitarecharge":0
				},
			],
			monthmoney:
			{
				"recharge":0,
				"ordinaryRecharge":0,
				"ordinaryrechargenum":0,
				"viprecharge":0,
				"viprechargenum":0,
				"rechargepersonnum":0,
				"percapitarecharge":0
			},
			totalmoney:
			{
				"recharge":0,
				"ordinaryRecharge":0,
				"ordinaryrechargenum":0,
				"viprecharge":0,
				"viprechargenum":0,
				"rechargepersonnum":0,
				"percapitarecharge":0
			},
			daymoney:{
				"recharge":0,
				"ordinaryRecharge":0,
				"ordinaryrechargenum":0,
				"viprecharge":0,
				"viprechargenum":0,
				"rechargepersonnum":0,
				"percapitarecharge":0
			},
			timedate:"",
		}
	},
	computed:{
		time:function(){
			if(this.timedate == ''){
				return this.$store.state.userinfo.impldate
			}else{
				return this.timedate;
			}
		}
	},	
	created(){
		this.daydata();
		this.monthdata();
		this.getdata();
	},
	methods:{
		/*近30天数据统计*/
		async getdata(){
			await this.$axios({
				method:"post",
				data:{
					"id":this.$store.state.userinfo.id
				},
				url:"/crxl/qpp/distributor/getOrderTotal/near30Days",
			}).then((res)=>{
				if(res.data.code == 200){
					this.datalist = res.data.obj;
				}else{
					this.$message(res.data.msg);
				}
			})
		},
		/*本月收益和总流水*/
		async monthdata(){
			await this.$axios({
				method:"post",
				data:{
					"id":this.$store.state.userinfo.id
				},
				url:"/crxl/qpp/distributor/getOrderTotal/thisMonth",
			}).then((res)=>{
				if(res.data.code == 200){
					this.monthmoney = res.data.obj[0];
					this.totalmoney = res.data.obj[1];
				}else{
					this.$message(res.data.msg);
				}
			})
		},
		async daydata(){
			await this.$axios({
				method:"post",
				data:{
					"id":this.$store.state.userinfo.id,
					"time":this.time
				},
				url:'/crxl/qpp/distributor/userOrder/getUserOrderWithdrawals'
			}).then((res)=>{
				if(res.data.code == 200){
					this.daymoney = res.data.obj;
					this.timedate = res.data.obj.time;
				}else{
					this.$message(res.data.msg);
				}
			})
		}
	}
}	
</script>
<style lang="stylus">
.databox
	.orderbox
		.el-row
			margin-bottom:20px;
			&:last-child
				margin-bottom:0;
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
						display:flex;
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
</style>