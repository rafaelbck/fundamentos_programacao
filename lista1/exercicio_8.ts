/* QUADRADO – Leia um número inteiro, calcule e exiba o seu quadrado. */

// @ts-ignore
import input from "npm:readline-sync"

let num: number = 0,
    sqr: number = 0;

console.log("Insira um número:")
num = input.questionFloat();

sqr = num**2;

console.log("Quadrado do número é: ", sqr)