import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";
import { albumInfo } from "./data/albumInfo";
import { awardInfo } from "./data/awardInfo";

const AppContext = React.createContext();

const initialState = {
  products: albumInfo,
  awds: awardInfo,
  cart: [],
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id) => {
    dispatch({ type: "ADD", payload: id });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART", payload: albumInfo });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{ ...state, addToCart, remove, increase, decrease, clearCart }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
