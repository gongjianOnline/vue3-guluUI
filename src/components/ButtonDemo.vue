<template>
    <div>
        <Button @click="onclick" size="mini">hello</Button>
    </div>
</template>
<script lang="ts">
import Button from "../lib/button.vue"
export default {
    components:{
        Button
    },
    setup(){
        const onclick = ()=>{
            console.log("hello")
        }
        return{onclick}
    }
}
</script>
<style lang="scss" scoped>

</style>