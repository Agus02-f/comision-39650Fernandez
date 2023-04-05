import { AiOutlineShoppingCart } from "react-icons/ai"

const CartWidget = () => {
  return (
    <div>
      <AiOutlineShoppingCart size={30} />
      <span>0</span>
    </div>
  )
}

export default CartWidget