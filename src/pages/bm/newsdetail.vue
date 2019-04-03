<template>
  <div class="content">
    <div class="dynamic" v-if="Info">
      <div class="dynamic_top">
        <div class="dynamic_titleEdit" v-text="Info.Headline"></div>
        <p class="dynamic_time">{{Info.AddTime}}</p>
      </div>
      <div class="dynamic_nrEdit" v-text="Info.NewContent"></div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      NewPictureID:"",
      Info:null
    }
  },
  async mounted(){
    if(this.$route.query.Id)
    {
      this.NewPictureID=this.$route.query.Id;
      var rep = await this.$BMAPI.NewsApi_GetNewsInfo(this.NewPictureID)
      if(rep.ret==0)
      {
        this.Info=rep.data[0];
      }
    }
  }
};
</script>
<style scoped>
</style>
