import {
  REQUEST_MENU_PENDING,
  REQUEST_MENU_SUCCESS,
  REQUEST_MENU_FAIL,
} from '../constants/ActionTypes';

const initialState = {
  productList: [],
  sizeList: [],
  isLoading: false,
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case REQUEST_MENU_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_MENU_SUCCESS: {
      const { productList, sizeList } = action;
      return {
        ...state,
        productList,
        sizeList,
      };
    }
    default:
      return state;
  }
}
