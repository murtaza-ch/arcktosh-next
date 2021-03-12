import React from "react";

const Button = ({ primary, title }) => {
  const classes = primary
    ? "border-none hover:shadow-xl outline-none focus:outline-none hover:bg-green-700 bg-green-800 text-gray-200 hover:text-gray-200 font-semibold rounded-full px-12 py-3"
    : "border-none hover:shadow-xl outline-none focus:outline-none bg-gray-200 hover:bg-gray-300 text-gray-500 hover:text-gray-400 font-semibold rounded-full px-12 py-3";
  return <button className={classes}>{title}</button>;
};

export default Button;
