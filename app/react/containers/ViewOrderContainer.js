import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ViewOrder from '../views/order';
import { requestMenu, makeOrder } from '../actions';

class ViewOrderContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  componentWillMount() {
    this.props.dispatch(requestMenu());
  }

  render() {
    return <ViewOrder {...this.props} />;
  }
}
const mapStateToProps = (state) => state.menu;
const mapDispatchToProps = (dispatch) => ({
  makeOrder: (id) => {
    dispatch(makeOrder(id));
  },
  dispatch,
});
const ConnectedViewOrder = connect(mapStateToProps, mapDispatchToProps)(ViewOrderContainer);

export default ConnectedViewOrder;
