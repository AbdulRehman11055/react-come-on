import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useOutletContext, useParams } from "react-router-dom";
import "./Country.css"
import CountryDetailShimmer from "./CountryDetailShimmer";
import { ThemeContext } from "../contexts/ThemeContext";
import { useTheme } from "../hooks/useTheme";

export default function CountryDetail() {
  const params=useParams()
  const countryName=params.country
  // console.log(countryName)
  const {state}=useLocation()
  // console.log(state)
  //old
  // const[isDark]=useOutletContext()
  //new
  // const [isDark]=useContext(ThemeContext)
  //new with custom hook
  const [isDark]=useTheme()

  const[countryData,setCountryData]=useState(null)
  const[notFound,setNotFound]=useState(false)

  function updateCountryData(data){
    setCountryData({
      // yeh || operator or {} object is lia lagaya hai agr kisi country ka data nai hoga toh wo empty dikhaye ga
      //isko dekhany k lia nechy element of country details mai optional chaining b ke gai hai
      name:data.name.common || data.name,
      nativeName:Object.values(data.name.nativeName || {})[0]?.common,
      population:data.population,
      region:data.region,
      subRegion:data.subregion,
      capital:data.capital?.[0],
      tld:data.tld.join(", "),
      currencies:Object.values(data.currencies || {})
      .map((currency) => currency.name)
      .join(", "),
      languages:Object.values(data.languages || {}).join(", "),
      flag:data.flags.svg,
      borders:[]
    })
    //this condition check if the country has no borders then it set an empty array to borders in order to avoid error
    if(!data.borders){
      data.borders=[]
    }
    // use to get border countries of country and render that border countries as an individual country
    Promise.all(data.borders.map((border)=>{
      return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([borderCountry])=>borderCountry.name.common)
    })).then((borders)=>{
      setTimeout(()=>setCountryData((prevState)=>({...prevState,borders})))
    })
  }
  useEffect(()=>{
    if(state){
      updateCountryData(state)
      return
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res)=>res.json())
    .then(([data])=>{
      // console.log(data)
      updateCountryData(data)
    }).catch(err =>{
      setNotFound(true)
    })
  },[countryName])
  if(notFound){
    return <div>COUNTRY NOT FOUND</div>
  }
  return (
    countryData===null ? (
      <CountryDetailShimmer />
    ):(
      <main className={`${isDark ?'dark':''}`}>
    <div className="country-details-container">
      <a className="back-btn" onClick={()=>history.back()}><i className="fa-solid fa-arrow-left"></i>&nbsp;  Back</a>
    <div className="country-details">
        <img src={countryData.flag} alt=""/>
        <div className="details-text-container">
            <h1 className="country-name">{countryData.name}</h1>
            <div className="details-text">
                <p><b>Native Name: </b><span className="native-name">{countryData.nativeName || countryData.name}</span></p>
                <p><b>Population: </b><span className="population">{countryData.population.toLocaleString("en-PK")}</span></p>
                <p><b>Region: </b><span className="region">{countryData.region}</span></p>
                <p><b>Sub Region: </b><span className="sub-region">{countryData.subRegion}</span></p>
                <p><b>Capital: </b><span className="capital">{countryData.capital}</span></p>
                <p><b>Top Level Domain: </b><span className="tld">{countryData.tld}</span></p>
                <p><b>Currencies: </b><span className="currency">{countryData.currencies}</span></p>  
                <p><b>Languages: </b><span className="lang">{countryData.languages}</span></p>  
            </div>
            {/* borders countries code */}
            {countryData.borders.length!==0 && <div className="border-countries">
              <b>Border Countries: {countryData.borders.map(border=>
                <Link key={border} to={`/${border}`}>{border}</Link>
              )}</b>
              
            </div>}
        </div>
    </div>
    </div>
</main>
    )
    
  )
}
