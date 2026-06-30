import React from "react";
import style from './Autoridade.module.css';
import fotoAngra from "../../images/angraDuaneAut.jpeg"

function Autoridade(){
    return(
        <>
            <div id="autoridade" className={style.divSecAut}>
                <div className={style.titulosAut}>
                    <h1>QUEM SOU</h1>
                    <h2>SAIBA UM POUCO SOBRE QUEM É ANGRA DUANE</h2>
                </div>
                <div className={style.corpoAut}>
                    <div className={style.txtAut}>
                        <p>Com quase uma década de experiência, Angra Duane é terapeuta integrativa especializada em Medicina Tradicional Chinesa, atuando na promoção do equilíbrio entre corpo, mente e energia vital. Seu trabalho reúne técnicas como acupuntura, ventosaterapia, Gua Sha, reflexologia, meditação e práticas corporais orientais, unindo sabedoria tradicional e abordagens naturais para oferecer um cuidado humanizado e completo.</p>
                        <p>Mais do que aliviar sintomas, Angra busca fortalecer a saúde integral e proporcionar bem-estar físico e emocional, ajudando cada pessoa a conquistar mais qualidade de vida através do autocuidado consciente.</p>
                    </div>
                    <img src={fotoAngra} alt="" />
                </div>
            </div>
        </>
    );
}

export default Autoridade;