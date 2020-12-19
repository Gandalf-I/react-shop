import {LOGIN_USER, REGISTRATION_USER} from "../actions/user.action";

export const RegistrationUser = (payload) => {
  return {
    type: REGISTRATION_USER,
    payload
  };
}

export const LoginUser = (payload) => {
  return {
    type: LOGIN_USER,
    payload
  };
}
