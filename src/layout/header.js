const feather = require('feather-icons');
setTimeout(() => {
    feather.replace();
}, 1000);

const Header = () => {
    return <header>
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand"><img src="https://static.vecteezy.com/system/resources/previews/041/766/307/original/ai-generated-cartoon-sushi-nigiri-sushi-roll-logo-illustration-no-background-perfect-for-print-on-demand-free-png.png" className="header-image" alt="..." /><b>SushiBar</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#"><i data-feather="home"></i> Inicio</a>
        <a className="nav-link" href="#"><i data-feather="book"></i> Carta</a>
        <a className="nav-link" href="#"><i data-feather="dollar-sign"></i> Ofertas</a>
        <a className="nav-link" href="#"><i data-feather="calendar"></i> Reserva online</a>
        <a className="nav-link" href="#"><i data-feather="help-circle"></i> Ayuda</a>
      </div>
    </div>
 </div>
</nav>
        </header>;
}

export default Header;