import axios from "axios";

const baseUrl = "https://www.alphavantage.co/query";
const apiKey = "8WGDVFGC8K7W9T2E";

export default {
  fetchExchangeRates: args => {
    return axios({
      method: "get",
      url: `${baseUrl}?function=CURRENCY_EXCHANGE_RATE&from_currency=${args.fromCurrency}&to_currency=${
        args.toCurrency
      }&apikey=${apiKey}`,
      responseType: JSON
    });
  }
};
