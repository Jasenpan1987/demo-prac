import React, { Component } from "react";
import { connect } from "react-redux";
import { TableView } from "../TableView";
import { fetchOrderline } from "./actions";

class OrderlineComponent extends Component {
  componentDidMount() {
    this.props.fetchOrderline();
  }

  render() {
    return (
      <div>
        <h4>Order Line table</h4>
        {
          this.props.orderline.length > 0 ? 
          <TableView tableContent={this.props.orderline}/> :
          <div>Loading...</div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  orderline: state.orderline
});

const mapDispatchToProps = dispatch => ({
  fetchOrderline: () => dispatch(fetchOrderline())
});
export const Orderline = connect(mapStateToProps, mapDispatchToProps)(OrderlineComponent);