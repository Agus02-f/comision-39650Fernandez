
import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.css"
import { Outlet, Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img src="https://res.cloudinary.com/dnudj79f9/image/upload/v1682275621/Babys.com/logo_bjonlp.png" alt="Este es el logo de mi Empresa" />
        </Link>
        <ul style={{ display: "flex", gap: "30px", }}>
          <Link to="/">Todo</Link>
          <Link to="/category/Junior">Junior</Link>
          <Link to="/category/Kids">Kids</Link>
          <Link to="/category/Mini">Mini</Link>
        </ul>
        <CartWidget />
      </div>

      <Outlet />
    </div>
  )
}

export default Navbar