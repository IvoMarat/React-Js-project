import "./navbar.css"
import logo from "..//img/logo.png"
import ItemListContainer from "../itemNavContainer/itemNavContainer"
import CartWidget from "../cartWidget/cartWidget"



function Navbar() {
  return (
    <nav className="container_navbar">
    <img src= {logo} className="container_navbar_logo"></img>
    <ul className="container_navbar_ul">
    <ItemListContainer txtNav="Nuestras fragancias"/>
    <ItemListContainer txtNav="Nosotros"/>
    <ItemListContainer txtNav="Ubicacion"/>
    <ItemListContainer txtNav="Envios"/>
    <CartWidget/>
    </ul>
    </nav>
  )
}

export default Navbar