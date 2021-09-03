import axios from "axios";

const deployedURL = "https://zen-hive.herokuapp.com/";
const API = axios.create({ baseURL: deployedURL });

// const devURL = "http://localhost:5001";
// const API = axios.create({ baseURL: devURL });

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

// Auth

export const signIn = (formData) => API.post("/user/signin", formData);

export const signUp = (formData) => API.post("/user/signup", formData);

// Tickets

export const getTickets = () => API.get("/tickets");

export const getOneTicket = (ticketId) => API.get(`/tickets/${ticketId}`);

export const getMyTickets = () => API.get("/tickets/mytickets");

export const createTicket = (ticketData) => API.post("/tickets", ticketData);

export const updateTicket = (ticketId, ticketData) =>
  API.patch(`/tickets/${ticketId}`, ticketData);

// Projects

export const getProjects = () => API.get("/projects");

export const getOneProject = (projectId) => API.get(`/projects/${projectId}`);

export const createProject = (projectData) =>
  API.post("/projects", projectData);

export const updateProject = (projectId, projectData) =>
  API.patch(`/projects/${projectId}`, projectData);
