<template>
    <div class="swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <template v-for="(item, index) in swiperData" :key="index">
                <van-swipe-item>
                    <img :src="item.url" alt="">
                </van-swipe-item>
            </template>
            <template #indicator="{ active, total }">
                <div class="custom-indicator">
                    <template v-for="(value, key, index) in enumPictureType" :key="key">
                        <span class="enumName" :class="{ actived: swiperData[active]?.enumPictureCategory == key }">
                            <span>{{ replaceHomeName(value[0].title) }}</span>
                            <span v-if="swiperData[active]?.enumPictureCategory == key">
                                {{ getEnumNumber(swiperData[active]) + 1 }}/{{ value.length }}</span>
                        </span>
                    </template>
                </div>
            </template>
        </van-swipe>
    </div>
</template>

<script setup>  

const props = defineProps({
    swiperData: {
        type: Array,
        default: () => []
    }
})

// 对数据进行转换
const enumPictureType = {};
for (let item of props.swiperData) {
    if (!enumPictureType[item.enumPictureCategory]) {
        enumPictureType[item.enumPictureCategory] = []
    }
    enumPictureType[item.enumPictureCategory].push(item);
}

const replaceHomeName = (homeName) => homeName.replace("：", "").replace("【", "").replace("】", "");
const getEnumNumber = (itemData) => {
    const valueArray = enumPictureType[itemData.enumPictureCategory];
    return valueArray.findIndex(data => data == itemData);
}


</script>

<style lang="less" scoped>  .my-swipe {
      .van-swipe-item {
          position: relative;

          img {
              width: 100%;
          }
      }

      .custom-indicator {
          position: absolute;
          right: 5px;
          bottom: 5px;
          padding: 2px 5px;
          font-size: 12px;
          background: rgba(0, 0, 0, 0.3);

          .enumName {
              margin: 0 5px;
              padding: 0 5px;
              border-radius: 5px;
          }

          .actived {
              background-color: #fff;
              color: #000;
          }
      }
  }
</style>