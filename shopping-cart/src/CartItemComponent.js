import React from 'react';

const CartItem = ({wut}) => {
  console.log(wut)
  return (
    <div class="collection-item">
    <div class="row">
      <div class="col-md-8">{wut.product.name}</div>
      <div class="col-md-2">${wut.product.priceInCents / 100}</div>
      <div class="col-md-2">{wut.quantity}</div>
    </div>
    </div>
  )
}

export default CartItem
