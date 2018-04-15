import { combineReducers } from "redux";

import { orderReducer } from "../components/Order";
import { orderlineReducer } from "../components/Orderline";
import { packageReducer } from "../components/Package";

export const rootReducer = combineReducers({
  order: orderReducer,
  orderline: orderlineReducer,
  package: packageReducer
});
