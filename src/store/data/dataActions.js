import { ADD_DATA } from "./dataTypes";

export const addSkill = newData => ({
  type: ADD_DATA,
  payload: newData
});
