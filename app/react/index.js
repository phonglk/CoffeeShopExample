require('babel-runtime/core-js/promise').default = require('bluebird');
require('babel-polyfill');
import React                    from 'react';
import { render }               from 'react-dom';
import injectTapEventPlugin     from 'react-tap-event-plugin';
import { browserHistory }       from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
/* eslint-enable import/no-unresolved */
import Root from './Root';
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
render(<Root store={store} history={history} />, document.getElementById('app'));
