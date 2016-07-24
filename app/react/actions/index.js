import { getMenu, makeOrder as makeOrderRequest } from '../api/menu';

import {
  REQUEST_MENU_PENDING,
  REQUEST_MENU_SUCCESS,
  REQUEST_MENU_FAIL,

  MAKE_ORDER_REQUEST,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_FAIL,
} from '../constants/ActionTypes';

// -- request menu

function receiveMenu(productList, sizeList) {
  return {
    type: REQUEST_MENU_SUCCESS,
    productList,
    sizeList,
  };
}

function requestMenuPending() {
  return {
    type: REQUEST_MENU_PENDING,
  };
}

function requestMenuFail() {
  return {
    type: REQUEST_MENU_FAIL,
  };
}

export function requestMenu() {
  return dispatch => {
    dispatch(requestMenuPending());
    getMenu().then(({ productList, sizeList }) => {
      dispatch(receiveMenu(productList, sizeList));
    }).catch((e) => {
      dispatch(requestMenuFail(e));
    });
  };
}

// -- make order

function makeOrderSuccess() {
  return {
    type: MAKE_ORDER_SUCCESS,
  };
}

function makeOrderPending() {
  return {
    type: MAKE_ORDER_REQUEST,
  };
}

function makeOrderFail() {
  return {
    type: MAKE_ORDER_FAIL,
  };
}

export function makeOrder(id) {
  return dispatch => {
    dispatch(makeOrderPending());
    makeOrderRequest(id).then(() => {
      dispatch(makeOrderSuccess());
    }).catch((e) => {
      dispatch(makeOrderFail(e));
    });
  };
}
