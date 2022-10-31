// ./src/redux/actions/index.js
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
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

function failedRequest(error) {
  return {
    type: FAILED_REQUEST,
    payload: error,
  };
}

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => dispatch(getCurrencies(json)))
      .catch((error) => dispatch(failedRequest(error)));
  };
}
