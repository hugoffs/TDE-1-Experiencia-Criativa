# TDE-1 Experiência Criativa

**Autor:** Hugo Fagundes Faria Santos  
**Curso:** BCC, Turma U

---

## Descrição do Projeto

Este projeto é parte do TDE-1 da disciplina de Experiência Criativa.  
Trata-se de um sistema full-stack utilizando **Node.js** no backend e **React** no frontend, com banco de dados **MySQL** para armazenamento de informações.  
O sistema permite gerenciar jogos, incluindo adição, listagem e manipulação de dados.

---

## Tecnologias Utilizadas

- **Frontend:** React, Vite  
- **Backend:** Node.js, Express, Cors, MySQL2, Nodemon  
- **Banco de Dados:** MySQL  
- **Outras ferramentas:** Visual Studio Code, Git  

---

## Estrutura do Projeto

### Frontend
- **css/** – Contém os estilos utilizados no site.  
  - Arquivos: `App.css`, `main.css`, `gamesCard.css`
- **routes/** – Contém as rotas utilizadas na aplicação.  
  - Arquivo: `gamesCard.jsx`
- **src/** – Contém o arquivo principal do código e o ponto de entrada.  
  - Arquivos: `main.jsx`, `App.jsx`

### Backend
- **controller/** – Contém as funções de controle que fazem consultas no banco de dados.  
  - Arquivo: `controller_jogos.js`
- **db/** – Faz a conexão com o banco de dados, incluindo um arquivo SQL de teste.  
  - Arquivos: `db.js`, `db.sql`
- **routes/** – Contém as rotas para executar o CRUD no banco de dados.  
  - Arquivo: `routes_jogos.js`
- `app.js` – Cria o servidor na porta `8800`.

### Video
- pasta que contem o link do Video explicando o codigo

---

## Inicialização do Projeto
- obeservação: 
    não esqueça de entrar na pasta do banco de dados e fazer alteração para a execução do codigo
### Backend
    ```bash
    cd backend
    npm install cors express mysql2 nodemon
    npm start
    ```
### Front
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
