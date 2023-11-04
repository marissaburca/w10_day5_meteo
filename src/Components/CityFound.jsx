import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { BiErrorAlt } from "react-icons/bi";
import { Spinner, Alert } from "react-bootstrap";
import WeatherIcon from "./WeatherIcon";
import {BsThermometerLow, BsThermometerHigh} from 'react-icons/bs'
import {RiWindyFill} from 'react-icons/ri'

const CityFound = (props) => {
  const country = props.country;
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getCityData();
  }, [props.lat, props.lon]);

  const getCityData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=${props.mykey}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella ricezione dei dati");
        }
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  const kelvinInCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  return (
    <Row className="text-center mx-0">
      {isLoading && (
        <div className="text-center my-2">
          <Spinner animation="border" variant="info" />
        </div>
      )}
      {isError && (
        <div className="text-center my-2 ">
          <Alert
            className="mx-auto px-1 fs-3 fw-bold text-light border-danger bg-danger"
            style={{ width: "90%" }}
          >
            It seems that an error has occurred <br />
            <BiErrorAlt className="fs-1" />
          </Alert>
        </div>
      )}

      {!isError && !isLoading && weatherData && (
        <div className="mt-5 text-white">
          <div className="display-5">
            <span>{weatherData.name}, </span>
            <span>{country}</span>
          </div>
          <div className="pt-3 fs-1">
            <p className="pe-2">
              {kelvinInCelsius(weatherData.main.temp).toFixed(1)}°C
            </p>
            <p className="pe-2">
              <WeatherIcon weatherCondition={weatherData.weather[0].main} />
            </p>
            <p className="pe-2 fs-4">
             {weatherData.wind.speed} km/h <RiWindyFill/>
            </p>
          </div>
          <div className="mt-2 fs-3 p-3 mt-5 d-flex justify-content-between ">
            <div >
              <span className="pe-2"><BsThermometerLow/>Min </span>
              {kelvinInCelsius(weatherData.main.temp_min).toFixed(1)}°C
            </div>
            <div >
              <span className="pe-2 boder"><BsThermometerHigh/>Max </span>
              {kelvinInCelsius(weatherData.main.temp_max).toFixed(1)}°C
            </div>
            
          </div>
        </div>
      )}
    </Row>
  );
};

export default CityFound;
