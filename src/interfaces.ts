import Vue from 'vue';

export interface ModalProps {
  withCard?: Boolean,
  borderRadius?: Number | String,
  background?: String,
  component?: Object | Function | String,
  parent?: Vue<Record<string, any>>,
  props?: Object,
  events?: Object,
}