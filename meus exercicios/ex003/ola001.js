const readline = require("readline"); /* permite interagir com o usuario */
/* 
Importa o módulo readline, que permite interagir com o usuário no terminal.

require("readline") carrega essa funcionalidade no Node.js. */

const rl = readline.createInterface({
    input: process.studin,
    output: process.stdout 
});
/*  
Criamos uma interface de leitura chamada rl.

input: process.stdin → Define que a entrada será o que o usuário digitar.

output: process.stdout → Define que a saída será exibida no terminal.
*/

rl.question("qual é o seu nome? ", (nome) => {
    /*
    rl.question() faz uma pergunta ao usuário.

    "Qual é o seu nome? " → Essa é a pergunta exibida no terminal.

    (nome) => { ... } → Quando o usuário responde, o valor digitado é armazenado na variável nome e a função dentro das { } é executada. 
    */
    console.log('olá, ${nome}! Bem-vindo ao mundo da programação.');
    /*
     Usa console.log() para exibir a mensagem de boas-vindas no terminal.

    A template string `Olá, ${nome}!` insere dinamicamente o nome digitado na frase.
    */

    rl.close();
});
    /* 
    rl.close(); encerra a interface de leitura, impedindo mais interações.

    }); fecha o bloco de código da função de callback. 
    */