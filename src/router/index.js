// import Vue from 'vue'
// import Router from 'vue-router'
import Vue from 'vue'
import App from '../App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import HelloWorld from '@/components/HelloWorld'
const login = r => require.ensure([], () => r(require('../components/login')), 'login')
const home = r => require.ensure([], () => r(require('../components/home')), 'home')
const noticelist = r => require.ensure([], () => r(require('../components/noticelist')), 'noticelist')
const payinfo = r => require.ensure([], () => r(require('../components/payinfo')), 'payinfo')
const data = r => require.ensure([], () => r(require('../components/data')), 'data')
const cartoonlist = r => require.ensure([], () => r(require('../components/cartoonlist')), 'cartoonlist')
const epslist = r => require.ensure([], () => r(require('../components/epslist')), 'epslist')
const balance = r => require.ensure([], () => r(require('../components/balance')), 'balance')
const detail = r => require.ensure([], () => r(require('../components/detail')), 'detail')
const routes = [
	{
		path: '/',
		component: App,
		redirect:'/login',
		children:[
			{
				path:'login',
				component:login
			},
			{
				path:'home',
				component: home,
				meta: {
		            requireAuth: true,
		        },
				redirect:'/home/noticelist',
				children:[
					{
						path:'noticelist',
						component:noticelist,
						meta: {
				            requireAuth: true,
				        },	
					},
					{
						path:'payinfo',
						component:payinfo,
						meta: {
				            requireAuth: true,
				        },
					},
					{
						path:'data',
						component:data,
						meta: {
				            requireAuth: true,
				        },
					},
					{
						path:'cartoonlist',
						component:cartoonlist,
						meta: {
				            requireAuth: true,
				        },
					},
					{
						path:'epslist',
						component:epslist,
						meta: {
				            requireAuth: true,
				        },
					},
					{
						path:'balance',
						component:balance,
						meta: {
				            requireAuth: true,
				        },
					},
					{
						path:'detail',
						component:detail,
						meta: {
				            requireAuth: true,
				        },
					}
					
				]
			}
		]
	},
	
]
const router = new VueRouter({
    routes
});
export default router;
