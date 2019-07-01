import React from 'react';
import Header from './header';
import Footer from './footer';
import CartItems from './CartItems';

const Wrapper = () => {
  var cartItemsList = [
  { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
  { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
];
console.log(cartItemsList)
  return (
    <div>
      <Header />
      <CartItems item = {cartItemsList} />
      <Footer copyright='2016'/>
    </div>

  )
}

export default Wrapper
