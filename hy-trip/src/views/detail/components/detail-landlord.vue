<template>
    <div class="section-outer">
        <DetailSectionVue title="房东介绍" moreText="查看房东主页">
            <div class="section-inner">
                <div class="top-scroll">
                    <img :src="infoLandlord.topScroll" alt="">
                </div>
                <div class="landlord-info">
                    <div class="left">
                        <div class="logo">
                            <img :src="infoLandlord.hotelLogo" alt="">
                        </div>
                        <div class="text">
                            <h3>{{ infoLandlord.hotelName }}</h3>
                            <div class="text-tags">
                                <template v-for="(item, index) in infoLandlord.hotelTags" :key="index">
                                    <span :style="{ color: item.tagText.color }">{{ item.tagText.text }}</span>
                                    <span v-if="index !== infoLandlord.hotelTags.length - 1" style="margin:0 5px"
                                        :style="{ color: item.tagText.color }">|</span>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="contact">
                            联系房东
                        </div>
                    </div>
                </div>
                <div class="hotel-summary">
                    <template v-for="(item, index) in infoLandlord.hotelSummary" :key="index">
                        <div class="item">
                            <span class="title">{{ item.title }}</span>
                            <h3>{{ item.introduction }}</h3>
                            <span class="total">{{ item.tip }}</span>
                        </div>
                    </template>

                </div>
            </div>
        </DetailSectionVue>
    </div>
</template>

<script setup>
import DetailSectionVue from '@/components/detailSection/detail-section.vue';

const props = defineProps({
    infoLandlord: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="less" scoped>
.section-outer {
    border-top: 5px solid #f2f3f4;

    .section-inner {
        .top-scroll {
            img {
                width: 100%;
            }
        }

        .landlord-info {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .left {
                display: flex;
                align-items: center;

                .logo {
                    width: 54px;
                    height: 54px;

                    img {
                        width: 100%;
                    }
                }

            }

            .right {
                .contact {
                    height: 24px;
                    line-height: 24px;
                    padding: 0 12px;
                    font-size: 12px;
                    background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
                    color: #fff;
                    border-radius: 5px;
                }
            }
        }

        .hotel-summary {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;

            .item {
                display: flex;
                flex-direction: column;

                span {
                    margin: 5px 0;
                    color: #9B9B9B;
                }
            }
        }
    }
}</style>