import { combineReducers } from "redux";

import initialState from "./initialState";
import { prefixes } from "../actions/_constants";

import getAsyncActionReducers from "./asyncActionReducer";

const exchangeRatesReducer = getAsyncActionReducers({
  actionTypePrefix: prefixes.EXCHANGE_RATE,
  objectInitialState: initialState.exchangeRates,
  isFetchingInitialState: initialState.isFetchingExchangeRates
});

export default combineReducers({
  exchangeRates: exchangeRatesReducer.objectsReducer,

  isFetchingExchangeRates: exchangeRatesReducer.isFetchingReducer
});
