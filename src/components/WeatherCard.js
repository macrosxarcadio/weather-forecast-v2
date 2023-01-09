import { Col, Typography, Statistic, Row, Image} from 'antd'

const {Title} = Typography

const WeatherCard = ({temp,humidity,speed,pressure,description}) => {
    return (
        temp &&
            <Row gutter={5} >
            <Col span={7} style={{ textAlign: 'center' }}>
                <Title level={3} style={{ alignSelf: 'center' }}>{description}</Title>
                <Statistic value={`${temp-273}`} suffix='c°' precision={1} valueStyle={{ fontSize: '3em', alignSelf: 'center' }} prefix={<Image src='http://openweathermap.org/img/wn/10d@2x.png' alt='logo' width={100} />} />
            </Col>
            <Col span={5} style={{ textAlign: 'center' }}>
                <Title level={3} >Humidity</Title>
                <Statistic title="now" value={humidity} precision={2} />
            </Col>
            <Col span={5} style={{ textAlign: 'center' }}>
                <Title level={3} >Wind Speed</Title>
                <Statistic title="km/h" value={speed} precision={2} />
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
                <Title level={3} >Pressure</Title>
                <Statistic title="pas" value={pressure} precision={2} />
            </Col>
        </Row>
        )

    
}

export default WeatherCard