<template>
  <div id="app" class="container">
    <Home />
  </div>
</template>

<script>
import Home from '@/views/Home.vue';

export default {
  name: 'App',

  components: {
    Home
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0px;
  padding: 0px;
  height: 100%;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 60px;
}
</style>
