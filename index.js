const redux = require("redux");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const cakeOrderedActionCreator = () => {
  return {
    type: "CAKE_ORDERED",
    quantity: 1,
  };
};

const iceCreamOrderedActionCreator = () => {
  return {
    type: "ICE_CREAM_ORDERED",
    quantity: 1,
  };
};

const initialState = {
  cake: 10,
  iceCream: 10,
};

const cakeReducer = (state = initialState.cake, action) => {
  switch (action.type) {
    case "CAKE_ORDERED":
      if (state - action.quantity > 0) {
        return state - action.quantity;
      }
      return state;
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialState.iceCream, action) => {
  switch (action.type) {
    case "ICE_CREAM_ORDERED":
      if (state - action.quantity > 0) {
        return state - action.quantity;
      }
      return state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated State:", store.getState()));

store.dispatch(cakeOrderedActionCreator());
store.dispatch(cakeOrderedActionCreator());
store.dispatch(cakeOrderedActionCreator());
store.dispatch(iceCreamOrderedActionCreator());
store.dispatch(iceCreamOrderedActionCreator());

unsubscribe();
