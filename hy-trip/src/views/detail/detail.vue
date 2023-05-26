<template>
    <div class="detailBox">
        <div class="top"><van-nav-bar title="房屋详情" left-text="返回" left-arrow @click-left="goBack" /></div>
        <div class="main" v-if="mainParts">
            <DetailSwiper :swiper-data="mainParts?.topModule.housePicture.housePics"></DetailSwiper>
            <DetailInfo :info-data="mainParts?.topModule"></DetailInfo>
            <DetailFacility :house-facility="mainParts?.dynamicModule?.facilityModule?.houseFacility"></DetailFacility>
            <DetailLandlord :info-landlord="mainParts?.dynamicModule?.landlordModule"></DetailLandlord>
            <DetilaPosition :info-position="mainParts?.dynamicModule.positionModule"></DetilaPosition>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { homeDetails } from "@/services/city/detail.js";
import DetailSwiper from "./components/detail-Swiper.vue";
import DetailInfo from "./components/detail-info.vue";
import DetailFacility from "./components/detail-facility.vue";
import DetailLandlord from "./components/detail-landlord.vue";
import DetilaPosition from "./components/detila-position.vue";



// 路由
// http://codercba.com:1888/api/detail/infos?houseId=44173741
const route = useRoute();
const router = useRouter();

const goBack = () => {
    router.back();
}

// 获取房屋详情
const mainParts = computed(() => houseAllData.value?.mainPart);
const houseAllData = ref({});
const getHouseDetails = () => {
    homeDetails({
        houseId: route.params.id
    }).then(res => {
        houseAllData.value = res.data;
    })
}
getHouseDetails();









</script>

<style lang="less" scoped></style>