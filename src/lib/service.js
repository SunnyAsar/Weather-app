
const fetchWeather = async (city) => {
  const API_KEY = 'a622921a4c100b7d35d888ae68406706';
  const url =  `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;

 const data = await fetch(url, {mode: 'cors'})
                       .then(response => {
                          if(response.status === 200) return response.json();
                          else return Promise.reject("Cannot find data for city");
                       });
 return data;
}


const getWeather = async (city) => {
    const data = await fetchWeather(city);
    const { main, name } = data;
    const { temp } = main;
    
    const Celcius = (temp - 273.15).toFixed(1);
    const Fahrenheit = ((temp - 273.15) * (9 / 5) + 32).toFixed(1);
    const weather = { c:Celcius, f:Fahrenheit, city: name };

    return weather;
  }


export default getWeather 
