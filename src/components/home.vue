<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				{{collapsed?'':sysName}}
			</el-col>
			<el-col :span="10">
				<!-- <div class="tools" @click.prevent="collapse">
					<i class="fa fa-align-justify"></i>
				</div> -->
			</el-col>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
					<el-dropdown-menu slot="dropdown">
						<!-- <el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item> -->
						<el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<i class="el-icon-arrow-down"></i>
			</el-col>
		</el-col>
		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'">
				<!--导航菜单-->
				<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
					 unique-opened v-show="!collapsed">
					<el-menu-item index="1" @click="notice">
				        <i class="el-icon-phone-outline"></i>
				        <span  >通知公告</span>
			      	</el-menu-item>
			      	<el-menu-item index="2" @click="data">
				        <i class="el-icon-document"></i>
				        <span >数据统计</span>
			      	</el-menu-item>
			      	<el-menu-item index="3" @click="cartoonlist">
				        <i class="el-icon-tickets"></i>
				        <span >漫画列表</span>
			      	</el-menu-item>
			      	<!-- <el-menu-item index="4">
				        <i class="el-icon-share"></i>
				        <span >推广链接</span>
			      	</el-menu-item> -->
			      	<el-menu-item index="4" @click="tobalance">
				        <i class="el-icon-date"></i>
				        <span >我的结算单</span>
			      	</el-menu-item>
			      	<el-menu-item index="5" @click="payinfo">
				        <i class="el-icon-service"></i>
				        <span >收款信息</span>
			      	</el-menu-item>
				</el-menu>
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<!-- <el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col> -->
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>

<script>
import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				sysName:'咔咔漫画分销平台',
				collapsed:false,
				sysUserName: this.$store.state.userinfo.nickname,
				sysUserAvatar: 'http://p0opk9dxj.bkt.clouddn.com/xiaoshuo%20logo.png',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			...mapMutations([
		        'LOGOUT',
		      ]),
			notice:function(){
				this.$router.push('/home/noticelist')
			},
			payinfo:function(){
				this.$router.push('/home/payinfo')
			},
			data:function(){
				this.$router.push('/home/data')
			},
			cartoonlist:function(){
				this.$router.push('/home/cartoonlist')
			},
			tobalance:function(){
				this.$router.push('/home/balance');
			},
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					// sessionStorage.removeItem('token');
					this.LOGOUT();
					_this.$router.push('/login');
				}).catch(() => {

				});


			},
			//折叠导航栏
			collapse:function(){
				this.collapsed=!this.collapsed;
			},
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			}
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}

		}
	}

</script>

<style scoped lang="stylus" scoped>
	.container
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		height:100%;
		.header
			height: 60px;
			line-height: 60px;
			background: baseColor;
			color:#fff;
			.userinfo
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner
					cursor: pointer;
					color:#fff;
					img
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
			.logo
				//width:230px;
				height:60px;
				font-size: 18px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgba(238,241,146,0.3);
				border-right-width: 1px;
				border-right-style: solid;
				img
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				.txt
					color:#fff;
			.logo-width
				width:230px;
			.logo-collapse-width
				width:60px
			.tools
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
		.main
			display: flex;
			// background: #324057;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside
				flex:0 0 230px;
				width: 230px;
				// position: absolute;
				// top: 0px;
				// bottom: 0px;
				.el-menu
					height: 100%;
				.collapsed
					width:60px;
					.item
						position: relative;
					.submenu
						position:absolute;
						top:0px;
						left:60px;
						z-index:99999;
						height:auto;
						display:none;
			.menu-collapsed
				flex:0 0 60px;
				width: 60px;
			.menu-expanded
				flex:0 0 230px;
				width: 230px;
			.content-container
				// background: #f1f2f7;
				flex:1;
				// position: absolute;
				// right: 0px;
				// top: 0px;
				// bottom: 0px;
				// left: 230px;
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container
					//margin-bottom: 15px;
					.title
						width: 200px;
						float: left;
						color: #475669;
					.breadcrumb-inner
						float: right;
				.content-wrapper
					background-color: #fff;
					box-sizing: border-box;
</style>