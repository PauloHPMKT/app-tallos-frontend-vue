<template>
  <div class="form-register-contact">
    <div>
      <Icon icon="bxs:user-plus" />
      <span>Novo Contato</span>
    </div>
    <form @submit.prevent="handleSubmitNewUser">
      <div @click="hiddenPersonalInfo"> 
        <span>Informacoes Pessoais</span>
        <div v-if="hiddenPersonal">
          <input type="text" name="" id="">
          <input type="text" name="" id="">
        </div>
      </div>
      <div @click="hiddenAddressInfo"> 
        <span>Endereco</span>
        <div v-if="hiddenAddress">
          <input type="text" name="" id="">
          <input type="text" name="" id="">
        </div>
      </div>
      <div @click="hiddenCompanyInfo"> 
        <span>Organizacão</span>
        <div v-if="hiddenCompany">
          <input type="text" name="" id="">
          <input type="text" name="" id="">
        </div>
      </div>
      <Button :value="'Cadastrar'"/>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
import Button from '@/components/Button.vue'

export default defineComponent({
  name: 'FormRegister',  
  components: { Icon, Button },
  data() {
    return {
      hiddenPersonal: false,
      hiddenAddress: false,
      hiddenCompany: false,
    }
  },
  methods: {
    hiddenPersonalInfo() {
      this.hiddenPersonal = !this.hiddenPersonal
    },

    hiddenAddressInfo() {
      this.hiddenAddress = !this.hiddenAddress
    },
  
    hiddenCompanyInfo() {
      this.hiddenCompany = !this.hiddenCompany
    },

    handleSubmitNewUser() {
      alert('teste')
    }
  }
})
</script>