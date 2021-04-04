const Api = {
  getData(city) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4cc8b6942e8f8f34f72f41e862f4b5a2`
    ).then((data) => data.json());
  },
};
export default Api;
