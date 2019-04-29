import React, { Component } from "react";
import Header from "./components/header";
import MiddleLink from "./components/middleLink";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <MiddleLink />
      </div>
    );
  }
}

export default App;
