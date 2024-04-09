<template>
  <h1>LOOPS</h1>
  
  <TheLoops />

  <h1>SHOW AND IF</h1>

  <ShowAndIf />

  <h1>DATA BINDING</h1>

  <DataBinding />

  <h1>CLASS AND STYLE</h1>

  <ClassAndStyle />

</template>

<script>
import TheLoops from './components/TheLoops.vue';
import ShowAndIf from './components/ShowAndIf.vue';
import DataBinding from './components/DataBinding.vue';
import ClassAndStyle from './components/ClassAndStyle.vue';

export default {
  name: 'App',
  components: {
    TheLoops,
    ShowAndIf,
    DataBinding,
    ClassAndStyle
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
