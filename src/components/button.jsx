// write button card here
/* components/button.jsx */
import React from "react";
import "./button.css"; // Importing CSS file for styling

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="view-button">
      View Product
    </button>
  );
};

export default Button;
