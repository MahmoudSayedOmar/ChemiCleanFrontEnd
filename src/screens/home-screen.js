import React, { Component } from "react";

import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { ProductList } from "../components";
import { loadMoreProducts } from "../state";

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static mapStatetToProps(state: State) {
    return {
      products: state.product.products,
      errorMessage: state.product.errorMessage,
      loading: state.product.loading,
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ loadMoreProducts }, dispatch);
  }
  componentDidMount() {
    this.props.loadMoreProducts();
  }

  render() {
    return (
      <div>
        <ProductList
          products={this.props.products}
          onLoadMore={this.props.loadMoreProducts}
          loading={this.props.loading}
        ></ProductList>
      </div>
    );
  }
}
export const HomeScreen = connect(
  HomeContainer.mapStatetToProps,
  HomeContainer.mapDispatchToProps
)(HomeContainer);
