import Header from "./components/Header";
import "./App.css"
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";



export default function App() {
  //old
  // const[isDark,setIsDark]=useState(JSON.parse(localStorage.getItem('isDarkMode')))
  return (
    // old
    // <ThemeContext.Provider value={[isDark,setIsDark]}>
    //   {/* oldest */}
    // {/* <Header theme={[isDark,setIsDark]}/>
    // <Outlet context={[isDark,setIsDark]}/> */}
    // <Header />
    // <Outlet />
    // </ThemeContext.Provider>
    

  //new and more useable
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}

