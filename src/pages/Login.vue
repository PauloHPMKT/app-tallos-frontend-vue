<template>
  <main class="banner-main">
    <div class="form-container">
      <div class="form-content">
        <div class="logo-container">
          <img src="/img/tallos-logo-(1).png" alt="logo Tallos">
        </div>
        <form @submit.prevent="handleSubmit">
          <div>
            <label for="email">Email</label>
            <input 
              id="email"
              type="text" 
              v-model="user.email"
            />
          </div>
          <div>
            <label for="password">Senha</label>
            <input 
              id="password"
              type="password" 
              v-model="user.password"
            />
          </div>
          <div class="btn-centralize">
            <Button
              type="submit" 
              :value="data"
            />
          </div>
        </form>
        <p>Tallos Negócios inteligentes</p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue';

export default defineComponent({
  name: 'Login',
  components: { Button },
  data() {
    return {
      data: 'Login',
      user: {
        email: '',
        password: '',
      },
    }
  },

  methods: {
    handleSubmit(): void {
      console.log(this.user)
    }
  }
})
</script>

<style scoped>
.banner-main {
  max-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background-image: url('/img/banner-login.png');
  background-repeat: no-repeat;
  background-size: contain;
}

.banner-main .form-container {
  width:35%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container .form-content {
  width: 75%;
}

.form-content .logo-container {
  text-align: center;
  margin-bottom: 50px;
}

.form-container img {
  width: 100px;
}

.form-container form {
  width: 100%;
}

.form-container input {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #80808068;
  margin-bottom: 10px;
}

form .btn-centralize {
  display: flex;
  justify-content: center;
  margin: 30px;
}

.form-container p {
  text-align: center;
  margin-top: 60px;
  font-size: 14px;
  color: #808080;
}
</style>