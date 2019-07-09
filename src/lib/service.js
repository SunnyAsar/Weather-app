
  function getWeather (city='Abuja'){
    const API_KEY = 'a622921a4c100b7d35d888ae68406706'
    const url =  `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
    fetch(url,{mode: 'cors'})
    .then((response)=> response.json())
    .then((data) => {
      console.log(data.main.temp)
      const temp = data.main.temp
      const Celcius = (temp - 273.15).toFixed(1)
      const Fahrenheit = ((temp - 273.15) * (9 / 5) + 32).toFixed(1)
      console.log({c:Celcius,f:Fahrenheit})

      // const kelvinToFahrenheit = ((temp - 273.15) * (9 / 5) + 32).toFixed(1)
      // console.log({celcius: kelvinToCelcius, fahrenheight: kelvinToFahrenheit})

      // return {celcius: kelvinToCelcius, fahrenheight: kelvinToFahrenheit}
    
    })
    .catch((err)=> console.log(err))
  }


  const kelvinToCelcius = temp => (temp - 273.15).toFixed(1)
  const kelvinToFahrenheit = temp => ((temp - 273.15) * (9 / 5) + 32).toFixed(1)

export default { getWeather }
