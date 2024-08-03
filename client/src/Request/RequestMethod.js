import axios from "axios";
import { useSelector } from "react-redux";

const BASE_URL = 'http://localhost:5000/';
const Token = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userDetails).userInfo[0] ?
JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userDetails).userInfo[0].token : null
console.log('final token',Token);

export const publicRequest = axios.create({
    baseURL:BASE_URL,
})
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token : `Beares ${Token}`}
})