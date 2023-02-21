import { FaShoppingCart} from 'react-icons/fa';
import "./cartWidget.css";

const CartWidget = () => {
  return (
    <button className='carritoBoton' ><span><FaShoppingCart/>0</span></button>
  )
}

export default CartWidget