import { 
BsCloudRainHeavyFill, 
BsSun, 
BsFillCloudFog2Fill,
BsCloudsFill ,
BsCloudDrizzle,
BsSnow2,
} from "react-icons/bs";

const WeatherIcon = ({ weatherCondition }) => {
   
        if (weatherCondition === 'Rain') {
            return <span>Rain <BsCloudRainHeavyFill className="text-primary" /></span>;
          } else if (weatherCondition === 'Clear') {
            return <span>Clear <BsSun className="text-warning"  /></span>;
          } else if (weatherCondition === 'Fog') {
            return <span>Fog <BsFillCloudFog2Fill className="text-white"/></span>;
          } else if (weatherCondition === 'Clouds') {
            return <span>Clouds <BsCloudsFill className="text-white"/></span>;
          } else if (weatherCondition === 'Drizzle') {
            return <span>Drizzle <BsCloudDrizzle className="text-primary"/></span>;
          } else if (weatherCondition === 'Snow') {
            return <span>Snow <BsSnow2 className="text-white"/></span>;
          } else {
            return '';
          }
    
}
 
export default WeatherIcon;