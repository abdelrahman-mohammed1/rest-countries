

import GlobalStyles from './styles/GlobalStyles'
import Header from './ui/Header'

import CountryDetails from './ui/CountryDetails'
import CountriesFilter from './ui/CountriesFilter'
import { useEffect, useState } from 'react'
import CountryContainer from './ui/CountryContainer'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { DarkModeProvider } from './context/DarkModeContext'


const StyledApp = styled.div`
  background-color: var(--color-mode-back); 
  height: 100vh; 
  overflow-y:none  ;
`
export default function App() {
  const [region, setRegion] = useState("")
  const [countryName, setCountryName] = useState("");
  console.log(countryName)
  const [data, setData] = useState([]);
  useEffect(function () {
    async function getCountries() {
      const res = await fetch('https://restcountries.com/v3.1/all');
      const data = await res.json();
      if (!res.ok) throw new Error('Error when fetch the data');
      setData(data);
    }
    getCountries();
  }, [])
  return (
    <StyledApp>
      <DarkModeProvider>


        <GlobalStyles />
        <Header />
        <Routes>
          <Route index element={<>
            <CountriesFilter countryName={countryName} setCountryName={setCountryName} region={region} setRegion={setRegion} />
            <CountryContainer countryName={countryName} region={region} data={data}></CountryContainer>
            {!data?.length && <p>Loading...</p>}
          </>} />
          <Route path='/:name' element={<CountryDetails />} />
        </Routes>


      </DarkModeProvider>
    </StyledApp>
  )
}
