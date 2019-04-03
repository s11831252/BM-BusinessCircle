<template>
  <div class="content">
    <div class="News">
      <div v-for="(item,index) in newsList" :key="index" class="News_demo" @click="go({path:'/pages/bm/newsdetail',query:{Id:item.NewPictureID}})">
        <p class="News_title">{{item.Headline}}</p>
        <p class="News_time">{{item.AddTime}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsList:[],
    };
  },
  async mounted(){
     var response =  await this.$BMAPI.NewsApi_GetAllNewsInfo();
     if(response.ret==0)
     {
       this.newsList=response.data;
     }
     
  }
};
</script>
<style scoped>
</style>
