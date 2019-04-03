<template>
  <div class="content">
    <div class="market" v-if="Info">
      <div class="market_textDiv">
        <p class="market_title">市场介绍</p>
        <div class="market_text">{{Info.MarketContent}}</div>
      </div>
      <img class="market_banner" src="/static/img/market_banner.png" alt>
      <div class="market_contact">
        <div class="market_contactdemo">
          <div class="market_contactDiv">
            <img class="market_address" src="/static/img/address.png" alt>
            <p class="market_contact_text">{{Info.MarketAddress}}</p>
          </div>
        </div>
        <div class="market_contactdemo">
          <div class="market_contactDiv">
            <img class="market_phone" src="/static/img/phone.png" alt>
            <p class="market_contact_text">{{Info.MarketPhone}}</p>
          </div>
        </div>
        <div class="market_contactdemo">
          <div class="market_contactDiv">
            <img class="market_msg" src="/static/img/msg.png" alt>
            <p class="market_contact_text">{{Info.MarketEmail}}</p>
          </div>
          <!-- <p class="market_copy">复制</p> -->
        </div>
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

