import { createStore, applyMiddleware } from "redux";
import countReducer from "./countReducer";
import thunk from "redux-thunk"; // 创建异步action
export default createStore(countReducer, applyMiddleware(thunk));
