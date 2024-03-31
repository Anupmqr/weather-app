import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";

export default function SearchBox({updateInfo}){
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "a0252bdeb492b0bc9a2508a8133db6d4";

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let handleChange = (event)=>{
        setCity(event.target.value);
    };

    
    const weatherInfo = async ()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp, 
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        }
        catch(err){
            throw(err);
        }
    }
    
    let handleSubmit = async (event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await weatherInfo();
        updateInfo(newInfo);
        setError(false);
        }
        catch(err){
            setError(true);
        }
    };

    return(
        <>
        <form onSubmit={handleSubmit}>
        <TextField id="search" label="City" variant="outlined" onChange={handleChange} value={city} required/>
        <br /><br />
        <Button variant="outlined" type="submit">Search</Button>
        </form>
        {error && <p style={{color:"red"}}>No such place is available in API!</p>}
        <br />
        </>
    );
}