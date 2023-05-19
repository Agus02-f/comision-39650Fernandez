import React, { useContext } from 'react'
import Cart from './Cart'
import { CartContext } from '../../context/CartContext'

const CartContainer = () => {

    const { cart, clearCart, deleteProducById, getTotalPrice } = useContext(CartContext)

    let total = getTotalPrice()

    return (
        <div>
            <Cart total={total} cart={cart} clearCart={clearCart} deleteProducById={deleteProducById} />
        </div>
    )
}

export default CartContainer