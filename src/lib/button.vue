<template>
    <div :size="size">
        <button v-bind="rest">
            <slot/>
        </button>
    </div>
</template>
//$attrs 在该元素上继承组件的所有事件和属性
<script lang="ts'">
export default {
    inheritAttrs:false, // 阻止默认的事件继承
    setup(props,context){
        const {size,...rest} = context.attrs
        return{size,rest}
    }
}
</script>
<style lang="scss" scoped>

</style>