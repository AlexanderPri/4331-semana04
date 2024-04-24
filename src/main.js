import Carousel from 'react-bootstrap/Carousel';
const Main = () => {
    return <main>
    <Carousel>
      <Carousel.Item>
      <img src="https://elcomercio.pe/resizer/MDKz8INVeIBwI_jkSE2EYsChg-Q=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/NTKU3EROOZDVPCWTEQRRWFDV54.jpg" className="d-block w-100" alt="..."></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://www.checkealo.pe/files/productos/6134/e08d57bdd004d0ac20406efd2e9ae02b.jpg" className="d-block w-100" alt="..."></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://entrenosotros.consum.es/public/Image/2022/5/makis.jpg" className="d-block w-100" alt="..."></img> 
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

 <h1>CONOCE SOBRE NOSOTROS</h1>
 <p> Ven a nuestra tienda especializada en la prepación de
comida japonesa. Ordena todos y cada uno de nuestros platos a un precio
razonable y comparte el sabor de la cultura asiática.</p>

    </main>;
}

export default Main;