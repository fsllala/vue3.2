<template>
  <div class="app">

    <router-view v-slot="{ Component }">
      <keep-alive include="home">
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <Loading></Loading>
    <TabBarVant v-if="!route.meta.hideTabbar"></TabBarVant>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import TabBarVant from './components/tabbar/tabbarVant.vue';
import Loading from "@/components/loading/loading.vue";
const route = useRoute();
</script>

<style scoped></style>