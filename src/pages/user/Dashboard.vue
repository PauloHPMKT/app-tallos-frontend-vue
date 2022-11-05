<template>
  <div>
    <Greeting />
  </div>
</template>

<script lang="ts">
import Greeting from '@/components/components-user/Greeting.vue'
import Header from '@/components/components-user/Header.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dashboard',
  components: { Header, Greeting },
})
</script>