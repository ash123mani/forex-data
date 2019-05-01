import { actionTypes, prefixes } from "./_constants";
import getAsyncAction from "./asyncActionUtils";
import apis from "../../api/intraDay";

export const fetchIntraDay = getAsyncAction({
  actionTypePrefix: prefixes.INTRA_DAY + actionTypes.FETCH,
  asyncFunc: apis.fetchIntraDay
});

export const setTimeInterval = interval => {
  console.log("from setInterval", interval);
  return {
    type: prefixes.INTRA_DAY + actionTypes.INTERVAL,
    payload: interval
  };
};
