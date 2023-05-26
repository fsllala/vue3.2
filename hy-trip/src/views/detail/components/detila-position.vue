<template>
    <div class="section-outer">
        <DetailSection title="位置周边" moreText="查看更多周边信息">
            <div id="baidu" ref="mapRef"></div>
        </DetailSection>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import DetailSection from '@/components/detailSection/detail-section.vue';

const props = defineProps({
    infoPosition: {
        type: Object,
        default: () => ({})
    }
})

const mapRef = ref();

onMounted(() => {
    const map = new BMap.Map(mapRef.value);
    const point = new BMap.Point(props.infoPosition.longitude, props.infoPosition.latitude);
    map.centerAndZoom(point, 15);
    const marker = new BMap.Marker(point);
    map.addOverlay(marker);
})

</script>

<style lang="less" scoped>
.section-outer {
    border-top: 5px solid #f2f3f4;

    #baidu {
        height: 250px;
    }
}
</style>