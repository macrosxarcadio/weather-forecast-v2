import axios from 'axios'

console.log(process.env.REACT_APP_APY_KEY);
console.log(process.env.NODE_ENV);
const Api = (city, setCurrentWeather, setForecast, lat, lon) => {
    const getGeolocation = axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`);

    getGeolocation.then((res) => {

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.data[0].lat}&lon=${res.data[0].lon}&appid=${key}`)
            .then(res => setCurrentWeather(res));
    })

    getGeolocation.then((res) => {

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${res.data[0].lat}&lon=${res.data[0].lon}&appid=${key}`)
            .then(res => res.data.list.reduce((acc, actual, index) => index % 3 === 0 ? [...acc, actual] : acc, [{}]))
            .then(res => {
                let data = res;
                data.shift();
                console.log("forecast", data);
                setForecast(data);
            })
    });

    getGeolocation.catch((error) => {
        console.error('onRejected function called: ', `${error.message}`)
    })
}

export default Api

