import { Col, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./home.css";
import { Link } from "react-router-dom";
import sun from "../../assets/sun.png";
import macross from "../../assets/macross.png";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from '@faker-js/faker'
import { useSelector } from "react-redux";
const Home = () => {

  const newWeather = useSelector((state) => state.forecast.value);

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    },
    title: {
      display: true,
      text: 'Temp weather',
    }
  }

/*   const labels = ['lunes', 'martes', 'jueves']; */

  const data = {
    labels:newWeather.map((wheather)=> wheather.dt_txt.split(' ').shift()),
    datasets: [
      {
        label: 'dataset 1',
        data: newWeather.map((wheather)=>wheather.main.temp),
        borderColor: 'rgb(255,99,132,0.5)',
        backgroundColor: 'rgb(53,162,235,0.5)'
      }
    ]
  }

  return (
    <>
      <Col span={8}></Col>
      <Col span={8} className="title" style={{ padding: "0 0 0 0" }}>
        <h1 style={{ paddingBottom: "1em" }}>Know your weather</h1>
        <Link to={"/search"}>
          {" "}
          <Button icon={<SearchOutlined />} href="https://www.google.com">
            {" "}
            Search{" "}
          </Button>{" "}
        </Link>
      </Col>
      <Col span={8}></Col>
      <Col span={5}></Col>
      <Col span={14} style={{ justifyContent: "center", display: "flex" }}>
        <img
          src={sun}
          alt="logo"
          width={350}
          style={{ alignSelf: "center" }}
          onClick={(event) => event.preventDefault()}
        />
      </Col>
      <Col span={5}></Col>
      <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
        <a
          className="contact"
          href="https://github.com/macrosxarcadio"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "inherit",
          }}
        >
          <img
            src={macross}
            id="macross"
            alt="log2"
            width={40}
            style={{ alignSelf: "center", borderRadius: "50%" }}
          />
          MacrossArcadio
        </a>
      </Col>
      <Col span={24} >
        <Line options={options} data={data} />
      </Col>
    </>
  );
};

export default Home;
