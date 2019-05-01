import { combineReducers } from "redux";

import initialState from "./initialState";
import { prefixes } from "../actions/_constants";

import getAsyncActionReducers from "./asyncActionReducer";

const exchangeRatesReducer = getAsyncActionReducers({
  actionTypePrefix: prefixes.EXCHANGE_RATE,
  objectInitialState: initialState.exchangeRates,
  isFetchingInitialState: initialState.isFetchingExchangeRates
});

const intraDayReducer = getAsyncActionReducers({
  actionTypePrefix: prefixes.INTRA_DAY,
  objectInitialState: initialState.intraDay,
  isFetchingInitialState: initialState.isFetchingIntraDay
});

export default combineReducers({
  exchangeRates: exchangeRatesReducer.objectsReducer,
  intraDay: intraDayReducer.objectsReducer,

  isFetchingIntraDay: intraDayReducer.isFetchingReducer,
  isFetchingExchangeRates: exchangeRatesReducer.isFetchingReducer
});
