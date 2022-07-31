import React, { Component } from "react";
import Products from "./components/Products";

class App extends Component {
  render() {
    return (
      <>
        <h1>Välkommen</h1>
        <p>Jag heter Nahed</p>
        <Products />
      </>
    );
  }
}

export default App;
