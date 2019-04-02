<template>
  <div class="index">
    <div class="top">
      <img class="back" src="/static/img/back.png" alt>
      <p class="top_title">投诉建议</p>
    </div>
    <div class="content">
      <div class="advice">
        <div class="advice_top">
          <div class="advice_top_bt">投诉店铺</div>
          <input class="advice_Name" type="text" placeholder="输入店铺名称">
        </div>
        <div class="advice_nr">
          <p class="advice_nrTitle">投诉建议</p>
          <div class="advice_nrEditDiv">
            <div class="advice_nrEdit" contenteditable="true"></div>
            <p class="advice_nrHint">500</p>
          </div>
        </div>
        <div class="advice_submit">提交</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>
