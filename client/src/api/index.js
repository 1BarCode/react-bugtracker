import axios from "axios";

// const deployedURL = "";

const devURL = "http://localhost:5001";

const API = axios.create({ baseURL: devURL });

// interceptor happen before all request below to send token to backend middleware
// to verify if user is logged in

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/user/signin", formData);

export const signUp = (formData) => API.post("/user/signup", formData);

export const getTickets = () => API.get("/tickets");

export const getOneTicket = (ticketId) => API.get(`/tickets/${ticketId}`);

export const createTicket = (ticketData) => API.post("/tickets", ticketData);

export const updateTicket = (ticketId, ticketData) =>
  API.patch(`/tickets/${ticketId}`, ticketData);
