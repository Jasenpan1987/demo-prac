import React, { Component } from 'react';
import { Header } from "./Header";
import { Order } from "./Order";
import { Orderline } from "./Orderline";
import { Package } from "./Package";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Order />
          <Orderline />
          <Package />
        </div>
      </div>
    );
  }
}

export default App;
