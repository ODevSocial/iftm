import bcrypt from 'https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm';

const URL_JSON = 'https://raw.githubusercontent.com/ODevSocial/iftm/refs/heads/main/pfjs/provaAJAX/senhaCrip.JSON';

window.addEventListener("DOMContentLoaded", function () {


    async function buscarUsuarios() {
        const response = await fetch(URL_JSON);
        return await response.json();
    }

    window.login = async function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const msg = document.getElementById('msg');

        const usuarios = await buscarUsuarios();

        const user = usuarios.find(u => u.username === username);

        if (!user) {
            msg.innerText = "Não encontrado";
            return;
        }

        const senhaValida = bcrypt.compareSync(password, user.password);

        if (senhaValida) {
            msg.innerText = "Login realizado com sucesso";
        } else {
            msg.innerText = "Senha incorreta";
        }
    };
})