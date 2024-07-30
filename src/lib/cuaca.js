import axios from 'axios';
import cheerio from 'cheerio';
import UrlCuaca from '../data/cuaca.js';

class Cuaca {
	async jakarta() {
		const rawData = await axios.get(UrlCuaca.profinsi.jakarta);
		const $ = cheerio.load(rawData.data);

		const forecast = [];
		$('#TabPaneCuaca1 .cuaca-flex-child').each((i, el) => {
			let time = $(el).find('h2.kota').text();
			let temperature = $(el).find('h2.heading-md').text();
			let humidityElement = $(el).find('p:contains("%")');
			let humidity = humidityElement.text();

			let windElement = $(el).find('p:contains("km/jam")');
			let windText = windElement.text();
			let regex = /(\d+)\s(km\/jam)(.*)/;
			let result = regex.exec(windText);
			let windSpeed = result[1];
			let windDirection = result[3];

			forecast.push({
				time,
				temperature,
				humidity,
				windSpeed :windSpeed+ " km/jam",
				windDirection
			});
		});

		console.log(forecast);
	}
}

export { Cuaca };
