import axios from "axios";


const BASE_URL = "https://dummyjson.com/"


export const requester = axios.create({
    baseURL: BASE_URL
})