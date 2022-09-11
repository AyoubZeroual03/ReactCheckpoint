/**
 * This is the password wrapper component
 * it represents the div that contains both the generated password and  the button responsible
 * for geneating new password
 * This component expects two props:
 * password is the actual generated password (it will be passed from here to the password-content component)
 * genratePassword is the function responsible for genrating new password(it will be passed to the button component)
 */
import React from "react";
import PropTypes from "prop-types";
import { PasswordContent } from "../password-content";
import { PasswordGenBtn } from "../generat-btn";
import "./style.css";
export const PasswordWrapper = ({ password, generatePassword }) => {
  return (
    <div className="wrapper">
      <PasswordContent password={password} />
      <PasswordGenBtn generatePassword={generatePassword} />
    </div>
  );
};

PasswordWrapper.propTypes = {
  password: PropTypes.string.isRequired,
  generatePassword: PropTypes.func.isRequired,
};
