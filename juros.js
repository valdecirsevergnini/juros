// Importamos o módulo readline para capturar entradas do usuário no terminal
const readline = require("readline");

// Criamos uma interface para capturar os inputs do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitamos o valor da dívida ao usuário
rl.question("Informe o valor devido: R$ ", function(valor) {
    // Convertendo a entrada para número decimal
    let valorDevido = parseFloat(valor);

    // Verifica se o valor é válido
    if (isNaN(valorDevido) || valorDevido <= 0) {
        console.log("Valor inválido! O valor da dívida deve ser maior que zero.");
        rl.close();
        return;
    }

    // Solicitamos o número de dias de atraso ao usuário
    rl.question("Informe quantos dias se passaram desde o vencimento do boleto: ", function(dias) {
        // Convertendo a entrada para número inteiro
        let diasAtraso = parseInt(dias);

        // Verifica se o número de dias é válido
        if (isNaN(diasAtraso) || diasAtraso < 0) {
            console.log("Número de dias inválido! Deve ser um número positivo.");
            rl.close();
            return;
        }

        // Definição da taxa de juros
        let taxaJuros = diasAtraso > 15 ? 0.10 : 0.05; // 10% para mais de 15 dias, senão 5%
        
        // Cálculo do valor total com juros
        let valorTotal = valorDevido + (valorDevido * taxaJuros);
        
        // Exibição dos resultados
        console.log("\nResumo da dívida:");
        console.log(`Valor original da dívida: R$ ${valorDevido.toFixed(2)}`);
        console.log(`Dias atrasados: ${diasAtraso}`);
        console.log(`Taxa de juros: ${(taxaJuros * 100)}%`);
        console.log(`Valor total com juros: R$ ${valorTotal.toFixed(2)}`);
        
        // Fechamos a interface
        rl.close();
    });
});
