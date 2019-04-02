import Vue from 'vue';
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { debug } from 'util';

Vue.use(Vuex);
export default new Vuex.Store({//store对象
  modules: {
    User: {
      state: {
        UserInfo: {},
        SingleTicket: "",
      },
      getters:{
        Logined: state =>{
          return state.SingleTicket&&state.SingleTicket.length>0;
        }
      },
      mutations: {
        Login(state, payload) {
          // 变更状态
          state.SingleTicket = payload.Ticket;
        },
        GetUserInfo(state, UserInfo) {
          state.UserInfo = UserInfo;
        },
      }
    }
  }, plugins: [//vuex持久化
    mpvue_Mode === 'WX' ? createPersistedState({
      storage: {
        getItem: key => wx.getStorageSync(key),
        setItem: (key, value) => wx.setStorageSync(key, value),
        removeItem: key => { }
      }
    }) : createPersistedState()
  ]
})