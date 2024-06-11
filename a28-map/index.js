//EXEMPLO 1
console.log('Exemplo 1')
const cursos = ['HTML', 'CSS', 'JS', 'React', 'TS'];
cursos.map((elemento, indice)=>{
    console.log(`Curso: ${elemento} - Posição do curso: ${indice}`)
});

//EXEMPLO 2
console.log()
console.log('Exemplo 2')
const cursos1 = ['HTML', 'CSS', 'JS', 'React', 'TS'];
let c = cursos1.map((elemento, indice)=>{
    return elemento;
});
console.log(c)

//EXEMPLO 3
console.log()
console.log('Exemplo 3')
let el = [...document.getElementsByTagName('div')] //operador spread para tornar os itens iteráveis
console.log(el)
el.map((e, i)=>{
    e.innerHTML = 'Al mossar'
})

//EXEMPLO 4
console.log()
console.log('Exemplo 4')
const converterInt = (e) => parseInt(e)
let num = ['1', '2', '3', '4', '5'].map(converterInt)
console.log(num)

//EXEMPLO 5
console.log()
console.log('Exemplo 5')
const dobrarNum = (e) => e*2
let valores = ['1', '2', '3', '4', '5'].map(dobrarNum)
console.log(valores)