import Vue, { PluginFunction, PluginObject } from 'vue';
import VueStandaloneModal from './vue-standalone-modal.vue'
import { ModalProps } from './interfaces';

const showModal = (options: ModalProps) => {
  const { component, parent, withCard, showCloseButton, events, props, innerClass, innerStyle } = options;
  if (!component || !parent) throw new Error('No child or parent component provided');
  const Modal = Vue.extend(VueStandaloneModal);
  const modalInstance = new Modal({
    parent,
    propsData: {
      component,
      withCard,
      showCloseButton,
      innerClass,
      innerStyle,
      events,
      props
    }
  });
  modalInstance.$mount();
  modalInstance.$data.visible = true;
  parent.$el.appendChild(modalInstance.$el);
}

const install: PluginObject<any> | PluginFunction<any> = {
  install: () => {
    Vue.prototype.$showModal = showModal;
  }
}

export default install;
