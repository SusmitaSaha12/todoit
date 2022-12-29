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
        const {todo} = payload;
        return {
            ...state,
            newone: "newone",
            data: state.data.push(todo)
        }
    default:
      return state;
  }
};
