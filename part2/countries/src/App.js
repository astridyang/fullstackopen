import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
function App() {
  const [query, setQuery] = useState('')
  const [countryList, setCountryList] = useState([])
  const [url, setUrl] = useState('')
  const [weatherUrl, setWeatherUrl] = useState('')
  const [weather, setWeather] = useState({
  })
  const api_key = process.env.REACT_APP_API_KEY
  const bindKeywordChange = (e) => {
    let value = e.target.value
    setQuery(value)
  }
  const Result = () => {
    let n = 0
    if(Array.isArray(countryList)){
      n = countryList.length
    }
    if (n > 10) {
      return (
        <>
          <p>too many matches, specify another filter</p>
        </>
      )
    }
    else if (n == 1) {
      let country = countryList[0]
      let languages = country.languages
      return (
        <div>
          <h2>{country.name}</h2>
          <p>capital {country.capital}</p>
          <p>population {country.population}</p>
          <h3>languages</h3>
          <ul>
            {
              languages.map(language => 
              <li key={language.name}>{language.name}</li>
              )
            }
          </ul>
          <img src={country.flag} className="country-logo" />
          <h2>Weather in {country.capital}</h2>
          <div>
            <p>temperature: {weather.temperature}</p>
            <img src={weather.weather_icons} className="country-logo" />
            <p>wind: {weather.wind_speed} mph direction {weather.wind_dir}</p>
          </div>
        </div>
      )
    } else if (n > 1 && n < 10) {
      return (
        <>
          <ul>
            {
              countryList.map(country => 
                <li key={country.name}>{country.name} <button onClick={()=>{
                  setWeatherUrl(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
                  setUrl(`https://restcountries.eu/rest/v2/name/${country.name}`)
                }}>show</button></li>
              )
            }
          </ul>
        </>
      )
    } else {
      return (
        <></>
      )
    }
  }
  useEffect(() => {
    axios
      .get(weatherUrl)
      .then(response => {
        if(response.data.current){
          setWeather(response.data.current)
        }
      })
  }, [weatherUrl])
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setCountryList(response.data)
      })
  }, [url])
 
  const queryCountry = (e) => {
    e.preventDefault();
    setUrl(`https://restcountries.eu/rest/v2/name/${query}`)
    
  }
  return (
    <div>
      <form onSubmit={queryCountry}>
        <p>find countries <input value={query} onChange={bindKeywordChange} /></p>
        <button type="submit">search</button>
      </form>
      <Result />
    </div>
  );
}

export default App;
