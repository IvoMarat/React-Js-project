import { Link } from 'react-router-dom'

const Card = ({producto}) => {

return (
    <Link to={`${producto.id}`}>
    <div className="box" key ={producto.id}>
    <h1>{producto.titulo}</h1>
    <img className="box_img" src={producto.imagen}></img>
    <div>$ {producto.precio}</div>
    <button className="box_button">Comprar</button>
    </div>
    </Link>
)
}

export default Card