const { BMKGWeather, BMKGAreaID } = require("../src/index.cjs");
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let prov = 'jawaTengah';
let kab = 'kabKudus';
let kec = 'kudus';


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