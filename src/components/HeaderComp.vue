<script setup>

// Importa o hook 'useRouter' da biblioteca 'vue-router'. Esse hook é usado para acessar a instância do roteador dentro do componente.
import { useRouter } from 'vue-router'

// Cria uma instância do roteador para permitir navegação entre páginas.
const router = useRouter()

function goToLogin() {
  router.push({ name: 'LoginPage' }) // Redireciona para a rota 'LoginPage'.
}

function goToSignUp() {
  router.push({ name: 'CadastroDeAlunos' }) // Redireciona para a rota 'CadastroDeAlunos'.
}
</script>

<template>
    <header class="p-3 bg-success-subtle">
        <div class="container-fluid d-flex align-items-center justify-content-center p-0">
            <div class="d-flex me-auto">
                <img src="../assets/images/if_logo.png" class="logo">
            </div>
            <div class="d-inline flex-grow-1 flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
                </a>

                <div class="d-block w-100 text-center mb-3">
                    <h1 class="text-secondary">Sistema de Orientação de Estágios</h1>
                </div>

                <div class="d-flex">
                    <!-- col-lg-auto col-12 -->
                    <ul class="nav me-lg-auto mb-2 justify-content-center mb-md-0 justify-content-lg-start ms-1">
                        <li><a href="#" class="nav-link px-2 text-secondary d-none">Home</a></li>
                        <li><a href="#" class="nav-link px-2 text-secondary d-none">Features</a></li>
                        <li><a href="#" class="nav-link px-2 text-secondary d-none">Pricing</a></li>
                        <li><a href="#" class="nav-link px-2 text-secondary d-none">FAQs</a></li>
                        <li><a href="#" class="nav-link px-2 text-secondary d-none">About</a></li>
                    </ul>

                    <div class="text-end justify-content-lg-end">
                        <button type="button" class="btn btn-success me-2" @click="goToLogin">Login</button>
                        <button type="button" class="btn btn-light text-success" @click="goToSignUp">Sign-up</button>
                    </div>
                </div>
                
            </div>
        </div>
    </header>
</template>

<style scoped>
/*formatanfo a logo do IF*/
.logo{
    width: 45px;
    height: 50px
}
</style>