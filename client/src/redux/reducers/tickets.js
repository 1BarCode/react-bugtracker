import { CREATE, FETCH_ALL } from "../constants/actionTypes";

const ticketReducer = (tickets = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...tickets, action.payload];
    default:
      return tickets;
  }
};

export default ticketReducer;
