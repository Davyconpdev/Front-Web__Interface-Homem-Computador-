//dom
const nome = document.querySelector('#nome')
const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const botao = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')

//evento + fun��o

botao.addEventListener('click', () => {
    n1 = Number(nota1.value)
    n2 = Number(nota2.value)
    n3 = Number(nota3.value)

    media = (n1 + n2 + n3) / 3

    if (media >= 5) {
        situacao = 'Aprovado!'
    } else {
        situacao = 'Recuperação'
    }

    resultado.textContent = `Sr(a) ${nome.value}, sua média foi: ${media.toFixed(1)}   - ${situacao}`
})