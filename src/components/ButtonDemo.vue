<template>
    <div>
        <h1>示例一</h1>
        <Button>hello</Button>
        <Button theme='button'>hello</Button>
        <Button theme='link'>hello</Button>
        <Button theme='text'>hello</Button>
    </div>
    <div>
        <h1>示例二</h1>
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
    </div>
    <div>
        <h1>示例三</h1>
        <div>
            <Button level="main">主要按钮</Button>
            <Button>普通按钮</Button>
            <Button level="danger">危险按钮</Button>
        </div>
        <div>   
            <Button theme="link" level="main">主要链接按钮</Button>
            <Button theme="link">普通链接按钮</Button>
            <Button theme="link" level="danger">危险链接按钮</Button>
        </div>
        <div>
            <Button theme="text" level="main">主要文字按钮</Button>
            <Button theme="text">普通文字按钮</Button>
            <Button theme="text" level="danger">危险文字按钮</Button>
        </div>
    </div>
    <div>
        <h1>示例四</h1>
        <Button disabled>Hi</Button>
        <Button :disabled="true">Hi</Button>
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