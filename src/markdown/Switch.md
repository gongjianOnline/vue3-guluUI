```javascript
    <template>
        <div>
            <Switch v-model:value="y"/>
        </div>
    </template>
    <script lang='ts'>
    import { ref } from 'vue'
    import Switch from "../lib/switch.vue"
    export default {
        components:{
            Switch
        },
        setup(){
            const y = ref(true)
            return{y}
        }
    }
    </script>
```