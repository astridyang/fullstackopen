import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./reducers/count";
import personReducer from './reducers/person'
import thunk from "redux-thunk"; // 创建异步action
const allReducer = combineReducers({
  count: countReducer,
  persons: personReducer
})
export default createStore(allReducer, applyMiddleware(thunk));
