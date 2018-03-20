import {
	RECORD_TOKEN,
	RECORD_USERINFO,
  LOGOUT
} from './mutation-types'
import {
  setStore,
  getStore
} from '../config/mUtils'
export default {
	[RECORD_TOKEN](state, info) {
    // state.userInfo = info
    // state.login = true
    state.token = info
    // let validity = 30
    let now = new Date()
    // now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000)
    now.setTime(now.getTime() + 60 * 1000)
    sessionStorage.setItem('token',info)
    document.cookie = 'TOKEN=' + info + ';expires=' + now.toGMTString()
    // document.cookie = 'USERID=' + info.user_id + ';expires=' + now.toGMTString()
    // document.cookie = 'SID=CeRxBZalHSiKuGI49DL2DhXMrOakCzQNcJFg' + ';expires=' + now.toGMTString()
  },
  [RECORD_USERINFO](state,info){
  	state.userinfo = info;
  },
  [LOGOUT](state,info){
    state.token = ''
    sessionStorage.removeItem('token')
  }
}