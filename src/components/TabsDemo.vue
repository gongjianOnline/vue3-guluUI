<template>
  <div>
    <h1>示例一</h1>
    <Tabs>
      <Tab title="导航一">内容一</Tab>
      <Tab title="导航一">内容二</Tab>
    </Tabs>
  </div>
</template>
<script>
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
export default {
  components: {
    Tabs,
    Tab,
  },
};
</script>
<style lang="scss" scoped>
</style>