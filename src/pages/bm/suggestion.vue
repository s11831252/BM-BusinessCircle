<template>
  <div class="content">
    <div class="advice">
      <div class="advice_top">
        <div class="advice_top_bt">投诉店铺</div>
        <input class="advice_Name" v-model="Info.SuggestionStore" type="text" placeholder="输入店铺名称">
      </div>
      <div class="advice_nr">
        <p class="advice_nrTitle">投诉建议</p>
        <div class="advice_nrEditDiv">
          <div class="advice_nrEdit" v-model="Info.SuggestionContent" contenteditable="true"></div>
          <p class="advice_nrHint">500</p>
        </div>
      </div>
      <div class="advice_submit" @click="postInfo">提交</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Info: {
        SuggestionName: "",
        SuggestionStore: "",
        SuggestionContent: ""
      }
    };
  },
  methods:{
    async postInfo(){
      var rep = await this.$BMAPI.SuggestionApi_FirstPictureInfo(this.Info)
      if(rep.ret==0)
      {
        this.alert("提交建议成功");
      }
    }
  }
};
</script>
<style scoped>
</style>
