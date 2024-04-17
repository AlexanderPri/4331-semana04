const Header = () => {
    return <header>
        <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
 <div className="container">
 <a className="navbar-brand"><b>SushiBar</b></a>
 <form className="d-flex" role="search">
 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
 <button className="btn btn-outline-success" type="submit">Buscar</button>
 </form>
 </div>
 </nav>
    </header>;
}

export default Header;