import Service from './lib/service'
import DomHandler from './lib/domHandler'

document.addEventListener('DOMContentLoaded', ()=> {
  const weatherForm = document.getElementById('weather-form').addEventListener('submit', fetchWeather)
  document.getElementById('toggle').addEventListener('click', DomHandler.toggleWeatherUnit)
})

async function fetchWeather(event){
  event.preventDefault()
  const city = event.target[1].value
   await Service(city)
  .then(data =>  {
    DomHandler.updateUi(data)
  })
  .catch(err => DomHandler.handleError(err))
}