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
    <div class="card-user-container">
      <span>{{ $store.state.userStore.userName.split(' ').slice(0, 2).toString().replace(',', ' ') }}</span>
      <div class="icon-user">
        <img src="/img/user.svg" alt="icone do usuario">
        <!--implementanr logica do avatar do usuario-->
      </div>
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
