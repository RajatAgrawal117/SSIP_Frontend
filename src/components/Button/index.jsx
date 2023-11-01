import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-md" };
const variants = {
  fill: {
    lime_100: "bg-lime-100 shadow-bs text-gray-800",
    blue_gray_100: "bg-blue_gray-100 shadow-bs text-gray-800",
  },
};
const sizes = { xs: "p-[5px]", sm: "p-[26px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "fill",
  color = "blue_gray_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["lime_100", "blue_gray_100"]),
};

export { Button };
