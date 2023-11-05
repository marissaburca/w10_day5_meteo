import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { BiErrorAlt } from "react-icons/bi";
import { Spinner, Alert } from "react-bootstrap";
import WeatherIcon from "./WeatherIcon";
import { BsThermometerLow, BsThermometerHigh } from "react-icons/bs";
import { RiWindyFill } from "react-icons/ri";
import Forecast from "./Forecast";


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
      `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&appid=${props.mykey}`
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
        <div className="mt-4 text-white">
          <div className="display-5 mb-2 py-2 city ">
            <span>{weatherData.city.name}, </span>
            <span>{country}</span>
          </div>
          <div className="pt-3 fs-1 pb-1 more-info text-light">
            <div className="d-flex justify-content-around">
              <span className="pe-2">
                {kelvinInCelsius(weatherData.list[0].main.temp).toFixed(1)}°C
              </span>
              <span className="pe-2">
                <WeatherIcon
                  weatherCondition={weatherData.list[0].weather[0].main}
                />
              </span>
            </div>
            <p className="pe-2 pt-2 fs-4">
              {(weatherData.list[0].wind.speed * 3.6).toFixed(1)} km/h <RiWindyFill />
            </p>
          </div>
          <div className="mt-3 fs-4 p-3 d-flex justify-content-between text-white high">
            <div>
              <span className="pe-1">
                <BsThermometerLow />
                Min{" "}
              </span>
              {kelvinInCelsius(weatherData.list[0].main.temp_min).toFixed(1)}°C
            </div>
            <div>
              <span className="ps-1 boder">
                <BsThermometerHigh />
                Max{" "}
              </span>
              {kelvinInCelsius(weatherData.list[0].main.temp_max).toFixed(1)}°C
            </div>
          </div>
          <Forecast array={weatherData.list} calc={kelvinInCelsius} />
        </div>
      )}
    </Row>
  );
};

export default CityFound;
