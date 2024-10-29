<script setup>
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div>
    <HeaderComp />
    <main class="d-flex flex-column align-items-center bg-body-tertiary">
      <div style="width: 95%">
        <div id="begin" class="d-flex flex-column align-items-center my-5">
          <h1 class="fw-bold text-center">
            Seja Bem-Vindo à inovadora Aplicação Web
          </h1>
          <div class="d-flex flex-column align-items-center w-75">
            <h4 class="fw-light text-center">
              Projetada especialmente para facilitar a coordenação dos processos
              de estágio entre orientadores e alunos.
              <br />Com um ambiente intuitivo e funcional, nossa plataforma tem
              como objetivo otimizar a gestão de estágios, proporcionando uma
              experiência mais fluida e eficaz para todos os envolvidos.
            </h4>
          </div>
        </div>
        <br />
        <div id="feature" class="my-4">
          <h2 class="display-6 fw-bold text-center mb-5">
            Recursos Principais:
          </h2>
          <div class="container-fluid w-75">
            <div id="row" class="row row-cols-md-2 g-5 text-center">
              <div>
                <font-awesome-icon icon="fas fa-user-plus" class="fa-3x mb-3" />
                <h3>Cadastro Simplificado</h3>
                <h5>
                  Orientadores podem criar e gerenciar perfis de estágio,
                  permitindo uma visão clara das oportunidades disponíveis.
                </h5>
              </div>
              <div>
                <font-awesome-icon
                  icon="fas fa-folder-open"
                  class="fa-3x mb-3"
                />
                <h3>Acompanhamento de Processos</h3>
                <h5>
                  Nossa ferramenta permite que os orientadores acompanhem o
                  progresso dos alunos em tempo real, garantindo que cada etapa
                  do estágio seja devidamente monitorada.
                </h5>
              </div>
              <div>
                <font-awesome-icon icon="far fa-comments" class="fa-3x mb-3" />
                <h3>Comunicação Direta</h3>
                <h5>
                  Com um sistema de mensagens integrado, orientadores e alunos
                  podem se comunicar de forma rápida e eficiente, promovendo um
                  fluxo contínuo de informações.
                </h5>
              </div>
              <div>
                <font-awesome-icon icon="fas fa-file-pen" class="fa-3x mb-3" />
                <h3>Relatórios e Análises</h3>
                <h5>
                  Gere relatórios detalhados sobre o desempenho dos alunos e as
                  atividades realizadas durante o estágio, facilitando a
                  avaliação e o feedback.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div id="end" class="d-flex flex-column align-items-center mt-5">
          <div class="w-75">
            <h5>
              A aplicação não apenas economiza tempo, mas também melhora a
              organização e a comunicação entre todos os participantes. Estamos
              comprometidos em fornecer uma solução que empodere os
              orientadores, permitindo que eles se concentrem no que realmente
              importa: a orientação e o desenvolvimento dos alunos.
            </h5>
            <!-- <h5>
              Se você é um aluno do IFSP e está prestes a começar um estágio
              (obrigatório ou não) e já conversou com seu orientador,
              cadastre-se para que ele possa dar início ao acompanhamento das
              suas atividades.
              <br />
              <RouterLink to="/cadastroAlunos"
                >Cadastre-se agora mesmo!
              </RouterLink>
            </h5> -->
            <h5>
              Se você é um orientador de estágios do IFSP e vai começar a
              orientar um aluno adicione-o à lista de seus orientandos e começa
              a acompanhá-lo já.
              <br />
              <RouterLink to="/login">Entre e comece!</RouterLink>
            </h5>
          </div>
        </div>
      </div>
    </main>
    <FooterComp />
  </div>
</template>

<style scoped>
#row > div > h3 {
  font-weight: normal;
}

#row > div > h5 {
  font-weight: 300;
}

#end > div > * {
  text-align: center;
}
</style>
