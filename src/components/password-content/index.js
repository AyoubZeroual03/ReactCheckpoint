/**
 * This is the password content component its role is to display generated password
 * It expects password prop and display its content in a div with the className="password"
 */
import React from "react";
import PropTypes from "prop-types";
import "./style.css";
export const PasswordContent = ({ password }) => {
  return <div className="password">{password}</div>;
};

PasswordContent.propTypes = {
  password: PropTypes.string.isRequired,
};
