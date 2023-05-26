<template>
    <div class="time-picker" @click="show = true">
        <div class="comeTime">
            <span>入住</span>
            <span>{{ comeTime }}</span>
        </div>
        <div class="duringTime">共{{ stayCount }}晚</div>
        <div class="leaveTime">
            <span>离店</span>
            <span>{{ leaveTime }}</span>
        </div>
    </div>
    <van-calendar v-model:show="show" type="range" @confirm="onConfirm" />
</template>

<script setup>
import { ref, computed } from "vue";
import { formatMonthDay, getDiffDays } from "@/utils/dateFormat.js";
import { useMainStore } from "@/stores/modules/main.js";
import { storeToRefs } from "pinia";

/**
 * 日期范围的处理
 * storeToRefs解构的需要使用.value
 * 直接store.xxx不需要使用.value
 */
const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);

const comeTime = computed(() => formatMonthDay(startDate.value)); // storeToRefs解构的,需要.value
const leaveTime = computed(() => formatMonthDay(endDate.value));
const stayCount = ref(1);
const show = ref(false);

const onConfirm = (values) => {
    const [start, end] = values;
    mainStore.startDate = start; // 直接使用的,不需要.value
    mainStore.endDate = end;
    stayCount.value = getDiffDays(start, end);
    show.value = false;
}
</script>

<style lang="less" scoped>
.time-picker {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    .comeTime {
        display: flex;
        flex-direction: column;
    }

    .leaveTime {
        display: flex;
        flex-direction: column;
    }
}
</style>