/* TROCA DE VALORES – Leia dois números inteiros, a e b, e faça com que eles troquem os valores
entre si. Exiba os valores de a e b. Não se deve apenas alterar a ordem de exibição. */

// @ts-ignore
import input from "npm:readline-sync"

let a: number = 0,
    b: number = 0,
    aux: number = 0;

console.log("Insira o valor de a:")
a = input.questionFloat();

console.log("Insira o valor de b:")
b = input.questionFloat();

aux = b;
b = a;
a = aux;

console.log(`Valor de a: ${a}, valor de b: ${b}`)