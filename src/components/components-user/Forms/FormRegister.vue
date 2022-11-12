<template>
  <div class="form-register-contact">
    <div class="icon-container">
      <Icon icon="mi:user-add" />
      <span>Novo Contato</span>
    </div>
    <form @submit.prevent="handleSubmitNewUser">
      <div class="tag_form_info"> 
        <span @click="hiddenPersonalInfo">Informacoes Pessoais</span>
        <div class="inputs-container" v-if="hiddenPersonal">
          <div>
            <label>Nome Completo</label>
            <input type="text" placeholder="Ex: João Carlos">
          </div>
          <div>
            <label>E-mail</label>
            <input type="text" placeholder="Ex: meuemail@example.com">
          </div>
          <div>
            <label>Contato</label>
            <input type="text" placeholder="Ex: Somente números">
          </div>
          <div>
            <label>CPF</label>
            <input type="text" placeholder="Ex: 000.000.000-00">
          </div>
          <div>
            <label>Matricula</label>
            <input type="text" placeholder="Crie uma matricula Ex: Somente números">
            <!--criar campo para retornar ultima matricula registrada-->
          </div>
          <div>
            <label>Descricao</label>
            <textarea placeholder="Informacoes sobre o contato"></textarea>
            <!--criar campo para retornar ultima matricula registrada-->
          </div>
        </div>
      </div>
      <div class="tag_form_info" @click="hiddenAddressInfo"> 
        <span>Endereco</span>
        <div class="inputs-container" v-if="hiddenAddress">
          <input type="text" name="" id="">
          <input type="text" name="" id="">
        </div>
      </div>
      <div class="tag_form_info" @click="hiddenCompanyInfo"> 
        <span>Organizacão</span>
        <div class="inputs-container" v-if="hiddenCompany">
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