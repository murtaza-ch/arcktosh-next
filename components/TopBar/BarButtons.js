import React from "react";

const BarButtons = () => {
  return (
    <div className="flex items-center w-9/12 gap-1 bg-gray-300 rounded-full p-1">
      <button
        className={
          "border-none hover:shadow-xl outline-none focus:outline-none hover:bg-green-700 bg-green-800 text-gray-300 font-semibold rounded-full px-12 py-3"
        }
      >
        Dashboard
      </button>
      <button
        className={
          "border-none hover:shadow-xl outline-none focus:outline-none hover:bg-green-700 hover:text-gray-200 text-gray-500 font-semibold rounded-full px-12 py-3"
        }
      >
        My Tickets
      </button>
      <button
        className={
          "border-none hover:shadow-xl outline-none focus:outline-none hover:bg-green-700 text-gray-500 hover:text-gray-200 font-semibold rounded-full px-12 py-3"
        }
      >
        Ticket Response
      </button>
    </div>
  );
};

export default BarButtons;
