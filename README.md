# 🌦️ Site de Clima

Este é um projeto de estudo que consome dados da API Open-Meteo para exibir informações climáticas em tempo real de qualquer cidade pesquisada. O foco principal foi a implementação de **testes unitários** e o uso de **boas práticas de versionamento**.

## 🚀 Tecnologias
* **JavaScript** (Fetch API para consumo de dados)
* **Jest** (Framework para testes automatizados)
* **HTML5 & CSS3** (Interface responsiva)
* **Node.js & NPM** (Gerenciamento de pacotes)

## 🧪 Testes Unitários
Implementei testes para garantir que a lógica do aplicativo seja resiliente:
* **Formatação de Dados:** Garante que temperaturas decimais (ex: 25.6) sejam exibidas de forma arredondada (26°C).
* **Tratamento de Sinais:** Verifica se temperaturas negativas mantêm a formatação correta.
* **Resiliência:** Validação de busca para evitar que o app trave com entradas inválidas.

Para rodar os testes localmente:
1. Instale as dependências: `npm install`
2. Execute: `npm test`

## 📁 Estrutura do Projeto
* `index.html`: Estrutura da página.
* `assets/css/style.css`: Estilização visual e fundos dinâmicos.
* `dom.js`: Manipulação dos elementos da tela e lógica de interface.
* `api.js`: Lógica de requisição à API Open-Meteo.
* `tests/`: Pasta contendo os arquivos `.test.js`.

## 🛠️ Desafios Superados
* **Configuração de Ambiente:** Resolução de conflitos de políticas de execução no PowerShell para rodar comandos NPM.
* **Organização de Assets:** Ajuste de caminhos relativos para que o JavaScript encontre corretamente as imagens de fundo.
* **Conventional Commits:** Uso de prefixos padronizados (`feat:`, `fix:`, `test:`, `style:`, `docs:`) para manter um histórico de projeto profissional.

