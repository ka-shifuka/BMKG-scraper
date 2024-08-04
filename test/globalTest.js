import { Cuaca } from "../src/index.js";
import { areaID } from "../src/index.js";

(async function () {
	const cuaca = new Cuaca();
	const dataCuaca = await cuaca.ntb();

	console.log(dataCuaca);
})();
