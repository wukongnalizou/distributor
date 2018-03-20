import axios from 'axios'
import store from '../store/index'
import router from '../router/index.js'
import qs from 'qs'
axios.defaults.timeout = 7000;                    // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://192.168.1.39:8081';   // 配置接口地址
axios.defaults.baseURL = 'http://distributor.kakamanhua.com/comicdis';
//添加请求拦截器
axios.interceptors.request.use(
    config => { 
      if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `${store.state.token}`;
        }
      if (config.method === 'post') {
        config.data = qs.stringify(config.data);
      }
      // config.data = qs.stringify(config.data);
      return config;

    },
    error => {
      return Promise.reject(error);
    });
//添加响应拦截器
axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response) {
         // console.log(error.response.status);
            switch (error.response.status) {
                case 401:     
                    router.replace({
                        path: '/login',
                        // query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
      return Promise.reject(error)
});
export default axios;