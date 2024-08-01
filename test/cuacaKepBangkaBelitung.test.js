import { expect } from "chai";
import { Cuaca } from "../src/index.js";

describe("test cuaca kep. bangka belitung scraper", function () {
	it("should return weather data form kepBangkaBelitung method", async function () {
		const cuaca = new Cuaca();
		const cuacaKapBangkaBelitung = await cuaca.kepBangkaBelitung();

		expect(cuacaKapBangkaBelitung[0]).to.be.an("object");
		expect(cuacaKapBangkaBelitung[0])
			.to.have.property("time")
			.that.is.a("string");
		expect(cuacaKapBangkaBelitung[0])
			.to.have.property("temperature")
			.that.is.a("string");
		expect(cuacaKapBangkaBelitung[0])
			.to.have.property("humidity")
			.that.is.a("string");
		expect(cuacaKapBangkaBelitung[0])
			.to.have.property("windSpeed")
			.that.is.a("string");
		expect(cuacaKapBangkaBelitung[0])
			.to.have.property("windDirection")
			.that.is.a("string");
	});
});
