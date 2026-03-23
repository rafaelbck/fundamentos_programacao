/* AUMENTO – Leia o valor de um salário, calcule e exiba-o reajustado, considerando um aumento de
12,5% */

// @ts-ignore
import input from "npm:readline-sync"

let salario: number = 0,
    reajuste:number = 1.125,
    salarioFinal: number = 0;

console.log("Insira o valor do seu salário:")
salario = input.questionFloat();

salarioFinal = salario * reajuste;

console.log(`O salário final é: R$ ${salarioFinal} `)