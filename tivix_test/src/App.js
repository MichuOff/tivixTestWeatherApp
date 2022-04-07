import React, {useState} from 'react';
import {Cards, SearchBar} from './components';
import styles from './App.css';
import {fetchData} from './api';
import {Typography} from '@material-ui/core'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    
    async componentDidMount() {
        const fetchedData = await fetchData("London");

        const entirety = { 
            cityname: fetchedData.cityname,
            futureDays: fetchedData.futureDays,
            morning : fetchedData.morning,
            day : fetchedData.day,
            night : fetchedData.night
        }

        this.setState({data : entirety, cityName : entirety.cityname, city : "London", cityError : false});
        this.cityName = fetchedData.cityname;    
    }

    handleCityChange = async(city) => { 
        const fetchedData = await fetchData(city);
        
        console.log("Fetch DATA =>", fetchedData)
        if(!fetchedData)  {
            return "Loading ... ";
        }
        const entirety = { 
            cityname: fetchedData.cityname,
            futureDays: fetchedData.futureDays,
            morning : fetchedData.morning,
            day : fetchedData.day,
            night : fetchedData.night
        }
        this.setState({data : entirety, cityName : entirety.cityname, cityError : false});
    }

    CityChange = async(change) => { 
        const validation = "true"
        if(validation != "Error") { 
            this.handleCityChange(change);
        }
        else { 
            this.cityError = true;
        }
    }

    render() {
        return (
            <div classNames = {styles.container}>
                <Typography className = {styles.typography} gutterBottom variant="h5" component="h2" align = "center">
                    {this.state.cityName} Forecast 
                </Typography>
                
                <SearchBar CityChange = { this.CityChange } error={this.state.zipError}/>
               
                <Cards data={this.state.data}/>
            </div>
            )
    }
}
export default App;
