let weather 
let state 

function updateUi (data){
  weather = {c: data.c, f:data.f, city: data.city}
  state = weather.c
  render()
  toggleWeatherUnit()
  document.getElementById('error').innerHTML = ''
  document.getElementById('error').className = ''
  document.getElementById('weather-form').reset()
}

function render(){
  let report = document.getElementById('weather-report') 
  let reading = document.createElement('h2')
  reading.innerHTML = ''
  report.innerHTML = ''
  let header = document.createElement('h3')
  header.innerHTML = `<h3 class='city-head'>Weather for: ${weather.city}</h3>`
  reading.innerHTML = `<h3> ${state === weather.c?'Celcious:':'Fahrenheit:'} ${state}°  <h5>  for: ${new Date()}</h5></h3>`
  document.getElementById('toggle').disabled = false
  report.appendChild(header)
  report.appendChild(reading)

}

function handleError(err){
  const error = document.getElementById('error')
  error.classList.add('alert', 'alert-danger')
  error.innerHTML = err
  document.getElementById('weather-report').innerHTML = ''
}

function toggleWeatherUnit(){
  state = state === weather.c ? weather.f : weather.c
  document.getElementById('toggle').innerHTML = `${state === weather.c?'to °f':'to °c'}`
  render()
}

export default { updateUi,handleError,toggleWeatherUnit }