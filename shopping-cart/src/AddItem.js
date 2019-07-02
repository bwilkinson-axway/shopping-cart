import React, {Component} from 'react';
import AddItemSelect from './AddItemSelect';

class AddItem extends Component {
state = {}

render = (onAdd) => {
  return (
    <div className='container'>
  <form onSubmit = {this.props.onAdd}>

  <div className="form-group">
    <label>Quantity</label>
    <input defaultValue= '1' name='quantity' type="number" className="form-control" id="quantity" />
  </div>
  <div className="form-group">
    <label>Product</label>
    <select name='product' className="form-control" id="product">
      {this.props.list.map(item => <AddItemSelect key = {item.name} wut = {item} />)}
    </select>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}
}

export default AddItem
