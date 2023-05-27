const btnVoltar = document.getElementById("btnTop")

btnVoltar.addEventListener('click', function(){
    window.scrollTo(0,0)
})

document.addEventListener('scroll', ocultar)

function ocultar(){
    if(window.scrollY > 100){
        btnVoltar.style.display = "flex"
    }
    else{
        btnVoltar.style.display = "none"
    }
}

ocultar()

function alterarPreco(numero, elemento){
    var numero = 'R$ ' + numero;
    document.getElementById(elemento).innerText = numero;
}