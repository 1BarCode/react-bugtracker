import {
  CREATE,
  FETCH_ALL,
  // UPDATE_POST,
  // FETCH_ONE_TICKET,
} from "../constants/actionTypes";
import * as api from "../../api";

export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await api.getProjects();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// export const getOneTicket = (ticketId) => async (dispatch) => {
//     try {
//       const { data } = await api.getOneTicket(ticketId);
//       dispatch({ type: FETCH_ONE_TICKET, payload: data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

export const createProject = (projectData) => async (dispatch) => {
  try {
    const { data } = await api.createProject(projectData);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
