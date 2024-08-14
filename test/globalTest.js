import { BMKGEarthquake, BMKGWeather, BMKGAreaID } from "../src/index.js";


(async function () {
  try {

  const weather = new BMKGWeather();
  const ponorogo = BMKGAreaID.jawaTimur.kabPonorogo.ponorogo;

  const ponorogoWheather = await weather.jawaTimur(ponorogo);
  console.log(ponorogoWheather);

  const earthquake = new BMKGEarthquake();
  const listEarthquake = await earthquake.list();
  console.log(listEarthquake);
  } catch(e) {
    console.log("error", e)
  }
})();
