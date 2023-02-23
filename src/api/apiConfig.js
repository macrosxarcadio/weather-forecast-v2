import axios from "axios";

// eslint-disable-next-line
const key = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: "https://api.openweathermap.org",
  params: { appid: `${key}` },
});

export default api;
