import { SearchOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import WeatherCard from "../../components/WeatherCard";
import useFetchWeather from "../../utils/hooks/useFetchWeather.js";
import { Button, Col, Input, Row, Form } from "antd";
import { useState } from "react";

const Search = () => {
  const [location, setLocation] = useState(null);
  const newWeather = useSelector((state) => state.weather.value);

  useFetchWeather(location ? location : "");

  const onFinish = (locationData) => {
    setLocation(locationData);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Col span={4}></Col>
      <Col span={16} gutter={[8, 48]}>
        <Input.Group size="large">
          <Form
            name="location"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row gutter={8}>
              <Col span={6}>
                <Form.Item name="city">
                  <Input placeholder="city" />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item name="zip">
                  <Input placeholder="zip code" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="lat">
                  <Input placeholder="latitud" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="lon">
                  <Input placeholder="longitud" />
                </Form.Item>
              </Col>
              <Col span={2} justify="center">
                <Button htmlType="submit">
                  {" "}
                  <SearchOutlined
                    style={{ fontSize: "24px", padding: "0px" }}
                  />
                </Button>
              </Col>
            </Row>
          </Form>
        </Input.Group>
      </Col>
      <Col span={4}></Col>
      <Col span={4}></Col>
      <Col span={16}>
        {newWeather?.main && newWeather?.name && (
          <WeatherCard
            {...newWeather?.main}
            {...newWeather?.wind}
            {...newWeather?.weather[0]}
            {...newWeather?.name}
            name={newWeather.name}
          />
        )}
      </Col>
      <Col span={4}></Col>
    </>
  );
};

export default Search;
