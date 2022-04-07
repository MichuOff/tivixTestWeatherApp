import React from 'react';
import { Card, CardContent, Typography, makeStyles, Grid } from '@material-ui/core/';
import styles from './style.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AirIcon from '@mui/icons-material/Air';
import WaterIcon from '@mui/icons-material/Water';
import GrainIcon from '@mui/icons-material/Grain';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Cards = (weatherData) => {
    
    if(!weatherData.data) {
        return "Loading..";
    }

    const handleCelsius = (temp) => {
        let celsiusTemp = Math.round((temp - 32) * 5/9)
        return celsiusTemp
    }

    var weathericons = {
      "Clouds" : <CloudIcon />,
      "Clear" : <WbSunnyIcon />,
      "Drizzle" : <AirIcon />, 
      "Rain" : <GrainIcon />,
      "Snow" : <AcUnitIcon />,
      "Thunderstorm" : <ThunderstormIcon />,
      "Smoke" : <WaterIcon />
    };

    return (
        <div>
            <Grid container direction = "row" justify = "center" alignItems = "center" className="container">
                <Grid item component={Card} xs = {2} md = {2} className="card weather"> 
                    <CardContent>
                        <div className="weatherIcon">
                        {weathericons[weatherData.data.futureDays[0][2][2]]}
                        </div>
                        {console.log("WEATHER DATA =>", weatherData.data)}
                        <Typography variant="body2" color="textSecondary" align = "center">
                            {weatherData.data.futureDays[0][0][1] === undefined ? console.log("EMPTYYYY") : console.log("FULLL", weatherData.data.futureDays[0][0][1])}
                            Morning : {weatherData.data.futureDays[0][0][1] === undefined ? <p>No Data</p> : weatherData.data.futureDays[0][0][1] + "°C"}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            Day : {weatherData.data.futureDays[0][1][1] === undefined ? <p>No Data</p> : weatherData.data.futureDays[0][1][1] + "°C"}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center">
                            Night : {weatherData.data.futureDays[0][2][1] === undefined ? <p>No Data</p>: weatherData.data.futureDays[0][2][1] + "°C"}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center" component="p">
                            {weatherData.data.futureDays[0][2][0].toString().substring(0,15)}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center">
                            {weatherData.data.futureDays[0][1][2]}
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs = {2} md = {2} className="card weather"> 
                    <CardContent>
                        <div className="weatherIcon">
                            {weathericons[weatherData.data.futureDays[1][1][2]]}
                        </div>
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            Morning : {weatherData.data.futureDays[1][0][1]+ "°C"}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            Day :{weatherData.data.futureDays[1][1][1]+ "°C"}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            Night: {weatherData.data.futureDays[1][2][1]+ "°C"}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center" component="p">
                            {weatherData.data.futureDays[1][1][0].toString().substring(0,15)}
                        </Typography>
                        
                        <Typography variant="body2" color="textSecondary" align = "center">
                            {weatherData.data.futureDays[1][1][2]}
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs = {2} md = {2} className="card weather"> 
                    <CardContent>
                        <div className="weatherIcon">
                            {weathericons[weatherData.data.futureDays[2][1][2]]}
                        </div>
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            Morning : {weatherData.data.futureDays[2][0][1]+ "°C"}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            Day :{weatherData.data.futureDays[2][1][1]+ "°C"}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            Night: {weatherData.data.futureDays[2][2][1]+ "°C"}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center" component="p">
                            {weatherData.data.futureDays[2][1][0].toString().substring(0,15)}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center">
                            {weatherData.data.futureDays[2][1][2]}
                        </Typography>
                        
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs = {2} md = {2} className="card weather"> 
                    <CardContent>
                        <div className="weatherIcon">
                            {weathericons[weatherData.data.futureDays[3][1][2]]}
                        </div>
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            Morning : {weatherData.data.futureDays[3][0][1]+ "°C"}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            Day :{weatherData.data.futureDays[3][1][1]+ "°C"}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            Night: {weatherData.data.futureDays[3][2][1]+ "°C"}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center" component="p">
                            {weatherData.data.futureDays[3][1][0].toString().substring(0,15)}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center">
                            {weatherData.data.futureDays[3][1][2]}
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs = {2} md = {2} className="card weather"> 
                    <CardContent>
                        <div className="weatherIcon">
                            {weathericons[weatherData.data.futureDays[4][1][2]]}
                        </div>
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            Morning : {weatherData.data.futureDays[4][0][1]+ "°C"}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            Day :{weatherData.data.futureDays[4][1][1]+ "°C"}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            Night: {weatherData.data.futureDays[4][2][1]+ "°C"}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center" component="p">
                            {weatherData.data.futureDays[4][1][0].toString().substring(0,15)}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center">
                            {weatherData.data.futureDays[4][1][2]}
                        </Typography>
                        
                    </CardContent>
                </Grid>
            </Grid> 
    </div>
    );
}
export default Cards;
