import React from "react";

const HeaderItems = ({ name, Icon }) => {
  return (
    <div className="text-white flex gap-5 items-center  font-semibold cursor-pointer text=[18px] hover:underline underline-offset-8">
      <Icon className="h-5 w-5" />

      <h1 className="text-white">{name}</h1>
    </div>
  );
};

export default HeaderItems;
