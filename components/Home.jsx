import { useContext, useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
// import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import { useWindowSize } from '../hooks/useWindowSize'
import { useTheme } from '../hooks/useTheme'

export default function Home() {
  const [query, setQuery] = useState('')
  //old method
  // const[isDark]=useOutletContext()
  //new method with custom hook
  const [isDark]=useTheme()
  //custom hook example
  // const windowSize=useWindowSize()
  
  return (
    <main className={`${isDark ?'dark':''}`}>
      <div className="search-filter-container ">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      {/* custom hook example */}
      {/* <h1 style={{textAlign:"center"}}>{windowSize.width} x {windowSize.height}</h1> */}
      {/* case no 3 of useEffect hook */}
      {query === 'unmount' ? '' : <CountriesList query={query} />}
    </main>
  )
}