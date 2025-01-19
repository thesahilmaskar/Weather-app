const address="https://api.weatherapi.com/v1/current.json?key=e7ca845a15584aab9e0110710250901";

export const getWeatherDataforCity=async(city)=>{
    const response=await fetch(`${address}&q=${city}&aqi=yes`)

    return response.json()
};