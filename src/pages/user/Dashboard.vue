<template>
  <div>
    <Greeting />
    <MenuBar />
  </div>
</template>

<script lang="ts">
import Greeting from '@/components/components-user/Greeting.vue'
import Header from '@/components/components-user/Header.vue'
import MenuBar from '@/components/components-user/MenuBar.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dashboard',
  components: { Header, Greeting, MenuBar },
})
</script>