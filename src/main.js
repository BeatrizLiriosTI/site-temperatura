import { buscarDadosClima } from './api.js';
import { exibirClima } from './dom.js';

const botao = document.getElementById('botao-buscar');
const input = document.getElementById('campo-cidade');

botao.addEventListener('click', async () => {
    const cidade = input.value;

    if (cidade) {
        try {
            const dados = await buscarDadosClima(cidade);
            exibirClima(dados);
        } catch (erro) {
            alert("Erro: " + erro.message);
        }
    }
});