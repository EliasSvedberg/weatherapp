class WeatherApp {
  constructor() {
    this.icon = document.querySelector('.img')
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
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric
&appid=${apiKey}`
    fetch(this.url)
    .then(response => response.json())
    .then(data => {
      const dateObj = new Date(data.dt * 1000)
      var options = { weekday: 'long', month: 'long', day: 'numeric' };
      this.citynamediv.textContent = data.name
      this.dayAndTime.textContent = dateObj.toLocaleDateString('en-US', options)
      this.weatherDescription.textContent = data.weather[0].description
      this.icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      this.temperature.textContent = `${Math.round(data.main.temp)}${'°'}`
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
