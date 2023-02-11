import React from 'react'
import {
   AccordionItem,
   AccordionItemButton,
   AccordionItemHeading,
   AccordionItemPanel,
} from 'react-accessible-accordion'
import styled from 'styled-components'
import { device } from '../../utils/device'

const DayItem = styled.div`
   display: flex;
   align-items: center;
   min-width: 330px;
   min-height: 50px;
   background-color: #f1f2ec;
   border-radius: 10px;
   margin: 5px 0;
   cursor: pointer;
   font-size: 14px;
   padding: 5px 15px;
`

const WeekDayName = styled.h3`
   color: #897e77;
   flex: 1 1;
   margin-left: 15px;
`

const Description = styled.h3`
   flex: 1 1;
   margin-right: 15px;
   text-align: right;
   color: #302a39;
`

const Label = styled.h3`
   margin-left: 15px;
   color: #f1f2ec;
`

const Temperature = styled.h3`
   color: #a9605a;
   font-weight: 400;
`

const Value = styled.h3`
   margin-right: 15px;
   color: #302a39;
   font-weight: 400;
`

const WeatherIcon = styled.img.attrs(({ icon }) => ({
   src: icon,
   alt: 'weather',
}))``

const DailyDetails = styled.div`
   display: grid;
   gap: 0 15px;
   grid-template-columns: 1fr 1fr;
   padding: 5px 15px;

   @media ${device.mobile} {
      grid-template-columns: 1fr;
      gap: 0;
   }
`

const DailyDetailsItem = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const WeekDay = ({ dayName, item }) => {
   return (
      <AccordionItem>
         <AccordionItemHeading>
            <AccordionItemButton>
               <DayItem>
                  <WeatherIcon icon={`icons/${item[3].weather[0].icon}.svg`} />

                  <WeekDayName>{dayName}</WeekDayName>
                  <Description>{item[3].weather[0].description}</Description>
                  <div>
                     <Temperature>
                        {`${Math.round(item[3].main.temp_max)}°C / ${Math.round(
                           item[7].main.temp_min,
                        )}°C`}
                     </Temperature>
                  </div>
               </DayItem>
            </AccordionItemButton>
         </AccordionItemHeading>
         <AccordionItemPanel>
            <DailyDetails>
               <DailyDetailsItem>
                  <Label>Pressure</Label>
                  <Value>{item[0].main.pressure} hPa</Value>
               </DailyDetailsItem>
               <DailyDetailsItem>
                  <Label>Humidity</Label>
                  <Value>{item[0].main.humidity}%</Value>
               </DailyDetailsItem>
               <DailyDetailsItem>
                  <Label>Clouds</Label>
                  <Value>{item[0].clouds.all}</Value>
               </DailyDetailsItem>
               <DailyDetailsItem>
                  <Label>Sea Level</Label>
                  <Value>{item[0].main.sea_level} m</Value>
               </DailyDetailsItem>
               <DailyDetailsItem>
                  <Label>Wind speed</Label>
                  <Value>{item[0].wind.speed} m/s</Value>
               </DailyDetailsItem>
            </DailyDetails>
         </AccordionItemPanel>
      </AccordionItem>
   )
}

export default WeekDay




