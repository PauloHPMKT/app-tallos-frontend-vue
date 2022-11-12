<template>
  <div class="meneger_card">
    <nav>
      <ul class="menu_list">
        <li>
          <router-link to="/app/users">
            <Icon icon="akar-icons:people-group" />
            <span>Acessar usuários</span>  
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <Icon icon="bi:chat-dots" />
            <span>Acessar chat</span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <Icon icon="icons8:support" />
            <span>Suporte</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  name: 'MenuBar',  
  components: { Icon }
})
</script>