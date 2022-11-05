<template>
  <div>
    Dashboard de usuario logado
  </div>
</template>

<script lang="ts">
import Header from '@/components/components-user/Header.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dashboard',
  components: { Header },
})
</script>