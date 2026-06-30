import React from 'react';
import styles from './Oferecimento.module.css';

function Oferecimento() {
    const cardsData = [
        {
            title: "Medicina Chinesa",
            items: [
                "Diagnóstico Visual (Língua e Face)",
                "Acupressão para Alívio de Dores",
                "Práticas de Moxabustão e Ventosa",
                "Restauração da Energia Vital (Qi)"
            ]
        },
        {
            title: "Práticas Energéticas",
            items: [
                "Constelação Familiar Sistêmica",
                "Gestão de Estresse e Ansiedade",
                "Meditação e Exercícios Respiratórios",
                "Harmonização Emocional Direcionada"
            ]
        },
        {
            title: "Harmonia",
            items: [
                "Avaliação dos 5 Elementos Chineses",
                "Alimentação Terapêutica Personalizada",
                "Uso de Fitoterápicos e Cogumelos",
                "Foco em Longevidade e Prevenção"
            ]
        },
        {
            title: "Cursos Ministrados",
            items: [
                "Capacitações e Mentorias 100% Online",
                "Metodologia Prática e Didática",
                "Formações para Autocuidado e Profissionais",
                "Agenda de Turmas no @terapeutaangra.duane"
            ]
        }
    ];

    return (
        <section id="oque-e" className={styles.divSecOferecimento}>
                <div className={styles.titulosOferecimento}>
                <h1>Caminhos de Cura</h1>
                <h2>Bem-Estar e Desenvolvimento</h2>
            </div>
            
            <div className={styles.gridOferecimento}>
                {cardsData.map((card, index) => (
                    <div key={index} className={styles.cardOferecimento}>
                        <h3>{card.title}</h3>
                        <ul className={styles.itemList}>
                            {card.items.map((item, itemIndex) => (
                                <li key={itemIndex} className={styles.item}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Oferecimento;