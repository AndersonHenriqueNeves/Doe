<p align="center">
<img src="./public/logo.png" alt="DOE Sangue"></img>
</p>

<h1 align="center">MaratonaDev 3.0 - DOE Sangue</h1>

<p align="center">
<a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
<img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
</a>
<a aria-label="Completo" href="https://rocketseat.com.br/maratonadev/aulas/3.0?aula=2">
<img src="https://img.shields.io/badge/MaratonaDev-done-orange?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg=="></img>
</a>
</p>

### Projeto DOE Sangue Desenvolvido durante a 3ª Edição da MaratonaDev da Rocketseat.

## :rocket: Tecnologias

[Node.js](https://nodejs.org/en/)
| [Javascript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript)
| [Html](https://tableless.com.br/o-que-html-basico/)
| [CSS](https://www.w3schools.com/css/)
| [Nodemon](https://nodemon.io/)
| [PostgreSQL](https://www.postgresql.org/)
| [Nunjucks](https://mozilla.github.io/nunjucks/)

## 💻 Projeto

O sistema Doe Sangue é um cadastro doadores de sangue, feito com Node.js, PostgreSQL e algumas dependências JS.

## Frontend

Página com o form oculto
<img align="center" src="./readme-image/hide-form.png"></img>

Página com o form exposto, ao ser clicado o botão "Quero ajudar"
<img align="center" src="./readme-image/show-form.png"></img>

## Instalação

1. Em primeiro lugar, é necessário que você tenha o **Node.js** (com o **NPM**) e o **PostgreSQL** instalados em sua máquina. Caso ainda não os tenha, deixarei aqui os links para download, mas infelizmente não poderei na instalação dos mesmos. Segue os respectivos links de download:

- <a href="https://nodejs.org/en/download/">Node.JS</a>
- <a href="https://www.postgresql.org/download/">PostgreSQL</a>

2. Siga as etapas seguintes para realizar a instalação **do projeto em si**:

- Para baixar o projeto em sua máquina:
```
git clone https://github.com/Lamithy/Doe.git
```

- Entre na pasta do projeto:
```
cd Doe
```
- Baixe as depêndencias que o projeto precisa para executar:
```
npm install
```

- No PostgreSQL, crie um Banco de Dados chamado **'doe'** (sem as aspas) e dentro dele uma tabelas chamada **'donors'** (também sem aspas). Segue o código SQL para a criação da tabela:

```
CREATE TABLE "public"."donors" (
"id" int4 DEFAULT nextval('donors_id_seq'::regclass) NOT NULL,
"name" text COLLATE "default" NOT NULL,
"email" text COLLATE "default" NOT NULL,
"blood" text COLLATE "default" NOT NULL
)
WITH (OIDS=FALSE);
```

- Execute o projeto:
```
npm start
```
- Abra o projeto em seu navegador, no seguinte endereço:
```
localhost:3000
```

