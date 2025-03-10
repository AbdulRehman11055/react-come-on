import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { useTheme } from '../hooks/useTheme'

export default function Header({theme}) {
  //old
  // const[isDark,setIsDark]=theme
  //new
  // const[isDark,setIsDark]=useContext(ThemeContext)
  //new with custom hook
  const[isDark,setIsDark]=useTheme()

  // const[isDark,setIsDark]=useState(JSON.parse(localStorage.getItem('isDarkMode')))
  // if(isDark){
  //   document.body.classList.add('dark')
  // }else{
  //   document.body.classList.remove('dark')
  // }
  return (
    <>
    <header className={`header-container  ${isDark?'dark':''}`}>
      <div className="header-content">
        <h2 className="title"><a href="/">Where in the World?</a></h2>
        <p className="mode" id="theme-changer" onClick={()=>{
          setIsDark(!isDark)
          localStorage.setItem('isDarkMode',!isDark)
        }}> <i className={`fa-solid fa-${isDark ? 'moon':'sun'}`} id="icon"></i>&nbsp;  {`${isDark?'Dark':'Light'}`} Mode</p>
      </div>
    </header>
    </>
  )
}

