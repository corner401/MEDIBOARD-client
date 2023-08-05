/* eslint-disable import/no-anonymous-default-export */
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../action/types";
const initialState = {
  userId: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, success: action.payload };
    case LOGIN_USER:
      return { ...state, userId: action.payload };
    case LOGOUT_USER:
      return { ...state, userId: "" };
    default:
      return state;
  }
}
