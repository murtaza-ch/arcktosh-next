import React from "react";

const ProfileIcon = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="font-bold text-gray-500">Murtaza</span>
      <div className="rounded-full bg-green-700 right-2">
        <img
          className="w-10 h-10 rounded-full m-1"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </div>
  );
};

export default ProfileIcon;
