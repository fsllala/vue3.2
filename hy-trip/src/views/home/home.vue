<template>
  <div class="home">
    <div class="nav-bar">宏远旅途</div>
    <div class="banner">
      <img src="@/assets/image/home/banner.webp" alt="" />
    </div>
    <div class="search">
      <HomeSearch></HomeSearch>
    </div>
    <div class="timer">
      <HomeTimePicker></HomeTimePicker>
    </div>
    <div class="condition">
      <div class="condition-size">
        <span>价格不限</span>
        <span>人数不限</span>
      </div>
      <div class="condition-key">
        <span>关键字/位置/民宿名</span>
      </div>
    </div>
    <div class="hotSuggest">
      <HomeHotSuggest></HomeHotSuggest>
    </div>
    <div class="searchBtn">
      <div class="searchButton">开始搜索</div>
    </div>
    <div class="recommend">
      <HomeRecommend></HomeRecommend>
    </div>
    <div class="popularSelection">
      <homePopular></homePopular>
    </div>
  </div>
</template>

<script setup >
import HomeSearch from "./components/home-search.vue";
import HomeTimePicker from "./components/homeTimePicker.vue";
import HomeHotSuggest from "./components/homeHotSuggest.vue";
import HomeRecommend from "./components/homeRecommend.vue";
import homePopular from "./components/home-popular.vue";
</script>

<style scoped lang="less">
.home {
  .nav-bar {
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    color: var(--primary-color);
    font-size: 18px;
    font-weight: 700;
  }

  .banner {
    img {
      width: 100%;
    }
  }

  .condition {
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: #aaa;

    &-size {
      display: flex;
      justify-content: space-between;
      height: 20px;
      line-height: 20px;
    }

    &-key {
      margin-top: 20px;
    }
  }

  .searchBtn {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(to right, #fa8e21, #fbad3e);
    border-radius: 20px;
    color: #fff;
    font-size: 16px;

    .searchButton {
      width: 100%;
    }
  }
}
</style>