import React from 'react'
import { Accordion } from 'react-accessible-accordion'
import styled from 'styled-components'
import WeekDay from './WeekDay'
import { filterList } from '../../utils/helpers'
import { device } from '../../utils/device'

const Block = styled.div`
   width: 70%;
   padding: 0 0 0 45px;

   @media ${device.tablet} {
      width: 100%;
      padding: 0;
   }
`

const Title = styled.h2`
   font-size: 30px;
   margin: 20px 10px;
   color: #302a39;

   @media ${device.tablet} {
      margin-top: 30px;
   }
`
const DayItems = styled.div`
   width: 100%;
   margin: 0 auto;
`

const WEEK_DAYS = [
   'Monday',
   'Tuesday',
   'Wednesday',
   'Thursday',
   'Friday',
   'Saturday',
   'Sunday',
]

const Forecast = ({ data }) => {
   const dayInWeek = new Date().getDay()
   const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
      WEEK_DAYS.slice(0, dayInWeek),
   )

   const tomorrow = filterList(data, 1)
   const afterTomorrow = filterList(data, 2)
   const thirdDay = filterList(data, 3)
   const forthDay = filterList(data, 4)
   const fifthDay = filterList(data, 5)

   const fiveWeekDays = [tomorrow, afterTomorrow, thirdDay, forthDay, fifthDay]

   return (
      <Block>
         <Title>Weather for next days</Title>
         <Accordion allowZeroExpanded>
            <DayItems>
               {fiveWeekDays[4].length < 8
                  ? fiveWeekDays
                       .slice(0, 4)
                       .map((item, i) => (
                          <WeekDay
                             key={i}
                             dayName={forecastDays[i]}
                             item={item}
                          />
                       ))
                  : fiveWeekDays.map((item, i) => (
                       <WeekDay key={i} dayName={forecastDays[i]} item={item} />
                    ))}
            </DayItems>
         </Accordion>
      </Block>
   )
}

export default Forecast




