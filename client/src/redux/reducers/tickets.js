import {
  CREATE,
  FETCH_ALL,
  UPDATE_POST,
  FETCH_ONE_TICKET,
} from "../constants/actionTypes";

const ticketReducer = (tickets = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case FETCH_ONE_TICKET:
      return tickets.map((ticket) =>
        ticket._id === action.payload._id ? action.payload : ticket
      );

    case CREATE:
      return [...tickets, action.payload];

    case UPDATE_POST:
      return tickets.map((ticket) =>
        ticket._id === action.payload._id ? action.payload : ticket
      );

    default:
      return tickets;
  }
};

export default ticketReducer;
