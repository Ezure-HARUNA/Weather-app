import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import dayjs from "dayjs";
import styled from "styled-components"

const Div1 =styled.div`

.card{
  width: 360px;
  height: auto;
}

.card-skin{
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,.2);
}

`

const Div2 = styled.div`
.card__imgframe{
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  background-size: cover;
  box-sizing: border-box;
}
`
const Div3 = styled.div`
.card__textbox{
  width: 100%;
  height: auto;
  padding: 20px 18px;
  background: #ffffff;
  box-sizing: border-box;
}

.card__textbox > * + *{
  margin-top: 10px;
}
`
const Div4 = styled.div`
.card__titletext{
  font-size: 20px;
  font-weight: bold;
  line-height: 125%;
}
`
const Div5 = styled.div`

.card__overviewtext{
  font-size: 12px;
  line-height: 150%;
}`

const Weather = (props) => {

  return (
    <Div1 className="card card-skin">
        <Div2 class="card__imgframe"></Div2>
        <Div3 class="card__textbox">
        <Div4 className="card__titletext">
            {props.city && props.country && <p>地域と国: {props.city}, {props.country}</p>}
            {props.date && <p>日にち: {dayjs(props.date).format("dddd")}</p>} 
            {props.date && <p>時刻: {dayjs(props.date).format("h:mm")}</p>}
            {props.date && <p>午前か午後か: {dayjs(props.date).format("A")}</p>}
            {props.temperature && <p>{props.temperature} °C</p>}
            {props.description &&  <p>天気: {props.description}</p>}
            {props.error && <p>{props.error}</p>}
            {props.recommendation && <p>{props.recommendation}</p>}
        </Div4>
        <Div5 className="card__overviewtext">

          Forecastだよ
        </Div5>
        </Div3>
    </Div1>
  )
}

export default Weather


// import {
//     Card,
//     CardContent,
//     CardHeader,
//     CardMedia,
//     Divider,
//     Typography,
//     Grid
//   } from "@material-ui/core";


// const useStyles = makeStyles(theme => ({
// atmospheric: {
//   fontSize: "28px",
//   padding: "5px"
// },
// buttons: {
//   color: "black"
// },
// card: {
//   minWidth: 600,
//   minHeight: 600
// },
// container: {
//   display: "flex",
//   flexWrap: "wrap"
// },
// error: {
//   color: "red",
//   padding: "10px"
// },
// fullList: {
//   width: "auto"
// },
// layout: {
//   marginTop: "20px"
// },

// paper: {
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary
// },
// recommendation: {
//   fontFamily: "Montserrat, sans-serif",
//   padding: "20px 0px 10px 0px",
//   fontSize: "26px",
//   textAlign: "center"
// },
// root: {
//   flexiGrow: 1,
//   color: "black"
// },
// search: {
//   marginTop: "100px"
// },
// wi: {
//   color: "#673ab7"
// }
// }));

// export default function Weather(props) {
//     const classes = useStyles();

//     return (
//         <div>
//             <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                     <WeatherCard
//                         city={props.city}
//                         country={props.country}
//                         weather={props.weather}
//                         icon={props.icon}
//                         temperature={props.temperature}
                    
                    
                    
//                     />

    
          

//                 </Grid>
//             </Grid>
//         </div>

//     )
// }

// const WeatherCard = (props) => {
//     const classes = useStyles();
//     const humidity = "wi wi-humidity";
//     const strongWind = "wi wi-strong-wind";

//     return (
//        <Card className={classes.card}>
//            <CardHeader
//                 title={props.city + ", " + props.country}
//                 // subheader={<WeatherCardSubheader weather={props.weather} />}
//             />
//             <CardContent>
//                 <CardMedia
//                     className={`${props.icon} ${classes.wi}`}
//                     src={props.icon}
//                     style={{ fontSize: "128px", float: "right" }}
//                 />
//                 {/* 気温 */}
//                 <Typography
//                     variant="h2"
//                     className="big-temp"
//                     color="textPrimary"
//                     component="h2"
//                     style={{ fontFamily: "Montserrat", paddingTop: "30px" }}
//                 >
//                     {Math.round(props.temperature)}&deg;C
//                 </Typography>

//                 {/* <Typography
//                     variant="subtitle2"
//                     className="atmospheric-conditions"
//                     color="textSecondary"
//                     gutterBottom
//                     style={{ paddingTop: "40px" }}
//                 >
//                 <span
//                     className={`${strongWind} ${classes.wi} ${classes.atmospheric}`}
//                 ></span>
//                 {/* 風速 */}
//                     {/* {props.wind_speed} km/h Winds{" "}
//                 <span
//                     className={`${humidity} ${classes.wi} ${classes.atmospheric}`}
//                 ></span>
//                     {props.humidity}% Humidity
//                 </Typography> */} 

//                 {/* アドバイス（recommendコンポーネント) */}
//                 <Typography
//                     className={`${classes.recommendation} recommendation`}
//                     color="textPrimary"
//                     gutterBottom
//                 >
//                     {props.recommendation}
//                 </Typography>
//                 <Divider variant="middle" />
//                 {/* 下の詳細欄 */}
//                 {/* <Forecast forecast={forecast} /> */}

//             </CardContent>
               
//        </Card>
//     )

// }



