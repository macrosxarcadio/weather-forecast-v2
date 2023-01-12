import { useSelector } from 'react-redux'
import WeatherCard from "../../components/WeatherCard";
import { Col } from 'antd'
const Forecast = () => {
    const forecast = useSelector((state) => state.forecast.value);
    console.log(forecast);
    return (
        <>
            <Col span={4}></Col>
            <Col span={16}>
            {forecast && forecast.map((today) =>  
            <WeatherCard  {...today?.main} {...today?.wind} description={today.weather[0].description}  key />)}
            </Col>
            <Col span={4}></Col>
        </>

    )
}

export default Forecast