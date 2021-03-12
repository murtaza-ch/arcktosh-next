import React from "react";

const Input = (props) => {
  const { title } = props;
  return (
    <div className="mb-1">
      <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400 font-semibold">
        {title}
      </label>
      <input
        className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border
         border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
        {...props}
      />
    </div>
  );
};

export default Input;
