import { CREATE } from "../constants/actionTypes";
import * as api from "../../api";

export const createTicket = (ticketData) => async (dispatch) => {
  try {
    const { data } = await api.createTicket(ticketData);
    console.log(`data from DB: ${data}`);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
