const caixa1 = document.querySelector('#caixa1');
const novosCursos = ['HTML', 'CSS', 'Javascript', 'Java', 'React', 'Typescript', 'MySQL'];

novosCursos.map((el, indice)=>{

    const novoElemento = document.createElement('div') //? criando um novo elemento div
    novoElemento.setAttribute('class', 'curso c1') //? adicicionando classes a cada elemento criado
    novoElemento.setAttribute('id', 'c'+indice) //? adicionando ids aos novos elementos criados
    novoElemento.innerHTML = el //? inserindo o próprio texto do elemento nos novos elementos

    //* adicionando a imagem da lixeira e sua funcionalidade
    const lixeira = document.createElement('img') //? criando a imagem
    lixeira.setAttribute('src', 'lixeira.png') //? adicionado o imagem via atributo src
    lixeira.setAttribute('class', 'lixeira') //? atribuindo uma classe para a imagem
    lixeira.addEventListener('click', (evt)=>{ //? criando um evento para remover o elemento
        caixa1.removeChild(evt.target.parentNode)
    })

    caixa1.appendChild(novoElemento)
    novoElemento.appendChild(lixeira)
});