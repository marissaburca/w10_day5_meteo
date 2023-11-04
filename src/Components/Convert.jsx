import { useEffect, useState } from "react";
import CityFound from "./CityFound";

const myKey = "67e4b4a86eaad69376c1d83da61f1d35";

const Convert = (props) => {
  console.log(props);
  const city = props.city;
  console.log("la città di merda", city);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [country, setCountry] = useState();
 

 
  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${myKey}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella conversione");
        }
      })
      .then((data) => {
        console.log(data);
        setLat(data[0].lat);
        setLon(data[0].lon);
        setCountry(data[0].country);
       
      })
      .catch((error) => {
        console.log("Error", error);
      });
  });
  
  return (
    <>
      
      <CityFound
        lat={lat}
        lon={lon}
        country={country}
        mykey={myKey}
    
      />
    
    </>
  );
};

export default Convert;
