<template>
    <div class="recommends">
        <template v-for="item in recommendedCategoriesData" :key="item.id">
            <div class="con">
                <div class="img">
                    <img :src="item.pictureUrl" alt="">
                </div>
                <div class="text">
                    {{ item.title }}
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import { useHomeStore } from "@/stores/modules/home.js";
import { storeToRefs } from "pinia";


const homeStore = useHomeStore();
const { recommendedCategoriesData } = storeToRefs(homeStore);
homeStore.fetchRecommendedCategories();



</script>

<style lang="less" scoped>
.recommends {
    display: flex;
    text-align: center;
    overflow-x: auto;
    padding: 0 10px;
    margin-top: 24px;

    &::-webkit-scrollbar {
        display: none;
    }

    .con {
        img {
            width: 77px;
            height: auto;
        }
    }
}
</style>