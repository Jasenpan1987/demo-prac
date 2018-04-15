import axios from "axios";
import { API_BASE } from "../../config";

export const FETCH_ORDERLINE = "FETCH_ORDERLINE";

export function fetchOrderline() {
  return async (dispatch) => {
    const { data } = await axios.get(`${API_BASE}/orderline`);
    dispatch({
      type: FETCH_ORDERLINE,
      payload: data
    });
  }
}