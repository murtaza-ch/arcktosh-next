import React from "react";

const FileUpload = ({ handleAttach }) => {
  return (
    <div className="w-full">
      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400 font-semibold">
        Atachments
      </label>
      <div className="bg-gray-200 flex justify-between p-1 rounded-md">
        <div className="w-3/6">
          <label className="w-full flex flex-col items-center px-4 py-3 bg-white text-blue rounded-md shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-gray-300 hover:text-white">
            <span className="text-gray-500 font-semibold">Choose a file</span>
            <input type="file" onChange={handleAttach} className="hidden" />
          </label>
        </div>
        <div className="w-3/6 flex justify-center items-center">
          <h2 className="text-gray-400 font-semibold">Something</h2>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
