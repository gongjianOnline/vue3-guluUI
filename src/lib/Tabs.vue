<template>
    <div v-for="t in titles" :key="t">{{t}}</div>
    <component v-for="c in defaults" :key="c" :is="c"/>
</template>
<script lang="ts">
import Tab from "./Tab.vue"
export default {
    setup(props,context){
        const defaults = context.slots.default();
        defaults.forEach((tag)=>{
            if(tag.type !== Tab){
                throw new Error("tabs 子标签必须是 tab")
            }
        })
        const titles = defaults.map((tag)=>{
            return tag.props.title
        })
        return {defaults,titles}
    }    
}
</script>
<style lang="scss">

</style>