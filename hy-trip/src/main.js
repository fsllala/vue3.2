import { createApp } from 'vue';


import App from './App.vue';
import router from './router';
import pinia from './stores';

import "normalize.css";  // 样式重置
import "./assets/css/index.css"; // 引入css

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
