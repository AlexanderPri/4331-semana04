import Comida from './data/comida.json';

const Single = () => {

    const currentRoute = window.location.pathname;
    const comida = Comida.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{comida.name}</h1>
        <hr></hr>
        <img src={comida.picture}></img>
        <p>{comida.description}</p>
    </>);
}

export default Single;