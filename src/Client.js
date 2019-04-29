import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import LiveData from "./components/liveData";

const Client = () => {
  return (
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/liveData' component={LiveData} />
    </Switch>
  );
};

export default Client;
