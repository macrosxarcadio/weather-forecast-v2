import api from "./apiConfig";

const getCurrentWeather = ({ lat, lon }) =>
  api.get(`/data/2.5/weather?`, {
    params: { lat: lat, lon: lon },
  });

export default getCurrentWeather;
