import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <div
      style={{
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
        margin: props.margin,
      }}
    >
      Button
    </div>
  );
};

Button.defaultProps = {
  margin: "10px",
};

Button.propTypes = {
  width: PropTypes.number.isRequired,
  margin: PropTypes.string,
};

export default Button;
