import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'

// Importando os componentes para criar suas rotas
import HomePage from '@/views/HomePage.vue'
import CadastroDeAlunos from '@/views/CadastroDeAlunos.vue'
import CadastroDeEstagios from '@/views/CadastroDeEstagios.vue'
import CadastroDeOrientadores from '@/views/CadastroDeOrientadores.vue'
import LoginPage from '@/views/LoginPage.vue'
import RedefinirSenha from '@/views/RedefinirSenha.vue'
import HomeOrientador from '@/views/HomeOrientador2.vue'
import TesteConexao from '@/views/TesteConexao.vue'
import PerfilOrientador from '@/views/PerfilOrientador.vue'
import PerfilAluno from '@/views/PerfilAluno.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import TesteModal from '@/views/TesteModal.vue'
import NotificacoesPage from '@/views/AlertaPage.vue'

axios.defaults.withCredentials = true

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/cadastroAlunos',
      name: 'CadastroDeAlunos',
      component: CadastroDeAlunos,
      meta: { requiresAuth: true },
    },
    {
      path: '/cadastroEstagio',
      name: 'CadastroDeEstagios',
      component: CadastroDeEstagios,
      meta: { requiresAuth: true },
    },
    {
      path: '/cadastro',
      name: 'CadastroDeOrientadores',
      component: CadastroDeOrientadores,
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/testeModal',
      name: 'testeModal',
      component: TesteModal,
    },
    {
      path: '/redefinirSenha',
      name: 'RedefinirSenha',
      component: RedefinirSenha,
    },
    {
      path: '/homeOrientador',
      name: 'HomeOrientador',
      component: HomeOrientador,
      meta: { requiresAuth: true },
    },
    {
      path: '/teste',
      name: 'TesteConexao',
      component: TesteConexao,
      meta: { requiresAuth: true },
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: PerfilOrientador,
      meta: { requiresAuth: true },
    },
    {
      path: '/perfilAluno',
      name: 'PerfilAluno',
      component: PerfilAluno,
      meta: { requiresAuth: true },
    },
    {
      path: '/notificacoes',
      name: 'NotificacoesPage',
      component: NotificacoesPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/404',
      name: 'PageNotFound',
      component: PageNotFound,
      meta: { requiresAuth: false },
    },
  ],
})

// Função para verificar autenticação via endpoint
async function checkAuthentication() {
  try {
    const response = await axios.get(
      'http://localhost:8082/FRAN/orientadores/me',
    )
    return response.status === 200
  } catch (error) {
    console.log(error)
    return false // Retorna falso se houver erro (ex.: 401 ou 403)
  }
}

// Guarda de navegação global
router.beforeEach(async (to, from, next) => {
  const isAuthenticated = await checkAuthentication()

  // Se a rota requer autenticação e o usuário não estiver autenticado
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'LoginPage' })
  } 
  // Se o usuário estiver autenticado e tentar acessar rotas públicas
  else if (
    (to.path === '/' || to.path === '/home' || to.path === '/login' || to.path === '/cadastro') &&
    isAuthenticated
  ) {
    next({ name: 'HomeOrientador' })
  } 
  else {
    next() 
  }
})

export default router
