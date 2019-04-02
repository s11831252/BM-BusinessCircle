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
          <div class="classify_demo">
            <div class="calssify_iconDiv">
              <img class="classify_icon1" src="/static/img/classifier_Icon1.png" alt>
            </div>
            <p class="classify_p">工程主材</p>
          </div>
          <div class="classify_demo">
            <div class="calssify_iconDiv">
              <img class="classify_icon2" src="/static/img/classifier_Icon2.png" alt>
            </div>
            <p class="classify_p">工程服务</p>
          </div>
          <div class="classify_demo">
            <div class="calssify_iconDiv">
              <img class="classify_icon3" src="/static/img/classifier_Icon3.png" alt>
            </div>
            <p class="classify_p">五金材料</p>
          </div>
          <div class="classify_demo">
            <div class="calssify_iconDiv">
              <img class="classify_icon4" src="/static/img/classifier_Icon4.png" alt>
            </div>
            <p class="classify_p">劳保安防材料</p>
          </div>
          <div class="classify_demo">
            <div class="calssify_iconDiv">
              <img class="classify_icon5" src="/static/img/classifier_Icon5.png" alt>
            </div>
            <p class="classify_p">电气电工</p>
          </div>
          <div class="classify_demo">
            <div class="calssify_iconDiv">
              <img class="classify_icon6" src="/static/img/classifier_Icon6.png" alt>
            </div>
            <p class="classify_p">工程机械</p>
          </div>
          <div class="classify_demo">
            <div class="calssify_iconDiv">
              <img class="classify_icon7" src="/static/img/classifier_Icon7.png" alt>
            </div>
            <p class="classify_p">电动工具</p>
          </div>
          <div class="classify_demo">
            <div class="calssify_iconDiv">
              <img class="classify_icon8" src="/static/img/classifier_Icon8.png" alt>
            </div>
            <p class="classify_p">其他</p>
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
            <div class="recent_textDiv">
              <p class="recent_text">8.5折建材盛大开抢</p>
              <p class="recent_time">2019/02/28</p>
            </div>
            <div class="recent_textDiv">
              <p class="recent_text">建材免费用啦！</p>
              <p class="recent_time">2019/02/28</p>
            </div>
            <div class="recent_textDiv">
              <p class="recent_text">南宁低价建材都在这了</p>
              <p class="recent_time">2019/02/28</p>
            </div>
          </div>
        </div>
        <div class="startShop">
          <div class="startShop_title">商家店铺</div>
          <div class="startShop_demo">
            <img class="startShop_img" src="/static/img/storeImg.png" alt>
            <div class="startShop_zwDiv">
              <div class="startShop_info">
                <div class="startShop_nameDiv">
                  <div class="startShop_label">明星店铺</div>
                  <p class="startShop_name">南宁市马建五金加工...南宁市马建五金加工南宁市马建五金加工南宁市马建五金加工</p>
                </div>
                <div class="startShop_score">
                  店铺综合评分：
                  <b>5</b>
                </div>
                <p class="startShop_theMain">主营: 建筑五金</p>
              </div>
            </div>
          </div>
          <div class="startShop_demo">
            <img class="startShop_img" src="/static/img/storeImg.png" alt>
            <div class="startShop_zwDiv">
              <div class="startShop_info">
                <div class="startShop_nameDiv">
                  <p class="startShop_name">南宁市马建五金加工...南宁市马建五金加工南宁市马建五金加工南宁市马建五金加工</p>
                </div>
                <div class="startShop_score">
                  店铺综合评分：
                  <b>5</b>
                </div>
                <p class="startShop_theMain">主营: 建筑五金</p>
              </div>
            </div>
          </div>
          <div class="startShop_demo">
            <img class="startShop_img" src="/static/img/storeImg.png" alt>
            <div class="startShop_zwDiv">
              <div class="startShop_info">
                <div class="startShop_nameDiv">
                  <p class="startShop_name">南宁市马建五金加工...南宁市马建五金加工南宁市马建五金加工南宁市马建五金加工</p>
                </div>
                <div class="startShop_score">
                  店铺综合评分：
                  <b>5</b>
                </div>
                <p class="startShop_theMain">主营: 建筑五金</p>
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
    return {};
  }
};
</script>
<style>
</style>
