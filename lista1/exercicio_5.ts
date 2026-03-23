import input from "npm:readline-sync"

let preco: number = 0,
    desconto: number = 0.65;
    
    console.log("Insira o preço do produto");
    preco = input.questionFloat()
    
let precoFinal: number = preco * desconto;

console.log("O preço final é: ", precoFinal)