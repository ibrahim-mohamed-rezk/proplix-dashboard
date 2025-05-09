import {
  LOADING_TOGGLE_ACTION,
  LOGIN_CONFIRMED_ACTION,
  LOGIN_FAILED_ACTION,
  LOGOUT_ACTION,
  SIGNUP_CONFIRMED_ACTION,
  SIGNUP_FAILED_ACTION,
} from "../actions/AuthActions";

const initialState = {
  auth: {
    token: "",
    user: {
      id: "",
      name: "",
      email: "",
      phone: "",
      avatar: "",
      role: "",
    },
  },
  errorMessage: "",
  successMessage: "",
  showLoading: false,
};

export function AuthReducer(state = initialState, action) {
  if (action.type === SIGNUP_CONFIRMED_ACTION) {
    return {
      ...state,
      auth: {
        token: action.payload.token,
        user: action.payload.data,
      },
      errorMessage: "",
      successMessage: action.payload.msg,
      showLoading: false,
    };
  }

  if (action.type === LOGIN_CONFIRMED_ACTION) {
    return {
      ...state,
      auth: {
        token: action.payload.token,
        user: {
          ...action.payload.user,
        },
      },

      errorMessage: "",
      successMessage: action.payload.msg,
      showLoading: false,
    };
  }

  if (action.type === LOGOUT_ACTION) {
    return {
      ...state,
      errorMessage: "",
      successMessage: "",
      auth: {
        token: "",
        user: {
          id: "",
          name: "",
          email: "",
          phone: "",
          avatar: "",
          role: "",
        },
      },
    };
  }

  if (
    action.type === SIGNUP_FAILED_ACTION ||
    action.type === LOGIN_FAILED_ACTION
  ) {
    return {
      ...state,
      errorMessage: action.payload,
      successMessage: "",
      showLoading: false,
    };
  }

  if (action.type === LOADING_TOGGLE_ACTION) {
    return {
      ...state,
      showLoading: action.payload,
    };
  }

  return state;
}
