```javascript   
<template>
    <div>
        <Button @click="showDialog">toggle</Button>  
        <Dialog v-model:visible="x" 
                @update:visible="x = $event"
                :closeOnClickOverlay="false"
                :ok="f1"
                :cancel="f2">   
        </Dialog>
    </div>
</template>
<script>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/button.vue'
import {openDialog} from "../lib/openDialog.ts"
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
        const showDialog = ()=>{
            openDialog({
                title:"标题",
                content:"hello",
                ok:()=>{
                    console.log('ok')
                },
                cancel:()=>{
                    console.log('cencel')
                }
            })
        }
        return {x,toogle,f1,f2,showDialog}
    }

}
</script>
```