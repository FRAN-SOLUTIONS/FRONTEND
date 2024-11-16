<script setup>
import '@/assets/css/global.css'

import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import BotaoComp from '@/components/BotaoComp.vue'

import { ref } from 'vue'

import { useRoute, useRouter } from 'vue-router'


const router = useRouter() 
const route = useRoute();

const novaSenha = ref('')
const confirmaSenha = ref('')
const token = ref(route.query.token || '');

function resetPassword() {
  if (novaSenha.value !== confirmaSenha.value) {
    alert('As senhas não coincidem!');
    return;
  }

  // Enviar a nova senha e o token para o backend
  fetch('http://localhost:8082/FRAN/orientadores/change-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      password: novaSenha.value,
      token: token.value,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert('Senha redefinida com sucesso!');
        router.push({ name: 'LoginPage' });
      } else {
        alert('Erro ao redefinir a senha.');
      }
    })
    .catch(() => alert('Erro ao conectar ao servidor.'));
}
</script>

<template>
 <HeaderComp/>

  <main class="conteudo">
    
    <h2 class="text-center">
      Preencha os campos a seguir para redefinir sua senha:
    </h2>

    <div class="form-container">
      <form>
        <div>
          <div class="form-group">
            <label for="nova-Senha" class="form-label">Nova Senha:</label>
            <input
              type="password"
              v-model="novaSenha"
              class="form-control"
              required
            />

            <label for="confirma-senha" class="form-label"
              >Confirme a Nova Senha:</label
            >
            <input
              type="password"
              v-model="confirmaSenha"
              class="form-control"
              required
            />

            <BotaoComp
              titulo="Redefinir"
              tamanho="m"
              type="submit"
              @click.prevent="resetPassword"
            />
            <!-- <button @click.prevent="resetPassword" class="btn-custom">
              Redefinir
            </button>  -->
          </div>
        </div>
      </form>
    </div>
  </main>

  <FooterComp />
</template>

<style scoped>
h2 {
  color: #01400b; /* Define a cor */
  text-align: center;
  margin-top: 5%;
  margin-bottom: 3%;
}

.form-container {
  background-color: #fff;
  padding: 20px;
  max-width: 500px; /* Aumenta a largura máxima do contêiner */
  margin: 50px auto;
  margin-top: 0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #eaebee; /* Cor de fundo das caixas de formulário */
}

/* .btn-custom {
  display: block;
  width: 50%;
  padding: 10px;
  background-color: #01400b;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  margin: 30px auto;
}

.btn-custom:hover {
  background-color: #012d08; 
} */
</style>
