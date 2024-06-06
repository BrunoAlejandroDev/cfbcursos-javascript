//obtendo elementos do HTML por meio do método getElementById
let dc1 = document.getElementById('c1');
let dc2 = document.getElementById('c2');
let dc3 = document.getElementById('c3');
let dc4 = document.getElementById('c4');
let dc5 = document.getElementById('c5');
let dc6 = document.getElementById('c6');

//obtendo o elemento como um todo
console.log(dc1);

//obtendo o id do elemento
console.log(dc1.id);

//alterando o conteúdo do elemento por meio do JS
console.log(dc1.innerHTML='Bruno');

//criando um array com os elementos
let arrayElements = [dc1, dc2, dc3, dc4, dc5, dc6]

//percorrendo o array
// for(i of arrayElements){
//     i.innerHTML='Bruno'
// }
// console.log(arrayElements)

//outra maneira de percorrer o array (método map)
arrayElements.map((e)=>{
    //e.innerHTML='Bruno' -> mudar o conteúdo de todos os elementos
    console.log(e);
})