<template>
    <div class="tabbar">
        <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
            <template v-for="(item, index) in tabbarData" :key="index">
                <van-tabbar-item :to="item.path">
                    <span>{{ item.text }}</span>
                    <template #icon>
                        <img v-if="currentIndex !== index" :src="getAssetsUrl(item.imgUrl)" alt="">
                        <img v-else :src="getAssetsUrl(item.active_imgUrl)" alt="">
                    </template>
                </van-tabbar-item>
            </template>
        </van-tabbar>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAssetsUrl } from "../../utils/get_assets"
import tabbarData from "@/assets/data/tabbar/tabbar.js";

const currentIndex = ref(0);

</script>

<style lang="less" scoped>
.tabbar {
    img {
        height: 24px;
    }
}
</style>