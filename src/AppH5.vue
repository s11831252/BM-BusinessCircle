<template>
    <div id="app">
      <div class="index">
        <div class="top">
            <img class="back" src="img/back.png" alt="" />
            <p class="top_title">招商入驻</p>
        </div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>

export default {
  computed:{
    Enable(){
      var that =this;
      var nowRouteConfig= this.$router.options.routes.find((item)=>{
        return  item.alias==that.$route.path;
      });//此处判断当前route是否启动导航
      return nowRouteConfig&&nowRouteConfig.config&&nowRouteConfig.config.EnableNav;
    }
  },
  components: {
  },
};
</script>
<style>
@import url('./assets/style.css');
@import url('./assets/global.css');
@import url('./assets/iconfont.less');
@import url('./components/Toast/toast.css');
#app{
  margin-bottom: 45px;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
body{
  height: 100%;
  padding: 0;
  margin: auto 0;
  
}
</style>