import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import Search from './components/Search/Search'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import { WEATHER_API_KEY, WEATHER_API_URL } from './services/api'
import Forecast from './components/Forecast/Forecast'
import { device } from './utils/device'

const Container = styled.div`
   width: 1100px;
   margin: 30px auto;
   padding: 0 10px;

   @media ${device.tablet} {
      max-width: 750px;
   }

   @media ${device.mobile} {
      max-width: 400px;
   }
`

const Block = styled.div`
   display: flex;
   justify-content: flex-end;
   width: 100%;
   margin: 30px 0;

   position: relative;

   @media ${device.tablet} {
      justify-content: space-between;
      flex-wrap: wrap;
   }
`

const Title = styled.h1`
   font-size: 100px;
   text-align: center;
   color: #302a39;
   font-weight: 700;

   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);

   @media ${device.tablet} {
      font-size: 70px;
   }

   @media ${device.mobile} {
      width: 100%;
      font-size: 50px;
   }
`

function App() {
   const [currentWeather, setCurrentWeather] = useState(null)
   const [forecast, setForecast] = useState(null)

   const handleOnSearchChange = (searchData) => {
      const [lat, lon] = searchData.value.split(' ')

      const fetchCurrentWeather = fetch(
         `${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
      )
      const fetchForecast = fetch(
         `${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
      )

      Promise.all([fetchCurrentWeather, fetchForecast])
         .then(async (response) => {
            const weatherResponse = await response[0].json()
            const forecastResponse = await response[1].json()

            setCurrentWeather({ city: searchData.label, ...weatherResponse })
            setForecast({ city: searchData.label, ...forecastResponse })
         })
         .catch((err) => {
            console.log(err)
         })
   }

   return (
      <Container>
         <Search onSearchChange={handleOnSearchChange} />
         <Block>
            {currentWeather && <CurrentWeather data={currentWeather} />}
            {forecast && <Forecast data={forecast} />}
         </Block>
         {!currentWeather || !forecast ? (
            <Title>Welcome to weather app</Title>
         ) : null}
      </Container>
   )
}

export default App






