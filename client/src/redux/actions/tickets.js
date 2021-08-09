import { CREATE, FETCH_ALL } from "../constants/actionTypes";
import * as api from "../../api";

export const getTickets = () => async (dispatch) => {
  try {
    const { data } = await api.getTickets();
    console.log(`tickets fetched: ${data}`);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTicket = (ticketData) => async (dispatch) => {
  try {
    const { data } = await api.createTicket(ticketData);
    console.log(`data from DB: ${data}`);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
