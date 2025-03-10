import { useEffect, useState } from "react"

export function useWindowSize(){
    const[windowSize,setWindow]=useState(
        {
            width:window.innerWidth,
            height:window.innerHeight
        }
    )
      useEffect(()=>{
        window.addEventListener('resize',()=>{
          setWindow(
            {
                width:window.innerWidth,
                height:window.innerHeight
            }
        )
        })
      },[])
      return windowSize
}