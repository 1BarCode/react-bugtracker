import { getTickets } from "../../api";
import {
  CREATE,
  FETCH_ALL,
  FETCH_ONE_PROJECT,
  // UPDATE_PROJECT,
} from "../constants/actionTypes";

const projectReducer = (projects = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...projects, action.payload];

    case FETCH_ONE_PROJECT:
      return projects.map((project) =>
        project._id === action.payload._id ? action.payload : project
      );

    default:
      return projects;
  }
};

export default projectReducer;
