import { Col, Row, Menu, Form } from 'antd'
import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react';


const Root = () => {

    const items = [
        {
            label: <Link to={'/home'}> Home </Link>,
            key: 'home',
        },
        {
            label: <Link to={'/search'}> Search </Link>,
            key: 'search'
        },
        {
            label: <Link to={'/forecast'}> Forecast </Link>,
            key: 'forecast'
        }
    ]

    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    }
    return (
        <Row>
            <Col span={24}>
                <Row >
                    <Col span={2}></Col>
                    <Col span={20} >
                        <Row >
                            <Col span={6}></Col>
                            <Col span={12} style={{justifyContent:'center', display:'flex',width:'10em'}}>
                                <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} style={{ marginTop: '1em', marginBottom: '2em' }} />
                            </Col>
                            <Col span={6}></Col>
                            <Outlet />
                        </Row>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Root