import React from 'react';
import styles from './Depoimentos.module.css';

function Depoimentos() {
    const depoimentosData = [
        {
            nome: "Brenda Melo",
            texto: "Faço meu acompanhamento há mais de 2 anos e posso dizer que fez muita diferença para mim. Me sinto mais leve, mais equilibrada emocionalmente e com mais bem-estar no dia a dia. Cada atendimento é um momento de cuidado e acolhimento. Sou muito grata por todo esse processo e recomendo de coração.",
            avaliacao: 5
        },
        {
            nome: "Jenniffer Guimarães",
            texto: "Fazer terapia com a Angra tem sido uma experiência muito especial para mim. Ao longo desse processo, consegui enxergar muitas situações da minha vida com mais clareza e consciência. A constelação familiar que fizemos há um tempo foi algo muito marcante. Realmente virou muitas chaves dentro de mim e trouxe mudanças importantes para várias áreas da minha vida. Passei a compreender melhor algumas questões, melhorar relacionamentos e ter um olhar mais leve sobre muitas situações. Sou muito grata por todo o acolhimento, carinho e profissionalismo da Angra. Tem sido uma jornada de muito aprendizado, autoconhecimento e transformação.",
            avaliacao: 5
        },
        {
            nome: "Luiza Carrilho",
            texto: "Conheci o trabalho da Angra há aproximadamente três meses e, desde então, venho sendo acompanhada por ela em um processo terapêutico que tem contribuído significativamente para o meu bem-estar e para a forma como tenho conduzido minha rotina. Ao longo desse período, realizamos diferentes abordagens integrativas. Mais do que a variedade de técnicas, o que realmente fez diferença foi a forma extremamente criteriosa, ética e individualizada com que cada atendimento foi conduzido. Em nenhum momento tive a sensação de estar recebendo um protocolo padronizado; cada sessão foi pensada de acordo com as minhas necessidades e com o momento que eu estava vivenciando. Naturalmente, esse processo caminhou em conjunto com a psicoterapia e outros cuidados que já faziam parte da minha rotina. Ainda assim, percebo que o trabalho desenvolvido pela Angra foi um importante complemento para a minha evolução. Tenho profunda gratidão por tudo o que vivi nesse processo e recomendo seu trabalho com absoluta confiança a qualquer pessoa que esteja em busca de um cuidado sério, humano e verdadeiramente transformador.",
            avaliacao: 5
        }
    ];

    return (
        <section id="depoimentos" className={styles.divSecDepoimentos}>
            {}
            <div className={styles.titulosDepoimentos}>
                <h1>Depoimento de Clientes</h1>
                <h2>Espaço de Partilha</h2>
            </div>

            {}
            <div className={styles.gridDepoimentos}>
                {depoimentosData.map((item, index) => (
                    <div key={index} className={styles.cardDepoimento}>
                        {}
                        <span className={styles.aspasCard}>“</span>
                        
                        {}
                        <div className={styles.estrelas}>
                            {"★".repeat(item.avaliacao)}
                        </div>
                        
                        {}
                        <p className={styles.textoDepoimento}>{item.texto}</p>
                        
                        {}
                        <h3 className={styles.nomeTestemunha}>{item.nome}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Depoimentos