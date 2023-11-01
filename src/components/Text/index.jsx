import React from "react";

const sizeClasses = {
  txtGilroyMedium32: "font-gilroy font-medium",
  txtInterRegular40: "font-inter font-normal",
  txtGilroyMedium30: "font-gilroy font-medium",
  txtInterSemiBold36: "font-inter font-semibold",
  txtGilroyBold20: "font-bold font-gilroy",
  txtInterSemiBold48: "font-inter font-semibold",
  txtGilroyMedium24: "font-gilroy font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
