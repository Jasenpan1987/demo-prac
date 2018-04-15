import { FETCH_ORDER } from "./actions";

const initState = {
  orderId: null,
  basketId: null,
  dateTime: null,
  customerId: null,
  organisationCustomerId: null,
  seller: null,
  productId: null,
  productType: null
};

export function orderReducer(state = initState, action) {
  if (action.type === FETCH_ORDER) {
    console.log(action);
    return {
      ...state,
      ...action.payload
    }
  }
  return state;
}
