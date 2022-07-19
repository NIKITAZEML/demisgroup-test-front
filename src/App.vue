<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script>

import Main from "./views/Main";
export default {
  name: 'App',
  components: {
      Main,
  }
}
</script>

<style>
    @import "./assets/main.css";
</style>
