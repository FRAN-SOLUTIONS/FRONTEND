# Repositório do frontend do Sistema para Orientadores de Estágio - IFSP

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)
![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white)


![IFSP_logo](https://github.com/user-attachments/assets/2c3d7e25-d8be-4be3-a4d7-894c0916e626)

# Sobre

Este é um sistema para automatizar processos repetitivos que os orientadores de estágio são obrigados a fazer manualmente no início do estágio dos seus orientandos. 
É uma aplicação web pensada para ser escalonável e tem o objetivo de ser implementada internamente no Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - câmpus São Paulo. 
É realizado pela equipe FRAN Solutions num programa de estágio interno.

![FRAN-Solutions-logo](https://github.com/user-attachments/assets/5f8bc6fc-bc43-44f1-8ea1-1141a422c05c) 

# Instalação

## Pré-requisitos

Tenha instalado no seu computador a versão do [Node.js](https://nodejs.org/pt) 18.3 ou maior.

## Instalação nos computadores do IFSP

Antes de instalar o Vue.js e clonar o projeto no computador da escola, configure o proxy da rede.

No menu iniciar, procure por "Redes" e abra o aplicativo. Irá ser mostrado dois links e duas portas lógicas, copie estas informações.

Abra um novo terminal e digite os seguintes comandos:

```bash
  npm config set proxy  meu.endereco.proxy:8080
```
```bash
  npm config set https-proxy  meu.endereco.proxy:8080
```

Note que "meu.endereco.proxy" é o link que aparece no aplicativo Redes configurado no computador da instituição e que "8080" é a porta lógica.

Se o link não tiver, adicione "http://".

## Etapas

- Clone o repositório

  Em um diretório vazio do seu computador, abra o terminal de comando e digite:
  ```bash
    git clone https://github.com/FRAN-SOLUTIONS/FRONTEND.git
  ```
- Entre na pasta do projeto:
  ```bash
    cd FRONTEND
  ```
- Por fim, instale todas as dependências do projeto, como axios e bootstrap:
  ```bash
    npm install
  ```

# Instruções de uso

## Guia das pastas do projeto

Dentro da pasta ```\src``` é onde serão feitas as alterações do projeto. Nela estão os seguintes diretórios e arquivos:

- assets;
- components;
- router;
- stores;
- views;
- App.vue;
- main.js.

![image](https://github.com/user-attachments/assets/85f8fd67-9b87-45df-9b1d-00ba38b3c041)

Vamos percorrer cada uma dessas pastas para entender o que contém cada uma delas e como utilizá-las.

_**Não será permitido criar arquivos, componentes e pastas fora dessa organização!**_

### Assets

Nesta pasta ficam os arquivos de mídia e de estilo, cada qual a sua pasta correspondente. Se seu arquivo não corresponder a nenhum dos tipos especificados, deve ser alocado na pasta ```\extras```.

- css;
- extras;
- icons;
- images;
- videos.

![image](https://github.com/user-attachments/assets/a4d4be45-1e43-4bbd-8b8c-ca613bfba539)

_Não será permitido criar arquivos dentro de ```\assets``` soltos, todos devem estar dentro de algum dos diretórios listados acima._

### Components

Nesta pasta contém os arquivos de componentes do Vuejs e a pasta ```\__tests__```.

Estes componentes ```.vue``` são criados para serem atribuidos aos elementos  de páginas HTML, como por exemplo, itens de listas, botões, cabeçalhos e rodaés.

_Não será permitido criar pastas dentro de ```\components``` para alocá-los, todos os componetes devem estar soltos dentro deste diretório._

**ATENÇÃO!**

**Componentes Vue.js devem ser nomeados com letra maiúcula e devem possuir mais de uma palavra, como no exemplo: ```HelloWorld.vue```.**

A pasta ```\__tests__``` contém um único arquivo chamado  ```HelloWorld.spec.js``` que é um teste automatizado para verificar o funcionamento do componente *HelloWorld.vue* em um projeto Vue. Utilizando a biblioteca de testes Vitest e a ferramenta @vue/test-utils, ele monta o componente e assegura que, ao receber uma propriedade específica, o texto renderizado pelo componente corresponda ao esperado.

_**Durante esta primeira fase do projeto não utilizaremos esse tipo de teste nos componentes.**_

### Router

A pasta ```\router``` contém um único arquivo chamado  ```index.js``` que é um arquivo JavaScript para definição das rotas das views (páginas) do nosso projeto Vue.js. Esse arquivo utiliza-se do Vue-Router para criar as rotas da aplicação. Isso se faz necessário pois esta é uma SPA.

_Não será permitido criar outras pastas e arquivos dentro de ```\router```._

### Stores

A pasta ```\stores``` contém um único arquivo chamado  ```counter.js``` que define uma store utilizando a biblioteca Pinia (gerenciamento de estado recomendado para projetos Vue 3), nele, a store mantém um estado reativo. Ao exportar essa store, ela se torna acessível em outros componentes do aplicativo, facilitando o compartilhamento e a centralização do estado do contador em toda a aplicação.

_Não será permitido criar outras pastas e arquivos dentro de ```\stores```._

### Views

Nesta pasta contém os arquivos de componentes do Vuejs.

Estes componentes ```.vue``` são criados para serem atribuidos como páginas HTML, como por exemplo, a página inicial, página de cadastro, página de login, etc.

_Não será permitido criar pastas dentro de ```\views``` para alocá-los, todos os componetes devem estar soltos dentro deste diretório._

**ATENÇÃO!**

**Componentes Vue.js devem ser nomeados com letra maiúcula e devem possuir mais de uma palavra, como no exemplo: ```HelloWorld.vue```.**

### App.vue

O arquivo ```App.vue``` é o componente raiz de uma aplicação Vue. Ele serve como ponto de entrada para a estrutura da interface do usuário, onde todos os outros componentes são aninhados. Nele define-se a estrutura geral do layout, integra-se funcionalidades globais e importa-se estilos globais. O App.vue é fundamental para organizar e compor a interface da sua aplicação Vue, atuando como um contêiner para os demais componentes.

**ATENÇÃO!**

**Todos os elementos HTML e componentes que forem colocados no ```App.vue``` sempre aparecerão na tela pois este é o componente raiz. Utilize dos elementos e componentes-views da maneira mais separada possível e chame-os com o ```<Router-Link```. Evite ao máximo colocar elementos diretamente neste arquivo.**

### Main.js

O arquivo ```main.js``` é o ponto de entrada da aplicação Vue, onde a instância da aplicação é criada, configurada e inicializada no componente raiz ```App.vue```. O código também configura o gerenciamento de estado com a Pinia, adiciona o roteamento com o Vue Router e por fim, monta a aplicação no elemento HTML com o ID ```#app``` no ```index.html```.

## Guia de contribuição

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed eros in nunc iaculis sollicitudin. Duis sit amet orci justo. Curabitur vitae arcu malesuada, malesuada nisl ac, luctus leo. Aliquam et urna justo. Cras vel sapien libero. Praesent ac nisi id elit congue vehicula. Vivamus sed arcu ac urna interdum iaculis. Nullam vehicula nibh nisi, vitae tempor enim rhoncus id. Maecenas at libero quam. Phasellus elementum massa nec tincidunt fringilla. 

### GitFlow
//Como fazer os commits

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed eros in nunc iaculis sollicitudin. Duis sit amet orci justo. Curabitur vitae arcu malesuada, malesuada nisl ac, luctus leo. Aliquam et urna justo. Cras vel sapien libero. Praesent ac nisi id elit congue vehicula. Vivamus sed arcu ac urna interdum iaculis. Nullam vehicula nibh nisi, vitae tempor enim rhoncus id. Maecenas at libero quam. Phasellus elementum massa nec tincidunt fringilla. 

# Suporte

Se você tiver dúvidas, encontrar problemas ou precisar de ajuda com este projeto, quiser nos enviar feedbacks e sugestões, sinta-se à vontade para entrar em contato com  o supervisor deste projeto:

 - Nome: Igor de Moraes Sampaio

 - Email: igor.sampaio@ifsp.edu.br

 - GitHub: [Prof-Igor](https://github.com/Prof-Igor)

# Roteiro

//Para alterações futuras desejadas no projeto

# Autores e agradecimentos

 - Maria Helena Baldan Lemes | baldan.lemes@aluno.ifsp.edu.br | [MARIAHELENAMARIA](https://github.com/MARIAHELENAMARIA)

 - Luiza Vieira Silva | EMAIL | [Luizavsilva](https://github.com/Luizavsilva)

 - Hugo Feltran Wirth | EMAIL | [HugoFeltran](https://github.com/HugoFeltran)

# Status do projeto

Em andamento:
 - Início em 18/07/2024.

# Licença

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed eros in nunc iaculis sollicitudin. Duis sit amet orci justo. Curabitur vitae arcu malesuada, malesuada nisl ac, luctus leo. Aliquam et urna justo. Cras vel sapien libero. Praesent ac nisi id elit congue vehicula. Vivamus sed arcu ac urna interdum iaculis. Nullam vehicula nibh nisi, vitae tempor enim rhoncus id. Maecenas at libero quam. Phasellus elementum massa nec tincidunt fringilla. 

# Telas

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed eros in nunc iaculis sollicitudin. Duis sit amet orci justo. Curabitur vitae arcu malesuada, malesuada nisl ac, luctus leo. Aliquam et urna justo. Cras vel sapien libero. Praesent ac nisi id elit congue vehicula. Vivamus sed arcu ac urna interdum iaculis. Nullam vehicula nibh nisi, vitae tempor enim rhoncus id. Maecenas at libero quam. Phasellus elementum massa nec tincidunt fringilla. 
