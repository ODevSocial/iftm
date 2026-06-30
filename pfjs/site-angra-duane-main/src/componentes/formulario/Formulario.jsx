import React, { useState } from 'react';
import style from './Formulare.module.css';
import emailjs from '@emailjs/browser';

function Formulario() {

    const [form, setForm] = useState({
        nome: '',
        email: '',
        telefone: '',
        msg: ''
    });

    const [msgErro, setMsgErro] = useState("");

    function alterarForm(e){
        setMsgErro("")
        setForm({...form, [e.target.name]:e.target.value})
    }

    function valida(){
        if((form.nome == "" )|| (form.email == "" ) || (form.telefone == "" ) || (form.msg == "" ))
            setMsgErro("Preencha todos os campos")
        else{
            var templateParams = {
                from_name: form.nome,
                from_email: form.email,
                from_telefone: form.telefone,
                from_msg: form.msg
            };

            emailjs.send('service_v791y0v', 'template_84f687u', templateParams, 'du61_zHMa2HcjsItV').then(
                (response) => {
                    setMsgErro("Email enviado com sucesso")
                },
                (error) => {
                    setMsgErro("Não foi possivel enviar o email. Verifique sua conexão e tente novamente!")
                },
            );
        }
    }
    return (
        <>        
            <div id="formulario" className={style.divFundoSecForm}>
                <div className={style.textoMotivacao}>
                    <p>TALVEZ A <span className={style.impacto}>MUDANÇA</span></p>
                    <p>QUE VOCE <span className={style.impacto}>PROCURA</span></p>
                    <p>COMEÇA COM APENAS UMA</p>
                    <p><span className={style.impacto}>MENSAGEM</span></p>
                </div>

                <div className={style.formularioCaio}>
                    <form>
                        <input type="text" name="nome" id='nome' placeholder='SEU NOME' onChange={alterarForm} />

                        <div className={style.containerFormulario}>
                            <input type="text" name="email" id="email" placeholder='SEU E-MAIL' onChange={alterarForm} />

                            <input type="text" name="telefone" id="telefone" placeholder='TELEFONE' onChange={alterarForm} />
                        </div>
                        
                        <textarea type="text" name="msg" id="msg" placeholder='SUA MENSAGEM' onChange={alterarForm}></textarea>

                        <input type="button" value="DAR UM PASSO" onClick={valida}/>

                        <p>{msgErro}</p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Formulario;