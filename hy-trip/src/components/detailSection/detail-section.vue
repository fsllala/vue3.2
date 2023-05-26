<template>
    <div class="section">
        <div class="header">
            <h2>{{ title }}</h2>
        </div>
        <div class="content">
            <slot>插槽默认数据</slot>
        </div>
        <div class="footer">{{ moreText }}<van-icon name="arrow" /></div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    moreText: {
        type: String,
        default: ""
    }
})
</script>

<style lang="less" scoped>
.section {
    padding: 0 15px;

    .header {
        height: 40px;
        line-height: 40px;
        border-bottom: 2px solid #f2f3f4;
    }

    .content {
        margin-top: 10px;
    }

    .footer {
        display: flex;
        justify-content: right;
        color: var(--primary-color);
        font-weight: bolder;
        height: 60px;
        line-height: 60px;
        align-items: center;
    }
}
</style>