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

  const getCurrentTime=() =>{
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
  
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
    return formattedTime;
  }
  
  const currentTime = getCurrentTime();
  console.log(currentTime);
  

  const isNight = currentTime >= 18 || currentTime < 6;

  console.log('isNight: ', isNight);
   
        if (weatherCondition === 'Rain') {
            return <span>Rain <BsCloudRainHeavyFill className="text-primary" /></span>;
          } else if (weatherCondition === 'Clear') {
            return (
              <span>
                {isNight ? 'Clear' : 'Clear'}{' '}
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