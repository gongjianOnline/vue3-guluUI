<template>
  <article class="markdown-body" v-html='md'>
    
  </article>
</template>
<script lang="js">
import md from "../markdown/GetStarted.md"
export default {
  data(){
    return{
      md
    }
  }
};
</script>
<style lang="scss" scoped>
</style>