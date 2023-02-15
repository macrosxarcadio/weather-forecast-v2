import { Col, Button} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./home.css";
import { Link } from "react-router-dom";
import sun from "../../assets/sun.png";
import macross from '../../assets/macross.png'

const Home = () => {
  return (
    <>
      <Col span={8}></Col>
      <Col span={8} className="title" style={{padding:'0 0 0 0'}}>
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
      <Col span={5}>
      </Col>
      <Col span={24} style={{display:'flex', justifyContent:'center'}} >
        <a className='contact' href='https://github.com/macrosxarcadio' style={{display:'flex', justifyContent:'center', alignItems:'center', color:"inherit"}}>
        <img src={macross} id='macross'alt='log2' width={40} style={{alignSelf:'center', borderRadius:'50%'}} />
        MacrossArcadio
        </a>
      </Col>
    </>
  );
};

export default Home;
