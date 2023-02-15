import api from "./apiConfig"

const getForecast = ({lat,lon}) => api.get(
    `/data/2.5/forecast`,
    {
      params: { lat: `${lat}`, lon: `${lon}` },
    }
  )

  export default getForecast
