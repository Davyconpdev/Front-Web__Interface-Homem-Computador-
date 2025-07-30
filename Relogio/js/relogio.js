//dom
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const day = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const frase = document.querySelector('#frase')
const alvo = document.querySelector('img')
const fundo = document.querySelector('body')

//eventos
setInterval(relogio, 1000)

//funções
function relogio() {

    let dia = new Date()
    let hr = dia.getHours()
    let min = dia.getMinutes()
    let seg = dia.getSeconds()
    let d = dia.getDate()
    let m = dia.getMonth() + 1
    let a = dia.getFullYear()

    if (hr < 10) {
        hr = "0" + hr
    }

    if (min < 10) {
        min = "0" + min
    }

    if (seg < 10) {
        seg = "0" + seg
    }

    if (d < 10) {
        d = "0" + d
    }

    if (m < 10) {
        m = "0" + m
    }


    if (hr >= 5 && hr < 12) {
        frase.textContent = 'Bom Dia!'
        alvo.src = 'imagens/sun_weather_2764.png'
        fundo.className = 'manha'
    } else if (hr >= 12 && hr < 18) {
        frase.textContent = 'Boa Tarde!'
        alvo.src = 'imagens/01-sun_98591.png'
        fundo.className = 'tarde'
    } else {
        frase.textContent = 'Boa Noite!'
        alvo.src = 'imagens/moon_night_midnight_2768.png'
        fundo.className = 'noite'
    }

    //impressão
    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
    day.textContent = d
    mes.textContent = m
    ano.textContent = a

}