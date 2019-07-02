import React from 'react';

const CartItem = ({wut}) => {
  return (
    <div className="collection-item">
    <div className="row">
      <div className="col-md-8">{wut.product.name}</div>
      <div className="col-md-2">${wut.product.priceInCents / 100}</div>
      <div className="col-md-2">{wut.quantity}</div>
    </div>
    </div>
  )
}

export default CartItem
