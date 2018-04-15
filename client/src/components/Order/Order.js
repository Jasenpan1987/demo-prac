import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrder } from "./actions";
import { TableView } from "../TableView";

const headContent = [
  "Order ID", "Customer ID", "Org CustomerID", "Product ID", 
  "Product Type", "Seller", "Order Date"
];

class OrderComponent extends Component {
  componentDidMount() {
    this.props.fetchOrder();
  }
  
  render() {
    return (
      <div>
        <h4>Order Table</h4>
        <TableView tableContent={[this.props.order]} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  order: state.order
});

const mapDispatchToProps = dispatch => ({
  fetchOrder: () => dispatch(fetchOrder())
});

export const Order = connect(mapStateToProps, mapDispatchToProps)(OrderComponent);
