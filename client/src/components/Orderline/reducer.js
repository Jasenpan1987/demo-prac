import { FETCH_ORDERLINE } from "./actions";

export function orderlineReducer(state = [], action) {
  if (action.type === FETCH_ORDERLINE) {
    return action.payload;
  }

  return state;
}
