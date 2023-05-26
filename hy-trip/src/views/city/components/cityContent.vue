<template>
    <div class="city-content">
        <van-index-bar :index-list="indexList">
            <van-index-anchor index="热门" />
            <div class="hotCity">
                <template v-for="(item, index) in currentGroup?.hotCities">
                    <div class="hotCity-cell" @click="selectCity(item)"> {{ item.cityName }}</div>
                </template>

            </div>
            <template v-for="(item, index) in currentGroup?.cities" :key="index">
                <van-index-anchor :index="item.group" />
                <template v-for="(conItem, conIndex) in item.cities" :key="conIndex">
                    <van-cell :title="conItem.cityName" />
                </template>
            </template>
        </van-index-bar>
    </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useCityStore } from "@/stores/modules/city.js";
import { useRouter } from "vue-router";


const props = defineProps({
    currentGroup: {
        type: Object,
        default: () => ({})
    },
})

const router = useRouter();

const cityStore = useCityStore();

const indexList = computed(() => {
    if (props.currentGroup?.cities) {
        const list = props.currentGroup?.cities?.map(item => item.group);
        list.unshift("#");
        return list;    
    }
})      

// 选择城市
const selectCity = (city) => {
    cityStore.getSelectedCity(city);
    router.back();
}
</script>

<style lang="less" scoped>
.hotCity {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;

    &-cell {
        width: 70px;
        height: 28px;
        border-radius: 14px;
        font-size: 12px;
        color: #000;
        text-align: center;
        line-height: 28px;
        background-color: #fff4ec;
        margin: 6px 0;
    }
}
</style>