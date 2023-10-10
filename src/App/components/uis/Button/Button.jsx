import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Button.css";

const Button = (props) => {
  const [isClick, setisClick] = useState(false);
  useEffect(() => {
    setTimeout(() => {}, 350);
  }, [isClick]);
  return (
    <button
      type={props.type}
      className={`${style.Button}${isClick ? "" + style.clicked : ""}`}
      onClick={() => {
        setisClick(!isClick);
        if (undefined !== props.click) {
          props.click();
        }
      }}
    >
      {props.text}
      {props.children}
    </button>
  );
};

Button.propTypes = {
  click: PropTypes.func,
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
};
export default Button;
