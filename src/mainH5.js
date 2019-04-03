import Vue from 'vue'
import App from './AppH5'
import store from './store'
import router from './routerH5'
import UJAPI from "./api/UJAPI"
import BMAPI from "./api/BMAPI"
import fts from './utils/autorem'

import Toast from './components/Toast';
Vue.use(Toast);

Vue.prototype.$UJAPI = UJAPI; //在实例中用$UJAPI调用UJAPI封装好的RestAPI
Vue.prototype.$BMAPI = BMAPI; //在实例中用$ShoppingAPI调用ShoppingAPI.js封装好的RestAPI
Vue.mixin({
  computed: {
    isMP() {
      return false;
    },
    BusinesId() {
      return this.$route.query.bId || "3d185eeb-066c-44af-bf6e-f3d5b42e9e6b";
    },
    ImageBaseUrl() {
      return process.env.NODE_ENV == 'development'?"http://192.168.0.119:802/shopping/shopimages":"http://120.76.96.128:802/shopping/shopimages";
    }
  },
  methods: {
    go: function (path) {
      path.query=path.query||{}
      path.query.bId=this.BusinesId;
      this.$router.push(path);
    },
    //跳转商品
    goGoodsInfo(sId, goodsId, sName) {
      let win = window;
      if (win.native && win.native.jumpToMarketStore) {
        win.native.jumpToMarketProduct(sId, goodsId);
      }
      else if (win.webkit && win.webkit.messageHandlers && win.webkit.messageHandlers.JumTo.postMessage) {
        win.webkit.messageHandlers.JumTo.postMessage({ Type: 5, Name: "商品详情", StoryboardName: "Storyboard", NameOrUrl: "ShopGoodsDetailViewController", Parameter: { "_gId": goodsId, "_sId": sId, "_sName": sName }, AppStoreUrl: undefined });
      } else {
        this.go({ path: '/pages/shop/detail', query: { sId: sId, gId: goodsId } })
      }
    },
    goShoppingInfo(sId) {
      let win = window;
      if (win.native && win.native.jumpToMarketStore) {
        win.native.jumpToMarketStore(sId);
      }
      else if (win.webkit && win.webkit.messageHandlers && win.webkit.messageHandlers.JumTo.postMessage) {
        win.webkit.messageHandlers.JumTo.postMessage({ Type: 5, Name: "商品主页", StoryboardName: "Storyboard", NameOrUrl: "HomeShopViewController", Parameter: { "_ShopId": sId }, AppStoreUrl: undefined });
      } else {
        this.go({ path: '/pages/shop/index', query: { sId: sId } })
      }
    },
    back: function () {
      if (this.$route.fullPath=="/pages/bm/index"||this.$route.fullPath=="/") {
        window.location.href="http://close";
        return false
      } else {
        this.$router.back();
        return
      }
      //上面都没执行就说明卡在当前页不是最后一条， histroy记录数量大于1，又没有回退记录，只能返回首页，
      //如果上面都执行了 页面都跳走了，这个也就不用管了   
      setTimeout(() => {
        this.go({path:'/pages/bm/index'})
      }, 500)

    },
    alert(title) {
      this.$toast.center(title);
    },
  }
});
Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
});
window.$app = app; //vue实例全局变量
