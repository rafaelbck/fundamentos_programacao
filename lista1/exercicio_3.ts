/*CARGA-HORÁRIA – Leia a carga-horária de um curso, informada em horas-aulas (50 minutos).
Calcule e exiba a carga-horária em horas-relógio (60 minutos).*/

// @ts-ignore
import input from "npm:readline-sync"

let cargaHoraria: number = 0,
    horasRelogio: number = 0;


console.log("Insira as horas aula:")
cargaHoraria = input.questionFloat();

horasRelogio = cargaHoraria * 50 / 60;

console.log(`As horas aulas correspondem a ${horasRelogio} horas`)