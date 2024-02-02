<script>
import bottom from './pages/bottom.vue'
export default{
  components:{
    bottom,
  },
};
</script>

<template>
  <div id="app">
    <bottom />
  </div>
  
</template>

<style scoped>
#app {
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
