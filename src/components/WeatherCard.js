import { Col, Typography, Statistic, Row, Image } from "antd";
import PropTypes from "prop-types";
const { Title } = Typography;
const WeatherCard = ({ temp, humidity, speed, pressure, description, icon, day}) => {
  return (
    temp && (
      <Row gutter={5} style={{backgroundColor:'rgb(255, 172, 80, 0.5)', margin:'10px 0px 10px 0px', borderRadius:'10px'}} >
        <Col span={7} style={{ textAlign: "center"}} >
          <Title level={3} style={{ alignSelf: "center" }}>
            {description}
          </Title>
          <Statistic
            value={`${temp - 273}`}
            suffix="c°"
            precision={1}
            valueStyle={{ fontSize: "3em", alignSelf: "center" }}
            prefix={
              <Image
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="logo"
                width={100}
              />
            }
          />
        </Col>
        <Col span={4} style={{ textAlign: "center" }}>
          <Title level={3}>Humidity</Title>
          <Statistic title="now" value={humidity} precision={2} />
        </Col>
        <Col span={4} style={{ textAlign: "center" }}>
          <Title level={3}>Wind Speed</Title>
          <Statistic title="km/h" value={speed} precision={2} />
        </Col>
        <Col span={4} style={{ textAlign: "center" }}>
          <Title level={3}>Pressure</Title>
          <Statistic title="pas" value={pressure} precision={2} />
        </Col>
        {day &&<Col span={4} style={{ textAlign: "center" }}>
          <Title level={3}>Date</Title>
          <Statistic title="date" value={day} precision={2} />
        </Col>}
      </Row>
    )
  );
};

export default WeatherCard;

WeatherCard.propTypes = {
  description: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propNumber: PropTypes.number,
  temp: PropTypes.number,
  humidity: PropTypes.number,
  speed: PropTypes.number,
  pressure: PropTypes.number,
  icon: PropTypes.string,
  day: PropTypes.object,
};
