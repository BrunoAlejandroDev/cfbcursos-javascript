//* INICIO Elementos HTML
const btnCaixa1 = document.querySelector('#btn_caixa1');
const btnCaixa2 = document.querySelector('#btn_caixa2');
const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const todosOsCursos = [...document.querySelectorAll(".curso")];
//* FIM Elementos HTML

//* INICIO INSERIR A CLASSE SELECIONADO NOS ELEMENTOS QUE EU CLICAR
todosOsCursos.map((elemento)=> {
    
    elemento.addEventListener('click', (evt)=>{
        
        const elemento = evt.target;
        console.log(elemento);
        elemento.classList.toggle("selecionado");

    })

})
//* FIM INSERIR A CLASSE SELECIONADO NOS ELEMENTOS QUE EU CLICAR

btnCaixa2.addEventListener('click', ()=> {
    
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
    console.log(cursosSelecionados);

    cursosSelecionados.map((elemento)=> {
        caixa2.appendChild(elemento);
    })

})