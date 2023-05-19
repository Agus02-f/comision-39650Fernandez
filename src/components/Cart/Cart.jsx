import { Button } from '@mui/material'
import React from 'react'

const Cart = ({ cart, clearCart, deleteProducById, total }) => {
  return (
    <div>
      <h1>Aca el carrito</h1>
      {cart.map((product) => {
        return (
          <div key={product.id} style={{ border: "2px solid black" }}>
            <h3> {product.title} </h3>
            <h4> {product.price} </h4>
            <h4> {product.quantity} </h4>
            <Button variant='contained' onClick={() => deleteProducById(product.id)}>Elimnar</Button>
          </div>
        )
      })}

      <Button onClick={clearCart} variant='contained'>Limpiar Carrito {" "} </Button>

      <h1>El total del carrito es {total} </h1>
    </div>
  )
}

export default Cart