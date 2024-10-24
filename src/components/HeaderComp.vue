<script setup>
import '../assets/css/global.css'
//import { useRouter } from 'vue-router'

//const router = useRouter()

/* function goToLogin() {
  router.push({ name: 'LoginPage' })
}

function goToSignUp() {
  router.push({ name: 'CadastroDeAlunos' })
} */
</script>

<template>
  <header class="py-3 d-flex align-items-center justify-content-between">
    <div class="d-flex align-items-center">
      <img
        src="../assets/images/if_logo_2.png"
        alt="Logo"
        class="header-logo"
      />
    </div>
    <div>
      <h1>// Nome do sistema</h1>
    </div>
    <div>
      <router-link to="/cadastroOrientadores">
        <button
          class="btn btn-outline-success mr-2"
          style="margin: 10px; border: 1px solid white; color: white"
        >
          Cadastro
        </button>
      </router-link>

      <router-link to="/login">
        <button
          class="btn btn-outline-success mr-2"
          style="margin: 10px; border: 1px solid white; color: white"
        >
          Login
        </button>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: #01400b;
  color: white;
}

.header-logo {
  height: 60px;
}
</style>
