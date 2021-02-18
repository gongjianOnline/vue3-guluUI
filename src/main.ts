import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHistory,createRouter} from "vue-router"
import Frank from "./components/Frank.vue"
const history = createWebHistory();
const router = createRouter({
    history:history,
    routes:[
        {
            path:'/',component:Frank
        }
    ]
});

const app = createApp(App)
app.use(router)
app.mount('#app')
