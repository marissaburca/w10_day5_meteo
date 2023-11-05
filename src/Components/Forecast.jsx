 
 
 const Forecast = (props) => {
    const array= props.array
    const calc =props.calc
    console.log(array)

    function stringDay(dateString) {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const date = new Date(dateString);
        const dayOfWeekIndex = date.getDay(); // Restituisce un numero da 0 (Domenica) a 6 (Sabato)
        return daysOfWeek[dayOfWeekIndex];
      }

 return ( 
     <div className="mt-3 bg-gray more-info">
        <p className="fs-3 pt-2 ">Forecast for the next 5 days</p>
        <div className="d-flex justify-content-between border-top border-bottom py-2 fs-3 px-2">
            <span>{stringDay(array[6].dt_txt)}</span>
           <span>{calc(array[6].main.temp).toFixed(1)}°C</span>
        </div>
        <div className="d-flex justify-content-between border-bottom py-2 fs-3 px-2">
            <span>{stringDay(array[14].dt_txt)}</span>
           <span>{calc(array[14].main.temp).toFixed(1)}°C</span>
        </div>
        <div className="d-flex justify-content-between border-bottom py-2 fs-3 px-2">
            <span>{stringDay(array[22].dt_txt)}</span>
           <span>{calc(array[22].main.temp).toFixed(1)}°C</span>
        </div>
        <div className="d-flex justify-content-between border-bottom py-2 fs-3 px-2">
            <span>{stringDay(array[30].dt_txt)}</span>
           <span>{calc(array[30].main.temp).toFixed(1)}°C</span>
        </div>
        <div className="d-flex justify-content-between border-bottom py-2 fs-3 px-2">
            <span>{stringDay(array[38].dt_txt)}</span>
           <span>{calc(array[38].main.temp).toFixed(1)}°C</span>
        </div>
       
     </div>
     );
} 
 
 export default Forecast;