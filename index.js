import Freecurrencyapi from "@everapi/freecurrencyapi-js";
const freecurrencyapi = new Freecurrencyapi(
  "fca_live_vrpwnsz7l02V0MSGqrS2ob4obbietBsdDgNo9boE"
);
convertCurr("INR", "USD", 3);
async function convertCurr(fromCurrency, toCurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const multiplier = res.data[toCurrency];
  //   console.log(multiplier);
  return multiplier * units;
}
