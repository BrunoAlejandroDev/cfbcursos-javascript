//código que retorna uma coleção de todas as tags 'div' presentes no HTML
const collection = document.getElementsByTagName('div')
console.log(collection)

//uma outra forma de obter todos os elementos do documento é utilizando o símbolo de asterísco (*)
const collectionAll = document.getElementsByTagName('*')
console.log(collectionAll)

//alterando o primeiro elemento div do documento
const collectionFirst = document.getElementsByTagName('div')[0].innerHTML = 'Bruno'

//alterando a cor de fundo de todos os elementos div do documento
const collectionColor = document.getElementsByTagName('div')
for(let i = 0; i < collectionColor.length; i++){
    collectionColor[i].style.backgroundColor = 'red';
}

//alterando a cor de fundo de um único elemento
const collectionColorChild = document.getElementsByTagName('div')[2]
collectionColorChild.style.backgroundColor = 'blue';

//transformando uma coleção de elementos em um array
const collectionArray = [...document.getElementsByTagName('div')]
console.log(collectionArray)

//percorrendo todos os elementos do array
collectionArray.map((e)=>{
    console.log(e)
}) 