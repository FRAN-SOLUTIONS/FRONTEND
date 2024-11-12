<template>
    <div>
      <div class="card" @click="abrirModal">Clique no Card</div>
  
      <div v-if="modalAberto" class="modal">
        <div class="modal-content">
          <p>Perfil do Aluno</p>
          <button @click="fecharModal">Fechar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        modalAberto: false
      };
    },
    methods: {
      abrirModal() {
        this.modalAberto = true;
      },
      fecharModal() {
        this.modalAberto = false;
      }
    }
  };
  </script>
  
  <style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
  }
  </style>
  