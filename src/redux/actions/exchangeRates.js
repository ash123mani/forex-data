import { actionTypes, prefixes } from "./_constants";
import getAsyncAction from "./asyncActionUtils";
import apis from "../../api/exchangeRates";

export const fetchExchangeRates = getAsyncAction({
  actionTypePrefix: prefixes.EXCHANGE_RATE + actionTypes.FETCH,
  asyncFunc: apis.fetchExchangeRates
});
