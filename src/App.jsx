import React, { Component } from "react";
import Products from "./components/Products";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    products: [
      { id: 1, quantity: 0 },
      { id: 2, quantity: 6 },
      { id: 3, quantity: 9 },
      { id: 4, quantity: 11 },
    ],
  };
  handleDelete = (id) => {
    const products = this.state.products.filter((p) => p.id !== id);
    this.setState({ products });
  };
  // this.setState({ quantity: this.state.quantity + 1 });
  handleIncrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[0] = { ...product };
    products[index].quantity++;
    this.setState({ products });
  };

  handleReset = () => {
    const products = this.state.products.map((product) => ({
      ...product,
      quantity: 0,
    }));
    this.setState({ products });
  };
  render() {
    const { products } = this.state;
    return (
      <>
        <NavBar productCount={products.length} />
        <div className="container mt-4">
          <Products
            products={products}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </div>
      </>
    );
  }
}

export default App;
