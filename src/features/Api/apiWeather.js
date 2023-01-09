import axios from 'axios'


const Api = (city, setCurrentWeather) => {
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=451d44e21514b9fea75f7b82d8229879`)
    .then((response) => {
        const {data} = response;
        const search = data.pop();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${search.lat}&lon=${search.lon}&appid=451d44e21514b9fea75f7b82d8229879`)
        .then (response => setCurrentWeather(response));
    })
}

export default Api

