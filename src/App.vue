<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <br>
    <more-tree></more-tree>
    <br>
    <tree-grid></tree-grid>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MoreTree from './components/MoreTree.vue'
import TreeGrid from './components/TreeGrid.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
    MoreTree,
    TreeGrid
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
