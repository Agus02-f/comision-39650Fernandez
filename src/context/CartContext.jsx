import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    let existe = cart.some(elemento => elemento.id === id)
    return existe
  }

  const agregarAlCarrito = (producto) => {
    let existe = isInCart(producto.id)
    if (existe) {

      let newCart = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return { ...elemento, quantity: elemento.quantity + producto.quantity }
        } else {
          return elemento;
        }
      })
      setCart(newCart)

    } else {
      setCart([...cart, producto])
    }
  };

  const clearCart = () => {
    setCart([])
  }

  const deleteProducById = (id) => {
    const productosFiltrados = cart.filter((elemento) => elemento.id !== id)
    setCart(productosFiltrados)
  }

  const getTotalPrice = () => {

    let total = cart.reduce((acc, elemento) => {
      return acc + (elemento.price * elemento.quantity)
    }, 0)
    return total
  }

  const getTotalQuantyty = () => {

    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity
    }, 0)

    return total
  }


  let data = { cart, getTotalQuantyty, agregarAlCarrito, clearCart, deleteProducById, getTotalPrice }
  return <CartContext.Provider value={data}> {children} </CartContext.Provider>
}

export default CartContextProvider;