export function exibirClima(dados) {
    const elementoNome = document.getElementById('cidade-nome');
    const elementoTemp = document.getElementById('temperatura');
    const containerResultado = document.getElementById('resultado');

    
    elementoNome.innerText = dados.nome;
    elementoTemp.innerText = `${Math.round(dados.temp)}°C`;

    
    const corpo = document.body;

    if (dados.temp > 25) {
        corpo.style.backgroundImage = "url('./assets/imagens/fundo.jpg')";
    } else if (dados.temp <= 25 && dados.temp > 15) {
        corpo.style.backgroundImage = "url('./assets/imagens/nublado.jpg')";
    } else {
        corpo.style.backgroundImage = "url('./assets/imagens/chuva.jpg')";
    }

    
    corpo.style.backgroundSize = "cover";


    containerResultado.classList.remove('hidden');
}