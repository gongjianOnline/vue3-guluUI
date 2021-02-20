<template>
    <div class="dialog-overlay"></div>
    <div class="dialog-wrapper">
        <header>标题</header>
        <main>
            <p>第一行字</p>
            <p>第二行字</p>
        </main>
        <footer>
            <Button>ok</Button>  
            <Button>Cancel</Button>  
        </footer>
    </div>
</template>
<script lang="ts">
import Button from "./button.vue"
export default {
    components:{
        Button
    }
}
</script>

<style lang='scss'>

</style>