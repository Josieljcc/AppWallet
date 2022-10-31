import { REQUEST_CURRENCIES,
  GET_CURRENCIES, FAILED_REQUEST,
  SAVE_EXPENSE, REMOVE_EXPENSE } from '../actions/walletActions';

const initialState = {
  currencies: [],
  expenses: [{
    id: '',
    value: '',
    currency: '',
    method: '',
    tag: '',
    description: '',
    exchangeRates: '',
  }],
  editor: false,
  idToEdit: 0,
  isFetching: false,
};

const walletReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return { ...state,
      currencies: Object.keys(payload)
        .filter((currency) => currency !== 'USDT'),
      isFetching: false };
  case FAILED_REQUEST:
    return { ...state, error: payload, isFetching: false };
  case SAVE_EXPENSE:
    return { ...state,
      expenses: state.expenses[0].id === ''
        ? [payload] : [...state.expenses, payload] };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.length === 1 ? [{
        id: '',
        value: '',
        currency: '',
        method: '',
        tag: '',
        description: '',
        exchangeRates: '',
      }] : state.expenses.filter((expense) => expense.id !== payload),
    };
  default:
    return state;
  }
};

export default walletReducer;
