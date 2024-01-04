import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./reducers";

const rootReducer = combineReducers({
  data: reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
