import axios from 'axios';
import { jwtDecode } from "jwt-decode"
import dayjs from "dayjs"

const token = localStorage.getItem('access')
  ? JSON.parse(localStorage.getItem('access'))
  : null;
const refresh_token = localStorage.getItem('refresh')
  ? JSON.parse(localStorage.getItem('refresh'))
  : null;

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
  'Content-type': 'application/json',
  headers: {Authorization: localStorage.getItem('access') ? `Bearer $[token]` : null },
});

api.interceptors.request.use( async req => {
  if (token) {
    req.headers.Authorization = `Bearer ${token}`
    const user = jwtDecode(token)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1
    console.log(isExpired)

    return req
  }
}
);

export default api;
