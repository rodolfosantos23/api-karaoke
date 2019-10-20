# api-karaoke
API de buscas de músicas de karaokê feita em Nodejs e Mongodb.
Diversos karaokês utilizam essa listagem de músicas, resolvi criar uma API para retornar essa listagem e servir como exemplo
de uma API simples e funcional utilizando NodeJs e o banco de dados MongoDb.

Exemplo utilizando o Express e o Mongoose.


# Lista de músicas
Importar a listagem "musicas-karaoke.csv".
Para importar em localhost eu utilizei o software MongoDb Compass. 
A importação em CSV se mostrou muito mais rápida que em JSON.

# Instalação
Atualizar as dependências, exemplo com o NPM:

<pre>
npm install
</pre>

# Utilização
Basta rodar o arquivo index.js

<pre>
node index.js
</pre>

Após isso a aplicação pode ser acessada em http://localhost:3001

# Utilizando Nodemon

Para desenvolver e o servidor se auto atualizar durante o desenvolvimento recomendo utilizar o Nodemon. Para roda-lo já existe
a configuração no arquivo package.json

## Para utilizar o Nodemon com NPM:

<pre>
npm run dev
</pre>

## Para utlizar o Nodemon com Yarn:

<pre>
yarn dev
</pre>
