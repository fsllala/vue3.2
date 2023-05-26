<template>
    <div class="home-item">
        <div class="item-inner">
            <div class="cover">
                <img :src="itemData.image.url" alt="">
            </div>
            <div class="info">
                <div class="location">
                    <img src="@/assets/image/home/location.png" alt="">
                    <span>{{ itemData.location }}</span>
                </div>
                <div class="houseName">
                    {{ itemData.houseName }}
                </div>
                <div class="summaryText">
                    {{ itemData.summaryText }}
                </div>

                <div class="Price">
                    <span class="nowPrice">￥{{ itemData.finalPrice }}</span>
                    <span class="oldPrice">￥{{ itemData.productPrice }}</span>
                    <span class="downPrice">{{ itemData?.priceTipBadge?.text }}</span>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    itemData: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="less" scoped>
.home-item {
    width: 50%;

    .item-inner {
        margin: 6px;
        border-radius: 9px;
        background-color: #fff;
        overflow: hidden;

        .cover {
            img {
                width: 100%;
            }
        }

        .info {
            padding: 0 5px;

            .location {
                display: flex;
                align-items: center;
                margin: 5px;

                img {
                    width: 12px;
                    height: 12px;
                }
            }

            .houseName {
                font-size: 16px;
            }

            .summaryText {
                color: #aaa;
                margin: 5px;
            }

            .Price {
                padding-bottom: 5px;

                .nowPrice {
                    font-size: 16px;
                    color: #fa9022;
                }

                .oldPrice {
                    color: #aaa;
                    text-decoration: line-through;
                    margin-left: 5px;
                }

                .downPrice {
                    display: inline-block;
                    padding: 3px 5px;
                    background-color: #e64446;
                    border-radius: 10px;
                    color: #fff;
                    margin-left: 15px;
                }
            }
        }
    }
}
</style>