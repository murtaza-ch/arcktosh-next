import React from "react";

const Heading = ({ children }) => {
  return (
    <div className="m-6">
      <div className="bg-gray-200 rounded-full p-4 w-full flex justify-center items-center">
        <h1 className="font-semibold text-gray-600 text-xl">{children}</h1>
      </div>
    </div>
  );
};

export default Heading;
