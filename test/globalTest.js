import { BMKGEarthquake, BMKGWeather, BMKGAreaID } from "bmkg-scraper";

(async function () {
  try { 
    const weather = new BMKGWeather();
    const ponorogo = BMKGAreaID.jawaTimur.kabPonorogo.ponorogo;

    const ponorogoWheather = await weather.jawaTimur(ponorogo);
    console.log(ponorogoWheather);

    const earthquake = new BMKGEarthquake()
    const earthquakeList = await earthquake.list()
    console.log(earthquakeList)
  }catch(e){
    console.log("error", e);
  }
})();
