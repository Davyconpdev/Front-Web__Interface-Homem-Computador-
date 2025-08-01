const bt1 = document.querySelector('#bt1')
const bt2 = document.querySelector('#bt2')
const bt3 = document.querySelector('#bt3')
const bt4 = document.querySelector('#bt4')
const image = document.querySelector('img')
const texto = document.querySelector('p')

bt1.addEventListener('click', ()=>{
image.src = 'images/TropaDeElitePoster.jpg'
texto.textContent = 'Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.'
})

bt2.addEventListener('click', ()=>{
image.src = 'images/The_Dark_Knight.jpg'
texto.textContent = 'Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.'
})

bt3.addEventListener('click', ()=>{
image.src = 'images/vingadores.jpg'
texto.textContent = 'Sinopse. Após Thanos eliminar metade das criaturas vivas de todo o universo, os heróis sobreviventes precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark vagando perdido no espaço sem água nem comida, Steve Rogers e Natasha Romanov precisam liderar a resistência contra o titã.'
})

bt4.addEventListener('click', ()=>{
image.src = 'images/O_auto_da_compadecida.jpg'
texto.textContent = 'João Grilo e Chicó são os amigos inseparáveis que protagonizarão a história vivida no sertão nordestino. Assolados pela fome, pela aridez, pela seca, pela violência e pela pobreza, tentando sobreviver num ambiente hostil e miserável, os dois amigos usam da inteligência e da esperteza para contornarem os problemas.'
})