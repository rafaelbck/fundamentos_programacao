import input from "npm:readline-sync"

let nota1: number = 0,
    nota2: number = 0,
    nota3: number = 0,
    nota4: number = 0,
    media: number = 0;

console.log("Insira as notas de 1 a 4 e seus pesos, em sequência");
nota1 = input.questionFloat();
nota2 = input.questionFloat();
nota3 = input.questionFloat();
nota4 = input.questionFloat();

media = ((nota1 * 1) + (nota2 * 2) + (nota3 = 3) + (nota4 * 4)) / 10

console.log("A media é: ", media)