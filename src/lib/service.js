
  function getWeather (city){
    const API_KEY = 'a622921a4c100b7d35d888ae68406706'
    // const town = 'Kano'
    const url =  `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
    return fetch(url,{mode: 'cors'})
    .then((response)=> response.json())
    .then((data) => {
      if(!data.main){
        throw new Error('Enter a valid city')
      }

      const temp = data.main.temp
      const city = data.name
      const Celcius = (temp - 273.15).toFixed(1)
      const Fahrenheit = ((temp - 273.15) * (9 / 5) + 32).toFixed(1)
      const weather = { c:Celcius, f:Fahrenheit, city: city }
      return weather
    })
    // .catch((err)=> console.log(err))


  }


export default { getWeather }
