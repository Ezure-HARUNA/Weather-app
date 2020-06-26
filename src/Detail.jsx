import React from 'react';
import WeatherData from "./WeatherData"
import {Link} from 'react-router-dom';

const Detail =(props)=>{
   
    

    return (
        <>
        <h2>詳細画面だよ</h2>
        <CityData 
                  locations={props.locations} 
                  index={props.index} 
                  showing={props.showing} 
                  closeWeather={props.closeWeather}
               />
        <WeatherData 
        weatherData={props.weatherData} 
        showing={props.showing} 
        />

        
        <button><Link to='/'>Topに戻る</Link></button>
     </>
    )
}

export default Detail
