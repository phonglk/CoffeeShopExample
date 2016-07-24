import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import withMaterialUI from './decorators/withMaterialUI';
import AppContainer from './containers/AppContainer';
import ViewOrderContainer from './containers/ViewOrderContainer';
import ViewSales from './views/sales';

// @withMaterialUI
export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  render() {
    const { store, history } = this.props;
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <Router history={history}>
            <Route path="/react" component={AppContainer}>
              <IndexRedirect to="/react/order" />
              <Route path="order" component={ViewOrderContainer} />
              <Route path="sales" component={ViewSales} />
            </Route>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
