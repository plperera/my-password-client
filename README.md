# we-pass-front

Front-end para WePass, uma solução de gerenciamento de Senhas e outras Credenciais.

:D

## Sobre

WePass é uma aplicação de navegador web com a qual você pode gerenciar suas Senhas, Informações do Cartão e Notas Pessoais. Tudo Criptografado!!!

## Rodando em Desenvolvimento

1. Clone este repositório
2. Instale todas as dependências

```bash
npm i
```

3. Execute o front-end em ambiente de desenvolvimento:

```bash
npm start
```

## Building e Starting para produção

```bash
npm run build
npm install -g serve
serve -s build
```

## Executando com o Docker

1. Configure o arquivo .env usando o arquivo .env.example

2. A Aplicação foi feita para rodar com Docker Compose, para isso, siga para: https://github.com/plperera/we-pass