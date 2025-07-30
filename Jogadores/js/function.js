//DOM
const fotos = document.querySelector('#foto')
const bt01 = document.querySelector('#bt1')
const bt02 = document.querySelector('#bt2')
const bt03 = document.querySelector('#bt3')
const bt04 = document.querySelector('#bt4')

//EVENTOS

bt01.addEventListener('click', cr7)
bt02.addEventListener('click', messi)
bt03.addEventListener('click', neymar)
bt04.addEventListener('click', haaland)

//FUNÇÕES

function cr7() {
    fotos.src = 'images/cr7goat.jpg'
}

function messi() {
    fotos.src = 'images/messi_inter.webp'
}

function neymar() {
    fotos.src = 'images/ney.png'
}

function haaland() {
    fotos.src = 'images/haaland-gettyimages.webp'
}