<script lang="ts">
import Vue from 'vue';
import MyModal from './MyModal.vue';

export default Vue.extend({
  name: 'ServeDev',
  methods: {
    showModal() {
      this.$showModal({
        parent: this,
        component: MyModal,
        props: {
          message: 'Hello World',
        },
        events: {
          'my-click-event': (message: string) => {
            console.log(message);
          }
        }
      });
    }
  }
});
</script>

<template>
  <div id="app">
    <h1>Example</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id tempor tellus, condimentum sollicitudin ligula. Praesent mi quam, blandit id urna placerat, bibendum tincidunt libero. Curabitur mattis id elit in lacinia. Pellentesque feugiat ipsum non velit consectetur, vitae ultricies metus interdum. Vivamus suscipit bibendum tristique. Sed rutrum malesuada nulla, in lacinia nunc porta ac. Cras egestas pharetra pulvinar. Cras ut metus cursus, mattis nulla nec, tincidunt dui. Morbi purus magna, consectetur eu porttitor vel, vulputate vitae risus. Sed sodales hendrerit tincidunt. Vivamus pellentesque non lacus ac euismod. Duis malesuada vulputate finibus. Vivamus ac efficitur ligula, non facilisis enim. Donec nulla dolor, facilisis eu nisi id, placerat dictum neque.

      Donec sollicitudin purus at felis consequat, non gravida lorem tincidunt. Suspendisse lectus nunc, consequat sed volutpat ac, semper ut turpis. Duis ipsum ipsum, pellentesque at sem quis, feugiat scelerisque justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tempus felis quis neque dictum tincidunt at vel ligula. Aliquam pharetra eget dui vel pulvinar. Cras facilisis posuere eleifend. Sed volutpat eu nisi blandit placerat. Donec quis viverra ante. Vestibulum vel congue massa, vitae vestibulum mi. Quisque nunc mi, efficitur ut enim ac, congue tincidunt arcu. Sed eu velit et dolor venenatis hendrerit cursus non turpis. Nullam in erat condimentum, placerat odio ac, ultricies diam. Suspendisse molestie leo sit amet ex vestibulum, eget aliquam arcu lacinia.

      Donec euismod sagittis velit. Vestibulum feugiat viverra sem dapibus euismod. Quisque est neque, vestibulum quis luctus ac, aliquam ut ante. Vivamus non sagittis mauris. In cursus pellentesque orci eu dignissim. Nam feugiat, est at pharetra blandit, dui turpis scelerisque odio, sit amet fermentum risus justo a mi. In vitae hendrerit tellus.

      In ex enim, molestie id erat et, fermentum dictum diam. Donec vel vulputate orci. Sed nulla mauris, malesuada ut erat nec, placerat volutpat metus. In blandit justo quis viverra sodales. Pellentesque consequat at est nec accumsan. Praesent pulvinar iaculis enim, sit amet aliquet ex sollicitudin eget. Duis fermentum justo ut tristique iaculis. Curabitur consequat ante urna, non laoreet nunc auctor vitae. Morbi at lectus nibh.

      Aenean nec arcu erat. Suspendisse placerat diam eu congue accumsan. Proin laoreet justo et felis elementum, ac ultrices odio mollis. Mauris vitae mollis urna. Aliquam placerat ipsum blandit commodo malesuada. In hac habitasse platea dictumst. Vivamus eu lectus lobortis, volutpat tellus eget, varius magna. Fusce a lacinia mi, nec facilisis sapien. Vivamus molestie orci tempus, pellentesque justo ut, dignissim mauris. Pellentesque lacinia convallis dolor quis dapibus. Suspendisse cursus mi ultrices, iaculis ante aliquet, elementum elit.
    </p>
    <button @click="showModal()">Show Modal</button>
  </div>
</template>
