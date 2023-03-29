import React from 'react'
import './CartWidget.css'
const CartWidget = () => {

    const ImgCarrito = "https://cdn-icons-png.flaticon.com/512/3394/3394009.png"
    return (
        <div>
            <img  className='imgCarrito '  src= {ImgCarrito} alt="" />
            <strong className='Numero'>5</strong>
        </div>
    )
}

export default CartWidget