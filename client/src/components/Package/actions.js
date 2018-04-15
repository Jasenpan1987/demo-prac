import axios from "axios";
import { API_BASE } from "../../config";

export const FETCH_PACKAGE = "FETCH_PACKAGE";

export function fetchPackage() {
  return async (dispatch) => {
    const { data } = await axios.get(`${API_BASE}/package`);
    dispatch({
      type: FETCH_PACKAGE,
      payload: data
    });
  }
}
