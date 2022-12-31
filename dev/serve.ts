import Vue, { VNode } from 'vue';
import Dev from './serve.vue';

import VueStandAloneModal from '@/entry.esm';

Vue.config.productionTip = false;

Vue.use(VueStandAloneModal);

new Vue({
  render: (h): VNode => h(Dev),
}).$mount('#app');
