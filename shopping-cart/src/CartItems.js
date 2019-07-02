import React from 'react';
import CartItem from './CartItemComponent';

const CartItems = ({item}) => {
  let total = 0;
  item.map(item => {
    total += item.quantity * item.product.priceInCents;
  })

  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
          {item.map(item => <div key={item.id} className="list-group-item"> <CartItem key={item.name} wut = {item} /> </div>)}
      </div>
      <p> Total Price: $ {total / 100}</p>
    </div>
  )
}

export default CartItems
