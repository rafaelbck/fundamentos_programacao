/*
REFRIGERANTES – Leia a quantidade de pessoas que confirmaram presença em uma
confraternização. Considere que cada pessoa bebe, em média, 300ml de refrigerante e que cada
garrafa da bebida tem 2l. Identifique as constantes e fixe-as no código. Calcule e exiba quantas
garrafas devem ser compradas.
*/

// @ts-ignore
import input from "npm:readline-sync"   

let confirmados: number = 0,
    garrafas: number = 0;

const litrosPorPessoa: number = 0.3,
    litrosPorGarrafa: number = 2;

console.log("Digite o número de convidados confirmados:")
confirmados = input.questionFloat();

garrafas = Math.ceil(confirmados * litrosPorPessoa / litrosPorGarrafa);

console.log(`Devem sem compradas ${garrafas} garrafas`)