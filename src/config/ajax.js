import axios from './axios.js'
// export const requestLogin = params => { return axios.post('data.json', params).then(res => res.data); };

// export const requestLogin = params => { return axios.get('data.json', { params: params }); };
export const requestLogin = params => { return axios.get('http://192.168.1.39:8081/crxl/qpp/distributor/login', { params: params }); };