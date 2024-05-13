import axios from "axios";

export const api = axios.create({
    baseURL: `http://${process.env.API_IP}:3000/`
})