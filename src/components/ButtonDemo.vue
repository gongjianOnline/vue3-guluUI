<template>
  <div class="markdown-body">
    <div>
      <h1>示例一</h1>
      <Button>hello</Button>
      <Button theme="button">hello</Button>
      <Button theme="link">hello</Button>
      <Button theme="text">hello</Button>
      <h3>代码</h3>
      <div v-html="button1"></div>
    </div>
    <div>
      <h1>示例二</h1>
      <div>
        <Button>hello</Button>
        <Button size="big">hello</Button>
        <Button size="small">hello</Button>
      </div>
      <div>
        <Button>hello</Button>
        <Button theme="link" size="big">hello</Button>
        <Button theme="link" size="small">hello</Button>
      </div>
      <div>
        <Button>hello</Button>
        <Button theme="text" size="big">hello</Button>
        <Button theme="text" size="small">hello</Button>
      </div>
      <h3>代码</h3>
      <div v-html="button2"></div>
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
      <h3>代码</h3>
      <div v-html="button3"></div>
    </div>
    <div>
      <h1>示例四</h1>
      <Button disabled>Hi</Button>
      <Button :disabled="true">Hi</Button>
      <h3>代码</h3>
      <div v-html="button4"></div>
    </div>
    <div>
      <h1>示例五</h1>
      <Button loading>加载中</Button>
      <Button>加载完毕</Button>
      <h3>代码</h3>
      <div v-html="button5"></div>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/button.vue";
import button1 from "../markdown/button1.md";
import button2 from "../markdown/button2.md";
import button3 from "../markdown/button3.md";
import button4 from "../markdown/button4.md";
import button5 from "../markdown/button5.md";
export default {
  data(){
    return{
      button1,
      button2,
      button3,
      button4,
      button5
    }
  },
  components: {
    Button,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
</style>