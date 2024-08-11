import { BMKGWeather, BMKGEarthquake } from "../src/index.js";


(async function () {
  const weather = new BMKGWeather();
  const jakartaWeather = await weather.dkiJakarta();
  console.log(jakartaWeather);

   const earthquake = new BMKGEarthquake();
  const listEarthquake = await earthquake.list();
  console.log(listEarthquake);
})();

