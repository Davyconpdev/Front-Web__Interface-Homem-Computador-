//dom
const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco = document.querySelector('#preco')
const botao = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')

//evento e funcao

botao.addEventListener('click', () => {

    //number = int
    d = Number(distancia.value)
    c = Number(consumo.value)
    p = Number(preco.value)

    calculo = (d / c) * p

    resultado.textContent = `Gasto total da viagem: R$ ${calculo.toFixed(2)}`
})