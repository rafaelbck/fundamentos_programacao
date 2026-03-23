/*
DÍGITO VERIFICADOR – Leia o número de uma conta corrente, que tem até seis dígitos (desnecessária a validação). Calcule o dígito verificador dessa conta corrente, de acordo com o seguinte algoritmo:
– Multiplique cada dígito pela respectiva posição, da esquerda para a direita;
– Some os resultados das multiplicações;
– Calcule o resto da divisão dessa soma por 10;
– Subtraia esse valor de 10.
– Assuma o resultado como dígito verificador da conta.
*/ 

// @ts-ignore
import input from "npm:readline-sync"

let contaCorrente: number = 0,
    n1: number = 0,
    n2: number = 0,
    n3: number = 0,
    n4: number = 0,
    n5: number = 0,
    n6: number = 0,
    total: number = 0,
    restoDivisao: number = 0,
    digitoVerificador: number = 0

console.log("Insira o número da conta: ")
contaCorrente = input.questionFloat();

n1 = Math.trunc(contaCorrente / 100000)
n2 = Math.trunc((contaCorrente % 100000) / 10000)
n3 = Math.trunc((contaCorrente % 10000) / 1000)
n4 = Math.trunc((contaCorrente % 1000) / 100)
n5 = Math.trunc((contaCorrente % 100) / 10)
n6 = Math.trunc(contaCorrente % 10)
// console.log(n1, n2, n3, n4, n5, n6)

total = (n6*6)+(n5*5)+(n4*4)+(n3*3)+(n2*2)+(n1*1)
console.log("Soma total dos dígitos multiplicados pelos índices: ",total)

restoDivisao = total % 10
console.log("Resto da divisão por 10: ", restoDivisao)

digitoVerificador = 10 - restoDivisao
console.log("Dígito Verificador: ", digitoVerificador)