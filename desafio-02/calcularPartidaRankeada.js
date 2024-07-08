/***O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 Ferro
Se vitórias for entre 11 e 20 Bronze
Se vitórias for entre 21 e 50 Prata
Se vitórias for entre 51 e 80 Ouro
Se vitórias for entre 81 e 90 Diamante
Se vitórias for entre 91 e 10 Lendário
Se vitórias for maior ou igual a 101 Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */

function calculateVictoryBalance(wins, defeat){
    return wins - defeat;;
}

function determineRankLevel(victoryBalance){
    if (victoryBalance < 10) {
        return `Ferro`;
    } else if (victoryBalance > 11 && victoryBalance < 20) {
        return `Bronze`;
    } else if (victoryBalance > 21 && victoryBalance < 50) {
        return `Prata`;
    } else if (victoryBalance > 51 && victoryBalance < 70) {
        return `Ouro`;
    } else if (victoryBalance > 71 && victoryBalance < 80) {
        return `Platina`;
    } else if (victoryBalance > 81 && victoryBalance < 90) {
        return `Ascendente`;
    } else if (victoryBalance > 91 && victoryBalance < 100) {
        return `Imortal`;
    } else {
        return `Radiante`;
    }
}
    victoryBalance = calculateVictoryBalance(10,10);
    nivel = determineRankLevel(victoryBalance);
    console.log(`O Herói tem de saldo de ${victoryBalance} está no nível de ${nivel}`);