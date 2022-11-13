<template>
  <div class="greeting_content">
    <img src="/img/user.svg" alt="imagem da Tai"/>
    <h3>Boa tarde {{ $store.state.userStore.userName.split(' ').slice(0, 2).toString().replace(',', ' ') }}, seja bem vindo(a) a plataforma Tallos! ;)</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Greeting',  
})
</script>