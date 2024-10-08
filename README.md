

 Terraflow-lib

**Terraflow-lib** is an npm package that simplifies currency conversion by utilizing the [FreeCurrencyAPI](https://freecurrencyapi.com/). This package allows you to fetch the latest exchange rates and convert between different currencies with ease.

 Features

- Easy-to-use function for converting between currencies.
- Automatically fetches real-time exchange rates.
- Supports multiple currencies with the FreeCurrencyAPI.
- Lightweight and fast for quick currency conversions.

 Installation

Install the package via npm:

bash
npm install terraflow-lib


 Usage

After installation, you can use the package in your project to perform currency conversions. Below is a step-by-step guide on how to get started:

 1. Import the package:

javascript
import { convertCurr } from 'terraflow-lib';


 2. Set up FreeCurrencyAPI:

Ensure you have your FreeCurrencyAPI key. You can sign up [here](https://freecurrencyapi.com/) to get one. Once you have the key, initialize the API in your code.

javascript
import Freecurrencyapi from '@everapi/freecurrencyapi-js';

// Initialize the FreeCurrencyAPI client
const freecurrencyapi = new Freecurrencyapi('YOUR_API_KEY_HERE');


 3. Perform a Currency Conversion:

You can now use the convertCurr function to convert between two currencies. Pass in the base currency, the target currency, and the number of units to be converted.

javascript
convertCurr("INR", "USD", 3).then(result => {
  console.log(Converted amount: ${result});
});


 Full Example:

javascript
import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import { convertCurr } from 'terraflow-lib';

// Initialize FreeCurrencyAPI with your key
const freecurrencyapi = new Freecurrencyapi('YOUR_API_KEY_HERE');

// Convert 3 INR to USD
convertCurr('INR', 'USD', 3).then(result => {
  console.log(Converted amount: ${result});
});


 API Reference

 convertCurr(fromCurrency: string, toCurrency: string, units: number)

 Parameters:
- fromCurrency: (String) The currency code you are converting from (e.g., "INR").
- toCurrency: (String) The currency code you are converting to (e.g., "USD").
- units: (Number) The number of units of the base currency to be converted.

 Returns:
A promise that resolves to the converted value.

 Example:

javascript
convertCurr("EUR", "GBP", 100).then(result => {
  console.log(Converted amount: ${result});
});


 Error Handling

The function includes basic error handling in case of:
- An invalid response from the API.
- Incorrect currency codes.
- Network-related issues.

Make sure to include a .catch block when using the function to gracefully handle errors.

javascript
convertCurr("XYZ", "ABC", 5)
  .then(result => console.log(Converted amount: ${result}))
  .catch(error => console.error("Error during conversion:", error));


 License

This project is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file for more details.

 Contributing

We welcome contributions! If you'd like to contribute to this project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you'd like to change.

 Bugs and Issues

If you encounter any issues or bugs, please report them via the [GitHub Issues page](https://github.com/GauriGupta21/NPM/issues).

---

 Example Structure of README:

markdown
 Terraflow-lib

**Terraflow-lib** is a currency conversion package built on FreeCurrencyAPI.

 Installation
bash
npm install terraflow-lib


 Usage
javascript
import { convertCurr } from 'terraflow-lib';

convertCurr('INR', 'USD', 3).then(result => {
  console.log(result);
});


 License
Apache 2.0


---

By following this structure, you ensure that users understand how to install, use, and contribute to the package.
