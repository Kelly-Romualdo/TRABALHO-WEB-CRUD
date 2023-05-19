/*resgate das informações */
localStorage.length != 0 ? document.getElementById("delnome").value = `${localStorage.nome}` : document.getElementById("delnome").value = '...'
localStorage.length != 0 ? document.getElementById("delnomepai").value = `${localStorage.nomepai}` : document.getElementById("delnomepai").value = '...'
localStorage.length != 0 ? document.getElementById("delnomemae").value = `${localStorage.nomemae}` : document.getElementById("delnomemae").value = '...'
localStorage.length != 0 ? document.getElementById("delcidade").value = `${localStorage.cidade}` : document.getElementById("delcidade").value = '...'
localStorage.length != 0 ? document.getElementById("delcurso").value = `${localStorage.curso}` : document.getElementById("delcurso").value = '...'
localStorage.length != 0 ? document.getElementById("delidade").value = `${localStorage.idade}`  : document.getElementById("delidade").value = '...'
/*validação do usuário */
function deletar(){
    let user = document.getElementById("atualusuario").value
    let sen = document.getElementById("atualsenha").value
    if(user == localStorage.usuario && sen == localStorage.senha){
        if($("#checknome").is(':checked')){
            localStorage.nome = ''
        }
        if($("#checknomemae").is(':checked')){
            localStorage.nomemae = ''
        }
        if($("#checknomepai").is(':checked')){
            localStorage.nomepai = ''
        }
        if($("#checkcidade").is(':checked')){
            localStorage.cidade = ''
        }
        if($("#checkcurso").is(':checked')){
            localStorage.curso = ''
        }
        if($("#checkidade").is(':checked')){
            localStorage.idade = ''
        }
        alert("Dados deletados com Sucesso!")
    }
    else{
        alert("Não foi possível deletar os dados pois o Nome ou Senha estão inválidos!")
    }
    
}
