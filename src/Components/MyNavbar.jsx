import Navbar from "react-bootstrap/Navbar";
import LogoMeteo from "../Assets/LogoMeteo.png";
import { Row } from "react-bootstrap";
import MyDate from "./MyDate";
import { Nav } from "react-bootstrap";



const MyNavbar = () => {

  return (
   <Row className="mx-0">
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="justify-content-between align-items-center px-4"
      >
          <Navbar.Brand className="d-flex text-center align-items-center ">
            <div>
            <img src={LogoMeteo} alt="Logo" height={"50px"} />
            </div>
            <div>
            <span className="ps-1 fs-2 fw-bold ">WeatherApp</span>
            </div>
            
          </Navbar.Brand>
         <Nav className="text-white fs-4">
              <MyDate className='ps-auto mb-0'/>
            </Nav>
      </Navbar> 
      
      </Row>
  );
};

export default MyNavbar;
