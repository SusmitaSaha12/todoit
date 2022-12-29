import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {};
const middleware = [thunk];

const rootReducer = combineReducers(reducers);

const configStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default configStore;