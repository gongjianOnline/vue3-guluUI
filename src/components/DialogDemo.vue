<template>
    <div>
        <Button @click="toogle">toggle</Button>  
        <Dialog :visible="x"></Dialog>
    </div>
</template>
<script>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/button.vue'
export default {
    components:{
        Dialog,
        Button
    },
    setup(){
        const x = ref(false);
        const toogle = ()=>{
            x.value = !x.value
        }
        return {x,toogle}
    }

}
</script>
<style lang="scss" scoped>

</style>