const cheerio = require("cheerio");

function cuacaScraper(htmlData) {
  const $ = cheerio.load(htmlData);

  const arrayData = [];
  $("#TabPaneCuaca1 .cuaca-flex-child").each((i, el) => {
    let time = $(el).find("h2.kota").text();
    let temperature = $(el).find("h2.heading-md").text();
    let humidityElement = $(el).find('p:contains("%")');
    let humidity = humidityElement.text();
    let weather = $(el).find("div.kiri p").text();

    let windElement = $(el).find('p:contains("km/jam")');
    let windText = windElement.text();
    let regex = /(\d+)\s(km\/jam)(.*)/;
    let result = regex.exec(windText);
    let windSpeed = result[1];
    let windDirection = result[3];

    time = time == "" ? null : time;
    temperature = temperature == "" ? null : temperature;
    humidity = humidity == "" ? null : humidity;
    windSpeed = windSpeed == "" ? null : windSpeed;
    windDirection = windDirection == "" ? null : windDirection;
    weather = weather == "" ? null : weather;

    arrayData.push({
      time,
      temperature,
      humidity,
      windSpeed: windSpeed + " km/jam",
      windDirection,
      weather,
    });
  });

  const images = [];
  $("#klimatologi img").each((i, img) => {
    const dataOriginal = $(img).attr("data-original");
    images.push(dataOriginal);
  });

  const $serviceBlock = $(".service-block").first();
  const weatherNow = {
    temperature: $serviceBlock.find(".heading-md").text(),
    humidity: $serviceBlock
      .find('p:contains("Kelembapan Udara")')
      .text()
      .replace("Kelembapan Udara: ", ""),
    windSpeed: $serviceBlock
      .find('p:contains("Kec. Angin")')
      .text()
      .replace("Kec. Angin: ", "")
      .replace("&nbsp;km/jam", " km/jam"),
    windDirection: $serviceBlock
      .find('p:contains("Arah Angin dari")')
      .text()
      .replace("Arah Angin dari: ", ""),
    weather: $serviceBlock.find("div").first().find("p").text(),
  };

  weatherNow.temperature =
    weatherNow.temperature == "" ? null : weatherNow.temperature;
  weatherNow.humidity = weatherNow.humidity == "" ? null : weatherNow.humidity;
  weatherNow.windSpeed =
    weatherNow.windSpeed == "" ? null : weatherNow.windSpeed;
  weatherNow.windDirection =
    weatherNow.windDirection == "" ? null : weatherNow.windDirection;
  weatherNow.weather = weatherNow.weather == "" ? null : weatherNow.weather;

  return { weatherNow, dataWeather: arrayData, images: images };
}

function gempaScraper(html) {
  const $ = cheerio.load(html);

  const earthquakeData = [];

  $("tbody tr").each((index, element) => {
    const $row = $(element);
    const data = {
      time: $row.find("td:nth-child(2)").text(),
      latitude: $row.find("td:nth-child(3)").text(),
      longitude: $row.find("td:nth-child(4)").text(),
      magnitude: $row.find("td:nth-child(5)").text(),
      depth: $row.find("td:nth-child(6)").text(),
      region: $row.find("td:nth-child(7)").text(),
    };
    earthquakeData.push(data);
  });

  return earthquakeData;
}

module.exports = { cuacaScraper, gempaScraper };
