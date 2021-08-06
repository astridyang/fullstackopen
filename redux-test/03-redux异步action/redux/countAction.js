import { INCREMENT, DECREMENT } from "./constant";
export const countIncrementAction = (data) => ({ type: INCREMENT, data });
export const countDecrementAction = (data) => ({ type: DECREMENT, data });
export const countIncrementAsyncAction = (data, time) =>{
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch(countIncrementAction(data))
    }, time)
  }
}