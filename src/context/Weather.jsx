import {createContext,useState,useContext} from 'react';
import { getWeatherDataforCity } from '../API/Index';

export const WeatherContext=createContext(null);

export const useWeather=()=>{
    return useContext(WeatherContext);
} 

export const WeatherProvider=(props)=>{

    const [data,setData]=useState(null);
    const [searchCity,setSearchCity]=useState(null);

    const fetchData=async()=>{
        const response=await getWeatherDataforCity(searchCity);
        setData(response)
    }

    return(
        <WeatherContext.Provider 
        value={{searchCity,data,setSearchCity,fetchData}}>
            {props.children}
        </WeatherContext.Provider>
    )
}