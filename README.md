<p align="center">
  <img src="./NotaGest-TypeScript/assets/logo-notagest.png" alt="NotaGest Logo" width="180"/>
</p>

<h1 align="center">📄 NotaGest — Sistema de Gerenciamento de Notas Fiscais de Construção</h1>

<p align="center">
  Plataforma completa para o armazenamento, controle e exportação de notas fiscais de construção e reforma.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.2.4-black?style=flat&logo=next.js" alt="Next.js Badge"/>
  <img src="https://img.shields.io/badge/Express-5.1.0-green?style=flat&logo=express" alt="Express Badge"/>
  <img src="https://img.shields.io/badge/MongoDB-8.18.1-4DB33D?style=flat&logo=mongodb" alt="MongoDB Badge"/>
  <img src="https://img.shields.io/badge/MySQL-3.14.1-00758F?style=flat&logo=mysql" alt="MySQL Badge"/>
  <img src="https://img.shields.io/badge/TypeScript-5.8.3-blue?style=flat&logo=typescript" alt="TypeScript Badge"/>
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License Badge"/>
</p>

---

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#arquitetura">Arquitetura</a> •
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#estrutura">Estrutura</a> •
  <a href="#autor">Autor</a>
</p>

---

## 🏗️ Sobre

O **NotaGest** é um sistema completo para **gerenciamento digital de notas fiscais relacionadas à construção e reforma de imóveis**.  
A aplicação permite que o usuário cadastre imóveis, envie imagens de notas fiscais, categorize despesas, gere relatórios em PDF e exporte os dados em Excel.

> 💡 O projeto surgiu com o objetivo de reduzir o uso de papel e facilitar o processo de comprovação de despesas e **regularização imobiliária**.

---

## ⚙️ Arquitetura do Projeto

O **NotaGest** é composto por três camadas principais:

| Módulo | Descrição | Tecnologias Principais |
|---------|------------|------------------------|
| **Frontend** | Interface web onde o usuário interage, faz login, upload e visualiza relatórios. | Next.js, React, TypeScript, Tailwind CSS |
| **Backend (NotaGest Express)** | API REST responsável por autenticação, CRUD de notas e imóveis. | Express, Node.js, MongoDB, MySQL |
| **Microserviços** | Serviços auxiliares independentes (upload, notificações, segurança). | Express, Mongoose, Axios, JWT |


---

## 💡 Funcionalidades Gerais

### 🖥️ Frontend (NotaGest-TypeScript)
- Autenticação (login e cadastro)
- Upload de notas com associação a imóveis
- Cadastro de imóveis
- Geração de PDF e exportação em Excel
- Dashboard com gráficos
- FAQ e formulário de contato

### ⚙️ Backend (NotaGest-Express)
- API RESTful
- Middleware de autenticação JWT
- Integração com bancos MongoDB e MySQL
- Criptografia de senhas com **bcryptjs**
- Gerenciamento de usuários e notas fiscais
- Suporte a CORS e variáveis de ambiente (.env)

### 🧱 Microserviços
| Nome | Descrição | Porta | Tecnologias |
|------|------------|--------|-------------|
| **AuthService** | Geração e validação de tokens JWT | `:3001` | Express, bcryptjs, dotenv |
| **UploadService** | Upload e gerenciamento de imagens no Cloudinary | `:3002` | Express, Axios, Cloudinary |
| **NotificationService** | Envio de e-mails e alertas automáticos | `:3003` | Express, Nodemailer |

---

## 🧩 Tecnologias Utilizadas

| Categoria | Tecnologias |
|------------|--------------|
| **Frontend** | Next.js • React • TypeScript • Tailwind CSS • Material Tailwind • Recharts • jsPDF • xlsx |
| **Backend** | Express • Node.js • MongoDB • MySQL • JWT • bcryptjs • dotenv • CORS |
| **Microserviços** | Axios • Express • JWT • Mongoose |
| **Ferramentas** | Nodemon • GitHub • Cloudinary |

---

## 🚀 Instalação e Execução
