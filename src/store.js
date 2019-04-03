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
        SingleTicket: "27C4832420C394CB81E2D4E417B8DE8BE3ABFA60572CDA2E39EE0F291A6D4D102B5DF84149FF95889BD069D60C896487A17C9D3343890FB9571BAC4F07A31B179B0ACE7B3F9BEED5793794E43729F754BDBD0BAC59A9FEB94DF737934DCC2FADCF5056E8764E8BB6061229F06558BB73C967A0051B3173FA87847A6EA26FC553DEE6DCC45BE6AE3D416464A340863E28C69FB1F7",
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