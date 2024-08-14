import { gempaScraper } from "../utils/scraperModule.js";
import axios from "axios";

const url = "https://www.bmkg.go.id/gempabumi-terkini.html";

class Earthquake {
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
      "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
  };

  async now() {
    const rawData = await axios.get(url, { headers: this.headers });

    const data = gempaScraper(rawData.data);
    return data[0];
  }

  async list() {
    const rawData = await axios.get(url, { headers: this.headers });

    const data = gempaScraper(rawData.data);
    return data;
  }
}

export { Earthquake };
