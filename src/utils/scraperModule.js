import cheerio from "cheerio";

function cuacaScraper(htmlData) {
	const $ = cheerio.load(htmlData);

	const arrayData = [];
	$("#TabPaneCuaca1 .cuaca-flex-child").each((i, el) => {
		let time = $(el).find("h2.kota").text();
		let temperature = $(el).find("h2.heading-md").text();
		let humidityElement = $(el).find('p:contains("%")');
		let humidity = humidityElement.text();

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

		arrayData.push({
			time,
			temperature,
			humidity,
			windSpeed: windSpeed + " km/jam",
			windDirection
		});
	});
	return arrayData;
}

export { cuacaScraper };
