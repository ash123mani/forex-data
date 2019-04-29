import React from "react";
import PropTypes from "prop-types";

class TagLine extends React.Component {
  render() {
    return (
      <div className={this.props.classNaam}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

TagLine.propTypes = {
  classNaam: PropTypes.string,
  text: PropTypes.string
};

export default TagLine;
