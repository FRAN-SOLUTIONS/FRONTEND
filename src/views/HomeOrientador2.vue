<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import BotaoComp from '@/components/BotaoComp.vue';
import HeaderLogado from '@/components/HeaderLogado.vue';
import FooterComp from '@/components/FooterComp.vue';
import FileNavComp from '@/components/FileNavComp.vue';
import '@/assets/css/global.css'

const estagios = ref([]); // Novo array para armazenar os estágios
const showModal = ref(false); // Controla a visibilidade do modal
const selectedEstagio = ref(null); // Armazena o estágio selecionado
const searchValue = ref('');
const cardsPerPage = 10;
const currentPage = ref(1);



function openModal(estagio) {
    selectedEstagio.value = estagio;
    showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

function normalizeText(text) {
    return text.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''); // Remover acentos e espaços extras
}

const filteredEstagios = computed(() => {
    const normalizedSearch = normalizeText(searchValue.value);
    return estagios.value.filter(estagio =>
        normalizeText(estagio.aluno.nome).includes(normalizedSearch)
    );
});

const paginatedEstagios = computed(() => {
    const start = (currentPage.value - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    return filteredEstagios.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(filteredEstagios.value.length / cardsPerPage));

function goToPage(page) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
}

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:8082/FRAN/estagios/orientador/estagios');
        estagios.value = response.data;
    } catch (error) {
        console.error("Erro ao buscar os estágios:", error);
    }
});

async function copiarParaAreaDeTransferencia(texto) {
  try {
    // Usa Clipboard API para copiar o texto
    alert(`Copiado para a área de transferência: ${texto}`);
    await navigator.clipboard.writeText(texto);
  } catch (err) {
    console.error("Erro ao copiar para a área de transferência:", err);
    alert("Não foi possível copiar para a área de transferência. Verifique as permissões do navegador.");
  }
}

function getDespachoInicial() {

const estagio = selectedEstagio.value;
const aluno = estagio.aluno;
const empresa = estagio.empresa || "Não definido"; // Caso não tenha empresa
let estagioNaoObrigatorio = ""
let estagioObrigatorio = ""

if (estagio.obrigatorio)
{
  estagioObrigatorio = "X"
} else{
  estagioNaoObrigatorio = "X"
}

const despachoInicial = `
    <p style='text-align: justify;'><span style='color:null;'><span style='font-size:12pt; font-family:&quot;Arial&quot;,sans-serif;'>&Agrave; Coordenadoria de Integra&ccedil;&atilde;o Escola-Empresa - CEE-SPO</span></span></p>

<p style='text-align: justify;'>&nbsp;</p>

<p style=' text-align: justify;'><span style='color:null;'><span style='font-family: Arial, Sans Serif; text-align: justify;'><span style='font-size:11pt'><strong>ASSUNTO:</strong> Est&aacute;gio Supervisionado</span></span></span></p>

<p style='text-align: justify;'><span style='color:null;'><span style='font-family: Arial, Sans Serif; text-align: justify;'><span style='font-size:11pt'><strong>INTERESSADO: </strong>${aluno.nome}</span></span></span></p>

<p style=' text-align: justify;'><span style='color:null;'><span style='font-family: Arial, Sans Serif; text-align: justify;'><span style='font-size:11pt'><strong>OBJETO: </strong>Despacho sobre est&aacute;gio</span></span></span></p>

<p>&nbsp;</p>

<p style='margin-left: 40px; text-align: justify; font-family: Arial, Sans Serif;'><span style='color:null;'>Venho, por meio deste, apresentar &agrave; Vossa Senhoria o DESPACHO a seguir, por mim emitido, que aprova o Plano de Atividades de Est&aacute;gio do(a) estudante ${aluno.nome} (${aluno.prontuario}), regularmente matriculado(a) no curso  desta institui&ccedil;&atilde;o. O est&aacute;gio dever&aacute; ser registrado como Obrigatório.</span></p>

<p>&nbsp;</p>

<div class='WordSection1'>
<p align='center' class='MsoNormal' style='text-align:center'><span style='color:null;'><span class='eopscxw231936548bcx0'><b><span style='font-size:14.0pt;font-family:&quot;Arial&quot;,sans-serif'>DESPACHO SOBRE EST&Aacute;GIO</span></b></span></span></p>

<p>&nbsp;</p>

<div align='center'>
<table border='1' cellpadding='0' cellspacing='0' class='MsoNormalTable' style='width:100.0%;border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:160;mso-padding-alt:0cm 3.5pt 0cm 3.5pt;mso-border-insideh:
 .5pt solid windowtext;mso-border-insidev:.5pt solid windowtext' width='100%'>
        <tbody>
                <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:21.4pt'>
                        <td colspan='2' nowrap='nowrap' style='width:244.45pt;border:solid windowtext 1.0pt;
  border-right:none;mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:
  solid windowtext .5pt;mso-border-bottom-alt:solid windowtext .5pt;padding:
  0cm 3.5pt 0cm 3.5pt;height:21.4pt' width='326'>
                        <p class='MsoNormal'><span style='color:null;'><b><span style='font-size: 11pt; font-family: &quot;Arial&quot;, sans-serif;'>Aluno: </span></b>${aluno.nome}</span></p>
                        </td>
                        <td colspan='6' style='width:244.5pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-top-alt:solid windowtext .5pt;mso-border-bottom-alt:
  solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;padding:
  0cm 3.5pt 0cm 3.5pt;height:21.4pt' width='326'>
                        <p align='right' class='MsoNormal' style='text-align:right'><span style='color:null;'><b><span style='font-size:11.0pt;font-family:&quot;Arial&quot;,sans-serif'>Matr&iacute;cula n&ordm;: </span></b><span style='font-size:11.0pt;font-family:&quot;Arial&quot;,sans-serif'>${aluno.prontuario}</span></span></p>
                        </td>
                </tr>
                <tr style='mso-yfti-irow:1;height:21.4pt'>
                        <td colspan='8' nowrap='nowrap' style='width:488.95pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 3.5pt 0cm 3.5pt;height:21.4pt' width='652'>
                        <p class='MsoNormal'><span style='color:null;'><b><span style='font-size: 11pt; font-family: &quot;Arial&quot;, sans-serif;'>Nome da Unidade Concedente: </span></b>${empresa}</span></p>
                        </td>
                </tr>
                <tr style='mso-yfti-irow:2;height:23.75pt'>
                        <td nowrap='nowrap' style='width:140.05pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  background:#E7E6E6;padding:0cm 3.5pt 0cm 3.5pt;height:23.75pt' width='187'>
                        <p align='center' class='MsoNormal' style='text-align:center'><span style='color:null;'><b><span style='font-size: 9pt; font-family: &quot;Arial&quot;, sans-serif;'>DOCUMENTO DE EST&Aacute;GIO</span></b></span></p>
                        </td>
                        <td colspan='2' nowrap='nowrap' style='width:107.25pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;background:#E7E6E6;padding:0cm 3.5pt 0cm 3.5pt;
  height:23.75pt' width='143'>
                        <p align='center' class='MsoNormal' style='text-align:center'><span style='color:null;'><b><span style='font-size: 9pt; font-family: &quot;Arial&quot;, sans-serif;'>PER&Iacute;ODO DO DOCUMENTO</span></b></span></p>
                        </td>
                        <td colspan='2' nowrap='nowrap' style='width:87.55pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;background:#E7E6E6;padding:0cm 3.5pt 0cm 3.5pt;
  height:23.75pt' width='117'>
                        <p align='center' class='MsoNormal' style='text-align:center'><span style='color:null;'><b><span style='font-size: 9pt; font-family: &quot;Arial&quot;, sans-serif;'>VALIDADO?</span></b></span></p>
                        </td>
                        <td colspan='2' style='width:91.65pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;background:#E7E6E6;padding:0cm 3.5pt 0cm 3.5pt;
  height:23.75pt' width='122'>
                        <p align='center' class='MsoNormal' style='text-align:center'><span style='color:null;'><b><span style='font-size: 9pt; font-family: &quot;Arial&quot;, sans-serif;'>EST&Aacute;GIO OBRIGAT&Oacute;RIO?</span></b></span></p>
                        </td>
                        <td style='width:62.45pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;background:#E7E6E6;padding:0cm 3.5pt 0cm 3.5pt;
  height:23.75pt' width='83'>
                        <p align='center' class='MsoNormal' style='text-align:center'><span style='color:null;'><b><span style='font-size: 9pt; font-family: &quot;Arial&quot;, sans-serif;'>TOTAL DE HORAS V&Aacute;LIDAS PARA REGISTRO</span></b></span></p>
                        </td>
                </tr>
                <tr style='mso-yfti-irow:3;mso-yfti-lastrow:yes;height:14.25pt'>
                        <td nowrap='nowrap' style='width:140.05pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 3.5pt 0cm 3.5pt;height:14.25pt' width='187'>
                        <p align='center' class='MsoNormal' style='text-align:center'><span style='color:null;'><span style='font-size:9.0pt'><span style='font-family:&quot;Arial&quot;,sans-serif'>Plano de Atividades de Est&aacute;gio</span></span></span></p>
                        </td>
                        <td colspan='2' nowrap='nowrap' style='width:107.25pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.25pt' width='143'>
                        <p class='MsoNormal' style='text-align: center;'><span style='color:null;'><span style='font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif'>${formatarDataSimples(estagio.dataInicio)} a ${formatarDataSimples(estagio.dataTermino)}</span></span></p>
                        </td>
                        <td nowrap='nowrap' style='width:44.85pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.25pt' width='60'>
                        <p align='center' class='MsoNormal' style='text-align:center'><span style='color:null;'><span style='font-size: 9pt; font-family: &quot;Arial&quot;, sans-serif;'>(X) sim</span></span></p>
                        </td>
                        <td nowrap='nowrap' style='width:44.85pt;border-top:none;border-left:none;
                        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                        mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
                        mso-border-alt:solid windowtext .5pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.25pt' width='57'>
                        <p align='center' class='MsoNormal' style='text-align:center'><span style='color:null;'><span class='GramE'><span style='font-size: 9pt; font-family: &quot;Arial&quot;, sans-serif;'>(&nbsp; )</span></span><span style='font-size: 9pt; font-family: &quot;Arial&quot;, sans-serif;'> n&atilde;o</span></span></p>
                        </td><td nowrap='nowrap' style='width:44.85pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.25pt' width='59'><p align='center' class='MsoNormal' style='text-align:center'><span style='color:null;'><span class='GramE'><span style='font-size: 9pt; font-family: &quot;Arial&quot;, sans-serif;'>(${estagioObrigatorio})</span></span><span style='font-size: 9pt; font-family: &quot;Arial&quot;, sans-serif;'> sim</span></span></p></td><td style='width:47.7pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.25pt' width='64'><p align='center' class='MsoNormal' style='text-align:center'><span style='color:null;'><span style='font-size: 9pt; font-family: &quot;Arial&quot;, sans-serif;'>(${estagioNaoObrigatorio}) n&atilde;o</span></span></p></td><td style='width:62.45pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.25pt' width='83'>
                        <p align='center' class='MsoNormal' style='text-align:center'><span style='color:null;'>-</span></p>
                        </td>
                </tr>
                <!--[if !supportMisalignedColumns]-->
                <tr height='0'>
                        <td style='border:none' width='203'>&nbsp;</td>
                        <td style='border:none' width='151'>&nbsp;</td>
                        <td style='border:none' width='4'>&nbsp;</td>
                        <td style='border:none' width='65'>&nbsp;</td>
                        <td style='border:none' width='62'>&nbsp;</td>
                        <td style='border:none' width='64'>&nbsp;</td>
                        <td style='border:none' width='69'>&nbsp;</td>
                        <td style='border:none' width='90'>&nbsp;</td>
                </tr>
                <!--[endif]-->
        </tbody>
</table>
</div>

<p class='MsoNormal'><span style='color:null;'><b><span style='font-size:11.0pt;font-family:&quot;Arial&quot;,sans-serif'>Parecer:</span></b></span></p>

<div style='mso-element:para-border-div;border:solid windowtext 1.0pt;
mso-border-alt:solid windowtext .5pt;padding:1.0pt 4.0pt 1.0pt 4.0pt;
background:#F2F2F2'><span style='color:null;'>O plano de atividades apresentado se encontra adequado&nbsp;para Est&aacute;gio Supervisionado Obrigatório, no contexto do curso  desta institui&ccedil;&atilde;o, motivo pelo qual eu o aprovo enquanto professor orientador de est&aacute;gio do referido curso.</span></div>

<p align='right' class='paragraphscxw76620377bcx0' style='margin:0cm;text-align:
right;vertical-align:baseline'>&nbsp;</p>

<p align='right' class='paragraphscxw76620377bcx0' style='margin:0cm;text-align:
right;vertical-align:baseline'>&nbsp;</p>

<p align='right' class='paragraphscxw76620377bcx0' style='margin:0cm;text-align:
right;vertical-align:baseline'><span style='color:null;'><span class='normaltextrunscxw76620377bcx0'><span style='font-size:11.0pt;font-family:&quot;Arial&quot;,sans-serif'>S&atilde;o Paulo,&nbsp;</span></span><span class='normaltextrunscxw76620377bcx0'><span style='font-size: 11pt; font-family: &quot;Arial&quot;, sans-serif; background: rgb(225, 227, 230) none repeat scroll 0% 0%;'> ${formatarDataExtenso()}<span class='eopscxw76620377bcx0'><span style='font-size:11.0pt;font-family:&quot;Arial&quot;,sans-serif'>.</span></span></span></span></span></p>

<p class='MsoNormal' style='text-align:justify'>&nbsp;</p>

<div align='center'>
<table border='0' cellpadding='0' cellspacing='6' class='MsoTableGrid' style='width:100.0%;mso-cellspacing:4.2pt;border:none;mso-yfti-tbllook:1184;
 mso-padding-alt:0cm 0cm 0cm 0cm;mso-border-insideh:none;mso-border-insidev:
 none' width='100%'>
        <tbody>
                <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
                        <td style='width:6.0cm;padding:0cm 0cm 0cm 0cm' valign='top' width='227'>
                        <p align='right' class='MsoNormal' style='text-align:right'><span style='color:null;'><span class='normaltextrunscxw246734469bcx0'><span style='font-size:11.0pt;
  font-family:&quot;Arial&quot;,sans-serif'>Professor Orientador dos Cursos:</span></span></span></p>
                        </td>
                        <td style='width:11.0cm;padding:0cm 0cm 0cm 0cm' valign='top' width='416'>
                        <p class='MsoNormal' style='text-align:justify'><span style='color:null;'><span style='font-size:11.0pt'><span style='background:#e1e3e6'><span style='font-family:&quot;Arial&quot;,sans-serif'><b>Tecnologia em An&aacute;lise e Desenvolvimento de Sistemas e T&eacute;cnico em Inform&aacute;tica Integrado ao Ensino M&eacute;dio</b></span></span></span></span></p>
                        </td>
                </tr>
                <tr style='mso-yfti-irow:1'>
                        <td style='width:6.0cm;padding:0cm 0cm 0cm 0cm' valign='top' width='227'>
                        <p align='right' class='MsoNormal' style='text-align:right'><span style='color:null;'><span class='normaltextrunscxw246734469bcx0'><span style='font-size:11.0pt;
  font-family:&quot;Arial&quot;,sans-serif'>Nome:</span></span></span></p>
                        </td>
                        <td style='width:11.0cm;padding:0cm 0cm 0cm 0cm' valign='top' width='416'>
                        <p class='MsoNormal' style='text-align:justify'><span style='color:null;'><span class='normaltextrunscxw246734469bcx0'><span style='font-size: 11pt; font-family: &quot;Arial&quot;, sans-serif; background: rgb(225, 227, 230) none repeat scroll 0% 0%;'><b>&nbsp; ${estagio.orientador?.nome|| 'Não definido'}&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </b></span></span></span></p>
                        </td>
                </tr>
                <tr style='mso-yfti-irow:2;mso-yfti-lastrow:yes'>
                        <td style='width:6.0cm;padding:0cm 0cm 0cm 0cm' valign='top' width='227'>
                        <p align='right' class='MsoNormal' style='text-align:right'><span style='color:null;'><span class='normaltextrunscxw246734469bcx0'><span style='font-size:11.0pt;
  font-family:&quot;Arial&quot;,sans-serif'>E-mail institucional:</span></span></span></p>
                        </td>
                        <td style='width:11.0cm;padding:0cm 0cm 0cm 0cm' valign='top' width='416'>
                        <p class='MsoNormal' style='text-align:justify'><span style='color:null;'><span class='normaltextrunscxw246734469bcx0'><span style='font-size: 11pt; font-family: &quot;Arial&quot;, sans-serif; background: rgb(225, 227, 230) none repeat scroll 0% 0%;'><b>&nbsp;${estagio.orientador?.email || 'Não definido'}&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</b> </span></span></span></p>
                        </td>
                </tr>
        </tbody>
</table>
</div>
</div>

<p style='text-align:center'>&nbsp;</p>
  `;



  console.log("Copiando pra área de transferência");
  copiarParaAreaDeTransferencia(despachoInicial);
}

function getDespachoFinal() {
  const estagio = selectedEstagio.value;
  const aluno = estagio.aluno;
  const empresa = estagio.empresa || "Não definido"; // Caso não tenha empresa

  console.log("Copiando pra área de transferência");
  const texto = `
    DESPACHO INICIAL
    Nome do Aluno: ${aluno.nome}
    Prontuário: ${aluno.prontuario}
    Empresa: ${empresa}
    Período do Estágio: ${formatarDataSimples(estagio.dataInicio)} a ${formatarDataSimples(estagio.dataTermino)}
    Estágio Obrigatório: ${estagio.obrigatorio ? 'SIM' : 'NÃO'}
    Validado: ${estagio.validado ? 'SIM' : 'NÃO'}
    Nome do Orientador: ${estagio.orientador?.nome || 'Não definido'}
    E-mail do Orientador: ${estagio.orientador?.email || 'Não definido'}
    Data de Emissão: ${formatarDataExtenso()}
  `;
  copiarParaAreaDeTransferencia(texto);
}


function formatarDataExtenso() {
    const meses = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho",
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = meses[hoje.getMonth()];
    const ano = hoje.getFullYear();
    return `${dia} de ${mes} de ${ano}`;
  }

  function formatarDataSimples(data) {
  const [ano, mes, dia] = data.split('-'); // Divide a data no formato yyyy-mm-dd
  return `${String(dia).padStart(2, '0')}/${String(mes).padStart(2, '0')}/${ano}`;
}

</script>

<template>
  <HeaderLogado />
  <main class="conteudo">
    <FileNavComp />

    <div class="p-3">
      <h2>Meus Estágios: </h2>

      <div class="actions">
        <nav>
          <div class="container-fluid">
            <form class="d-flex" @submit.prevent>
              <input v-model="searchValue" placeholder="Pesquisar Estágio" aria-label="Search" />
              <i class="bi bi-search"></i>
            </form>
          </div>
        </nav>

        <router-link to="cadastroEstagio">
          <BotaoComp titulo="Adicionar Estágio" tamanho="m" type="submit"/>
        </router-link>
        <router-link to="cadastroAlunos">
          <BotaoComp titulo="Adicionar Aluno" tamanho="m" type="submit"/>
        </router-link>
      </div>

      <div class="estagiario-container">
        <div v-for="estagio in paginatedEstagios" :key="estagio.id" class="card" @click="openModal(estagio)">
          <p><strong>Nome do aluno:</strong> {{ estagio.aluno.nome }}</p>
          <p><strong>Prontuário:</strong> {{ estagio.aluno.prontuario }}</p>
          <p><strong>Curso:</strong> {{ estagio.aluno.curso }}</p>
          <p><strong>Status:</strong> {{ estagio.status }}</p>
        </div>
      </div>

      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="goToPage(currentPage - 1)" aria-label="Previous">&laquo;</a>
          </li>
          <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: page === currentPage }">
            <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" @click.prevent="goToPage(currentPage + 1)" aria-label="Next">&raquo;</a>
          </li>
        </ul>
      </nav>
    </div>
  </main>

  <FooterComp />

  <!-- Modal de Estágio -->
  <div v-show="showModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="card container my-5 shadow-sm card_container">
        <div class="card-body py-4 px-5">
          <div id="Infos" class="row">
            <div id="alunoInfo" class="col pe-0 d-flex flex-column align-items-center justify-content-center">
              <h5 class="fw-bold">Nome do Aluno: <span class="fw-normal">{{ selectedEstagio?.aluno?.nome }}</span></h5>
              <h5 class="fw-bold">Prontuário: <span class="fw-normal">{{ selectedEstagio?.aluno?.prontuario }}</span></h5>
              <h5 class="fw-bold">Curso: <span class="fw-normal">{{ selectedEstagio?.aluno?.curso }}</span></h5>
              <h5 class="fw-bold mb-0">E-mail: <span class="fw-normal">{{ selectedEstagio?.aluno?.email }}</span></h5>
              <h5 class="fw-bold mb-0">Telefone: <span class="fw-normal">{{ selectedEstagio?.aluno?.telefone }}</span></h5>
            </div>

            <div class="vr p-0"></div>

            <div id="estagioInfo" class="col ps-5">
              <h5 class="fw-bold">Período de Estágio: <span class="fw-normal">{{ selectedEstagio?.dataInicio }} a {{ selectedEstagio?.dataTermino }}</span></h5>
              <h5 class="fw-bold">Status do Estágio: <span class="fw-normal">{{ selectedEstagio?.status }}</span></h5>
              <h5 class="fw-bold">Estágio Obrigatório: <span class="fw-normal">{{ selectedEstagio?.obrigatorio ? 'SIM' : 'NÃO' }}</span></h5>
              <h5 class="fw-bold mb-0">Carga Horária Diária: <span class="fw-normal">{{ selectedEstagio?.cargaDiaria }} horas</span></h5>
            </div>

            <div id="botoes" class="col ps-5">
              <h5 class="fw-bold mb-3">Ações Rápidas</h5>
              <BotaoComp titulo="Gerar despacho inicial" tamanho="g" @click="getDespachoInicial"/>
              <BotaoComp titulo="Gerar despacho final" tamanho="g" @click="getDespachoFinal"/>
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
h2 {
  font-weight: bold;
  text-align: left;
  margin-bottom: 20px;
  color: #01400b;
}

.card_container{
    width: 100%;
}

.card_body{
    width: 100%;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.estagiario-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.card {
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 20px;
  transition: transform 0.3s ease;
}

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
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.estagioInfo{
    display: flex;
    align-items: center;
    justify-content: center
}

</style>
