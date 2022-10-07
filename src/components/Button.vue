<template>
  <button>{{ value }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    value: String,
  }
})
</script>

<style scoped>
button {
  text-transform: uppercase;
  color: #fff;
  padding: 15px 50px;
  background-color: #009acc;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.37);
}
</style>