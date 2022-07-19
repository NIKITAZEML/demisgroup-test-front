<template>
  <div id="app">
      <auth-window></auth-window>
  </div>
</template>

<script>

import AuthWindow from "./components/ReviewForm";
export default {
  name: 'App',
  components: {
      AuthWindow
  }
}
</script>

<style>
    @import "./assets/main.css";
</style>
