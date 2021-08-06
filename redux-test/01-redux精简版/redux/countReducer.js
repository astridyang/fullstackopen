const initState = 0;
export default function countReducer(state = initState, action) {
  // console.log(state, action)
  let { type, data } = action;
  switch (type) {
    case "increment":
      return state + data;
    case "decrement":
      return state - data;
    default:
      return state;
  }
}
