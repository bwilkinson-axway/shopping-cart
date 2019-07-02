import React, {Component} from 'react';
import AddItemSelect from './AddItemSelect';

class AddItem extends Component {
state = {}
render() {
  return (
    <div className='container'>
  <form>

  <div className="form-group">
    <label forHTML="quantity">Quantity</label>
    <input type="number" class="form-control" id="quantity" />
  </div>
  <div className="form-group">
    <label forHTML="product">Product</label>
    <select className="form-control" id="product">
      {this.props.list.map(item => <AddItemSelect wut = {item} />)}
    </select>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}
}

export default AddItem
