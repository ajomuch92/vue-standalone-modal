<template>
  <transition name="fade">
    <dialog v-show="visible" :open="visible">
      <button v-if="showCloseButton" class="close-button" @click="close()">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <div v-if="withCard" :style="innerStyle" :class="innerClass">
        <component :is="component" v-bind="props" v-on="events"/>
      </div>
      <component v-else :is="component" v-bind="props" v-on="events"/>
    </dialog>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'VueStandaloneModal',
  props: {
    withCard: {
      type: Boolean,
      default: true,
    },
    innerStyle: {
      type: Object,
      default: () => ({}),
    },
    innerClass: [Object, Function, String, Array],
    showCloseButton: {
      type: Boolean,
      default: true
    },
    component: [Object, Function, String],
    props: [Object],
    events: [Object],
  },
  data: () => ({
    visible: false,
  }),
  methods:{
    close() {
      this.$emit('close');
      if (this.component) {
        this.visible = false;
        setTimeout(() => {
          this.$destroy();
          this.$el?.parentNode?.removeChild(this.$el);
        }, 100);
      }
    }
  },
});
</script>

<style scoped>
dialog {
  display: flex;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: inherit;
  min-width: 100%;
  height: inherit;
  min-height: 100%;
  /* padding: var(--spacing); */
  border: 0;
  -webkit-backdrop-filter: blur(0.25rem);
  backdrop-filter: blur(0.25rem);
  background-color: hsla(0, 0%, 83%, 0.25);
  /* color: var(--color); */
}

dialog > div {
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: rgb(0 0 0 / 10%) 0px 10px 50px -3px;
}

.close-button {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  position: fixed;
  background-color: lightgrey;
  top: 50px;
  right: 50px;
  outline: none;
  cursor: pointer;
  border: none;
}


.fade-enter-active, .fade-leave-active {
  transition: all .25s;
}

.fade-enter, .fade-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
</style>
