# Chat com Gemini API

Aplicação de chat desenvolvida durante a graduação em Análise e Desenvolvimento de Sistemas, com integração à API do Gemini.

## Sobre o projeto

O Projeto consiste em uma aplicação de chat capaz de enviar mensagens para a API do Gemini e apresentar as respostas na interface da aplicação.
O desenvolvimento também envolveu a utilização de testes automatizados, integração com GitHub Actions e organização do código seguindo boas práticas de desenvolvimento de software.

## Tecnologias Utilizadas

- JavaScript
- HTML
- CSS
- API do Gemini
- Jest
- Supertest
- Git
- GitHub Actions

## Objetivo

O Projeto foi desenvolvido como atividade acadêmica, com o objetivo de colocar em prática conceitos de desenvolvimento de software, integração com APIs, testes automatizados, controle de versão e integração contínua.

## Testes

O projeto possui testes automatizados utilizando Jest e Supertest para validar a rota `/perguntar`.

Os testes verificam:

- Retorno de erro ao enviar uma pergunta vazia;
- Aceitação de uma pergunta válida;
- Status das respostas da API.

Atualmente, o projeto possui 2 testes automatizados, ambos aprovados.

## Como executar

1. Clone o repositório.
2. Instale as dependências:

```bash
npm install
