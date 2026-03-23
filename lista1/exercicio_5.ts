/* DESCONTO – Leia o preço de um produto, calcule e exiba o valor final, considerando desconto de
35%. */

// @ts-ignore
import input from "npm:readline-sync"

let preco: number = 0,
    desconto: number = 0.65;
    
    console.log("Insira o preço do produto");
    preco = input.questionFloat()
    
let precoFinal: number = preco * desconto;

console.log("O preço final é: ", precoFinal)