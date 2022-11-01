// ./src/redux/actions/index.js
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const SHOW_EDITOR = 'SHOW_EDITOR';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';

function getCurrencies(json) {
  return {
    type: GET_CURRENCIES,
    payload: json,
  };
}

export function saveExpense(expense) {
  return {
    type: SAVE_EXPENSE,
    payload: expense,
  };
}
function requestCurrency() {
  return { type: REQUEST_CURRENCIES };
}

export function removeExpense(id) {
  return {
    type: REMOVE_EXPENSE,
    payload: id,
  };
}

export function showEditor(id) {
  return {
    type: SHOW_EDITOR,
    payload: id,
  };
}

export function editExpense(expense) {
  return {
    type: EDIT_EXPENSE,
    payload: expense,
  };
}

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => dispatch(getCurrencies(json)));
  };
}
