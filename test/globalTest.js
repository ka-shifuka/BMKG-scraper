import { BMKGEarthquake, BMKGWeather, BMKGAreaID } from "../src/index.js";

let prov = 'jawaTimur';
let kab = 'kabPonorogo'
let kec = 'ponorogo';

async function getWeather(prov, kab, kec) {
  try { 
    let weather = new BMKGWeather();
    let queries = BMKGAreaID[prov][kab][kec];
    let data = await weather[prov](queries);
    console.log(data);

  } catch(e) {
    console.log("error", e);
  }
};

getWeather(prov, kab, kec); 