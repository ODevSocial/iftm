import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'


function Whatsapp() {
    return (
        <FloatingWhatsApp phoneNumber='+5534988491004' accountName='Aproveite este espaço acolhedor para conversar' chatMessage='Fique à vontade!' statusMessage='' placeholder='Digite a sua mensagem' allowClickAway={true} allowEsc={true}/>
    );
}

export default Whatsapp;