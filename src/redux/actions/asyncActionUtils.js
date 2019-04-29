import { status } from "./_constants";

const getAsyncAction = ({ actionTypePrefix, asyncFunc }) => {
  const actionTypeStart = actionTypePrefix + status.START;
  const actionTypeSuccess = actionTypePrefix + status.SUCCESS;
  const actionTypeFailure = actionTypePrefix + status.FAILURE;

  const startAction = () => {
    return {
      type: actionTypeStart
    };
  };

  const successAction = payload => {
    return {
      type: actionTypeSuccess,
      payload
    };
  };

  const failureAction = error => {
    return {
      type: actionTypeFailure,
      payload: error
    };
  };

  const asyncAction = args => {
    return dispatch => {
      console.log("args from asynCaction is", args);
      dispatch(startAction());
      asyncFunc(args)
        .then(res => {
          console.log("respons is", res);
          if (res.status === 200) {
            console.log("typechecking", typeof res.data);
            dispatch(successAction(res.data));
          } else {
            throw new Error(res);
          }
        })
        .catch(err => {
          dispatch(failureAction(err));
        });
    };
  };

  return asyncAction;
};

export default getAsyncAction;
