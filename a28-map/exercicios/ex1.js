/*
Exercício 1: Quadrado dos Números
Crie uma função que receba um array de números e retorne um novo array com o quadrado de cada número.
*/

function quadradoDoNumero(numeros) {
    return Math.pow(numeros, 2);
}

let arrayNumeros = [1, 2, 3, 4, 5].map(quadradoDoNumero);
console.log(arrayNumeros);