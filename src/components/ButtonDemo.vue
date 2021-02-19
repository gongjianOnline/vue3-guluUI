<template>
    <div>
        <Button>hello</Button>
        <Button theme='button'>hello</Button>
        <Button theme='link'>hello</Button>
        <Button theme='text'>hello</Button>
    </div>
</template>
<script lang="ts">
import Button from "../lib/button.vue"
export default {
    components:{
        Button
    },
    setup(){
        
    }
}
</script>
<style lang="scss" scoped>

</style>