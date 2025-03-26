const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('nome? ', (nome) => {
    rl.question('telefone? ', (telefone) => {
         console.log(`olá ${nome}, sua incrição foi realizada! Caso você seja sorteadeo, ligaremos para seu n° ${telefone}.`);
        rl.close();
    });
});
