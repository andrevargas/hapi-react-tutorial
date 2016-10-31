// Execute este arquivo no terminal com o comando 'node server.js'.

'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 3000
});

server.start((error) => {
    if (error) throw error;
    console.log('Servidor rodando em ' + server.info.uri);
});