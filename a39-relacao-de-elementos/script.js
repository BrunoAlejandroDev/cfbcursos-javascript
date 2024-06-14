const caixa1 = document.querySelector('#caixa1');
const cursos = [...document.querySelectorAll('.curso')]

console.log(caixa1.firstElementChild) //? firstElementChild: serve para selecionar o primeiro filho de determinado elemento

console.log(caixa1.lastElementChild) //? lastElementChild: serve para selecionar o último filho de determinado elemento

console.log(caixa1.children) //? children: serve para retornar todos os filhos diretos do elemento em questão

console.log(caixa1.hasChildNodes()) //? hasChildNodes: serve para verificar se o elemento em questão possui filhos
console.log(cursos[0].hasChildNodes())

console.log(cursos[0].childNodes) //? childNodes: serve para visualizar o tipo de filho do elemento

//* usando operador ternário para verificar uma condição (ter ou não filho)
console.log(cursos[0].children.length > 0 ? 'Possui filho' : 'Não posui filho')
console.log(caixa1.children.length > 0 ? 'Possui filho' : 'Não posui filho')

//* interagindo com os elementos
caixa1.children[3].innerHTML = 'Bruno'

//? parentElement ou parentNode -> retorna o elemento pai