<template>
    <div class="markdown-body">
        <h2>示例一</h2>
        <Switch v-model:value="y"/>
        <h3>代码</h3>
        <div v-html="md"> </div>
    </div>
</template>
<script lang='js'>
import { ref } from 'vue'
import Switch from "../lib/switch.vue"
import md from "../markdown/Switch.md"
export default {
    data(){
        return{
            md
        }
    },
    components:{
        Switch
    },
    setup(){
        const y = ref(true)
        return{y}
    }
}
</script>
<style lang="scss" scoped>

</style>