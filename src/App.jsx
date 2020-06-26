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
<<<<<<< HEAD
  const [loading, setLoading] = React.useState(true)
  const [errorMessage, setErrorMessage] = React.useState(null)
=======
>>>>>>> origin/master
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

<<<<<<< HEAD
  const [searchValue, setSearchValue] = React.useState("");
  
  const handleInputChange =(e) =>{
    e.preventDefault()
    setSearchValue(e.target.value)
}

  const handleSearchCity = (e) => {
    e.preventDefault();
    // const {value} = thie.state;

    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIKEY}&units=metric`;

    Promise.all([fetch(weather), fetch(forecast)])
      .then(([res1, res2]) => {
        if (res1.ok && res2.ok) {
          return Promise.all([res1.json(), res2.json()]);
        }
        throw Error(res1.statusText, res2.statusText);
      })

      .then(([apiData1, apiData2]) => {

        if (res1 && res2 !==null) {
          setLoading(false)
          setWeatherInfo
        } else {
        
            setErrorMessage(true)
            setWeatherInfo(null)
    
          }

          const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'Nocvember',
            'December',
          ];
          const sunset = new Date(apiData1.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
          const sunrise = new Date(apiData1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);
          const temperature = Math.round(apiData1.main.temp -273.15);
          const recommendation = recommendations.default[apiData.weather[0].id].recommendation;

          const weather = {
            city: apiData1.name,
            country: apiData1.sys.country,
            date,
            description: apiData1.weather[0].description,
            main: apiData1.weather[0].main,
            temperature,
            recommendation,
            icon: apiData.weather[0].icon,
            highestTemp: apiData1.main.temp_max,
            lowestTemp: apiData1.main.temp_min,
            sunrise,
            sunset,
            clouds: apiData1.clouds.all,
            humidity: apiData1.main.humidity,
            wind: apiData1.wind.speed,
            forecast: apiData2.list,
          };
        });

        //then data1 2終了
        }
        // handlesearch 終了

        return (
          <>
          <AppHeader showLabel={(weather || errorMessage) && true}>Weather app</AppHeader>
            <AppWrap>
              <h3>WEATHER APP</h3>
              <Form 
                getWeather={fetchData} 
                change={handleInputChange}
                submit={handleSearchCity}
              />
              {console.log(weather.data)}
              <Weather
                weather={weather}
                city={weather.city}
                country={weather.country}
                date={weather.date}
                description={weather.description}
                main={weather.main}
                temperature={weather.temperature}
                maxTemp={weather.maxTemp}
                minTemp={weather.minTemp}
                sunrise={sunrise}
                sunset={sunset}
                clouds={weather.clouds}
                humidity={weather.humidity}
                wind={weather.wind}
                forecast={weather.forecast}
                recommendation={weather.recommendation}
                icon={weather.icon}
                error={weather.error}
              />
              {console.log(weather.data)}
            </Div>
          </>


        )
      
       
        
      }

      
      // error終了
  

  

=======
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
>>>>>>> origin/master



export default App;
