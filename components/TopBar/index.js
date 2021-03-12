import BarButtons from "./BarButtons";
import ProfileIcon from "./ProfileIcon";
import React from "react";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center m-6">
      <BarButtons />
      <ProfileIcon />
    </div>
  );
};

export default TopBar;
