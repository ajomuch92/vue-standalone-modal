<script lang="ts">
import Vue from 'vue';
import VueStandaloneModal from '@/vue-standalone-modal.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueStandaloneModal
  }
});
</script>

<template>
  <div id="app">
    <vue-standalone-modal />
  </div>
</template>
