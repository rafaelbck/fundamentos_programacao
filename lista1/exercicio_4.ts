/* PERCENTUAL DE LEITURA – Leia a página atual e a quantidade de páginas de um livro. Calcule e
exiba o percentual de leitura concluído */

// @ts-ignore
import input from "npm:readline-sync"

let pagAtual: number = 0,
    pagTotais: number = 0,
    porcentLida: number = 0;

console.log("Insira a página atual")
pagAtual = input.questionFloat();

console.log("Insira a quantidade de páginas do livro")
pagTotais = input.questionFloat();

porcentLida = (pagAtual / pagTotais) * 100

console.log(`A porcentagem lida do livro é ${porcentLida}%`)