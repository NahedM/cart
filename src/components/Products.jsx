import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  state = {
    products: [
      { id: 1, quantity: 3 },
      { id: 2, quantity: 6 },
      { id: 3, quantity: 9 },
      { id: 4, quantity: 11 },
    ],
  };

  render() {
    return (
      <>
        {this.state.products.map((product) => (
          <Product />
        ))}
      </>
    );
  }
}

export default Products;
