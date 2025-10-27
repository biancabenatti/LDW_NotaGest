<p align="center">
  <img src="https://raw.githubusercontent.com/AnaLauraMS/NotaGest/main/NotaGestTypeScript/assets/1.png" alt="NotaGest Logo" width="180"/>
</p>

<h1 align="center">NotaGest — Sistema de Gerenciamento de Notas Fiscais</h1>

<p align="center">
  Plataforma completa para o armazenamento, controle e exportação de notas fiscais de construção e reforma.
</p>

<p align="center">
  <a href="#sobre">🏗️ Sobre</a> •
  <a href="#arquitetura-do-projeto">⚙️ Arquitetura</a> •
  <a href="#funcionalidades">💡 Funcionalidades</a> •
  <a href="#technologias-utilizadas">🧩 Tecnologias</a> •
  <a href="#acesso-ao-projeto">🌐 Acesso</a> •
  <a href="#autores">👥 Autores</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.2.4-black?style=flat&logo=next.js" alt="Next.js Badge"/>
  <img src="https://img.shields.io/badge/Express-5.1.0-green?style=flat&logo=express" alt="Express Badge"/>
  <img src="https://img.shields.io/badge/MongoDB-8.18.1-4DB33D?style=flat&logo=mongodb" alt="MongoDB Badge"/>
  <img src="https://img.shields.io/badge/TypeScript-5.8.3-blue?style=flat&logo=typescript" alt="TypeScript Badge"/>
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License Badge"/>
</p>

---
## 🏗️ Sobre

O **NotaGest** é um sistema inovador voltado ao **gerenciamento digital de notas fiscais relacionadas à construção e reforma de imóveis**, oferecendo uma plataforma completa que permite a **organização, controle e consulta rápida de documentos fiscais** de maneira prática.  

A plataforma possibilita aos usuários o **cadastro detalhado de imóveis**, o **envio e armazenamento de imagens das notas fiscais**, a **geração de relatórios em PDF** e a **exportação de dados em Excel**, garantindo que toda a documentação esteja sempre organizada e acessível. Com isso, o sistema **reduz significativamente o uso de papel**, promovendo uma gestão mais sustentável e eficiente.  

Além disso, o NotaGest foi desenvolvido pensando em diferentes perfis de usuários: desde **proprietários e administradores de imóveis**, até **empresas de construção e profissionais autônomos**, proporcionando uma **interface intuitiva**, **navegação simplificada** e funcionalidades voltadas à **facilidade de uso e agilidade na tomada de decisões**.  

O sistema também contribui para a **regularização de obras e reformas junto a órgãos públicos**, oferecendo suporte para **declarações fiscais**, **auditorias internas** e **consultas rápidas sobre despesas e investimentos em cada imóvel**.  

> 💡 O projeto foi desenvolvido no curso de **Desenvolvimento de Software Multiplataforma (DSM)** da **FATEC Votorantim**, integrando conceitos de front-end, back-end e banco de dados. A ideia é criar uma solução prática e moderna que atenda às necessidades reais do mercado de construção civil, trazendo **eficiência, organização e confiabilidade** para o gerenciamento de documentos fiscais.




## ⚙️ Arquitetura do Projeto

O sistema foi estruturado em duas principais camadas — **frontend** e **backend** — que se comunicam por meio de uma **API RESTful**.

| Módulo | Descrição | Principais Tecnologias |
|:--------|:-----------|:------------------------|
| **Frontend (NotaGest-TypeScript)** | Interface web onde o usuário interage, faz login, upload e gera relatórios. | Next.js, React, TypeScript, Tailwind CSS |
| **Backend (NotaGest-Express)** | API responsável pela autenticação, persistência de dados e upload de arquivos. | Node.js, Express, MongoDB, Multer, JWT |



## 💡 Funcionalidades

### Frontend (NotaGest-TypeScript)
- Autenticação (login e cadastro)
- Cadastro de imóveis
- Upload de notas fiscais e recibos
- Dashboard com gráficos interativos (Recharts)
- Geração de PDF (jsPDF)
- Exportação de dados em Excel

### Backend (NotaGest-Express)
- API RESTful com endpoints para usuários e notas
- Middleware de autenticação via **JWT**
- Integração com **MongoDB** e **MySQL**
- Criptografia de senhas com **bcryptjs**
- Upload de arquivos com **Multer**
- Documentação de rotas com **Swagger UI**


## 🧩 Tecnologias Utilizadas

| Categoria | Tecnologias |
|------------|--------------|
| **Frontend** | [Next.js](https://nextjs.org) • [React](https://react.dev) • [TypeScript](https://www.typescriptlang.org) • [Tailwind CSS](https://tailwindcss.com) • [AOS](https://michalsnik.github.io/aos/) • [Recharts](https://recharts.org) • [jsPDF](https://github.com/parallax/jsPDF) |
| **Backend** | [Express](https://expressjs.com) • [Node.js](https://nodejs.org) • [MongoDB](https://www.mongodb.com) • [MySQL2](https://www.npmjs.com/package/mysql2) • [JWT](https://jwt.io) • [bcryptjs](https://www.npmjs.com/package/bcryptjs) • [dotenv](https://www.npmjs.com/package/dotenv) • [Multer](https://www.npmjs.com/package/multer) |
| **Documentação** | [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) • [Swagger JSDoc](https://www.npmjs.com/package/swagger-jsdoc) |



## 🌐 Acesso ao Projeto

O projeto está dividido em **Frontend** e **Backend**, que podem ser acessados pelos links abaixo:  

- Frontend: [Acesse aqui](https://nota-gest-frontend.vercel.app/)  
- Backend: [Acesse aqui](COLE_AQUI_O_LINK_DO_BACKEND)  

## 🔹 Autores

- **Rodolfo Antunes de Almeida**  
- **Bianca Pichirilo Vergueiro Benatti**  
- **Jose Paulo de Oliveira**  
- **Ana Laura Martins Souto**
