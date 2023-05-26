<template>
    <div class="homeInfo">
        <h2 class="infoTitle">
            {{ infoData.houseName }}
        </h2>
        <div class="describetion">
            <template v-for="item in infoData.houseTags" :key="item.tagCode">
                <span v-if="item.tagText"
                    :style="{ color: item.tagText.color, background: item.tagText.background.color, padding: '2px', margin: '3px', display: 'inline-block' }">{{
                        item.tagText.text }}</span>
            </template>
        </div>
        <div class="comment">
            <div class="left">
                <span class="overall">{{ infoData.commentBrief.overall }}</span>
                <span class="scoreTitle">{{ infoData.commentBrief.scoreTitle }}</span>
                <span class="commentBrief">{{ infoData.commentBrief.commentBrief }}</span>
            </div>
            <div class="right">
                <span>{{ infoData.commentBrief.totalCount }}条评论<van-icon name="arrow" /></span>
            </div>
        </div>
        <div class="location">
            <span class="left">{{ infoData.nearByPosition.address }}</span>
            <span class="right">地图.周边<van-icon name="arrow" /></span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    infoData: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="less" scoped>
.homeInfo {
    padding: 0 15px;
    padding-bottom: 30px;

    .infoTitle {
        margin: 20px 0 10px 0;
    }

    .comment {
        margin: 10px 0;
        padding: 8px;
        border-radius: 5px;
        background-color: #f6f7fb;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            .overall {
                font-size: 20px;
                font-weight: bold;
            }

            .scoreTitle {
                font-weight: bold;
                margin: 0 5px;
            }
        }

        .right {
            color: var(--primary-color);
        }

    }

    .location {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        padding: 8px;
        border-radius: 5px;
        background-color: #f6f7fb;

        .left {
            font-weight: bolder;
        }

        .right {
            color: var(--primary-color);
        }
    }
}
</style>