/*
Exercício 3: Adicionar Prefixo
Crie uma função que receba um array de strings e um prefixo. A função deve retornar um novo array com o prefixo adicionado a cada string. 
*/

function adicionaPrefixo(palavras, prefixo) {
    return palavras.map(palavra => prefixo + palavra);
}

const palavras = ["uva", "maracuja", "maça"];
const prefixo = "suco de ";
console.log(adicionaPrefixo(palavras, prefixo));