import Vue from 'vue';
import App from './App.vue';
import VueStandAloneModal from 'vue-standalone-modal';

Vue.use(VueStandAloneModal);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
