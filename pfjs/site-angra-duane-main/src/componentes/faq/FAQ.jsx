import React, { useState } from 'react';
import styles from './FAQ.module.css';

const faqData = [
  {
    pergunta: "Como a Medicina Chinesa funciona no formato online, já que não tem acupuntura com agulhas?",
    resposta: "A Medicina Chinesa vai muito além das agulhas! No formato online, utilizamos o diagnóstico detalhado (análise da língua, histórico, hábitos) e aplicamos os mesmos princípios de cura através da Dietoterapia (alimentos específicos para o seu desequilíbrio), Fitoterapia (ervas), Acupressão (estímulo de pontos com os dedos) e Práticas Energéticas."
  },
  {
    pergunta: "A Mentoria Online tem o mesmo efeito de uma consulta presencial?",
    resposta: "Essa é uma dúvida muito comum. E a resposta é que sim, o atendimento online pode trazer resultados tão profundos quanto o presencial. O mais importante não é a distância física, mas a qualidade do acompanhamento, da escuta e do seu comprometimento com o processo. Muitas vezes, estar no seu próprio ambiente inclusive favorece mais conforto e conexão."
  },
  {
    pergunta: "Vou precisar fazer dietas super restritivas na Dietoterapia Chinesa?",
    resposta: "Não. O objetivo não é criar restrições ou tirar o prazer de comer. A Dietoterapia Chinesa busca entender o que o seu corpo precisa e fazer ajustes de forma equilibrada, respeitando sua rotina, seus hábitos e o seu momento. A ideia é construir um cuidado que seja possível manter."
  },
  {
    pergunta: "Os fitoterápicos naturais podem interferir nos remédios de farmácia que já tomo?",
    resposta: "Sim, alguns fitoterápicos podem interagir com medicamentos convencionais. Por isso, antes de iniciar qualquer protocolo, é importante compartilhar tudo o que você já utiliza. O cuidado é sempre individualizado para que o processo aconteça com segurança."
  },
  {
    pergunta: "Eu preciso ter alguma crença específica ou religião para as práticas energéticas funcionarem?",
    resposta: "Não precisa. As práticas energéticas não estão ligadas a uma religião específica. Você não precisa acreditar em nada além da sua própria experiência. O mais importante é estar aberto para observar como seu corpo e suas emoções respondem ao processo."
  },
  {
    pergunta: "Em quanto tempo começo a ver resultados?",
    resposta: "Cada pessoa tem seu próprio ritmo. Algumas percebem mudanças logo nas primeiras semanas, como mais disposição, melhora no sono ou sensação de bem-estar. Outras transformações acontecem de forma gradual. O foco não é acelerar o processo, mas construir resultados consistentes e duradouros."
  }
];

function FAQ() {
  const [perguntaAtiva, setPerguntaAtiva] = useState(0);

  const togglePergunta = (index) => {
    if (perguntaAtiva === index) {
      setPerguntaAtiva(null);
    } else {
      setPerguntaAtiva(index);
    }
  };

  return (
    <section className={styles.secaoFaq} id="duvidas">
      <h2 className={styles.tituloFaq}>Dúvidas Frequentes</h2>

      <div className={styles.containerFaq}>
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.cartaoFaq} ${perguntaAtiva === index ? styles.ativo : ''}`}
          >
            <div className={styles.cabecalhoFaq} onClick={() => togglePergunta(index)}>
              <h3>{item.pergunta}</h3>
              <svg 
                className={styles.iconeSeta} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            
            <div className={styles.respostaContainer}>
              <div className={styles.corpoFaq}>
                <p>{item.resposta}</p>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;