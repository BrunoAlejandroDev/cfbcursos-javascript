/*
Exercício 2: Converter para Maiúsculas
Crie uma função que receba um array de strings e retorne um novo array com todas as strings em maiúsculas.
*/

function maiusculas(palavras) {
    return palavras.map(elemento => elemento.toUpperCase());
}

const array = ["joao", "maria", "bruno", "leticia"];
console.log(maiusculas(array));