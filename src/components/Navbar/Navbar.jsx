
// import "./Navbar.module.css"

import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <h3>Logo</h3>
      <ul style={{ display: "flex", gap: "30px", }}>
        <li>Bebis</li>
        <li>Kids</li>
        <li>Mini</li>
        <li>Nosotros</li>
      </ul>
      <div>
        <CartWidget />
      </div>
    </div>
  )
}

export default Navbar