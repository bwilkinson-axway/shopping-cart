import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';
import CartItems from './CartItems';
import AddItem from './AddItem';




class Wrapper extends Component {

state = {
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
     { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
     { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
     { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
     { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
     { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
     { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
     { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
     { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
  ],

    cartItemsList: [
    { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
    { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
    { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 }
  ]
  }

fuckyoubro = (e) => {
  e.preventDefault()
  let quantity = e.target.quantity.value;
  let product = e.target.product.value;
  let price = 4;

  this.state.products.map( item => {
    if (item.name === product) {
      price = item.priceInCents
    }
  })


  this.setState(prevState => (
    {
      cartItemsList: prevState.cartItemsList.concat({product:{name: product, priceInCents: price}, quantity: quantity})
    }
  ))
}

render() {

  return (
    <div>
      <Header />
      <CartItems item = {this.state.cartItemsList} />
      <AddItem onAdd = {this.fuckyoubro} key = {this.state.products.id} list = {this.state.products} />
      <Footer copyright='2016'/>
    </div>

  )
}
}
export default Wrapper
