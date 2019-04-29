import React from "react";
import HeaderLink from "../headerLink";
import TagLine from "../tagLine";

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <HeaderLink title='Forex in Forest' classNaam='home-link' linkTo='/' />
        <TagLine classNaam='header-tagline' text='Learn to walk the way of forex in forest.' />
        <HeaderLink title='About Us' classNaam='about-link ' linkTo='#' />
      </div>
    );
  }
}

export default Header;
