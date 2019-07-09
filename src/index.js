import Service from './lib/service'
import DomHandler from './lib/domHandler'

document.addEventListener('DOMContentLoaded', ()=> {
  const weatherForm = document.getElementById('weather-form').addEventListener('submit', fetchWeather)
})

function fetchWeather(event){
  event.preventDefault()
  const city = event.target[0].value
  Service.getWeather(city)
  .then(data =>  {
    DomHandler.updateUi(data)
  })
  .catch(err => DomHandler.handleError(err))
}