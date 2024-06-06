//obtendo todos os elementos com a class 'curso'
const collectionCurso = document.getElementsByClassName('curso')
console.log(collectionCurso);

//para obter os elementos de classe diferentes basta declarar ambos no mesmo parametro
const collectionCursoC1 = document.getElementsByClassName('curso c1')
console.log(collectionCursoC1);

//obtendo o número de elementos que possuem uma determinada classe
const classNumber = document.getElementsByClassName('curso').length;

//alterando a cor de fundo de todos os elementos
const alterarFundo = document.getElementsByClassName('c1')
for(let i = 0; i < alterarFundo.length; i++){
    alterarFundo[i].style.backgroundColor = 'red';
}

//alterando a cor de apenas um elemento
const corElemento = document.getElementsByClassName('c1')[2]
corElemento.style.backgroundColor = 'blue'

//transformando a coleção de elementos em um array de elementos
const transformArray = [...document.getElementsByClassName('curso')]
console.log(transformArray)

//percorrendo o array usando map
transformArray.map((e)=>{
    console.log(e)
})

//adicionando uma configuração CSS por meio do JS
//criou-se uma classe no CSS e vamos adicionar essa classe por meio do JS. Para isso, é preciso transformar a coleção em um array.
const destaque = [...document.getElementsByClassName('c2')]
destaque.map((el)=>{
    el.classList.add('destaque')
})