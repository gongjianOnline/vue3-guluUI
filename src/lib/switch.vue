<template>
    <button :class="{checked:x}" @click="toggle">
        <span></span>
    </button>
    <div>{{value}}</div>
</template>
<script lang='ts'>
import { ref } from 'vue'
export default {
    props:{
        value:Boolean
    },
    setup(props,context){
        const x = ref(false);
        const toggle = ()=>{
           context.emit('input',!props.value)
        }
        return {x,toggle}
    }
}
</script>
<style lang="scss" scoped>
$h:22px;
$h2:$h - 4px;
button{
    height: $h;
    width: $h * 2;
    border:none;
    background: grey;
    border-radius:$h/2;
    position: relative;
}
span{
    position: absolute;
    top:2px;
    left:2px;
    height:$h2;
    width:$h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 0.25s;
}
button:focus{
    outline: none;
}
button.checked{
    background: blue;
}
button.checked >span{
    left: calc(100% - #{$h2} - 2px)
}
</style>