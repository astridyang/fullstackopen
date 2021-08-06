// creatStore创建store对象
import { createStore, applyMiddleware } from "redux";
// redux开发者工具
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk"; // 用于支持异步action
// 引入汇总之后的reducer
import reducer from "./reducers";
export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
