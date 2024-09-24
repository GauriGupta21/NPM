import Freecurrencyapi from "@everapi/freecurrencyapi-js";

// Initialize the Freecurrencyapi client
const freecurrencyapi = new Freecurrencyapi(
  "fca_live_vrpwnsz7l02V0MSGqrS2ob4obbietBsdDgNo9boE"
);

// Define the async function for currency conversion
async function convertCurr(fromCurrency, toCurrency, units) {
  try {
    const res = await freecurrencyapi.latest({
      base_currency: fromCurrency,
      currencies: toCurrency,
    });

    const multiplier = res.data[toCurrency];
    
    if (multiplier) {
      return multiplier * units;
    } else {
      throw new Error("Invalid response or currency code.");
    }
  } catch (error) {
    console.error("Error during currency conversion:", error);
  }
}

// Call the function to convert currencies
convertCurr("INR", "USD", 3).then((result) => {
  if (result) {
    console.log(`Converted amount: ${result}`);
  }
});

export default convertCurr;
