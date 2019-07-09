
function updateUi (data){
  document.getElementById('weather-report').innerHTML =  `
  <h3 class='city-head'>Weather for: ${data.city}</h3>
  <h2>Celcious: ${data.c}°c </h2>
  <h2>Fahrenheit: ${data.f}°f</h2>
  `
  document.getElementById('error').innerHTML = ''
  document.getElementById('error').className = ''
  document.getElementById('weather-form').reset()
}

function handleError(err){
  const error = document.getElementById('error')
  error.classList.add('alert', 'alert-danger')
  error.innerHTML = err
  document.getElementById('weather-report').innerHTML = ''
}

export default { updateUi,handleError }