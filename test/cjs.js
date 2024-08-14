const { BMKGEarthquake, BMKGWeather, BMKGAreaID } = require("bmkg-scraper");

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

async function getEarthquake() {
 try {
   const earthquake = new BMKGEarthquake();
    const listEarthquake = await earthquake.list();
    console.log(listEarthquake);
  } catch(e) {
    console.log("error", e);
  }
}

let prov = 'jawaTimur';
let kab = 'kabPonorogo';
let kec = 'ponorogo';

getWeather(prov, kab, kec); 
getEarthquake();
