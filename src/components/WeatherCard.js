import { Col, Typography, Statistic, Row } from "antd";
import PropTypes from "prop-types";
import "./weather-card.css";
const { Title } = Typography;
const WeatherCard = ({
  temp,
  humidity,
  speed,
  pressure,
  description,
  icon,
  day,
  name,
}) => {
  let spanLength = day ? Math.floor((24 - 8) / 4) : Math.floor((24 - 8) / 3);
  return (
    temp && (
      <Row
        grid={8}
        className="card"
        style={{
          textAlign: "center",
          backgroundColor: "rgb(255, 172, 80, 0.5)",
          /* margin:'10px 0px 10px 0px' */ borderRadius: "10px",
        }}
      >
        {!day && <Col span={1}></Col>}
        <Col span={7}>
          <Col span={24} style={{ textAlign: "center" }}>
            <Title level={3} style={{ alignSelf: "center" }}>
              {description}
            </Title>
          </Col>
          <Row gutter={8}>
            <Col span={12}>
              <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="logo"
                width={100}
              />
            </Col>
            <Col span={12}>
              <Row>
                <Col span={24} style={{ margin: "5px 0 0 0" }}>
                  <div style={{ display: "flex" }}>
                    <p style={{ fontSize: "2em", margin: "0" }}>{`${temp}`}</p>
                    <p
                      style={{
                        fontSize: "1.5em",
                        margin: "0 0 2px 2px",
                        alignSelf: "flex-end",
                      }}
                    >
                      c°
                    </p>
                  </div>
                </Col>
                {name && (
                  <Col span={24}>
                    <p
                      style={{
                        fontSize: "1em",
                        textAlign: "start",
                        margin: "0",
                      }}
                    >{`${name}`}</p>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={spanLength} style={{ textAlign: "center" }}>
          <Title level={3}>Humidity</Title>
          <Statistic title="now" value={humidity} precision={2} />
        </Col>
        <Col span={5} style={{ textAlign: "center" }}>
          <Title level={3}>Wind Speed</Title>
          <Statistic title="km/h" value={speed} precision={2} />
        </Col>
        <Col span={spanLength} style={{ textAlign: "center" }}>
          <Title level={3}>Pressure</Title>
          <Statistic title="pas" value={pressure} precision={2} />
        </Col>
        {day && (
          <Col span={spanLength} style={{ textAlign: "center" }}>
            <Title level={3}>Date</Title>
            <Statistic title="date" value={day} precision={2} />
          </Col>
        )}
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
  name: PropTypes.string,
};
