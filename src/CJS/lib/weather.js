const axios = require("axios")
const { cuacaScraper } = require("../utils/scraperModule.js");

const url = "https://www.bmkg.go.id/cuaca/prakiraan-cuaca.bmkg?AreaID=";

class Weather {
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

  async dkiJakarta(areaID = "501195") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async aceh(areaID = "501397") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async kepBangkaBelitung(areaID = "501365") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async yogyakarta(areaID = "501190") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async jawaBarat(areaID = "501212") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async jawaTimur(areaID = "501306") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async kalimantanSelatan(areaID = "501325") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async kalimantanTimur(areaID = "501354") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async kepRiau(areaID = "501371") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async maluku(areaID = "501382") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async ntb(areaID = "501421") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async papua(areaID = "501447") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async riau(areaID = "501478") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async sulawesiSelata(areaID = "501495") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async sulawesiTenggara(areaID = "5013053") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async sumateraBarat(areaID = "501545") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async sumateraUtara(areaID = "501580") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async bali(areaID = "501164") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async banten(areaID = "5008773") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async bengkulu(areaID = "501178") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async jambi(areaID = "501205") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async jawaTengah(areaID = "501262") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async kalimantanBarat(areaID = "501315") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async kalimantanTengah(areaID = "501342") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async kalimantanUtara(areaID = "501359") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async lampung(areaID = "501373") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async malukuUtara(areaID = "5002253") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async ntt(areaID = "501434") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async papuaBarat(areaID = "501467") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async sulawesiBarat(areaID = "501485") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async sulawesiTengah(areaID = "1200106") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async sulawesiUtara(areaID = "501534") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
  async sumateraSelatan(areaID = "501568") {
    const rawData = await axios.get(url + areaID, { headers: this.headers });
    const data = cuacaScraper(rawData.data);

    return data;
  }
}

module.exports = { Weather };
