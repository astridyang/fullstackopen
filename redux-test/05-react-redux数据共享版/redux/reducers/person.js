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
