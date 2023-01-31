import { useSelector } from "react-redux";
import WeatherCard from "../../components/WeatherCard";
import { Col } from "antd";
import moment from "moment";
const Forecast = () => {
  const forecast = useSelector((state) => state.forecast.value);
  return (
    <>
      <Col span={4}></Col>
      <Col span={16} style={{maxHeight: '80vh', maxWidth:'100%',  overflowY:'scroll', overflowX:'hidden' }}>
        {forecast &&
          forecast.map((today,index) => (
            <WeatherCard
              {...today?.main}
              {...today?.wind}
              description={today.weather[0].description}
              icon={today.weather[0].icon}
              key={index}
              day={moment(today.dt_txt).format('DD[/]MM')}
            />
          ))}
      </Col>
      <Col span={4}></Col>
    </>
  );
};

export default Forecast;
