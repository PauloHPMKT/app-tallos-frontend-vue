<template>
  <div>
    <Typography />
    <section class="box_main_content">
      <div class="container-wd">
        <FormRegister @handleSubmit="submitNewUser"/>
      </div>
      <div class="table-contacts">
        <UserTable />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Typography from '@/components/components-user/Typography.vue'
import FormRegister from '@/components/components-user/Forms/FormRegister.vue'
import UserTable from '@/components/components-user/cards/UserTable.vue'
import userService from '@/services/user-services'

export default defineComponent({
  name: 'UsersReports',
  components: { Typography, FormRegister, UserTable },
  methods: {
    async submitNewUser(data: object) {
      await userService.createUser(data)
    }
  },

  async mounted() {
    await userService.listUsers().then(res => {
      console.log(res.data)
    })
  }
})
</script>