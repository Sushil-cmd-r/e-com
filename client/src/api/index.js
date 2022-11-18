import axios from "axios";

const url = "http://localhost:5000/api/v1";

const getAll = () => axios.get(`${url}/product/`)
const getCreated = () => axios.get(`${url}/product/created`)
const getBought = () => axios.get(`${url}/product/bought`)
const create = (data) => axios.post(`${url}/product/`, data, { withCredentials: true })

// auth api calls
const signup = (user) => axios.post(`${url}/auth/signup`, user, { withCredentials: true });
const login = (user) => axios.post(`${url}/auth/login`, user, { withCredentials: true });
const logout = () => axios.get(`${url}/auth/logout`, { withCredentials: true });



export { login, signup, logout, getAll, getCreated, getBought, create }