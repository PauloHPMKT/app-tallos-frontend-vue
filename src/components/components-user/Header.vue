<template>
  <header class="user-header">
    <div class="useful-links">
      <div class="menuicon" @click="$emit('toggle')">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </div>
      <a href="#">Tallos blog</a>
      <a href="#">FAQ</a>
    </div>
    <div>
      <router-link to="/app/admin">
        <img src="/img/tallos-logo-(1).png" alt="Logo Menu principal" class="logo-menu">
      </router-link>
    </div>
    <div>
      card de perfil de usuario
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  emits: ['toggle'],
})
</script>

<style lang="scss" scoped>
.user-header {
  width: 100%;
  padding: 26px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  filter: drop-shadow(2px -2px 5px #808080);
}

.useful-links {
  display: flex;
  justify-content: center;
  align-items: center;
}

.useful-links .menuicon {
  width: 100px;

  svg {
    padding: 10px 20px;
    font-size: 30px;
    font-weight: 100;
    cursor: pointer;
    border: 2px solid transparent;
  }
}


.useful-links a {
  padding: 3px 10px;
  border: 1px solid #009acc;
  border-radius: 20px;
  margin: 0 5px;
  color: #009acc;
  transition: .3s ease;
}

.useful-links a:hover {
  background-color: #009acc;
  color: #fff;
} 

.user-header .logo-menu {
  width: 50px;
  cursor: pointer;
}
</style>