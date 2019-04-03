<template>
  <div class="content">
    <div class="ContactUs" v-if="Info">
      <img class="map" src="/static/img/map.png" alt>
      <div class="ContactUs_nr">
        <div class="ContactUs_title">广西工业器材城</div>
        <div class="Contact_mainDiv">
          <div class="ContactAddress_demo">
            <img class="Contact_addressIcon" :src="Info.LocationPicture" alt>
            <p class="CintactAddress_p">{{Info.MarketAddress}}</p>
          </div>
          <div class="ContactAddress_demo">
            <img class="Contact_addressIcon2" src="/static/img/phone.png" alt>
            <p class="CintactAddress_p">{{Info.MarketPhone}}</p>
          </div>
        </div>
        <img class="gohereIcon" src="/static/img/gohereIcon.png" alt>
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
     var response = await this.$BMAPI.MarketApi_GetInvestmentInfo(this.BusinesId);
     if(response.ret==0)
     {
       this.Info=response.data[0];
     }
  }
};
</script>
<style scoped>
</style>
