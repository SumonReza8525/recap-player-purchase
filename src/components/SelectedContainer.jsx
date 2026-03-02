import React from "react";
import AddedPlayerCard from "./AddedPlayerCard";

const SelectedContainer = ({ choosePlayer }) => {
  return (
    <div className=" w-full  rounded-2xl space-y-4 p-4">
      {choosePlayer.map((p) => (
        <AddedPlayerCard p={p} key={p.id}></AddedPlayerCard>
      ))}
    </div>
  );
};

export default SelectedContainer;
