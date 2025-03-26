const readline = require('readline');

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question('digite o primeiro número: ', (n1) => {
    rl.question('digite o segundo numero: ', (n2) => {
        rl.question('escolha a operação (+,-,x,/): ', (sinal) => {
            let resultado;

            switch (sinal) {
                case '+':
                    resultado = Number(n1) + Number(n2)
                    break;
                case '-':
                    resultado = Number(n1) - Number(n2)
                    break;
                case 'x':
                    resultado = Number(n1) * Number(n2)
                    break;
                case '/':
                    if (Number(n2) === 0) {
                        console.log('erro: divisão por zero não é permitido');
                        rl.close();
                        return;
                    }
                    resultado = Number(n1) / Number(n2);
                    break;
                    default:
                        console.log('operação invalida. use +,-,* ou /.');
                        rl.close()
                        return;
            }

            console.log(`o resultado de ${n1} ${sinal} ${n2} é ${resultado}`);
            rl.close();
        })
    })
});