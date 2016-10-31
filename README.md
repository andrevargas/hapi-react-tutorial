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

A princípio, apenas pressione `Enter` para todos os questionamentos e o projeto está iniciado.

Se observar bem, você perceberá que foi gerado um arquivo chamado `package.json`. Este arquivo é consequência do comando ```npm init```, e é ele que guarda as configurações do nosso projeto. Abra-o e analise-o, é apenas um arquivo _JSON_ contendo chaves e valores que têm seu significado dentro do projeto. Voltaremos nele mais tarde.

#### Capítulo finalizado!

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

#### Capítulo finalizado!

Você já aprendeu como executar arquivos JavaScript com o Node, agora basta fazer coisas úteis com isto! :smile: <br />
**Palavras-chave:** `node`, `javascript`, `hello world`
