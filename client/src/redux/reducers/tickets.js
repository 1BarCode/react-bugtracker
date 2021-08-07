import { CREATE } from "../constants/actionTypes";

export default (tickets = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...tickets, action.payload];
    default:
      return tickets;
  }
};
