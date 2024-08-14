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

for more information about BMKGAreaID see [areaid](https://github.com/ka-shifuka/BMKG-scraper/tree/main/src/data/areaIDList)


### info
this package is under development more features in the future
