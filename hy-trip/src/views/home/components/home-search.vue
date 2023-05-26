<template>
    <div class="location">
        <div class="city" @click="cityClick">{{ selectCity }}</div>
        <div class="position" @click="getCurrentPosition">
            <span class="text">我的位置</span>
            <img src="@/assets/image/home/icon_location.png" alt="">
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useCityStore } from "@/stores/modules/city.js"
import { storeToRefs } from 'pinia';
const router = useRouter();
const route = useRoute();
const cityStore = useCityStore();
const { selectedCity } = storeToRefs(cityStore);


const cityClick = () => {
    router.push("/city")
}
const getCurrentPosition = () => {
    console.log(123)
}

const selectCity = selectedCity.value.cityName ?? "北京";



</script>

<style lang="less" scoped>
.location {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 20px;

    .city {
        flex: 1;
    }

    .position {
        width: 74px;

        .text {
            position: relative;
            top: 2px;
        }

        img {
            width: 18px;
        }
    }
}
</style>