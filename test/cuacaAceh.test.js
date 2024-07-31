import { expect } from "chai";
import { Cuaca } from "../src/index.js";

describe("test cuaca aceh scraper", function () {
	it("should return weather data for aceh method", async function () {
		const cuaca = new Cuaca();
		const cuacaAceh = await cuaca.aceh("banda_aceh");

		expect(cuacaAceh[0]).to.be.an("object");
		expect(cuacaAceh[0]).to.have.property("time").that.is.a("string");
		expect(cuacaAceh[0]).to.have.property("temperature").that.is.a("string");
		expect(cuacaAceh[0]).to.have.property("humidity").that.is.a("string");
		expect(cuacaAceh[0]).to.have.property("windSpeed").that.is.a("string");
		expect(cuacaAceh[0]).to.have.property("windDirection").that.is.a("string");
	});
});
