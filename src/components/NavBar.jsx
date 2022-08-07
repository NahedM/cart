import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand h1">
            Navbar
            <span className="badge rounded-pill bg-secondary ms-2">2</span>
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
