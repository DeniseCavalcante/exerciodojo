
var btn = document.querySelector("#botao");

btn.addEventListener('click', function () {
    var usuario = document.querySelector("#usuario").value;
    if (usuario.length < 1) {
        alert("usuario negado");
    } else {
        alert("ok");
    }
    var senha = document.querySelector("#senha").value;
    if (senha.length > 6){
        alert("senha ok");
    } else{
        alert("acesso negado");
    }
        
});