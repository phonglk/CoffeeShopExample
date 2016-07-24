import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
require('./style.less');

export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Coffee Shop Simulator"
          iconElementLeft={<div></div>}
        />
        <Paper style={{margin: 20}} zDepth={1}>
          <div>{this.props.children}</div>
        </Paper>
      </div>
    );
  }
}
