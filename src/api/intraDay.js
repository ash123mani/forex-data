import axios from "axios";
import { baseUrl, apiKey } from "./_constants";

export default {
  fetchIntraDay: args => {
    return axios({
      method: "get",
      url: `${baseUrl}?function=FX_INTRADAY&from_symbol=${args.fromCurrency}&to_symbol=${args.toCurrency}&interval=${
        args.timeInterval
      }&apikey=${apiKey}`,
      responseType: JSON
    });
  }
};
