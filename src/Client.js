import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import LiveDataConatiner from "./containers/liveData";

const Client = () => {
  return (
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/liveData' component={LiveDataConatiner} />
    </Switch>
  );
};

export default Client;
