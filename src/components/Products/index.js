import React from 'react';

class Products extends React.Component {
  render() {
    return (
      <div className="product">
        <div className="product--title">NEW PRODUCTS</div>
        <div className="product--tiem">
          {this.props.children}
        </div>
      </div>
    ); 
  }
}

export default Products;