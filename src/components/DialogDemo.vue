<template>
    <div>
        <Button @click="toogle">toggle</Button>  
        <Dialog v-model:visible="x" 
                @update:visible="x = $event"
                :closeOnClickOverlay="false"
                :ok="f1"
                :cancel="f2">
            <template v-slot:content>
                <strong>h1</strong>
                <div>h2</div>
            </template>
            <template v-slot:title>
                <strong>标题</strong>
            </template>   
        </Dialog>
    </div>
</template>
<script>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/button.vue'
import { ref } from 'vue'
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
        const f1 = ()=>{
            return false
        }
        const f2 = ()=>{}
        return {x,toogle,f1,f2}
    }

}
</script>
<style lang="scss" scoped>

</style>