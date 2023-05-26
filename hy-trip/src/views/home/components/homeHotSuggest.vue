<template>
    <div class="hot">
        <template v-for="(item, index) in hotSuggestData" :key="index">
            <div class="hotsuggest-item" :style="{ backgroundColor: item.tagText.background.color }">{{ item.tagText.text }}
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useHomeStore } from "@/stores/modules/home.js";
import { storeToRefs } from "pinia";
const homeStore = useHomeStore();
const { hotSuggestData } = storeToRefs(homeStore);
homeStore.fetchHotSuggest();

</script>

<style lang="less" scoped>
.hot {
    display: flex;
    flex-wrap: wrap;
    padding: 15px;

    .hotsuggest-item {
        padding: 5px;
        margin: 6px;
        border-radius: 5px;
    }
}
</style>