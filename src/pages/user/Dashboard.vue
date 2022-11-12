<template>
  <div>
    <div>
      <Greeting />
    </div>
    <div>
      <Typography />
    </div>
    <section class="box_main_content">
      <ManagerOverview />
      <MenuBar />
    </section>
  </div>
</template>

<script lang="ts">
import Greeting from '@/components/components-user/Greeting.vue'
import Header from '@/components/components-user/Header.vue'
import ManagerOverview from '@/components/components-user/ManagerOverview.vue'
import MenuBar from '@/components/components-user/MenuBar.vue'
import Typography from '@/components/components-user/Typography.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dashboard',
  components: { Header, Greeting, MenuBar, ManagerOverview, Typography },
})
</script>,
    ManagerOverview