/*resgatar informações*/
localStorage.length != 0 ? document.getElementById("atualnome").value = `${localStorage.nome}` : document.getElementById("atualnome").value = '...'
localStorage.length != 0 ? document.getElementById("atualnomepai").value = `${localStorage.nomepai}` : document.getElementById("atualnomepai").value = '...'
localStorage.length != 0 ? document.getElementById("atualnomemae").value = `${localStorage.nomemae}` : document.getElementById("atualnomemae").value = '...'
localStorage.length != 0 ? document.getElementById("atualcidade").value = `${localStorage.cidade}` : document.getElementById("atualcidade").value = '...'
localStorage.length != 0 ? document.getElementById("atualcurso").value = `${localStorage.curso}` : document.getElementById("atualcurso").value = '...'
localStorage.length != 0 ? document.getElementById("atualidade").value = `${localStorage.idade}` : document.getElementById("atualidade").value = '...'
/*validação: nome e senha de usuário*/
function atualizar(){
    let user = document.getElementById("atualusuario").value
    let sen = document.getElementById("atualsenha").value
    /*novos dados*/
    if(user == localStorage.usuario && sen == localStorage.senha){
        localStorage.setItem('nome', document.getElementById('atualnome').value)
        localStorage.setItem('nomemae', document.getElementById('atualnomemae').value)
        localStorage.setItem('nomepai', document.getElementById('atualnomepai').value)
        localStorage.setItem('curso', document.getElementById('atualcurso').value)
        localStorage.setItem('cidade', document.getElementById('atualcidade').value)
        localStorage.setItem('idade', document.getElementById('atualidade').value)
        alert('Dados atualizados com Sucesso!')
    }
    else{
        alert("Não foi possível atualizar os dados pois Nome ou Senha estão inválidos!")
    }
}