import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   width: 30%;
   border-radius: 5px;
   box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
   color: #ffffff;
   background-color: #302a39;
   margin: 20px auto 0;
   padding: 0 20px;

   position: absolute;
   top: 0;
   left: 0;
   z-index: 1;
`

const Block = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 20px 0;
`

const City = styled.div`
   font-weight: 600;
   font-size: 20px;
   line-height: 1;
   margin: 0;
`

const Weather = styled.div`
   font-weight: 400;
   font-size: 14px;
   line-height: 1;
   margin: 0;
`

const Temperature = styled.div`
   font-weight: 700;
   font-size: 55px;
   margin: 10px 0;
`

const Details = styled.div`
   width: 100%;
   padding-left: 20px;
`

const Parameters = styled.div`
   display: flex;
   justify-content: space-between;
`

const Label = styled.span`
   text-align: left;
   font-weight: 400;
   font-size: 12px;
`

const Value = styled.span`
   text-align: right;
   font-weight: 600;
   font-size: 12px;
`

const WeatherIcon = styled.img.attrs(({ icon }) => ({
   src: icon,
   alt: 'weather',
}))`
   width: 70px;
`

const CurrentWeather = ({ data }) => {
   return (
      <Container>
         <Block>
            <div>
               <City>{data.city}</City>
               <Weather>{data.weather[0].description}</Weather>
            </div>
            <WeatherIcon icon={`icons/${data.weather[0].icon}-white.svg`} />
         </Block>
         <Block>
            <Temperature>{Math.round(data.main.temp)}°C</Temperature>
            <Details>
               <Parameters>
                  <Label>Feels like</Label>
                  <Value>{Math.round(data.main.feels_like)}°C</Value>
               </Parameters>

               <Parameters>
                  <Label>Wind</Label>
                  <Value>{data.wind.speed} m/s</Value>
               </Parameters>

               <Parameters>
                  <Label>Humidity</Label>
                  <Value>{data.main.humidity}%</Value>
               </Parameters>

               <Parameters>
                  <Label>Pressure</Label>
                  <Value>{data.main.pressure} hPa</Value>
               </Parameters>
            </Details>
         </Block>
      </Container>
   )
}

export default CurrentWeather






