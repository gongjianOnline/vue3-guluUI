<template>
  <div>hello</div>
  <Frank></Frank>
</template>

<script>
import Frank from "./components/Frank"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
