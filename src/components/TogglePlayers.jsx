import React from "react";

const TogglePlayers = ({ toggle, setToggle, choosePlayer }) => {
  return (
    <div className="flex justify-between items-center mb-13 gap-2 px-2">
      <p className=" font-bold text-lg md:text-xl">
        {toggle
          ? "Available Players"
          : `Selected Players (${choosePlayer.length}/6)`}
      </p>
      <div className="flex justify-between items-center  ">
        <button
          onClick={() => setToggle(true)}
          className={`py-1.5 px-2 md:px-4 md:py-2 border font-semibold border-blue-400 border-r-0 rounded-l-xl ${toggle ? "bg-amber-400" : ""}`}
        >
          Available
        </button>
        <button
          onClick={() => setToggle(false)}
          className={`py-1.5 px-2 md:px-4 md:py-2 border font-semibold border-blue-400 border-l-0 rounded-r-xl ${toggle ? "" : "bg-amber-400"}`}
        >
          Selected(
          <span className="text-blue-600 font-bold">{choosePlayer.length}</span>
          )
        </button>
      </div>
    </div>
  );
};

export default TogglePlayers;
