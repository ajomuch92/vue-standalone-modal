<template>
  <div>
    <h1>{{message || 'Example'}}</h1>
    <button @click="$emit('my-click-event', 'hello')">Emit an custom event</button>
    <button @click="$parent.close()">Close programmatically</button>
  </div>
</template>

<script>
export default {
  name: 'MyModal',
  props: {
    message: [String]
  }
}
</script>

<style>

</style>