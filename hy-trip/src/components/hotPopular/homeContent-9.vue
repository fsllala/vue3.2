<template>
    <div class="house-item">
        <div class="item-inner">
            <div class="cover">
                <img :src="itemData.image.url" alt="">
                <!-- :style="{width:itemData.image.width+'px',height:itemData.image.height+'px'}" -->
            </div>
            <div class="info">
                <div class="summary">
                    {{ itemData.summaryText }}
                </div>
                <div class="houseName">
                    {{ itemData.houseName }}
                </div>
                <div class="price">
                    <van-rate v-model="NumberStar" allow-half readonly />
                    <div class="new">
                        ￥{{ itemData.finalPrice }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
const props = defineProps({
    itemData: {
        type: Object,
        default: () => ({})
    }
})
const NumberStar = computed(() => {
    return Number(props.itemData.commentScore)
})
</script>

<style lang="less" scoped>
.house-item {
    width: 50%;

    .item-inner {
        margin: 6px;
        position: relative;
        background-color: #fff;

        .cover {
            border-radius: 9px;
            overflow: hidden;

            img {
                width: 100%;
            }
        }

        .info {
            text-align: center;
            position: absolute;
            bottom: 0;
            left: 0;
            color: #fff;

            .houseName {
                margin: 5px 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }

            .price {
                display: flex;
                justify-content: space-around;
                align-items: center;
                height: 34px;
            }
        }
    }
}
</style>