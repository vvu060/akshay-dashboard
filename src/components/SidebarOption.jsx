import React from "react";

const SidebarOption = ({ sidebarItem }) => {
  return (
    <div className="mb-4">
      <h4 className="text-[10px] font-extrabold text-gray-500 mb-4 uppercase tracking-widest ml-5">
        {sidebarItem.optionName}
      </h4>
      {sidebarItem.optionItems.map((option) => (
        <div
          className={`flex h-12 gap-x-6 items-center justify-start pl-5 ${
            option.active ? "bg-gray-200 rounded-r-xl" : "bg-white"
          } hover:bg-gray-100 hover:cursor-pointer`}
          key={option.name}
        >
          <img className="h-6 w-6" src={option.icon} alt={option.alt} />
          <span className="text-base text-gray-700 font-bold tracking-wider">
            {option.name}
          </span>

          {option.newTag && (
            <span className="bg-green-400 px-2 text-gray-100 text-sm rounded-2xl">
              {option.newTag}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarOption;
