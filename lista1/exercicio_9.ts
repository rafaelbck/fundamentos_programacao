/*
MCDU – Leia um número inteiro positivo de até quatro dígitos. Mostre, separadamente (uma por
linha): unidades de milhar, centenas, dezenas e unidades desse número. Assuma que nenhum
número maior, ou negativo, será digitado. 
*/

// @ts-ignore
import input from "npm:readline-sync"

let num: number = 0, milhar: number = 0, centena: number = 0, dezena: number = 0, unidade: number = 0;

console.log("Digite o número:")
num = input.questionFloat();

milhar = Math.trunc(num / 1000)
centena = Math.trunc((num % 1000) / 100);
dezena = Math.trunc((num % 100) / 10)
unidade = num % 10

console.log(`milhar: ${milhar}`,"\n",`centena: ${centena}`,"\n",`dezena: ${dezena}`,"\n",`unidade: ${unidade}`)