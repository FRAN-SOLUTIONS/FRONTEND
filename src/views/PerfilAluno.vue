<script setup>
import HeaderLogado from '@/components/HeaderLogado.vue'
import FooterComp from '@/components/FooterComp.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';
axios.defaults.withCredentials = true;

const orientador = ref(null);
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8082/FRAN/orientadores/me');
    orientador.value = response.data;
  } catch (error) {
    console.error("Erro ao buscar orientador:", error);
  }
});

</script>

<template>
  <HeaderLogado />
  <!--Modelo para Perfil do Aluno-->
  <main class="d-flex align-items-center justify-content-center">
    <div class="card container my-5 shadow-sm">
      <div class="card-body py-4 px-5">
        <div id="Infos" class="row card-block-height">
          <div
            id="alunoInfo"
            class="col pe-0 d-flex flex-column align-items-center justify-content-center"
          >
            <div>
              <h5 class="fw-bold">
                Nome do Aluno:
                <span class="fw-normal">Igor de Almeida Aguiar</span>
              </h5>
              <h5 class="fw-bold">
                Prontuário: <span class="fw-normal">SP3066231</span>
              </h5>
              <h5 class="fw-bold">
                Curso: <span class="fw-normal">Informática</span>
              </h5>
              <h5 class="fw-bold mb-0">
                E-mail:
                <span class="fw-normal">igor.aguiar@aluno.ifsp.edu.br</span>
              </h5>
            </div>
          </div>
          <div class="vr p-0"></div>
          <div
            id="estagioInfo"
            class="col ps-5 d-flex flex-column align-items-center justify-content-center"
          >
            <div>
              <h5 class="fw-bold">
                Período de Estágio:
                <span class="fw-normal" id="data-inicio-fim"
                  >10/10/2024 a 29/11/2024</span
                >
              </h5>
              <h5 class="fw-bold">
                Status do Estágio:
                <span class="fw-normal" id="statusEstagio">EM TRAMITÊ</span>
              </h5>
              <h5 class="fw-bold">
                Estágio Obrigatório:
                <span class="fw-normal" id="obrigatorio">SIM</span>
              </h5>
              <h5 class="fw-bold mb-0">
                Carga Horário Diária:
                <span class="fw-normal" id="cargaDiaria">6 horas</span>
              </h5>
            </div>
          </div>
        </div>
        <hr class="m-0" />
        <div id="table" class="d-flex justify-content-center mt-5">
          <table class="table table-bordered w-75">
            <thead>
              <tr>
                <th scope="col">Mês do Relatório</th>
                <th scope="col">Data de Inicio-Fim<br />do Relatório</th>
                <th scope="col">Data Máxima<br />para Entrega</th>
                <th scope="col">Data da Entrega</th>
                <th scope="col">Status</th>
                <th scope="col">Validar</th>
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
    </div>
  </main>
  <FooterComp />
</template>

<style scoped>
.card-block-height {
  min-height: 200px;
}

td,
th {
  text-align: center;
  vertical-align: middle;
}

.checkbox,
.checkbox:checked {
  box-shadow: none;
}

.checkbox:checked {
  background-color: var(--bs-secondary);
}

.checkbox:focus {
  border-color: var(--bs-secondary);
}

/*.border-red{
  border-style: solid;
  border-color: #CC1B25;
  border-width: 1px;
  opacity: 75%;
}*/
</style>
