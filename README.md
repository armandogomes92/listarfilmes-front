# Movie CRUD App

Este é um projeto React que permite criar, ler, atualizar e excluir filmes em uma lista de filmes.

## Requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

## Instalação

1. Clone este repositório em sua máquina local:

   ```bash
   git clone https://github.com/armandogomes92/listarfilmes-front.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências usando o npm:

   ```bash
   npm install
   ```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento e visualizar o projeto em seu navegador, execute o seguinte comando:

Antes de iniciar o projeto, vá no caminho src/service/filmes e genero e mude a url para o localhost do backend

```bash
npm start
```

Isso iniciará o aplicativo em [http://localhost:3000](http://localhost:3000).

## Funcionalidades

O aplicativo oferece as seguintes funcionalidades:
Crud
- **Adicionar Filme:** Você pode adicionar um novo filme à lista preenchendo um formulário.
- **Listar Filmes:** Todos os filmes na lista são exibidos na página inicial.
- **Editar Filme:** Você pode editar as informações de um filme existente.
- **Excluir Filme:** Remove um filme da lista.

Redux
- **Adicionar lista de Filme:** Você pode adicionar um novo filme à lista preenchendo um formulário.
- **Pegar um objeto para alterar:** Todos os filmes na lista são exibidos na página inicial.
- **Alugar um filme:** Você pode editar as informações de um filme existente.
- **Devolver Filme:** Remove um filme da lista.

  Obs: Fiz a estrutura de alugar no redux para mostrar a utilização

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- `src/` - Contém o código-fonte do aplicativo React.
  - `components/` - Componentes React reutilizáveis.
  - `pages/` - Paginas acessadas pelo roteamento.
  - `redux` - autoexplicativo
  - `services/` - Requisições HTTP
  - `data/` - Dados de exemplo ou simulação de uma API.
  - `App.js` - O componente raiz do aplicativo.
  - `index.js` - Arquivo de inicialização do React.

**Não pegava em React desde 2018 :P**
