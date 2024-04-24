const feather = require('feather-icons');
setTimeout(() => {
    feather.replace();
}, 1000);

const Header = () => {
    return <header>
<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand"><b>SushiBar</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#"><i data-feather="home"></i>Inicio</a>
        <a class="nav-link" href="#"><i data-feather="book"></i>Carta</a>
        <a class="nav-link" href="#"><i data-feather="dollar-sign"></i>Ofertas</a>
        <a class="nav-link" href="#"><i data-feather="help-circle"></i>Ayuda</a>
      </div>
    </div>
    <form className="d-flex" role="search">
 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success" type="submit">
        <i data-feather="search"></i>
    </button>
 </form>
 </div>
</nav>
        </header>;
}

export default Header;