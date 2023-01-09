import React, { useEffect, useState } from "react"
import { SearchOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { setNewWeather } from '../../features/weather/weatherSlice'
import { setNewLocation } from '../../features/weather/LocationSlice'
import { setNewForecast } from "../../features/weather/forecastSlice"
import Api from '../../features/Api/apiWeather'
import WeatherCard from "../../components/WeatherCard"

import {
    Button,
    Col,
    Input,
    Row,
    Form,
} from 'antd';


const Search = () => {
    const [currentWeather, setCurrentWeather] = useState();
    const [forecast, setForecast] = useState();
    const location = useSelector((state) => state.location.value);
    const newWeather = useSelector((state) => state.weather.value);
    
    const dispatch = useDispatch();

    const onFinish = (locationData) => {
        console.log('Success:', locationData);
        dispatch(setNewLocation({ locationData }));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        location && Api(
            location.locationData.city ? 
            location.locationData.city : 
            location.locationData.zip,
            setCurrentWeather,
            setForecast);
    }, [location]);

    useEffect(() => {
        dispatch(setNewWeather(currentWeather?.data));
        
    }, [currentWeather]);

    useEffect(() => {
        dispatch(setNewForecast(forecast));
    }, [forecast]);

    return (
            <>
            <Col span={4}></Col>
            <Col span={16} gutter={[8, 48]} >
                <Input.Group size="large">
                    <Form
                        name='location'
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Row gutter={8}>
                            <Col span={6}>
                                <Form.Item
                                    name="city">
                                    <Input placeholder="city" />
                                </Form.Item>

                            </Col>
                            <Col span={4}>
                                <Form.Item
                                    name="zip">
                                    <Input placeholder="zip code" />
                                </Form.Item>

                            </Col>
                            <Col span={6}>
                                <Form.Item

                                    name="latitud">
                                    <Input placeholder="latitud" />
                                </Form.Item>

                            </Col>
                            <Col span={6}>
                                <Form.Item

                                    name="longitud">
                                    <Input placeholder="longitud" />
                                </Form.Item>
                            </Col>
                            <Col span={2} justify='center'>
                                <Button htmlType="submit"> <SearchOutlined style={{ fontSize: '24px', padding: '0px' }} /></Button>
                            </Col>
                        </Row>
                    </Form>
                </Input.Group>
            </Col>
            <Col span={4}></Col>
            <Col span={4}></Col>
            <Col span={16}>
               {newWeather?.main && <WeatherCard  {...newWeather?.main} {...newWeather?.wind} {...newWeather?.weather[0]} /> }
            </Col>
            <Col span={4}></Col>
            </>
    )
}

export default Search