//dom
const url = document.querySelector('#url')
const botao = document.querySelector('#botao')
const qr = document.querySelector('#qrcode')

//evento

botao.addEventListener('click', () => {
    texto = url.value 
    qr.innerHTML = ''

    code = new QRCode(
        qr,
        {
            text: texto,
            with: 400,
            height: 400,
            colorDark: 'rgba(0,0,0,0)',
            colorLight: 'black'
        }
    )
})