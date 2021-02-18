import {createWebHistory,createRouter} from "vue-router"
import Home from "./view/Home.vue"
import Doc from "./view/Doc.vue"
import SwitchDemo from "./components/SwitchDemo.vue"
const history = createWebHistory();
export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {
            path:'/doc',
            component:Doc,
            children:[
                {path:'switch',component:SwitchDemo}
            ]
        }
    ]
});