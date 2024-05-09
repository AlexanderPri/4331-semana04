import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import comida from './data/comida.json'


const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);



const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return <main>
        <Carousel>
            {
                comida.map(it => {
                    return (<Carousel.Item onClick={(e) => {
                        e.preventDefault(); handleClick(it.slug)
                    }}>
                        <img className='d-block w-100 dark-image d-block carousel-image' src={it.picture}></img>
                        <Carousel.Caption>
                            <button className="btn btn-primary dark-transparent">Conoce más</button>
                        </Carousel.Caption>
                    </Carousel.Item>);
                })
            }
        </Carousel>
    </main >;
}

export default Main;