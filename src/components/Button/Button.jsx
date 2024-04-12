import React from "react";
import PropTypes from "prop-types";
import "./SignupWidget.css";

// import styles
import styles from "./Button.module.css";

// import dependencies
import { clsx } from "clsx";
import Link from "next/link";

export const Button = ({ href, color, disabled, handleClick, children, customClasses, ...props }) => {
  const classes = clsx(
    styles.button,
    {
      // colors
      [styles.buttonBlack]: color === "black",
      [styles.buttonWhite]: color === "white",
      // disabled
      [styles.buttonDisabled]: disabled,
    },
    // custom classes
    customClasses
  );
  //Email
  if (href) {
    return (
      <Link href={disabled ? "" : href} onClick={handleClick} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} onClick={handleClick} className={classes} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  color: PropTypes.oneOf(["black", "white"]),
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  customClasses: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  color: "black",
  size: "lg",
  href: undefined,
  disabled: undefined,
  customClasses: undefined,
  handleClick: undefined,
  children: undefined,
};

export default Button;
