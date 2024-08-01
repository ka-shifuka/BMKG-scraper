import axios from "axios";
import cheerio from "cheerio";

import UrlCuaca from "../data/urlCuaca.js";
import { cuacaScraper } from "../utils/scraperModule.js";

class Cuaca {
	headers = {
		accept:
			"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
		"accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
		"cache-control": "max-age=0",
		"cf-ipcountry": "ID",
		"sec-ch-ua":
			'"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
		"sec-ch-ua-mobile": "?1",
		"sec-ch-ua-platform": '"Android"',
		"sec-fetch-dest": "document",
		"sec-fetch-mode": "navigate",
		"sec-fetch-site": "none",
		"sec-fetch-user": "?1",
		"user-agent":
			"Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36"
	};

	async dkiJakarta(areaID = "501195") {
		const rawData = await axios.get(
			UrlCuaca.profinsi.dkiJakarta + "&AreaID=" + areaID,
			{ headers: this.headers }
		);
		const data = cuacaScraper(rawData.data);

		return data;
	}
	async aceh(areaID = "501397") {
		const rawData = await axios.get(
			UrlCuaca.profinsi.aceh + "&AreaID=" + areaID,
			{
				headers: this.headers
			}
		);
		const data = cuacaScraper(rawData.data);

		return data;
	}
	async kepBangkaBelitung(areaID = "501365") {
		const rawData = await axios.get(
			UrlCuaca.profinsi.kepBangkaBelitung + "&AreaID=" + areaID,
			{
				headers: this.headers
			}
		);
		const data = cuacaScraper(rawData.data);

		return data;
	}
	async yogyakarta(areaID = "501190") {
		const rawData = await axios.get(
			UrlCuaca.profinsi.yogyakarta + "&AreaID=" + areaID,
			{
				headers: this.headers
			}
		);
		const data = cuacaScraper(rawData.data);

		return data;
	}
}

export { Cuaca };
