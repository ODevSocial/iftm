    const formularioLogin = document.getElementById('formularioLogin');
    const campoLogin = document.getElementById('login');
    const campoSenha = document.getElementById('senha');
    const campoConfirmarSenha = document.getElementById('confirmarSenha');
    const botaoEntrar = document.getElementById('btnEntrar');
    const botaoLimpar = document.getElementById('btnLimpar');
    
    function limparCampos() {
        campoLogin.value = '';
        campoSenha.value = '';
        campoConfirmarSenha.value = '';
    }
    
    function validarLogin() {

        if (campoLogin.value.trim() === '') {
            alert('Digite seu login!');
            campoLogin.focus();
            return false;
        }
        
        if (campoSenha.value !== campoConfirmarSenha.value) {
            alert('As senhas devem ser identicas.');
            campoSenha.value = '';
            campoConfirmarSenha.value = '';
            campoSenha.focus();
            return false;
        }
        
        alert('Seja bem-vindo.');
        return true;
    }
    
    botaoEntrar.addEventListener('click', function() {
        validarLogin();
    });

    botaoLimpar.addEventListener('click', function() {
        limparCampos();
    });