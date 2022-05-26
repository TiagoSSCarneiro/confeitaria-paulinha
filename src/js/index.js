const listaImagens = document.querySelectorAll('.list-images')//ok
const seta = document.querySelectorAll('.arrow') // avaliar se vai precisar
const setaVoltar = document.querySelectorAll('.arrow-left')
const setaAvancar = document.querySelectorAll('.arrow-rigth')

let imagemInicial = 0

function esconderImagens() {
    listaImagens.forEach (imagem =>{
        imagem.classList.remove('first-image')
    })
}

function mostrarImagens () {
    listaImagens[imagemInicial].classList.add('first-image')
}

setaAvancar.addEventListener('click', function () {
    if(imagemInicial == listaImagens.length -1) return
    imagemInicial ++
    esconderImagens()
    mostrarImagens()

})

setaVoltar.addEventListener('click', function (){
    if(listaImagens == 0) return
    imagemInicial --
    esconderImagens()
    mostrarImagens()
})



