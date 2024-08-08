import React from 'react'
import { useTheme } from '../Contexts/themeContexts'

const Button = () => {
    const {themeMode, darkTheme, lightTheme} = useTheme();
    const handaleChange = (e) => {
        const btn = e.currentTarget.checked;
        // console.log("Hello");
        if(btn){
            darkTheme();
        }
        else{
            lightTheme();
        }
    }
  return (
    <div>
      <input type="checkbox" name="" id="" value=""  checked={themeMode === "dark"} onChange={handaleChange}/>
    </div>
  )
}

export default Button
