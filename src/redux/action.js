import { CREATE_TODO } from "../constants";

export const createTodo = (todo) => ({
  type: CREATE_TODO,
  payload: todo
});
