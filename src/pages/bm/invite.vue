<template>
  <div class="content" v-if="Info">
    <div class="market">
      <div class="market_textDiv">
        <div class="market_text2">{{Info.InvestmentContent}}</div>
      </div>
      <div class="shopDoor">
        <div class="shopDoor_title">商铺户型</div>
        <div class="shopDoor_nr">
          <div class="shopDoor_imgdemo" v-for="(item,index) in Info.picture" :key="index">
            <img class="shopDoor_img" :src="'data:image/png;base64,'+item.ImgBase64" alt>
            <p class="shopDoor_text">{{item.ImgContent}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="call_fixed">
      <div class="callDiv">
        <p class="call_number">{{Info.InvestmentPhone}}</p>
        <a :href="'tel:'+Info.InvestmentPhone"><div class="call_btn">立即拨打</div></a>
      </div>
      <div class="callImg">
        <img class="phone2" src="/static/img/phone2.png" alt>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      Info:null
    }
  },
  async mounted(){
    var rep = await this.$BMAPI.InvestmentApi_GetInvestmentInfo(this.BusinesId);
    if(rep.ret==0)
    {
      this.Info=rep.data[0];
    }
  }
};
</script>
<style scoped>
</style>
