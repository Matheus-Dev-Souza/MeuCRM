import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <span className="hero-badge">
          CRM com IA e Ferramentas de Marketing
        </span>

        <h1>
          Construa funis que convertem <br />
          no piloto automático
        </h1>

        <p>
          O SellFlux centraliza marketing, atendimento e vendas com IA
          para transformar conversas em receita, em dias, não meses.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">Agendar Demonstração</button>
          <button className="btn-outline">Iniciar Teste Grátis</button>
        </div>

      </div>
    </section>
  );
}
