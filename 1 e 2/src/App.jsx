import React from 'react';
import Card from './Card';

const cards = [
  { id: 1, title: "Plano de Desenvolvimento Institucional"},
  { id: 2, title: "Pesquisa Pública Processos IFTM"},
  { id: 3, title: "Licitações e Contratos"},
  { id: 4, title: "Receitas e Despesas"},
  { id: 5, title: "Dados Abertos"},
  { id: 6, title: "Transparência e Prestação de Contas"},
  { id: 7, title: "Servidores"},
  { id: 8, title: "Perguntas Frequentes"},
];

function App() {
  return (
    <main>
      <section className="info-section">
        <div className="section-header">
          <h2 className="section-title">Acesso à Informação</h2>
          <p className="section-subtitle">
            Veja dados de transparência e governança
          </p>
        </div>

        <div className="cards-grid">
          {cards.map((card) => (
            <Card key={card.id} title={card.title} icon={card.icon} />
          ))}
        </div>

        <button className="btn-more">Mais informações</button>
      </section>
    </main>
  );
}

export default App;