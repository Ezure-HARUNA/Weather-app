import React,{useState} from "react";
import "./App.css";
import Form from "./Form";
import Weather from "./Weather";
import * as recommendations from "./recommendations.json";
// Import Search from "./Search"
// import styled from "styled-components";
// import Button from '@material-ui/core/Button';



//styled-components

// const Div = styled.div `
//   min-height:100vh;

// .errorMessage {
//   margin: 0 auto;
// }

// ` 

//styled-components 終了



const App =() =>{
  const [weather, setWeather] = React.useState([])
  const APIKEY = `4ceb0fa6fd7e05f54a5b2b782fc11334`

  async function fetchData(e) {
    const city =e.target.elements.city.value
    const country = e.target.elements.country.value
    e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}`)
      .then(res=> res.json())
      .then(data=> data)
      if(city && country) {

        setWeather({
          data: apiData,
          // 地域や国
          city: apiData.name,
          country: apiData.sys.country,
          // 曜日
          date: apiData.dt * 1000,
          // description
          description: apiData.weather[0].description,
          // 気温
          temperature: Math.round(apiData.main.temp -273.15),
          recommendation: recommendations.default[apiData.weather[0].id].recommendation,
          icon: apiData.weather[0].icon,
          error:""
      
        }
      )} else {
        setWeather({
          data: '',
          city: '',
          country: '',
          date: '',
          description: '',
          temperature: '',
          recommendation: '',
          icon: '',
          error:"Please Type A City And Country"
        }
        )}
  }

  return (
    <div className="App">
      <h3>WEATHER APP</h3>
      <Form getWeather={fetchData} />
      {console.log(weather.data)}
      <Weather
      weather={weather}
      city={weather.city}
      country={weather.country}
      date={weather.date}
      description={weather.description}
      temperature={weather.temperature}
      recommendation={weather.recommendation}
      icon={weather.icon}
      error={weather.error}
      />
      {console.log(weather.data)}
    </div>
  )

}



export default App;
