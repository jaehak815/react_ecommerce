import axios from "axios";

const BASE_URL = "http://192.168.1.101:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmExMDkwZDFhMjY1ZjU4M2JkNzhjNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTE4Mzg1NSwiZXhwIjoxNjg1NDQzMDU1fQ.Z6BGzbLmjwmgbdvVRzEwF5K5O4V9WWmaq2vUcbtu0Wc";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});