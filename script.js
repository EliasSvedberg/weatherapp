class WeatherApp {
  constructor() {
    this.inputContent = document.querySelector('.user-input')
    this.citynamediv = document.querySelector('.city-name')
    this.dayAndTime = document.querySelector('.day-time')
    this.weatherDescription = document.querySelector('.weather-description')
    this.temperature = document.querySelector('.temperature')
    this.createEventListener()
  }

  fetchWeather() {
    var cityName = this.inputContent.value
    console.log(cityName)
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    fetch(this.url)
    .then(response => response.json())
    .then(data => {
      this.citynamediv.textContent = data.name
      this.dayAndTime.textContent = data.dt
      this.weatherDescription.textContent = data.weather[0].description
      this.temperature.textContent = data.main.temp
    })
    .catch(error => {
      console.log(error)
    })
  }

  createEventListener() {
    this.inputContent.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.fetchWeather()
      }
    })
  }
}



const weatherApp = new WeatherApp()
