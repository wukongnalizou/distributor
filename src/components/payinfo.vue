<template>
	<div class="payinfo">
		<el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
		  <el-tab-pane label="收款信息" name="payinfo">
		  	<div class="payinfobox">
		  		<div class="payinfoalert">
		  			<i class="el-icon-info"></i>
		  			<span>如需修改请联系渠道</span>
		  		</div>
		  		<div class="payinfoconbox">
			  		<div class="payinfocon">
			  			<label>收款方式</label>
			  			<div class="">{{distributor.paytype}}</div>
			  		</div>
			  		<div class="payinfocon">
			  			<label>账号</label>
			  			<div class="">{{distributor.accountnum}}</div>
			  		</div>
			  		<div class="payinfocon">
			  			<label>姓名</label>
			  			<div class="">{{distributor.accountname}}</div>
			  		</div>
			  	</div>	
		  	</div>
		  </el-tab-pane>
		  <el-tab-pane label="个人资料" name="userinfo">
		  	<div class="userinfobox">
		  		<div class="userinfoconbox">
		  			<!-- <div class="userinfocon">
		  				<label>账号类型</label>
		  				<div class="">代理</div>
		  			</div> -->
		  			<div class="userinfocon">
		  				<label>昵称</label>
		  				<div class="">{{distributor.nickname}}</div>
		  			</div>
		  			<div class="userinfocon">
		  				<label>用户名</label>
		  				<div class="">{{distributor.username}}</div>
		  			</div>
		  			<div class="userinfocon">
		  				<label>邮箱</label>
		  				<div class="">{{distributor.email}}</div>
		  			</div>
		  			<div class="userinfocon">
		  				<label>手机</label>
		  				<div class="">{{distributor.phone}}</div>
		  			</div>
		  		</div>
		  	</div>
		  </el-tab-pane>
		  <el-tab-pane label="修改密码" name="updatepass">
		  	<div class="updatepassbox">
		  		<div class="updatepassconbox">
			  		<div class="updateinfocon">
			  			<label>当前密码</label>
			  			<div class="">
			  				<input type="password" v-model="oldpassword">
			  			</div>
			  		</div>
			  		<div class="updateinfocon">
			  			<label>新密码</label>
			  			<div class="">
			  				<input type="password" v-model="newpassword">
			  			</div>
			  		</div>
			  		<div class="updateinfocon">
			  			<label>新密码确认</label>
			  			<div class="">
			  				<input type="password" v-model="morepassword">
			  			</div>
			  		</div>
			  	</div>
			  	<el-button type="primary" size="small" @click="updatepwd">确定修改</el-button>
		  	</div>
		  </el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
export default{
	data(){
		return {
			activeName: 'payinfo',
			oldpassword:'',
			newpassword:'',
			morepassword:'',
			distributor:this.$store.state.userinfo,
		}
	},
	methods:{
		handleClick(tab){
			console.log(tab.name)
		},
		updatepwd:function(){
			// console.log(sessionStorage.getItem('token'))
			this.$axios({
				method: "post",
		        data:{
		        	"userPwd":this.oldpassword,
		        	"newUserPwd":this.newpassword,
		        	"id":this.$store.state.userinfo.id
		        },
		        url: "/crxl/qpp/distributor/updatePwd"
			}).then((res)=>{
				if(res.data.code == 200){
					this.$message({
			          message: res.data.msg,
			          type: 'success'
			        });
			        this.oldpassword = '';
			        this.newpassword = '';
			        this.morepassword = '';
				}else{
					this.$message(res.data.msg);
				}
				
			})
		}
	}
}	
</script>
<style lang="stylus">
.payinfo
	.payinfobox
		.payinfoalert
			width:100%;
			padding:15px;
			border-color:#bce8f1;
			background-color:#d9edf7;
			color:#31708f;
			span
				font-size:14px;
		.payinfoconbox
			padding-bottom:50px;
			.payinfocon
				margin-top:20px;
				margin-left:150px;
				margin-bottom:15px;
				line-height:1.5;
				font-size:14px;
				display:flex;
				label
					width:100px;
					text-align:right;
				div
					margin-left:20px;			
	.userinfobox
		.userinfoconbox
			padding-bottom:50px;
			.userinfocon
				margin-top:20px;
				margin-left:150px;
				margin-bottom:15px;
				line-height:1.5;
				font-size:14px;
				display:flex;
				label
					width:100px;
					text-align:right;
				div
					margin-left:20px;
	.updatepassbox
		.updatepassconbox
			padding-bottom:50px;
			.updateinfocon
				margin-top:20px;
				margin-left:150px;
				margin-bottom:15px;
				line-height:1.5;
				font-size:14px;
				display:flex;
				label
					width:100px;
					text-align:right;
				div
					margin-left:20px;
					input
						border:1px solid #ccc;
						padding:5px;							
</style>