// const divTodas = [...document.getElementsByTagName('div')]
// const jogadorTodos = [...document.getElementsByClassName('jogador')]
// const jogadorc1 = [...document.getElementsByClassName('c1')]
// const jogadorc2 = [...document.getElementsByClassName('c2')]
// const jogadorEspecial = document.getElementById('c1')

const query_divTodas = document.querySelectorAll("div")
const query_jogadorTodos = [...document.querySelectorAll('.jogador')]
const query_jogadorc1 = [...document.querySelectorAll('.c1')]
const query_jogadorc2 = [...document.querySelectorAll('.c2')]
const query_jogadorEspecial = document.querySelector('#c1') 
//ou const query_jogadorEspecial = document.querySelectorAll('#c1')[0]

console.log(query_divTodas)
console.log(query_jogadorTodos)
console.log(query_jogadorc1)
console.log(query_jogadorc2)
console.log(query_jogadorEspecial)

//especificações

//Imprimindo dois tips de elementos: tag div e tag p
const query_divP = [...document.querySelectorAll("div, p")]
console.log(query_divP)

//imprimindo dois tipos de elementos: classe e tag P
const query_classP = [...document.querySelectorAll('.c1, p')]
console.log(query_classP)

//imprimindo apenas as div que contém a classe c1
const query_divClass = [...document.querySelectorAll("div[c2]")]
console.log(query_classP)
