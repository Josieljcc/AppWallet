import { ADD_EMAIL } from '../actions/userActions';

const initialState = {
  email: '',
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case ADD_EMAIL:
    return { email: payload };
  default:
    return state;
  }
};

export default userReducer;
