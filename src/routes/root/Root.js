import { Col, Row, Menu } from "antd";
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";

const Root = () => {
  const newWeather = useSelector((state) => state.weather.value);
  const [forecastState, setForecastState] = useState(true);
  useEffect(
    () => (newWeather ? setForecastState(false) : setForecastState(true)),
    [newWeather]
  );
  useEffect(() => {
    console.log("redirect");
    redirect("/home");
  }, []);
  const items = [
    {
      label: <Link to={"/home"}> Home </Link>,
      key: "home",
    },
    {
      label: <Link to={"/search"}> Search </Link>,
      key: "search",
    },
    {
      label: (
        <Link
          to={"/forecast"}
          onClick={(event) => (forecastState ? event.preventDefault() : event)}
        >
          {" "}
          Forecast{" "}
        </Link>
      ),
      key: "forecast",
      disabled: forecastState,
    },
  ];

  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => setCurrent);
  return (
    <Row>
      <Col span={24}>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Row>
              <Col span={8}></Col>
              <Col
                span={8}
                style={{ justifyContent: "center", display: "flex" }}
              >
                <Menu
                  onClick={onClick}
                  selectedKeys={[current]}
                  mode="horizontal"
                  items={items}
                  style={{
                    marginTop: "1em",
                    marginBottom: "2em",
                    justifyContent: "center",
                    minWidth: "20em",
                  }}
                />
              </Col>
              <Col span={8}></Col>
              <Outlet />
            </Row>
          </Col>
          <Col span={2}></Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Root;
