import React from "react";
import "./Button.css";

function Button({ title }) {
  return (
    <div>
      <button className="btn btn-light">{title}</button>
    </div>
  );
}

export default Button;
