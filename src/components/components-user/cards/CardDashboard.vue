<template>
  <div class="card_bashboard">
    <div class="content_card">
      <Icon icon="carbon:user-avatar" />
      <p>{{ data_user }}</p>
      <span>25</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  name: 'CardDashboard',
  components: { Icon },
  props: {
    data_user: String,
  }
})
</script>