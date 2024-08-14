const { Weather: BMKGWeather } = require("./CJS/lib/weather.js");
const { Earthquake: BMKGEarthquake } = require("./CJS/lib/earthquake.js");
const { areaID: BMKGAreaID } = require("./CJS/data/areaIDList/listAll.js");

module.exports = { BMKGAreaID, BMKGWeather, BMKGEarthquake };
