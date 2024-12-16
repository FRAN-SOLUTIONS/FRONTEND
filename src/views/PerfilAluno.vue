<script setup>
import BotaoComp from '@/components/BotaoComp.vue';
import { ref } from 'vue';

const showModal = ref(false);
const selectedEstagio = ref(null);

function closeModal() {
  showModal.value = false;
}

</script>

<template>
    <div v-show="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
            <div class="card container my-5 shadow-sm">
                <div class="card-body py-4 px-5">
                    <div id="Infos" class="row">
                        <div id="alunoInfo" class="col pe-0 d-flex flex-column align-items-center justify-content-center">
                            <h5 class="fw-bold">Nome do Aluno: <span class="fw-normal">{{ selectedEstagio?.aluno?.nome }}</span></h5>
                            <h5 class="fw-bold">Prontuário: <span class="fw-normal">{{ estagio?.aluno?.prontuario }}</span></h5>
                            <h5 class="fw-bold">Curso: <span class="fw-normal">{{ estagio?.aluno?.curso }}</span></h5>
                            <h5 class="fw-bold mb-0">E-mail: <span class="fw-normal">{{ estagio?.aluno?.email }}</span></h5>
                        </div>

                        <div class="vr p-0"></div>

                        <div id="estagioInfo" class="col ps-5">
                            <h5 class="fw-bold">Período de Estágio: <span class="fw-normal">{{ estagio?.dataInicio }} a {{ estagio?.dataFim }}</span></h5>
                            <h5 class="fw-bold">Status do Estágio: <span class="fw-normal">{{ estagio?.status }}</span></h5>
                            <h5 class="fw-bold">Estágio Obrigatório: <span class="fw-normal">{{ estagio?.obrigatorio ? 'SIM' : 'NÃO' }}</span></h5>
                            <h5 class="fw-bold mb-0">Carga Horária Diária: <span class="fw-normal">{{ estagio?.cargaHoraria }} horas</span></h5>
                        </div>

                        <div id="botoes" class="col ps-5">
                            <h5 class="fw-bold mb-3">Ações Rápidas</h5>
                            <BotaoComp titulo="Gerar despacho inicial" tamanho="g" />
                            <BotaoComp titulo="Gerar despacho final" tamanho="g" />
                            <BotaoComp titulo="Iniciar estágio automático" tamanho="g" />
                            <BotaoComp titulo="Finalizar estágio automático" tamanho="g" />
                        </div>
                    </div>
                    <hr class="m-0" />
                    <div class="table-responsive mt-5">
                        <table class="table table-bordered w-75">
                            <thead>
                                <tr>
                                    <th>Mês do Relatório</th>
                                    <th>Data de Início-Fim</th>
                                    <th>Data Máxima para Entrega</th>
                                    <th>Data da Entrega</th>
                                    <th>Status</th>
                                    <th>Validar</th>
                                </tr>
                            </thead>
                            <tbody>
                              <tr>
                <th scope="row">Out/2024</th>
                <td>10/10/2024 a 31/10/2024</td>
                <td>30/11/2024</td>
                <td>-</td>
                <td>Futuro</td>
                <td>
                  <input
                    class="form-check-input checkbox"
                    autocomplete="off"
                    type="checkbox"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Nov/2024</th>
                <td>10/11/2024 a 30/11/2024</td>
                <td>31/12/2024</td>
                <td>-</td>
                <td>Futuro</td>
                <td>
                  <input
                    class="form-check-input checkbox"
                    autocomplete="off"
                    type="checkbox"
                  />
                </td>
              </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" @click="closeModal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    border-radius: 10px;
    width: 80%;
    max-width: 1000px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.table {
    width: 100%;
}

.card-body {
    padding: 30px;
}

.card-body h5 {
    margin-bottom: 10px;
}
</style>
