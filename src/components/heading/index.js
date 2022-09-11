/**
 * This is the heading component
 * its role is to display the heading title of our webpage
 * it expects name to be passed to it as a prop
 */
import React from "react";
import PropTypes from "prop-types";
import "./style.css";
export const Heading = ({ name = "unknown" }) => {
  return (
    <h1 className="heading">
      Welcome {name} Click to generate a random password
    </h1>
  );
};

Heading.propTypes = {
  name: PropTypes.string.isRequired,
};
