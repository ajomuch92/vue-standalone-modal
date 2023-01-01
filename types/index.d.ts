import _Vue from 'vue';
import { ModalProps } from '@/interfaces';

declare module 'vue/types/vue' {
  interface Vue {
    $showModal: (options: ModalProps) => void
  }
}