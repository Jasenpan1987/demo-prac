import React, { Component } from "react";
import { connect } from "react-redux";
import { TableView } from "../TableView";
import { fetchPackage } from "./actions";

class PackageComponent extends Component {
  componentDidMount() {
    this.props.fetchPackage();
  }

  render() {
    return (
      <div>
        <h4>Package table</h4>
        {
          this.props.package.length > 0 ? 
          <TableView tableContent={this.props.package}/> :
          <div>Loading...</div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  package: state.package
});

const mapDispatchToProps = dispatch => ({
  fetchPackage: () => dispatch(fetchPackage())
});
export const Package = connect(mapStateToProps, mapDispatchToProps)(PackageComponent);