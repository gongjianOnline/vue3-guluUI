```javascript
    <template>
        <Button disabled>Hi</Button>
        <Button :disabled="true">Hi</Button>
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
```