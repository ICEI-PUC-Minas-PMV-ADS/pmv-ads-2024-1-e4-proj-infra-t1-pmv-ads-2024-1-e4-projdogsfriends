import axios from "axios";
import { API_IP } from "../../env.api";

const url = `http://${API_IP}:3000/`;
export const api = axios.create({
    baseURL: url
})