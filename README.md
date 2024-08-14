### welcom to bmkg-scraper

how to install

```bash
npm install bmkg-scraper

```

how to use it 
```javascript
import { BMKGEarthquake, BMKGWeather, BMKGAreaID } from "../src/index.js";

(async function () {
  const weather = new BMKGWeather();
  const ponorogo = BMKGAreaID.jawaTimur.kabPonorogo.ponorogo;

  const ponorogoWheather = await weather.jawaTimur(ponorogo);
  console.log(ponorogoWheather);

  const earthquake = new BMKGEarthquake();
  const listEarthquake = await earthquake.list();
  console.log(listEarthquake);
})();
```
