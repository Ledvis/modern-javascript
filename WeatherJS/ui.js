class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint= document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.observation_location.full;
    this.desc.textContent = weather.weather;
    this.string.textContent = `${weather.temp_c} °C`;
    this.icon.src = weather.icon_url;
    this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.feelslike_c} °C`;
    this.dewpoint.textContent = `DewPoint: ${weather.dewpoint_c} °C`;
    this.wind.textContent = `Wind: ${weather.wind_kph} km/h`;
  }
}