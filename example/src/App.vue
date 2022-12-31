<template>
  <div id="app">
    <h1>Example</h1>
    <button @click="showModal()">Show Modal</button>
  </div>
</template>

<script>
import MyModal from './MyModal.vue';

export default {
  name: 'App',
  methods: {
    showModal() {
      this.$showModal({
        parent: this,
        component: MyModal,
        props: {
          message: 'Hello World',
        },
        events: {
          'my-click-event': (message) => {
            console.log(message);
          }
        }
      });
    }
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
