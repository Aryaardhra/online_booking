import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://online-booking-server.onrender.com/api"
})