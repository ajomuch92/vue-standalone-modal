import Vue from 'vue';

export interface ModalProps {
  withCard?: Boolean,
  innerClass?: Object | Function | String | Array<any>,
  innerStyle?: Object,
  showCloseButton?: Boolean,
  component?: Object | Function | String,
  parent?: Vue<Record<string, any>>,
  props?: Object,
  events?: Object,
}