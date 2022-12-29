import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { todos } from "./reducers";

const reducers = {todos};
const middleware = [thunk];

const rootReducer = combineReducers(reducers);

const configStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default configStore;