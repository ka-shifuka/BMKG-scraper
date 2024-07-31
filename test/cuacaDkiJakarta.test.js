import { expect } from "chai";
import { Cuaca } from "../src/index.js";

describe("test cuaca jakarta scraper", function () {
	it("should return weather data from dkiJakarta method", async function () {
		const cuaca = new Cuaca();
		const cuacaJakarta = await cuaca.dkiJakarta("jakarta");

		expect(cuacaJakarta[0]).to.have.property("time");
		expect(cuacaJakarta[0]).to.have.property("temperature");
		expect(cuacaJakarta[0]).to.have.property("humidity");
		expect(cuacaJakarta[0]).to.have.property("windSpeed");
		expect(cuacaJakarta[0]).to.have.property("windDirection");
	});
});
