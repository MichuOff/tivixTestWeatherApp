import axios from 'axios'; // used for api requests

const API_KEY = "027ee07fafd9a678d925c3a9220c1289";

const url = `https://api.openweathermap.org/data/2.5/forecast`;


export const fetchData = async(city) => {
    try {
        const { data: {city: {name}, list} } = await axios.get(`${url}?q=${city},us&appid=${API_KEY}`);
        var i;
        var days = [];
        var tempMorning = []
        var tempDay = []
        var tempNight = []
        console.log(list);
        for(i = 0; i < list.length; i++) {
            if (list[i].dt_txt.indexOf("03:00:00") !== - 1) {
                tempMorning.push(new Date(list[i].dt_txt));
                tempMorning.push(Math.round(list[i].main.feels_like - 273.15))
                tempMorning.push(list[i].weather[0].main);
                tempMorning.push(list[i].weather[0].description);
                tempMorning.push(list[i].weather[0].icon);
            }
            if (list[i].dt_txt.indexOf("12:00:00") !== - 1) {
                tempDay.push(new Date(list[i].dt_txt));
                tempDay.push(Math.round(list[i].main.feels_like - 273.15))
                tempDay.push(list[i].weather[0].main);
                tempDay.push(list[i].weather[0].description);
                tempDay.push(list[i].weather[0].icon);
            }
            if (list[i].dt_txt.indexOf("21:00:00") !== - 1) {
                var temp = []
                tempNight.push(new Date(list[i].dt_txt));
                tempNight.push(Math.round(list[i].main.feels_like - 273.15))
                tempNight.push(list[i].weather[0].main);
                tempNight.push(list[i].weather[0].description);
                tempNight.push(list[i].weather[0].icon);
                temp.push(tempMorning)
                temp.push(tempDay)
                temp.push(tempNight)
                days.push(temp)
                tempMorning = []
                tempDay = []
                tempNight = []
            }
        }
        const selectedData = { 
            cityname : name,
            futureDays : days,
            morning : tempMorning,
            day : tempDay,
            night: tempNight,
        }
        return selectedData;
        
    } catch(error) { 
        console.log(error);
    }
}

