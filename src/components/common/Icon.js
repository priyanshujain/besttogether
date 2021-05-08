import React from "react";
import PropTypes from "prop-types";

const Icon = ({ name, className, onClick = null, style }) => {
  let ext = name.split(".")[1];
  return (
    <img
      style={style}
      src={`/icons/${name}${ext ? "" : ".svg"}`}
      className={className}
      onClick={onClick}
    />
  );
};

export default Icon;
