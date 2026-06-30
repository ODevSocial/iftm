import React from 'react';
import styles from './Beneficios.module.css';

function Beneficios() {
    const antesItems = [
        "Noites em claro e peito apertado",
        "Decisões adiadas por medo ou culpa",
        "Mesmo conflito, personagens diferentes",
        "Sensação de carregar o que não é seu",
        "A armadura exausta no comando"
    ];

    const depoisItems = [
        "Maior clareza e sono tranquilo",
        "Escolhas claras, leves e sustentáveis",
        "Relações reorganizadas e limites saudáveis",
        "Separar o que é seu do que foi herdado",
        "Uma nova auto imagem, mais leve e viva"
    ];

    return (
        <section id="benefícios" className={styles.divSecBeneficios}>
            
            <div className={styles.titulosBeneficios}>
                <h1>Benefícios da Terapia</h1>
                <h2>Transforme sua saúde emocional com equilíbrio, clareza e leveza</h2>
                <p className={styles.descricaoSub}>
                    Um atendimento terapêutico acolhedor para ajudar você a desenvolver 
                    autoconhecimento, fortalecer sua mente e viver com mais bem-estar.
                </p>
            </div>
            
            <div className={styles.corpoComparacao}>
                
                <div className={`${styles.cardComparacao} ${styles.cardAntes}`}>
                    <h3>Antes:</h3>
                    <ul className={styles.listaItens}>
                        {antesItems.map((item, index) => (
                            <li key={index} className={styles.item}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.setaFluxo}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#8fa179" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                <div className={`${styles.cardComparacao} ${styles.cardDepois}`}>
                    <h3>Depois:</h3>
                    <ul className={styles.listaItens}>
                        {depoisItems.map((item, index) => (
                            <li key={index} className={styles.item}>{item}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}

export default Beneficios;