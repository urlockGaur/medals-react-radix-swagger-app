import { useState, useEffect } from 'react'
import NewCountry from './components/NewCountry';
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);

  // this is the functional equivalent to componentDidMount
  useEffect(() => {
    // initial data loaded here
    let fetchedCountries = [
      { id: 1, name: 'United States', gold: 2, silver: 2, bronze: 3 },
      { id: 2, name: 'China', gold: 3, silver: 1, bronze: 0 },
      { id: 3, name: 'Germany', gold: 0, silver: 2, bronze: 2 },
      { id: 4, name: 'France', gold: 2, silver: 2, bronze: 1 },
      { id: 5, name: 'Spain', gold: 1, silver: 1, bronze: 0 },
      { id: 6, name: 'United Kingdom', gold: 0, silver: 2, bronze: 3 },
      { id: 7, name: 'Brazil', gold: 3, silver: 0, bronze: 0 },
      { id: 8, name: 'Italy', gold: 2, silver: 2, bronze: 2 },
      { id: 9, name: 'Switzerland', gold: 1, silver: 1, bronze: 2 },
      { id: 10, name: 'Poland', gold: 0, silver: 2, bronze: 1 },
      { id: 11, name: 'Sweden', gold: 0, silver: 3, bronze: 1 },
      { id: 12, name: 'Ireland', gold: 2, silver: 1, bronze: 0 },
      { id: 13, name: 'Scotland', gold: 3, silver: 0, bronze: 2 },
    ]
    setCountries(fetchedCountries);
  }, []);

  return (
    <>
      <h1>Olympic Medals <NewCountry /></h1>
      <ul>
        {
          countries.sort((a, b) => a.name.localeCompare(b.name)).map(country => <li key={country.id}>{country.name}</li>)
        }
      </ul>
    </>
  )
}

export default App
