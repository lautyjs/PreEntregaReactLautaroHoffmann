import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <header>
        <h1>Ferreteria El Gringo</h1>

        <nav>
            <ul>
                <li>Herramientas</li>
                <li>Pinturas</li>
                <li>Tubos de Agua</li>
            </ul>
        </nav>

        <CartWidget/>



    </header>
  )
}

export default Navbar