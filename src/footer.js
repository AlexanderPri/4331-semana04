const Footer = () => {
    return <footer>
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                        <ul className='col-12 col-md-3 list-unstyled with-divider'>
                            <li className='font-weight-bold mb-2'><b>SushiBar</b></li>
                            <h7 className='text-center Mod2'><em>"SushiBar es más que un restaurante, es un hogar y lo demostramos en la calidez de nuestra atención en cada visita a esta casa."</em></h7>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled with-divider'>
                            <li className='font-weight-bold mb-2'><b>Mapa del sitio</b></li>
                            <li className='font-weight-bold mb-2'><a className='Saavedra' href="#">Inicio</a></li>
                            <li className='font-weight-bold mb-2'><a className='Saavedra' href="#">Nuestra historia</a></li>
                            <li className='font-weight-bold mb-2'><a className='Saavedra' href="#">Nuestra carta</a></li>
                            <li className='font-weight-bold mb-2'><a className='Saavedra' href="#">Libro de reclamaciones</a></li>           
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled with-divider'>
                            <li className='font-weight-bold mb-2'><b>Horarios de atención</b></li>
                            <li className='font-weight-bold mb-2 Mod2'><i data-feather="calendar"></i> Lunes a viernes 1 p.m. - 11:59 p.m.</li>
                            <li className='font-weight-bold mb-2 Mod2'><i data-feather="calendar"></i> Sabados 4 p.m. - 10:00 p.m.</li>
                            <li className='font-weight-bold mb-2 Mod2'><i data-feather="calendar"></i> Domingos 4 p.m. - 10:00 p.m. (solo delivery) </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled with-divider'>
                            <li className='font-weight-bold mb-2'><b>Encuentranos en</b></li>
                            <li className='font-weight-bold mb-2 Mod2'><i data-feather="map-pin"></i> Jr. Bolívar 957, Trujillo, Perú</li>
                            <li className='font-weight-bold mb-2 Mod2'><i data-feather="phone"></i> +51 955 109 474</li>
                            <li className='font-weight-bold mb-2 Mod2'><i data-feather="instagram"></i> <a className="Mod" href="#">https://www.instagram.com/SushiBar/</a></li>
                            <li className='font-weight-bold mb-2 Mod2'><i data-feather="mail"></i> <a className="Mod" href="#">chunchunmaru1478@gmail.com</a></li>
                        </ul>
                    </nav>
                </div>
                <section className='footer-bottom'>
                    <div className='container'>
                        <p className='abajocreo Mod2'>Copyright © 2019 - 2024 Sushi.com | Todos los derechos reservados ha Alexander Prieto</p>
                    </div>
                </section>
            </footer>
        </div>
    </footer>;
}
export default Footer;