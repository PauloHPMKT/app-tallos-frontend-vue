<template>
  <Header />
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import Header from '@/components/components-user/Header.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { Header },
  name: 'TemplateDefault',
})
</script>