<template>
  <div>
    <Typography />
    <section class="box_main_content">
      <div class="container-wd">
        <FormRegister />
      </div>
      <div class="container-wd">
        teste
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Typography from '@/components/components-user/Typography.vue'
import FormRegister from '@/components/components-user/Forms/FormRegister.vue'

export default defineComponent({
  name: 'UsersReports',
  components: { Typography, FormRegister },
})
</script>