import {
  CREATE,
  FETCH_ALL,
  // UPDATE_POST,
  FETCH_ONE_PROJECT,
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

export const getOneProject = (projectId) => async (dispatch) => {
  try {
    const { data } = await api.getOneProject(projectId);
    console.log(data);
    dispatch({ type: FETCH_ONE_PROJECT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createProject = (projectData) => async (dispatch) => {
  try {
    const { data } = await api.createProject(projectData);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
