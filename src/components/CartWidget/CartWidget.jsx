import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import "./CartWidget.css"

const CartWidget = () => {

  const { getTotalQuantyty } = useContext(CartContext)

  let total = getTotalQuantyty()

  return (
    <Link to="/cart">
      <div className="container-cart">
        <AiOutlineShoppingCart size={30} style={{ fontSize: "2rem", color: "beige", }} />
        <div className="bubble-counter">
          <span> {total} </span>
        </div>
      </div>
    </Link>
  )
}

export default CartWidget