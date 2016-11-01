'use strict';

const Hapi = require('hapi');
const HapiReactViews = require('hapi-react-views');
const Vision = require('vision');

require('babel-core/register')({
    presets: ['react', 'es2015']
});

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 3000
});

server.register(Vision, (err) => {

    if (err) {
        console.log('Failed to load vision.');
    }

    server.views({
        engines: {
            jsx: HapiReactViews
        },
        compileOptions: {}, // optional
        relativeTo: __dirname,
        path: 'views'
    });
});

const routes = [
    {
        method: 'GET',
        path: '/hello',
        handler: (request, reply) => {
            reply('Olá mundo do HapiJS!');
        }
    },
    {
        method: 'GET',
        path: '/hello/{name}',
        handler: (request, reply) => {
            reply('Olá ' + request.params.name + ', seja bem vindo!');
        }
    },
    {
        method: "GET",
        path: "/default",
        handler: (request, reply) => {

            reply.view('menu');
        }
    }
]

server.route(routes);

server.start((error) => {
    if (error) throw error;
    console.log('Servidor rodando em ' + server.info.uri);
});
