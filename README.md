# hapi-react-tutorial
Construindo uma aplicação com Hapi e ReactJS - Tutorial para aula de Programação IV @ SISNET 2016/2

### Introdução
O objetivo deste tutorial é criar uma simples aplicação utilizando o framework **HapiJS** e a bilioteca **ReactJS**, bem como introduzir os alunos ao ambiente do **Node.<span></span>js**. A aplicação consiste em um servidor rodando no ambiente Node, escrito com auxílio do Hapi, e renderizando suas visualizações com o React.

### Cap. 1 - O que é Node.<span></span>js?
Conforme descrito pelo [NodeBR](http://nodebr.com/o-que-e-node-js/):
> "Node.<span></span>js é uma plataforma construída sobre o motor JavaScript do Google Chrome para facilmente construir aplicações de rede rápidas e escaláveis. Node.<span></span>js usa um modelo de I/O direcionada a evento não bloqueante que o torna leve e eficiente, ideal para aplicações em tempo real com troca intensa de dados através de dispositivos distribuídos".

**tl;dr:** Node é uma plataforma que sabe executar código **JavaScript**.

O Node possui uma ferramenta para gerenciamento das configurações do projeto e dos módulos de terceiros utilizados, chamada **Node Package Manager**, ou para os mais íntimos, [npm](https://www.npmjs.com/).

E é com ela que vamos dar início ao projeto. Em seu terminal, crie uma pasta para guardar o projeto e navegue até ela com os seguintes comandos:

```mkdir meu-projeto``` <br />
```cd meu-projeto```

Então, inicie um novo projeto em Node com o seguinte comando:

```npm init```

A princípio, apenas pressione `Enter` para todos os questionamentos e o projeto está iniciado.

Se observar bem, você perceberá que foi gerado um arquivo chamado `package.json`. Este arquivo é consequência do comando ```npm init```, e é ele que guarda as configurações do nosso projeto. Abra-o e analise-o, é apenas um arquivo _JSON_ contendo chaves e valores que têm seu significado dentro do projeto. Voltaremos nele mais tarde.

#### Capítulo finalizado!

Agora você já sabe o que é o Node e como iniciar um projeto utilizando-o. <br />
**Palavras-chave**: `node`, `javascript`, `npm`, `package.json`
