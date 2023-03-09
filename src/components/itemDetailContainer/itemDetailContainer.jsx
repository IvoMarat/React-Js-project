import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import productos from "./../data.json"
import "./itemDetailContainer.css"

const ItemDetailContainer = () => {
    const {id} = useParams ();
    const producto = productos.find ((producto) => producto.id == id);

    const [count, setCount] = useState(1)

    const increase = () => {
        setCount (count +1);
    }

    const decrease = () => {
        setCount (count -1);
    }
    
    return (
        <div className='cuadro'>
            <h1>{producto.titulo}</h1>
            <img className="cuadro_img" src={producto.imagen}></img>
            <div>$ {producto.precio}</div>
            <div>{producto.descripcion}</div>
            <button disabled={count <= 1} className="cuadro_contador" onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= 5} className='cuadro_contador' onClick={increase}>+</button>
            <button className="cuadro_button">Comprar</button>
        </div>)
}

export default ItemDetailContainer