import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

import App from '../components/App';

class AppContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  render() {
    return <App {...this.props} />;
  }
}

const ConnectedApp = connect()(AppContainer);

export default ConnectedApp;
