<template>
  <div class="meneger_card">
    <CardDashboard :data_user="message_user"/>
    <CardDashboard :data_user="message_chat"/>
    <CardDashboard :data_user="message_admin"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardDashboard from './cards/CardDashboard.vue'
import { Messages } from '../../types/enums/enums'

export default defineComponent({
  components: { CardDashboard },
  name: 'ManagerOverview',
  data() {
    return {
      message_user: Messages.message_user,
      message_chat: Messages.message_chat,
      message_admin: Messages.message_admin,
    }
  }
})
</script>
