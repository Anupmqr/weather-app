import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const Rain_url = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo=";
    const Hot_url = "https://media.istockphoto.com/id/1090614334/photo/beautiful-cloudscape-over-the-sea-waves-sunrise-shot.webp?b=1&s=170667a&w=0&k=20&c=qhXcDLvxPkBRyISmnVkJb0uzTVpRIu4RuO2AGDkqX-4=";
    const Cold_url = "https://plus.unsplash.com/premium_photo-1675715924010-11ffef953747?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fHww";

    // const 
    return(
        <>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {info.humidity > 80 ? Rain_url : info.temp > 15 ? Hot_url : Cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature= {info.temp}&deg;C</p>
          <p>Humidity= {info.humidity}</p>
          <p>Min Temperature= {info.tempMin}&deg;C</p>
          <p>Max Temperature= {info.tempMax}&deg;C</p>
          <p>The weather is described as <b><i>{info.weather}</i></b> feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </>
    )
}