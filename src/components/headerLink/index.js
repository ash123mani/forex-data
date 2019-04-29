import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class HeaderLink extends React.PureComponent {
  render() {
    const { linkTo, title, classNaam } = this.props;
    return (
      <div className={classNaam}>
        <Link to={linkTo}>{title}</Link>
      </div>
    );
  }
}

HeaderLink.propTypes = {
  classNaam: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string
};

HeaderLink.defaultProps = {
  classNaam: "",
  title: "",
  linkTo: "/"
};

export default HeaderLink;
