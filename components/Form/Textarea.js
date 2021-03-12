import React from "react";

const TextArea = (props) => {
  return (
    <textarea
      className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200
    border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
      {...props}
    />
  );
};

export default TextArea;
