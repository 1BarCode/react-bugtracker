import axios from "axios";

// const deployedURL = "";

const devURL = "http://localhost:5001";

const API = axios.create({ baseURL: devURL });

export const signIn = (formData) => API.post("/user/signin", formData);

export const signUp = (formData) => API.post("/user/signup", formData);
