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

O módulo `http` permite ao Node lidar com as especificações do protocolo da Web. o **HTTP**, e podendo executar funcionalidades com o mesmo intuito de servidores consagrados como **Apache** e **NGINX**. Justamente por poder lidar com isto usando o Node, você não precisar de nenhum software externo para funcionar como servidor em sua aplicação.

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
