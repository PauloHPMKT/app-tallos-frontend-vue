<template>
  <Header @toggle="toggleSideBar"/>
  <div class="container_vw">
    <MenuSideBar v-if="hiddenToggleSideBar" />
    <main class="container_template">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/components-user/Header.vue'
import MenuSideBar from '@/components/components-user/Menus/MenuSideBar.vue'

export default defineComponent({
  components: { Header, MenuSideBar },
  name: 'TemplateDefault',
  data() {
    return  {
      hiddenToggleSideBar: false
    }
  },
  methods: {
    toggleSideBar() {
      this.hiddenToggleSideBar = !this.hiddenToggleSideBar
    }
  }
})
</script>
