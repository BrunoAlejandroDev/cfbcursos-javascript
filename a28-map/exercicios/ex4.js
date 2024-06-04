/*
Exercício 4: Extrair Propriedades de Objetos
Crie uma função que receba um array de objetos e o nome de uma propriedade. A função deve retornar um novo array com o valor dessa propriedade para cada objeto. 
*/

function extrairPropriedade(objetos, propriedade) {
    return objetos.map(objeto => objeto[propriedade]);
}

const carro = [
    {nome: "fastback", marca: "fiat"},
    {nome: "argo", marca: "fiat"},
    {nome: "onix", marca: "chevrolet"},
    {nome: "ford ka", marca: "ford"}
]

console.log(extrairPropriedade(carro, "nome"));