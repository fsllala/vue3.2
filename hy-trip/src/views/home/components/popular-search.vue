<template>
    <div class="popSearch">
        <div class="left">
            <div class="comeIn">
                <span>住</span>
                <span>{{ comeTime }}</span>
            </div>
            <div class="leaveOut">
                <span>离</span>
                <span>{{ leaveTime }}</span>
            </div>
        </div>
        <div class="right">
            <div class="text">
                关键字/位置/民宿
            </div>
            <div class="icon">
                <van-icon name="search" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from "@/stores/modules/main.js";
import { storeToRefs } from "pinia";
import { formatMonthDay } from "@/utils/dateFormat.js";
import { computed } from "vue";

const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);

const comeTime = computed(() => formatMonthDay(startDate.value, 'MM.DD'));
const leaveTime = computed(() => formatMonthDay(endDate.value, 'MM.DD'));
    
</script>

<style lang="less" scoped>
.popSearch {
    display: flex;

    .left {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 64px;
        height: 44px;
        margin-right: 2px;
        background-color: #f6f7f9;
        border-radius: 5px;
    }

    .right {
        display: flex;
        flex: 1;
        height: 44px;
        background-color: #f6f7f9;
        align-items: center;
        justify-content: space-between;
        border-radius: 5px;

        .text {
            margin-left: 10px;
        }

        .icon {
            margin-right: 10px;
            font-size: 24px;
        }
    }
}
</style>