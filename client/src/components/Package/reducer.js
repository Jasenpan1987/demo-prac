import { FETCH_PACKAGE } from "./actions";

export function packageReducer(state = [], action) {
  if (action.type === FETCH_PACKAGE) {
    return action.payload;
  }

  return state;
}
