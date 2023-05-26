<template>
    <div class="loading" v-if="mainStore.showLoading">
        <div class="loading-bg">
            <img src="@/assets/image/home/full-screen-loading.gif" alt="">
        </div>
    </div>
</template>

<script setup>

import { useMainStore } from '@/stores/modules/main.js';
const mainStore = useMainStore();
</script>

<style lang="less" scoped>
.loading {
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .3);

    &-bg {
        display: flex;
        justify-content: center;
        align-items: center;
        background: url("@/assets/image/home/loading-bg.png") no-repeat 0 0;
        background-size: contain;
        width: 104px;
        height: 104px;

        img {
            width: 70px;
            height: 70px;
            margin-bottom: 8px;
        }
    }
}
</style>