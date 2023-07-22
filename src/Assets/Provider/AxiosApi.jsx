import axios from "axios";

const baseURL = process.env.REACT_APP_API;

const API = axios.create({ baseURL });

export default API;
