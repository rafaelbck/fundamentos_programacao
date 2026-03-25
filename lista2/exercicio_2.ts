/*
CAIXA ELETRÔNICO – Leia um número inteiro referente ao valor de um saque em reais (R$).
Apresente a composição desse valor pelas notas e moeda existentes. Sempre opte primeiro por
notas de maior valor. Obedeça o comportamento e as mensagens de saída do exemplo.
*/

// @ts-ignore
import input from "npm:readline-sync"

let saque: number = 0,
    notas100: number = 0,
    notas50: number = 0,
    notas20: number = 0,
    notas10: number = 0,
    notas5: number = 0,
    notas2: number = 0,
    moedas1: number = 0,
    resto: number = 0;

console.log("Insira o valor o saque em reais")
saque = input.questionFloat();

notas100 = Math.trunc(saque / 100);
resto = saque % 100
notas50 = Math.trunc(resto / 50);
resto = resto % 50;
notas20 = Math.trunc(resto / 20);
resto = resto % 20;
notas10 = Math.trunc(resto / 10);
resto = resto % 10;
notas5 = Math.trunc(resto / 5);
resto = resto % 5;
notas2 = Math.trunc(resto / 2);
resto = resto % 2;
moedas1 = Math.trunc(resto);
resto = resto % 1;

console.log(
    "\n",`Saque: ${saque}`,
     "\n",`${notas100} Notas de R$ 100`,
     "\n",`${notas50} Notas de R$ 50`,
     "\n",`${notas20} Notas de R$ 20`,
     "\n",`${notas10} Notas de R$ 10`,
     "\n",`${notas5} Notas de R$ 5`,
     "\n",`${notas2} Notas de R$ 2`,
     "\n",`${moedas1} Moedas de R$ 1`,
    )