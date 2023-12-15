const form = document.getElementById('form-container');

let formValido = false;

function validaCampos(campoA, campoB){
    return campoB > campoA;
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    let campoA = parseFloat(document.getElementById('campo-a').value);
    let campoB = parseFloat(document.getElementById('campo-b').value);

    const mensagemSucesso = `Parabéns! ${campoB} é maior que ${campoA} !`;
    const containerMensagemSucesso = document.querySelector('.mensagem-valido');
    const containerMensagemErro = document.querySelector('.mensagem-erro');
    
    formValido = validaCampos(campoA, campoB);
    
    if(!formValido){
        containerMensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
        
        form.reset();
    } else {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none';
        
        campoA = '';
        campoB = '';
    }
})