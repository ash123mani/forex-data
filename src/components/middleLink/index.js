import React from "react";
import HeaderLink from "../headerLink";

class MiddleLink extends React.Component {
  render() {
    return (
      <div>
        <HeaderLink title='Go Get Live Data' classNaam='live-data__link' linkTo='/liveData' />
        <HeaderLink title='I am a history geek' classNaam='history-data__link' linkTo='#' />
      </div>
    );
  }
}

export default MiddleLink;
