import { createRouter, createWebHistory } from 'vue-router'

//Importando os componentes para criar suas rotas
import HomePage from '@/views/HomePage.vue'
import CadastroDeAlunos from '@/views/CadastroDeAlunos.vue'
import CadastroDeOrientadores from '@/views/CadastroDeOrientadores.vue'
import LoginPage from '@/views/LoginPage.vue'
import RedefinirSenha from '@/views/RedefinirSenha.vue'
import HomeOrientador from '@/views/HomeOrientador.vue'
import TesteConexao from '@/views/TesteConexao.vue'

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
    },
    {
      path: '/cadastroOrientadores',
      name: 'CadastroDeOrientadores',
      component: CadastroDeOrientadores,
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
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
    },
    {
      path: '/teste',
      name: 'TesteConexao',
      component: TesteConexao,
    },
  ],
})

export default router