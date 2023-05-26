<template>
    <div class="section-outer">
        <DetailSection title="房屋设施" moreText="查看全部设施">
            <div class="section-inner">
                <template v-for="(item, index) in houseFacility.houseFacilitys" :key="index">
                    <div class="items" v-if="houseFacility.facilitySort.includes(index)">
                        <div class="left">
                            <div class="imgBox">
                                <img :src="item.icon" :alt="item.groupName">
                            </div>
                            <span class="text">{{ item.groupName }}</span>
                        </div>
                        <div class="right">
                            <template v-for="(itemChild, indexChild) in item.facilitys.slice(0, 4)" :key="indexChild">
                                <div class="right-item">
                                    <van-icon name="passed" />
                                    <span>{{ itemChild.name }}</span>
                                </div>
                            </template>
                        </div>
                    </div>
                </template> 
            </div>
        </DetailSection>
    </div>
</template>

<script setup>
import DetailSection from "@/components/detailSection/detail-section.vue";


const props = defineProps({
    houseFacility: {
        type: Object,
        default: () => ({})
    }
})

</script>

<style lang="less" scoped>
.section-outer {
    border-top: 5px solid #f2f3f4;

    .section-inner {
        padding: 20px 10px;
        background-color: #f7f9fb;

        .items {
            display: flex;
            margin: 25px 0;

            .left {
                width: 90px;
                text-align: center;

                .imgBox {
                    width: 20px;
                    height: 20px;
                    margin: 0 auto;

                    img {
                        width: 100%;
                    }
                }

                .text {
                    display: inline-block;
                    margin-top: 8px;
                }
            }

            .right {
                flex: 1;
                display: flex;
                flex-wrap: wrap;

                // align-items: center;
                &-item {
                    flex-basis: 50%;
                    margin: 5px 0;
                    .van-badge__wrapper.van-icon.van-icon-passed {
                        color: #8ee6dd;
                        margin-right: 5px;
                    }
                }
            }
        }

    }
}
</style>