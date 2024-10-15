import { createRouter, createWebHistory } from 'vue-router'

//Importando os componentes para criar suas rotas
import HelloWorld from '@/views/HelloWorld.vue'
import HomePage from '@/views/HomePage.vue'
import CadastroDeAlunos from '@/views/CadastroDeAlunos.vue'
import CadastroDeOrientadores from '@/views/CadastroDeOrientadores.vue'
import LoginPage from '@/views/LoginPage.vue'
import RedefinirSenha from '@/views/RedefinirSenha.vue'
import HomeAluno from '@/views/HomeAluno.vue'
import HomeCoordenador from '@/views/HomeCoordenador.vue'
import HomeOrientador from '@/views/HomeOrientador.vue'
import TesteConexao from '@/views/TesteConexao.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/cadastroAlunos',
      name: 'CadastroDeAlunos',
      component: CadastroDeAlunos
    },
    {
      path: '/cadastroOrientadores',
      name: 'CadastroDeOrientadores',
      component: CadastroDeOrientadores
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/redefinirSenha',
      name: 'RedefinirSenha',
      component: RedefinirSenha
    },
    {
      path: '/homeAluno',
      name: 'HomeAluno',
      component: HomeAluno
    },
    {
      path: '/homeOrientador',
      name: 'HomeOrientador',
      component: HomeOrientador
    },
    {
      path: '/homeCoordenador',
      name: 'HomeCoordenador',
      component: HomeCoordenador
    },
    {
      path: '/teste',
      name: 'TesteConexao',
      component: TesteConexao
    }
  ],
})

export default router