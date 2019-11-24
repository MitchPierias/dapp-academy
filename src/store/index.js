import React, { createContext, useContext, useReducer } from "react";
import dataReducer from "./data/dataReducer";

const initialState = {};

const StoreContext = createContext(initialState);

export const useStore = () => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};

export const useDispatch = () => {
  const { dispatch } = useContext(StoreContext);
  return { dispatch };
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, []);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
