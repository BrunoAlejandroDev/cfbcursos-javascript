const caixa1 = document.querySelector('#caixa1');
const todosCursos = [...document.querySelectorAll('.curso')];

//criando um novo elemento
const novoCurso = document.createElement('div')

//inserindo um texto no novo elemento
novoCurso.innerHTML = 'PHP'

//inserindo um id e uma classe no novo elemento
novoCurso.setAttribute('id', 'c7')
novoCurso.setAttribute('class', 'curso c1')

//inserindo o novo elemento no HTML
caixa1.appendChild(novoCurso)