<script setup>
    import HeaderComp from '@/components/HeaderComp.vue';
    import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
    <div>
        <HeaderComp />
        <main class="containerDaPagina bg-body-tertiary">
            <div class="conteudoDaPagina ">
                <h4 class="text-success-emphasis"><strong>Seja bem-vindo à nossa inovadora aplicação web, projetada especialmente para facilitar a coordenação dos processos de estágio entre orientadores e alunos. Com um ambiente intuitivo e funcional, nossa plataforma tem como objetivo otimizar a gestão de estágios, proporcionando uma experiência mais fluida e eficaz para todos os envolvidos.</strong></h4>

                <br>

                <ul>
                    <h3>Recursos Principais: </h3>

                    <li>Cadastro Simplificado: Orientadores podem criar e gerenciar perfis de estágio, permitindo uma visão clara das oportunidades disponíveis.</li>
                    <li>Acompanhamento de Processos: Nossa ferramenta permite que os orientadores acompanhem o progresso dos alunos em tempo real, garantindo que cada etapa do estágio seja devidamente monitorada.</li>
                    <li>Comunicação Direta: Com um sistema de mensagens integrado, orientadores e alunos podem se comunicar de forma rápida e eficiente, promovendo um fluxo contínuo de informações.</li>
                    <li>Relatórios e Análises: Gere relatórios detalhados sobre o desempenho dos alunos e as atividades realizadas durante o estágio, facilitando a avaliação e o feedback.</li>
                </ul>

                <br>

                <p>A aplicação não apenas economiza tempo, mas também melhora a organização e a comunicação entre todos os participantes. Estamos comprometidos em fornecer uma solução que empodere os orientadores, permitindo que eles se concentrem no que realmente importa: a orientação e o desenvolvimento dos alunos.</p>

                <p><strong>Se você é um aluno do IFSP e está prestes a começar um estágio (obrigatório ou não) e já coneversou com seu orientador, cadastre-se para que ele possa dar início ao acompanhamento das suas atividades. <RouterLink to="/cadastroAlunos">Cadastre-se agora mesmo!</RouterLink></strong></p>

                <p><strong>Se você é um orientador de estágios do IFSP e vai começar a orientar um aluno adicione-o à lista de seus orientandos e começa a acompanhá-lo já. <RouterLink to="/login">Entre e comece!</RouterLink></strong></p>
            </div>
        </main>
        <FooterComp />
    </div>
</template>

<style scoped>
h1{
    color: orange;
}
</style>