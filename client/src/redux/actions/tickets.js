import {
  CREATE,
  FETCH_ALL,
  UPDATE_POST,
  FETCH_ONE_TICKET,
} from "../constants/actionTypes";
import * as api from "../../api";

export const getTickets = () => async (dispatch) => {
  try {
    const { data } = await api.getTickets();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getOneTicket = (ticketId) => async (dispatch) => {
  try {
    const { data } = await api.getOneTicket(ticketId);
    dispatch({ type: FETCH_ONE_TICKET, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTicket = (ticketData) => async (dispatch) => {
  try {
    const { data } = await api.createTicket(ticketData);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTicket = (ticketId, ticketData) => async (dispatch) => {
  try {
    const { data } = await api.updateTicket(ticketId, ticketData);

    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
