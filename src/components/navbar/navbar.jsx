import "./navbar.css"
import logo from "..//img/logo.png"
import CartWidget from "../cartWidget/cartWidget"
import { Link } from "react-router-dom"



function Navbar() {
  return (
    <nav className="container_navbar">
        <Link to= "/productos">
    <img src= {logo} className="container_navbar_logo"></img>
    </Link>
    <ul className="container_navbar_ul">
    <Link to= "/productos">
    <li>Nuestras fragancias</li>
    </Link>
    <Link to= "/productos/Ch">
    <li >Carolina Herrera</li>
    </Link>
    <Link to= "/productos/ck">
    <li>Calvin Klein</li>
    </Link>
    <Link to= "/productos/pr">
    <li>Paco Rabanne</li>
    </Link>
    <CartWidget/>
    </ul>
    </nav>
  )
}

export default Navbar