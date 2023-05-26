<template>
    <div>
        <div class="top">
            <div class="search">
                <van-search show-action v-model="searchValue" placeholder="城市/区域/位置" shape="round" @cancel="cancel" />
            </div>
            <div class="tab">
                <van-tabs v-model:active="tabActive">
                    <template v-for="(value, key, index) in allCitys" :key="index">
                        <van-tab :title="value.title" :name="key"></van-tab>
                    </template>
                </van-tabs>
            </div>
        </div>
        <div class="content">
            <CityContent :currentGroup="currentGroup"></CityContent>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
import { useCityStore } from "@/stores/modules/city.js"
import { storeToRefs } from 'pinia';

import CityContent from "./components/cityContent.vue"

const router = useRouter();
// search
const searchValue = ref("");
const cancel = () => {
    router.back();
}
// tabs
const tabActive = ref("");

// store
const cityStore = useCityStore();
cityStore.fetchAllCitysData();
const { allCitys } = storeToRefs(cityStore);

// 目的: 获取选中标签后的数据
// 1.获取正确的key: 将tabs中绑定的tabActive正确绑定
// 2.根据key从allCitys获取数据, 默认直接获取的数据不是响应式的, 所以必须包裹computed
const currentGroup = computed(() => allCitys.value[tabActive.value])




</script>

<style lang="less" scoped>
.top {
    position: relative;
    z-index: 9;
}

.content {
    height: calc(100vh - 98px);
    overflow-y: auto;
}
</style>  