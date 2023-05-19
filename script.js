/*salvar cadastro*/
function salvar(){
    if(localStorage.nome){
        alert("Não é possível cadastrar! Já possui cadastro existente!")
    }
    else{
        localStorage.usuario = document.getElementById("usuario").value
        localStorage.senha = document.getElementById("senha").value
        localStorage.nome = document.getElementById("nome").value
        localStorage.nomemae = document.getElementById("nomemae").value
        localStorage.nomepai = document.getElementById("nomepai").value
        localStorage.cidade = document.getElementById("cidade").value
        localStorage.curso = document.getElementById("curso").value
        localStorage.idade = document.getElementById("idade").value
        alert("Cadastro realizado com sucesso!")
    }
}

function excluir(){
    let user = document.getElementById("atualusuario").value
    let sen = document.getElementById("atualsenha").value
    if(user == localStorage.usuario && sen == localStorage.senha){
        localStorage.clear()
        alert('Cadastro e Conta excluído com sucesso!')
    }
    else{
        alert('Não foi possível apagar os dados pois Nome ou Senha estão inválidos!')
    }
}


if(localStorage.nome == "" || localStorage.length == 0){
    document.getElementById("nomeler").innerHTML = '...'
}
else{
    document.getElementById("nomeler").innerHTML = `${localStorage.nome}`
}

if(localStorage.nomemae == "" || localStorage.length == 0){
    document.getElementById("nomemaeler").innerHTML = '...'
}
else{
    document.getElementById("nomemaeler").innerHTML = `${localStorage.nomemae}`
}

if(localStorage.nomepai == "" || localStorage.length == 0){
    document.getElementById("nomepailer").innerHTML = '...'
}
else{
    document.getElementById("nomepailer").innerHTML = `${localStorage.nomepai}`
}

if(localStorage.cidade == "" || localStorage.length == 0){
    document.getElementById("cidadeler").innerHTML = '...'
}
else{
    document.getElementById("cidadeler" || localStorage.length == 0).innerHTML = `${localStorage.cidade}`
}

if(localStorage.curso == "" || localStorage.length == 0){
    document.getElementById("cursoler").innerHTML = '...'
}
else{
    document.getElementById("cursoler").innerHTML = `${localStorage.curso}`
}
if(localStorage.idade == "" || localStorage.length == 0){
    document.getElementById("idadeler").innerHTML = '...'
}
else{
    document.getElementById("idadeler").innerHTML = `${localStorage.idade}`
}
