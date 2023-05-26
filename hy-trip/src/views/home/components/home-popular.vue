<template>
    <div class="hotPopular">
        <div class="hot-search" v-if="isShowScrollBar">
            <PopularSearch></PopularSearch>
        </div>
        <h2>热门精选</h2>
        <div class="content">
            <template v-for="(item, index) in listOfHousesData" :key="index">
                <HomeContentNine v-if="item.discoveryContentType == 9" :item-data="item.data" @click="toDetail(item)">
                </HomeContentNine>
                <HomeContentThree v-else-if="item.discoveryContentType == 3" :item-data="item.data" @click="toDetail(item)">
                </HomeContentThree>
            </template>
        </div>
    </div>
</template>

<script setup>
import HomeContentNine from "@/components/hotPopular/homeContent-9.vue";
import HomeContentThree from "@/components/hotPopular/homeContent-3.vue";
import PopularSearch from "./popular-search.vue";
import { useHomeStore } from "@/stores/modules/home.js";
import { storeToRefs } from "pinia";
import useScroll from "@/hooks/useScroll.js";
import { computed, watch } from "vue";
import { useRouter } from "vue-router";

// 路由
const router = useRouter();

// 滚动加载
const homeStore = useHomeStore();
const { listOfHousesData } = storeToRefs(homeStore);
homeStore.fetchListOfHousesData();


const { reachBottom, scrollTop } = useScroll();

watch(reachBottom, (newVal) => {
    if (newVal) homeStore.fetchListOfHousesData().then(res => {
        reachBottom.value = false;
    });
})

const isShowScrollBar = computed(() => {
    return scrollTop.value > 350;
})

// 调换详情

const toDetail = (item) => {
    // console.log("item", item.data.houseId);
    router.push({
        path: `/detail/${item.data.houseId}`
    })

}






</script>

<style lang="less" scoped>
.hotPopular {
    background-color: #f6f7f9;
    padding: 20px 13px 44px 13px;

    .hot-search {
        background-color: #FFf;
        position: fixed;
        padding: 20px;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
    }

    .content {
        display: flex;
        flex-wrap: wrap;
    }

}
</style>