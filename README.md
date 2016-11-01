# hapi-react-tutorial
Construindo uma aplicação com Hapi e ReactJS - Tutorial para aula de Programação IV @ SISNET 2016/2

<br />

### Introdução
O objetivo deste tutorial é criar uma simples aplicação utilizando o framework **HapiJS** e a bilioteca **ReactJS**, bem como introduzir os alunos ao ambiente do **Node.<span></span>js**. A aplicação consiste em um servidor rodando no ambiente Node, escrito com auxílio do Hapi, e renderizando suas visualizações com o React.

<br />

### Cap. 1 - O que é Node.<span></span>js?
Conforme descrito pelo [NodeBR](http://nodebr.com/o-que-e-node-js/):
> "Node.<span></span>js é uma plataforma construída sobre o motor JavaScript do Google Chrome para facilmente construir aplicações de rede rápidas e escaláveis. Node.<span></span>js usa um modelo de I/O direcionada a evento não bloqueante que o torna leve e eficiente, ideal para aplicações em tempo real com troca intensa de dados através de dispositivos distribuídos".

**tl;dr:** Node é uma plataforma que sabe executar código **JavaScript**.

O Node possui uma ferramenta para gerenciamento das configurações do projeto e dos módulos de terceiros utilizados, chamada **Node Package Manager**, ou para os mais íntimos, [npm](https://www.npmjs.com/).

E é com ela que vamos dar início ao projeto. Em seu terminal, crie uma pasta para guardar o projeto e navegue até ela com os seguintes comandos:

```bash
mkdir meu-projeto
cd meu-projeto
```

Então, inicie um novo projeto em Node com o seguinte comando:

```bash
npm init
```

A princípio, apenas pressione `Enter` para todos os questionamentos e o projeto estará iniciado.

Se observar bem, você perceberá que foi gerado um arquivo chamado `package.json`. Este arquivo é consequência do comando ```npm init```, e é ele que guarda as configurações do nosso projeto. Abra-o e analise-o, é apenas um arquivo _JSON_ contendo chaves e valores que têm seu significado dentro do projeto. Voltaremos nele mais tarde.

#### Capítulo finalizado! :tada:

Agora você já sabe o que é o Node e como iniciar um projeto utilizando-o. <br />
**Palavras-chave**: `node`, `javascript`, `npm`, `package.json`

<br />

### Cap. 2 - Executando código JavaScript
Agora que já iniciamos nosso projeto, é hora de colocar algo pra funcionar! Vamos fazer com que o Node execute um simples comando JavaScript. Para isso, crie o arquivo `hello.js` dentro da pasta do seu projeto. Dentro dele, escreva o seguinte código JavaScript:

```javascript
console.log("Olá mundo do Node.js!");
```
Salve o arquivo. Em seu terminal, digite o seguinte comando, para executar o conteúdo que você acabou de escrever:

```bash
node hello.js
```
Perceba que em seu terminal foi exibida a _string_ que você escreveu no arquivo. A exibição desta _string_ é consequência da função `console.log()`, e apareceu em seu terminal pois você pediu ao `node` que executasse o JavaScript contido no arquivo `hello.js`.

#### Capítulo finalizado! :tada:

Você já aprendeu como executar arquivos JavaScript com o Node, agora basta fazer coisas úteis com isto! :smile: <br />
**Palavras-chave:** `node`, `javascript`, `hello world`

<br />

### Cap. 3 - Introdução ao HapiJS

Agora que você já sabe que o Node é capaz de executar o conteúdo de arquivos JavaScript, é possível perceber o poder que ele tem.

O Node traz consigo alguns **módulos principais**, chamados de [core modules](https://nodejs.org/api/modules.html#modules_core_modules). Entre estes vários, há um módulo especial que faz com que o Node seja utilizado em larga escala como servidor de aplicações Web: o módulo `http`.

O módulo `http` permite ao Node lidar com as especificações do protocolo da Web, o **HTTP**, e podendo executar funcionalidades com o mesmo intuito de servidores consagrados como **Apache** e **NGINX**. Justamente por poder lidar com isto usando o Node, você não precisar de nenhum software externo para funcionar como servidor em sua aplicação.

Todavia, escrever todo o código necessário para criar um servidor utilizando _apenas_ o módulo `http` pode se tornar extenso e repetitivo.

E é por isso que existem _frameworks_ que lidam com isto para você. Esta é a principal funcionalidade e propósito de existência do **HapiJS**.

Conforme o próprio [site](http://hapijs.com/), o Hapi é (traduzido _brasileiramente_ do inglês):
> "Um framework rico (em funcionalidades) para a criação de aplicações e serviços. O Hapi permite ao desenvolvedor focar na escrita de lógicas reutilizáveis da aplicação ao invés de perder tempo construindo a infraestrutura."

Ora, parece uma coisa boa, não? Vamos utilizá-lo! Go go go! :sparkles:

Como o Hapi não faz parte dos **core modules** do Node (ou seja, é um módulo de _terceiros_), precisamos instalá-lo de alguma forma. Para isto, utilizaremos o `npm` novamente. Digite o seguinte comando em seu terminal:

```bash
npm install --save hapi
```
Se você for uma pessoa observadora (e sabemos que você é), perceberá agora há uma pasta com o nome de `node_modules` na **raiz** de seu projeto. É nesta pasta que ficam guardados os códigos-fonte de todos os módulos de terceiros que você instalou (sim, o Hapi está lá).

Isto é se você for uma pessoa observadora. Mas se você é um paranóico que vive verificando os arquivos a cada 2 segundos (isto a gente não sabe se você é), talvez tenha percebido que o nosso arquivo `package.json` foi alterado. Lembra dele? Pois então, se você abrí-lo, perceberá que o Hapi foi adicionado às dependências do projeto, conforme especificado neste arquivo. Isto também acontecerá para os outros módulos que instalarmos com a _flag_ `--save`.

Hapi instalado, chegou a hora de utilizá-lo de verdade. Crie um arquivo chamado `server.js` na raíz do seu projeto. Dentro deste arquivo, digite o seguinte conteúdo:

```javascript
'use strict';

const Hapi = require('hapi');
```
Vamos tentar entender o que acabou de acontecer:
* Você declarou o [modo restrito](http://www.w3schools.com/js/js_strict.asp) ao arquivo, utilizando a expressão literal `use strict`. Isto é apenas um auxílio para manter a semântica do código em comparação à um JavaScript não restrito. Com este modo você não pode, por exemplo, utilizar uma variável que não foi declarada.
* Você criou uma constante no JavaScript, utilizando a palavra-chave `const`. Esta é uma funcionalidade do [EcmaScript 6](http://es6-features.org/), algo diferente do que estamos acostumados a escrever para os _browsers_. Entretanto, não é necessário reaprender JavaScript para utilizar os conceitos do ES6, assim como você pode utilizar apenas o JavaScript que você já conhece (ES5), no Node.
* À esta constante chamada `Hapi`, você atribuiu todo o conteúdo que foi exportado do módulo `hapi`, com a função `require` que está disponível automaticamente ao utilizar o Node. Isto faz com que o Node vá atrás do código fonte do Hapi, que está em nossa pasta `node_modules`.
* Basicamente, agora todas as funcionalidades exportadas do framework estarão disponíveis para a utilização em nosso código.

Vamos agora à criação do **servidor**. Abaixo de tudo que você já digitou, escreva o seguinte código:
```javascript
const server = new Hapi.Server();
```
Isto lhe dará uma **instância** de `Hapi.Server`, que estamos armazenando na constante `server`. Viu como é fácil criar um servidor assim? Agora basta configurá-lo e executá-lo.

Para configurar o servidor, abaixo da última linha, digite o código:
```javascript
server.connection({
	host: 'localhost',
    port: 3000
});
```
Estas são as configurações iniciais que o nosso servidor precisar para rodar. Em seu método `connection`, passamos um **objeto de configuração**, escrito na notação literal JavaScript. Este objeto contém dois atributos, `host` e `port`. O valor de `host` deve ser o **endereço IP** sob qual nosso servidor será acessado (`localhost`, por padrão). `port` define a **porta** em que a aplicação irá executar.

Feito isto, é simples iniciar o servidor. O código é:

```javascript
server.start((error) => {
	if (error) throw error;
    console.log('Servidor rodando em ' + server.info.uri);
});
```
O que você acabou de fazer é invocar o método `start` do servidor, passando uma **função de callback**. Esta função recebe o argumento `error` que representa um possível erro que pode ser disparado ao invocar este método. Se o erro existir, você irá lançá-lo (`throw`) para que possa entender a causa. Para sabermos que o servidor está sendo executado com sucesso, exibimos uma frase com `console.log()` caso não haja erro. `server.info.uri` nos dirá qual é o endereço em que o servidor está executando.

Está tudo pronto para colocarmos o nosso servidor para rodar. Salve o arquivo e digite o seguinte comando no terminal:
```bash
node server.js
```
Se algum erro de sintaxe for encontrado na tentativa de execução, o Node irá lançar uma exceção, e você poderá facilmente identificá-lo. Se tudo der certo, nada acontece. É isso mesmo (ou mais ou menos isso). Seu terminal ficará "travado", com apenas um cursor piscando. Isto significa que você está executando um processo contínuo naquela aba do terminal. Neste momento o seu servidor HTTP em Node está em execução e esperando requisições serem feitas.

Você pode cancelar a execução do servidor a qualquer momento teclando `Ctrl + C`.

Vamos fazer uma requisição então! Abra o seu navegador, e acesse [http://localhost:3000](http://localhost:3000) (ou qualquer outro endereço que você configurou no método `server.connection()`). O resultado esperado é o seguinte:

![Requisição para o servidor Hapi](http://i.imgur.com/lTk3chx.png)

O resultado é exatamente este que você está vendo. Um erro **HTTP 404**. Acredite ou não, isto significa que _deu tudo certo_. Este erro acontence pois não temos nenhuma **rota** definida. Mas isto já é assunto para outro capítulo. Aliás, parabéns por finalizar este!

#### Capítulo finalizado :tada:
Neste capítulo você aprendeu a instalar módulos com o `npm`, utilizar estes módulos dentro de arquivos JavaScript e como criar um servidor com HapiJS. No próximo capítulo faremos algo ~~realmente~~ relevante. :smile: <br />
**Palavras-chave:** `node`, `javascript`, `hapijs`, `servidor`, `es6`, `módulos`

<br />

### Cap. 4 - Construindo rotas
Agora que você já é capaz de criar um servidor e fazê-lo aguardar por requisições, basta enviar alguma resposta para diferentes **URL's** que forem requisitadas dentro de seu domínio. Chamaremos estas URL's existentes dentro da nossa aplicação de **rotas**.

Precisamos fazer com que o servidor detecte e envie algum conteúdo para rotas pré-definidas por nós. Tente adivinhar o que aconteceu para obtermos um erro 404 do HTTP ao abrir `localhost:3000` no navegador... Você tentou fazer uma requisição para a rota `/` através do método `GET`, a qual o servidor não conhece, e por consequência não está habilitado a enviar uma resposta decente. Resultado: erro 404 na sua cara! É amigo, a vida tem dessas...

Sabendo disso, vamos então criar rotas para a nossa aplicação!

No seu arquivo `server.js`, adicione as seguintes linhas de código, **entre** o método `server.connect()` e o método `server.start()`:

```javascript
var routes = [
    {
        method: 'GET',
        path: '/hello',
        handler: (request, reply) => {
            reply('Olá mundo do HapiJS!');
        }
    }
];
```
O que você acabou de fazer foi:
- [x] Criar uma variável que armazena um _array_ de objetos.
- [x] Adicionar um objeto à este array.

O importante disso tudo é que, o objeto que você adicionou à este array corresponde a uma **definição** de rota para o Hapi. Assim, podemos dizer que nossa variável `routes` armazena um vetor de rotas.

Mas o que significam estes atributos no objeto da rota:

Atributo | Definição
---------|----------
`method` | O método HTTP deve ser utilizado para acessar tal rota.
`path` | O caminho (URL) que deve ser acessado para chegar à rota.
`handler` | Uma função* que lida com a requisição e a resposta.

<span>*</span>Nem sempre é uma função.

Acreditamos que os atributos `path` e `method` são auto-explicáveis. Vale a pena abordar o comportamento do método `handler`. Neste nosso exemplo, `handler` recebe uma função que possui 2 argumentos: `request` e `reply`. Estes 2 fazer exatamente o que o seu cérebro está te dizendo, lidam com a requisição e a resposta daquela rota, respectivamente.

Em nosso primeiro exemplo, ao realizarmos uma requisição via `GET` para `localhost:3000/hello`, nosso argumento `reply` entrará em ação, em forma de **função**, e irá retonar a _string_ "Olá mundo do HapiJS!". Não acredita? Faça o teste: pare o servidor, com `Ctrl + C`, e o inicie novamente, com `node server.js`.

Acesse [http://localhost:3000/hello](http://localhost:3000/hello), e se o resultado for o seguinte, tudo ocorreu bem:

![Requisição para a rota /hello](http://i.imgur.com/qIocd1w.png)

<br />

### Cap. 5 - Introdução ao React
Agora que você já sabe fazer rotas, vamos aprender um pouco sobe o React. O React é uma Biblioteca Javascript para criação de interfaces para usuários, ou seja ela se preocupa apenas com a parte da view e não com o backend.

Para começarmos, vamos instalar a dependência necessária do React

```bash
npm install react --save
```

Dito isto, vamos criar o nosso primeiro componente React que será o nosso menu e ficara dentro da pasta views.

```javacript
// views/menu.jsx
'use strict';

const React = require('react');

const Component = React.createClass({
    displayName: 'Menu',
    render: function () {

        return (
            <div>
                Hello World!;
                <div style={{ width: '100%', height: '100px', border: '1px solid red' }}>
                    MEU MENUZÃO
                </div>
            </div>
        );
    }
});

module.exports = Component;
```

O nosso arquivo terá a extensão JSX que é um transpiler que simplesmente compila código. Explicando um pouco sobre o código, nós estamos criando um componente do React, chamamos os métodos displayName que é uma string usada para debugar mensagens, o render que serve para retornar um único elemento React.

O module.exports serve para nós exportamos um módulo, para podermos usar em outros lugar, como veremos no próximo capítulo.

#### Capítulo finalizado :tada:
Neste capítulo você aprendeu a instalar módulo do React com o `npm`, utilizar este módulo para criar o seu primeiro componente e exportar ele. No próximo capítulo vamos configurar o servidor para conseguir utilizar os arquivos do React <br />
**Palavras-chave:** `node`, `javascript`, `react`, `módulos`


### Cap. 6 - Usando React com HapiJS
Agora que já você já sabe como criar um componente do React, vamos aprender a utilizar ele junto a um servidor do Hapi e para isto usaremos alguns plugins como o babel, hapi-react-views, hapi-dom e vision

```bash
npm install babel babel-core babel-preset-es2015 babel-preset-react hapi-react-views react-dom vision --save
```

O babel, servirá para traduzir ecmascript e elementos do React para javascript. O Vision serve para facilitar a decisão de qual motor de template que cada arquivo vai usar. O hapi-react-view é um motor template, que serve para renderizar um elemento do React, transformando em HTML.

Já sabendo o que cada uma das coisas fazem, vamos fazer com que o nosso servidor utilize isto tudo para mostrar em uma rota o nosso componente React

```javacript
// server.js
//...
const HapiReactViews = require('hapi-react-views');
const Vision = require('vision');

//...

require('babel-core/register')({
    presets: ['react', 'es2015']
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
    //...,
    {
        method: "GET",
        path: "/default",
        handler: (request, reply) => {

            reply.view('menu');
        }
    }
]

//...
```

Acesse [http://localhost:3000/default](http://localhost:3000/default), e se o resultado for o seguinte, tudo ocorreu bem:

IMG

#### Capítulo finalizado :tada:
Neste capítulo você aprendeu a instalar módulos para renderizar HTML usando um componente React com o `npm`, utilizar este módulo para configurar o servidor e exibir o que estava no componente na rota /default. Caso queira aprender um pouco mais sobre como utilizar os componentes do React em conjunto, continue para o capítulo 7 <br />
**Palavras-chave:** `node`, `javascript`, `react`, `hapijs`, `servidor`, `es6`, `módulos`
