import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// Define your initial state
const initialState = {
  user: null,
};

// Define the reducer
const reducer = (state = initialState, action) => {
  // console.log("Store: ", action);
  switch (action.type) {
    case "SET_USER":
      // console.log("Store: ", action);
      // console.log({
      //   ...state,
      //   user: action.payload,
      // });
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

// Create the Redux store using configureStore
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
