```javascript
    <template>
        <div>   
            <Button>hello</Button>
            <Button size='big'>hello</Button>
            <Button size='small'>hello</Button>
        </div>
        <div>
            <Button>hello</Button>
            <Button theme='link' size='big'>hello</Button>
            <Button theme='link' size='small'>hello</Button>
        </div>
        <div>
            <Button>hello</Button>
            <Button theme='text' size='big'>hello</Button>
            <Button theme='text' size='small'>hello</Button>
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
```