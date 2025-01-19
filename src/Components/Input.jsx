import React from 'react';
import { useWeather } from '../context/Weather';

const Input=()=>{
    const weather=useWeather();
    return(
        <div>
            <input className="input" 
            type="text" 
            placeholder='Enter here'
            value={weather.searchCity} 
            onChange={(e)=>weather.setSearchCity(e.target.value)}/>
        </div>
    )
}

export default Input;