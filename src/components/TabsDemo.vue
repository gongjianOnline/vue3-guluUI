<template>
  <div class="markdown-body">
    <h1>示例一</h1>
    <Tabs v-model:selected='x'>
      <Tab title="导航1">内容一</Tab>
      <Tab title="导航2">内容二</Tab>
    </Tabs>
    <h3>代码</h3>
    <div v-html="md"></div>
  </div>
</template>
<script>
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import md from "../markdown/TabsDemo.md";
import { ref } from 'vue';
export default {
  data(){
    return{
      md
    }
  },
  components: {
    Tabs,
    Tab,
  },
  setup(){
    const x = ref('导航1')
    return{x}
  }
};
</script>
<style lang="scss" scoped>
</style>