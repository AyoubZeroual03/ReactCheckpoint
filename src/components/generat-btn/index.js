import React from "react";
import "./style.css";
export const PasswordGenBtn = ({ generatePassword }) => {
  return (
    <button className="generate-password" onClick={() => generatePassword()}>
      Generate password
    </button>
  );
};
