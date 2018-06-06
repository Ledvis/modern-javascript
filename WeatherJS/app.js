document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI;
  const storage = new Storage;
  const weatherLocation = storage.getLocationData();
  const weather = new Weather(weatherLocation.city, weatherLocation.state);

  weather.getWeather()
    .then(results => ui.paint(results))
    .catch(err => console.error(err));

  document.querySelector('#w-change-btn').addEventListener('click', () => {
    const city = document.querySelector('#city').value;
    const state = document.querySelector('#state').value;
    weather.changeLocation(city, state);
    storage.setLocationData(city, state);
    weather.getWeather()
      .then(results => ui.paint(results))
      .catch(err => console.error(err));
    $('#locModal').modal('hide');
  })
});