import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelsLike: 33.53,
        humidity: 31,
        temp: 34.05,
        tempMax: 34.05,
        tempMin: 34.05,
        weather: "haze"
    });

    let updateInfo = (result) =>{
        setWeatherInfo(result);
    }
    
    return(
        <>
         <h1>Weather App</h1>
         <SearchBox updateInfo={updateInfo}/>
         <InfoBox info={weatherInfo}/>
        </>
    )
}