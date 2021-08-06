const initState = [{ id: "001", name: "tom", age: 18 }];
export default function personReducer(state = initState, action) {
  let { type, data } = action;
  switch (type) {
    case "add_person":
      return [data, ...state];
    default:
      return state;
  }
}
/*
  reducer必须为纯函数
  纯函数：同样的输入得到同样的输出
  1）不得改写参数
  2）不会产生任何副作用，例如网络请求，输入和输出设备
  3）不得调用Date.now, Math.random()等不纯方法
*/