import { expect } from "chai";
import { Cuaca } from "../src/index.js";

describe("test cuaca aceh scraper", function () {
	it("should return weather data form aceh method", async function () {
		const cuaca = new Cuaca();
		const cuacaYogyakarta = await cuaca.yogyakarta();

		expect(cuacaYogyakarta[0]).to.be.an("object");
		expect(cuacaYogyakarta[0]).to.have.property("time").that.is.a("string");
		expect(cuacaYogyakarta[0])
			.to.have.property("temperature")
			.that.is.a("string");
		expect(cuacaYogyakarta[0]).to.have.property("humidity").that.is.a("string");
		expect(cuacaYogyakarta[0])
			.to.have.property("windSpeed")
			.that.is.a("string");
		expect(cuacaYogyakarta[0])
			.to.have.property("windDirection")
			.that.is.a("string");
	});
});
