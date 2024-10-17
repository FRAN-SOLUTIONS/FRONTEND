<script setup>
import HomePage from '../views/HomePage.vue'
import '../assets/css/global.css'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToLogin() {
  router.push({ name: 'LoginPage' })
}

function goToSignUp() {
  router.push({ name: 'CadastroDeAlunos' })
}
</script>

<template>
    <header class="bg-custom text-white py-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
            <img src="../assets/images/if_logo.png" alt="Logo" class="header-logo">
        </div>
        <div>
            <router-link to="/cadastroAlunos" class="btn btn-success mr-2" style="background-color: #01400B; border-color: #EAEBEE; margin: 10px"> Cadastro </router-link>
            <router-link to="/login" class="btn btn-success mr-2" style="background-color: #01400B; border-color: #EAEBEE;"> Login </router-link>
        </div>
    </header>
</template>

<style scoped>
/*background-color: #F2F2F2;*/
.header-logo {
    height: 80px;
    margin-right: 20px;
} 

/* Estilo atualizado para o footer */
footer {
    background-color: #01400B; /* Cor verde escolhida */
    color: #ffffff; /* Cor do texto */
    text-align: center;
    padding: 1rem 0;
}

/* Responsividade */
@media (max-width: 768px) {
    .header-logo {
        height: 60px; /* Ajuste a altura da imagem conforme necessário */
    }

    header h1 {
        font-size: 1.5rem;
    }

    .container {
        padding: 10px;
    }

    .form-container {
        padding: 15px;
    }

    .form-row .form-group {
        margin-bottom: 10px;
    }

    .btn-custom {
        padding: 8px;
    }
}
</style>