const redux = require("redux");
const produce = require("immer").produce;
const createStore = redux.createStore;

const initialState = {
  name: "Yatin",
  address: {
    street: "Sector-16",
    city: "Greater Noida",
    state: "Uttar Pradesh",
  },
};

const updateStreetActionCreator = (updatedStreet) => {
  return {
    type: "UPDATE_STREET",
    payload: updatedStreet,
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_STREET":
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      // Immer made above logic very simple
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(rootReducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated State: ", store.getState()));
store.dispatch(updateStreetActionCreator("Sector-16C"));
unsubscribe();
