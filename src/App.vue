<script>

export default {
  created () {
    // `this` 指向 vm 实例
    //debugger
   // console.log('this is: ' + this, 'vue触发的 created')
  },
  mounted(){
    //同上
  },
  onShow () {
    // `this` 指向 vm 实例
    //debugger
   // console.log('this is: ' + this, '小程序触发的 onshow')
  },
  onLoad(){
    //同上
  },
}
</script>
<style>

/* @import url('./assets/global.css'); */
/* @import url('./assets/style.css'); */
/* @import url('./assets/iconfont.less'); */

/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
/*总样式*/
body, div, p, img, a, ul, li, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  border: 0;
}

a {
  text-decoration: none;
  /*去掉下划线*/
}

ul, li {
  list-style-type: none;
  /*去掉列表类型样式（ul，li自带的小圆点）*/
}

.f-l {
  float: left;
  /*左浮动*/
}

.f-r {
  float: right;
  /*右浮动*/
}

body {
  background-color: #ebebeb;
}

.index .top, page .top {
  width: 100%;
  background-color: #12b7f5;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  padding-right: 0.6rem;
}

.index .top .back, page .top .back {
  width: 0.23rem;
  height: 0.44rem;
  float: left;
  padding: 0.42rem 0.6rem;
}

.index .top .top_title, page .top .top_title {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;
  color: #ffffff;
  font-size: 0.46rem;
  line-height: 1.28rem;
  text-align: center;
}

.index .content, page .content {
  /* position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 1.28rem;
  overflow: auto; */
}

.index .content .Industrial, page .content .Industrial {
  background-color: #ffffff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
}

.index .content .Industrial .Ibanner .Ibanner_img, page .content .Industrial .Ibanner .Ibanner_img {
  width: 10.8rem;
  height: 4.01rem;
  display: block;
}

.index .content .Industrial .Imenu, page .content .Industrial .Imenu {
  margin: 0.36rem 0.38rem 0.22rem 0.38rem;
  background-color: #4ea3f2;
  border-radius: 0.5rem;
  padding: 0.3rem 0.13rem;
  overflow: hidden;
  -webkit-box-shadow: 0rem 0.05rem 0.2rem #4ea3f2;
          box-shadow: 0rem 0.05rem 0.2rem #4ea3f2;
}

.index .content .Industrial .Imenu .Imenu_demo:last-child, page .content .Industrial .Imenu .Imenu_demo:last-child {
  border-right: 0;
}

.index .content .Industrial .Imenu .Imenu_demo, page .content .Industrial .Imenu .Imenu_demo {
  width: 2.43rem;
  float: left;
  line-height: 0.45rem;
  border-right: 0.02rem solid #ffffff;
  color: #ffffff;
  font-size: 0.34rem;
  text-align: center;
}

.index .content .Industrial .classify, page .content .Industrial .classify {
  border-bottom: 0.2rem solid #eeeeee;
  overflow: hidden;
}

.index .content .Industrial .classify .classify_demo, page .content .Industrial .classify .classify_demo {
  float: left;
  width: 2.67rem;
  border-right: 0.03rem solid #eeeeee;
  border-bottom: 0.03rem solid #eeeeee;
  height: 2.58rem;
}

.index .content .Industrial .classify .classify_demo .calssify_iconDiv, page .content .Industrial .classify .classify_demo .calssify_iconDiv {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding-top: 0.4rem;
  height: 1rem;
}

.index .content .Industrial .classify .classify_demo .calssify_iconDiv .classify_icon1, page .content .Industrial .classify .classify_demo .calssify_iconDiv .classify_icon1 {
  display: block;
  width: 0.6rem;
  height: 0.58rem;
}

.index .content .Industrial .classify .classify_demo .calssify_iconDiv .classify_icon2, page .content .Industrial .classify .classify_demo .calssify_iconDiv .classify_icon2 {
  display: block;
  width: 0.59rem;
  height: 0.59rem;
}

.index .content .Industrial .classify .classify_demo .calssify_iconDiv .classify_icon3, page .content .Industrial .classify .classify_demo .calssify_iconDiv .classify_icon3 {
  display: block;
  width: 0.58rem;
  height: 0.58rem;
}

.index .content .Industrial .classify .classify_demo .calssify_iconDiv .classify_icon4, page .content .Industrial .classify .classify_demo .calssify_iconDiv .classify_icon4 {
  display: block;
  width: 0.68rem;
  height: 0.58rem;
}

.index .content .Industrial .classify .classify_demo .calssify_iconDiv .classify_icon5, page .content .Industrial .classify .classify_demo .calssify_iconDiv .classify_icon5 {
  display: block;
  width: 0.59rem;
  height: 0.46rem;
}

.index .content .Industrial .classify .classify_demo .calssify_iconDiv .classify_icon6, page .content .Industrial .classify .classify_demo .calssify_iconDiv .classify_icon6 {
  display: block;
  width: 0.49rem;
  height: 0.46rem;
}

.index .content .Industrial .classify .classify_demo .calssify_iconDiv .classify_icon7, page .content .Industrial .classify .classify_demo .calssify_iconDiv .classify_icon7 {
  display: block;
  width: 0.61rem;
  height: 0.62rem;
}

.index .content .Industrial .classify .classify_demo .calssify_iconDiv .classify_icon8, page .content .Industrial .classify .classify_demo .calssify_iconDiv .classify_icon8 {
  display: block;
  width: 0.52rem;
  height: 0.52rem;
}

.index .content .Industrial .classify .classify_demo .classify_p, page .content .Industrial .classify .classify_demo .classify_p {
  color: #4d4d4d;
  font-size: 0.34rem;
  text-align: center;
}

.index .content .Industrial .recentNew, page .content .Industrial .recentNew {
  padding: 0 0.78rem 0 0.6rem;
  border-bottom: 0.2rem solid #eeeeee;
}

.index .content .Industrial .recentNew .recentNew_titleDiv, page .content .Industrial .recentNew .recentNew_titleDiv {
  overflow: hidden;
  border-bottom: solid 0.01rem #e8e7e7;
}

.index .content .Industrial .recentNew .recentNew_titleDiv .recentNew_p, page .content .Industrial .recentNew .recentNew_titleDiv .recentNew_p {
  padding-left: 0.05rem;
  float: left;
  color: #333333;
  font-size: 0.44rem;
  line-height: 1.5rem;
}

.index .content .Industrial .recentNew .recentNew_titleDiv .recentNew_title_right, page .content .Industrial .recentNew .recentNew_titleDiv .recentNew_title_right {
  float: right;
  overflow: hidden;
}

.index .content .Industrial .recentNew .recentNew_titleDiv .recentNew_title_right .recentNew_right_p, page .content .Industrial .recentNew .recentNew_titleDiv .recentNew_title_right .recentNew_right_p {
  color: #666666;
  font-size: 0.38rem;
  line-height: 1.5rem;
  float: left;
}

.index .content .Industrial .recentNew .recentNew_titleDiv .recentNew_title_right .next, page .content .Industrial .recentNew .recentNew_titleDiv .recentNew_title_right .next {
  float: left;
  width: 0.14rem;
  height: 0.27rem;
  margin-left: 0.4rem;
  margin-top: 0.58rem;
}

.index .content .Industrial .recentNew .recentNew_nr, page .content .Industrial .recentNew .recentNew_nr {
  padding-bottom: 0.5rem;
  width: 100%;
}

.index .content .Industrial .recentNew .recentNew_nr .recent_textDiv, page .content .Industrial .recentNew .recentNew_nr .recent_textDiv {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  border-bottom: solid 0.02rem #e8e7e7;
}

.index .content .Industrial .recentNew .recentNew_nr .recent_textDiv .recent_text, page .content .Industrial .recentNew .recentNew_nr .recent_textDiv .recent_text {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #333333;
  font-size: 0.34rem;
  line-height: 0.8rem;
}

.index .content .Industrial .recentNew .recentNew_nr .recent_textDiv .recent_time, page .content .Industrial .recentNew .recentNew_nr .recent_textDiv .recent_time {
  color: #333333;
  font-size: 0.34rem;
  margin-left: 0.2rem;
  line-height: 0.8rem;
}

.index .content .Industrial .startShop, page .content .Industrial .startShop {
  padding: 0 0.6rem;
  padding-bottom: 0.14rem;
}

.index .content .Industrial .startShop .startShop_title, page .content .Industrial .startShop .startShop_title {
  color: #333333;
  font-size: 0.44rem;
  padding: 0.49rem 0.34rem 0.58rem 0.34rem;
  border-bottom: solid 0.02rem #e8e7e7;
}

.index .content .Industrial .startShop .startShop_demo:last-child, page .content .Industrial .startShop .startShop_demo:last-child {
  border: 0;
}

.index .content .Industrial .startShop .startShop_demo, page .content .Industrial .startShop .startShop_demo {
  overflow: hidden;
  border-bottom: solid 0.02rem #e8e7e7;
  padding: 0.34rem 0;
}

.index .content .Industrial .startShop .startShop_demo .startShop_img, page .content .Industrial .startShop .startShop_demo .startShop_img {
  float: left;
  width: 1.92rem;
  height: 1.9rem;
  border-radius: 0.08rem;
  margin-right: 0.23rem;
  margin-top: 0.04rem;
}

.index .content .Industrial .startShop .startShop_demo .startShop_zwDiv, page .content .Industrial .startShop .startShop_demo .startShop_zwDiv {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.index .content .Industrial .startShop .startShop_demo .startShop_zwDiv .startShop_info, page .content .Industrial .startShop .startShop_demo .startShop_zwDiv .startShop_info {
  min-height: 1.4rem;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.index .content .Industrial .startShop .startShop_demo .startShop_zwDiv .startShop_info .startShop_nameDiv, page .content .Industrial .startShop .startShop_demo .startShop_zwDiv .startShop_info .startShop_nameDiv {
  margin-bottom: 0.26rem;
}

.index .content .Industrial .startShop .startShop_demo .startShop_zwDiv .startShop_info .startShop_nameDiv .startShop_label, page .content .Industrial .startShop .startShop_demo .startShop_zwDiv .startShop_info .startShop_nameDiv .startShop_label {
  float: left;
  padding: 0 0.12rem;
  line-height: 0.44rem;
  background-color: #ffbf11;
  border-radius: 0.04rem;
  color: #ffffff;
  font-size: 0.32rem;
  margin-right: 0.21rem;
  margin-top: 0.06rem;
}

.index .content .Industrial .startShop .startShop_demo .startShop_zwDiv .startShop_info .startShop_nameDiv .startShop_name, page .content .Industrial .startShop .startShop_demo .startShop_zwDiv .startShop_info .startShop_nameDiv .startShop_name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #1a1a1a;
  font-size: 0.38rem;
}

.index .content .Industrial .startShop .startShop_demo .startShop_zwDiv .startShop_info .startShop_score, page .content .Industrial .startShop .startShop_demo .startShop_zwDiv .startShop_info .startShop_score {
  color: #4d4d4d;
  font-size: 0.33rem;
  margin-bottom: 0.28rem;
}

.index .content .Industrial .startShop .startShop_demo .startShop_zwDiv .startShop_info .startShop_score b, page .content .Industrial .startShop .startShop_demo .startShop_zwDiv .startShop_info .startShop_score b {
  font-weight: normal;
  color: #ee254b;
}

.index .content .Industrial .startShop .startShop_demo .startShop_zwDiv .startShop_info .startShop_theMain, page .content .Industrial .startShop .startShop_demo .startShop_zwDiv .startShop_info .startShop_theMain {
  color: #999999;
  font-size: 0.27rem;
}

.index .content .market, page .content .market {
  padding: 0 0.32rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
  background-color: #ffffff;
}

.index .content .market .market_textDiv, page .content .market .market_textDiv {
  padding-top: 0.68rem;
}

.index .content .market .market_textDiv .market_title, page .content .market .market_textDiv .market_title {
  color: #333333;
  font-size: 0.46rem;
  padding-bottom: 0.53rem;
}

.index .content .market .market_textDiv .market_text, .index .content .market .market_textDiv .market_text2, page .content .market .market_textDiv .market_text, page .content .market .market_textDiv .market_text2 {
  color: #666666;
  font-size: 0.37rem;
  line-height: 0.56rem;
  padding-bottom: 0.55rem;
  word-break: break-all;
  word-wrap: break-word;
}

.index .content .market .market_textDiv .market_text2, page .content .market .market_textDiv .market_text2 {
  padding: 0 0.38rem;
}

.index .content .market .market_banner, page .content .market .market_banner {
  padding: 0 0.11rem;
  display: block;
  width: 9.94rem;
  height: 5.19rem;
}

.index .content .market .market_contact, page .content .market .market_contact {
  padding: 0.4rem 0.12rem;
}

.index .content .market .market_contact .market_contactdemo, page .content .market .market_contact .market_contactdemo {
  overflow: hidden;
  margin-bottom: 0.36rem;
  position: relative;
}

.index .content .market .market_contact .market_contactdemo .market_contactDiv, page .content .market .market_contact .market_contactdemo .market_contactDiv {
  float: left;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.index .content .market .market_contact .market_contactdemo .market_contactDiv .market_address, page .content .market .market_contact .market_contactdemo .market_contactDiv .market_address {
  float: left;
  width: 0.35rem;
  height: 0.44rem;
  margin-right: 0.3rem;
  margin-top: 0.07rem;
}

.index .content .market .market_contact .market_contactdemo .market_contactDiv .market_phone, page .content .market .market_contact .market_contactdemo .market_contactDiv .market_phone {
  float: left;
  width: 0.35rem;
  height: 0.41rem;
  margin-right: 0.31rem;
  margin-top: 0.08rem;
}

.index .content .market .market_contact .market_contactdemo .market_contactDiv .market_msg, page .content .market .market_contact .market_contactdemo .market_contactDiv .market_msg {
  float: left;
  width: 0.45rem;
  height: 0.34rem;
  margin-right: 0.26rem;
  margin-top: 0.09rem;
}

.index .content .market .market_contact .market_contactdemo .market_contactDiv .market_contact_text, page .content .market .market_contact .market_contactdemo .market_contactDiv .market_contact_text {
  float: left;
  color: #333333;
  font-size: 0.4rem;
}

.index .content .market .market_contact .market_contactdemo .market_copy, page .content .market .market_contact .market_contactdemo .market_copy {
  position: absolute;
  right: 0;
  top: 0;
  float: right;
  color: #12b7f5;
  font-size: 0.4rem;
}

.index .content .market .shopDoor, page .content .market .shopDoor {
  padding: 0.54rem 0.47rem 0 0.47rem;
}

.index .content .market .shopDoor .shopDoor_title, page .content .market .shopDoor .shopDoor_title {
  color: #333333;
  font-size: 0.43rem;
  margin-bottom: 0.44rem;
}

.index .content .market .shopDoor .shopDoor_nr, page .content .market .shopDoor .shopDoor_nr {
  overflow: hidden;
}

.index .content .market .shopDoor .shopDoor_nr .shopDoor_imgdemo:nth-child(3n), page .content .market .shopDoor .shopDoor_nr .shopDoor_imgdemo:nth-child(3n) {
  margin-right: 0rem;
}

.index .content .market .shopDoor .shopDoor_nr .shopDoor_imgdemo, page .content .market .shopDoor .shopDoor_nr .shopDoor_imgdemo {
  float: left;
  overflow: hidden;
  margin-right: 0.17rem;
  margin-bottom: 0.59rem;
}

.index .content .market .shopDoor .shopDoor_nr .shopDoor_imgdemo .shopDoor_img, page .content .market .shopDoor .shopDoor_nr .shopDoor_imgdemo .shopDoor_img {
  display: block;
  margin-bottom: 0.19rem;
  width: 2.96rem;
  height: 2.96rem;
  -webkit-box-shadow: 0 0.03rem 0.07rem 0 rgba(114, 119, 121, 0.28);
          box-shadow: 0 0.03rem 0.07rem 0 rgba(114, 119, 121, 0.28);
}

.index .content .market .shopDoor .shopDoor_nr .shopDoor_imgdemo .shopDoor_text, page .content .market .shopDoor .shopDoor_nr .shopDoor_imgdemo .shopDoor_text {
  color: #333333;
  font-size: 0.35rem;
  text-align: center;
}

.index .content .call_fixed, page .content .call_fixed {
  background-color: #f7f7f7;
  border-top: 0.01rem solid #e6e6e6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

.index .content .call_fixed .callDiv, page .content .call_fixed .callDiv {
  overflow: hidden;
  padding: 0 0.42rem;
}

.index .content .call_fixed .callDiv .call_number, page .content .call_fixed .callDiv .call_number {
  color: #191919;
  font-size: 0.46rem;
  margin-left: 2.2rem;
  padding: 0.3rem 0;
  float: left;
}

.index .content .call_fixed .callDiv .call_btn, page .content .call_fixed .callDiv .call_btn {
  color: #ffffff;
  font-size: 0.46rem;
  text-align: center;
  background-color: #12b7f5;
  border-radius: 0.1rem;
  padding: 0 0.4rem;
  line-height: 1.13rem;
  margin: 0.14rem 0;
  float: right;
  padding: 0 0.6rem;
}

.index .content .call_fixed .callImg, page .content .call_fixed .callImg {
  position: absolute;
  left: 0.4rem;
  top: -0.55rem;
  border: solid 0.4rem #f7f7f7;
  border-radius: 1rem;
}

.index .content .call_fixed .callImg .phone2, page .content .call_fixed .callImg .phone2 {
  width: 1.13rem;
  height: 1.13rem;
  display: block;
}

.index .content .dynamic, page .content .dynamic {
  padding: 0 0.4rem;
  background-color: #ffffff;
}

.index .content .dynamic .dynamic_top, page .content .dynamic .dynamic_top {
  border-bottom: 0.03rem solid #ebebeb;
  padding-top: 0.61rem;
}

.index .content .dynamic .dynamic_top .dynamic_titleEdit, page .content .dynamic .dynamic_top .dynamic_titleEdit {
  margin-bottom: 0.4rem;
  color: #363636;
  font-size: 0.48rem;
  line-height: 0.72rem;
  border: 0;
  outline: 0;
  word-break: break-all;
  word-wrap: break-word;
}

.index .content .dynamic .dynamic_top .dynamic_titleEdit:empty:before, page .content .dynamic .dynamic_top .dynamic_titleEdit:empty:before {
  content: "这里是一个动态的标题内容";
}

.index .content .dynamic .dynamic_top .dynamic_titleEdit:focus:before, page .content .dynamic .dynamic_top .dynamic_titleEdit:focus:before {
  content: none;
}

.index .content .dynamic .dynamic_top .dynamic_time, page .content .dynamic .dynamic_top .dynamic_time {
  color: #333333;
  font-size: 0.32rem;
  margin-bottom: 0.15rem;
}

.index .content .dynamic .dynamic_nrEdit, page .content .dynamic .dynamic_nrEdit {
  padding: 0.39rem 0;
  color: #333333;
  font-size: 0.4rem;
  line-height: 0.6rem;
  border: 0;
  outline: 0;
  word-wrap: break-word;
  word-break: break-all;
  min-height: 9rem;
}

.index .content .dynamic .dynamic_nrEdit:empty:before, page .content .dynamic .dynamic_nrEdit:empty:before {
  content: "动态的正文内容显示在这里，最多只能写500个字";
}

.index .content .dynamic .dynamic_nrEdit:focus:before, page .content .dynamic .dynamic_nrEdit:focus:before {
  content: none;
}

.index .content .News, page .content .News {
  margin-top: 0.3rem;
  padding: 0.43rem 0.33rem 0rem 0.47rem;
  background-color: #ffffff;
}

.index .content .News .News_demo, page .content .News .News_demo {
  border-top: solid 0.02rem #f2f2f2;
  padding-right: 0.67rem;
  padding-left: 0.14rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.index .content .News .News_demo .News_title, page .content .News .News_demo .News_title {
  color: #333333;
  font-size: 0.36rem;
  line-height: 1.02rem;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.index .content .News .News_demo .News_time, page .content .News .News_demo .News_time {
  float: right;
  color: #333333;
  font-size: 0.32rem;
  line-height: 1.02rem;
  margin-left: 0.2rem;
}

.index .content .advice .advice_top, page .content .advice .advice_top {
  margin-top: 0.36rem;
  background-color: #ffffff;
  padding: 0 0.55rem;
  overflow: hidden;
}

.index .content .advice .advice_top .advice_top_bt, page .content .advice .advice_top .advice_top_bt {
  color: #333333;
  font-size: 0.42rem;
  float: left;
  margin-right: 1.07rem;
  line-height: 1.1rem;
}

.index .content .advice .advice_top ::-webkit-input-placeholder, page .content .advice .advice_top ::-webkit-input-placeholder {
  color: #bfbfbf;
}

.index .content .advice .advice_top .advice_Name, page .content .advice .advice_top .advice_Name {
  float: left;
  font-size: 0.42rem;
  line-height: 1.1rem;
  outline: 0;
  border: 0;
  color: #bfbfbf;
}

.index .content .advice .advice_nr, page .content .advice .advice_nr {
  background-color: #ffffff;
  margin-top: 0.36rem;
  padding: 0rem 0.61rem 1.04rem 0.61rem;
}

.index .content .advice .advice_nr .advice_nrTitle, page .content .advice .advice_nr .advice_nrTitle {
  color: #333333;
  font-size: 0.42rem;
  padding-top: 0.36rem;
  padding-bottom: 0.52rem;
}

.index .content .advice .advice_nr .advice_nrEditDiv, page .content .advice .advice_nr .advice_nrEditDiv {
  border: solid 0.02rem #e5e4e3;
  padding: 0 0.04rem;
  position: relative;
}

.index .content .advice .advice_nr .advice_nrEditDiv .advice_nrEdit, page .content .advice .advice_nr .advice_nrEditDiv .advice_nrEdit {
  padding: 0.1rem;
  font-size: 0.42rem;
  line-height: 0.63rem;
  min-height: 5.9rem;
  outline: 0;
  border: 0;
  color: #bfbfbf;
}

.index .content .advice .advice_nr .advice_nrEditDiv .advice_nrEdit:empty:before, page .content .advice .advice_nr .advice_nrEditDiv .advice_nrEdit:empty:before {
  content: "输入内容...";
  color: #bfbfbf;
}

.index .content .advice .advice_nr .advice_nrEditDiv .advice_nrEdit:focus:before, page .content .advice .advice_nr .advice_nrEditDiv .advice_nrEdit:focus:before {
  content: none;
}

.index .content .advice .advice_nr .advice_nrEditDiv .advice_nrHint, page .content .advice .advice_nr .advice_nrEditDiv .advice_nrHint {
  position: absolute;
  bottom: 0.25rem;
  right: 0.5rem;
  color: #bfbfbf;
  font-size: 0.3rem;
}

.index .content .advice .advice_submit, page .content .advice .advice_submit {
  margin: 0.9rem 1.44rem;
  color: #ffffff;
  font-size: 0.42rem;
  background-color: #12b7f5;
  line-height: 1rem;
  border-radius: 0.1rem;
  text-align: center;
}

.index .content .ContactUs, page .content .ContactUs {
  background-color: #ffffff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
}

.index .content .ContactUs .map, page .content .ContactUs .map {
  width: 10.8rem;
  height: 9.74rem;
  display: block;
}

.index .content .ContactUs .ContactUs_nr, page .content .ContactUs .ContactUs_nr {
  padding: 0 0.48rem;
  position: relative;
}

.index .content .ContactUs .ContactUs_nr .ContactUs_title, page .content .ContactUs .ContactUs_nr .ContactUs_title {
  color: #333333;
  font-size: 0.46rem;
  margin-top: 0.48rem;
  margin-bottom: 0.98rem;
}

.index .content .ContactUs .ContactUs_nr .Contact_mainDiv, page .content .ContactUs .ContactUs_nr .Contact_mainDiv {
  padding: 0rem 0.4rem;
}

.index .content .ContactUs .ContactUs_nr .Contact_mainDiv .ContactAddress_demo, page .content .ContactUs .ContactUs_nr .Contact_mainDiv .ContactAddress_demo {
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0.5rem;
}

.index .content .ContactUs .ContactUs_nr .Contact_mainDiv .ContactAddress_demo .Contact_addressIcon, .index .content .ContactUs .ContactUs_nr .Contact_mainDiv .ContactAddress_demo .Contact_addressIcon2, page .content .ContactUs .ContactUs_nr .Contact_mainDiv .ContactAddress_demo .Contact_addressIcon, page .content .ContactUs .ContactUs_nr .Contact_mainDiv .ContactAddress_demo .Contact_addressIcon2 {
  float: left;
  width: 0.35rem;
  height: 0.45rem;
  margin-right: 0.23rem;
  margin-top: 0.08rem;
}

.index .content .ContactUs .ContactUs_nr .Contact_mainDiv .ContactAddress_demo .Contact_addressIcon2, page .content .ContactUs .ContactUs_nr .Contact_mainDiv .ContactAddress_demo .Contact_addressIcon2 {
  width: 0.33rem;
  height: 0.33rem;
  margin-right: 0.29rem;
  margin-top: 0.09rem;
}

.index .content .ContactUs .ContactUs_nr .Contact_mainDiv .ContactAddress_demo .CintactAddress_p, page .content .ContactUs .ContactUs_nr .Contact_mainDiv .ContactAddress_demo .CintactAddress_p {
  float: left;
  color: #333333;
  font-size: 0.4rem;
  line-height: 0.6rem;
  word-break: break-all;
  word-wrap: break-word;
}

.index .content .ContactUs .ContactUs_nr .gohereIcon, page .content .ContactUs .ContactUs_nr .gohereIcon {
  position: absolute;
  right: 0.42rem;
  top: -1.2rem;
  width: 1.6rem;
  height: 1.6rem;
}
/*# sourceMappingURL=style.css.map */
</style>
