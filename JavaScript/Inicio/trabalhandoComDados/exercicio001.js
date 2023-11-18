/* Atividade 01
Faça um programa que calcule circunferência (área) de um círculo,
utilizando conceitos que já vimos anteriormente, tais como,
variáveis, operadores aritméticos, concatenação, etc.
Lembre-se da estrutura de dados (Entrada de dados, Processamento e Saída de dados)
tendo em mente que o raio da circunferência é de R = 16 */

//entrada de dados

const raioCirculo = 16
Math.PI

//processamento de dados

const resultadoArea = Math.PI * (raioCirculo * raioCirculo)

console.log(resultadoArea.toFixed(2) + " cm²")