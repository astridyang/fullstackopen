import { INCREMENT, DECREMENT } from "./constant";
export const countIncrementAction = (data) => ({ type: INCREMENT, data });
export const countDecrementAction = (data) => ({ type: DECREMENT, data });
