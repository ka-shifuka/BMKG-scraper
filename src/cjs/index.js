const { Weather: BMKGWeather } = require("./lib/weather.js");
const { Earthquake: BMKGEarthquake } = require("./lib/earthquake.js");
const { areaID: BMKGAreaID } = require("./data/areaIDList/listAll.js");

module.exports = { BMKGAreaID, BMKGWeather, BMKGEarthquake };
