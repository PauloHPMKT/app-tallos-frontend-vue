<template>
  <div class="form-register-contact">
    <div class="icon-container">
      <Icon icon="mi:user-add" />
      <span>Novo Usuário</span>
    </div>
    <form @submit.prevent="$emit('handleSubmit', user)">
      <div class="tag_form_info"> 
        <span @click="hiddenPersonalInfo">Informacoes Pessoais</span>
        <div class="inputs-container" v-if="hiddenPersonal">
          <div>
            <label>Nome Completo</label>
            <input type="text" v-model="user.name" placeholder="Ex: João Carlos">
          </div>
          <div>
            <label>E-mail</label>
            <input type="text" v-model="user.email" placeholder="Ex: meuemail@example.com">
          </div>
          <div>
            <label>Contato</label>
            <input type="text" v-model="user.contact" placeholder="Ex: Somente números">
          </div>
          <div>
            <label>CPF</label>
            <input type="text" v-model="user.cpf" placeholder="Ex: 000.000.000-00">
          </div>
          <div>
            <label>Matricula</label>
            <input type="text" v-model="user.cod_user" placeholder="Crie uma matricula Ex: Somente números">
            <!--criar campo para retornar ultima matricula registrada-->
          </div>
          <div>
            <label>Descricao</label>
            <textarea v-model="user.description" placeholder="Informacoes sobre o contato"></textarea>
          </div>
          <div>
            <label>Senha</label>
            <input type="password" v-model="user.password" placeholder="Crie uma senha de acesso">
          </div>
        </div>
      </div>
      <div class="tag_form_info"> 
        <span @click="hiddenAddressInfo">Endereco</span>
        <div class="inputs-container" v-if="hiddenAddress">
          <div>
            <label>Rua</label>
            <input type="text" v-model="user.location.address.street" placeholder="Ex: Av. Beira Mar, 1010">
          </div>
          <div>
            <label>Complemento</label>
            <input type="text" v-model="user.location.address.complement" placeholder="Ex: Casa, Ap, Sala">
          </div>
          <div>
            <label>CEP</label>
            <input type="text" v-model="user.location.address.zipcode" placeholder="Ex: 00.000-000">
          </div>
          <div>
            <label>Bairro</label>
            <input type="text" v-model="user.location.address.neighborhood" placeholder="Ex: Centro">
          </div>
          <div>
            <label>Cidade</label>
            <input type="text" v-model="user.location.address.city" placeholder="Ex: Fortaleza">
            <!--Ver possibilidade de implementar select de cidades-->
          </div>
          <div>
            <label>Estado</label>
            <input type="text" v-model="user.location.address.state" placeholder="Ex: Ceará">
          </div>
          <div>
            <label>País</label>
            <input type="text" v-model="user.location.address.country" placeholder="Ex: Brasil">
          </div>
        </div>
      </div>
      <div class="tag_form_info"> 
        <span  @click="hiddenCompanyInfo">Organizacão</span>
        <div class="inputs-container" v-if="hiddenCompany">
          <div>
            <label>Cargo</label>
            <input type="text" v-model="user.roles" placeholder="Ex: Vendedor">
          </div>
          <div>
            <label>Departamento</label>
            <input type="text" v-model="user.dept" placeholder="Ex: Vendas">
            <!--Ver a possibilidade de implementar uma collection de departamentos-->
          </div>
          <div>
            <label>E-mail corporativo</label>
            <input type="text" v-model="user.corporative_email" placeholder="Ex: email@tallos.com.br">
          </div>
          <div>
            <label>Área de atuacao (Micro-setor)</label>
            <input type="text" v-model="user.atuation_area" placeholder="Ex: Tecnologia">
          </div>
        </div>
      </div>
      <div class="btn-spacing">
        <Button :value="'Cadastrar'"/>
      </div>
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
  emits: ['handleSubmit'],
  data() {
    return {
      hiddenPersonal: false,
      hiddenAddress: false,
      hiddenCompany: false,
      user:{ 
        cod_user: null,
          name: '',
          email: '',
          contact: '',
          cpf: '',
          description: '',
          password: '',
          location: {
            address: {
              street: '',
              complement: '',
              zipcode: '',
              neighborhood: '',
              city: '',
              state: '',
              country: '',
            },
          },
          roles: '',
          dept: '',
          corporative_email: '',
          atuation_area: '',
      }
    }
  },
  methods: {
    hiddenPersonalInfo() {
      this.hiddenPersonal = !this.hiddenPersonal

      if (this.hiddenPersonal !== false) {
        this.hiddenAddress = false
        this.hiddenCompany = false
      }
    },

    hiddenAddressInfo() {
      this.hiddenAddress = !this.hiddenAddress

      if (this.hiddenAddress !== false) {
        this.hiddenPersonal = false
        this.hiddenCompany = false
      }
    },
  
    hiddenCompanyInfo() {
      this.hiddenCompany = !this.hiddenCompany

      if (this.hiddenCompany !== false) {
        this.hiddenPersonal = false
        this.hiddenAddress = false
      }
    },
  }
})
</script>
