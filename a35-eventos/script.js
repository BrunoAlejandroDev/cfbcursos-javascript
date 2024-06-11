const elemento1 = document.querySelector('#c1');

//* adicionando um evento em um elemento específico
// elemento1.addEventListener('click', () => {
//     alert('Você clicou em mim!')
// })

//* adicionando um evento em todos os elementos da página
const elementos = [...document.querySelectorAll('.curso')]
//console.log(elementos);

elementos.map((elemento)=> {
    
    elemento.addEventListener('click', (evt)=>{
        
        const el = evt.target;
        alert('Você clicou em mim!');
        console.log(el.innerHTML + ' foi clicado');
    
    })
})