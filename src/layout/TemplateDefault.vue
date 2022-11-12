<template>
  <Header @toggle="toggleSideBar"/>
  <div class="container_vw">
    <div class="menu-teste" v-if="hiddenToggleSideBar">
      <ul class="emerge-sidebar">
        <li>Teste</li>
      </ul>
    </div>
    <main class="container_template">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import Header from '@/components/components-user/Header.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { Header },
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

<style lang="scss" scoped>
.menu-teste {
  background-color: red;
  margin-top: 1px;
  width: 200px;
  height: 88.35vmin;
  filter: drop-shadow(2px 0 2px rgba(0, 0, 0, 0.274));
  transition: All cubic-bezier(0.68, -0.55, 0.265, 1.55);
  animation: slide 0.4s ease-in-out;

  @keyframes slide {
    0% {
      width: 0;
    }
    100% {
      width: 200px;
    }
  }

  .emerge-sidebar {
    background: blue;
    padding: 30px;
    color: #fff;
    animation: emerge 0.5s ease-in-out;

    @keyframes emerge {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

}
</style>