import { Cuaca } from "../src/index.js";

(async function () {
  const cuaca = new Cuaca()
  
  console.log({aceh: await cuaca.aceh("banda_aceh")})
  console.log({jakarta: await cuaca.dkiJakarta("Kota_Jakarta_Barat")})
})();
