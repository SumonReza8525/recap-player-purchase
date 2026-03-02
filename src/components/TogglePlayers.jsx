import React from "react";

const TogglePlayers = ({ toggle, setToggle }) => {
  return (
    <div className="flex justify-between items-center mb-10 gap-2 px-2">
      <p className=" font-bold text-lg md:text-xl">
        {toggle ? "Available Players" : "Selected Players"}
      </p>
      <div className="flex justify-between items-center  ">
        <button
          onClick={() => setToggle(true)}
          className={`py-1.5 px-2 border border-gray-400 border-r-0 rounded-l-xl ${toggle ? "bg-amber-400" : ""}`}
        >
          Available
        </button>
        <button
          onClick={() => setToggle(false)}
          className={`py-1.5 px-2 border border-gray-400 border-l-0 rounded-r-xl ${toggle ? "" : "bg-amber-400"}`}
        >
          Selected(<span>4</span>)
        </button>
      </div>
    </div>
  );
};

export default TogglePlayers;
