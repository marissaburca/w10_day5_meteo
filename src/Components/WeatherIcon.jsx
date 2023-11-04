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
            return <span>Rain <BsCloudRainHeavyFill /></span>;
          } else if (weatherCondition === 'Clear') {
            return <span>Clear <BsSun /></span>;
          } else if (weatherCondition === 'Fog') {
            return <span>Fog <BsFillCloudFog2Fill /></span>;
          } else if (weatherCondition === 'Clouds') {
            return <span>Clouds <BsCloudsFill/></span>;
          } else if (weatherCondition === 'Drizzle') {
            return <span>Drizzle <BsCloudDrizzle/></span>;
         
          } else if (weatherCondition === 'Snow') {
            return <span>Snow <BsSnow2/></span>;
          } else {
            return '';
          }
    
}
 
export default WeatherIcon;