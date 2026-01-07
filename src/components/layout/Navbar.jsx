import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <strong className="logo">SellFlux.</strong>

        <nav>
          <a href="#">Recursos</a>
          <a href="#">Soluções</a>
          <a href="#">Preços</a>
          <a href="#">Contato</a>
          <a href="#">Quem somos</a>
        </nav>

        <div className="navbar-actions">
          <a href="#">Login</a>
          <button className="btn-primary">Começar Agora</button>
        </div>
      </div>
    </header>
  );
}
