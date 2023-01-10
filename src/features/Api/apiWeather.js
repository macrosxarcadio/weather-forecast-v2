import axios from 'axios'
const key = process.env.REACT_APP_API_KEY

const apiReq = () => {

    const getGeolocation = (city) => axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`);

    const getCurrentWeather = (city, setCurrentWeather, lat, lon) => {
        !(lat && lon) ?
            getGeolocation(city).then((res) =>
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.data[0].lat}&lon=${res.data[0].lon}&appid=${key}`)
                    .then(res => setCurrentWeather(res)))
            :
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
                .then(res => setCurrentWeather(res))
    }

    const getForecast = (city, setForecast, lat, lon) => {
        !(lat && lon) ?
            getGeolocation(city).then((res) => axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${res.data[0].lat}&lon=${res.data[0].lon}&appid=${key}`))
                .then(res => res.data.list.reduce((acc, actual, index) => index % 3 === 0 ? [...acc, actual] : acc, [{}]))
                .then(res => {
                    let data = res;
                    data.shift();
                    setForecast(data);
                })
            :
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`)
                .then(res => res.data.list.reduce((acc, actual, index) => index % 3 === 0 ? [...acc, actual] : acc, [{}]))
                .then(res => {
                    let data = res;
                    data.shift();
                    setForecast(data);
                })
    }
    return [getCurrentWeather, getForecast]
}

export default apiReq

