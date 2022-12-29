import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
} from "../constants";

const initialState = { data: [], isLoading: false };

export const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO:
    default:
      return state;
  }
};
