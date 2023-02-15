import getForecast from "../../api/apiForecast";
import getCurrentWeather from "../../api/apiWeather";
import getGeolocation from "../../api/apiGeolocation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setNewLocation } from "../../features/weather/LocationSlice";
import { setNewWeather } from "../../features/weather/weatherSlice";
import filterMeasurementsByDate from "../libs/filterMeasurementsByDate";
import { setNewForecast } from "../../features/weather/forecastSlice";
const useFetchWeather = (location) => {
  const newLocation = useSelector((state) => state.location.value);
  const { city, zip, lat, lon } = location;
  const [place, setPlace] = useState();

  const dispatch = useDispatch();

  useEffect(() => (city || zip) && setPlace(city ? city : zip), [location]);

  //fetch the lon and lat of the city or zip and dispatch to the store
  useEffect(() => {
    let ignore = false;
    getGeolocation(place).then((res) => {
      if (!ignore) {
        let { country, name, lat, lon } = res.data[0];
        dispatch(setNewLocation({ country, name, lat, lon }));
      }
    });
    return () => {
      ignore = true;
    };
  }, [place]);

  // fetch the weather of the day and dispatch to store
  useEffect(() => {
    if (newLocation) {
      const { lat, lon } = newLocation;
      getCurrentWeather({ lat, lon }).then((res) =>
        dispatch(setNewWeather(res.data))
      );
    }
    if (lat && lon) {
      getCurrentWeather({ lat, lon }).then((res) =>
        dispatch(setNewWeather(res.data))
      );
    }
  }, [newLocation, lat, lon]);

  //fetch the forecast and dispatch to the store
  useEffect(() => {
    if (newLocation) {
      const { lat, lon } = newLocation;
      getForecast({ lat, lon }).then((res) =>
        dispatch(setNewForecast(filterMeasurementsByDate(res.data)))
      );
    }
    if (lat && lon) {
      getForecast({ lat, lon }).then((res) =>
        dispatch(setNewForecast(filterMeasurementsByDate(res.data)))
      );
    }
  }, [newLocation]);
};

export default useFetchWeather;
