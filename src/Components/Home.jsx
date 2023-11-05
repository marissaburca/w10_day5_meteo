import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";


import { useState } from "react";
import { Row } from "react-bootstrap";
import Convert from "./Convert";

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="flex-grow-1 p-5 mx-auto text-center ">
    <div 
    className="center mx-auto"
    style={{height: '99%', width: '80%'}}> 
    <Row className="mx-0 ">
      <h2 
      className="fw-bold fs-1 text-center py-5 mb-3 text-white  "
      style={{ height: "50px" }}
      >
       LOOK UP THE FORECAST IN A CITY
      </h2>
      <InputGroup
        className="mb-3 mx-auto mt-2 "
        style={{ width: "85%", height: "50px" }}
      >
        <Form.Control
          className="fs-4 text-center"
          type="text"
          placeholder="Enter name or contry code.."
          aria-label="Enter name or contry code"
          value={inputValue}
          onChange={handleInputChange}
        />
      </InputGroup>
        { inputValue &&
         <Row className='mx-0 '>
             <Convert city={inputValue} />
        </Row>
        }
    </Row>
    
    </div>
    </div>
  );
};

export default Home;
