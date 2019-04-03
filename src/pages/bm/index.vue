<template>
    <div class="content">
      <div class="Industrial">
        <div class="Ibanner">
          <img class="Ibanner_img" src="/static/img/banner.png" alt>
        </div>
        <div class="Imenu">
          <div class="Imenu_demo"><a @click="go({path:'/pages/bm/about'})" >市场介绍</a></div>
          <div class="Imenu_demo"><a @click="go({path:'/pages/bm/invite'})" >招商入驻</a></div>
          <div class="Imenu_demo"><a @click="go({path:'/pages/bm/suggestion'})" >投诉建议</a></div>
          <div class="Imenu_demo"><a @click="go({path:'/pages/bm/contact'})" >联系方式</a></div>
        </div>
        <div class="classify">
          <div class="classify_demo" v-for="(item,index) in BusinesType" :key="index" @click="go({path:'/pages/bm/subject',query:{title:item.BusinesScircleName,MainType:item.TypeId}})">
            <div class="calssify_iconDiv">
              <img class="classify_icon1" :src="'data:image/png;base64,'+item.BusinesScircleSicon" alt>
            </div>
            <p class="classify_p">{{item.BusinesScircleName}}</p>
          </div>
        </div>
        <div class="recentNew">
          <div class="recentNew_titleDiv">
            <p class="recentNew_p">最新动态</p>
            <div class="recentNew_title_right">
              <p class="recentNew_right_p"><a @click="go({path:'/pages/bm/news'})">更多</a></p>
              <img class="next" src="/static/img/next.png" alt>
            </div>
          </div>
          <div class="recentNew_nr">
            <div class="recent_textDiv" v-for="(item,index) in newsList" :key="index" @click="go({path:'/pages/bm/newsdetail',query:{Id:item.NewPictureID}})">
              <p class="recent_text">{{item.Headline}}</p>
              <p class="recent_time">{{item.AddTime}}</p>
            </div>
          </div>
        </div>
        <div class="startShop">
          <div class="startShop_title">商家店铺</div>
          <div class="startShop_demo" v-for="(item,index) in ShopList" :key="index" @click="goShoppingInfo(item.sId)">
            <img class="startShop_img" :src="ImageBaseUrl+item.sLogo" alt>
            <div class="startShop_zwDiv">
              <div class="startShop_info">
                <div class="startShop_nameDiv">
                  <div class="startShop_label">明星店铺</div>
                  <p class="startShop_name">{{item.sName}}</p>
                </div>
                <div class="startShop_score">
                  店铺综合评分：
                  <b>{{item.StoreScore}}</b>
                </div>
                <p class="startShop_theMain">主营: {{item.StoreType}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      newsList:[],
      BusinesType:[],
      ShopList:[],
    };
  },
  async mounted(){
     var response =  await this.$BMAPI.NewsApi_GetAllNewsInfo(this.BusinesId);
     if(response.ret==0)
     {
       this.newsList=response.data;
     }
     var response2 = await this.$BMAPI.ShopTypeApi_GeyBusinesScircleeTypeInfo(this.BusinesId);
     if(response2.ret==0)
     {
       this.BusinesType=response2.data;
     }

     var rep = await this. $BMAPI.YZShopType_GetScircleeInfo(this.BusinesId);
     if(rep.ret==0)
     {
       this.ShopList=rep.data;
     }
  }
};
</script>
<style>
</style>
