import WeatherIcon from "./WeatherIcon";

const Forecast = (props) => {
  const array = props.array;
  const calc = props.calc;
  console.log(array);

  function stringDay(dateString) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    const dayOfWeekIndex = date.getDay(); // Restituisce un numero da 0 (Domenica) a 6 (Sabato)
    return daysOfWeek[dayOfWeekIndex];
  }

  return (
    <div className="mt-3 bg-gray more-info">
      <p className="fs-3 pt-2 ">Forecast for the next 5 days</p>
      <div className="d-flex justify-content-between border-top border-bottom py-2 fs-3 px-3">
        <span className="pe-2 text-start" style={{width: '100px'}}>{stringDay(array[6].dt_txt)}</span>
        <span className="text-center" style={{width: '100px'}}>{calc(array[6].main.temp).toFixed(1)}°C</span>
        <span >
                <WeatherIcon
                  weatherCondition={array[6].weather[0].main}
                />
              </span>
      </div>
      <div className="d-flex justify-content-between border-bottom py-2 fs-3 px-3">
        <span className="pe-2 text-start" style={{width: '100px'}}>{stringDay(array[14].dt_txt)}</span>
        <span className="text-center" style={{width: '100px'}}>{calc(array[14].main.temp).toFixed(1)}°C</span>
        <span >
                <WeatherIcon
                  weatherCondition={array[14].weather[0].main}
                />
              </span>
      </div>
      <div className="d-flex justify-content-between border-bottom py-2 fs-3 px-3">
        <span className="pe-2 text-start" style={{width: '100px'}}>{stringDay(array[22].dt_txt)}</span>
        <span className="text-center" style={{width: '100px'}}>{calc(array[22].main.temp).toFixed(1)}°C</span>
        <span >
                <WeatherIcon
                  weatherCondition={array[22].weather[0].main}
                />
              </span>
      </div>
      <div className="d-flex justify-content-between border-bottom py-2 fs-3 px-3">
        <span className="pe-2 text-start" style={{width: '100px'}}>{stringDay(array[30].dt_txt)}</span>
        <span className="text-center" style={{width: '100px'}}>{calc(array[30].main.temp).toFixed(1)}°C</span>
        <span >
                <WeatherIcon
                  weatherCondition={array[30].weather[0].main}
                />
              </span>
      </div>
      <div className="d-flex justify-content-between border-bottom py-2 fs-3 px-3">
        <span className="pe-2 text-start" style={{width: '100px'}}>{stringDay(array[38].dt_txt)}</span>
        <span className="text-center" style={{width: '100px'}}>{calc(array[38].main.temp).toFixed(1)}°C</span>
        <span >
                <WeatherIcon
                  weatherCondition={array[38].weather[0].main}
                />
              </span>
      </div>
    </div>
  );
};

export default Forecast;


