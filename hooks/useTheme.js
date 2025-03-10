import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useTheme=()=>{
    const[isDark,setIsDark]=useContext(ThemeContext)
    return[isDark,setIsDark]
}