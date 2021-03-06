import {
  CREATE,
  FETCH_ALL,
  FETCH_ONE_TICKET,
  FETCH_MY_TICKET,
  UPDATE_TICKET,
} from "../constants/actionTypes";

const ticketReducer = (tickets = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case FETCH_ONE_TICKET:
      return tickets.map((ticket) =>
        ticket._id === action.payload._id ? action.payload : ticket
      );

    case FETCH_MY_TICKET:
      return action.payload;

    case CREATE:
      return [...tickets, action.payload];

    case UPDATE_TICKET:
      return tickets.map((ticket) =>
        ticket._id === action.payload._id ? action.payload : ticket
      );

    default:
      return tickets;
  }
};

export default ticketReducer;
