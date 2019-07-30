import Vue from 'vue'
import Router from 'vue-router'
import bm from './pages/bm/index'
import subject from './pages/bm/subject'
import about from './pages/bm/about'
import invite from './pages/bm/invite'
import suggestion from './pages/bm/suggestion'
import contact from './pages/bm/contact'
import news from './pages/bm/news'
import newsdetail from './pages/bm/newsdetail'



import store from './store'
Vue.use(Router)
var routes = [
    {
        path:'/',
        redirect:'pages/bm/index'
    },
    {
        path: 'pages/bm/index',
        name: 'bm',
        config: {
            navigationBarTitleText: '行业商圈',
            enablePullDownRefresh: true
        },
        alias: '/pages/bm/index',
        component: bm
    },
    {
        path: 'pages/bm/subject',
        name: 'bm-subject',
        config: {
            navigationBarTitleText: '商圈分类',
            enablePullDownRefresh: true
          },
          alias: '/pages/bm/subject',
          component: subject
    },
    {
        path: 'pages/bm/about',
        name: 'bm-about',
        config: {
            navigationBarTitleText: '商圈介绍',
        },
        alias: '/pages/bm/about',
        component: about
    },
    {
        path: 'pages/bm/invite',
        name: 'bm-invite',
        config: {
            navigationBarTitleText: '招商入驻',
        },
        alias: '/pages/bm/invite',
        component: invite
    },
    {
        path: 'pages/bm/suggestion',
        name: 'bm-suggestion',
        config: {
            navigationBarTitleText: '投诉建议',
          },
          alias: '/pages/bm/suggestion',
          component: suggestion
    },
    {
        path: 'pages/bm/contact',
        name: 'bm-contact',
        config: {
            navigationBarTitleText: '联系方式',
          },
          alias: '/pages/bm/contact',
          component: contact
    },
    {
        path: 'pages/bm/news',
        name: 'bm-news',
        config: {
            navigationBarTitleText: '最新动态',
          },
          alias: '/pages/bm/news',
          component: news
    },
    {
        path: 'pages/bm/newsdetail',
        name: 'bm-newsdetail',
        config: {
            navigationBarTitleText: '动态详情',
          },
          alias: '/pages/bm/newsdetail',
          component: newsdetail
    },
]

let router =new Router({routes:routes})
router.beforeEach((to, from, next) => {
    if (!to.matched.some(record => record.meta.noAuth)) {
        //这里判断用户是否登录，验证store中的token是否已登录
        if (!store.getters.Logined) { // 判断当前的token是否存在
            next({
                path: '/pages/index/index',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
  })
export default router
