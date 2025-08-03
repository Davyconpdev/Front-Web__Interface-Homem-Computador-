const peso = document.querySelector('#weight')
const altura = document.querySelector('#height')
const botao = document.querySelector('#calculate')
const resultado = document.querySelector('#result')

//eventos

botao.addEventListener('click', () => {

    event.preventDefault()
        //funcao dentro do evento.
    p = peso.value
    a = altura.value

    imc = p / (a ** 2)
        //(a*a)

    resultado.textContent = `O Seu IMC: ${imc.toFixed(1)}`
})