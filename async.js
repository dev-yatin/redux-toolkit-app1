const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const actionTypes = {
  FETCH_REQUESTED: "FETCH_REQUESTED",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILED: "FETCH_FAILED",
};

const initialState = {
  loading: false,
  users: [],
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REQUESTED: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    }
    case actionTypes.FETCH_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

const usersActionCreator = () => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.FETCH_REQUESTED });
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({ type: actionTypes.FETCH_SUCCESS, payload: response.data });
    } catch (err) {
      dispatch({ type: actionTypes.FETCH_FAILED, payload: error.message });
    }
  };
};

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated State: ", store.getState()));
store.dispatch(usersActionCreator());
unsubscribe();
