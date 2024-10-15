<script setup>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
</script>

<template>
    <HeaderComp />
    <main class="containerDaPagina">
        <div class="conteudoDaPagina">
            <h1>Esta é a página de cadastro dos alunos.</h1>

            <form>
                <h1 style="text-align: center;">Cadastro</h1>
                <br>
                <fieldset>
                    <legend>Dados Pessoais</legend>

                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required style="width: 250px;">
                    <br>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required style="width: 246px;">
                    <br>
                    <label for="rg">RG:</label>
                    <input type="text" id="rg" name="rg" required style="width: 150px;">
                    <br>
                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf" required style="width: 145px;">
                    <br>
                    <label for="cel">Celular:</label>
                    <input type="tel" id="cel" name="cel" required style="width: 150px;">
                    <br>
                    <label for="fone">Telefone:</label>
                    <input type="tel" id="fone" name="fone" style="width: 142px;">
                    <br>
                    <label for="dataNascimento">Data de Nascimento:</label>
                    <input type="date" id="dataNascimento" name="dataNascimento" required>
                    <br>
                    <label for="deficiencia">Portador de Deficiência:</label>
                    <select id="deficiencia" name="deficiencia" required>
                        <option value="não">Não</option>
                        <option value="sim">Sim</option>
                    </select>
                </fieldset>
                <br>
                <fieldset>
                    <legend>Dados do curso</legend>

                    <label for="curso">Curso:</label>
                    <input type="text" id="curso" name="curso" required style="width: 250px;">
                    <br>
                    <label for="matricula">Matrícula:</label>
                    <input type="text" id="matricula" name="matricula" required style="width: 100px;">
                    <br>
                    <label for="semestre">Semestre/Ano:</label>
                    <input type="text" id="semestre" name="semestre" required style="width: 70px;">
                </fieldset>
                <br>
                <fieldset>
                    <legend>Endereço</legend>

                    <label for="endereco">Rua:</label>
                    <input type="text" id="endereco" name="endereco" required style="width: 270px;">
                    <br>
                    <label for="numero">Número:</label>
                    <input type="text" id="numero" name="numero" required style="width: 60px;">

                    <label for="complemento">Compl:</label>
                    <input type="text" id="compl" name="compl" style="width: 100px;">
                    <br>
                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" name="cep" required style="width: 100px;">
                    <br>
                    <label for="bairro">Bairro:</label>
                    <input type="text" id="bairro" name="bairro" required style="width: 180px;">
                    <br>
                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" required style="width: 180px;">
                    <br>
                    <label for="estado">Estado:</label>
                    <select id="estado" name="estado" required style="width: 90px;">
                        <option value="">Selecione</option>
                        <option value="AC">Acre (AC)</option>
                        <option value="AL">Alagoas (AL)</option>
                        <option value="AP">Amapá (AP)</option>
                        <option value="AM">Amazonas (AM)</option>
                        <option value="BA">Bahia (BA)</option>
                        <option value="CE">Ceará (CE)</option>
                        <option value="DF">Distrito Federal (DF)</option>
                        <option value="ES">Espírito Santo (ES)</option>
                        <option value="GO">Goiás (GO)</option>
                        <option value="MA">Maranhão (MA)</option>
                        <option value="MT">Mato Grosso (MT)</option>
                        <option value="MS">Mato Grosso do Sul (MS)</option>
                        <option value="MG">Minas Gerais (MG)</option>
                        <option value="PA">Pará (PA)</option>
                        <option value="PB">Paraíba (PB)</option>
                        <option value="PR">Paraná (PR)</option>
                        <option value="PE">Pernambuco (PE)</option>
                        <option value="PI">Piauí (PI)</option>
                        <option value="RJ">Rio de Janeiro (RJ)</option>
                        <option value="RN">Rio Grande do Norte (RN)</option>
                        <option value="RS">Rio Grande do Sul (RS)</option>
                        <option value="RO">Rondônia (RO)</option>
                        <option value="RR">Roraima (RR)</option>
                        <option value="SC">Santa Catarina (SC)</option>
                        <option value="SP">São Paulo (SP)</option>
                        <option value="SE">Sergipe (SE)</option>
                        <option value="TO">Tocantins (TO)</option>
                    </select>
                </fieldset>
                
                <br>
                <button type="submit">Enviar</button>
            </form>
        </div>
    </main>
    <FooterComp />
</template>

<style scoped>
form{
    width: fit-content;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /*border: 1px solid gray;*/
    background-color: #f7f7f7;
    padding: 10px;
    margin: 20px auto;
    border-radius: 5px;
}
fieldset, input, select{
    border-radius: 8px;
    border: 1px solid gray;
    margin: 5px;
    background-color: #f7f7f7;
}
button{
    cursor: pointer;
    border-radius: 8px;
    background-color: #33b83a;
    height: 30px;
    width: 90px;
}
button:hover {
    background-color: rgb(0, 255, 0);
    border: 1px solid rgb(0, 255, 0);
    box-shadow: 0 0 10px rgb(0, 255, 0);
}
</style>