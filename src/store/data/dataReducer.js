import { ADD_DATA } from "./dataTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, [action.payload.id]: action.payload.name };
    default:
      throw new Error(`Unknown action type '${action.type}'`);
  }
};
