<template>
  <p class="demo">
    {{ msg }}
  </p>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello this is <demo-component>'
      }
    }
  }
</script>
<style>
.demo{
  background: #ccc;
}
</style>
