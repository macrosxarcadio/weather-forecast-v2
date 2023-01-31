import { Col, Button, /* Image */ } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./home.css";
import { Link } from "react-router-dom";
import sun from "../../assets/sun.png";

const Home = () => {
  return (
    <>
      <Col span={8}></Col>
      <Col span={8} className="title">
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
          width={400}
          style={{ alignSelf: "center" }}
          onClick={(event) => event.preventDefault()}
        />
      </Col>
      <Col span={5}></Col>
    </>
  );
};

export default Home;
