
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

// Capturar as dimensões da página e atualizar conforme é redimensionada
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerHeight

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometo = setInterval(function() {
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometo)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
    document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica(){

    // remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'    
        } else {
        document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
        vidas++
        }
    }

// Math.random --> gera valores aleátorios
// Math.floor --> elimina as cadas decimais os valores encapsulados
    var posicaoX = Math.floor(Math.random() * largura) - 90 // -90 para que a imagem seja gerada sem ficar cortada com a página redimensioada
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // criar o elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio() // pegar as dimensões da class no CSS
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }
    document.body.appendChild(mosquito)

    console.log(tamanhoAleatorio())
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)

    switch(classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }

}