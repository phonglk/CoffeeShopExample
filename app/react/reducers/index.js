import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import menu from './menu';

const rootReducer = combineReducers({
  routing,
  menu,
});

export default rootReducer;
