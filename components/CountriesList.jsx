import { useEffect, useState } from "react"
//below code hum ny us case mai use kiya tha jab CountriesData.js sy countires ka data ly rhy thy but now hum api sy data fetch kr rhy use case no 1 mai
// import CountriesData from "../CountriesData"
import CountryCard from "./CountryCard"
import CountriesListShimmer from "./CountriesListShimmer";
export default function CountriesList({query}) {
  // case no 1 useEfeect hook
  const [countriesData,setCountriesData]=useState([])
  
  // case no 2 useEfeect hook
  //const [count,setCount]=useState(0)

  // case no 1 useEfeect hook
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    setCountriesData(data)
  
   });
   //case no 4 useEffect hook
  //  const intervalId=setInterval(() => {
  //      console.log('running countriesList component')
  //  },2000);
   //  case no 3 useEffect hook
  //  return ()=>{
  //   console.log('cleaning function');
  //   clearInterval(intervalId)
  // } 
  },[]);

  // case no 2 useEfeect hook
  // useEffect(()=>{
  //   console.log('case no 2')
  // },[count])

  return (
    <>
    {/* case no 2 useEfeect hook */}
    {/* <h2>{count}</h2>
    <button onClick={()=>setCount(count+1)}>increase count</button> */}
    {/* case no 1 useEfeect hook  */}
    {/* shimmer effect implementation */}
    {!countriesData.length? <CountriesListShimmer/>:<div className="countries-container">
    {countriesData
    .filter((country)=>country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query))
    .map((country)=>{
  return <CountryCard 
  key={country.name.common}
  name={country.name.common} 
  flag={country.flags.svg} 
  population={country.population.toLocaleString("en-PK")}
  region={country.region}
  capital={country.capital?.[0]}
  data={country}
  />
 })}
    </div>}
    </>
  )
}
// agar hum ny multiple chezoun ko render krwana ho toh hum ak array mai rakhty hain
// jab hum ak variable mai array k andar components rakhty hain toh yeh ak react object ban jata hai