<template>
  <div class="meneger_card">
    <CardDashboard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardDashboard from './cards/CardDashboard.vue'

export default defineComponent({
  components: { CardDashboard },
  name: 'ManagerOverview',
})
</script>