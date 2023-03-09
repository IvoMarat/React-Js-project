import Card from "../Card/card";
import productos from "./../data.json";
import "./itemListContainer.css"

function ItemListContainer (){
    return( 
        productos.map(producto => {
            return (
                <Card key={producto.id} producto={producto}/>
                )})
    )
}

export default ItemListContainer