import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createRouter, createWebHistory }  from "vue-router";
import { routes } from "./router/router.js";

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});


const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.mount('#app');
