<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>
<script lang='ts'>
import { inject, Ref } from 'vue'
export default {
  setup(){
    const menuVisible = inject<Ref<boolean>>('xxx')
    console.log(`topnav获取的menuVisible为:${menuVisible.value}`);
    const toggleMenu = ()=>{
      menuVisible.value = !menuVisible.value
    }
    return {toggleMenu}
  }
}
</script>
<style lang='scss' scoped>
.topnav {
  background: pink;
  display: flex;
  position: relative;
  z-index: 10;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>