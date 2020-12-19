import {LOGIN_USER, LOGOUT_USER, REGISTRATION_USER, UPDATE_USER} from "../actions/user.action";

const initialState = {
  email: '',
  password: ''
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_USER:
      return {
        url: '',
        loading: true,
        error: false,
      };
    case LOGIN_USER:
      return {
        url: '',
        loading: true,
        error: false,
      };
    case UPDATE_USER:
      return {
        url: action.url,
        loading: false,
        error: false,
      };
    case LOGOUT_USER:
      return {
        url: '',
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
