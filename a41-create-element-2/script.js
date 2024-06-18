//inserindo elementos dinamicamente no HTML 
const caixa1 = document.querySelector('#caixa1');
const cursos = ['HTML', 'CSS', 'JavaScript', 'Java', 'React', 'Typescript', 'MySQL']

//percorrendo o array cursos e adicionando os elementos na página
cursos.map((el, indice)=>{

    //criando as div para alocar os elementos
    const novosCursos = document.createElement('div')

    //adicionando as classes nos elementos
    novosCursos.setAttribute('class', 'curso c1')

    //adicionando os id em cada elemento
    for(let i = -1; i < indice; i++){
        novosCursos.setAttribute('id', i+1)
    }

    /*OUTRA FORMA DE ADICIONAR ID
    novosCursos.setAttribute('id', 'c'+indice)
    */

    //adicionando os nomes dos cursos 
    novosCursos.innerHTML = el

    //adicionando os cursos na página
    caixa1.appendChild(novosCursos)

})