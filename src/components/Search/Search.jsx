import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoOptions } from '../../services/api'
import styled from 'styled-components'

const Container = styled.div`
   position: relative;
   z-index: 1000;
`

const Search = ({ onSearchChange }) => {
   const [search, setSearch] = useState(null)

   const handleOnChange = (searchData) => {
      setSearch(searchData)
      onSearchChange(searchData)
   }

   const loadOptions = (inputValue) => {
      return fetch(
         `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
         geoOptions,
      )
         .then((response) => response.json())
         .then((response) => {
            return {
               options: response.data.map((city) => {
                  return {
                     value: `${city.latitude} ${city.longitude}`,
                     label: `${city.name}, ${city.countryCode}`,
                  }
               }),
            }
         })
   }

   return (
      <Container>
         <AsyncPaginate
            placeholder='Search your city'
            debounceTimeout={100}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
         />
      </Container>
   )
}

export default Search

