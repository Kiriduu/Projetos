function logar(){
    var usuario = document.getElementById("usuario");
    var senha = document.getElementById("senha");
    
    console.log(usuario.value+senha);

    if(usuario.value == "MateusCavichioli" && senha.value == "33504052"){
        alert("Acesso Permitido!")
    }
    else{ 
        alert("Usuário ou senha inválidos!");
    }
}
