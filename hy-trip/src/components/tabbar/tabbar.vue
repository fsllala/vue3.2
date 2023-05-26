<template>
    <div class="tabbar">
        <template v-for="(item, index) in tabbarDatas" :key="index">
            <div class="tabbar-item" :class="{ active: currentIndex == index }" @click="changeTabbar(index, item)">
                <img v-if="currentIndex !== index" :src="getAssetsUrl(item.imgUrl)" alt="">
                <img v-else :src="getAssetsUrl(item.active_imgUrl)" alt="">
                <span class="text">{{ item.text }}</span>
            </div>
        </template>
    </div>
</template>

<script setup>
import tabbarDatas from "@/assets/data/tabbar/tabbar.js";


/**
 *  webpakc中动态引入图片地址 :src="require(xxxx)";
 *  vite中不能使用require动态引入图片地址
 */


/** 动态引入图片地址
 * 采用 new URL()方式
 * 第一个参数,相对当前模块(参数二)的路径
 * 第二个参数,当前模块的路径,固定写法: import.meta.url
 * const getAssetsUrl = (image) => {
    return new URL(`../../assets/image/${image}`, import.meta.url);
   }

 *  因为需要多个地方用,所以抽取到了utils里
 *  注:抽取出来的utils第一个参数路径和直接在tabbar.vue中写的路径不一样,
 *  因为第一个参数是相对于当前模块的路径,
 */

import { getAssetsUrl } from "../../utils/get_assets";
import { ref } from "vue";
import { useRouter } from "vue-router";


const currentIndex = ref(0);
const router = useRouter();
const changeTabbar = (index, item) => {
    currentIndex.value = index;
    router.push(item.path);
}


</script>

<style scoped lang="less">
.tabbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    display: flex;
    border-top: 1px solid #ccc;

    &-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .text {
            font: 12px;
        }

        img {
            width: 34px;
        }
    }

    .active {
        color: var(--primary-color);
    }
}
</style>