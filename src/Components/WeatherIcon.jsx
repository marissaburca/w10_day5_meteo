import MyDate from "./MyDate";

import { 
BsCloudRainHeavyFill,  
BsFillCloudFog2Fill,
BsCloudsFill ,
BsCloudDrizzle,
BsSnow2,
BsSunFill,
BsFillMoonStarsFill
} from "react-icons/bs";
import{
  RiThunderstormsLine,
} from 'react-icons/ri'


const WeatherIcon = ({ weatherCondition}) => {

  const isNight = <MyDate/> >= '18:00';
  console.log('sono NOTTE ',MyDate)
   
        if (weatherCondition === 'Rain') {
            return <span>Rain <BsCloudRainHeavyFill className="text-primary" /></span>;
          } else if (weatherCondition === 'Clear') {
            return (
              <span>
                {isNight ? 'Clear Night' : 'Clear Day'}{' '}
                {isNight ? <BsFillMoonStarsFill className="text-white" /> : <BsSunFill className="text-warning" />}
              </span>
            );
          } else if (weatherCondition === 'Fog') {
            return <span>Fog <BsFillCloudFog2Fill className="text-white"/></span>;
          } else if (weatherCondition === 'Clouds') {
            return <span>Clouds <BsCloudsFill className="text-white"/></span>;
          } else if (weatherCondition === 'Drizzle') {
            return <span>Drizzle <BsCloudDrizzle className="text-primary"/></span>;
          } else if (weatherCondition === 'Snow') {
            return <span>Snow <BsSnow2 className="text-white"/></span>;
          } else if (weatherCondition === 'Sun') {
            return <span>Snow <BsSunFill className="text-warning"/></span>;
          } else if (weatherCondition === 'Thunderstorm') {
            return <span>Snow <RiThunderstormsLine className="text-secondary"/></span>;
          } else {
            return '';
          }
    
}
 
export default WeatherIcon;