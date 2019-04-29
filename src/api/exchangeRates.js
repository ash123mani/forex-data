import axios from "axios";
import { baseUrl, apiKey } from "./_constants";

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
