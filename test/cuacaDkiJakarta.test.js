import { expect } from "chai";
import { Cuaca } from "../src/index.js";
import { areaID } from "../src/index.js";

describe("test cuaca dki jakarta scraper", function () {
	it("should return weather data form dkiJakarta method", async function () {
		const cuaca = new Cuaca();

		const cuacaDkiJakarta = await cuaca.dkiJakarta(
			areaID.dkiJakarta.kabKepulauanSeribu.kepulauanSeribuUtara
		);


		expect(cuacaDkiJakarta[0]).to.be.an("object");
		expect(cuacaDkiJakarta[0]).to.have.property("time").that.is.a("string");
		expect(cuacaDkiJakarta[0])
			.to.have.property("temperature")
			.that.is.a("string");
		expect(cuacaDkiJakarta[0]).to.have.property("humidity").that.is.a("string");
		expect(cuacaDkiJakarta[0])
			.to.have.property("windSpeed")
			.that.is.a("string");
		expect(cuacaDkiJakarta[0])
			.to.have.property("windDirection")
			.that.is.a("string");
	});
});
