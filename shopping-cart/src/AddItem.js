import React, {Component} from 'react';

class AddItem extends Component {
state = {}
render() {
  return (
    <div className='container'>
  <form>
  <div class="form-group">
    <label for="quantity">Quantity</label>
    <input type="number" class="form-control" id="quantity" />
  </div>
  <div class="form-group">
    <label for="product">Product</label>
    <select class="form-control" id="product">
      <option>1</option>

    </select>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
  )
}
}

export default AddItem
