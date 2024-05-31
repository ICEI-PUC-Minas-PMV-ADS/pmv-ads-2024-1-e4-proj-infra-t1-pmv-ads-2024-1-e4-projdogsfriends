import axios from "axios";
const url = `http://${process.env.API_IP}:3000/`;
export const api = axios.create({
    baseURL: url
})