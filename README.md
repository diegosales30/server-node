# pass.in

### DEPENECIAS
```
  npm i typescript @types/node -D
    npx tsc --init
    https://github.com/tsconfig/bases?tab=readme-ov-file
    "include": ["src"]
    no terminal - npx tsc para converter
  npm i tsx -D
    npx tsx watch src/server.ts 
    add no package.json "scripts": { "dev": "tsx watch src/server.ts" }
  instalar o fastify micro-framework pra node igual express.
  npm i fastify
  npm i prisma -D
    npx prisma init --datasource-provider SQLite por enquanto o sqlite
    rodar o prisma studio -  npx prisma studio
    "dev": "tsx watch --env-file .env src/server.ts"
  npm i zod para validaçao
  npm i fastify-type-provider-zod
  npm i @fastify/swagger
  npm i @fastify/swagger-ui
  npm i @fastify/cors
```

O pass.in é uma aplicação de gestão de participantes em eventos presenciais.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.
## Requisitos
### Requisitos funcionais

  O organizador deve poder cadastrar um novo evento;
  O organizador deve poder visualizar dados de um evento;
  O organizador deve poser visualizar a lista de participantes;
  O participante deve poder se inscrever em um evento;
  O participante deve poder visualizar seu crachá de inscrição;
  O participante deve poder realizar check-in no evento;

### Regras de negócio

  O participante só pode se inscrever em um evento uma única vez;
  O participante só pode se inscrever em eventos com vagas disponíveis;
  O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

    O check-in no evento será realizado através de um QRCode;

### Documentação da API (Swagger)

Para documentação da API, acesse o link: https://nlw-unite-nodejs.onrender.com/docs
Banco de dados
Nessa aplicação vamos utilizar banco de dados relacional (SQL). Para ambiente de desenvolvimento seguiremos com o SQLite pela facilidade do ambiente.

### anotações

frameqork para node = nest.js,  e microframework mais usados = express, esta meio desatualizado e fastify.
 SOAP era um aquivo xml  gigatesco então
vamos usar o REST
metodos http: get, post, put, delete, patch, head, options,...
corpo da requisição (request body) = post, put
paramentros de buscas (search params/ query params) = get
pararetros de rota (route params) indetificaçao de recursos = get, put, delete, patch
cabeçalho (headers) contexto da request =  get, post, put, delete, patch, options

formas de conectar com bancos relacionais
driver nativos / query builders / ORMs

driver nativos = escreve sql na mão, + desempenho na app, porem é facil de cometer erros.
query builder = Knex.js ajuda a escrever sql de maneira facil com js;
ORMs = Sequelize, TypeORM, Prisma, drizzle (muit prematuro)

20x => sucesso
30x => redirecionamento
40x => erro de cliente (erro em alguma informação enviada pelo front)
50x => erro do servidor (erro diretamente ligado ao servidor)