import axios from "axios";
import { API_BASE } from "../../config";

export const FETCH_ORDER = "FETCH_ORDER";

export function fetchOrder() {
  return async (dispatch) => {
    const { data } = await axios.get(`${API_BASE}/orders`);
    dispatch({
      type: FETCH_ORDER,
      payload: data
    });
  }
}
