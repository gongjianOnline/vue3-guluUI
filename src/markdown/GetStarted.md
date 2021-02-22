# 开始使用
请先安装本组件库。
然后在你的代码中写入下面的代码
```javascript
    import {Button, Tabs, Switch, Dialog} from "guku-ui"
```
就可以使用我提供的组件了。
##  Vue 单文件组件
代码示例：
```javascript
    <template>
        <div>
            <Button>按钮</Button>
        </div>
    <template/>
    <script lang="ts">
        import {Button, Tabs, Switch, Dialog} from "guku-ui"
        export default {
            components: {Button}
        }
    </script>
```
