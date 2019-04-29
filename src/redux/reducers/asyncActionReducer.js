import { actionTypes, status } from "../actions/_constants";

const FETCH_SUCCESS = actionTypes.FETCH + status.SUCCESS;
const FETCH_START = actionTypes.FETCH + status.START;
const FETCH_FAILURE = actionTypes.FETCH + status.FAILURE;

export default ({ actionTypePrefix, objectInitialState, isFetchingInitialState }) => ({
  objectsReducer: (state = objectInitialState, action) => {
    switch (action.type) {
      case actionTypePrefix + FETCH_SUCCESS:
        return Object.assign({}, state, action.payload);
      default:
        return state;
    }
  },

  isFetchingReducer: (state = isFetchingInitialState, action) => {
    switch (action.type) {
      case actionTypePrefix + FETCH_SUCCESS || actionTypePrefix + FETCH_FAILURE:
        return false;
      case actionTypePrefix + FETCH_START:
        return true;
      default:
        return state;
    }
  }
});
